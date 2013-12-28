window.addEventListener('frapp.init', function() {
	/* Render SignIn & Form submit */
	$('body').append(Handlebars.templates.signin({
		version : FRAPP.version.engine,
		year : (new Date()).getFullYear()
	}));

	$('body form').submit(function(e) {
		e.stopPropagation();
		e.preventDefault();
		FRAPP.signin({
			username : e.target.username.value,
			password : e.target.password.value
		}, function(session) {
			!session && alert(L.signinError);
		});
	});

	$('body form input').first().focus();
});

window.addEventListener('frapp.signin', function(e) {
	if(!e.detail.session) return;
	FRAPP.close();
});
