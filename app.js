let barsIcon = document.getElementById('barsIcon')
let XIcon = document.getElementById('XIcon')
let sideBar = document.getElementById('sideBar')

barsIcon.onclick = function(){
   sideBar.style.left = '0'
   barsIcon.classList.add('none')
   XIcon.classList.remove('none')
}

XIcon.onclick = function(){
   sideBar.style.left = '-300px'
   XIcon.classList.add('none')
   barsIcon.classList.remove('none')
}