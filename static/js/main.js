function createParagraph() {
    const name = prompt("Enter your name");
    const para = document.createElement('li');
    para.textContent = name;
    document.getElementById("guestList").appendChild(para);
}

function postResponse() {
    const text = document.getElementById("textBox").value;
    const para = document.createElement('li');
    para.textContent = text;
    document.getElementById("guestResponses").appendChild(para);
}
  
const button1 = document.querySelector('.logInButton');
button1.addEventListener('click', createParagraph);

const button2 = document.querySelector('.textBoxButton');
button2.addEventListener('click', postResponse);