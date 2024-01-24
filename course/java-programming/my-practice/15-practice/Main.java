
class CustomException extends Exception {
    CustomException(String s) {
        super(s);
    }
}

class Shape {
    int length, breadth;

    Shape(int length, int breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    int area() throws CustomException {
        if (length < 0 || breadth < 0)
            throw new CustomException("Negative Value");
        return length * breadth;
    }
}

class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");

        int a = 123, b = 3;
        try {

            int c = a / b;
            System.out.println(c);

        } catch (ArithmeticException e) {
            System.out.println(e);
        } finally {
            System.out.println("finally");
        }
        System.out.println("done");

        Shape s = new Shape(-2, 20);
        try {
            System.out.println(s.area());
        } catch (CustomException e) {
            System.out.println(e);
        }

    }
}