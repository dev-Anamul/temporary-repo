package calculations.add;

public class Add {
    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public int add(int... args) {
        int sum = 0;
        for (int i = 0; i < args.length; i++) {
            sum += args[i];
        }

        return sum;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public double add(double a, double b, double c) {
        return a + b + c;
    }

    public double add(double... args) {
        double sum = 0;
        for (int i = 0; i < args.length; i++) {
            sum += args[i];
        }

        return sum;
    }

    public float add(float a, float b) {
        return a + b;
    }

    public float add(float a, float b, float c) {
        return a + b + c;
    }

    public float add(float... args) {
        float sum = 0;
        for (int i = 0; i < args.length; i++) {
            sum += args[i];
        }

        return sum;
    }

}
