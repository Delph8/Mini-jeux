//Generer un chiffr en alléatoire
//l'utilisateur fer a des proposition
//Continuer tant qu'il n'a pas la bonne proposition

let NumberToFind = 0;
const resultDiv = document.getElementById("resultDiv");

document.getElementById("beginGame")
  .addEventListener("click", function(){
//Lancer la partie
//Récupérer un chiffre alléatoire
  NumberToFind = getRandomInt(1000);
  alert(NumberToFind);
});

document.getElementById("checkPropalButton")
  .addEventListener("click", function(){
    checkPropal();
  });
    document.getElementById("userPropalInput")
    .addEventListener("keyup", function(event){
      if(event.key =='Enter'){
        checkPropal();
      }
    });

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkPropal (){
  let NumberPropal = document.getElementById("userPropalInput").value;
    if(NumberToFind > NumberPropal){
      resultDiv.innerHTML = "C'est plus !";
      let audio = new Audio("audio/JustePrix_audio_plus.mp3");
      audio.play();
    }     
    else if(NumberToFind < NumberPropal){
      resultDiv.innerHTML = "C'est moins ! ";
      let audio = new Audio("audio/JustePrix_audio_Moins.mp3");
      audio.play();
    }
    else if(NumberToFind == NumberPropal){
      resultDiv.innerHTML = "C'est gagné ! ";
      let audio = new Audio("audio/JustePrix_audio_Bipbip.mp3");
      audio.play();
    }

}
