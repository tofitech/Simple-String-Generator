//String generator...

let ranCounter = 0;

//btn Start Generate.
    document.getElementById('btn-func').addEventListener('click', function () {
        
       
            let genRandom = Math.random().toString(36).substring(8);
             document.querySelector('#content').textContent = genRandom;
 
             let convert = Math.floor(Math.random(6) +1);
             
                 ranCounter+= convert;
                document.querySelector('#counter').textContent = ranCounter;
        

    });

//btn Restart..
        document.querySelector('#btn-res').addEventListener('click', function() {
            setTimeout(function () {
                location.reload()
            }, 100);
        });

           
                     
                     
   
   
     