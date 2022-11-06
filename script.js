document.getElementById("footer").innerHTML = `
    <img onclick="window.open('https://www.facebook.com/soban.matic','_blank')" src="./assets/social-media/facebook.png" />
    <img onclick="window.open('https://www.instagram.com/matic_soban/', '_blank')" src="./assets/social-media/instagram.png" />
    <img src="./assets/social-media/whatsapp.png" />
    <img onclick="window.open('mailto:sobanmatic@gmail.com', '_blank')" src="./assets/social-media/email.png" />
`;

const pageTitle = document.getElementById("title").innerText;

document.getElementById("header").innerHTML = `
    <img id="logo" src="assets/logo2.png" />
    <h1 id="main-title">${pageTitle.toUpperCase()}</h1>
`;

document.getElementById("logo").addEventListener("click", ()=>{
    window.location = "index.html";
});