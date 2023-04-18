function ListDesign() {
    // Creation design
    $.fn.Design = function(token) {
        $('body').append(
            $('<div class="List"></div>').append(
                $('<div class="haut"></div>').append(
                    $('<p class="current-time"></p>'),
                    $('<p id="alfred"> Alfred </p>')
                ),
                $('<div class="titre"> List Taches </div>'),
                $('<div class="mid"></div>').append(
                    $(`<ul class="ulList_${token}"></ul>`)
                )
            )
        );
    }
    // ----------------------------------------------------------------------

    // Affichage des taches
    if (tabList.length > 0) {
        let token = 0
        $('body').Design(token);
        $.each(tabList, function(index, value) {
            if (value != null && value !== undefined) {
                if (index >= deb && index <= fin) {
                    $(`.ulList_${token}`).append("<li class='liList" + index + "'>" + (value.Task_text != null && value.Task_text !== undefined ? value.Task_text : '') + "</li>");
                    $(`.ulList_${token} li`).css({
                        'margin-bottom' : '10px',
                        'color' : '#1a1919',
                        'font-family' : 'Arial, Helvetica, sans-serif'
                    })
                }

                if (index == fin && index < dim) {
                    token++
                    $('body').Design(token);
                    deb = fin + 1;
                    fin = deb + 16;
                }
            }
        });
    }
    // ----------------------------------------------------------------------

    $.getScript(`partiels/ListHeure.js`, function() {
        ListHeure()
    })
}