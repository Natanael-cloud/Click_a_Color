
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    const ramdomColor = getRandomColor()
    document.body.style.background = colors[ramdomColor]
})

function getRandomColor(){
    return Map.floor( Math.random() * colors.length)
}
