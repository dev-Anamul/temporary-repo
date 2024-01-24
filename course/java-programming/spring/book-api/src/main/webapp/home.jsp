<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>My JSP Page</title>
</head>
<body>
<h1>Hello, JSP!</h1>

<%-- JSP scriptlet to declare variables and perform server-side processing --%>
<%
    int num1 = 10;
    int num2 = 20;
    int sum = num1 + num2;
%>

<p>The sum of <%= num1 %> and <%= num2 %> is <%= sum %></p>

<%-- JSP expression to directly output the result of an expression --%>
<p>The square of <%= num1 %> is <%= num1 * num1 %></p>



</body>
</html>