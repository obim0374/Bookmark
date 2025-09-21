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


// mobile design js


const simpleMob = document.querySelector('.simple-mob');
const speedMob  = document.querySelector('.speed-mob');
const easyMob  = document.querySelector('.easy-mob');

const simpleBtn = document.querySelector('.simplebtn');
const speedBtn = document.querySelector('.speedbtn');
const easyBtn  = document.querySelector('.easybtn');


function resetMobile () {
  simpleMob.classList.remove('active');
  speedMob.classList.remove('active');
  easyMob.classList.remove('active');

  tab1.style.display = 'none';
  tab2.style.display = 'none';
  tab3.style.display = 'none';
}


simpleBtn.addEventListener('click', () => {
  resetMobile();
  simpleMob.classList.add('active');
  tab1.style.display = 'block';
});


speedBtn.addEventListener('click', () => {
  resetMobile();
  speedMob.classList.add('active');
  tab2.style.display = 'block';
});


easyBtn.addEventListener('click', () => {
  resetMobile();
  easyMob.classList.add('active');
  tab3.style.display = 'block';
});



// faq js  for both  desktop and mobile

let faqQuestionAns = document.querySelectorAll('.faq-ques-ans');
let arrow = document.getElementById ('arrow')

faqQuestionAns.forEach((faq) => {
  const question = faq.querySelector('.faq-ques')
  const answer = faq.querySelector('.faq-ans')


  answer.style.display = 'none'
   
  question.addEventListener('click', () => {
    let isActive = question.classList.contains('active');

    faqQuestionAns.forEach((item) => {
      const ques = item.querySelector('.faq-ques');
      const ans = item.querySelector('.faq-ans');
  

      ques.classList.remove('active')
      ans.style.display = 'none'

    })

    if(!isActive){
      question.classList.add('active')
      answer.style.display = 'block'
    }
  })
})



// input js for both desktop and mobile

let emailInput = document.querySelector('.input')
let inputGroup = document.querySelector('.input-group')

emailInput.addEventListener('blur', () => {
  let emailValue = emailInput.value.trim();
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

  if (!emailPattern.test(emailValue) &&  emailValue !== ""){
    inputGroup.classList.add('active')
  }else {
    inputGroup.classList.remove('active')
  }
} )

//  mobile nav js
const desktopNav = document.querySelector('.desktop-nav');
const mobileNav = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  mobileNav.classList.add('active');
  // mobileNav.style.transition = '0.3s all ease-in-out';
  desktopNav.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  desktopNav.style.display = 'flex';
})