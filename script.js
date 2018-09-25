let numeroescada = Number (prompt(`Vamos construir uma escadinha de consoles? Quantos degraus terá a escadinha:`));
let i = 1; 
let concat = prompt("Insira um caracter para a construção da escadinha.");
let degrauzao = concat;

while(i <= numeroescada){
  debugger;
  console.log(degrauzao);
  degrauzao += concat;
  i++;
}
