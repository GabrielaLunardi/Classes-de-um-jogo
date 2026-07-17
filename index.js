console.log("Classes de um jogo");

class Character {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;

    }
    attack() {

        let attackType = "";

        if (this.type === "guerreiro") {
            attackType = "espada";

        } else if (this.type === "mago") {
            attackType = "magia";

        } else if (this.type === "monge") {
            attackType = "artes marciais";

        } else if (this.type === "ninja") {
            attackType = "shuriken";
        } else {
            attackType = "ataque desconhecido";
        }
        
        console.log(`O personagem ${this.name} que é um ${this.type} de ${this.age} anos, atacou usando ${attackType}.`);
    }
}

let character1 = new Character("Aragorn", 30, "guerreiro");
let character2 = new Character("Gandalf", 100, "mago");
let character3 = new Character("Bruce Lee", 32, "monge");
let character4 = new Character("Naruto", 20, "ninja");

character1.attack();
character2.attack();
character3.attack();
character4.attack();