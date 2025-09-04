
# 도서 쇼핑몰 프로젝트 테이블

# 1. 회원 테이블
# 2. 도서 카테고리 테이블
# 3. 도서 정보 테이블 
# 4. 장바구니 테이블
# 5. 구매 테이블


# 1. 회원 테이블
CREATE TABLE SHOP_MEMBER (
	MEM_ID VARCHAR(20) PRIMARY KEY
	, MEM_NAME VARCHAR(20) NOT NULL
	, MEM_TEL VARCHAR(20)     # 010-1111-2222
	, MEM_ADDR VARCHAR(50)
	, ADDR_DETAIL VARCHAR(50)
	, MEM_EMAIL VARCHAR(50) UNIQUE
	, MEM_PW VARCHAR(20) NOT NULL
	, MEM_ROLE VARCHAR(10) NOT NULL DEFAULT 'USER'  # 관리자 : ADMIN, 일반 고객 : USER
	, JOIN_DATE DATETIME DEFAULT SYSDATE()
);

SELECT * FROM shop_member;

SELECT MEM_ID
FROM shop_member
WHERE MEM_ID = 'java';

UPDATE shop_member
SET 
	MEM_PW = '1111'
	, MEM_ROLE = 'ADMIN'
WHERE MEM_ID = 'admin'; 
COMMIT;


# 2. 도서 카테고리 테이블
CREATE TABLE BOOK_CATEGORY (
	CATE_NUM INT PRIMARY KEY AUTO_INCREMENT
	, CATE_NAME VARCHAR(20) NOT NULL UNIQUE
);

INSERT INTO BOOK_CATEGORY VALUES (1, '소설');
INSERT INTO BOOK_CATEGORY VALUES (2, '인터넷/IT');
INSERT INTO BOOK_CATEGORY VALUES (3, '자기계발');
COMMIT;

SELECT * FROM BOOK_CATEGORY;


# 3. 도서 정보 테이블 
CREATE TABLE book (
	BOOK_NUM INT PRIMARY KEY AUTO_INCREMENT
	, TITLE VARCHAR(20) NOT NULL
	, PUBLISHER VARCHAR(20) NOT NULL
	, PRICE INT NOT NULL
	, REG_DATE DATETIME DEFAULT SYSDATE()  # 쇼핑몰에 상품 등록한 날짜
	, BOOK_INTRO VARCHAR(50)
	, CATE_NUM INT REFERENCES BOOK_CATEGORY(CATE_NUM)
); 

SELECT * FROM book;


# 도서 이미지 정보 테이블
CREATE TABLE BOOK_IMG (
	IMG_NUM INT PRIMARY KEY AUTO_INCREMENT
	, ORIGIN_IMG_NAME VARCHAR(100)   	# 원본 파일명 
	, ATTACHED_IMG_NAME VARCHAR(100) 	# 첨부된 파일명 => 중복 파일명을 피하기 위한 짜가리 이름
	, BOOK_NUM INT REFERENCES book (BOOK_NUM) ON DELETE CASCADE # 이미지의 원본 도서 번호
	, IS_MAIN VARCHAR(3) # 메인이미지 : 'Y', 서브이미지 : 'N'
); 

SELECT * FROM ;        

# 4. 장바구니 테이블
CREATE TABLE SHOP_CART (
	CART_NUM INT PRIMARY KEY AUTO_INCREMENT
		, BOOK_NUM INT REFERENCES book(BOOK_NUM)
		, CART_CNT INT NOT NULL # 장바구니에 담은 도서 수량
		, MEM_ID VARCHAR(20) REFERENCES shop_member(MEM_ID)
		, TOTAL_PRICE INT NOT NULL
		, CART_DATE DATETIME DEFAULT SYSDATE()
); 

SELECT * FROM shop_cart;



# 5. 구매 정보 테이블
CREATE TABLE SHOP_BUY (
	BUY_NUM INT PRIMARY KEY AUTO_INCREMENT
	, BOOK_NUM INT REFERENCES book (BOOK_NUM)
	, MEM_ID VARCHAR(20) REFERENCES shop_member (MEM_ID)
	, BUY_DATE DATETIME DEFAULT SYSDATE()
	, BUY_CNT INT
	, ORDER_NUM INT # 주문번호, 한 번에 여러 상품을 구매하면 동일한 주문번호를 가짐 
);


# BuyList를 위한 쿼리
SELECT ORDER_NUM
	, MAX(MEM_ID) MEM_ID # GROUP BY(단일행 함수 조건)에 맞게 MAX로 짜부시켜주기  
				# -> 그래야 오류 안 난다 (마리아디비는 봐주지만 오라클 등은 봐주지 않음..)
	, SUM((SELECT PRICE 
			FROM book 
			WHERE BOOK_NUM = shop_buy.BOOK_NUM) * BUY_CNT) PRICE
	, MAX(BUY_DATE) BUY_DATE
	, CASE COUNT(ORDER_NUM) - 1
		WHEN 0 THEN MAX((SELECT TITLE 
								FROM book 
								WHERE BOOK_NUM = shop_buy.BOOK_NUM))	
		ELSE CONCAT(MAX((SELECT TITLE
								FROM book 
								WHERE BOOK_NUM = shop_buy.BOOK_NUM))
								, ' 외 '
								, COUNT(ORDER_NUM) - 1
								, '건')
		END TITLE
FROM shop_buy
GROUP BY ORDER_NUM
ORDER BY BUY_DATE DESC;

SELECT * FROM SHOP_BUY;


# FROM -> WHERE -> SELECT -> ORDER BY 순으로 해석

# 장바구니에서 구매하기 쿼리 예시
# cartNum = [1, 2, 3]
# INSERT INTO SHOP_BUY (BOOK_NUM, MEM_ID, BUY_CNT) 
# VALUES 
# (
# 	(SELECT BOOK_NUM FROM shop_cart WHERE CART_NUM = 1)
#	 , 'user'
#	 , (SELECT CART_CNT FROM shop_cart WHERE CART_NUM = 1) 
# )
# , (CART_NUM이 2번일 때)
# , (CART_NUM이 2번일 때);


INSERT INTO shop_cart (BOOK_NUM
	, CART_CNT
	, MEM_ID
	, TOTAL_PRICE
	) 
VALUES (
	27
	, 2
	, 
	'user'
	, (SELECT PRICE
		FROM BOOK
		WHERE BOOK_NUM = 27) * 3
	);

# 장바구니에 저장된 상품명, 가격, 수량, 총가격, 등록일 조회
SELECT CART_NUM
	, CART_CNT
	, TOTAL_PRICE
	, CART_DATE
	, TITLE
	, PRICE
	, C.BOOK_NUM
FROM shop_cart C INNER JOIN book B
ON C.BOOK_NUM = B.BOOK_NUM
WHERE MEM_ID = 'user'
ORDER BY CART_DATE DESC;


# 내 장바구니에 상품이 담겨있는지
SELECT MEM_ID # 조회하는 컬럼은 뭐든 상관없음 
   				 # 나온다> 3번 상품 담겨있음/ 안 나온다> 3번 상품이 담겨있지 않음
FROM shop_cart
WHERE BOOK_NUM = 26
AND MEM_ID = 'hong';

UPDATE shop_cart
SET
	CART_CNT = CART_CNT + 3
	, TOTAL_PRICE = (SELECT PRICE
							FROM BOOK
							WHERE BOOK_NUM = 26) * (CART_CNT + 3) 
							# 도서의 단가 * 업데이트 된 최종 수량
WHERE MEM_ID = 'hong'
AND BOOK_NUM = 26;

# 장바구니에 존재 여부 : 책번호, 회원아이디
#INSERT : 책번호, 회원아이디, 수량
#UPDATE : 책번호, 회원아이디, 수량


#BOOK_IMG 테이블에 데이터 추가
INSERT INTO book_img (ORIGIN_IMG_NAME, ATTACHED_IMG_NAME, BOOK_NUM, IS_MAIN) 
VALUES 
('abc.jpg', 'aaa-bbb.jpg', 26, 'Y'),
('abc.jpg', 'aaa-bbb.jpg', 26, 'Y'),
('abc.jpg', 'aaa-bbb.jpg', 26, 'Y'); # 데이터 한 번에 여러 개 넣는 방법

SELECT * FROM book_img;
SELECT * FROM shop_cart;
SELECT * FROM book;

# 다음에 들어갈 BOOK_NUM을 조회 (최대 BOOK_NUM + 1)
SELECT MAX(BOOK_NUM) + 1 FROM book;
SELECT IFNULL(MAX(BOOK_NUM), 0) + 1 FROM book; 
# ->MAX(BOOK_NUM)의 값이 NULL일 경우 0으로 치환해서 계산


SELECT BOOK.BOOK_NUM
	, TITLE
	, PRICE
	, ATTACHED_IMG_NAME
FROM book INNER JOIN book_img
ON book.BOOK_NUM = book_img.BOOK_NUM
WHERE IS_MAIN = 'Y';

SELECT CART_NUM
   , CART_CNT
   , TOTAL_PRICE
   , CART_DATE
   , TITLE
   , PRICE
   , C.BOOK_NUM
   , IS_MAIN
   , ATTACHED_IMG_NAME
FROM shop_cart C INNER JOIN book B 
ON C.BOOK_NUM = B.BOOK_NUM
INNER JOIN book_img I
ON C.BOOK_NUM = I.BOOK_NUM
WHERE MEM_ID = 'user'
AND IS_MAIN = 'Y'
ORDER BY CART_DATE DESC;

SELECT * FROM shop_cart;
SELECT * FROM shop_member;
SELECT * FROM BOOK_CATEGORY;
SELECT * FROM book_img;

# BuyListModal을 위한 쿼리
SELECT BUY_NUM
	, BUY_CNT
	, TITLE
	, PRICE
	, PRICE * BUY_CNT AS TOTAL_PRICE	
	, ATTACHED_IMG_NAME
FROM shop_buy S INNER JOIN book B
ON S.BOOK_NUM = B.BOOK_NUM
INNER JOIN BOOK_IMG I
ON I.BOOK_NUM = S.BOOK_NUM
WHERE IS_MAIN = 'Y'
AND ORDER_NUM = 3;



