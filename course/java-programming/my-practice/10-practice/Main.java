
abstract class Parent {
    public void print() {
        System.out.println("Parent");
    }

    abstract public void print2();
}

class Child extends Parent {

    @Override
    public void print2() {
        System.out.println("Child");
    }

    public void print3() {
        System.out.println("print 3 in Child");

    }

}

class Super {
    public void print() {
        System.out.println("Super");
    }

    public void print2() {
        System.out.println("Super2");
    }
}

class Sub extends Super {

    public void print3() {
        System.out.println("print 3 in Sub");

    }
}

abstract class Shape {
    abstract public double perimeter();

    abstract public double area();
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double perimeter() {
        return 2 * Math.PI * radius;
    }

    @Override
    public double area() {
        return Math.PI * Math.pow(radius, 2);
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public double perimeter() {
        return 2 * (length + width);
    }

    @Override
    public double area() {
        return length * width;
    }
}

class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");

        Parent c = new Child();
        c.print2();

        Super s = new Sub();
        s.print2();

        Shape c1 = new Circle(5);
        System.out.println(c1.perimeter());
        System.out.println(c1.area());

        Shape r1 = new Rectangle(5, 10);
        System.out.println(r1.perimeter());
        System.out.println(r1.area());
    }
}