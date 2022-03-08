document.addEventListener("DOMContentLoaded", onkoKirjautunut);
function onkoKirjautunut(){
let Kirjautunut =`kylla`;
if(Kirjautunut === `kylla`){
    document.getElementById("Tervetulo_teksti").textContent += localStorage.getItem("nimi");
}
}
function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
}
