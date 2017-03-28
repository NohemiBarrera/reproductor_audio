
 var currentFile = "";

        function playAudio() {
            if (window.HTMLAudioElement) {
                try {
                    var oAudio = document.getElementById('miaudio');
                    var btn = document.getElementById('play'); 
                    var audioURL = document.getElementById('audiofile'); 

                    if (audioURL.value !== currentFile) {
                        oAudio.src = audioURL.value;
                        currentFile = audioURL.value;                       
                    }
 
                    if (oAudio.paused) {
                        oAudio.play();
                        btn.textContent = "Pause";
                    }
                    else {
                        oAudio.pause();
                        btn.textContent = "Play";
                    }
                }
                catch (e) {
                     if(window.console && console.error("Error:" + e));
                }
            }
        }

        function rewindAudio() {
            if (window.HTMLAudioElement) {
                try {
                    var oAudio = document.getElementById('miaudio');
                    oAudio.currentTime -= 10.0;
                }
                catch (e) {
                     if(window.console && console.error("Error:" + e));
                }
            }
        }

        function forwardAudio() {

            if (window.HTMLAudioElement) {
                try {
                    var oAudio = document.getElementById('miaudio');
                    oAudio.currentTime += 30.0;
                }
                catch (e) {
                     if(window.console && console.error("Error:" + e));
                }
            }
        }

        function restartAudio() {
            if (window.HTMLAudioElement) {
                try {
                    var oAudio = document.getElementById('miaudio');
                    oAudio.currentTime = 0;
                }
                catch (e) {
                     if(window.console && console.error("Error:" + e));
               }
            }
        }