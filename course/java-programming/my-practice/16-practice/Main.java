
class MyThread extends Thread {

    @Override
    public void run() {

        int i = 0;
        while (i < 100) {
            System.out.println("My Thread " + i++);
            try {
                Thread.sleep(1000);
            } catch (Exception e) {
                System.out.println(e);
            }
        }

    }
}

class Test implements Runnable {

    @Override
    public void run() {

        int i = 0;
        while (i < 100) {
            System.out.println("Runnable Thread " + i++);

            try {
                Thread.sleep(1000);
            } catch (Exception e) {
                System.out.println(e);
            }
        }

    }
}

class Main {
    public static void main(String[] args) {

        MyThread t1 = new MyThread();
        t1.setName("My Thread");
        t1.start();

        Thread t2 = new Thread(new Test());
        t2.setName("Runnable Thread");
        t2.start();

    }
}