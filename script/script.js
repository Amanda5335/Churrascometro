
let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

function calcular() {
    if (inputAdultos === null) return
    if (inputCriancas === null) return
    if (inputDuracao === null) return


    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    console.log(adultos);

    if (adultos === "") return
    if (criancas === "") return
    if (duracao === "") return

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas); let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    resultado.classList.add("results")

    resultado.innerHTML = `<p >${qdtTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2l de Bebida</p>`

    CleanInput()
}

function CleanInput() {
    inputAdultos.value = ""
    inputCriancas.value = ""
    inputDuracao.value = ""

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000
    }
}

