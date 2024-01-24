
class Account {
    private String id;
    private String name;
    private String address;
    private String phone;
    private String email;
    private String balance;

    public Account() {
        this.id = "";
        this.name = "";
        this.address = "";
        this.phone = "";
        this.email = "";
        this.balance = "";
    }

    public Account(String id, String name, String address, String phone, String email, String balance) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.balance = balance;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

}

class SavingsAccount extends Account {

    private String interestRate;

    public SavingsAccount() {
        super();
        this.interestRate = "";
    }

    public SavingsAccount(String id, String name, String address, String phone, String email, String balance,
            String interestRate) {
        super(id, name, address, phone, email, balance);
        this.interestRate = interestRate;
    }

    public String getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(String interestRate) {
        this.interestRate = interestRate;
    }

    public void deposit(double amount) {
        double balance = Double.parseDouble(getBalance());
        balance += amount;
        setBalance(String.valueOf(balance));
    }

    public void withdraw(double amount) {
        double balance = Double.parseDouble(getBalance());
        balance -= amount;
        setBalance(String.valueOf(balance));
    }

    public void addInterest() {
        double balance = Double.parseDouble(getBalance());
        double interestRate = Double.parseDouble(getInterestRate());
        balance += balance * interestRate / 100;
        setBalance(String.valueOf(balance));
    }

    public void FixedDeposit() {
        double balance = Double.parseDouble(getBalance());
        double interestRate = Double.parseDouble(getInterestRate());
        balance += balance * interestRate / 100;
        setBalance(String.valueOf(balance));
    }

}

class Parent {
    public Parent() {
        System.out.println("Parent Constructor");
    }

    public void print() {
        System.out.println("Parent Print");
    }
}

class Child extends Parent {
    public Child() {
        System.out.println("Child Constructor");
    }

    public void print() {
        System.out.println("Child Print");
    }
}

class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");

        SavingsAccount savingsAccount = new SavingsAccount("1", "John", "Kathmandu", "9841000000", "john@gmail.com",
                "1000", "5");

        System.out.println("Balance: " + savingsAccount.getBalance());
        System.out.println("Interest Rate: " + savingsAccount.getInterestRate());

        Parent child = new Child();
        child.print();

    }
}