$(document).ready(function(){
    $(".btnExporter").click(function(){
        // $("#Exportat").css("display", "block");
        $("#Exportat").show("slow");
    });
});

$(document).ready(function(){
    $(".closeExportat").click(function(){
        $("#Exportat").hide("slow");
    });
});

// $(document).ready(function() {
//     $('.viewCopy').click(function() {
//       var text = $(this).prevAll('.check').next('.para').text();
//       alert(text);
//     });
//   });
  
// $(document).ready(function() {
//     $('.viewCopy').click(function() {
//       var text = $(this).closest('td').find('.para').text();
//       alert(text);
//     });
//   });

// $(document).ready(function() {
//     $('.btnExporter').on('click', function() {
//       var checkboxes = $('.check:checked');
//       var tasks = checkboxes.map(function() {
//         return $(this).siblings('.para').text();
//       }).get().join('\n');
//       if (tasks !== '') {
//         alert(tasks);
//       }
//     });
//   });

// $(document).ready(function() {
//     $('.viewCopy').click(function() {
//       if($('.check:checked').length > 0) {
//         var text = "";
//         $('.check:checked').each(function() {
//           text += $(this).siblings('.para').text() + "\n";
//         });
//         alert(text);
//       } else {
//         alert("Vous n'avez coche aucun taches");
//       }
//     });
//   });

$(document).ready(function() {
    $('.viewCopy').click(function() {
      if($('.check:checked').length > 0) {
        var doc = new jspdf.jsPDF();
        // var doc = window.jspdf.jsPDF();
        var text = "";
        $('.check:checked').each(function() {
          text += $(this).siblings('.para').text() + "\n";
        });
        alert(text);
        doc.text(text, 10, 10);
        doc.save('fichier.pdf');
      } else {
        alert("Vous n'avez coche aucune tache");
      }
    });
  });