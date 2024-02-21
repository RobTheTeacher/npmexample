function Game(name, type) {
    this.name = name,
    this.type = type;
}

const smb = new Game("Super Mario Bros", "platform")
const kart= new Game("Mario Kart", "racing");

export const gameArray = [smb, kart];


