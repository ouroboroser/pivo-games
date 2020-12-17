interface Game {

}

class Game {
    url: string;

    constructor(gameUrl: string) {
        this.url = gameUrl;
    }
}

export class Millionare extends Game {
    topic: string;

    constructor(url: string, _topic: string) {
        super(url);
        this.topic = _topic;
    }
}