import {square, cube} from './math'
import './main.css'

console.log(square(2), cube(3))

import('./async').then(module => {
    console.log(module)
})
