




const produto= document.querySelector('ul');
let produtoAdicionado=[]

// ATUALIZAR A TELA COM PRODUTOS DINAMICOS
function atualizaProdutos(font= produtos){
    font.forEach((item)=>criarCardsProdutos(item.img,item.nome,item.preco,item.secao,item.categoria, item.componentes, item.id));

  // MOSTRAR O PREÇO DO QUE APARECE NA TELA
  
}
atualizaProdutos()

//CRIAR CARDS COM PRODUTO
function criarCardsProdutos(img,nome,preco,secao,categoria,componentes,id){
const liProdutos= document.createElement('li')
    liProdutos.innerHTML=
`<img src=${img} alt="Imagem ${nome}"> 
<h3>${nome}</h3>
<p>R$${preco}</p>
<p>${secao}</p> <p>${categoria}</p>
<ol><li>${componentes}</li></ol>
<button onClick=criarCardsCarrinho(event) id="${id}" lass="adicionarCarrinho">Adicionar ao Carrinho</button>`

produto.appendChild(liProdutos)
}



//CRIAR CARRINHO
const containerCarrinho= document.getElementById('carrinho');
const ulCarrinho= document.createElement('ul')
containerCarrinho.appendChild(ulCarrinho)

const botaoAddCarrinho= document.querySelectorAll(".adicionarCarrinho")


function criarCardsCarrinho(event){
    const prodCarrinho= document.createElement('li')
    let idProd= event.target;
    prodCarrinho.innerHTML= htmlProdCarrinho(idProd.id);
    reducePrecos(produtoAdicionado)

console.log(idProd.id)
console.log(prodCarrinho)
ulCarrinho.appendChild(prodCarrinho)

}


function htmlProdCarrinho(idProd){
   let produtoEncontrado= produtos.find((produtoClicado)=>produtoClicado.id==idProd)

  produtoAdicionado.push(produtoEncontrado);

    return `<img src=${produtoEncontrado.img} alt="Imagem ${produtoEncontrado.nome}"> 
<h3>${produtoEncontrado.nome}</h3>
<p>R$${produtoEncontrado.preco}</p>
<span>${produtoEncontrado.secao} - ${produtoEncontrado.categoria}</span>`
}







 
//BUSCAR CONTEÚDO PELO NOME
const botaoDeBusca= document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
botaoDeBusca.addEventListener("click", buscarConteudo)

function buscarConteudo(event){
    event.preventDefault();

  const buscaPorNome= document.querySelector('.campoBuscaPorNome')
  let textToSearch= buscaPorNome.value;
  
  const filtedName= produtos.filter((letra)=>{
    return letra.nome.toLowerCase().includes(textToSearch.toLowerCase());
  })

  // MOSTRAR O PREÇO DO QUE APARECE NA TELA
  const ul= document.querySelector("ul")
  ul.innerHTML=''
  atualizaProdutos(filtedName)
}


//FILTRAR POR CATEGORIA//
let containerFilter= document.getElementById("filterCategory")
containerFilter.addEventListener("click",filterContent)

function filterContent(e){
    let btnFilter= document.querySelectorAll(".filter");
    let  itemClicked= e.target; 
    
   
    if(itemClicked.id!="filters"){
      
      let secaoConteudoClicado= itemClicked.innerText;
        
      const filtedCat= produtos.filter(char=>{
        return char.secao.includes('Hortifruti');
      })
      if(secaoConteudoClicado==='Mostrar Todos'){
        ul.innerHTML=''
        atualizaProdutos();
      }else{
  
      ul.innerHTML=''
      atualizaProdutos(filtedCat)
      }
    }
    
}


// MOSTRAR O PREÇO DO QUE APARECE NA TELA
let span= document.getElementById('precoTotal')

function reducePrecos(arr){
let total =arr.reduce((valorFinal, item) =>{ return valorFinal+Number(item.preco)} ,0)
return span.innerText=total
}