public class ManTest {
  public static void main(String[] args) {
    Man m1 = new Man();
    Man m2 = new Man();

    m1.setName("홍길동");
    m1.setAge(17);
    m1.setAdress("조선시대");

    m2.setInfo("고길동", 47, "둘리시대");

    m1.printInfo();
    System.out.println();
    m2.printInfo();

    //나이값만 출력
    System.out.println(m1.age); //이거 안 씀
    System.out.println(m1.getAge());

    //m1 객체의 이름이 kim이면 "참" 문자열 출력
    if (m1.name.equals("홍길동")) {   //그리하여 이것도 안 씀
      System.out.println("참");

      if (m1.getName().equals("홍길동")) {   //이걸로 쓴다
        System.out.println("참");

      }
    }

  }
  }
