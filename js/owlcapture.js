var i = 0;
        $('#clicker').click(function() {
            console.log("clicked");
            i = i + 1;
            if (i >= 5) {
                
                openNav();
                i = 0;
                setTimeout(closeNav, 5000);
            }
        });

        function openNav() {
            document.getElementById("myNav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }
