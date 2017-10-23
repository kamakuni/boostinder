javascript: var boost = function(){
    if(!document.querySelector(".modalManager")){
        console.log("like");
        document.querySelector(".recsGamepad__button--like").click();
        setTimeout(boost,2000);        
    } else {
        console.log("exit");
    }
};
boost();