class heroi {
    constructor(type, name, magic) { 
        this.type = type
        this.name = name
        this.magic = magic
    }
    ataque() {
    console.log(`O ${this.type} ${this.name} atacou usando ${this.magic}`)
}
}
     let mago = new heroi("mago","Gandalf",  "magia")
     let guerreiro = new heroi("guerreiro","Aragorn", "espada")
     let monge = new heroi("monge","Frodo", "artes marciais")
     let ninja = new heroi("ninja","Legolas", "shuriken")

        mago.ataque()

    
