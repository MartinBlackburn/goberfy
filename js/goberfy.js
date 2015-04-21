Goberfy = function() 
{  
    var button = $(".button");

    $.get( "js/words.json", function( data ) {
        var wordList = data;

        console.log(data);
    });

    button.on("click", function() {
        goberfy();
    });

    function goberfy()
    {
        var input = $(".input").val();
        var inputArray = input.split(" ");
        var score = 0;

        inputArray.forEach(function(entry) {
            var word = entry.replace("'", "");
            word = word.replace("-", "");

            if(wordList[word]) {
                score += parseInt(wordList[word]);
            }

            $(".output").text("Your gober score is " + score);
        });
    }
};

$(function() 
{
    var goberfy = new Goberfy();
});