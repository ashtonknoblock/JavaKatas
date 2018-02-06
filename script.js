//kata1
var destination1 = document.getElementById("d1");

for (let i = 1; i < 21; i++) {

  var newElement1 = document.createElement("div");
  newElement1.className = "bar";

  var newText1 = document.createTextNode(i + " ");
  newElement1.appendChild(newText1);

  destination1.appendChild(newElement1);

}

//kata2
var destination2 = document.getElementById("d2");

for (let i = 2; i < 22; i += 2) {

  var newElement2 = document.createElement("div");
  newElement2.className = "bar";

  var newText2 = document.createTextNode(i + " ");
  newElement2.appendChild(newText2);

  destination2.appendChild(newElement2);

}
//kata3
var destination3 = document.getElementById("d3");

for (let i = 1; i < 21; i += 2) {

  var newElement3 = document.createElement("div");
  newElement3.className = "bar";

  var newText3 = document.createTextNode(i + " ");
  newElement3.appendChild(newText3);

  destination3.appendChild(newElement3);

}
//kata4
var destination4 = document.getElementById("d4");

for (let i = 0; i < 101; i += 5) {

  var newElement4 = document.createElement("div");
  newElement4.className = "bar";

  var newText4 = document.createTextNode(i + " ");
  newElement4.appendChild(newText4);

  destination4.appendChild(newElement4);

}
//kata5
var destination5 = document.getElementById("d5");

for (let i = 1; i <= 10; i++) {

  var newElement5 = document.createElement("div");
  newElement5.className = "bar";

  var newText5 = document.createTextNode((i * i) + " ");
  newElement5.appendChild(newText5);

  destination5.appendChild(newElement5);
}
//kata6
var destination6 = document.getElementById("d6");

for (let i = 20; i > 0; i -= 1) {

  var newElement6 = document.createElement("div");
  newElement6.className = "bar";

  var newText6 = document.createTextNode(i + " ");
  newElement6.appendChild(newText6);

  destination6.appendChild(newElement6);
}
//kata7
var destination7 = document.getElementById("d7");

for (let i = 20; i > 0; i -= 2) {

  var newElement7 = document.createElement("div");
  newElement7.className = "bar";

  var newText7 = document.createTextNode(i + " ");
  newElement7.appendChild(newText7);

  destination7.appendChild(newElement7);
}
//kata8
var destination8 = document.getElementById("d8");

for (let i = 19; i > 0; i -= 2) {

  var newElement8 = document.createElement("div");
  newElement8.className = "bar";

  var newText8 = document.createTextNode(i + " ");
  newElement8.appendChild(newText8);

  destination8.appendChild(newElement8);
}
//kata9
var destination9 = document.getElementById("d9");

for (let i = 100; i > 0; i -= 5) {

  var newElement9 = document.createElement("div");
  newElement9.className = "bar";

  var newText9 = document.createTextNode(i + " ");
  newElement9.appendChild(newText9);

  destination9.appendChild(newElement9);
}
//kata10
var destination10 = document.getElementById("d10");

for (let i = 10; i > 0; i--) {

  var newElement10 = document.createElement("div");
  newElement10.className = "bar";

  var newText10 = document.createTextNode((i * i) + " ");
  newElement10.appendChild(newText10);

  destination10.appendChild(newElement10);
}

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

//kata11 : display entire array
var destination11 = document.getElementById("d11");
for (let i = 0; i < sampleArray.length; i++) {

  var newElement11 = document.createElement("div");
  newElement11.className = "bar";

  var newText11 = document.createTextNode(sampleArray[i] + " ");
  newElement11.appendChild(newText11);

  destination11.appendChild(newElement11);
}

//kata12 : evem numbers from the array
var destination12 = document.getElementById("d12");

for (let i = 0; i < sampleArray.length; i++) {
  if (sampleArray[i] % 2 == 0) {

    var newElement12 = document.createElement("div");
    newElement12.className = "bar";

    var newText12 = document.createTextNode(sampleArray[i] + " ");
    newElement12.appendChild(newText12);
    destination12.appendChild(newElement12);
  }
}

//kata13
var destination13 = document.getElementById("d13");

for (let i = 0; i < sampleArray.length; i++) {
  if (sampleArray[i] % 2 != 0) {

    var newElement13 = document.createElement("div");
    newElement13.className = "bar";

    var newText13 = document.createTextNode(sampleArray[i] + " ");
    newElement13.appendChild(newText13);

    destination13.appendChild(newElement13);
  }
}

//kata14
var destination14 = document.getElementById("d14");

for (let i = 0; i < sampleArray.length; i++) {

  var newElement14 = document.createElement("div");
  newElement14.className = "bar";

  var newText14 = document.createTextNode(sampleArray[i] * sampleArray[i] + " ");
  newElement14.appendChild(newText14);

  destination14.appendChild(newElement14);
}

//kata15
var destination15 = document.getElementById("d15");
let sum = 0

for (let i = 0; i < 21; i++) {
  sum += i;
}

var newElement15 = document.createElement("div");
newElement15.className = "bar";

var newText15 = document.createTextNode(sum + " ");
newElement15.appendChild(newText15);

destination15.appendChild(newElement15);

//kata16
var destination16 = document.getElementById("d16");

for (let i = 0; i < sampleArray.length; sum +=  sampleArray[i++]) {
}

var newElement16 = document.createElement("div");
newElement16.className = "bar";

var newText16 = document.createTextNode(sum + " ");
newElement16.appendChild(newText16);

destination16.appendChild(newElement16);



//kata17
var destination17 = document.getElementById("d17");

for (let i = 0; i < sampleArray.length; i++) {

    var min=Math.min(...sampleArray)
}
  var newElement17 = document.createElement("div");
  newElement17.className = "bar";

  var newText17 = document.createTextNode(min + " ");
  newElement17.appendChild(newText17);

  destination17.appendChild(newElement17);


//kata18
var destination18 = document.getElementById("d18");
for (let i = 0; i < sampleArray.length; i++) {

    var max=Math.max(...sampleArray)
}
  var newElement18 = document.createElement("div");
  newElement18.className = "bar";

  var newText18 = document.createTextNode(max + " ");
  newElement18.appendChild(newText18);

  destination18.appendChild(newElement18);

  //kata 19
var destination19 = document.getElementById("d19");

for (let i = 1; i < 21; i++) {

  var newElement19 = document.createElement("div");
  newElement19.className = "bar1";

  var newText19 = document.createTextNode(i);
  newElement19.appendChild(newText19);

  destination19.appendChild(newElement19);
}

//kata 20 
for(i=0; i<=20; i++) {
    
    var newElement20 = document.createElement("div");
    newElement20.className = "bar1";
    newElement20.style.width = 105+(i*5) + "px";

    
    var newText20 = document.createTextNode(i);
    newElement20.appendChild(newText20);

    var destination20 = document.getElementById("d20");
    destination20.appendChild(newElement20);
  }

  //kata 21 
for(i=0; i<=20; i++) {
    
    var newElement21 = document.createElement("div");
    newElement21.className = "bar1";
    newElement21.style.width = sampleArray[i] + "px";

    
    var newText21 = document.createTextNode(i);
    newElement21.appendChild(newText21);

    var destination21 = document.getElementById("d21");
    destination21.appendChild(newElement21);
  }

    //kata 22 
for(i=0; i<21; i++) {
    
    var newElement22 = document.createElement("div");
    newElement22.style.width = sampleArray[i] + "px";
    if (i % 2 == 0) {
        newElement22.className = "ashy";
    }
    else {
    newElement22.className = "ash";
    }
    var newText22 = document.createTextNode(i);
    newElement22.appendChild(newText22);

    var destination22 = document.getElementById("d22");
    destination22.appendChild(newElement22);
    
}
    //kata 23 
    for (let i = 0; i < sampleArray.length; i++) {
    
        var newElement23 = document.createElement("div");
        newElement23.style.width = sampleArray[i] + "px";
        if (sampleArray[i] % 2 == 0) {
            newElement23.className = "ashy";
        }
        else {
        newElement23.className = "ash";
        }
        var newText23 = document.createTextNode(i);
        newElement23.appendChild(newText23);
    
        var destination23 = document.getElementById("d23");
        destination23.appendChild(newElement23);
        
    }

    
