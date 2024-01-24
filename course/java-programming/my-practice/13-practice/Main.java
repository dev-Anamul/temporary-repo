
class HondaCity {
    static int wheels = 4;
    String color = "White";

    static public void start() {
        System.out.println("Honda City Started " + wheels);
    }
}

class FinalClass {
    final int wheels = 4;

    final void start() {
        System.out.println("Honda City Started " + wheels);
    }
}

class SingleTon {

    private static SingleTon obj = null;

    private SingleTon() {
    }

    public static SingleTon getInstance() {
        if (obj == null)
            obj = new SingleTon();
        return obj;
    }
}

class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");

        System.out.println(HondaCity.wheels);
        HondaCity.start();

        FinalClass obj = new FinalClass();
        obj.start();

        SingleTon obj1 = SingleTon.getInstance();
        SingleTon obj2 = SingleTon.getInstance();
        SingleTon obj3 = SingleTon.getInstance();

        System.out.println(obj1);
        System.out.println(obj2);
        System.out.println(obj3);

        if (obj1 == obj2) {
            System.out.println("Same");
        } else {
            System.out.println("Not Same");
        }
    }
}