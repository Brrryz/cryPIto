document.addEventListener("DOMContentLoaded", function(){
    const signUpButton = document.getElementById("signUpBtn");
    const learnNowButton = document.getElementById("learnNowBtn");

    signUpButton.addEventListener("click", function (){
        window.location.href = "../register/register.html";
    });

    learnNowButton.addEventListener("click", function(){
        window.location.href = "../learn/learn.html";
    });

    const logo = document.getElementById("logo");
    logo.addEventListener("click", function (){
        window.location.href = "index.html";
    });
});
