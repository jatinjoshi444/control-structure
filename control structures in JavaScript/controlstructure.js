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

// switch
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    
    case 1:
        day = "Monday";
        break;

    case 2:
        day = "Tuesday";
        break;
    
    case 3:
        day = "Wednesday";
        break;

    case 4:
        day = "Thursday";
        break;

    case 5:
        day = "Friday";
        break;

    case 6:
        day = "Saturday";
}
document.getElementById("day").innerHTML = "Today is " + day;
