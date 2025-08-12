
# 조인(JOIN)

# --사전 지식--
# 사원번호, 사원명, 급여, 부서번호를 조회
SELECT EMPNO, ENAME, SAL, DEPTNO
FROM emp;

# 위 쿼리문에서 생략된 부분을 살리면...
SELECT EMP.EMPNO, EMP.ENAME, EMP.SAL, EMP.DEPTNO
FROM emp;

# 별칭을 테이블명에 적용시키면...
SELECT EMPNO, ENAME, SAL 급여, DEPTNO AS 부서번호
FROM emp 부서정보; # 테이블명에 별칭 적용시킬 때는 AS 안 쓰는 걸 권장

# 위 두 내용을 함께 사용하면 다음과 같다.
SELECT E.EMPNO, E.ENAME, E.SAL, E.DEPTNO
FROM emp E; # 여기서 EMP.EMPNO라고 쓰면 오류남
# 쿼리문에서 별칭은 자바처럼 바로 알아볼 수 있게 구구절절 적는 게 아니라 
# 짧게 준다

# --- 조인의 기본문법(CROSS JOIN) ---
# 사번, 사원명, 급여, 부서명, 부서번호를 조회
SELECT * FROM emp; # 14
SELECT * FROM dept; # 4

# CROSS JOIN
SELECT EMPNO, ENAME, SAL, DNAME, emp.DEPTNO, dept.DEPTNO
FROM emp JOIN dept; # 56 -> 가짜 데이터 42개도 같이 조회돼버림

# INNER JOIN -> CROSS JOIN에서 조건을 더 명확하게 해준 것
# JOIN 조건은 WHERE절에 WHERE 대신 ON을 넣는다(WHERE넣어도 실행은 됨)
SELECT EMPNO, ENAME, SAL, DNAME, emp.DEPTNO, dept.DEPTNO
FROM emp INNER JOIN dept
ON emp.DEPTNO = dept.DEPTNO; # 14 -> 진짜 데이터만을 조회

# 급여가 300이상인 사원들의 사번, 사원명, 급여, 부서번호, 부서명, 부서지역을
# 조회하되, 급여 기준 내림차순으로 정렬
SELECT EMPNO, ENAME, SAL, E.DEPTNO, DNAME, LOC
FROM emp E INNER JOIN dept D
ON E.DEPTNO = D.DEPTNO
WHERE SAL >= 300
ORDER BY SAL DESC;






