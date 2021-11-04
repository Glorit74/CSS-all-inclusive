function loadEvent() {

    //    function amountscrolled(){
    //     var winheight= window.innerHeight;
    //     var docheight = getDocHeight();
    //     var scrollTop = window.pageYOffset;
    //     var trackLength = docheight - winheight;
    //     var pctScrolled = Math.floor(scrollTop/trackLength * 100); 
    //     // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    //     console.log("valami");
    //     console.log(pctScrolled + '% scrolled');
    // }
    
    // window.addEventListener("scroll", function(){
    //     amountscrolled()
    // }, false);
    
    
    let link = document.getElementById("link1");
    link.addEventListener("click", function() {
        let image = document.querySelectorAll("#img1");
        link.classList = "selected";
        for (const key in image) {
            image[key].classList = ("selected");
        }
    });

    
}

window.addEventListener("load", loadEvent);