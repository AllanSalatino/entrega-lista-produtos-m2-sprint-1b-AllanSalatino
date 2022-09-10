const listaProdutos = document.querySelector("#listProdutos")


let novaListaProdutos = []

function CriaElementosNaLista (produtos) {
    let contador = 1
    const ul = document.createElement("ul")
    

    for(let i= 0; i<produtos.length; i++){
        

        const li = document.createElement("li")
        li.classList.add("itens")
        li.id =`item${contador}`

        const img = document.createElement("img")
        img.src = produtos[i].imagem

        const h3 = document.createElement("h3")
        h3.innerText = produtos[i].nome

        const p = document.createElement("p")
        p.innerText = `R$ ${produtos[i].preco},00`

        const span = document.createElement("span")
        span.innerText = produtos[i].secao

        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)
        ul.appendChild(li)
        contador++

        
    }
    precoTotal(produtos)
    listaProdutos.appendChild(ul)
    novaListaProdutos = []
}

CriaElementosNaLista(produtos)


const bt_mostrarTodos = document.querySelector(".estiloGeralBotoes--mostrarTodos")
bt_mostrarTodos.addEventListener("click", () => {  
    listaProdutos.innerHTML = ""
    CriaElementosNaLista(produtos)
})

const itens = document.querySelectorAll(".itens")

const bt_mostraHortifruti = document.querySelector(".estiloGeralBotoes--filtrarHortifruti")
bt_mostraHortifruti.addEventListener("click", () => {
   
    let arrFilter = produtos.filter((elemento) =>{
       return elemento.secao.includes("Hortifruti")
    })
   
    listaProdutos.innerHTML =""
    CriaElementosNaLista(arrFilter)
})



const input = document.querySelector(".campoBuscaPorNome")
const bt_buscar = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")
bt_buscar.addEventListener("click", () => {
    novaListaProdutos = []
    listaProdutos.innerHTML =""

    let textoBusca = input.value.toLowerCase()
    
    let arrFilter = produtos.filter( (elemento) => {
        return elemento.nome.toLowerCase().includes(textoBusca) || elemento.secao.toLowerCase().includes(textoBusca)
    })
    CriaElementosNaLista(arrFilter)
})



function precoTotal(array){
    
    let arrPrecos = []
    let total = 0

    for(let i=0; i<array.length; i++){
        arrPrecos.push(array[i].preco)
    }
    for(let i=0; i<arrPrecos.length; i++){
        total += arrPrecos[i]
    }
    return document.querySelector("#precoTotal").innerText = `${total}.00`
}

precoTotal()