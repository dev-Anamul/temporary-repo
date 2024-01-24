import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

class Main {
    public static void main(String[] args) {

        try (FileOutputStream fos = new FileOutputStream("test.txt")) {
            fos.write("Hello World".getBytes());

        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        try (FileInputStream fis = new FileInputStream("test.txt")) {
            int x = 0;
            while ((x = fis.read()) != -1) {
                System.out.print((char) x);
            }
            System.out.println("");
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}