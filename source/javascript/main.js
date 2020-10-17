$( document ).ready(function() {
    $(".img-box").click(function(event){
        event.preventDefault();
        var name = $(this).attr('id');
        nameUrl = name.replace('_','%20');
        name = name.replace('_',' ');
        $('#name').html(name);
        changeIcon(name);
        let url = 'marvel.php';
        $.post(url, {
            name: nameUrl,
        }).done(function (data) {
            var charObj = JSON.parse(data);
            $('.stories').html('');
            if (jQuery.isEmptyObject(charObj.data.results)) {
                error();
            }else{
                var stories = charObj.data.results[0].stories.items;
                let maxstories = 4; // Numero de historias desejadas -1;
                $.each(stories, function(index, linha){
                    if(index > maxstories){
                        return;
                    }
                    $('.stories').append(template(linha))
                });
            }

        }).fail(function (data) {
            error();
        });
    });
});

function error(){
    alert('Ocorreu algum problema na consulta da API!');
    $('.stories').html('Nenhuma historia encontrada!!');
}

function changeIcon(name){
    var url = 'source/images/'+name+'.png'
    $("link[rel='icon']").attr('href', url);
}