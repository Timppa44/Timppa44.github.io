document.addEventListener("DOMContentLoaded", onkoKirjautunut);
function onkoKirjautunut(){
let Kirjautunut =`kylla`;
if(Kirjautunut === `kylla`){
    document.getElementById("Tervetulo_teksti").textContent += `Timo!`;
}
}
function kirjaudu(){
    localStorage.setItem("nimi", "Timo")
}
