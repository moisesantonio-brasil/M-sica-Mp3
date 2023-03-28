let musica = document.getElementsByName("musica")
let partedecima = document.querySelector(".partedecima")
let ms = document.getElementsByName("ms")
let playerbase = document.querySelector(".playerbase")
let btnplay = document.querySelectorAll(".btnplay")
let body = document.querySelector("body")
let espaçocriado = document.querySelector(".espaçocriado")
let textomusica = document.querySelectorAll(".textomusica")
let imgdamusica = document.querySelector(".imgdamusica")
let adicionar = document.querySelector(".add_btn")
let voltarmsc = document.querySelector(".voltarmsc")
let seguirmsc = document.querySelector(".seguirmsc")

let memoriamsc = [
    "musicas instrumentos/OCEANS (OCEANOS) no VIOLÃO Fingerstyle(MP3_160K).mp3",
    "musicas instrumentos/Europe - The Final Countdown(MP3_160K).mp3",
    "musicas instrumentos/Contra baixo solo slap Tiago Marques(MP3_160K).mp3",
    "musicas instrumentos/Éder Medeiros - Solo de Bateria (Independência)(MP3_160K).mp3",
    "musicas instrumentos/Ludovico Einaudi - Nuvole Bianche(MP3_160K).mp3",
    "musicas instrumentos/Touring Musician Brandon Santini Plays Harmonica By The Lake(MP3_160K).mp3",
    "musicas instrumentos/Milonga para as Missões-Renato Borghetti e Arthur Bonilla(MP3_160K).mp3",
    "musicas instrumentos/Tchaikovsky   Valsa das Flores arranjo para harpa solo(MP3_160K).mp3",
    "musicas instrumentos/Solo de Tambor _ Diego Maraboli(MP3_160K).mp3",
    "musicas instrumentos/SOLO BERIMBAU(MP3_160K).mp3",
    "musicas instrumentos/Concerto Inaugural do Órgão de Tubos da Sé de Vila Real(MP3_160K).mp3",
    "musicas instrumentos/I Will Always Love You - SAXOFONE SOLO ----(MP3_160K).mp3",
    "musicas instrumentos/Solo De Trompeta ¨Evocación¨ Por Nelson Gómez(MP3_160K).mp3",
    "musicas instrumentos/Desvairada - Violino solo(MP3_160K).mp3"
]
let textomsc =[
  "oceans (OCEANOS)","The Final Countdown","contra baixo solo slap",
  "solodebateria (independencia)","ludovico einaudi","Touring Musiciian ",
  "milonga para as missões","tchaikovsky valsa","solo de tambor","SOLO DE BERIMBAU",
  "concerto inaugural","SAXOFONE SOLO","evocación por Nelson Gómez","Desvairada"
]
let posiçao = ""

btnplay[0].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[0])
    imgdamusica.textContent = textomsc[0]
    posiçao = 0;
})
btnplay[1].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[1])
    imgdamusica.textContent = textomsc[1]
    posiçao = 1;
})
btnplay[2].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[2])
    imgdamusica.textContent = textomsc[2]
    posiçao = 2;
})
btnplay[3].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[3])
    imgdamusica.textContent = textomsc[3]
    posiçao = 3;
})
btnplay[4].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[4])
    imgdamusica.textContent = textomsc[4]
    posiçao = 4;
})
btnplay[5].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[5])
    imgdamusica.textContent = textomsc[5]
    posiçao = 5;
})
btnplay[6].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[6])
    imgdamusica.textContent = textomsc[6]
    posiçao = 6;
})
btnplay[7].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[7])
    imgdamusica.textContent = textomsc[7]
    posiçao = 7;
})
btnplay[8].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[8])
    imgdamusica.textContent = textomsc[8]
    posiçao = 8;
})
btnplay[9].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[9])
    imgdamusica.textContent = textomsc[9]
    posiçao = 9;
})
btnplay[10].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[10])
    imgdamusica.textContent = textomsc[10]
    posiçao = 10;
})
btnplay[11].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[11])
    imgdamusica.textContent = textomsc[11]
    posiçao = 11;
})
btnplay[12].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[12])
    imgdamusica.textContent = textomsc[12]
    posiçao = 12;
})
btnplay[13].addEventListener("click", () => {
    playerbase.setAttribute("src", memoriamsc[13])
    imgdamusica.textContent = textomsc[13]
    posiçao = 13;
})

voltarmsc.addEventListener("click",()=>{
posiçao += -1;

if(posiçao == 0){
    playerbase.setAttribute("src", memoriamsc[0])
    imgdamusica.textContent = textomsc[0]
    posiçao = 0;
}
if(posiçao == 1){
    playerbase.setAttribute("src", memoriamsc[1])
    imgdamusica.textContent = textomsc[1]
    posiçao = 1;
}
if(posiçao == 2){
    playerbase.setAttribute("src", memoriamsc[2])
    imgdamusica.textContent = textomsc[2]
    posiçao = 2;
}
if(posiçao == 3){
    playerbase.setAttribute("src", memoriamsc[3])
    imgdamusica.textContent = textomsc[3]
    posiçao = 3;
}
if(posiçao == 4){
    playerbase.setAttribute("src", memoriamsc[4])
    imgdamusica.textContent = textomsc[4]
    posiçao = 4;
}
if(posiçao == 5){
    playerbase.setAttribute("src", memoriamsc[5])
    imgdamusica.textContent = textomsc[5]
    posiçao = 5;
}
if(posiçao == 6){
    playerbase.setAttribute("src", memoriamsc[6])
    imgdamusica.textContent = textomsc[6]
    posiçao = 6;
}
if(posiçao == 7){
    playerbase.setAttribute("src", memoriamsc[7])
    imgdamusica.textContent = textomsc[7]
    posiçao = 7;
}
if(posiçao == 8){
    playerbase.setAttribute("src", memoriamsc[8])
    imgdamusica.textContent = textomsc[8]
    posiçao = 8;
}
if(posiçao == 9){
    playerbase.setAttribute("src", memoriamsc[9])
    imgdamusica.textContent = textomsc[9]
    posiçao = 9;
}
if(posiçao == 10){
    playerbase.setAttribute("src", memoriamsc[10])
    imgdamusica.textContent = textomsc[10]
    posiçao = 10;
}
if(posiçao == 11){
    playerbase.setAttribute("src", memoriamsc[11])
    imgdamusica.textContent = textomsc[11]
    posiçao = 11;
}
if(posiçao == 12){
    playerbase.setAttribute("src", memoriamsc[12])
    imgdamusica.textContent = textomsc[12]
    posiçao = 12;
}
if(posiçao == 13){
    playerbase.setAttribute("src", memoriamsc[13])
    imgdamusica.textContent = textomsc[13]
    posiçao = 13;
    playerbase.setAttribute("src", memoriamsc[0])
}else if(posiçao > 13 || posiçao < 0){
    imgdamusica.textContent = textomsc[0]
    posiçao = 0;
}
})

seguirmsc.addEventListener("click",()=>{
    posiçao += +1;

    if(posiçao == 0){
        playerbase.setAttribute("src", memoriamsc[0])
        imgdamusica.textContent = textomsc[0]
        posiçao = 0;
    }
    if(posiçao == 1){
        playerbase.setAttribute("src", memoriamsc[1])
        imgdamusica.textContent = textomsc[1]
        posiçao = 1;
    }
    if(posiçao == 2){
        playerbase.setAttribute("src", memoriamsc[2])
        imgdamusica.textContent = textomsc[2]
        posiçao = 2;
    }
    if(posiçao == 3){
        playerbase.setAttribute("src", memoriamsc[3])
        imgdamusica.textContent = textomsc[3]
        posiçao = 3;
    }
    if(posiçao == 4){
        playerbase.setAttribute("src", memoriamsc[4])
        imgdamusica.textContent = textomsc[4]
        posiçao = 4;
    }
    if(posiçao == 5){
        playerbase.setAttribute("src", memoriamsc[5])
        imgdamusica.textContent = textomsc[5]
        posiçao = 5;
    }
    if(posiçao == 6){
        playerbase.setAttribute("src", memoriamsc[6])
        imgdamusica.textContent = textomsc[6]
        posiçao = 6;
    }
    if(posiçao == 7){
        playerbase.setAttribute("src", memoriamsc[7])
        imgdamusica.textContent = textomsc[7]
        posiçao = 7;
    }
    if(posiçao == 8){
        playerbase.setAttribute("src", memoriamsc[8])
        imgdamusica.textContent = textomsc[8]
        posiçao = 8;
    }
    if(posiçao == 9){
        playerbase.setAttribute("src", memoriamsc[9])
        imgdamusica.textContent = textomsc[9]
        posiçao = 9;
    }
    if(posiçao == 10){
        playerbase.setAttribute("src", memoriamsc[10])
        imgdamusica.textContent = textomsc[10]
        posiçao = 10;
    }
    if(posiçao == 11){
        playerbase.setAttribute("src", memoriamsc[11])
        imgdamusica.textContent = textomsc[11]
        posiçao = 11;
    }
    if(posiçao == 12){
        playerbase.setAttribute("src", memoriamsc[12])
        imgdamusica.textContent = textomsc[12]
        posiçao = 12;
    }
    if(posiçao == 13){
        playerbase.setAttribute("src", memoriamsc[13])
        imgdamusica.textContent = textomsc[13]
        posiçao = 13;
    }else if(posiçao > 13 || posiçao < 0){
        playerbase.setAttribute("src", memoriamsc[0])
        imgdamusica.textContent = textomsc[0]
        posiçao = 0;
    }
    })
    

    
