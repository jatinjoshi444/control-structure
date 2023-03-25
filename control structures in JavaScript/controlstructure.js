//Use of conditional statement
let n=prompt("Enter a number");
let x=parseInt(n);
if(x>0){
    document.write("This is Postive number");
}
else if(x<0){
    document.write("This is Negative number")
}
else{
    document.write("This is Zero")
}

// Use of loop
for(var i=1;i<=5;i++){
    document.write("<br>Javascript<br>")
}

z=0;
while(z<=10){
    document.write("<br>",z,"<br>")
    z++
}

y=20
do{
    document.write("<br>",y,"<br>")
    y++
}while(y<=45)