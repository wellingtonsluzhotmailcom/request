# request
library to manipulate cookies and read the URL parameters

example: 

// retrieve parameter value "p" from URL
// http://autopecasluz.com.br/produtos?p=32208

var p = $_GET("p"); 

//to create a cookie 
// $_setCookie(cookie_name, cookie_value,  total_days_for_cookie_to_expire);

$_setCookie("email", "wellington@gmail.com", 5);

//read a cookie 

var cookieValue = $_getCookie("email");

//remove a cookie

$_rmvCookie("email");
