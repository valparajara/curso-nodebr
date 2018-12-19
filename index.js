/* Trabalhando com Callbacks */
/* 

1 obterUsuario()
2 obterTelefone(id)
3 obterEndereco(id)

*/

function obterUsuario(callback){
	setTimeout(function() {
		return callback(null, {
			id: 1,
			nome: 'Chewie',
			dataNascimento: '28/01/2018'
		})
	}, 1000);
}

function obterTelefone(idUsuario, callback){
	setTimeout(function() {
		return callback(null, {
			telefone: '999999',
			ddd: '21'
		})
	}, 2000);

}

function obterEndereco(idUsuario, callback){
	setTimeout(function() {
		return callback(null, {
			rua: 'Rua Kashyyyk',
			numero: '0'
		})

	}, 2000);
}

function resolverUsuario(erro, usuario){
	console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
	if(error){
		console.error('error usuario', error)
		return;
	}
	obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
		if(error1){
			console.error('error telefone', error)
			return;
		}
		obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
			if(error2){
				console.error('error endereco', error)
				return;
			}
			console.log(`
				Nome: ${usuario.nome}
				Endereço: ${endereco.rua},${endereco.numero}
				Telefone: ${telefone.telefone}
			`)
		})
	})
})

// const usuario = obterUsuario()
// const telefone = obterTelefone()

// console.log('telefone', telefone)