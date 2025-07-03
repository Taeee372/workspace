-- 이것은 주석입니다.
#이것도 주석입니다.
#실행(F9) : 현재 열려있는 쿼리탭의 모든 쿼리문을 실행
#선택실행(Ctrl + F9) : 드래그한 영역만 실행
#현재쿼리실행(Shift + Ctrl + F9) : 현재 커서가 올라가 있는 쿼리 실행

# 데이터 조회 기본
# 데이터 조회 SQL 문법
# SELECT 조회할 컬럼 FROM 테이블명 [WHERE 조건];
# 1. EMP 테이블에 저장된 사번을 조회
SELECT EMPNO FROM emp;

# 2. EMP 테이블에 저장된 사번과 사원명을 조회
SELECT EMPNO, ENAME FROM emp;

# 3. EMP 테이블에 저장된 사원들의 모든 컬럼 정보 조회
SELECT * FROM emp; 

# 조회는 컬럼 정보만 조회할 수 있는 건 아니다!
SELECT 3 FROM emp;
SELECT 5 FROM dept;
SELECT 3 + 5, 3 FROM emp;
SELECT '홍길동' FROM emp;

# 조회 조건 추가하기
# 사번이 1005 이상인 사원들의 사번, 사원명, 직급을 조회
# 같다(=), 다르다(!=, <>)
SELECT EMPNO, ENAME, JOB FROM emp WHERE EMPNO >= 1005;


# EMP 테이블에서 직급이 사원인 직원들의 사번, 사원명, 급여, 직급을 조회
SELECT EMPNO, ENAME, SAL, JOB 
FROM emp 
WHERE JOB = '사원';

# EMP 테이블에서 급여가 300이상이고, 사번은 1003번 이상인 사원들의
# 모든 컬럼을 조회
# 그리고(AND), 이거나(OR)
SELECT *
FROM emp
WHERE SAL >= 300 
AND EMPNO >= 1003;

# EMP 테이블에서 직급이 사원이 아니고, 급여는 300이상이면서
# 커미션은 NULL인 직원의 모든 정보 조회
# NULL여부는 =, != 등과 같은 등호기호로 판단하지 않는다.
# NULL체크는 IS, IS NOT 키워드를 사용한다.
SELECT *
FROM emp
WHERE JOB != '사원'
AND SAL >= 300
AND COMM IS NULL;



