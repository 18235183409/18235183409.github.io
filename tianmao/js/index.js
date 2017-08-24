
//active
{
    var masks=document.querySelectorAll(".activeRightImg .mask");
   masks.forEach(function(value,index){
       value.onmouseover=function(){
           masks[index].style.opacity=1;
       }
       value.onmouseout=function(){
           masks[index].style.opacity=0;
       }
   })
}

//视频
{
   var big=document.querySelectorAll(".activeBigImg li");
   var small=document.querySelectorAll(".activeSmallImg li");
   var mask=document.querySelectorAll(".activeSmallImg .mask");

    small.forEach(function(value,index){
        value.onmouseover=function(){
            big.forEach(function(value,index){
                big[index].style.zIndex=1;
                mask[index].style.opacity=0;
            });
            big[index].style.zIndex=2;
            mask[index].style.opacity=1;
        }
    });

}

{
    let activeListCon=document.querySelector(".activeListCon");
    setInterval(move,1000);
    let num=0;
    function move(){
        num++;
        activeListCon.style.marginTop=-num*40+"px";
        if(num==4){
            activeListCon.style.marginTop=0;
            num=0;
        }
    }
}

//视频轮播
{
    var bannerinner = document.querySelector(".bannerinner");
    let pre1 = document.querySelector(".pre");
    let next1 = document.querySelector(".next");
    let banner = document.querySelector(".imgbox");
    var big=document.querySelectorAll(".activeBigImg li");
    var small=document.querySelectorAll(".activeSmallImg li");
    var mask=document.querySelectorAll(".activeSmallImg .mask");
    let num1 = 0;

    setInterval(move,500);
    function move() {
        num1++;
        if (num1== 3) {
            bannerinner.style.marginLeft = -488+"px";
            next1.style.display="none";
            pre1.style.display="block";
        }
        if (num1== 6) {
            bannerinner.style.marginLeft = "0";
            pre1.style.display="none";
            next1.style.display="block";
            num1= 0;
        }
    }
    pre1.onclick = function () {
    bannerinner.style.marginLeft = "0";
}
    next1.onclick = function () {
        bannerinner.style.marginLeft = "-488px";
    }
}



//banner
{
    var banner1 = document.querySelector(".banner1");
    var bannerImg = document.querySelector(".bannerImg");
    var a = document.querySelectorAll(".bannerImg a")
    var wheels = document.querySelectorAll(".wheels li");
    var colorarr = ["#2AB8FE", "#E8E8E8", "#FDFDFD", "#E8E8E8", "#4D9DFE", "6FB7F5"];
    wheels.forEach(function (value, index) {
        value.onmouseover = function () {

            for (var i = 0; i < wheels.length; i++) {
                wheels[i].classList.remove("active")
                a[i].classList.remove("active");

            }
            wheels[index].classList.add("active");
            a[index].classList.add("active");
            banner1.style.background = colorarr[index];
            num = index;
        }
    })
    var t = setInterval(move, 1500);
    num = 0;
    function move() {
        num++;
        if (num == wheels.length) {
            num = 0;
        }
        for (var i = 0; i < wheels.length; i++) {
            wheels[i].classList.remove("active")
            a[i].classList.remove("active");

        }
        wheels[num].classList.add("active");
        a[num].classList.add("active");
        banner1.style.background = colorarr[num];
    }

    banner1.onmouseover = function () {
        clearInterval(t);
    }
    banner1.onmouseout = function () {
        t = setInterval(move, 1500);

    }
}

//上边固定
{
   let top=document.querySelector(".top");
    console.log(top)
   window.onscroll=function(){
       var obj = document.body.scrollTop==0?document.documentElement:document.body;
       if(obj.scrollTop>=500){
            top.style.top=0;
        }
       if(obj.scrollTop<500){
            top.style.top="-50px";
        }
   }
}

//右侧固定开始返回顶部
{
    let top1=document.querySelector(".toTop");
    top1.onclick=function(){
        let obj = document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0},500);
    }
}

//左侧固定开始
{
    let leftbar=document.querySelector(".leftbar");
    let btns=document.querySelectorAll(".btn");
    let floors=document.querySelectorAll(".floor")
    let toTopL=document.querySelector(".toTopL");
    let  obj;
    let st;
    window.addEventListener("scroll",function(){
        let obj1=document.body.scrollTop==0?document.documentElement:document.body;
        if(obj1.scrollTop>500){
            animate(leftbar,{width:36,height:296},200);
        }else{
            animate(leftbar,{width:0,height:0},200);

        }
    })

    btns.forEach(function(value,index){
        value.onclick=function(){
            obj = document.body.scrollTop==0?document.documentElement:document.body;
            st=floors[index].offsetTop-100;
            animate(obj,{scrollTop:st});
        }
    })

    window.addEventListener("scroll",function(){
        var colorarr=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#000"];
        btns.forEach(function(){
            let obj=document.body.scrollTop==0?document.documentElement:document.body;
            let st=obj.scrollTop;
            for(var i=0;i<floors.length;i++){
                if(st>=floors[i].offsetTop-500){
                    btns.forEach(function(ele){
                        ele.style.background="";
                    });
                    btns[i].style.background=colorarr[i];
                }
            }
        });
    })

    toTopL.addEventListener("click",function(){
        obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0},500)

    })
}

//美丽人生文字滚动
{
    let wordinner=document.querySelector(".wordinner");
    setInterval(move,1000);
    let num=0;
    function move(){
        num++;
        wordinner.style.marginTop=-num*30+"px";
        if(num==4){
            wordinner.style.marginTop=0;
            num=0;
        }

    }
}


//按需加载
{
    let imgs=document.images;
    console.log(imgs)
    Array.from(imgs).forEach(function(ele){
        if(window.innerHeight>getPosition(ele)){
            ele.src=ele.getAttribute("data-src")
        }
    });
    console.log(imgs)
    window.addEventListener("scroll",function(){
        let  st=document.body.scrollTop;
        Array.from(imgs).forEach(function(ele){
            if(st+window.innerHeight>getPosition(ele)){
                ele.src=ele.getAttribute("data-src")
            }
        })
    })
    
    function getPosition(obj){
        let ot=obj.offsetTop;
        let parent=obj.offsetParent;
        while(parent !== null && parent.nodeName !== "BODY"){
            ot+=parent.offsetTop;
            parent=parent.offsetParent;
        }
        return ot;
    }
}