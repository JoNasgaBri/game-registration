// Define a classe Game
 class Game {
    // construtor da classe recebe três parâmetros: nome, editor e data de lançamento
        constructor(name,publisher, releaseDate) {
    // Atribuicao das propriedades ao objeto
            this.name = name;
            this.publisher = publisher;
            this.releaseDate = releaseDate;
        }
    }
//Define a classe GameManager 
 class GameManager {
    //Inicializacao das propriedades da classe 
    constructor(){
        // Inicializa um array vazio para armazenar os jogos
        this.games =[];
        //Inicializa o índice do jogo atualmente em edição como -1 ou seja nenhum jogo editado
        this.currentEditIndex = -1;
    }
     // Metodo adicionar um novo jogo ao array de games
    addGame(game) {
        this.games.push(game);
    }
    // Metodo editar um jogo que existe com base no indice fornecido
    editGame(index,game) {
        this.games[index] = game;//ocorre a substituicao do jogo indice espeficado pelo novo jogo passado como argumento
    }
    // Metodo para remover um jogo com base no indice fornecido
    deleteGame(index) {
        this.games.splice(index,1);
    }
    //Metodo para obter a lista de jogos
    getGames() {
        return this.games; // Se retorna o array de jogos
    }
}

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
            <button class="edit-btn" onclick="editGame(${index})">Editar</button>
            <button class ="delete-btn"onclick="deleteGame(${index})">Deletar</button>
        `;
        //Adicionado um item a lista (gameList)
        gamesList.appendChild(li);
    });
}
//Funcao para limpar os campos do formulsrio
function clearForm() {
    document.getElementById('gameName').value = '';
    document.getElementById('gamePublisher').value = '';
    document.getElementById('gameReleaseDate').value = '';
    gameManager.currentEditIndex = -1;
}
// Adiciona um evento de submit ao formulario
gameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Obtem os valores dos campos do formulario
    const name = document.getElementById('gameName').value;
    const publisher = document.getElementById('gamePublisher').value;
    const releaseDate = document.getElementById('gameReleaseDate').value;
    // Criacao de uma nova instância de Game com os values do formulario
    const game = new Game(name, publisher, releaseDate);
    // verificacao se esta editando ou adicionando um novo jogo
    if (gameManager.currentEditIndex === -1) {
        gameManager.addGame(game);
    } else {
        gameManager.editGame(gameManager.currentEditIndex, game);
    }
    //limpa o formulario apos a operacao ser concluida
    clearForm();
    // atualiza a lista de jogos na interface
    renderGames();
});
    // Funcao global para editar um jogo
    window.editGame = function(index) {
    const game = gameManager.getGames()[index];
    document.getElementById('gameName').value = game.name;
    document.getElementById('gamePublisher').value = game.publisher;
    document.getElementById('gameReleaseDate').value = game.releaseDate;
    gameManager.currentEditIndex = index;
}
    // Funcao global para deletar um jogo
    window.deleteGame = function(index) {
    if (confirm('Tem certeza que deseja deletar este jogo?')) {
        gameManager.deleteGame(index);
        renderGames();
    }
}
// Renderiza a lista inicial de jogos
renderGames();

