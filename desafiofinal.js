class hero{
    constructor(name, age, type, attackType){
        this.name = name
        this.age = age
        this.type = type
        this.attackType = attackType

    }

    attack(){
        console.log(`O ${this.type} atacou usando ${this.attackType}`)
    }

}
let heroWarrior = new hero("He-man", 30, "Guerreiro", "Espadada")
let heroMage = new hero("Pato Donaldo o Mago", 20, "Mago", "Magia implacável")
let heroPirate = new hero("Luffy", 12, "Pirata", "Haki")
let heroNinja = new hero("Itachu", 18, "Ninja", "Amaterasu")

heroWarrior.attack()
heroMage.attack()
heroPirate.attack()
heroNinja.attack()