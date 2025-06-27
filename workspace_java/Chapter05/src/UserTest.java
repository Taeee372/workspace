import java.util.Arrays;

public class UserTest {
  public static void main(String[] args) {

    //User를 5명 저장할 수 있는 배열 users를 생성하세요
    User[] users = new User[5]; //User 자료형 다섯 개를 저장할 수 있는 공간을 생성

    User user1 = new User(1, "kim", 20);
    User user2 = new User(2, "lee", 30);
    User user3 = new User(3, "hong", 40);
    User user4 = new User(4, "choi", 50);
    User user5 = new User(5, "park", 60);
    users[0] = user1;
    users[1] = user2;
    users[2] = user3;
    users[3] = user4;
    users[4] = user5;

    //1. 배열에 저장된 모든 유저의 회원번호, 이름, 나이를 출력
    for (int i = 0; i < users.length; i++){
      users[i].display();
    }

    //2. 위 문제를 for-each문으로 푸세요
    for(User e: users){
      e.display();
    }

    System.out.println();
    //3. 배열에 저장된 모든 회원의 이름을 출력
    for (int i = 0; i < users.length; i++){
      System.out.println(users[i].getName());
    }

    //4. 3번 문제를 for-each로 풀어보세요
    for (User e : users){
      System.out.println(e.getName());
    }

    //5. 배열에 저장된 모든 회원 중 나이가 30세를 초과한 회원의 모든 정보를 출력
    for (int i = 0; i < users.length; i++){
      if (users[i].getAge() > 30) {
        users[i].display();
      }
    }
    System.out.println();

    //6. 5번 문제 for-each
    for(User e : users){
      if (e.getAge() > 30){
        e.display();
      }
    }
  }
}
