Goberfy = function() 
{  
    var button = $(".js-button");

    var wordList;

    $.getJSON( "js/words.json", function( data ) {
        wordList = data;
    });

    button.on("click", function(event) {
        event.preventDefault();

        goberfy();
    });

    function goberfy()
    {
        var input = $(".js-input").val();
        var inputArray = input.split(" ");
        var score = 0;

        inputArray.forEach(function(entry) {
            var word = entry.replace("'", "");
            word = word.replace("-", "");

            if(wordList[word]) {
                score += parseInt(wordList[word]);
            }
        });

        $(".js-score").text(score);

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