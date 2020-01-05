import sayhi from './sayhi'
import './base.css'

console.log('index 222')

setTimeout(() => {
    console.log('setTimeout')
    let $app = document.getElementById('app')
    $app.addEventListener('click', () => {
        $app.innerHTML = 'ddde'
        sayhi()
    })
}, 2000)

if (module.hot) {
    module.hot.accept('./sayhi.js', function() {
        console.log('Accepting the updated sayhis module!')
        sayhi()
    })
}