import java.sql.*;

class Main {
    public static void main(String[] args) throws Exception {
        Class.forName("com.mysql.jdbc.Driver");

        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/medicineInfo", "root",
                "admin");
        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery("SELECT * FROM medicine");

        while (resultSet.next()) {
            System.out.println(resultSet.getString("brand_name"));
        }

    }
}