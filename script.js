const produtos = {
  vendidos: [
    { nome: "Jaqueta Puff", preco: "R$ 169,90" },
    { nome: "Vestido Indiano", preco: "R$ 119,90" },
    { nome: "Calça Cargo", preco: "R$ 119,90" }
  ],
  baratos: [
    { nome: "Short Jeans", preco: "R$ 79,00" },
    { nome: "Calça Jeans Skin", preco: "R$ 99,90" },
    { nome: "Cropped", preco: "R$ 49,90" }
  ],
  estilosos: [
    { nome: "Vestido Florido", preco: "R$ 159,90" },
    { nome: "Jaqueta de Couro", preco: "R$ 169,90" },
    { nome: "Blusa Polo", preco: "R$ 159,90" }
  ]
};

function mostrarAba(aba) {
  const container = document.getElementById("catalogo");
  container.innerHTML = "";

  produtos[aba].forEach(produto => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `<h3>${produto.nome}</h3><p>${produto.preco}</p>`;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarAba("vendidos");
});
