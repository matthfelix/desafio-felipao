//variáveis

let nomeHeroi = "Hollow Knight"
let xp = 5357
let nivel

//condições

if(xp <= 1000) {
    nivel = "Ferro"
}else if(xp >= 1001 && xp <= 2000) {
	nivel = "Bronze"
}else if(xp >= 2001 && xp <= 5000) {
	nivel = "Prata"
}else if(xp >= 5001 && xp <= 7000) {
	nivel = "Ouro"
}else if(xp >= 7001 && xp <= 8000) {
	nivel = "Platina"
}else if(xp >= 8001 && xp <= 9000) {
	nivel = "Diamante"
}else if(xp >= 9001 && xp <= 10.000) {
	nivel = "Imortal"
}else if(xp >= 10001){
	nivel = "Radiante"
}

console.log("O herói " + nomeHeroi + ", está no nível " + nivel + "!")