function validate(){
var a=document.f1.name.value;
var b=document.f1.phone.value;
var c=document.f1.email.value;
var d=document.f1.event.value;

for(var i=0;i<a.length;i++){
if(a[i]>="0"&&a[i]<=9){
alert("name invalid");
return false;}}

if(b.length!=10){
alert("invalid phone number");
return false;}

if(c.endsWith("@gmail.com")!=true){
alert("invalid email");
return false;}
alert("event registration succesfully for" +d);
return false;}
