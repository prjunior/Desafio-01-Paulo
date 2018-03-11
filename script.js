      var nextId = 1;
      var activeId = 0;

      function addUser() {

          var regex = /^[A-Za-z]+$/;
          var name = $("#txtNome").val();

          if (name.trim().length < 3 || $("#txtIdade").val() == "") {
              alert("Dados Incorretos, Por favor, digite o seu nome e idade.");
              $("#txtNome").focus();
              return false;
          } else {

              addt();
              formClear();
          }

      }
        
      function addt(){
          if ($("#tblUser tbody").length == 0) {
              $("#tblUser").append("<tbody></tbody>");
          }
          
          $("#tblUser tbody").append(addUserToTable(nextId));
          
          nextId += 1;
      }

      function addUserToTable(id) {

         var row =
              "<tr>" +
              "<td>" + $("#txtNome").val() + "</td>" +
              "<td>" + $("#txtIdade").val() + "</td>" +
              "<td>" +
              "<button type='button' style='margin-right:20px;' " + "onclick='editUser(this);' " + "class='btn btn-default'" + "data-id='" + nextId + "'>" + "<span class='glyphicon glyphicon-edit'></span>" +
              "</button>" +

              "<button type='button' " + "onclick='deleteUser(this);' " + "class='btn btn-default'" + "data-id='" + nextId + "'>" + "<span class='glyphicon glyphicon-remove'></span>" +
              "</button>" +
              "</td>" +

              "</tr>"
          return row;
          
          
          nextId += 1;

      }

      function formClear() {
          $("#txtNome").val("");
          $("#txtIdade").val("");
      }

      function deleteUser(delete_button) {
          $(delete_button).parents("tr").remove();
      }


      function editUser(edit_button) {

          var row = $(edit_button).parents("tr");
          var cols = row.children("td");

          activeId = $($(cols[2]).children("button")[0]).data("id");

          $("#txtNome").val($(cols[0]).text());
          $("#txtIdade").val($(cols[1]).text());

          $("#edt").css("display", "inline-block");
          $("#addBtn").prop("disabled" , true);

      }

      function attTable(id) {
        var row = $("#tblUser button[data-id='" + id + "']").parents("tr")[0];
          
         
          $(row).after(addUserToTable());

          $(row).remove();

          formClear();

          $("#edt").css("display", "none");
      }
    function concluir(){
     attTable(activeId);
      $("#addBtn").prop("disabled" , false);
    }