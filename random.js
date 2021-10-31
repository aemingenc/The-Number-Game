// alert( "Please push start button for the game and write your gues ");
let button =document.getElementById("check");
let content =document.getElementById("content");
let guess=document.getElementById("search_bar").value;
rNum=Math.floor(Math.random() * 100);
button.addEventListener("click",() => {
    let guess=document.getElementById("search_bar").value;
    if(guess==""){
        alert("please enter to do");
    }
    
    else{
        console.log(rNum);
        content.innerHTML ="";
        if(guess == rNum){
            content.innerHTML += `<p>WİNNER</p>`;
            rNum=Math.floor(Math.random() * 100);
            
    }
        else if(guess< rNum){
            content.innerHTML += `<p>UP</p>`;
        
    }
        else if(guess>rNum){
            content.innerHTML += `<p>DOWN</p>`;
            
    }
        else{
            content.innerHTML += "<p>WRONG KEYS.TRY AGAIN</p>";
            
    }}});
guess2.addEventListener("keyup",(e)=>{
    let guess=document.getElementById("search_bar").value;
    content.innerHTML ="";
        if(e.code=="Enter"){
            e.preventDefault();
            if(guess==""){
                alert("please enter to do");
            }
            else{
                if(guess == rNum){
                    content.innerHTML += `<p>WİNNER</p>`;
                    rNum=Math.floor(Math.random() * 100);
            
    }
                else if(guess< rNum){
                    content.innerHTML += `<p>UP</p>`;
        
    }
                else if(guess>rNum){
                    content.innerHTML += `<p>DOWN</p>`;
            
    }
                else{
                    content.innerHTML += "<p>WRONG KEYS.TRY AGAIN</p>";
            
    }}}


   
});
  

