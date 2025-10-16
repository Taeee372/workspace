SELECT * FROM FARM_STATUS;

SELECT * FROM CHICKEN_FARM;

SELECT * FROM chicken;

SELECT * FROM CHICKEN_BATCH;

SELECT * FROM DANGER_NOTICE;

SELECT * FROM farm_management;

SELECT * FROM MEMBER;

SELECT * FROM ENV_SETTINGS;

SELECT * FROM chicken_weight_history;

SELECT * FROM chicken_inoculation_history;


#배치 1인 닭들의 몸무게를 몸무게 히스토리에서 보기
-- 배치 2025-001의 닭들 몸무게 히스토리 조회
SELECT 
    cwh.CHICKEN_ID,
    c.BATCH_ID,
    cwh.RAW_WEIGHT,
    cwh.REC_TIME,
    cwh.REC_AGE
FROM chicken_weight_history cwh
JOIN chicken c ON cwh.CHICKEN_ID = c.CHICKEN_ID
WHERE c.BATCH_ID = '2025-012';



INSERT INTO chicken_farm VALUES (1, '1번 양계장');


# 배치 번호 생성
SELECT CONCAT(
   YEAR(NOW()),
   '-',
   LPAD(IFNULL(MAX(CONVERT(SUBSTRING(BATCH_ID, 6), UNSIGNED)), 0) + 1, 3, '0')
)
FROM CHICKEN_BATCH
WHERE BATCH_ID LIKE CONCAT(YEAR(NOW()), '-%');


# 자정 기준으로 나이 한 살 증가, 나이에 따른 성장 단계 자동 지정
UPDATE CHICKEN C INNER JOIN CHICKEN_BATCH B
ON C.BATCH_ID = B.BATCH_ID
SET
   C.AGE = DATEDIFF(CURRENT_DATE(), B.ENTRY_DATE) + 1,
   C.GROWTH_STAGE =
       CASE
           WHEN DATEDIFF(CURRENT_DATE(), B.ENTRY_DATE) + 1 BETWEEN 1 AND 14 THEN 'CHICK'
           WHEN DATEDIFF(CURRENT_DATE(), B.ENTRY_DATE) + 1 BETWEEN 15 AND 28 THEN 'GROWER'
           WHEN DATEDIFF(CURRENT_DATE(), B.ENTRY_DATE) + 1 > 28 THEN 'FINISHER'
           ELSE C.GROWTH_STAGE 
			  # 어떤 조건에도 맞지 않는다면 C.GROWTH_STAGE 기존 값 유지
			  # (데이터 무결성을 위해 안전장치 추가)
       END;

INSERT INTO chicken_inoculation (CHICKEN_ID) VALUES (1);

SELECT * FROM TH_SENSOR;

