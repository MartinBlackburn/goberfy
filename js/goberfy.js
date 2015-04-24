Goberfy = function() 
{  
    var button = $(".js-button");

    var wordList;
    var score;

    //get word/phrase lise
    $.getJSON( "js/words.json", function( data ) {
        wordList = data;
    });

    //button press
    button.on("click", function(event) {
        event.preventDefault();

        goberfy();
    });

    function goberfy()
    {
        //get input and strip some characters
        var input = $(".js-input").val();
        input = input.replace("'", "");
        input = input.replace('"', "");
        input = input.replace("-", "");

        //reset score
        score = 0;

        //loop over the word list and search input for each word/phrase
        $.each(wordList, function(word, value) {
            var rgxp = new RegExp("\\b(" + word + ")\\b", "gi");

            var matches = input.match(rgxp);

            if(matches) {
                score = score + (matches.length * value);
            }
        });

        //display score
        $(".js-score").text(score);

        //show messages and face
        if(score > 0) {
            $(".js-message").removeClass("output__message--negative").addClass("output__message--positive").text("Excellent work, that message is Goberfry approved!");
            $(".js-message").removeClass("output__face--negative").addClass("output__face--positive");
        } else {
            $(".js-message").removeClass("output__message--positive").addClass("output__message--negative").text("Take a good look in the mirror.");
            $(".js-message").removeClass("output__face--positive").addClass("output__face--negative");
        }
    }
};

$(function() 
{
    var goberfy = new Goberfy();
});