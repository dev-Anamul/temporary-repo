
class MyData<T> {
    private T data;

    public MyData(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }
}

@SuppressWarnings("unchecked")
class GenClass<T> {
    private T data[] = (T[]) new Object[10];
    private int index = 0;

    public void append(T data) {
        this.data[index++] = data;
    }

    public T get(int index) {
        return data[index];
    }

    public void display() {
        for (int i = 0; i < index; i++) {
            System.out.println(data[i]);
        }
    }

}

class Main {

    @SafeVarargs
    static <E> void print(E... elements) {
        for (E element : elements) {
            System.out.println(element);
        }
    }

    public static void main(String[] args) {
        MyData<Integer> myData = new MyData<>(10);
        System.out.println(myData.getData());

        GenClass<String> genClass = new GenClass<>();
        genClass.append("Hello");
        genClass.append("World");
        genClass.append("welcome to java");
        genClass.append("programming");
        genClass.append("language");
        System.out.println(genClass.get(0));
        genClass.display();
       

        print(1, 2, 3, 4, 5);
        print("Hello", "World", "Welcome", "to", "Java");

    }
}