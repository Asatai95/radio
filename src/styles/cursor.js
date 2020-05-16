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
            for (var i = 0; i < linkElem.length; i++) {
                linkElem[i].addEventListener("mouseover", function (e) {

                    cursor.classList.add("hov_");
                });
                linkElem[i].addEventListener("mouseout", function (e) {
                    cursor.classList.remove("hov_");
                });
            }

            const feed = document.getElementsByClassName("feedInfo");
            for(var n = 0; n < feed.length; n++){
                feed[n].addEventListener("mouseover", function (e) {
                    feed[0].classList.add("_hov")
                });
                feed[n].addEventListener("mouseout", function (e) {
                    feed[0].classList.remove("_hov")
                });
            }

            const slidimg = document.getElementById("react-link-item")
            try{
                slidimg.addEventListener("mouseover", function (e) {
                    slidimg.classList.add("_hov")
                });
                slidimg.addEventListener("mouseout", function (e) {
                    slidimg.classList.remove("_hov")
                });
            } catch {}

            const imgbox = document.getElementsByClassName("cursor-react-imgbox")
            for(var m = 0; m < imgbox.length; m++){
                imgbox[m].addEventListener("mouseover", function (e) {
                    e.target.classList.add("_hov")
                });
                imgbox[m].addEventListener("mouseout", function (e) {
                    e.target.classList.remove("_hov")
                });
            }

            const footerLogo = document.getElementById("footerLogo")
            footerLogo.addEventListener("mouseover", function (e) {
                footerLogo.classList.add("_hov")
            });
            footerLogo.addEventListener("mouseout", function (e) {
                footerLogo.classList.remove("_hov")
            });

            stopTextColor();
        }
    }
    function stopTextColor() {
      clearInterval(item);
    }
  };
