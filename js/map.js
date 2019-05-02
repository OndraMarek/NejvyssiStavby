$(function(){
    $('h2').text('Největší mrakodrapy');
    $('.objekt').attr({'style':'fill:rgba(0,0,255,0.8);'});

    $('.objekt').on('click',function(){
        $('.objekt').attr({'style':'fill:rgba(0,0,255,0.8);'});
        $(this).attr({'style':'fill:rgba(0,255,255,0.5);stroke:black'});
        $('#text h2').text($().data('nazev'));
        $('#text .liRok').text($(this).data('rok'));
        $('#text .liMesto').text($(this).data('mesto'));
        $('#text .liStat').text($(this).data('stat'));
        $('#text .liVyska').text($(this).data('vyska'));
        $('img').attr('src',$(this).data('fotka'));
    })
})