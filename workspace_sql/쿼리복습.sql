# 도서정보를 관리하는 BOOK 테이블을 만들어보자.
# BOOK 테이블은 도서번호(INT), 도서명, 도서 카테고리, 저자,  
# 도서가격, 출판일, 대여횟수 등을 데이터로 갖는다. 
# PK는 도서번호로 지정하고, 도서번호는 자동으로 1부터 1씩 증가된 값을 갖는다. 
# 도서명과 도서 카테고리, 저자는 NULL데이터를 가질 수 없으며,  
# 도서명은 또한 중복될 수 없다. 
# 출판일을 도서 정보를 등록하는 날짜 및 시간 값을 가질 수 있도록 한다. 

# 1. BOOK 테이블이 아래 데이터를 갖도록 데이터를 삽입하시오.
# 2. 윤여행 저자가 쓴 도서의 가격을 1000원 인상하고, 대여횟수를 5씩 증가시키세요.
 
 CREATE TABLE BOOK(
 	BOOK_NUM INT PRIMARY KEY AUTO_INCREMENT,
 	BOOK_NAME VARCHAR(30) NOT NULL UNIQUE, 
 	BOOK_CATEGORY VARCHAR(10) NOT NULL,
 	BOOK_WRITER VARCHAR(10) NOT NULL,
 	BOOK_PRICE INT,
 	BOOK_DATE DATETIME DEFAULT SYSDATE(),
 	RENT_CNT INT
 );
 
 SELECT * FROM BOOK;
 
 INSERT INTO BOOK (BOOK_NAME, BOOK_CATEGORY, BOOK_WRITER, BOOK_PRICE, RENT_CNT) 
 VALUES ('자바 기초', 'IT/인터넷', '김자바', 10000, 10);
 INSERT INTO BOOK (BOOK_NAME, BOOK_CATEGORY, BOOK_WRITER, BOOK_PRICE, RENT_CNT) 
 VALUES ('일본여행기', '에세이', '윤여행', 7000, 5);
 INSERT INTO BOOK (BOOK_NAME, BOOK_CATEGORY, BOOK_WRITER, BOOK_PRICE, RENT_CNT) 
 VALUES ('제테크 시작하기', '자기계발', '김자바', 15000, 15);
 INSERT INTO BOOK (BOOK_NAME, BOOK_CATEGORY, BOOK_WRITER, BOOK_PRICE, RENT_CNT) 
 VALUES ('리액트 따라하기', 'IT/인터넷', '김자바', 20000, 3);
 INSERT INTO BOOK (BOOK_NAME, BOOK_CATEGORY, BOOK_WRITER, BOOK_PRICE, RENT_CNT) 
 VALUES ('직장인 월급관리', '자기계발', '윤여행', 13000, 8);
 
 
UPDATE BOOK
SET
BOOK_PRICE = BOOK_PRICE + 1000,
RENT_CNT = RENT_CNT + 5
WHERE BOOK_WRITER = '윤여행';
 
COMMIT;
 
 
 
 
 