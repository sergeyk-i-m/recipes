const search = document.querySelector('.search');
const recipe = document.querySelectorAll('.recipe')


search.addEventListener('keyup', () => {
    const word = search.value.toLowerCase();
    console.log(word)
    recipe.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display="block") : (item.style.display="none");

    })
})

