
interface Test {
    void test();

    void test2();
}

class TestImpl implements Test {

    @Override
    public void test() {
        System.out.println("test one");
    }

    @Override
    public void test2() {
        System.out.println("test two");

    }

}

class Phone {
    public void call() {
        System.out.println("Phone call");
    }

    public void sms() {
        System.out.println("Phone sms");
    }
}

interface ICamera {
    void click();

    void record();
}

interface IMusicPlayer {
    void play();

    void stop();
}

class SmartPhone extends Phone implements ICamera, IMusicPlayer {

    @Override
    public void click() {
        System.out.println("click");
    }

    @Override
    public void record() {
        System.out.println("record");
    }

    @Override
    public void play() {
        System.out.println("play");
    }

    @Override
    public void stop() {
        System.out.println("stop");
    }
}

interface Member {
    void callback();
}

class Store {
    Member members[] = new Member[5];
    int count = 0;

    public void register(Member member) {
        this.members[count++] = member;
    }

    public void doWork() {
        for (Member m : members) {
            m.callback();
        }
    }
}

class CustomerA implements Member {
    private String name;

    public CustomerA(String name) {
        this.name = name;
    }

    @Override
    public void callback() {
        System.out.println("Callback is calling in customer " + this.name);
    }

}

class Main {
    public static void main(String[] args) {
        Test test = new TestImpl();
        test.test();
        test.test2();

        SmartPhone smartPhone = new SmartPhone();
        smartPhone.call();
        smartPhone.sms();
        smartPhone.click();
        smartPhone.record();
        smartPhone.play();
        smartPhone.stop();

        Store store = new Store();
        store.register(new CustomerA("A"));
        store.register(new CustomerA("B"));
        store.register(new CustomerA("C"));
        store.register(new CustomerA("D"));
        store.register(new CustomerA("E"));
        store.doWork();

    }
}