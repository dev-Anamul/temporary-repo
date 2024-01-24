
@FunctionalInterface
interface MyInterface {
    void display(String name);
}

@FunctionalInterface
interface Addition {
    int add(int... numbers);
}

@FunctionalInterface
interface Subtraction {
    int subtract(int a, int b);
}

class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");

        MyInterface myInterface = (s) -> System.out.println(s);
        myInterface.display("Hello World from Lambda");

        Addition addition = (numbers) -> {
            int sum = 0;
            for (int number : numbers) {
                sum += number;
            }
            return sum;
        };
        System.out.println(addition.add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

        Subtraction subtraction = (a, b) -> a - b;
        System.out.println(subtraction.subtract(10, 5));
    }
}