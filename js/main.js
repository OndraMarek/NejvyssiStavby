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

    function zmenaTextu(i){
        $('#zajimavosti article h4').text(zajimavosti[i].title);
        $('#zajimavosti article p').text(zajimavosti[i].text);
    }

    var a = 0;
    zmenaTextu(a);
    $('#zajimavosti button').on('click',function(){
        a < zajimavosti.length - 1 ? a++ : a = 0;
        zmenaTextu(a);
    })

    var kviz = $('#kviz div.row');
    budovy.forEach(function(obj,idx){
        kviz.append('<div class="col-sm-4"><figure><img class="resize" src="img/budova0.jpg" alt="budova"><figcaption>'
            +obj.name+'</figcaption></figure></div>');
    });

    var foto = $('#kviz img');
    foto.on('click', function(){
        var index = Math.floor(Math.random()*budovy.length);
        $(this).attr('src','img/'+budovy[index].photo)
               .attr('alt',budovy[index].name);
            if (event.altKey){
                $('#mymodal').find('.modal-title').text(budovy[index].name);
                $('#mymodal').find('img').attr('src','img/'+budovy[index].photo);;
                $('#mymodal').modal('show');
            }
    });
 
    $('#kviz .btn-success').on('click', function(){
        $('#kviz figure').each(function(idx,obj) {
            var alt = $(obj).find('img').attr('alt');
            var figcaption = $(obj).find('figcaption').text();
            if (alt == figcaption) {
                $(obj).find('img').css({'border':'2px solid green'}); 
            } else {
                $(obj).find('img').css({'border':'2px solid red'}); 
            }
        });
    });
});
