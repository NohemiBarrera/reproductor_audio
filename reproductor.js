function play(){
	var player = document.getElementById("player");
	var progressBar = document.getElementById("progressBar")
	player.play();

	progressBar.max = player.duration;
}

function pause(){
	var player = document.getElementById("player");
	player.pause();
}

function forward(){
	var player = document.getElementById("player");
	player.currentTime = player.currentTime + 10;
}

function back(){
	var player = document.getElementById("player");
	player.currentTime = player.currentTime - 10;
}

function stop(){
	//player.load()

	player.currentTime=0;
	player.pause()
}

function volumeUp(){
	var player = document.getElementById("player");
	if(player.volume < 1){
	player.volume += 1;
	}
}

function volumeDown(){
	var player = document.getElementById("player");
	if(player.volume >= 0.1){
	player.volume = player.volume - 0.1;
	}
}

function mostrarProgreso(){
	var player = document.getElementById("player");
	var progressBar = document.getElementById("progressBar");
	progressBar.value = player.currentTime;
	//progressBar.max = player.duration
}