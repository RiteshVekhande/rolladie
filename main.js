console.log("Hi");
const imageEl = document.querySelector("img");
imageEl.src = getRandomURL();

function getRandom6(){
    const rn = Math.floor(Math.random()*6)+1;
    return rn;
}

function getRandomURL(){
    const words = ['one','two','three','four','five','six'];
    const randomWord = words[getRandom6() - 1];
    const url = `https://img.icons8.com/windows/300/dice-${randomWord}.png`
    return url;
}

function changeImage(){
    imageEl.src = getRandomURL();
}

