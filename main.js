/*
・"Generate random story" ボタンが押された時にバカな話を生成する。
・バカな話を生成するボタンが押される前に "Enter custom name" のテキストフィールドに名前が入力されていた場合には、既定の "Bob" という名前を入力された名前に置き換える。
・バカな話を生成するボタンが押される前に UK のラジオボタンがチェックされていた場合のみ、既定の US (米国) の重さと気温を UK (英国) の同等な単位に変換する。
・ボタンが再度 (何度でも) 押されたら、別のランダムなバカ話を生成する。
*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX =['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY =['the soup kitchen','Disneyland','the White House'];
let insertZ =['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
/*BOBをnameに入力されたものに置き換えるってのを追加*/
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}

let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory = newstory.replace(':insertx:',xItem);
newStory = newstory.replace(':inserty:',YItem);
newStory = newstory.replace(':insertz:',zItem);
