const projects = [
    {
        title: "Skoraj za vedno",
        artist: "MUVIT",
        year: 2022,
        url: "https://www.youtube.com/watch?v=b7nP5xfY8cA&ab_channel=DDStudioProdukcija",
        image: "./assets/thumbnails/skoraj-za-vedno.jpeg"
    },
    {
        title: "Večvredne Romance",
        artist: "Jet Black Diamonds",
        year: 2022,
        url: "https://www.youtube.com/watch?v=rT0JBULLCiY&ab_channel=JetBlackDiamonds",
        image: "./assets/thumbnails/vecvredne-romance.jpeg"
    },
    {
        title: "Vse lepo za vse",
        artist: "Hamo and tribute to love",
        year: 2021,
        url: "https://www.youtube.com/watch?v=K6EWYFwWIX4&ab_channel=Hamo%26Tribute2Love",
        image: "./assets/thumbnails/vse-lepo-za-vse.jpeg"
    },
    {
        title: "Misliš na njo",
        artist: "Eva Boto",
        year: 2021,
        url: "https://www.youtube.com/watch?v=VfMiBL6aPL0&ab_channel=EVABOTOOfficial",
        image: "./assets/thumbnails/mislis-na-njo.jpeg"
    },
    {
        title: "Retro anorak",
        artist: "Jet Black Diamonds",
        year: 2021,
        url: "https://www.youtube.com/watch?v=Uth0-2EUnok&ab_channel=JetBlackDiamonds",
        image: "./assets/thumbnails/retro-anorak.jpeg"
    },
    {
        title: "Manjkaš mi",
        artist: "Neisha",
        year: 2022,
        url: "https://www.youtube.com/watch?v=kwkl6EfrSOI&ab_channel=neishatube",
        image: "./assets/thumbnails/manjkas-mi.jpeg"
    },
    {
        title: "Kaj pa ti veš kaj je Rock n Roll",
        artist: "San Di EGO",
        year: 2022,
        url: "https://www.youtube.com/watch?v=b0FDGd2qRT4&ab_channel=SanDiEgoBand",
        image: "./assets/thumbnails/kaj-pa-ti-ves-kaj-je-rock-n-roll.jpeg"
    },
    {
        title: "Sz Sežane doma",
        artist: "Boštjan Pertinač",
        year: 2022,
        url: "https://www.youtube.com/watch?v=fD56VXkbyuQ&ab_channel=BostjanPertinac",
        image: "./assets/thumbnails/sz-sezane-doma.jpeg"
    },
    {
        title: "Mlada v spominih",
        artist: "Uroš in Tjaša",
        year: 2021,
        url: "https://www.youtube.com/watch?v=keyWQjWHfQY&ab_channel=Uro%C5%A1inTja%C5%A1a",
        image: "./assets/thumbnails/mlada-v-spominih.jpeg"
    },
    {
        title: "Še zadnjič",
        artist: "Jet Black Diamonds",
        year: 2021,
        url: "https://www.youtube.com/watch?v=IhHIAmOgH4A&ab_channel=JetBlackDiamonds",
        image: "./assets/thumbnails/se-zadnjic.jpeg"
    },
    {
        title: "I got you",
        artist: "Marko Sta",
        year: 2021,
        url: "https://www.youtube.com/watch?v=OnWU-PSAkh8&ab_channel=MarkoStankovic",
        image: "./assets/thumbnails/i-got-you.jpeg"
    },
    {
        title: "Ob meni lepa",
        artist: "San Di EGO",
        year: 2022,
        url: "https://www.youtube.com/watch?v=WsmuzcE5v-c&ab_channel=SanDiEgoBand",
        image: "./assets/thumbnails/ob-meni-lepa.jpeg"
    },
    {
        title: "Ko je ni zraven mene",
        artist: "San Di EGO",
        year: 2022,
        url: "https://www.youtube.com/watch?v=zxN-yECriRU&ab_channel=SanDiEgoBand",
        image: "./assets/thumbnails/ko-je-ni-zraven-mene.jpeg"
    },
];

const allWorksContainer = document.getElementById("all-works-container");

projects.forEach( item => {
    allWorksContainer.innerHTML += `
        <div onclick="window.open('${item.url}', '_blank')" class="work-container">
            <div class="thumbnail-wrapper">
                <img src="${item.image}"/>
            </div>
            <div class="description-wrapper">
                ${ item.artist !== "" ? `<p id="work-artist">${item.artist}</p>` : ``}
                <p id="work-title">${item.title}</p>
                <p id="work-year">${item.year}</p>
            </div>
        </div>
    `;
});