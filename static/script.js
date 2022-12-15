var capitais = ['Cabul', 'Pretória', 'Tirana', 'Berlim', 'Andorra-a-Velha', 'Luanda', 'São João', 'Riade', 'Argel', 'Buenos Aires', 'Erevã', 'Camberra', 'Viena', 'Bacu', 'Nassau', 'Daca', 'Bridgetown', 'Manama', 'Bruxelas', 'Belmopã', 'Porto Novo', 'Minsque', 'Sucre', 'Saraievo', 'Gaborone', 'Brasília', 'Bandar Seri Begauã', 'Sófia', 'Uagadugu', 'Bujumbura', 'Timbu', 'Praia', 'Iaundé', 'Pnom Pene', 'Otava', 'Doa', 'Astana', 'Jamena', 'Santiago', 'Pequim', 'Nicósia', 'Bogotá', 'Moroni', 'Brazavile', 'Pionguiangue', 'Seul', 'Pristina', 'Iamussucro', 'São José', 'Zagrebe', 'Cidade do Cuaite', 'Havana', 'Copenhaga', 'Roseau', 'Cairo', 'Abu Dabi', 'Quito', 'Asmara', 'Bratislava', 'Liubliana', 'Madrid', 'Lobamba', 'Jerusalém Oriental', 'Washington, D.C.', 'Talim', 'Adis Abeba', 'Suva', 'Manila', 'Helsínquia', 'Paris', 'Libreville', 'Banjul', 'Acra', 'Tebilíssi', 'São Jorge', 'Atenas', 'Cidade da Guatemala', 'Georgetown', 'Conacri', 'Malabo', 'Bissau', 'Porto Príncipe', 'Tegucigalpa', 'Budapeste', 'Saná', 'Majuro', 'Nova Déli', 'Jacarta', 'Teerão', 'Bagdade', 'Dublim', 'Reiquiavique', 'Jerusalém', 'Roma', 'Kingston', 'Tóquio', 'Jibuti', 'Amã', 'Vienciana', 'Maseru', 'Riga', 'Beirute', 'Monróvia', 'Trípoli', 'Vaduz', 'Vílnius', 'Luxemburgo', 'Escópia', 'Antananarivo', 'Cuala Lumpur', 'Lilôngue', 'Malé', 'Bamaco', 'Valeta', 'Rebate', 'Porto Luís', 'Nuaquechote', 'Cidade do México', 'Nepiedó', 'Paliquir', 'Maputo', 'Quixinau', 'Mónaco', 'Ulã Bator', 'Podgoritsa', 'Vinduque', 'Iarém', 'Catmandu', 'Manágua', 'Niamei', 'Abuja', 'Oslo', 'Wellington', 'Mascate', 'Amesterdão', 'Ngerulmud', 'Cidade do Panamá', 'Porto Moresby', 'Islamabade', 'Assunção', 'Lima', 'Varsóvia', 'Lisboa', 'Nairóbi', 'Bisqueque', 'Taraua do Sul', 'Londres', 'Bangui', 'Praga', 'Quinxassa', 'São Domingos', 'Bucareste', 'Quigali', 'Moscovo', 'Honiara', 'São Salvador', 'Apia', 'Castries', 'Basseterre', 'São Marinho', 'São Tomé', 'Kingstown', 'Vitória', 'Dacar', 'Freetown', 'Belgrado', 'Singapura', 'Damasco', 'Mogadíscio', 'Sri Jaiavardenapura-Cota', 'Cartum', 'Juba', 'Estocolmo', 'Berna', 'Paramaribo', 'Banguecoque', 'Taipé', 'Duchambé', 'Dodoma', 'Díli', 'Lomé', 'Nucualofa', 'Porto de Espanha', 'Tunes', 'Asgabate', 'Ancara', 'Funafuti', 'Quieve', 'Campala', 'Montevideu', 'Tasquente', 'Porto Vila', 'Vaticano', 'Caracas', 'Hanói', 'Lusaca', 'Harare']

paises = ['Afeganistão', 'África do Sul', 'Albânia', 'Alemanha', 'Andorra', 'Angola', 'Antiga e Barbuda', 'Arábia Saudita', 'Argélia', 'Argentina', 'Arménia', 'Austrália', 'Áustria', 'Azerbaijão', 'Bahamas', 'Bangladexe', 'Barbados', 'Barém', 'Bélgica', 'Belize', 'Benim', 'Bielorrússia', 'Bolívia', 'Bósnia e Herzegovina', 'Botsuana', 'Brasil', 'Brunei', 'Bulgária', 'Burquina Faso', 'Burúndi', 'Butão', 'Cabo Verde', 'Camarões', 'Camboja', 'Canadá', 'Catar', 'Cazaquistão', 'Chade', 'Chile', 'China', 'Chipre', 'Colômbia', 'Comores', 'Congo-Brazzaville', 'Coreia do Norte', 'Coreia do Sul', 'Cosovo', 'Costa do Marfim', 'Costa Rica', 'Croácia', 'Cuaite', 'Cuba', 'Dinamarca', 'Dominica', 'Egito', 'Emirados Árabes Unidos', 'Equador', 'Eritreia', 'Eslováquia', 'Eslovénia', 'Espanha', 'Essuatíni', 'Estado da Palestina', 'Estados Unidos', 'Estónia', 'Etiópia', 'Fiji', 'Filipinas', 'Finlândia', 'França', 'Gabão', 'Gâmbia', 'Gana', 'Geórgia', 'Granada', 'Grécia', 'Guatemala', 'Guiana', 'Guiné', 'Guiné Equatorial', 'Guiné-Bissau', 'Haiti', 'Honduras', 'Hungria', 'Iémen', 'Ilhas Marechal', 'Índia', 'Indonésia', 'Irão', 'Iraque', 'Irlanda', 'Islândia', 'Israel', 'Itália', 'Jamaica', 'Japão', 'Jibuti', 'Jordânia', 'Laus', 'Lesoto', 'Letónia', 'Líbano', 'Libéria', 'Líbia', 'Listenstaine', 'Lituânia', 'Luxemburgo', 'Macedónia do Norte', 'Madagáscar', 'Malásia', 'Maláui', 'Maldivas', 'Mali', 'Malta', 'Marrocos', 'Maurícia', 'Mauritânia', 'México', 'Mianmar', 'Micronésia', 'Moçambique', 'Moldávia', 'Mónaco', 'Mongólia', 'Montenegro', 'Namíbia', 'Nauru', 'Nepal', 'Nicarágua', 'Níger', 'Nigéria', 'Noruega', 'Nova Zelândia', 'Omã', 'Países Baixos', 'Palau', 'Panamá', 'Papua Nova Guiné', 'Paquistão', 'Paraguai', 'Peru', 'Polónia', 'Portugal', 'Quénia', 'Quirguistão', 'Quiribáti', 'Reino Unido', 'República Centro-Africana', 'República Checa', 'República Democrática do Congo', 'República Dominicana', 'Roménia', 'Ruanda', 'Rússia', 'Salomão', 'Salvador', 'Samoa', 'Santa Lúcia', 'São Cristóvão e Neves', 'São Marinho', 'São Tomé e Príncipe', 'São Vicente e Granadinas', 'Seicheles', 'Senegal', 'Serra Leoa', 'Sérvia', 'Singapura', 'Síria', 'Somália', 'Sri Lanca', 'Sudão', 'Sudão do Sul', 'Suécia', 'Suíça', 'Suriname', 'Tailândia', 'Taiuã', 'Tajiquistão', 'Tanzânia', 'Timor-Leste', 'Togo', 'Tonga', 'Trindade e Tobago', 'Tunísia', 'Turcomenistão', 'Turquia', 'Tuvalu', 'Ucrânia', 'Uganda', 'Uruguai', 'Usbequistão', 'Vanuatu', 'Vaticano', 'Venezuela', 'Vietname', 'Zâmbia', 'Zimbábue']

var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var audio = document.getElementById("meuAudio");
function getDate() {
  var x = new Date()
  var x1 = `${x.getDate()}/${x.getMonth()+1}/${x.getFullYear()}`
  x1 = `${semana[x.getDay()]} <br> ${x1} ${x.getHours( ).toString().padStart(2, "0")}:${x.getMinutes().toString().padStart(2, "0")}:${x.getSeconds().toString().padStart(2, "0")}`
  $('#dataHora').html(x1);
  refresh();
}

function refresh(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('getDate()',refresh)
}
refresh()


$.ajax({
  url: "/admin/get/dirigindo/all",
  async: false,
  dataType: 'json',
  success: function (response) {
    data = response
  }
});


data.forEach(function (value, i) {
  $("#listaCidades").append(`<button class="cidades myBtn" type="button" value="${i}">${value.cidade} - ${value.estado}</button>`)
});

$("#pesquisar").on("click", function() {
  $("#resultado").html(``);
  $(this).prop("disabled", true);
  $(this).html(
    `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Aguarde...`
  );

  let cidade = $("#pesquisa").val()
  cidade = cidade.replace(/ /g, "-");
  $.ajax({
    url: "/api/" + cidade.normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
    async: true,
    dataType: 'json',
    success: function (response) {
      resposta = response
      $("#tituloPrincipal").html(`${resposta.cidade} - ${resposta.estado}`)
    $("#descricao").html(resposta.descricao)
    player.loadVideoById(resposta.video)
    player.unMute();
    $("#pesquisar").prop("disabled", false);
    $("#pesquisar").html(`Pesquisar`);
    $("#volumeAmb").html('50%');
    player.setVolume(50);
    setTimeout(function(){player.seekTo(Math.floor(Math.random() * 100) + 50, true)},500);
    $('#nomeRadio').html(resposta.nomeRadio); 
    $('#radio').attr("src", resposta.linkRadio);
    audio.load(); 
    audio.play(); 
    },
    error: function(data) {
      $("#pesquisar").prop("disabled", false);
      $("#pesquisar").html(`Pesquisar`);
      $("#resultado").html(`<p id="resultado">Cidade não encontrada!</p>`);
  },
  });
  

  
})

$('body').css("background-size", "0");



// CARREGAR VIDEO DO YOUTUBE

window.YT.ready(function() {
    aleatorio = data[Math.floor(Math.random()*data.length)]
    player = new YT.Player('videoYoutube', {
        height: '390',
        width: '640',
        videoId: aleatorio.link_video,
        playerVars: { 
          'autoplay': 1, 
          'playsinline': 1, 
          'loop': 1,
          'autohide': 0,
          'controls': 0,
          'disablekb': 1,
          'fs': 0,
          'modestbranding': 1,
          'rel': 0,
          'showinfo': 0,
        },
        events: {
          onReady: function(e) {
            rodarCidade(aleatorio.cidade, aleatorio.estado, aleatorio.descricao, aleatorio.nome_radio, aleatorio.link_radio)
      }}
    });
})

$("#random").on("click", function() {
  $(this).prop("disabled", true);
  $(this).html(
    `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Aguarde...`
  );
  aleatorio = Math.floor(Math.random()*capitais.length)
  cidade = capitais[aleatorio].replace(/ /g, "-");
  
  $.ajax({
    url: "/api/" + cidade.normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
    async: true,
    dataType: 'json',
    success: function (response) {
      resposta = response
      $("#random").prop("disabled", false);
    $("#random").html(`CIDADE ALEATÓRIA`);
      rodarCidade(capitais[aleatorio], paises[aleatorio], resposta.descricao, resposta.nomeRadio, resposta.linkRadio, resposta.video)
    },
    error: function(data) {
  }

  })
      
})



function rodarCidade(cidade, estado, descricao, nome_radio, link_radio, video){
  $("#tituloPrincipal").html(`${cidade} - ${estado}`)
  $("#descricao").html(descricao)
  player.loadVideoById(video)
  player.seekTo(Math.floor(Math.random() * 100) + 50, true)
  player.unMute();
  $('#nomeRadio').html(nome_radio); 
  $('#radio').attr("src", link_radio);
  audio.load(); 
  audio.play(); 

  
}





// VOLUME VIDEO
function volumeAmbiente(volume_value){
  player.unMute();
  $("#volumeAmb").html(volume_value+'%');
  player.setVolume(volume_value / 1);
}







//CÓDIGO RÁDIO


function volumeRadio(volume_value){
  audio.play()
  document.getElementById("vol").innerHTML=volume_value+'%';
  audio.volume = 0.2;
  audio.volume = volume_value / 100;
}








$(".cidades").on("click", function() {
  let id = $(this).val();
  let link_video = data[id].link_video
  let link_radio = data[id].link_radio
  let nome_radio = data[id].nome_radio
  let cidade = data[id].cidade
  let estado = data[id].estado
  let descricao = data[id].descricao
  $("#tituloPrincipal").html(`${cidade} - ${estado}`)
  $("#descricao").html(descricao)
  player.loadVideoById(link_video)
  player.unMute();
  $("#volumeAmb").html('50%');
  player.setVolume(50);
  setTimeout(function(){player.seekTo(Math.floor(Math.random() * 100) + 50, true)},500);
  $('#nomeRadio').html(nome_radio); 
  $('#radio').attr("src", link_radio);
  audio.load(); 
  audio.play(); 
  
  });


var elem = document.documentElement;
$("#fullScreen").click(function() {
    if ($(this).text() == "ABRIR TELA CHEIA") {
      elem.requestFullscreen();
        $(this).text("FECHAR TELA CHEIA"); 
    } else {
      document.exitFullscreen();
        $(this).text("ABRIR TELA CHEIA"); 
    }; 
});

$("#menu").click(function() {
    if ($(this).text() == "FECHAR MENU") {
      $(".caixa, #lista").css('visibility','hidden')
        $(this).text("ABRIR MENU"); 
    } else {
      $(".caixa, #lista").css('visibility','visible')
        $(this).text("FECHAR MENU"); 
    }; 
});

$("#desc").click(function() {
    if ($(this).text() == "FECHAR DESCRIÇÃO") {
      $(".bottom").css('visibility','hidden')
        $(this).text("ABRIR DESCRIÇÃO"); 
    } else {
      $(".bottom").css('visibility','visible')
        $(this).text("FECHAR DESCRIÇÃO"); 
    }; 
});

  $(function() {
  $("#pesquisa").keyup(function(){
    $.ajax({
      type: "GET",
      url: "https://servicodados.ibge.gov.br/api/v1/localidades/municipios",
      dataType: "json",
      success: function(data){
        var cidades = []
        data.forEach(elem => {
          cidade = elem.nome
          estado = elem['microrregiao']['mesorregiao']['UF']['nome']
          cidades.push(cidade)
        });
        $("#pesquisa").autocomplete({
          source: cidades,
          appendTo: "#autoComplete"
        });
      }
    })
  })
})