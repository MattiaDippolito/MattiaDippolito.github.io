function attiva(){
    alert("Offerta attivata");
}
function inizializza(){
    var sesso=["maschio", "femmina"];
    for(var i=0; i<2; i++){
        var s = document.createElement("option");
        s.value = sesso[i];
        s.innerHTML = sesso[i];
        document.getElementById("sesso").appendChild(s);
    }
    var occhi=["blu", "marroni", "neri"];
    for(var i=0; i<3; i++){
        var o = document.createElement("option");
        o.value = occhi[i];
        o.innerHTML = occhi[i];
        document.getElementById("occhi").appendChild(o);
    }
    var prov=["Como", "Milano", "Carate Brianza", "Torino", "Roma"];
    for(var i=0; i<5; i++){
        var p = document.createElement("option");
        p.value = prov[i];
        p.innerHTML = prov[i];
        document.getElementById("provincia").appendChild(p);
    }
}