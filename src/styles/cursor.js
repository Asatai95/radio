window.onload = function () {
    var item = window.setInterval(myCallback, 500);
    function myCallback() {
        const cursor = document.getElementById("cursor-pointer");
        const pointer = document.getElementById("pointer");
        if (cursor !== null) {
            document.addEventListener("mousemove", function (e) {
                pointer.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)";
                var cursorevent = function(){
                  cursor.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)";
                }
                setTimeout(cursorevent, 100);
            });
            const linkElem = document.querySelectorAll("a");
            for (let i = 0; i < linkElem.length; i++) {
                linkElem[i].addEventListener("mouseover", function (e) {

                    cursor.classList.add("hov_");
                });
                linkElem[i].addEventListener("mouseout", function (e) {
                    cursor.classList.remove("hov_");
                });
            }

            const feed = document.getElementsByClassName("feedInfo");
            for(var i = 0; i < feed.length; i++){
                feed[i].addEventListener("mouseover", function (e) {
                    feed[0].classList.add("_hov")
                    // elm.classList.add("_hov")
                    // for(var i =0 ; i < elm.length; i++) {
                    //     elm.classList.add("_hov")
                    // }
                });
                feed[i].addEventListener("mouseout", function (e) {
                    feed[0].classList.remove("_hov")
                    // elm.classList.remove("_hov")
                    // for(i =0 ; i < elm.length; i++) {
                    //     elm.classList.remove("_hov")
                    // }
                });
            }

            stopTextColor();
        }
    }
    function stopTextColor() {
      clearInterval(item);
    }
  };
