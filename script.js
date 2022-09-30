const icon = document.querySelector ('.taskbar-icon') ;
const search = document.querySelector ('.search') ;
const clear = document.querySelector ('.clear');
const input = document.getElementById('mysearch')
icon.onclick = function(){
  search.classList.toggle('active');
  clear.classList.toggle('d-none')
  input.focus();
  input.select();
}

clear.onclick = function(){
  search.classList.toggle('active');
  clear.classList.toggle('d-none');
  document.getElementById('mysearch').value =''
}

let tru = document.getElementById('tru')
let cong = document.getElementById('cong')
let number = document.getElementById('number')

cong.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(number.value) || 0;
  number.value = currentValue + 1;
})
tru.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(number.value) || 0;
  number.value = currentValue - 1;
})















// let img = document.querySelector('.img')
// let btn1 = document.querySelector('.dot1')
// let btn2 = document.querySelector('.dot2')
// let btn3 = document.querySelector('.dot3')

// btn1.addEventListener('click', () => {
//   img.src = './Access/image/img1.jpeg'
// })
// btn2.addEventListener('click', () => {
//   img.src = './Access/image/img2.jpeg'
// })
// btn3.addEventListener('click', () => {
//   img.src = './Access/image/img3.jpeg'
// })






// let image = document.querySelector ( '.new-img' ) ;
// let i = 0 ;
// function bulb() {
//     i ++ ;

//     if ( i % 2 == 0 ) {
//        this.src = " ./Access/image/img1.jpeg " ;
//     } else {
//         this.src = " ./Access/image/img2.jpeg " ;
//     }
//   }
// image.addEventListener ( ' click ' , bulb ) ;





// function btn () {
//   let image = document.querySelector('.new-img') ;
//   let images = [ './Access/image/img1.jpeg','./Access/image/img2.jpeg', './Access/image/img3.jpeg'] ;                                            ;
// }
//   let random = Math.floor ( Math.random() * 3);
//   image.src = images[random] 

































$(document).ready(function(){
  var count_group = $(".list .item").length;
  var active = 0;
  function Load(){

      $('#item_'+(active - 2 < -1 ? count_group - 2 : active - 2 < 0 ? count_group -1 : active - 2)).removeClass('hide_item');
      $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).removeClass('item_active');
      $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).addClass('hide_item');

      $('#item_'+active).removeClass('hide_item');
      $('#item_'+active).addClass('item_active');

      $('.dots-page div').removeClass('active');
      $('#dot_'+active).addClass('active');

      
      setTimeout(function (){
          $('.effect').removeClass('show_effect_v1');
      }, 6000)
  }
  
  $('#next').on('click', function(){
    active = active + 1 >= count_group ? 0 : active + 1;
    Load();
  })
      $('#prev').on('click', function(){
      active = active - 1 < 0 ? count_group - 1 : active - 1;
      })
  });







































