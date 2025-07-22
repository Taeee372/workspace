# 날짜 관련 함수 
SELECT NOW(), SYSDATE(), CURRENT_DATE(), CURRENT_TIME();

SELECT YEAR(NOW()), MONTH(NOW()), DAY(NOW());


#EMP 테이블에서 2005년 이후에 입사한 사원들의 모든 정보를 조회 
SELECT *
FROM emp
WHERE YEAR(HIREDATE) >= 2005;

SELECT # 얘네도 시험
	HIREDATE 
	, TO_CHAR(HIREDATE, 'YYYY.MM.DD.HH24:MI:SS')
	, TO_CHAR(HIREDATE, 'YYYY') # 문자로 나옴 2025
	, YEAR(HIREDATE) # 숫자로 나옴 2,025
	, TO_CHAR(HIREDATE, 'YYYY-MM-DD')
	, TO_CHAR(HIREDATE, 'YYYYMMDD')
	#, TO_CHAT(HIREDATE, 'YYYY년 MM월 DD일')
	, CONCAT(
		TO_CHAR(HIREDATE, 'YYYY'), 
		'년',
		TO_CHAR(HIREDATE, 'MM'), 
		'월',
		TO_CHAR(HIREDATE, 'DD'), 
		'일'
		) AS 입사일
FROM emp;

#IF문 - 시험 미출제
SELECT IF(10 > 2, '참', '거짓');

#IFNULL() -> NULL을 특정 값으로 치환 - 얘는 시험 출제
SELECT COMM, IFNULL(COMM,0) FROM emp;

# 6. 사원의 사번, 이름, 부서번호, 부서명을 조회해보자. 
# 부서명은 부서번호가 10일 때는 ‘인사부’, 20일 때는 ‘영업부’, 
# 30일 때는 ‘개발부’, 그 외의 값은 ‘생산부’로 조회되어야 한다. 
# 조인 사용하는 문제 아님. CASE 사용. 이런 형식도 시험 출제

SELECT 
	EMPNO, 
	ENAME, 
	DEPTNO,
	CASE DEPTNO
		WHEN 10 THEN '인사부'
		WHEN 20 THEN '영업부'
		WHEN 30 THEN '생산부'
		ELSE '생산부' END 부서명
FROM emp;









