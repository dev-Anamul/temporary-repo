
class Main {

    static int gcd(int m, int n) {
        while (m != n) {
            if (m > n)
                m = m - n;
            if (n > m)
                n = n - m;

        }
        return m;
    }

    static double area(double radius) {
        return Math.PI * radius * radius;
    }

    static double area(double length, double width) {
        return length * width;
    }

    static int reverse(int n) {
        String revers = "";

        while (n != 0) {
            int remind = n % 10;
            n = n / 10;
            revers = revers + remind;
        }

        return Integer.parseInt(revers);
    }

    static void reverse(int n[]) {

        int start = 0;
        int end = n.length - 1;

        while (start < end) {
            int temp = n[start];
            n[start] = n[end];
            n[end] = temp;

            start++;
            end--;
        }

    }

    static int max(int... x) {

        int max = 0;

        for (int num : x) {
            max = Math.max(num, max);
        }

        return max;
    }

    public static void main(String[] args) {

        System.out.println(gcd(15, 11));

        System.out.println(reverse(345));

        System.out.println(max(5, 6, 4, 3, 7, 5, 2, 4));

        int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8 };

        reverse(arr);

        for (int n : arr) {
            // System.out.println(n);
        }

        System.out.println("\u00BB");

        int i = 0;

        do {
            System.out.println(i);
            i++;

        } while (i <= 5);

    }
}