var Simon = 
{
    round: 1,
    gameSequence: [],
    userSequence: [],

    init: function () 
    {
        console.log("Starting new game...");
        this.round = 1;
        this.gameSequence = [];
        this.userSequence = [];

        console.log(this.userSequence.length + " - " + this.gameSequence.length);
        
        $("h1").text("Round " + Simon.round);
        this.addSeqElem();
        
    },

    addSeqElem: function() 
    {
        this.gameSequence.push(Math.floor(Math.random() * 4) + 1); 
    },

    enableInput: function()
    {
        console.log("Input ENABLED");
        $(".green").on("click", function(){
            console.log("Click registered as GREEN.");
            blink(this);
            Simon.userSequence.push(1);

            if(Simon.userSequence[Simon.userSequence.length - 1] != Simon.gameSequence[Simon.userSequence.length - 1])
            {
                $("h1").text("You lost at round " + Simon.round);

                $("body").on("keyup", function()
                {
                    $("body").off("keyup");
                    Simon.init();
                    Simon.showSequence();
                });
            }

            else if(Simon.userSequence.length >= Simon.gameSequence.length)
            {
                Simon.userSequence = [];
                Simon.addSeqElem();
                Simon.showSequence();
                Simon.round++;
                $("h1").text("Round " + Simon.round);
            }
        });
        
        $(".red").on("click", function(){
            console.log("Click registered as RED.");
            blink(this);
            Simon.userSequence.push(2);

            if(Simon.userSequence[Simon.userSequence.length - 1] != Simon.gameSequence[Simon.userSequence.length - 1])
            {
                $("h1").text("You lost at round " + Simon.round);

                $("body").on("keyup", function()
                {
                    $("body").off("keyup");
                    Simon.init();
                    Simon.showSequence();
                });
            }

            else if(Simon.userSequence.length >= Simon.gameSequence.length)
            {
                Simon.userSequence = [];
                Simon.addSeqElem();
                Simon.showSequence();
                Simon.round++;
                $("h1").text("Round " + Simon.round);
            }
        });
        
        $(".yellow").on("click", function(){
            console.log("Click registered as YELLOW.");
            blink(this);
            Simon.userSequence.push(3);

            if(Simon.userSequence[Simon.userSequence.length - 1] != Simon.gameSequence[Simon.userSequence.length - 1])
            {
                $("h1").text("You lost at round " + Simon.round);

                $("body").on("keyup", function()
                {
                    $("body").off("keyup");
                    Simon.init();
                    Simon.showSequence();
                });
            }

            else if(Simon.userSequence.length >= Simon.gameSequence.length)
            {
                Simon.userSequence = [];
                Simon.addSeqElem();
                Simon.showSequence();
                Simon.round++;
                $("h1").text("Round " + Simon.round);
            }
        });
        
        $(".blue").on("click", function(){
            blink(this);
            Simon.userSequence.push(4);

            if(Simon.userSequence[Simon.userSequence.length - 1] != Simon.gameSequence[Simon.userSequence.length - 1])
            {
                console.log("wrong blue");
                $("h1").text("You lost at round " + Simon.round);

                $("body").on("keyup", function()
                {
                    $("body").off("keyup");
                    Simon.init();
                    Simon.showSequence();
                });
            }

            else if(Simon.userSequence.length >= Simon.gameSequence.length)
            {
                Simon.userSequence = [];
                Simon.addSeqElem();
                Simon.showSequence();
                Simon.round++;
                $("h1").text("Round " + Simon.round);
            }
        });

        function blink(square)
        {
            $(square).addClass("clicked");
            window.setTimeout(function()
            {
                $(square).removeClass("clicked");
            }, 150);
        }
    },

    showSequence: function()
    {
        var sequence = this.gameSequence;
        var seqLength = this.gameSequence.length;

        for(var i = 0; i < seqLength; i++)
        {
            (function(iterator){setTimeout(function(){
                blink(sequence[iterator])}, 500 * iterator)}(i));  
        }

        function blink(colorNum)
        {
            if(colorNum === 1)
            {
                $(".green").animate({opacity: 0}, 300).animate({opacity: 1}, 300);
            }
            else if(colorNum === 2)
            {
                $(".red").animate({opacity: 0}, 300).animate({opacity: 1}, 300);
            }
            else if(colorNum === 3)
            {
                $(".yellow").animate({opacity: 0}, 300).animate({opacity: 1 }, 300);
            }
            else
            {
                $(".blue").animate({opacity: 0}, 300).animate({opacity: 1}, 300);
            }
            return true;
        }

        console.log("Sequence animation complete. ");
    },
};

$("body").on("keyup", function()
{
    $("body").off("keyup");
    Simon.init();
    Simon.enableInput();
    Simon.showSequence();
});