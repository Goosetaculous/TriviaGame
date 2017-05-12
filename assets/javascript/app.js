/**
 * Created by goosetaculous on 5/8/17.
 */
var index=0
    var correctAnswer=0
    var incorrectAnswer=0
    var unAnswered=0
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
    },
    {
        wrong   : "Wrong answer, here's a Top Ramen",
        img     : "http://www.frajosfood.com/img/p/1/5/6/4/4/15644-home_default.jpg"
    }
]


function game(){
    $("#start-button").hide();
    countDown()

}




$(this).click(function(e) {
    console.log($(e.target).attr('id'))
    console.log("RIGHT ANSWER: ", questions[index-1].answer)
    if(parseInt($(e.target).attr('id'))===questions[index-1].answer)
    {
        alert("right")
        correctAnswer++

    }else{

    }
})


function displayQuestion(index){
    console.log("displayQuestion:",index)
    $("#question").html(questions[index].ques)
    $.each(questions[index].choices,function(index,value){
        var div = $('<div/>',{
            class : 'choices '+ index,
            id    : index,
            text  : value
        })
        $("#question").append(div)
    })
    return(questions[index].answer)
}

function summary(){
    $("#start-button").show("slow",function(){
        $(this).html("Your score is "+ correctAnswer)
    })
}

function countDown(){
    var time = 10


    if(index < 5){
        clearInterval(remaining)
        displayQuestion(index++)
        var remaining = setInterval(function displaytime(){
            $("#time-remaining").html("Time remaining "+ time--)

            if (time === -1){
                clearInterval(remaining)
                countDown()
            }
        }, 1000);
    }else{
        summary()
    }





}


