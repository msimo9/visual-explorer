const gear = [
    {
        name: "Sony FX6",
        image: "./assets/gear/sony-fx6-border.png",
        price: "200",
        info: "Priložene 4 baterije, 2 kartici in top ter side handle."
    },
    {
        name: "Canon EOS R",
        image: "./assets/gear/canon-eos-r-border.png",
        price: "30",
        info: "Priloženi dve bateriji in dve spominski kartici."
    },
    {
        name: "Canon EOS 5D Mark II",
        image: "./assets/gear/canon-eos-5d-ii-border.png",
        price: "15",
        info: "Priloženi dve bateriji in dve spominski kartici."
    },
    {
        name: "Canon RF - EF adapter",
        image: "./assets/gear/canon-rf-ef-adapter.png",
        price: "5",
        info: ""
    },
    {
        name: "EF - Canon 70-200mm F2,8",
        image: "./assets/gear/canon-70-200.png",
        price: "30",
        info: ""
    },
    {
        name: "EF - Canon 50mm F1,8",
        image: "./assets/gear/canon-50.png",
        price: "10",
        info: ""
    },
    {
        name: "EF - Canon 40mm F2,8",
        image: "./assets/gear/canon-40.png",
        price: "10",
        info: ""
    },
];

const gearContainer = document.getElementById("gear-to-rent-container");

gear.forEach(item => {
    const rentGearWrapper = document.createElement("div");
    rentGearWrapper.setAttribute("id", "gear-container");

    rentGearWrapper.innerHTML = `
            <div id="rent-image-wrapper">
                <img src="${item.image}" />
            </div>
            <div id="rent-description-wrapper">
                <p>${item.name}</p>
                <p id="rent-price">${item.price}€/dan</p>
            </div>
    `;
    
    if(item.info !== ""){
        const infoLabel = document.createElement("div");
        infoLabel.innerText = item.info;
        infoLabel.setAttribute("id", "info-label");

        const infoCircle = document.createElement("div");
        infoCircle.setAttribute("id", "info-circle");
        infoCircle.innerHTML = `
            <ion-icon name="information-circle"></ion-icon>
        `;

        infoCircle.addEventListener("mouseenter", ()=>{
            infoLabel.style.display = "flex";
        });

        infoCircle.addEventListener("mouseleave", ()=>{
            infoLabel.style.display = "none";
        });


        rentGearWrapper.appendChild(infoLabel);
        rentGearWrapper.appendChild(infoCircle);
    }

    gearContainer.appendChild(rentGearWrapper);
});