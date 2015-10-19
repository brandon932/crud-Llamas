// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

$("form").on("submit", function(e){
  e.preventDefault();
  var llamaspitter;
  if ($("#llamaspitter").is("checked")){
    llamaspitter= true;
  }else{
    llamaspitter = false;
  }
  var payload = {
    name: $("#llamaName").val(),
    age: $("#llamaAge").val(),
    spitter: llamaspitter
  };
  $.post("/api/llamas", payload, function(data){
    $("#message").html("llama has been added!");
  });
  console.log(payload);
});

function getLlamas(){
  $("allLlamas").html('');
  $get("/api/llamas", function(data){
    for (var i = 0; i < data.length; i++) {
      $("#allLlamas").prepend(
        '<tr><td>'+ data[i].name + "</td></tr>"+
        '<tr><td>'+ data[i].age + "</td></tr>"+
        '<tr><td>'+ data[i].spitter+ "</td></tr>"
      );
    }
  });
}
