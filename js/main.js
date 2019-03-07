$(function(){
    var odkazy = $('#odkazy ul');
    var info = $('#info div');
    budovy.forEach(function(obj,idx){
        info.append('<h4>'+obj.name+'</h4><li>Stát: '
                    +obj.state+'</li><li>Město: '
                    +obj.city+'</li><li>Výška: '
                    +obj.height+'</li><li>Počet pater: '
                    +obj.storey+'</li><li>Rok dokončení stavby: '
                    +obj.year+'</li>');
        odkazy.append('<li><a href="'+ obj.link +'">'+ obj.name +'</a></li>');
    });
    $('#info h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#048'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });

    var i = 0;
    window.setInterval(function(){
        $('#vystavba img').attr('src','img/'+vystavba[i].photo);
        $('#vystavba figcaption').text(vystavba[i].place);
        $('#vystavba p').text(vystavba[i].description);
        i<vystavba.length-1 ? i++ : i=0;
    }, 20000);
});
