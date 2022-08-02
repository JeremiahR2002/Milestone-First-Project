function main() {
    let currentcookies = document.querySelector('.current');;
    let cookieclick = document.querySelector('.cookie');
    let upgrade1 = document.querySelector('.buy');
    let upgrade2 = document.querySelector('.buy2');
    let cookieamount = 0;
    // function increasecookies(){
    //     cookieamount++;
    //     currentcookies.textContent = cookieamount;
    // }

    cookieclick.addEventListener('click', function() {
        cookieamount += 1;
        currentcookies.textContent = cookieamount;
        console.log(cookieamount);
    });
    // Used to use stackoverflow to look for how to create an infinite loop regarding var i = 0 in order to simulate giving 5 cookies every 10 seconds https://stackoverflow.com/questions/24977456/how-do-i-create-an-infinite-loop-in-javascript
    // changed to using setinterval in order to avoid creating an infinite loop that can crash, https://www.w3schools.com/jsref/met_win_setinterval.asp
    upgrade1.addEventListener('click', function() {
       if (cookieamount >= 50) {
        console.log("first upgrade purchased!");
        cookieamount -= 50;
        currentcookies.textContent = cookieamount;
        for (var i = 0; i < 1; i++) {
            setInterval(() => {cookieamount += 5, currentcookies.textContent = cookieamount; }, 
            10000);
        }
       } else {
        console.log("Not Enough Cookies to Buy!");
       }
    });

    upgrade2.addEventListener('click', function() {
        if (cookieamount >= 150) {
         console.log("second upgrade purchased!");
         cookieamount -= 150;
         currentcookies.textContent = cookieamount;
         for (var i = 0; i < 1; i++) {
             setInterval(() => {cookieamount += 15, currentcookies.textContent = cookieamount; }, 
             20000);
         }
        } else {
         console.log("Not Enough Cookies to Buy!");
        }
     });

     // audio did not work here for some odd reason, had to script it in html
    // let cookiemusic = document.getElementById("cookiemusic");
    // function play() {
    //     cookiemusic.play();
    // }
}

main();

