
class Student {
    private long id;
    private String name;
    private String email;
    private String department;

    public Student(long id, String name, String email, String department) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.department = department;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String toString() {
        return "Student [id=" + id + ", name=" + name + ", email=" + email + ", department=" + department + "]";
    }

}

class Main {
    public static void main(String[] args) {

        Student students[] = new Student[4];
        students[0] = new Student(1, "Anamul Haque", "anam@gmail.com", "CSE");
        students[1] = new Student(2, "Rahim", "rahim@gmail.com", "CSE");
        students[2] = new Student(3, "Karim", "karim@gmail.com", "CSE");
        students[3] = new Student(4, "Rahima", "rahima@gmail.com", "CSE");

        for (Student student : students) {
            System.out.println(student);
        }
    }
}