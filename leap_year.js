const year = parseInt(prompt("Input year"));


if(((year % 4 == 0) && (year % 100 != 0)) || year % 100 != 0){
    document.write("leap year");
}

else{
    document.write("Not leap year");
}

