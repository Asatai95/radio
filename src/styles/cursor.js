window.onload = function(){
    var item = window.setInterval(myCallback, 500);
    function myCallback(){
        const cursor = document.getElementById('cursor-pointer');
        if (cursor !== null){
            console.log("cursor")
            console.log(cursor)
            document.addEventListener('mousemove', function (e) {
                cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
            });
            const linkElem = document.querySelectorAll('a');
            for (let i = 0; i < linkElem.length; i++) {
                linkElem[i].addEventListener('mouseover', function (e) {
                    cursor.classList.add('hov_');
                });
                linkElem[i].addEventListener('mouseout', function (e) {
                    cursor.classList.remove('hov_');
                });
            }
            stopTextColor();
        }
    }
    function stopTextColor() {
        clearInterval(item);
    }
}