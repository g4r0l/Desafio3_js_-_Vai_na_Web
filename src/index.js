let animais = ["Rinoceronte", "urubu", "elefante", "cabra", "lobo"];
animais.unshift("Urso");
animais.pop();
animais.push("jacaré", "porquinho-da-índia");
animais.shift();

console.log(animais);

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

let eu = {
  nome: "Carolina",
  idade: 22,
  estado: "RJ"
};

eu.sexo = "feminino";
delete eu.idade;

console.log(eu);

let cadastro = {
  nome: "João",
  idade: 15,
  telefone: "(21)999999999",
  amigos: ["Karen", "Joana", "Felipe", "Alessandro"]
};

console.log(cadastro.amigos[0]);
console.log(cadastro.amigos[1]);
console.log(cadastro.amigos[2]);
console.log(cadastro.amigos[3]);
