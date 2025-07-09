
# 테이블 생성

# CHAR(20) : 글자 길이가 20으로 고정
# -> 3글자만 써도 20글자 용량을 차지함
# VARCHAR(20) : 최대 글자 길이가 20이다
#  -> 3글자 쓰면 3글자 용량만 차지함(20글자 내에서 길이가 조절된다)

# 학생 정보 저장하는 테이블 생성문
CREATE TABLE student(
	STU_NUM INT PRIMARY KEY, 
	# PRIMARY KEY : 중복 데이터 저장 불가, NULL 불가, 테이블당 하나밖에 못 쓴다
	STU_NAME VARCHAR(10),
	KOR_SCORE INT,
	MATH_SCORE INT
);

SELECT * FROM student;
COMMIT;

# 데이터 삽입 문법
# INSERT INTO 테이블명(컬럼들)VALUES(값들);
INSERT INTO student (STU_NUM, STU_NAME, KOR_SCORE, MATH_SCORE)
VALUES (2, '김자바', 80, 90);

# 컬럼명은 반드시 테이블에 정의된 컬럼의 갯수를 맞출 필요가 없다
# 순서도 맞출 필요 없다.
INSERT INTO student (STU_NUM, MATH_SCORE, STU_NAME)
VALUES (3, 100, '이자바');

INSERT INTO student (KOR_SCORE, MATH_SCORE, STU_NUM)
VALUES (60, 70, 4);

# 데이터의 변화가 발생하는 쿼리문(삽입, 삭제, 수정) 실행 시
# 반드시 COMMIT 혹은 ROLLBACK을 진행해야 한다.
ROLLBACK;

# 테이블 삭제 쿼리 : DROP TABLE 테이블명;
# DROP TABLE 하고나면 돌이킬 수 없으니까!!!!! 주의하시긔
# DROP TABLE student;


# 회원 정보 테이블
# 아이디, 비밀번호, 회원이름, 회원 나이, 이메일 정보를 갖고 있다

CREATE TABLE MEMBER(
	MEM_ID VARCHAR(10) PRIMARY KEY, # 중복 X, NULL X
	MEM_PW VARCHAR(10) NOT NULL, # NULL X
	MEM_NAME VARCHAR(10) NOT NULL, 
	MEM_AGE INT,
	MEM_EMAIL VARCHAR(20) UNIQUE 
	# UNIQUE : 중복 허용X, NULL은 가능! NULL은 중복 체크X
	# UNIQUE랑 NOT NULL 둘 다 쓰고 싶으면
	# UNIQUE NOT NULL 이렇게 쉼표없이 나열하면 됨
);

SELECT * FROM MEMBER;
# 아이디 : java
# 비번 : 1111
# 이름 : 김자바
# 나이 : 30
# 이메일 : java@gmail.com
INSERT INTO MEMBER(MEM_ID, MEM_PW, MEM_NAME, MEM_AGE, MEM_EMAIL)
VALUES('java', '1111', '김자바', 30, 'java@gmail.com');

# 테이블 생성문에서 작성한 순서대로 데이터를 삽입하면 컬럼명 생략 가능
INSERT INTO MEMBER VALUES ('JAVA3', '2222', '최자바', 40, 'aaa@gmail.com');
COMMIT;

# 게시판 테이블
# 글번호, 제목, 작성자, 내용, 작성일, 조회수
CREATE TABLE BOARD(
	BOARD_NUM INT PRIMARY KEY AUTO_INCREMENT,
	# INCREMENT : 증가 , AUTO INCREMENT : 자동 증가
	# 딱히 의미없고 그냥 중복만 막기 위한 값이니까 중복되지 않게 증가시키는 값을 넣는다
	# 기본적으로 1부터 들어감
	TITLE VARCHAR(20) NOT NULL,
	WRITER VARCHAR(10) NOT NULL,
	CONTENT VARCHAR(100),
	CREATE_DATE DATETIME DEFAULT SYSDATE(), 
	# SYSDATE() : 시스템의 날짜, 시간대로 설정한다.
	READ_CNT INT DEFAULT 0 # 디폴트는 글자에도 적용할 수 있다
);

INSERT INTO BOARD (TITLE, WRITER) 
VALUES('제목1', '작성자1');

INSERT INTO BOARD (TITLE, WRITER, READ_CNT, CREATE_DATE, BOARD_NUM) 
VALUES('제목1', '작성자1', 5, '2020-10-10 17:50:00', 10);

SELECT * FROM BOARD;
ROLLBACK;







