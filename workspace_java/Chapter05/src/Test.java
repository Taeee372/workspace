import java.util.Arrays;
import java.util.StringTokenizer;

public class Test {
  String title;
  String artist;
  String album;
  int year;
  String[] composer;

  String[] c = new String[3];

  public void printAll(String title, String artist, String album, int year, String[] c){
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.c = c;
  }

  public void setTitle(String title){
    this.title = title;
  }

  public String getTitle(){
    return title;
  }

  public void display(){
    System.out.println("제목 : " + title);
    System.out.println("가수 : " + artist);
    System.out.println("앨범 : " + album);
    System.out.println("년도 : " + year);
    System.out.println("작곡가 : " + Arrays.toString(c));
  }

}
