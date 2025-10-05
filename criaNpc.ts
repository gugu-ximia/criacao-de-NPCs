// Interface que define os atributos básicos de um NPC
interface Atributos {
    velocidade: number;
    inteligencia: number;
    forca: number;
    destreza: number;
    magia: number;
    saude: number;
    resistencia: number;
    espirito: number;
}

// Classe abstrata modelo base para todos os NPCs
// Ela já possui os atributos definidos na interface
abstract class NPC implements Atributos {
    // O construtor define todos os atributos que cada NPC terá
    constructor (
        public nome: string,
        public forca: number,
        public inteligencia: number,
        public velocidade: number,
        public destreza: number,
        public magia: number,
        public saude: number,
        public resistencia: number,
        public espirito: number
    ) {}

    // Método abstrato que cada classe filha precisa implementar
    abstract origem(): string;
}

// As raças cada uma com  valores dos atributos únicos e uma origem
class gigante extends NPC {
    constructor(nome: string) {
        // Define valores fixos de atributos para todos os gigantes
        super(nome, 4, 3, 10, 4, 2, 9, 10, 8);
    }

    origem(): string {
        return "Raça ancestral que antigamente vivia nos céus, os gigantes são temidos pela sua força e resistência absurdas";
    }
}

class demonio extends NPC {
    constructor(nome: string) {
        super(nome, 7, 6, 7, 6, 9, 5, 5, 5);
    }

    origem(): string {
        return "O puro mal, essa raça só sabe espalhar caos e destruição por onde passam, igual os magos são conhecidos pelo seu poder mágico";
    }
}

class mago extends NPC {
    constructor(nome: string) {
        super(nome, 5, 10, 3, 5, 10, 4, 4, 9);
    }

    origem(): string {
        return "A definição de poder e magia, os magos eram temidos antigamente não pela sua força mas sim pela sua inteligência e altas quantidades de mana";
    }
}

class barbaro extends NPC {
    constructor(nome: string) {
        super(nome, 7, 3, 9, 5, 2, 9, 9, 6);
    }

    origem(): string {
        return "É a definição de loucura, são rápidos e fortes além de serem os mais maníacos e cruéis, se você escolheu essa raça você também é louco";
    }
}

class humano extends NPC {
    constructor(nome: string) {
        super(nome, 6, 7, 6, 6, 6, 6, 6, 7);
    }

    origem(): string {
        return "Uma das raças mais equilibradas, se você quiser desafios e emoção aposte no humano";
    }
}

class criar {
    constructor(public npc: NPC) {} // Recebe qualquer NPC como parâmetro

    // Salvando as informações dos personagens dentro do metodo
    apresentar(): void {
        console.log(`nome: ${this.npc.nome}`);
        console.log(`origem: ${this.npc.origem()}`);
        console.log("Atributos:", {
            Forca: this.npc.forca,
            Velocidade: this.npc.velocidade,
            Magia: this.npc.magia,
            Destreza: this.npc.destreza,
            Inteligencia: this.npc.inteligencia,
            Vitalidade: this.npc.saude,
            Resistencia: this.npc.resistencia,
            Espirito: this.npc.espirito,
        });
    }
}


const personagem1 = new criar(new gigante("Christian"));
personagem1.apresentar(); 

const personagem2 = new criar(new mago("schimit"));
personagem2.apresentar();