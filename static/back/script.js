function getValue() {
  data = {
    "cidade": $("#cidade").val(),
    "estado": $("#estado").val(),
    "link_video": $("#link_video").val(),
    "link_radio": $("#link_radio").val(),
    "nome_radio": $("#nome_radio").val(),
    "descricao": $("#descricao").val(),
    "modalidade": $("#modalidade").val()
  }
  return data
}


$("button").on("click",function(){
  let work = $(this).attr('id');
  if (work == "editarCidade") {
    let id = $(this).val();
    $("#editar").val(id)
    $.ajax({
      url: "/admin/get/dirigindo/"+id,
      cache: false,
      success: function(html){
        console.log(html);
        html = html[0]
        $("#modalidade").val(html.modalidade)
        $("#cidade").val(html.cidade)
        $("#estado").val(html.estado)
        $("#link_video").val(html.link_video)
        $("#link_radio").val(html.link_radio)
        $("#nome_radio").val(html.nome_radio)
        $("#descricao").val(html.descricao)
      }
    });

  }
  if (work == "eliminarCidade") {
    alert(work)
  }


})


$(".btn-outline-success").on("click",function(){
  $("#cidadeForm").find("input,select,textarea").val("")
  $("#editar").text("Adicionar")
  $("#editar").attr("id", "adicionar")
  $(".modal-title").text("Adicionar Cidade")
  
})

$("#adicionar").on("click", function() {
  $.ajax({
      url: "/admin/add",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(getValue()),
      success: function(data){/* do something */}
  });

})




//EDITAR
$("#editar").on("click", function () {
  let id = $(this).val();
  alert(id)
  $.ajax({
    url: "/admin/edit/"+id,
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(getValue()),
    success: function(data){/* do something */}
});

})

