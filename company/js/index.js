

{
    var banner1 = document.querySelector(".banner1");
    var bannerImg = document.querySelector(".bannerImg");
    var a = document.querySelectorAll(".imgbox a")



    var t = setInterval(move, 1500);
    var num = 0;
    function move() {
        num++;
        if (num == a.length) {
            num = 0;
        }
        for (var i = 0; i < a.length; i++) {
            a[i].classList.remove("active");

        }
        a[num].classList.add("active");
    }

    a.onmouseover = function () {
        clearInterval(t);
    }
    a.onmouseout = function () {
        t = setInterval(move, 1500);

    }
}
