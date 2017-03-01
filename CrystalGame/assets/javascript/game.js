//javacscript for game 4
            
            var yourNumber;
    
            var ruby;
            var opal;
            var amethyst;

            var counter = 0;
            var wins;
            var losses;

            //show random number 
            var randNumber = Math.floor(Math.random() * 120) + 1;
            $(".randomNumber").html(randNumber);

            //image functions 

            // When the emerald img is clicked...
            $(".emerald").on("click", function() {

                // ... we generate a random number
                var emerald = Math.floor(Math.random() * 12) + 1;

                // ... and then add the random number into yourNumber div.
                $(".yourNumber").append(emerald)
            });



            //counter and new game 
            function newGame() {
                var randNumber = Math.floor(Math.random() * 120) + 1;
                var emerald;
                var ruby;
                var opal;
                var amethyst;
            }

            function play() {
                if (yourNumber == randNumber) {
                    $("#wins") ++;
                    $("#wins").html("Wins:" + wins);
                
                } else if (yourNumber >= randNumber) {
                    $("#losses") ++;
                    $("#losses").html("Losses:" + losses);

                    newGame();
                }
            }

            play();
