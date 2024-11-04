export class GameManager {
    constructor(){
        this.games =[];
        this.currrentEditIndex = -1;
    }

    addGame(game) {
        this.games.push(game);
    }

    editGame(index,game) {
        this.games[index] = game;
    }

    deleteGame(index) {
        this.games.splice(index,1);
    }

    getgames() {
        return this.games;
    }
}