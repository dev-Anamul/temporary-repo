import java.util.ArrayList;
import java.util.Collection;

class Main {
    public static void main(String[] args) {

        /// collection doesn't work with index if we need index use list interface
        /// rather collection
        Collection<Integer> values = new ArrayList<>();
        values.add(3);
    }
}