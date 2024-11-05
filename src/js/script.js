//Import das clases game e gameManager 
import { Game } from './game.js';
import { GameManager } from './gameManager.js';
// Criacao de uma nova instancia GameManager
const gameManager = new GameManager();
//Obtem os elementos do form pelo ID do html
const gameForm = document.getElementById('gameForm');
const gamesList = document.getElementById('gamesList');

//Criacao da funcao especifica para listar os jogos na Interface
function renderGames() {
    // Limpa o conteudo atual da lista
    gamesList.innerHTML = '';
    //Para cada jogo retornado e criado um item na lista
    gameManager.getGames().forEach((game, index) => {
        //E criado un novo elemento na Lista
        const li = document.createElement('li');
        //E definido o content  HTML da lista E butoes da lista
        li.innerHTML = `
            <strong>${game.name}</strong> - ${game.publisher} (${game.releaseDate})
            <button onclick="editGame(${index})">Editar</button>
            <button onclick="deleteGame(${index})">Deletar</button>
        `;
        //Adicionado um item a lista (gameList)
        gamesList.appendChild(li);
    });
}

