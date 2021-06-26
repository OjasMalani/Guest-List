Nameofstudentar=[];

function submit(){
   var displaystudent= [];

   for(var j=1;j<=4;j++){
       var nameofstudent= document.getElementById("stud"+j).value;
       console.log(nameofstudent)
       Nameofstudentar.push(nameofstudent);
   }
   console.log(Nameofstudentar);
   var length= Nameofstudentar.length;
   console.log(Nameofstudentar);

   for(var k=0;k<length;k++){
displaystudent.push("<h4>Name - "+ Nameofstudentar[k]+"</h4>");
console.log(displaystudent);
   }
   console.log(displaystudent);
   document.getElementById("displaynamecomma").innerHTML=displaystudent;

   var removecomma= displaystudent.join("  ");

    document.getElementById("displaynamenocomma").innerHTML=removecomma;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}

function sort(){
     Nameofstudentar.sort();
     console.log(Nameofstudentar);

     var displaysort= [];
     var length= Nameofstudentar.length;
     for(var k=0;k<length;k++){
        displaysort.push("<h4>Name - "+ Nameofstudentar[k]+"</h4>");
        console.log(displaysort);
     }
     var removecomma= displaysort.join(" ");
     document.getElementById("displaynamenocomma").innerHTML=removecomma;
}