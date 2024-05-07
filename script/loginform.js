var LoginForm = document.getElementById("LoginForm");
        var RegForm = document.getElementById("RegForm");
        var Indicator = document.getElementById("indicator");

        window.addEventListener("DOMContentLoaded",function(){
            RegForm.style.transform = "translateX(400px)";
            LoginForm.style.transform = "translateX(300px)";
            Indicator.style.transform = "translateX(27px)";
        })

        function register() {
            RegForm.style.transform = "translateX(75px)";
            LoginForm.style.transform = "translateX(-100px)";
            Indicator.style.transform = "translateX(150px)";
        }

        function login() {
            RegForm.style.transform = "translateX(400px)";
            LoginForm.style.transform = "translateX(300px)";
            Indicator.style.transform = "translateX(27px)";
        }