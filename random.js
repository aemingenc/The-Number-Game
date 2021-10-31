// alert( "Please push start button for the game and write your gues ");
let button =document.getElementById("check");
let content =document.getElementById("content");
rNum=Math.floor(Math.random() * 100);
button.addEventListener("click",() => {
    let guess=document.getElementById("search_bar").value;

        console.log(rNum);
    content.innerHTML =""
    const count=0;
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
            
    }



   
})
  

