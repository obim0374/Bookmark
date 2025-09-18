// const spanDesktop = document.querySelectorAll('.span-desktop');
// const simple = document.querySelector('.simple')
// const speed = document.querySelector('.speed')
// const easy = document.querySelector('.easy')
// const tab1 = document.getElementById('tab1');
// const tab2 = document.getElementById('tab2');
// const tab3 = document.getElementById('tab3');


// // spanDesktop.forEach((btn) => {
// //     btn.addEventListener('click', () => {
// //         spanDesktop.forEach((clickedBtn) => {
// //             return clickedBtn.classList.remove('.active')
            
// //         })

// //         btn.classList.add('active')
// //     })
// // })


// simple.addEventListener('click', () => {
//     speed.classList.remove('active')
//     easy.classList.remove('active')
//     simple.classList.add('active')

//     tab1.style.display = 'block'
//     tab2.style.display = 'none'
//     tab3.style.display = 'none'
// })

// speed.addEventListener('click', () => {
//     speed.classList.add('active')
//     simple.classList.remove('active')
//     easy.classList.remove('active')

//     tab1.style.display = 'none'
//     tab2.style.display = 'block'
//     tab3.style.display = 'none'
// })

// easy.addEventListener('click', () => {
//     easy.classList.add('active')
//     simple.classList.remove('active')
//     speed.classList.remove('active')

//     tab1.style.display = 'none'
//     tab2.style.display = 'none'
//     tab3.style.display = 'block'
// })


const simple = document.querySelector('.simple');
const speed  = document.querySelector('.speed');
const easy   = document.querySelector('.easy');

const simpleMob = document.querySelector('.simple-mob');
const speedMob  = document.querySelector('.speed-mob');
const easyMob  = document.querySelector('.easy.mob');

const simpleBtn = document.querySelector('.simplebtn');
const speedBtn = document.querySelector('.speedbtn');
const easyBtn  = document.querySelector('.easybtn');



const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');

function reset() {
  simple.classList.remove('active');
  speed.classList.remove('active');
  easy.classList.remove('active');


  tab1.style.display = 'none';
  tab2.style.display = 'none';
  tab3.style.display = 'none';
}

simple.addEventListener('click', () => {
  reset();
  simple.classList.add('active');
  tab1.style.display = 'block';
});

speed.addEventListener('click', () => {
  reset();
  speed.classList.add('active');
  tab2.style.display = 'block';
});

easy.addEventListener('click', () => {
  reset();
  easy.classList.add('active');
  tab3.style.display = 'block';
});


