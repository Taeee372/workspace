package com.green.backend_shop.util;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

//파일 업로드 기능을 제공하는 클래스
public class FileUploadUtil {

  //단일 파일 업로드 기능
  public static void fileUpload(MultipartFile img){  //static이 붙어있으면 객체 생성을 하지 않고 클래스명.메서드명으로 바로 호출할 수 있다
    // 1) 파일 업로드 경로 지정
    String uploadPath = "D:\\01-STUDY\\dev\\workspace\\workspace_spring\\backend_shop\\src\\main\\resources\\upload\\";

    // 2) 파일명 중복방지를 위해 업로드용 파일명을 세팅
    // ex) 원본 파일명 : java.jpg -> kahldhdfs.jpg
    // ex) 원본 파일명 : java.txt -> werdhdfs.txt    / attachedFileName 부분 : werdhdfs , extension(확장자)부분 : .txt
    String attachedFileName = UUID.randomUUID().toString();

    //String testName = "abc.jpg";
    //testName.substring(3); //.jpg
    //testName.lastIndexOf("."); //특정 문자의 가장 마지막 index를 파악

    //원본 파일의 확장자 추출
    int index = img.getOriginalFilename().lastIndexOf(".");
    String extension = img.getOriginalFilename().substring(index);

    //완성된 업로드 할 파일명
    attachedFileName = attachedFileName + extension;


    // 3) 파일 업로드
    //java.io.File
    //파일이 생성될 경로와 파일명을 세팅
    File f = new File(uploadPath + attachedFileName);

    //세팅된 경로와 파일명을 실제 파일로 변환
    //transferTo(첨부하는 기능)는 예외처리를 무조건 해줘야 함 => 경로 따라갔는데 파일이 없으면 우짤건데?
    try{ //리액트에서 then().catch()랑 비슷한 기능
      img.transferTo(f); //리액트에서 갖고 온 mainImg 이미지를 f 경로 안에 있는 파일로 바꾸겠습니다.
    }catch (Exception e){
      System.out.println(e);
    }
  }

  //파일 다중 업로드 기능
  public static void multipleFileUpload(){

  }

}
