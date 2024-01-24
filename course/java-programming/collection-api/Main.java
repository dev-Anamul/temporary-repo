import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.TreeSet;

class Main {
    public static void main(String[] args) {

        ArrayList<Integer> list = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6, 7, 8, 9));
        list.add(10);
        list.add(4, 30);

        list.forEach(x -> {
            System.out.println(x);
        });

        Iterator<Integer> it = list.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }

        list.forEach(System.out::println);
        System.out.println(list.get(1));

        // hash set
        HashSet<Integer> hs = new HashSet<>();
        hs.add(10);
        hs.add(20);
        hs.add(30);

        System.out.println(hs);

        TreeSet<Integer> ts = new TreeSet<>();
        ts.add(40);
        System.out.println(ts.first());
    }
}