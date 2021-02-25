
function onClicked(e)
{
    
    if(e.target.innerHTML=="" && start==true)
    {
    if(turn)
    {
    e.target.innerHTML='X'
    }
    else{
        e.target.innerHTML='O'
    }
    turn= !turn;   
    setTimeout(() => {   someoneWin() }, 200);
  
}
else{
    alert("negali nu ")
}
}

function someoneWin()
{
    for(let i=0;i<boardSize;i++){
        let count=0;
       
         for(let j=0;j<boardSize;j++){
            
         if(document.getElementById("boxx").childNodes[i].childNodes[j].innerHTML=='X') 
         {
           
             count++
             
             if(count==3)
             {
                 
                 alert('laimejo iksas')
                 calc(boardSize)//1
                 break;
             }
           
             
         }
         else{
           
             count=0
         }
         
        
         }
         count=0;
        
     }
    
    for(let i=0;i<boardSize;i++){
       let count=0;
      
        for(let j=0;j<boardSize;j++){
           
        if(document.getElementById("boxx").childNodes[j].childNodes[i].innerHTML=='X') 
        {
          
            count++
            
            if(count==3)
            {
                
                alert('laimejo iksas')
                calc(boardSize)//2
                break;
            }
          
            
        }
        else{
          
            count=0
        }
        
       
        }
        count=0;
       
    }

    for(let i=boardSize-1;i>0;i--){
        let count=0;
        for(let j=0;j<boardSize-i;j++)
        {
            if(document.getElementById("boxx").childNodes[i+j].childNodes[j].innerHTML=='X') 
            {
              
                count++
                
                if(count==3)
                {      
                    alert('laimejo iksas')  
                    calc(boardSize) //3
                    break;
                }
              
                
            }
            else{
              
                count=0
            }
            
        }
        count=0
        
    }

    for(let i=0;i<boardSize;i++)
{
    let count=0;
    for(let j=0;j<boardSize-i;j++)
    {
        if(document.getElementById("boxx").childNodes[j].childNodes[i+j].innerHTML=='X') 
        {
          
            count++
            
            if(count==3)
            {
                
                alert('laimejo iksas')
                calc(boardSize)//4
               
                break;
            }
          
            
        }
        else{
          
            count=0
        }
        
    }
    count=0
}

for(let i=0;i<boardSize;i++){
    let count=0;
    for(let j=0;j<i+1;j++)
    {
        if(document.getElementById("boxx").childNodes[j].childNodes[i-j].innerHTML=='X') 
        {
          
            count++
            
            if(count==3)
            {
                
                alert('laimejo iksas')
                calc(boardSize)//5
                
                break;
            }
          
            
        }
        else{
          
            count=0
        }
        
    }
    count=0
}

for(let i=0;i<boardSize;i++){
    let count=0;
    let k=0;
    for(let j=boardSize-1;j>i-1;j--)
    {

        if(document.getElementById("boxx").childNodes[i+k].childNodes[j].innerHTML=='X') 
        {
          
            count++
            
            if(count==3)
            {
                
                alert('laimejo iksas')
                calc(boardSize)//6
                break;
            }
          
            
        }
        else{
          
            count=0
        }
        k++;
    }
    k=0
    count=0;
}

for(let i=0;i<boardSize;i++){
    let count=0;
   
     for(let j=0;j<boardSize;j++){
        
     if(document.getElementById("boxx").childNodes[i].childNodes[j].innerHTML=='O') 
     {
       
         count++
         
         if(count==3)
         {
            
             alert('laimejo nulis')
             calc(boardSize)//7
             break;
         }
       
         
     }
     else{
       
         count=0
     }
     
    
     }
     count=0;
    
 }

for(let i=0;i<boardSize;i++){
   let count=0;
  
    for(let j=0;j<boardSize;j++){
       
    if(document.getElementById("boxx").childNodes[j].childNodes[i].innerHTML=='O') 
    {
      
        count++
        
        if(count==3)
        {
            
            alert('laimejo nulis')
            calc(boardSize)//8
            break;
        }
      
        
    }
    else{
      
        count=0
    }
    
   
    }
    count=0;
   
}

for(let i=boardSize-1;i>0;i--){
    let count=0;
    for(let j=0;j<boardSize-i;j++)
    {
        if(document.getElementById("boxx").childNodes[i+j].childNodes[j].innerHTML=='O') 
        {
          
            count++
            
            if(count==3)
            {      
                alert('laimejo nulis') 
                calc(boardSize)  //9
                break;
            }
          
            
        }
        else{
          
            count=0
        }
        
    }
    count=0
    
}

for(let i=0;i<boardSize;i++)
{
    let count=0;
for(let j=0;j<boardSize-i;j++)
{
    if(document.getElementById("boxx").childNodes[j].childNodes[i+j].innerHTML=='O') 
    {
      
        count++
        
        if(count==3)
        {
            
            alert('laimejo nulis')
            calc(boardSize)//10
           
            break;
        }
      
        
    }
    else{
      
        count=0
    }
    
}
count=0
}

for(let i=0;i<boardSize;i++){
    let count=0;
for(let j=0;j<i+1;j++)
{
    if(document.getElementById("boxx").childNodes[j].childNodes[i-j].innerHTML=='O') 
    {
      
        count++
        
        if(count==3)
        {
            
            alert('laimejo nulis')
            calc(boardSize)//11
            
            break;
        }
      
        
    }
    else{
      
        count=0
    }
    
}
count=0
}

for(let i=0;i<boardSize;i++){
    let count=0;
let k=0;
for(let j=boardSize-1;j>i-1;j--)
{

    if(document.getElementById("boxx").childNodes[i+k].childNodes[j].innerHTML=='O') 
    {
      
        count++
        
        if(count==3)
        {
            
            alert('laimejo nulis')
            calc(boardSize)//12
            
            break;
        }
      
        
    }
    else{
      
        count=0
    }
    k++;
}
k=0
count=0;
}
 let full=0
for(let i=0;i<boardSize;i++){
    
   
     for(let j=0;j<boardSize;j++){
        
     if(document.getElementById("boxx").childNodes[i].childNodes[j].innerHTML!="") 
     {
       
         full++
         
     }
    
 }

}
if(full==boardSize*boardSize)
{
    alert("lygiosios ponai ir ponios ")
    calc(boardSize)
}
}

function change(){
    start=false;
    var select = document.getElementById('select').value;
    if(select=='3x3')
    {
       calc(3)
    }
    if(select=='4x4')
    {
        calc(4) 
    }
    if(select=='5x5')
    {
      calc(5)
    }
}

function calc(size)
{

    start=false

    boardSize=size;
    var c = document.getElementById("boxx").childElementCount;
    while(c!=0)
    {
        document.getElementById("boxx").removeChild(document.getElementById("boxx").lastElementChild);
        c = document.getElementById("boxx").childElementCount;
    }
    
    while(c!=size)
    {
        var div = document.createElement("div");
         div.classList.add('rown');
        
        let s=div.childElementCount;
       while(s!=size)
    {

        var dix=document.createElement("div")
        dix.classList.add("columnn")
        dix.onclick = onClicked
        div.appendChild(dix);
        s=div.childElementCount;
    
    }
        document.getElementById("boxx").appendChild(div)
        c = document.getElementById("boxx").childElementCount;
    }
   var mygtukai=document.createElement("div")
    var button=document.createElement("button")
    button.classList.add("buttonn")
    button.innerHTML="X"
    button.onclick=clickas
    mygtukai.appendChild(button)
    var button0=document.createElement("button")
    button0.classList.add("buttonn")
    button0.innerHTML="O"
    button0.onclick=clickas0
    mygtukai.appendChild(button0)
    document.getElementById('boxx').appendChild(mygtukai)

    mygtukai

}

function clickas(e)
{
    turn=true
    start=true
    document.getElementById('boxx').removeChild(document.getElementById("boxx").lastElementChild);
   

}
function clickas0(e)
{
    turn=false
    start=true;
    alert(turn)
    document.getElementById('boxx').removeChild(document.getElementById("boxx").lastElementChild);
    

}


