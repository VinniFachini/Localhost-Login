$(document).ready(function () {
    $('input[type=submit]').click(function (e) { 
        e.preventDefault();
        var usr = $('input[type=text]').val();
        var psw = $('input[type=password]').val();
        if(usr === 'admin' && psw === 'admin') {
            swal({
                title: "Login",
                text: "Usuario e senha estão corretos :D",
                icon: "success"
            });
        } else {
            swal({
                title: "Login",
                text: "Usuario e senha estão incorretos :/",
                icon: "error",
                button: "Tentar Novamente"
            });
        }
    });
})
