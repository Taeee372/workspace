import java.util.Arrays;

public class Song {
  String title;
  String artist;
  String album;
  int year;
  String[] composer;

  //모든  필드를 변경하는 메서드
  public void setSong(String title1, String artist1, String album1, int year1, String[] composesr1){
    title = title1;
    artist = artist1;
    album = album1;
    year = year1;
    composer = composesr1;
  }

  //노래의 모든 정보를 출력하는 메서드
  public void printSong(){
    System.out.println("노래 : " + title);
    System.out.println("가수 : " + artist);
    System.out.println("앨범 : " + album);
    System.out.println("발행연도 : " + year);
    System.out.println("작곡가 : " + Arrays.toString(composer));
  }
}
