class Main {
    public static void main(String[] args) {
        String name = "Anamul Haque Jibon";
        System.out.println("   hello".trim());
        System.out.println(name.substring(0, 6));
        System.out.println(name.toUpperCase());
        System.out.println(name.length());
        System.out.println(name.charAt(0));
        System.out.println(name.startsWith("Anamul"));
        System.out.println(name.startsWith("namul", 2));

        String str = "java";
        String str2 = "java";
        String str3 = new String("java");

        System.out.println(str == str2);
        System.out.println(str == str3);
        System.out.println(str.equals(str3));
        System.out.println(str.equals(str2));

        System.out.println(str.compareTo(str2));
        System.out.println(str.compareTo(str3));
        
    }
}