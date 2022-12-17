const gear = [
    [
    {
        name: "Sony FX6",
        image: "./assets/gear/sony-fx6-border.png",
        price: "200",
        info: "Priložene 4 baterije, 2 kartici in top ter side handle.",
        categoryID: 0,
        categoryName: 'CAMERAS',
    },
    {
        name: "Canon EOS R",
        image: "./assets/gear/canon-eos-r-border.png",
        price: "30",
        info: "Priloženi dve bateriji in dve spominski kartici.",
        categoryID: 0,
        categoryName: 'CAMERAS',
    },
    {
        name: "Canon EOS 5D Mark II",
        image: "./assets/gear/canon-eos-5d-ii-border.png",
        price: "15",
        info: "Priloženi dve bateriji in dve spominski kartici.",
        categoryID: 0,
        categoryName: 'CAMERAS',
    },
    ],
    [
    {
        name: "Canon RF - EF adapter",
        image: "./assets/gear/canon-rf-ef-adapter.png",
        price: "5",
        info: "",
        categoryID: 1,
        categoryName: 'LENSES',
    },
    {
        name: "EF - Canon 70-200mm F2,8",
        image: "./assets/gear/canon-70-200.png",
        price: "30",
        info: "",
        categoryID: 1,
        categoryName: 'LENSES',
    },
    {
        name: "EF - Canon 50mm F1,8",
        image: "./assets/gear/canon-50.png",
        price: "10",
        info: "",
        categoryID: 1,
        categoryName: 'LENSES',
    },
    {
        name: "EF - Canon 40mm F2,8",
        image: "./assets/gear/canon-40.png",
        price: "10",
        info: "",
        categoryID: 1,
        categoryName: 'LENSES',
    },
    ],
    [
        {
            name: "Variable ND Filter Polar pro",
            image: "./assets/gear/nd-variable-filter-polar-pro.png",
            price: "5",
            info: "",
        },
    ],
    [
        {
            name: "Atomos Ninja V",
            image: "./assets/gear/atomos-ninja-v.png",
            price: "20",
            info: "",
        },
        {
            name: "D-tap to NPF dummy battery",
            image: "./assets/gear/d-tap-to-npf-dummy-battery.png",
            price: "2",
            info: "",
        },
    ],
    [
        {
            name: "Angelbird SSD 500GB",
            image: "./assets/gear/angelbird-ssd-500gb.png",
            price: "15",
            info: "",
        }, 
    ],
    [
        {
            name: "Ronin RS2 Pro Combo",
            image: "./assets/gear/ronin-rs2-pro-combo.png",
            price: "30",
            info: "",
        }, 
    ],
    [
        {
            name: "Aputure LS C300d II",
            image: "./assets/gear/aputure-ls-c300d-ii.png",
            price: "35",
            info: "",
        }, 
        {
            name: "Aputure Arman HR-672W (5500K)",
            image: "./assets/gear/aputure-arman-hr-672w.png",
            price: "10",
            info: "",
        }, 
        {
            name: "Aputure Light Dome II",
            image: "./assets/gear/aputure-light-dome-ii.png",
            price: "10",
            info: "",
        },
    ],
    [
        {
            name: "RODE Video mic Pro+",
            image: "./assets/gear/rode-video-mic-pro-plus.png",
            price: "15",
            info: "",
        },
        {
            name: "RODE Link Newsshooter Kit",
            image: "./assets/gear/rode-link-newsshooter-kit.png",
            price: "10",
            info: "",
        },
        {
            name: "RODE Boompole",
            image: "./assets/gear/rode-boompole.png",
            price: "10",
            info: "",
        },
    ],
    [
        {
            name: "Quadralite Reflector 5in1",
            image: "./assets/gear/quadralite-reflectors-5-1.png",
            
            price: "5",
            info: "",
        },
    ],
];

const categories = [
    "CAMERAS",
    "LENSES",
    "FILTERS",
    "MONITORS",
    "MEMORY",
    "STABILIZATION",
    "LIGHTS",
    "SOUND",
    "REFLECTORS"
]

const categoryMenu = document.getElementById("category-menu");
categories.forEach(item => {
    categoryMenu.innerHTML += `
        <div onclick="window.location.href='#category-${item.toLowerCase()}'"><li>${item}</li></div>
    `;
});


const gearContainer = document.getElementById("gear-to-rent-container");

gear.forEach((item, index) => {

    const categoryWrapper = document.createElement("div");
    categoryWrapper.setAttribute("id", "rent-category-wrapper");
    let concatenatedID = "category-"+categories[index].toLowerCase();
    gearContainer.innerHTML += `
        <h2 id="${concatenatedID}" class="rent-category-title">${categories[index]}</h2>
    `;
    item.forEach((subitem, index) =>{
        
        const rentGearWrapper = document.createElement("div");
        rentGearWrapper.setAttribute("id", "gear-container");

        rentGearWrapper.innerHTML = `
                <div id="rent-image-wrapper">
                    <img src="${subitem.image}" />
                </div>
                <div id="rent-description-wrapper">
                    <p>${subitem.name}</p>
                    <p id="rent-price">${subitem.price}€/dan</p>
                </div>
        `;
        
        if(subitem.info !== ""){
            const infoLabel = document.createElement("div");
            infoLabel.innerText = subitem.info;
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

        categoryWrapper.appendChild(rentGearWrapper);
    });
    gearContainer.appendChild(categoryWrapper);
});