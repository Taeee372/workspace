public class WorkerTest {
  public static void main(String[] args) {
    Person p = new Person("kim", 20);
    Worker w = new Worker("java company", "dev", p);
    w.printWorker();
  }
}
