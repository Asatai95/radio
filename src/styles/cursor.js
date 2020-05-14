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
            console.log(feed)
            for(var i = 0; i < feed.length; i++){
                feed[i].addEventListener("mouseover", function (e) {
                    console.log(e)
                    const elm = e.target.querySelector("img");
                    console.log(elm)
                });
                feed[i].addEventListener("mouseout", function (e) {
                    console.log(e)
                });
            }

            stopTextColor();
        }
    }
    function stopTextColor() {
      clearInterval(item);
    }
  };
