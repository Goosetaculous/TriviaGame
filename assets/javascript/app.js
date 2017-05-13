/**
 * Created by goosetaculous on 5/8/17.
 */
var index=0
var correctAnswer=0
var correct = false
var remaining
var time
var questions = [
    {
        ques    : "Which Convoy eatery is famous for it’s dumplings? ",
        choices : ["Dumpling House","Dumpling Hut","Dumpling Inn & Shanghai Saloon"],
        answer  : 2,
        img     : "https://cdn0.vox-cdn.com/thumbor/u8ZW0gqxhpymqxfKJM8rrvVCtCU=/250x250/cdn0.vox-cdn.com/uploads/chorus_asset/file/3477058/LZDumplingInn-1.0.JPG"
    },
    {
        ques    : "This place has the best Taiwanese milk tea conconctions as well as a “puffle” that is a delicious dessert. ",
        choices : ["Café Hue","Boba Bar and Desserts ","Sharetea"],
        answer  : 1,
        img     : "https://s3-media4.fl.yelpcdn.com/bphoto/mODBW350LNltqrD0FP1EUA/ls.jpg"
    },
    {
        ques    : "If you’re in the mood for a variety of scrumptious crustaceans try this 4.5 out of 5 YELP review at: ",
        choices : ["Crab Town","Crab Shack ","Crab Hut"],
        answer  : 0,
        img     : "https://s3-media4.fl.yelpcdn.com/bphoto/jHi2Z-Inx2QZqMDUQmFGgw/ls.jpg"
    },
    {
        ques    : "Picture it: It’s the end of the month, cash is low but you really want sushi! Where would you go!? ",
        choices : ["Katzra Sushi Bar","Kula Revolving Sushi Bar ","Sushi Deli"],
        answer  : 2,
        img     : "https://s3-media4.fl.yelpcdn.com/bphoto/r7kUvVzW1KZ_Dxbx2-wKsg/ls.jpg"
    },
    {
        ques    : "One of the most popular dishes there is the Hakata Konkotsu Ramen: Black Edition with Underbelly.",
        choices : ["Yakyudori","Rakiraki Ramen and Tsukemen ","Chopstix"],
        answer  : 1,
        img     : "https://s3-media2.fl.yelpcdn.com/bphoto/xYdNSY7-Ltn1HYIbS-6yxQ/ls.jpg"
    }
]
function start_game(){
    $(".btn-primary").hide();
    game()
    $(".main-content").show()
}
function displayQuestion(index){
    var question = $("<h3>").attr({class:"col-md-12 question"}).text(questions[index].ques)
    $("#question-container").html(question)
}
function displayChoices(index){
    $("#choices-container").html("<div class='choices'></div>")
    $.each(questions[index].choices,function(id,value){
        var div = $('<button/>',{
            class : 'btn btn-info',
            onclick : "button"+id+"("+index+")",
            text  : value
        })
        $(".choices").append(div,"<br>")
    })
}

function nextQuestion(questionIndex){
    displayQuestion(questionIndex)
    displayChoices(questionIndex)
}

function correctDisplay(pic){
    var img =$("<img>").attr("src",pic)
        $(".choices").html(img)
}

function summary(){
    $(".btn").hide("slow",function(){
        $(".choices-container").append("<h4>Your score is "+ correctAnswer+ "</h4>")
    })
}

var stop =function (remaining){
    clearInterval(remaining)
    console.log("STOP")
    game()
}



function timer(time,callback){
        remaining = setInterval(function (){
             $("#start-button").html("<h4>Time remaining "+ time-- + "</h4>")
            if (time < 0 || correct){
                callback(remaining)
            }
        }, 1000);
}

function game(){
    console.log("GAME:",index)
  if(index < 5){
      correct = false
      nextQuestion(index)
      timer(10,stop)
      console.log("remaining",remaining)
      index++
  }
}


/**
 * EVENT DELAGATION
 * I'm having a little trouble =(
 */

$('#choices-container button').on( "click", function( event ) {
    event.preventDefault();
    console.log( $( this ).text() );
});

function button0(num){
    if (0 === questions[num].answer){
        correctAnswer++


        $("#start-button").html("<h4></h4>")
        $(".btn").hide("slow", function(){
            correctDisplay(questions[num].img)
        })
        setTimeout(function(){ correct = true;; }, 2000);

    }
}

function button1(num){
    if (1 === questions[num].answer){
        correctAnswer++


        $("#start-button").html("<h4></h4>")

        $(".btn").hide("slow", function(){
            correctDisplay(questions[num].img)

        })
        setTimeout(function(){ correct = true;; }, 2000);

    }
}

function button2(num){
    if (2 === questions[num].answer){
        correctAnswer++


        $("#start-button").html("<h4></h4>")
        $(".btn").hide("slow", function(){
            correctDisplay(questions[num].img)


        })
        setTimeout(function(){ correct = true;; }, 2000);
    }
}

