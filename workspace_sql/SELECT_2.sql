# 복습
SELECT * FROM emp;

# 1. EMP 테이블에 저장된 사원 중 부서번호가 30인 사원의 사번, 이름, 부서번호 조회
SELECT EMPNO, ENAME, DEPTNO
FROM emp
WHERE DEPTNO = 30;

# 2. EMP 테이블에서 직급이 대리가 아니거나, 급여가 600 이하인 사원들의
#    사번, 사원명, 직급, 급여를 조회
SELECT EMPNO, ENAME, JOB, SAL
FROM emp
WHERE JOB != '대리' OR SAL <= 600;

# 3. 직급이 대리 또는 사원이면서 급여는 400을 초과하는 직원들의
#    모든 컬럼 정보 조회
SELECT *
FROM emp
WHERE (JOB = '대리' OR JOB = '사원') AND SAL > 400;

# 4. 급여가 800이하인 직원 중에서 커미션이 NULL이 아닌 직원의 모든 컬럼 조회
SELECT *
FROM emp
WHERE SAL <= 800 AND COMM IS NOT NULL;



#------------------------------------------------------------------------------



# 별칭을 사용한 조회
# 조회 시 컬럼명 뒤에 AS 키워드를 붙이고, 별칭을 작성하면 조회 시 별칭이 적용된다.
# 별칭을 부여할 때는 AS 키워드는 생략 가능하다.
SELECT EMPNO AS NO, ENAME AS 이름, SAL 급여
FROM emp;

# ,를 찍지 않았으니 EMPNO, ENAME을 조회한 게 아니라 EMPNO의 별칭을 ENAME으로 준 것
SELECT EMPNO ENAME  
FROM emp;

# EMP 테이블에서 급여가 300이상이고, 600이하인 사원들의 사번, 사원명, 급여를 조회
SELECT EMPNO, ENAME, SAL # BETWEEEN보다는 얘가 속도가 더 빠르다
FROM emp
WHERE SAL >= 300 AND SAL <= 600;

# 위 조건은 BETWEEN A AND B 연산자를 이용하기도 함
SELECT EMPNO, ENAME, SAL
FROM emp
WHERE SAL BETWEEN 300 AND 600;

# EMP 테이블에서 급여가 400이거나 500이거나 600인 사원들의 모든 컬럼 정보 조회
SELECT *
FROM emp
WHERE SAL = 400 OR SAL = 500 OR SAL = 600;

SELECT * # OR이 많을 때는 IN을 쓰는 게 더 빠르다
FROM emp
WHERE SAL IN (400, 500, 600);

# 데이터 정렬
# ORDER BY 정렬할 컬럼명 정렬방식;
# 정렬방식 : 오름차순(ASC, 생략가능), 내림차순(DESC)

# 모든 사원의 모든 컬럼 정보를 조회하되, 급여기준 내림차순 정렬
SELECT *
FROM emp
ORDER BY  SAL DESC;

#부서번호 기준 오름차순 정렬
SELECT * 
FROM emp
ORDER BY DEPTNO ASC;

SELECT * 
FROM emp
ORDER BY DEPTNO; # ASC 생략 가능

# 직급이 사장인 사원을 제외한 모든 사원의 모든 컬럼 정보를 조회,
# 직급 기준 내림차순으로 정렬 
SELECT *
FROM emp
WHERE JOB != '사장'
ORDER BY JOB DESC;

# 모든 컬럼을 조회하되, 직급기준 오름차순 정렬 후 직급이 동일하면
# 급여기준 내림차순 정렬하여 조회
SELECT * 
FROM emp
ORDER BY JOB ASC, SAL DESC;

# LIKE 연산자와 와일드카드
# 와일드 카드 : %, _
# % : 글자 수 제한 없는 어떤 글자
# _ : 한 글자로 이루어진 어떤 글자
# 
# ex)
# '_이_' : 가운데 글자가 '이'인 세 글자 
# '__김' : 마지막 글자가 '김'인 세 글자
# '%김' : 김으로 끝나는 모든 글자, '김김', '김김김', '김'
# '-김%' : 두 번째 글자가 '김'인 모든 글자

# 이름에 '이'라는 글자가 포함된 사원들의 모든 컬럼 정보 조회
SELECT *
FROM emp
WHERE ENAME LIKE '%이%';











