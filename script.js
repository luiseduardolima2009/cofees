
  //vetores de objeto


const Cafe = [

  { id:"Nenhum", nome:"Nenhum", preco: 0 },
  { id:"Cafe_comum", nome: "Café comum", preco: 1.00 },
  { id:"descafeinado", nome: "Café descafeinado", preco: 1.50 },
  { id:"Cafeina_adicionada", nome: "Café com cafeína adicionada", preco: 2.00 },
  { id:"Cafe_leite", nome: "Café com leite", preco: 2.50 },
  { id:"Cafe_expresso", nome: "Café expresso", preco: 4.50 },
  { id:"Cafe_instantaneo", nome: "Café instantaneo", preco: 1.00 },
  { id:"Cafe_gourmet", nome:"Café gourmet", preco: 5.00 },
  { id:"Capuccino", nome:"Capuccino", preco: 8.00 },
  { id:"Mocha", nome:"Mocha", preco: 8.50 }
  
];

const Chas = [
  { id:"Nenhum", nome:"Nenhum", preco: 0 },
  { id:"Cha_preto", nome:"Chá preto", preco: 2.00 },
  { id:"Cha_verde", nome:"Chá verde", preco: 2.00 },
  { id:"Cha_branco", nome:"Chá branco", preco: 3.00 },
  { id:"Cha_oolong", nome:"Chá oolong", preco: 4.99 },
  { id:"Cha_matcha", nome:"Chá matcha", preco: 8.25 }

];

const temperatura = [
  { id:"Quente", nome:"Quente", preco: 0 },
  { id:"Morno", nome:"Morno", preco: 0 },
  { id:"Gelado", nome:"Gelado", preco: 0 },
];

const Copos = [
  { id:"Nenhum", nome:"Nenhum", preco: 0 },
  { id:"copo_50ml", nome: "Copo 50 ml", preco: 1.99 },
  {id:"copo_100ml", nome: "Copo 100ml ", preco: 2.50 },
  { id:"copo_200ml", nome: "Copo 200ml", preco: 3.50 },
  { id:"copo_300ml", nome: "Copo 300ml", preco: 4.25  },
  { id:"copo_440", nome: "Copo 440ml", preco: 4.50 },
  { id:"copo_500ml", nome: "Copo 500ml", preco: 6.00 }
  ];

  const Xicaras = [
    { id:"Nenhum", nome:"Nenhum", preco: 0 },
    { id:"xicara_100ml", nome: " Xícara 100ml", preco: 5.00 },
    { id:"xicara_180ml", nome: "Xícara 180ml", preco: 8.00 },
    { id:"xicara_200ml", nome: "Xícara 200ml", preco: 10.00 },
    { id:"xicara_250ml", nome: "Xícara 250ml", preco: 13.00 },
    { id:"xicara_325ml", nome: "Xícara 325ml", preco: 16.00 }
  ];

  const Chocolate = [
    { id:"Nenhum", nome:"Nenhum", preco: 0 },
    { id:"Chocolate_leite", nome:"Chocolate ao leite", preco: 1.50 },
    { id:"Chocolate_branco", nome:"Chocolate branco", preco: 1.25 },
    { id:"Chocolate_amargo", nome:"Chocolate amargo", preco: 1.50 },
    { id:"Chocolate_pistache", nome:"Chocolate de pistache", preco: 3.50 }
  
  ];

  const acucar= [
    { id:"Nenhum", nome:"Nenhum", preco: 0 },
    { id:"acucar_cristal", nome: "açúcar cristal", preco: 1.00 },
    { id:"acucar_demera", nome: "açúcar demera", preco: 1.00 },
    { id:"acucar_mascavo", nome: "açúcar mascavo", preco: 1.50 }
  ];  

  const caldas=[
    { id:"Nenhum", nome:"Nenhum", preco: 0 },
    { id:"calda_caramelo", nome: "calda de caramelo", preco: 1.00 },
    { id:"calda_chocolate", nome: "calda de chocolate", preco: 2.00 },
    { id:"calda_morango", nome: "calda de morango", preco: 1.00 },
    { id:"calda_pistache", nome: "calda de pistache", preco: 2.50 }

  ];
 
  const leites=[
    { id:"Nenhum", nome:"Nenhum", preco: 0 },
    { id:"leite_integral", nome: "leite integral", preco: 1.00 },
    { id:"leite_desnatado", nome: "leite desnatado", preco: 1.00 },
    { id:"leite__amendoas", nome: "leite de amendoas", preco: 2.00 }

  ];


  const donuts_D=[
    {id:"nenhum", nome:"nenhum", preço:0},
    {id:"donut_homer", nome:"homer simpsons", preço: 18.00},
    {id:"donut_snickers", nome:"snickers", preço: 20.00},
    {id:"donut_creme_de_avela", nome:"creme de avelã", preço:25.00},
    {id:"donut_cheesecake", nome:"cheesecake de frutas vermelhas", preço:25.00},
    {id:"donut_kinder", nome:"kinder bueno", preço: 28.00},
    {id:"donut_churros", mome:"churros", preço:25.00},
    {id:"donut_redvelvet", nome:"red velvet", preço:20.00},
    
  ]



function preencherOpcoes(){
//funções pra aparecer por trás 
 const selectCafe = document.getElementById("Cafe");
 for (let i = 0; i < Cafe.length; i++){
  const item = Cafe[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectCafe.appendChild(option);
 }


 const selecttemperatura = document.getElementById("temperatura");
 for (let i = 0; i < temperatura.length; i++){
  const item = temperatura[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selecttemperatura.appendChild(option);
 }
  
 const selectChas = document.getElementById("Chas");
 for (let i = 0; i < Chas.length; i++){
  const item = Chas[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectChas.appendChild(option);
 }
 
 const selectCopos = document.getElementById("Copos");
 for (let i = 0; i < Copos.length; i++){
  const item = Copos[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectCopos.appendChild(option);
 }

 const selectXicaras = document.getElementById("Xicaras");
 for (let i = 0; i < Xicaras.length; i++){
  const item = Xicaras[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectXicaras.appendChild(option);
 }
 
 const selectChocolate = document.getElementById("Chocolate");
 for (let i = 0; i < Chocolate.length; i++){
  const item = Chocolate[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectChocolate.appendChild(option);
 }

  const selectacucar = document.getElementById("acucar");
 for (let i = 0; i < acucar.length; i++){
  const item = acucar[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectacucar.appendChild(option);
 }
 
  const selectcaldas = document.getElementById("caldas");
 for (let i = 0; i < caldas.length; i++){
  const item = caldas[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectcaldas.appendChild(option);
 }
  
  const selectleites = document.getElementById("leites");
 for (let i = 0; i < leites.length; i++){
  const item = leites[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectleites.appendChild(option);
 }

  const selecttemperatura1 = document.getElementById("temperatura1");
 for (let i = 0; i < temperatura1.length; i++){
  const item = temperatura1[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selecttemperatura1.appendChild(option);
 }

}



//procurar por id

function procurarPorId(lista, idProcurado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id == idProcurado){
      return lista[i]; //devolve o objeto encontrado
    }
  }
  return null; //retornar nulo se não encontrar o objeto
}
preencherOpcoes();


//Tentando gerar o relatorio

function gerarRelatorio(){

  const nome = document.getElementById("nome").value;
  const CafeId = document.getElementById("Cafe").value;
  const ChasId = document.getElementById("Chas").value;
  const temperaturaId = document.getElementById("temperatura").value;
  const CoposId = document.getElementById("Copos").value;
  const XicarasId = document.getElementById("Xicaras").value;
  const ChocolateId = document.getElementById("Chocolate").value;
  const acucarId = document.getElementById("acucar").value;
  const caldasId = document.getElementById("caldas").value;
  const leitesId = document.getElementById("leites").value;
  const forma_pagamentoId = document.getElementById("forma_pagamento").value;
  const quantidade = document.getElementById("quantidade").value;


  var Cafe1 = procurarPorId(Cafe, CafeId);
  var Chas1 = procurarPorId(Chas, ChasId);
  var temperatura1 = procurarPorId(temperatura, temperaturaId);
  var Copos1 = procurarPorId(Copos, CoposId);
  var Xicaras1 = procurarPorId(Xicaras, XicarasId);
  var Chocolate1 = procurarPorId(Chocolate, ChocolateId);
  var acucar1 = procurarPorId(acucar, acucarId);
  var caldas1 = procurarPorId(caldas, caldasId);
  var leites1 = procurarPorId(leites, leitesId);


  const custoCafe = Cafe1.preco * quantidade;
  const custoChas = Chas1.preco * quantidade;
  const custotemperatura = temperatura1.preco * quantidade;
  const custoCopos = Copos1.preco * quantidade;
  const custoXicaras = Xicaras1.preco * quantidade;
  const custoChocolate = Chocolate1.preco * quantidade; 
  const custoacucar = acucar1.preco * quantidade;
  const custocaldas = caldas1.preco * quantidade;
  const custoleites = leites1.preco * quantidade;
  const total = custoCafe + custoChas + custoChocolate + custoCopos + custoXicaras + custoacucar + custocaldas + custoleites + custotemperatura;

  const relatorioHTML = `
  <h2>Pedido final</h2>
  <p><strong>Nome do cliente:</strong>${nome}<p>
  <p><strong>Café</strong> ${Cafe1.nome} - R$ ${custoCafe.toFixed(2)}</p>
  <p><strong>Chá:</strong> ${Chas1.nome} - R$ ${custoChas.toFixed(2)}</p>
  <p><strong>Temperatura:</strong> ${temperatura1.nome} - R$ ${custotemperatura.toFixed(2)}</p>
  <p><strong>Copos:</strong> ${Copos1.nome} - R$ ${custoCopos.toFixed(2)}</p>
  <p><strong>Xicara:</strong> ${Xicaras1.nome} - R$ ${custoXicaras.toFixed(2)}</p>
  <p><strong>Açucar:</strong> ${acucar1.nome} - R$ ${custoacucar.toFixed(2)}</p>
  <p><strong>Chocolate:</strong> ${Chocolate1.nome} - R$ ${custoChocolate.toFixed(2)}</p>
  <p><strong>Caldas:</strong> ${caldas1.nome} - R$ ${custocaldas.toFixed(2)}</p>
  <p><strong>Leite:</strong> ${leites1.nome} - R$ ${custoleites.toFixed(2)}</p>
  <p><strong>Forma de pagamento:</strong> ${forma_pagamentoId}<p>
  <p><strong>Total:</strong> ${total.toFixed(2)}<p>
`;

  document.getElementById("relatorio").innerHTML = relatorioHTML;

}
