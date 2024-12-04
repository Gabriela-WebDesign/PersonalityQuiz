let question2 = "Choose an album cover";
let question3 = "Choose a tattoo";
let question4 = "Choose the lyrics";
let question5 = "Choose the hair era";
let question6 = "Choose a picture";
let question7 = "Choose a song title";
let question8 = "Choose an instrument";
let question9 = "Choose a ring";
let question10= "Choose a band member";
$("#option1").on("click", changeHeading);
$("#option2").on("click", changeHeading);
$("#option3").on("click", changeHeading);
$("#option4").on("click", changeHeading);

let points = 0;
console.log(points);

$("#ending1").hide();
$("#ending2").hide();
$("#ending3").hide();
$("#ending4").hide();

$("#option1").on("click", addpoint);
$("#option2").on("click", addTwoPoints);
$("#option3").on("click", addThreePoints);
$("#option4").on("click", addFourPoints);

function addpoint(){
    points++;
    console.log(points);
}
function addTwoPoints(){
    points+=2;
    console.log(points);
}

function addThreePoints(){
    points+=3;
    console.log(points);
}

function addFourPoints(){
    points+=4;
    console.log(points);
}


function changeHeading(){
    $("h2").text(question2);
        $("#option1").attr("src", "cover1.jpg");
        $("#option2").attr("src", "cover2.jpg");
        $("#option3").attr("src", "cover3.jpg");
        $("#option4").attr("src", "cover4.png");
    $("#option1").on("click", changequestion3);
    $("#option2").on("click", changequestion3);
    $("#option3").on("click", changequestion3);
    $("#option4").on("click", changequestion3);
    
}

function changequestion3 (){
    $("h2").text(question3);
        $("#option4").attr("src", "tatto1.png");
        $("#option2").attr("src", "tatto2.png");
        $("#option1").attr("src", "tatto3.png");
        $("#option3").attr("src", "tatto4.png");
    $("#option1").on("click", changequestion4);
    $("#option2").on("click", changequestion4);
    $("#option3").on("click", changequestion4);
    $("#option4").on("click", changequestion4);

}

function changequestion4(){
    $("h2").text(question4);
        $("#option3").attr("src", "5.png");
        $("#option1").attr("src", "6.png");
        $("#option4").attr("src", "7.png");
        $("#option2").attr("src", "8.png");
    $("#option1").on("click", changequestion5); 
    $("#option2").on("click", changequestion5);
    $("#option3").on("click", changequestion5);
    $("#option4").on("click", changequestion5);

}

function changequestion5(){
    $("h2").text(question5);
        $("#option1").attr("src", "hair1.png");
        $("#option2").attr("src", "hair2.png");
        $("#option3").attr("src", "hair3.png");
        $("#option4").attr("src", "hair4.png");
    $("#option1").on("click", changequestion6);
    $("#option2").on("click", changequestion6);
    $("#option3").on("click", changequestion6);
    $("#option4").on("click", changequestion6);
    
}

function changequestion6(){
    $("h2").text(question6);
        $("#option1").attr("src", "pic1.png");
        $("#option2").attr("src", "pic2.png");
        $("#option4").attr("src", "pic3.png");
        $("#option3").attr("src", "pic4.png"); 
    $("#option1").on("click", changequestion7);  
    $("#option2").on("click", changequestion7);
    $("#option3").on("click", changequestion7);
    $("#option4").on("click", changequestion7);

}

function changequestion7(){
    $("h2").text(question7);
        $("#option1").attr("src", "1.png");
        $("#option2").attr("src", "2.png");
        $("#option3").attr("src", "3.png");
        $("#option4").attr("src", "4.png"); 
    $("#option1").on("click", changequestion8);   
    $("#option2").on("click", changequestion8);
    $("#option3").on("click", changequestion8);
    $("#option4").on("click", changequestion8);

}

function changequestion8(){
    $("h2").text(question8);
        $("#option1").attr("src", "Guitar.png");
        $("#option2").attr("src", "Drums.png");
        $("#option3").attr("src", "Piano.png");
        $("#option4").attr("src", "bass.png");
    $("#option1").on("click", changequestion9); 
    $("#option2").on("click", changequestion9);
    $("#option3").on("click", changequestion9);
    $("#option4").on("click", changequestion9);

}

function changequestion9(){
    $("h2").text(question9);
        $("#option4").attr("src", "ring1.png");
        $("#option2").attr("src", "ring2.png");
        $("#option3").attr("src", "ring3.png");
        $("#option1").attr("src", "ring4.png");
    $("#option1").on("click", changequestion10); 
    $("#option2").on("click", changequestion10);
    $("#option3").on("click", changequestion10);
    $("#option4").on("click", changequestion10);

}

function changequestion10(){
    $("h2").text(question10);
        $("#option1").attr("src", "band1.png");
        $("#option2").attr("src", "band2.png");
        $("#option3").attr("src", "band3.png");
        $("#option4").attr("src", "band4.png");
    $("#option1").on("click", Resaultscene); 
    $("#option2").on("click", Resaultscene);
    $("#option3").on("click", Resaultscene);
    $("#option4").on("click", Resaultscene);

}
function Resaultscene() {
    
  if (points >=0 && points <=16){
        $("#ending1").show();
        $("#option1").hide();
        $("#option2").hide();
        $("#option3").hide();
        $("#option4").hide();
        $("h2").text("Funny Fletcher");
        $("img").hide();
        $("p").hide();
        
    }
    
    if (points >=17 && points <=25){
        $("#ending2").show();
        $("#option1").hide();
        $("#option2").hide();
        $("#option3").hide();
        $("#option4").hide();
        $("h2").text("Hot Fletcher");
        $("img").hide();
        $("p").hide();
        
    }
    
     if (points >=26 && points <=32){
        $("#ending3").show();
        $("#option1").hide();
        $("#option2").hide();
        $("#option3").hide();
        $("#option4").hide();
        $("h2").text("Healing Fletcher");
        $("img").hide();
        $("p").hide();
       
     }
    
     if (points >=33 && points <=40){
        $("#ending4").show();
        $("#option1").hide();
        $("#option2").hide();
        $("#option3").hide();
        $("#option4").hide();
        $("h2").text("Psycho Fletcher");
        $("img").hide();
        $("p").hide();
         console.log('Hello');
     }
}
