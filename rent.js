const gear = [
    {
        name: "Sony FX6",
        image: "./assets/gear/sony-fx6-border.png",
        price: "50eur/dan",
    },
    {
        name: "Canon EOS R",
        image: "./assets/gear/canon-eos-r-border.png",
        price: "",
    },
];

const gearContainer = document.getElementById("gear-to-rent-container");

gear.forEach(item => {
    gearContainer.innerHTML += `
        <div id="gear-container">
            <div id="rent-image-wrapper">
                <img src="${item.image}" />
            </div>
            <div id="rent-description-wrapper">
                <p>${item.name}</p>
            </div>
        </div>
    `;
});