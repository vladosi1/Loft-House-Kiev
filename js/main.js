// let menuBtn = document.querySelector('.menu-btn');
// let menu = document.querySelector('.menu');

// menuBtn.addEventListener('click', function(){
// 	menuBtn.classList.toggle('active');
// 	menu.classList.toggle('active');
// })

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

// Добавляем обработчик событий для всего документа
document.addEventListener('click', function(event) {
  // Проверяем, был ли совершен клик вне области меню и кнопки меню
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    // Если был совершен клик вне меню, скрываем меню и удаляем класс 'active' у menuBtn и menu
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
  }
});

