
$('input').keyup(function(e) {
	
	var id = $(this).val();
	if(id && e.keyCode === 13){
		
		var promesa = $.get('http://api.github.com/users/'+id);
		var link = 'http://api.github.com/users/'+id;
        promesa.done(x=>console.log(location.href=link))
		.fail(x=>console.log(error));
	}

});

