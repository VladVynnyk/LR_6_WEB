let firstHeader = document.querySelector('#header1')
let clonedHeader = firstHeader.cloneNode(true)

document.querySelector('#cell1').appendChild(clonedHeader)


let secondHeader = document.querySelector('#header2')
let SecondClonedHeader = secondHeader.cloneNode(true)

document.querySelector('#cell2').appendChild(SecondClonedHeader)


let thirdHeader = document.querySelector('#header3')
let thirdClonedHeader = thirdHeader.cloneNode(true)

document.querySelector('#cell3').appendChild(thirdClonedHeader)



let firstArticle = document.querySelector('#article1')
let clonedArticle = firstArticle.cloneNode(true)

document.querySelector('#cell4').appendChild(clonedArticle)


let secondArticle = document.querySelector('#article2')
let clonedSeconeArticle = secondArticle.cloneNode(true)

document.querySelector('#cell5').appendChild(clonedSeconeArticle)


let thirdArticle = document.querySelector('#article3')
let clonedThirdArticle = thirdArticle.cloneNode(true)

document.querySelector('#cell6').appendChild(clonedThirdArticle)


let image = document.querySelector('#image')

let table = document.querySelector('#table').before(image)

