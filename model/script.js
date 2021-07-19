const model = document.querySelectorAll('.model');
const openModel = document.querySelector('.open-model');
const close = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
// console.log(model);
// console.log(openModel);
for (let i = 0; i < model.length; i++) {
  // console.log(model[i].textContent);
 model[i].addEventListener('click', function () {
    openModel.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
close.addEventListener('click',function(){
    openModel.classList.add('hidden');
    overlay.classList.add('hidden');
})
overlay.addEventListener('click',function(){
  openModel.classList.add('hidden');
  overlay.classList.add('hidden');
});