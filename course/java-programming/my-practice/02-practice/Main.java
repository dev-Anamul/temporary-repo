import java.util.Scanner;

class Main {
    public static void main(String[] args) {

        Scanner s = new Scanner(System.in);

        System.out.print("Enter a number between 1 and 10 - ");
        int i = s.nextInt();

        while (i < 1 || i > 10) {
            System.out.print(i + " not between 1 and 10. Try again! - ");
            i = s.nextInt();
        }
        s.close();
        System.out.println(i + " is between 1 and 10. Thank You.");

    }
}
