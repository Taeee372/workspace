public class SongTest {
  public static void main(String[] args) {
  Song song = new Song();
  String[] com = {"김씨", "이씨", "박씨"};
  song.setSong("제목", " 가수", "1집", 2025, com);
  song.printSong();
  }


}
