import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

class Main {
    public static void main(String[] args) {
        List<Integer> values = new ArrayList<>();
        List<Integer> values2 = new LinkedList<>(values);

        System.out.println(values2);

    }
}