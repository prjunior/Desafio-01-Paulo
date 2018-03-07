	  // Próximo ID para adicionar um novo usuário
      var nextId = 1;
      // ID do usuario que esta sendo editado
      var activeId = 0;

function addUser(){

	var regex = /^[A-Za-z]+$/;      ///^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
	var name = $("#txtNome").val();

	if(name.trim().length < 3 || $("#txtIdade").val() == ""){
		alert("Dados Incorretos, Por favor, digite o seu nome e idade.");
        $("#txtNome").focus(); 
        return false;
}

     else{

     	addUserToTable();
     	formClear();
     } 
        
}

function addUserToTable(id){

if($("#tblUser tbody").length ==0){
	//verifica se a tag <tbody> existe e adiciona caso não exista.
	$("#tblUser").append("<tbody></tbody>");
}


$("#tblUser tbody").append(
	"<tr>" +
	"<td>" + $("#txtNome").val() + "</td>" +
	"<td>" + $("#txtIdade").val() + "</td>" +
	"<td>" + 
			"<button type='button' style='margin-right:20px;' " + "onclick='editUser(this);' " + "class='btn btn-default'" + "data-id='" + id + "'>" + "<span class='glyphicon glyphicon-edit'></span>" + 
            "</button>" + 
    
    		"<button type='button' " + "onclick='deleteUser(this);' " + "class='btn btn-default'" + "data-id='" + id + "'>" + "<span class='glyphicon glyphicon-remove'></span>" +
            "</button>" + 
    "</td>" +

	"</tr>"
	);

nextId += 1;

}

function formClear(){
	$("#txtNome").val("");
	$("#txtIdade").val("");
}

function deleteUser(delete_button){
$(delete_button).parents("tr").remove();
}


function editUser(edit_button){

	var row = $(edit_button).parents("tr");
	var cols = row.children("td");

	activeId = $($(cols[3]).children("button")[0]).data("id");

	$("#txtNome").val($(cols[0]).text());
    $("#txtIdade").val($(cols[1]).text());

    $("#edt").css("display","inline-block");

}

function concluir(id){
	// Encontra o livro na tabela
        var row = $("#tblUser button[data-id='" + id + "']").parents("tr")[0];

        // Adiciona a linha modifica na tabela
        $(row).after(addUserToTable());

        // Remover a linha antiga
        $(row).remove();

        // Limpar o formulário
        formClear();

         $("#edt").css("display","none");

         alert("Usuario alterado com sucesso!")
}
