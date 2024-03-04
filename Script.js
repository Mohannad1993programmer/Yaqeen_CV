var menu_visible=false;
let menu=document.getElementById("nav");
function mostrarOcultarMenu() {
	if (menu_visible==false) {
		menu.style.display="block";
		menu_visible=true;
	}
	else
	{
		menu.style.display="none";
		menu_visible=false;
	}

}

function moh() {
	if (menu_visible==false) {
		menu.style.display="block";
		menu_visible=true;
	}
	else
	{
		menu.style.display="none";
		menu_visible=false;
	}

}

let links=document.querySelectorAll("nav a");
for (var x=0; x <links.length; x++) {
	links[x].onclick=function ()
	{
		menu.style.display="none";
		menu_visible=false;
	}
}

function crearBarra(id_barra)
{
	for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
	}
 
}

let cplusplus=document.getElementById("cplusplus");
crearBarra(cplusplus);

let Aplus=document.getElementById("Aplus");
crearBarra(Aplus);

let word=document.getElementById("word");
crearBarra(word);

let excel=document.getElementById("excel");
crearBarra(excel);

letPowerPoint=document.getElementById("PowerPoint");
crearBarra(PowerPoint);

let Photoshop=document.getElementById("Photoshop");
crearBarra(Photoshop);

let Markting=document.getElementById("Markting");
crearBarra(Markting);

let Adminstrator=document.getElementById("Adminstrator");
crearBarra(Adminstrator);

let Dataentry=document.getElementById("Data-entry");
crearBarra(Dataentry);

let Teamwork=document.getElementById("Teamwork");
crearBarra(Teamwork);

let FastLearning=document.getElementById("FastLearning");
crearBarra(FastLearning);

let contadores=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
let entro=false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalcplusplus = setInterval(function(){
            pintarBarra(cplusplus, 8.5, 1, intervalcplusplus);
        },100);
        const intervalaplus = setInterval(function(){
            pintarBarra(Aplus, 12.5, 2, intervalaplus);
        },100);
        const intervalword = setInterval(function(){
            pintarBarra(word, 13.5, 3, intervalword);
        },100);
        const intervalexcel = setInterval(function(){
            pintarBarra(excel, 7.5, 4, intervalexcel);
        },100);
        const intervalpowerpoint = setInterval(function(){
            pintarBarra(PowerPoint, 15, 5, intervalpowerpoint);
        },100);
        const intervalphotoshop= setInterval(function(){
            pintarBarra(Photoshop, 9.5, 6, intervalphotoshop);
        },100);
        const intervalmarkting = setInterval(function(){
            pintarBarra(Markting, 10.5, 7, intervalmarkting);
        },100);
       const intervaladminstrator = setInterval(function(){
            pintarBarra(Adminstrator, 15, 8, intervaladminstrator);
        },100);
        const intervaldataentry = setInterval(function(){
            pintarBarra(Dataentry, 15, 9, intervaldataentry);
        },100);
        const intervalteamwork = setInterval(function(){
            pintarBarra(Teamwork, 15, 10, intervalteamwork);
        },100);
        const intervalfastlearning = setInterval(function(){
            pintarBarra(FastLearning, 15.5, 11, intervalfastlearning);
        },100);
     
      
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}