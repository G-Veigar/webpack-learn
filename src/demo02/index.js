import sayhi from './sayhi'

console.log('index')

setTimeout(() => {
    console.log('setTimeout')
    document.getElementById('appp').addEventListener('click', () => {
        console.log('click')
        sayhi()
    })
}, 2000)