const addButton = document.querySelector('.addProduct')
const form = document.querySelector('form')
const button = document.querySelector('.submitBtn')
const crossBtn = document.querySelector('.cross')
const cancelBtn = document.querySelector('.cancel')
const productList = document.querySelector('#productList')

addButton.addEventListener('click',()=>{
form.style.display = 'block'
productList.style.opacity = 0.2
})

crossBtn.addEventListener('click',()=>{
  form.style.display = 'none'
  productList.style.opacity = 1
})
productList.addEventListener('click',()=>{
  form.style.display = 'none'
   productList.style.opacity = 1
})
cancelBtn.addEventListener('click',()=>{
  form.style.display = 'none'
   productList.style.opacity = 1
})

