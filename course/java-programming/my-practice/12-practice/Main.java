class Outer {
    int x = 10;

    class Inner {
        int y = 5;

        public void innerMethod() {
            System.out.println(x + " " + y);
        }
    }

    public void outerMethod() {
        Inner inner = new Inner();
        inner.innerMethod();
    }

}

abstract class MyDisplay {
    public abstract void display();
}

class AnonymousInnerClass {
    int x = 10;

    MyDisplay myDisplay = new MyDisplay() {
        @Override
        public void display() {
            System.out.println("Anonymous Inner Class" + x);
        }
    };

    public void display() {
        myDisplay.display();
    }
}

class StaticOuter {
    static int x = 10;
    int y = 5;

    static class StaticInner {
        int z = 15;
        int z1;

        public StaticInner() {
            z1 = 20;
        }

        public void innerMethod() {
            System.out.println(x);
        }
    }
}

class Main {
    public static void main(String[] args) {
        Outer outer = new Outer();
        outer.outerMethod();

        Outer.Inner inner = new Outer().new Inner();
        inner.innerMethod();

        AnonymousInnerClass anonymousInnerClass = new AnonymousInnerClass();
        anonymousInnerClass.display();

        StaticOuter.StaticInner staticInner = new StaticOuter.StaticInner();
        staticInner.innerMethod();
    }
}