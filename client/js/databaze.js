$(function(){
    /* Získá všechny záznamy z stavby.json prostřednictvím AJAX požadavku */
    function getAll() {
        $.ajax({
            url: 'http://localhost:3000/api/stavby',
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                $('#list').html('');
                data.forEach(function(film) {
                    $('#list').append('<tr><td>'+film.id
                        +'</td><td><a href="#" data-id="'+film.id+'">'+film.name
                        +'</a></td><td>'+film.year+'</td><td>'+film.state+'</td><td><button class="btn btn-danger delete" data-id="'+film.id+'">Smazat</button></td></tr>');
                });
                $('#list a').on('click', function(){
                    getById($(this).data('id'));
                }); 
                $('.delete').on('click', function(){
                    deleteById($(this).data('id'));
                }); 
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }

    /* Získá jeden záznam podle id */
    function getById(id) {
        $.ajax({
            url: 'http://localhost:3000/api/stavby/' + id,
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                $('#id').val(data.id);
                $('#name').val(data.name);
                $('#year').val(data.year);
                $('#state').val(data.state);
                $('#content').val(data.content);
                $('#modelId').modal('show');
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }

    /* Smazat záznam podle id */
    function deleteById(id) {
        $.ajax({
            url: 'http://localhost:3000/api/stavby/' + id,
            type: 'DELETE',
            dataType: 'json',
            cache: false,
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                getAll();
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }

    /* Vytvořit nový záznam */
    function create(data) {
        $.ajax({
            url: 'http://localhost:3000/api/stavby',
            type: 'POST',
            data: data,
            dataType: 'json',            
            contentType: 'application/json',
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                getAll();
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }

    /* Editovat záznam */
    function update(id, data) {
        $.ajax({
            url: 'http://localhost:3000/api/stavby/' + id,
            type: 'PUT',
            data: data,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                getAll();
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }

    $('button#submit').on('click', function(){
        var json = {};
        json.name = $('#name').val();
        json.year = $('#year').val();
        json.state = $('#state').val();
        json.content = $('#content').val();
        var data = JSON.stringify(json);
        if ($('#id').val()) {
            update($('#id').val(), data);
        } else {
            create(data);
        }
    });

    $('button#create').on('click', function(){
        $('#id').val('');
        $('#name').val('');
        $('#year').val('');
        $('#state').val('');
        $('#content').val('');
    });

    getAll();
});