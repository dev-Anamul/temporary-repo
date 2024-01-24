
class Rectangle {
    private int length;
    private int breadth;

    public Rectangle(int length, int breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    public int getArea() {
        return this.length * this.breadth;
    }

    public int getPerimeter() {
        return 2 * (this.length + this.breadth);
    }

    public boolean isSquare() {
        return this.length == this.breadth;
    }
}

class Main {
    public static void main(String[] args) {

        Rectangle rectangle = new Rectangle(10, 10);

        System.out.println("Area: " + rectangle.getArea());
        System.out.println("Perimeter: " + rectangle.getPerimeter());
        System.out.println("Is Square: " + rectangle.isSquare());

    }
}