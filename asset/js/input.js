const h3 = document.querySelector('article>h3')
// console.log(h3);
const ul = document.querySelector('article>ul')
// console.log(ul);

const h2 = document.querySelector('div>h2')
// console.log(h2);

const input = document.querySelector('div>input')

const h4 = document.querySelector('div>h4')

const btnNext = document.querySelector('#next')
// console.log(btnNext);

const btnPrev = document.querySelector('#prev')
// console.log(btnPrev);

let awnserLi = []
const data = [
  {
    id: 1,
    question: 'تعداد حلقه های المپیک؟',
    awnser: ['6', '*5', '7', '8'],
    correct: 1
  },
  {
    id: 2,
    question: ' تعداد اعضای شورای نگهبان؟',
    awnser: ['هشت نفر', 'شش نفر', '*دوازده نفر', 'سیزده نفر', 'دونفر'],
    correct: 2
  },
  {
    id: 3,
    question: ' ارتفاعات سهند در کدام استان قرار دارد؟',
    awnser: ['کردستان', '*آذربایجان شرقی'],
    correct: 1
  },
  {
    id: 4,
    question: ' خرمشهر در کدام عملیات آزاد شد؟',
    awnser: ['خیبر', 'فتح المبین', 'بیت المقدس*', 'ثامن الاعمع'],
    correct: 2
  },
  {
    id: 5,
    question: 'کدام ورزشکار ایرانی موفق به کسب مدال طلای المپیک 1966 آتلانتا شد؟',
    awnser: ['عباس جدیدی', 'حسین رضا زاده', 'رسول خادم*', 'امیررضا خادم'],
    correct: 2
  },
  {
    id: 6,
    question: ' تابلوی لبخند ژکوند اثر کیست؟',
    awnser: ['ونگوک', 'داوینچی*', 'پیکاسو', 'رامبراند'],
    correct: 1
  },
  {
    id: 7,
    question: 'کدام درخت نماد صلح است؟',
    awnser: ['سرو', 'زیتون*', 'سیب', 'نارنج'],
    correct: 1
  },
  {
    id: 8,
    question: ' گیوتین اختراع کدام کشور است؟',
    awnser: ['هندوستان', 'ترکیه', 'کره شمالی', 'فرانسه*'],
    correct: 3
  },
  {
    id: 9,
    question: ' جنگ صد ساله چند سال طول کشید؟',
    awnser: ['97سال', '121سال', '116سال*', '100سال'],
    correct: 2
  },
  {
    id: 10,
    question: ' آقای گل ملی جهان کیست؟',
    awnser: ['لیونل مسی', 'مارادونا', 'علی دایی*', 'کریس رونالدو'],
    correct: 2
  },
]
let i = -1

btnNext.addEventListener('click', () => {
  // console.log(btnNext);
  // console.log(i);
  // console.log(data[i]);
  i++
  h3.style.opacity = 1
  ul.style.opacity = 1
  btnNext.innerHTML = 'Skip'
  h4.innerHTML = ''

  //  document.querySelector('article').style.transition='1s'
  if (i < data.length) {
    input.value = [i + 1] * 10
    h2.innerHTML = [i + 1] + ' : of 10 question'
    console.log(h2);
    h3.innerHTML = data[i].id + ' : ' + data[i].question
    ul.innerHTML = ''

    // create li//
    data[i].awnser.map((val) => {
      let li = document.createElement('li')
      li.innerHTML = val
      ul.appendChild(li)
      // console.log(val);

    })
    awnserLi = document.querySelectorAll('ul>li')
    // console.log(awnserLi);
    // console.log(btnNext);
    console.log(i);
    // console.log(data[i]);

    if (i == data.length - 1) {
      h4.innerHTML = 'thanks  for  awnser  our  question'
      h4.style.color = 'green'
    }

  } else {
    document.querySelector('header').style.zIndex='1'
    document.querySelector('header>button').addEventListener('click',()=>{
      document.querySelector('header').style.zIndex='-1'

    })

  }


  // /////////////////////awnser////////////////////////
  awnserLi.forEach((val, s) => {
    btnNext.style.background = 'black'

    val.addEventListener('mousemove', (e) => {
      e.target.style.color = 'skyblue'
      e.target.style.scale = '1.2'

    })
    val.addEventListener('mouseout', (e) => {
      e.target.style.color = 'black'
      e.target.style.scale = '1'
    })
    val.addEventListener('click', () => {
      btnNext.innerHTML = 'next'
      btnNext.style.background = 'blue'


      if (s == data[i].correct) {
        console.log(s);
        val.style.background = 'green'
      } else {
        val.style.background = 'red'
        awnserLi[data[i].correct].style.background = 'yellow'
      }

    })
  })

});
// ////////////////////////////////////////////////////////



btnPrev.addEventListener('click', () => {
  h4.innerHTML = 'happy to see  our questions again ;)'

  i--
  btnNext.innerHTML = 'skip'
  btnNext.style.background = 'black'
  // h4.innerHTML=''
  if (i == -2) {
    document.querySelector('header').style.zIndex='1'
    document.querySelector('header>button').addEventListener('click',(e)=>{
      document.querySelector('header').style.zIndex='-1'
      
  })

  } else {
    h2.innerHTML = [i + 1] + ' : of 10 question'
    input.value = [i + 1]*10 
    h3.innerHTML = data[i].id + ' : ' + data[i].question
    ul.innerHTML = ''

    // create li//
    data[i].awnser.map((val) => {
      let li = document.createElement('li')
      li.innerHTML = val
      ul.appendChild(li)
      // console.log(val);

    })
    awnserLi = document.querySelectorAll('ul>li')
    console.log(awnserLi);


    // console.log(btnNext);
    console.log(i);
    console.log(data.length);

  }


  // /////////////////////awnser////////////////////////
  awnserLi.forEach((val, s) => {
    val.addEventListener('mousemove', (e) => {
      e.target.style.color = 'yellow'
      e.target.style.scale = '1.2'

    })
    val.addEventListener('mouseout', (e) => {
      e.target.style.color = 'black'
      e.target.style.scale = '1'
    })
    val.addEventListener('click', () => {
      btnNext.innerHTML = 'next'
      btnNext.style.background = 'blue'
      if (s == data[i].correct) {
        console.log(s);
        val.style.background = 'green'
      } else {
        val.style.background = 'red'
        awnserLi[data[i].correct].style.background = 'yellow'
      }

    })
  })

});
// ////////////////////////////////////////////////////////

