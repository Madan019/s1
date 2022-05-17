const weekBtn=document.querySelector(".switch");
const allWeek=document.querySelector(".allWeek");

weekBtn.addEventListener("click",function(e){
    if(e.target.classList.contains("btn") && !event.target.classList.contains("active")){
        weekBtn.querySelector(".btn.active").classList.remove("active");
        e.target.classList.add("active");

        const targ=e.target.getAttribute("data-target");
    allWeek.querySelector(".week.active").classList.remove("active");
    allWeek.querySelector(targ).classList.add("active");
    };
    
});

