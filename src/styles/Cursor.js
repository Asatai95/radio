window.onload = function () {
    var item = window.setInterval(myCallback, 500);
    function myCallback() {
        const cursor = document.getElementById("cursor-pointer");
        const pointer = document.getElementById("pointer");
        if (cursor !== null) {
            cursor.style.display = "block";
            pointer.style.display = "block";
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
            };
            const hamburgerBt = document.getElementById("hamburger")
            try{
                hamburgerBt.addEventListener("mouseover", function (e) {
                    cursor.classList.add("hov_")
                });
                hamburgerBt.addEventListener("mouseout", function (e) {
                    cursor.classList.remove("hov_")
                });
            } catch {}
            const feed = document.getElementsByClassName("feedInfo");
            for(var n = 0; n < feed.length; n++){
                const number = n;
                feed[n].addEventListener("mouseover", function (e) {
                    feed[number].classList.add("_hov")
                });
                feed[n].addEventListener("mouseout", function (e) {
                    feed[number].classList.remove("_hov")
                });
            }
            const postimg = document.getElementsByClassName("postImgLink");
            const imgCotents = document.getElementsByClassName("postContentImg");
            for(var x = 0; x < postimg.length; x++){
                const number = x;
                postimg[x].addEventListener("mouseover", function (e) {
                    imgCotents[number].classList.add("_hov")
                });
                postimg[x].addEventListener("mouseout", function (e) {
                    imgCotents[number].classList.remove("_hov")
                });
            }
            const postimgitem = document.getElementsByClassName("postImg");
            for(var y = 0; y < postimgitem.length; y++){
                const number = y;
                postimgitem[y].addEventListener("mouseover", function (e) {
                    imgCotents[number].classList.add("_hov")
                });
                postimgitem[y].addEventListener("mouseout", function (e) {
                    imgCotents[number].classList.remove("_hov")
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
            const imgbox = document.getElementsByClassName("content-imgbox")
            for(var m = 0; m < imgbox.length; m++){
                const index = m;
                imgbox[m].addEventListener("mouseover", function (e) {
                    imgbox[index].classList.add("_hov")
                });
                imgbox[m].addEventListener("mouseout", function (e) {
                    imgbox[index].classList.remove("_hov")
                });
            }
            const footerLogo = document.getElementById("footerLogo")
            try{
                footerLogo.addEventListener("mouseover", function (e) {
                    footerLogo.classList.add("_hov")
                });
                footerLogo.addEventListener("mouseout", function (e) {
                    footerLogo.classList.remove("_hov")
                });
            } catch {}
            const informationLink = document.getElementsByClassName("infoLinkitem")
            const removeClassElm = document.querySelectorAll(".infoLinkitem")
            for(var t = 0; t < informationLink.length; t++){
                const indexItem = t;
                informationLink[t].addEventListener("click", function (e) {
                    removeClassElm.forEach(function(elm){
                        var elmlist = elm.classList;
                        for(var i = 0; i < elmlist.length; i++){
                            if (elm.classList[i] === "active"){
                                elm.classList.remove("active")
                            }
                        }
                    })
                    informationLink[indexItem].classList.add("active")
                });
            }
            const hamburger = document.getElementById("hamburger")
            const navbarSupportedContent = document.getElementById("navbarSupportedContent")
            try{
                hamburger.addEventListener("click", function (e) {

                    hamburger.classList.toggle("action")
                    navbarSupportedContent.classList.toggle("anime")
                });
            } catch {}
            stopTextColor();
        }
    }
    function stopTextColor() {
        clearInterval(item);
    }
};