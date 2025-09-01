-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        11.8.2-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 study_db.book 구조 내보내기
CREATE TABLE IF NOT EXISTS `book` (
  `BOOK_NUM` int(11) NOT NULL AUTO_INCREMENT,
  `TITLE` varchar(20) NOT NULL,
  `PUBLISHER` varchar(20) NOT NULL,
  `PRICE` int(11) NOT NULL,
  `REG_DATE` datetime DEFAULT sysdate(),
  `BOOK_INTRO` varchar(50) DEFAULT NULL,
  `CATE_NUM` int(11) DEFAULT NULL,
  PRIMARY KEY (`BOOK_NUM`),
  KEY `CATE_NUM` (`CATE_NUM`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`CATE_NUM`) REFERENCES `book_category` (`CATE_NUM`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 study_db.book:~8 rows (대략적) 내보내기
INSERT INTO `book` (`BOOK_NUM`, `TITLE`, `PUBLISHER`, `PRICE`, `REG_DATE`, `BOOK_INTRO`, `CATE_NUM`) VALUES
	(1, '가장 빨리 만나는 자바', 'IT출판사', 15000, '2025-08-26 16:39:07', '자바책입니다.', 2),
	(2, '딥러닝', 'IT출판사', 17000, '2025-08-26 16:40:05', '딥러닝에 대해', 2),
	(3, '마인크래프트', 'IT출판사', 13000, '2025-08-26 16:41:09', '나만의 마인크래프트 월드 제작', 2),
	(4, '엑셀실무', 'IT출판사', 20000, '2025-08-26 16:42:11', '직장인을 위한 실무 엑셀', 2),
	(5, '여행 일본어', '트래블', 16000, '2025-08-26 16:43:40', '여행에 필요한 기초 일본어', 3),
	(6, '홍콩 마카오', '트래블', 16500, '2025-08-26 16:45:04', '홍콩 마카오의 최신 여행 코스', 3),
	(7, '유지보수 가능한 코딩의 기술 자바편', 'IT출판사', 23000, '2025-08-26 16:47:27', '코딩의 기술 자바편', 2),
	(8, '차트분석 무작정 따라하기', '길벗', 25000, '2025-08-26 16:48:21', '백만장자를 향하여', 3),
	(9, '컴퓨터활용능력 2급 필기', '길벗', 30000, '2025-08-26 16:49:21', '컴퓨터활용능력 2급 필기 대비', 2),
	(10, '자바로 배우는 리팩토링 입문', '길벗', 26000, '2025-08-26 16:50:46', '자바로 배우는 리팩토링 입문책입니다.', 2);

-- 테이블 study_db.book_img 구조 내보내기
CREATE TABLE IF NOT EXISTS `book_img` (
  `IMG_NUM` int(11) NOT NULL AUTO_INCREMENT,
  `ORIGIN_IMG_NAME` varchar(100) DEFAULT NULL,
  `ATTACHED_IMG_NAME` varchar(100) DEFAULT NULL,
  `BOOK_NUM` int(11) DEFAULT NULL,
  `IS_MAIN` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`IMG_NUM`),
  KEY `BOOK_NUM` (`BOOK_NUM`),
  CONSTRAINT `book_img_ibfk_1` FOREIGN KEY (`BOOK_NUM`) REFERENCES `book` (`BOOK_NUM`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 study_db.book_img:~20 rows (대략적) 내보내기
INSERT INTO `book_img` (`IMG_NUM`, `ORIGIN_IMG_NAME`, `ATTACHED_IMG_NAME`, `BOOK_NUM`, `IS_MAIN`) VALUES
	(10, '가장 빨리 만나는 자바_상세1.jpg', '372197ea-e46f-48ad-9336-3627e33f3e00.jpg', 1, 'N'),
	(11, '가장 빨리 만나는 자바_메인.jpg', '8d8b35d7-da71-4dd9-8804-93875f9c891a.jpg', 1, 'Y'),
	(12, '모두의 딥러닝_상세.jpg', '049e9396-e1b7-4ff6-9367-456e2316fe41.jpg', 2, 'N'),
	(13, '모두의 딥러닝_메인.jpg', '32cdbd7e-eb35-4dbf-8761-49115b9ae4dd.jpg', 2, 'Y'),
	(14, '마인_상세1.jpg', '79a58516-e326-498a-9533-5b5e05678adb.jpg', 3, 'N'),
	(15, '마인_메인.jpg', 'ef3e88af-6390-47bf-9c2c-fb858c85a20c.jpg', 3, 'Y'),
	(16, '엑셀실무_상세1.jpg', '202979c1-73ca-4a7b-97af-23a64d747324.jpg', 4, 'N'),
	(17, '엑셀실무_메인.pg.jpg', '6cf3a4fc-a1ac-4f1a-a0a4-cfd0e4e44fb7.jpg', 4, 'Y'),
	(18, '여행 일본어_상세.jpg', 'f954ecdd-523d-49b3-b0b6-d9478d8a821c.jpg', 5, 'N'),
	(19, '여행 일본어_메인.jpg', 'e25caaea-8d93-4aeb-8f9e-1034688c0272.jpg', 5, 'Y'),
	(20, '무작정 따라가기 홍콩 마카오_상세.jpg', '7c43eeda-329a-4f69-954a-471c2536bc23.jpg', 6, 'N'),
	(21, '무작정 따라가기 홍콩 마카오.jpg', '90b81f65-8c13-42a7-b0b4-b99495561749.jpg', 6, 'Y'),
	(22, '유지보수자바_상세1.jpg', 'ce7e15b4-c547-4246-b8cc-ffaf40f2c4fd.jpg', 7, 'N'),
	(23, '유지보수자바_메인.jpg', '4e6d83b0-d73d-4df0-893a-78c559516f97.jpg', 7, 'Y'),
	(24, '차트분석 무작정 따라하기_상세1.jpg', '35d6e400-9ef7-458b-bfae-f690d6e702cb.jpg', 8, 'N'),
	(25, '차트분석 무작정 따라하기_메인.jpg', 'ac3e50d8-a1ce-428a-8973-ccd2f2ca716c.jpg', 8, 'Y'),
	(26, '컴퓨터 활용능력 2급 실기_상세1.jpg', 'cbb67674-cbbc-4b5a-9a59-c78dcb10f771.jpg', 9, 'N'),
	(27, '컴퓨터 활용능력 2급 실기_메인.jpg', '5f6381b7-21f9-4dd8-9396-b3abe5d62c89.jpg', 9, 'Y'),
	(28, '자바 리팩토링_상세1.jpg', '73f53207-99ac-4998-88c3-fee0f3394030.jpg', 10, 'N'),
	(29, '자바 리팩토링_메인.jpg', '315a2787-76df-41ae-98ef-974fdb75b62e.jpg', 10, 'Y');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
