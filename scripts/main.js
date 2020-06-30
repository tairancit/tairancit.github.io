let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
	let meuSrc = minhaImagem.getAttribute('src');
	if (meuSrc === 'images/punk-rock.png') {
		minhaImagem.setAttribute('src','images/punk-rock2.png');
	} else {
		minhaImagem.setAttribute('src','images/punk-rock.png');
	}
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Punk Rock é legal, ' + meuNome;
  }
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Punk Rock é legal, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario(); }