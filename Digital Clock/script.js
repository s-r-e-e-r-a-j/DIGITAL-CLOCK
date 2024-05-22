
	setInterval(()=>{

     var time=new Date(); 
     var hours=time.getHours();
     var minutes=time.getMinutes();
     var seconds=time.getSeconds();

     var displayhour=document.querySelector("#hrs");
     displayhour.innerHTML=`${hours}  :  `

     var displaymins=document.querySelector("#mins");
     displaymins.innerHTML=`${minutes}  :  `

     var displaysecs=document.querySelector("#secs");
     displaysecs.innerHTML=`${seconds} `

     var pd=document.querySelector("#pd");
     pd.innerHTML="AM"


     if(seconds<10){
     	displaysecs.innerHTML=`0${seconds} `;
     }

     if(minutes<10){
     	displaymins.innerHTML=`0${minutes}  :  `
     }

    if(hours<10){
    	displayhour.innerHTML=`0${hours}  :  `
    }
   

     if(hours==13||hours==14||hours==15||hours==16||hours==17||hours==18||hours==19||hours==20||hours==21||hours==22||hours==23||hours==24){
     	displayhour.innerHTML=`0${hours-12}  :  `;
     	pd.innerHTML="PM"
     }
	









	},1000)
