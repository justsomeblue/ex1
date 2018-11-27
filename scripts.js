var colour;
var correct;
function start(){
var correct = true;
while(correct === true){
 var colour = random();
	  if(colour == 0){
			colour ="RED";
		}
		if(colour == 1){
			colour ="BLUE";
		}
		if(colour== 2){
			colour ="GREEN";
		}
		if(colour == 3){
			colour = false;
		}
		 document.getElementById("simonTalk").value =colour;
		 document.getElementById("simonTalk").innerHTML=colour;
		 correct = false;
		if (correct == false){
		 document.getElementById("simonTalk").value="GAME OVER";
	 }
	}
}




function random() {
	var simon = Math.floor( Math.random()*4);
	return simon
}


function isRed(correct){
	if(correct == 0){
		correct === true;
	}
	else{
		correct === false;
	}
	return correct;
}
function isBlue(correct){
	if(correct == 1){
		correct === true;
	}
	else{
		correct === false;
	}
	return correct;
}
function isGreen(correct){
	if(correct == 2){
		correct === true;
	}
	else{
		correct === false;
	}
	return correct;
}
function isYellow(correct){
	if(correct == 3){
		correct === true;
	}
	else{
		correct === false;
	}
	return correct;
}
