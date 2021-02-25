const icon= document.querySelector('.navbar-burger');
const menu =document.querySelector('.navbar-menu');
const ModeNight= document.querySelector("#mode");
const currentTheme = JSON.parse(localStorage.getItem("masyvas"));
let parinktys={};
if(currentTheme!==null)
{
parinktys={nightMode: currentTheme.nightMode, headersSize: currentTheme.headersSize, headersColor: currentTheme.headersColor}
console.log(currentTheme.nightMode)
}
else
{
 parinktys={nightMode: false, headersSize: 1, headersColor: "white"}
}
const dayOrNight= document.querySelector("#DN");
const titleColor = document.querySelectorAll(".title");



if(currentTheme!==null)
{
if(currentTheme.nightMode)
{
    ModeNight.href="css/darkstyles.css"
}
if(currentTheme.headersColor==='green')
{
    titleColor.forEach(element => {
        element.style.color="green"
       
    });
}
if(currentTheme.headersColor==='purple')
{
    titleColor.forEach(element => {
        element.style.color="purple"
       
    });
}
if(currentTheme.headersSize==='small')
{
    titleColor.forEach(element => {
        element.style.fontSize="2rem"
       
    });
}
if(currentTheme.headersSize==='medium')
{
    titleColor.forEach(element => {
        element.style.fontSize="3rem"
       
    });
}
if(currentTheme.headersSize==='large')
{
    titleColor.forEach(element => {
        element.style.fontSize="4rem"
       console.log("sw")
    });
}
}
icon.addEventListener('click',()=>{
    menu.classList.toggle('is-active')
} )



function tvirtinam()
{
    
    let vardas = document.getElementById("vard");
    let pavarde= document.getElementById("pvard");
    let numeris= document.getElementById("nr");
    let elPastas= document.getElementById("ep");
    let adresas= document.getElementById("ad");
    let dalys= document.getElementById("dalys");

     alert(`Sveikinu issiuntus duomenis. Jusu duomenys:\n Vardas: ${vardas.value} 
     \n Pavarde: ${pavarde.value} \n Numeris: ${numeris.value} \n El-pastas: ${elPastas.value}
     \n adresas: ${adresas.value} \n jusu dalys arba komentaras: ${dalys.value}` )
     vardas.value="";
     pavarde.value="";
     numeris.value="";
     elPastas.value="";
     adresas.value="";
     dalys.value="";

}
function tvirtinam0()
{
    
    let vardas = document.getElementById("vard");
    let pavarde= document.getElementById("pvard");
    let numeris= document.getElementById("nr");
    let elPastas= document.getElementById("ep");
    let adresas= document.getElementById("ad");
    let dalys= document.getElementById("dataa");

     alert(`Sveikinu issiuntus duomenenis. Jusu duomenys:\n Vardas: ${vardas.value} 
     \n Pavarde: ${pavarde.value} \n Numeris: ${numeris.value} \n El-pastas: ${elPastas.value}
     \n adresas: ${adresas.value} \n jusu planuojama data: ${dalys.value}` )
     vardas.value="";
     pavarde.value="";
     numeris.value="";
     elPastas.value="";
     adresas.value="";
     dalys.value="";

}


function dirbam() {

    
    if(ModeNight.getAttribute("href")=="css/lightstyles.css")
    {
       ModeNight.href="css/darkstyles.css"
       dayOrNight.innerHTML="Sviesus fonas"
       parinktys.nightMode=true;
    }
    else{
        ModeNight.href="css/lightstyles.css"
        dayOrNight.innerHTML="Tamsus fonas"
        parinktys.nightMode=false;
    }
    localStorage.setItem("masyvas",JSON.stringify(parinktys))
    console.log(  localStorage.getItem("masyvas"))

}

function spalvaa()
{
  let spalva=document.getElementById("spalva")
  
  if(spalva.value=="Žalia")
  {
       titleColor.forEach(element => {
           element.style.color="green"
          
       });
       parinktys.headersColor="green"
  }
  else if( spalva.value=="Violetinė")
  {
    titleColor.forEach(element => {
        element.style.color="purple"
    });
    parinktys.headersColor="purple"
  }
  localStorage.setItem("masyvas",JSON.stringify(parinktys))
  console.log(  localStorage.getItem("masyvas"))

}

function dydiss()
{
    let dydis=document.getElementById("dydis")
  
  if(dydis.value=="Mažas")
  {
       titleColor.forEach(element => {
           element.style.fontSize="2rem"
           console.log( element.style);
       });
       parinktys.headersSize="small"
  }
  else if( dydis.value=="Vidutinis")
  {
    titleColor.forEach(element => {
        element.style.fontSize="3rem"
    });
    parinktys.headersSize="medium"
  }
  else if( dydis.value=="Didelis")
  {
    titleColor.forEach(element => {
        element.style.fontSize="4rem"
    });
    parinktys.headersSize="large"
  }
  localStorage.setItem("masyvas",JSON.stringify(parinktys))
  console.log(  localStorage.getItem("masyvas"))
}