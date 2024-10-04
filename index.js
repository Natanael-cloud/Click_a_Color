// Declara um array de cores, que contém cinco valores de cor
const colors = ['green', 'yellow', 'purple', 'blue', 'red']

// Seleciona o botão no HTML com o id 'btn' e o armazena na constante 'btn'
const btn = document.getElementById('btn')

// Seleciona o elemento no HTML que tem a classe 'color' e o armazena na constante 'color'
const color = document.querySelector('.color')

// Adiciona um ouvinte de evento (event listener) que aguarda o clique no botão 'btn'
btn.addEventListener('click', function() {
    // Chama a função getRandomColor para obter um índice aleatório do array 'colors'
    const randomColor = getRandomColor()

    // Define a cor de fundo do corpo do documento para uma cor do array, baseada no índice aleatório
    document.body.style.background = colors[randomColor]

    // Atualiza o texto do elemento '.color' para exibir a cor escolhida
    color.textContent = colors[randomColor]
})

// Função que gera um número aleatório dentro do limite do tamanho do array 'colors'
// Retorna um número entre 0 e o tamanho do array 'colors'
function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}
