function hidden(geracao) {

    geracao = spareInt(geracao, 10);
    var ult_ger = 0;

    document.getElementById("ps1").hidden = true;
    document.getElementById("ps2").hidden = true;
    document.getElementById("ps3").hidden = true;
    document.getElementById("ps4").hidden = true;


    if (ult_ger == 0 & geracao == -1 ) {
        document.getElementById("ps4").hidden = false;
        ult_ger = geracao;
    }

    if (geracao == 1) {
        document.getElementById("ps1").hidden = false;
        ult_ger = geracao;
    }

    if (geracao == 2) {
        document.getElementById("ps2").hidden = false;
        ult_ger = geracao;
    }

    if (geracao == 3) {
        document.getElementById("ps3").hidden = false;
        ult_ger = geracao;
    }

    if (geracao == 4) {
        document.getElementById("ps4").hidden = false;
        ult_ger = geracao;
    }


    
}