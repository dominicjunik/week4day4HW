let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let title = document.getElementById('main-title');
  title.textContent = "Doms webpage"
  // Part 2
  let body = document.querySelector('body');
  body.style.backgroundColor = 'pink'

  // Part 3
  // let list = document.querySelector('#favorite-things *:last-child')
  let list = document.querySelector('#favorite-things');
  // let newArray = list.querySelectorAll('li')
  list.removeChild(list.lastElementChild);
  console.log(list);
  
  
  // Part 4
let fontChange = document.querySelectorAll('.special-title')
for(i of fontChange) {
  i.style.fontSize = '2rem';
}


  // Part 5
let pastRaces = document.querySelector('#past-races');
console.dir(pastRaces)
for(let i of pastRaces.childNodes){
  console.log(i);
  if(i.textContent === 'Chicago'){
    i.remove();
  }

}
  // Part 6
let newRace = document.createElement('li');
newRace.textContent = 'Denver'
pastRaces.appendChild(newRace);

  // Part 7
let newBlog = document.createElement('div');
newBlog.setAttribute('class', 'blog-post purple')
newBlog.innerHTML = `<h1>Denver</h1>
<p>I DROVE MY CAR OVER THE WELLS FARGO BUILDING!</p>`;
let mainDiv = document.querySelector('.main')
// console.log(mainDiv)
mainDiv.appendChild(newBlog)
// console.log(newBlog)

  // Part 8
let rngQuote = document.querySelector('#quote-title');
rngQuote.addEventListener('click', () => randomQuote());

  // Part 9
let blogList = document.querySelectorAll('.blog-post');

for(let i of blogList){

  for(j of i.children){
    j.style.pointerEvents = 'none'
  }

  i.addEventListener('mouseout', (event) => {    
    event.target.classList.toggle('purple')
    event.target.classList.toggle('red')

  });
  i.addEventListener('mouseenter', (event) => {
    event.target.classList.toggle('purple')
    event.target.classList.toggle('red')   
  });
}


});
