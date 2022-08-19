
 $.ajax({
  url: "../static/data.json",
  async: false,
  dataType: 'json',
  success: function (response) {
    data = response
  }
});

console.log(data)
ele = 0

document.getElementById('videoYoutube').innerHTML ='<div id="youtubeEmbed" class="bg_video" data-video-id="asdasdasd"></div>'

for (var i = 0; i < data.length; i++) { 

    document.getElementById('buttonBox').innerHTML += '<li><button id="myBtn" name="botao" onclick="botao(this);butao(this);" type="button" value="'+data[i].id+'">'+data[i].cidade+' - '+data[i].estado+'</button></li>'
    

    
  } 

  

numero = 1

function botao(ele){
    const numero = ele.value-1
    
    const id = data[numero].id
    const cidade = data[numero].cidade
    const estado = data[numero].estado
    const linkYoutube = data[numero].linkYoutube
    const linkRadio = data[numero].linkRadio
    const nomeRadio = data[numero].nomeRadio
    const descricao = data[numero].descricao





    document.getElementById('tituloPrincipal').innerHTML = cidade + ' - ' + estado;
    document.getElementById('descricao').innerHTML = descricao;
    document.getElementById('nomeRadio').innerHTML = nomeRadio;

  
}



var youtubeEmbedElement = document.getElementById("youtubeEmbed");
// Add YouTube API script
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var videoId = youtubeEmbedElement.dataset.videoId;
var startSeconds = 184;
var endSeconds = 99999;
onYouTubeIframeAPIReady = function () {
  player = new YT.Player("youtubeEmbed", {
    videoId: videoId, // YouTube Video ID
    playerVars: {
      autoplay: 1, // Auto-play the video on load
      autohide: 1, // Hide video controls when playing
      disablekb: 1,
      controls: 0, // Hide pause/play buttons in player
      showinfo: 0, // Hide the video title
      modestbranding: 1, // Hide the Youtube Logo
      loop: 1, // Run the video in a loop
      fs: 0, // Hide the full screen button
      rel: 0,
      enablejsapi: 1,
      start: startSeconds,
      end: endSeconds
    },
    events: {
      onReady: function (e) {

        e.target.playVideo();
      },
      onStateChange: function (e) {
        if (e.data === YT.PlayerState.PLAYING) {
          document.getElementById("youtubeEmbed").classList.add("loaded");
        }
        if (e.data === YT.PlayerState.ENDED) {
          // Loop from starting point
          player.seekTo(startSeconds);
        }
      }
    }
  });
};


function butao(ele){
  
  const numero = ele.value-1
  const linkYoutube = data[numero].linkYoutube
  player.loadVideoById(linkYoutube);
  var audio = document.getElementById('meuAudio');
  var source = document.getElementById('radio');
  const linkRadio = data[numero].linkRadio
  source.src = linkRadio;
  audio.load(); 
  audio.play(); 
}



function script() {
  document.getElementById('myBtn').click();
}



$(".content").append("<button class='close-btn'>Fechar</div>");
$(".close-btn").click(function() {
  $(this).parent().fadeOut(800);
})



function pesquisar() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('pesquisa');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("button")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


var play = true;
var audio = document.getElementById('meuAudio');
function toggle() {
  if (play) {
    audio.pause()
    pausar = document.getElementById("player");
    pausar.innerText = "Tocar Rádio"
  } else {
    tocar = document.getElementById("player");
    tocar.innerText = "Pausar Rádio"
    audio.play();
  }
};
audio.onplaying = function() {
  play = true;
};
audio.onpause = function() {
  play = false;
};
  


