function message() {
     document.writeln("<h1>This is written using internal JS</h1>");
     console.log("Thank you");  
}
document.write("<br>");//writeln is deprecated
document.write(3+4);
document.write("<h1>Welcome</h1>");
document.write("3"+"3");
document.write("<br>");
document.write("3"+4);
document.write("<br>");
document.write(4+"5");
document.write("<br>");
document.write("hello");
document.write("<br>")
document.write("3"+4+1);
var a = 10;
a = 20;
console.log(a);

let b = 10;
b = 20;
console.log(b);

const c = 10;
// c = 20; // This will throw an error because 'c' is a constant and cannot be reassigned
console.log(c);

var a = 30;//redeclare
console.log(a);

//let b= 30; //can not redeclare
  