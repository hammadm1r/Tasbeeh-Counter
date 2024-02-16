        const numText=document.getElementById("num");
        const add=document.getElementById("addup");
        const less=document.getElementById("less");
        const Reset=document.getElementById("Reset");
       
        //let count++;
        let count=0;
        add.addEventListener("click", ()=>{
            count++;
          updateCount();
        });
        less.addEventListener("click", ()=>{
            if(count > 0){
              count--;
          updateCount();}
        });
        Reset.addEventListener("click", ()=>{
            count=0;
          updateCount();
        });

        function updateCount(){
            numText.innerHTML = count;
            console.log(count)
        }
