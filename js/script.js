// const alert (`“Я оцениваю свою работу на 100 баллов”`);
// document.write(alert);

const body = document.querySelector("body");
body.style.background = 'hsl(217, 54%, 11%)'
body.style.width = "100%";
body.style.margin = "0, auto";
body.style.fontFamily = "Outfit, san-serif";
body.style.fontSize = "18px";
body.style.boxSizing ="border-box";

// wrapper
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.boxSizing = "border-box";
wrapper.style.margin = "0, auto";
wrapper.style.width = "1440";
wrapper.style.display = "flex";
wrapper.style.flexDirection = "row";
wrapper.style.justifyContent = "space-around";
wrapper.style.alignItems = "center";
wrapper.style.marginTop = "150px";


// container
const container = document.createElement ("div");
container.className = "container";
container.style.boxSizing = "border-box";
container.style.width = "1240px";
container.style.margin = "0, auto";
container.style.padding = "0, 15px"


// Card
function createCard() {
    const card = document.createElement("div");
    card.className = "card";
    card.style.position = "relative";
    card.style.width = "350px";
    card.style.height = "600px";
    // card.style.padding = "0";
    // card.style.margin = "0";
    card.style.marginLeft = "auto";
    card.style.marginRight = "auto";
    card.style.background = "hsl(216, 50%, 16%)";
    card.style.borderRadius = "15px";

    // card-img
    const cardIMg = document.createElement("img");
    cardIMg.className = "card-img";
    cardIMg.setAttribute('src', 'images/image-equilibrium.jpg');
    cardIMg.style.width = "302px";
    cardIMg.style.height = "302px";
    cardIMg.style.borderRadius = "10px";
    cardIMg.style.margin = "24px";
    cardIMg.style.marginBottom = "24px";

    // h3
    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.innerText = "Equilibrium #3429";
    cardTitle.style.fontFamily = "Outfit";
    cardTitle.style.fontSize = "22px";
    cardTitle.style.fontStyle = "normal";
    cardTitle.style.fontWeight = "700";
    cardTitle.style.color = "hsl(0, 0%, 100%)";
    cardTitle.style.margin = "0";
    cardTitle.style.marginLeft = "24px";
    cardTitle.style.padding = "0";

    // subtitle
    const subtitle = document.createElement("p");
    subtitle.className = "subtitle";
    subtitle.innerText = 'Our Equilibrium collection promotes balance and calm.';
    subtitle.style.fontWeight = "400";
    subtitle.style.fontSize = "18px";
    subtitle.style.lineHeight = "26px";
    subtitle.style.color = "hsl(215, 51%, 70%)";
    subtitle.style.marginLeft = "24px";
    subtitle.style.marginBottom = "24px";
    
    // img-info-div
    const imgInfo = document.createElement("div");
    imgInfo.className = "img-info";
    imgInfo.style.display = "flex";
    // imgInfo.style.justifyContent = "center";
    imgInfo.style.gap = "7px";

    // img-info-icon
    const imgIcon = document.createElement("img");
    imgIcon.className = "img-icon";
    imgIcon.src = "images/icon-ethereum.svg";
    imgIcon.style.marginLeft = "24px";
    imgIcon.style.height = "18px";

    // img-info-text
    const imgInfoText = document.createElement("p");
    imgInfoText.className = "img-info-text";    
    imgInfoText.innerText = "0.041 ETH";
    imgInfoText.style.margin = "0"
    imgInfoText.style.fontFamily = "Outfit";
    imgInfoText.style.fontStyle= "normal";
    imgInfoText.style.fontWeight = "600";
    imgInfoText.style.fontSize = "16px";
    imgInfoText.style.color = "hsl(178, 100%, 50%)";
    // imgInfoText.style.marginLeft = "7px";


    // img-time-icon
    const imgTimeIcon = document.createElement("img");
    imgTimeIcon.className = "time-icon";
    imgTimeIcon.src = "/images/icon-clock.svg";
    imgTimeIcon.style.height = "17px"
    imgTimeIcon.style.marginLeft = "104px";
    imgTimeIcon.style.marginBottom = "20px";


    // img-time-text
    const imgTimeText = document.createElement("p");
    imgTimeText.className = "img-time-text";
    imgTimeText.innerText = "3 days left";
    imgTimeText.style.margin = "0";
    imgTimeText.style.fontFamily = "Outfit";
    imgTimeText.style.fontStyle = "normal";
    imgTimeText.style.fontWeight = "400";
    imgTimeText.style.fontSize = "16px";
    imgTimeText.style.color = "hsl(215, 51%, 70%)";

    // line
    const line = document.createElement("hr");
    line.className = "line";
    line.style.width = "302px";
    line.style.border = "1px solid hsl(215, 32%, 27%)";

    // img-author-div
    const imgAuthor = document.createElement("div");
    imgAuthor.className = "img-author";
    imgAuthor.style.display = "flex";
    imgAuthor.style.alignItems = "center";
    imgAuthor.style.gap = "17px";

    // avatar-author
    const photoAuthor = document.createElement("img");
    photoAuthor.className = "photoAuthor";
    photoAuthor.src = "/images/image-avatar.png";
    photoAuthor.style.width = "34px";
    photoAuthor.style.height = "34px";
    photoAuthor.style.marginLeft = "24px";
    photoAuthor.style.border = "1px solid hsl(0, 0%, 100%)";
    photoAuthor.style.borderRadius = "50px";

    // avatar-text
    const avatarText = document.createElement("p");
    avatarText.className = "avatar-text";
    avatarText.innerText = "Creation of";
    avatarText.style.fontStyle = "normal";
    avatarText.style.fontWeight = "400";
    avatarText.style.fontSize = "16px";
    avatarText.style.color = "hsl(215, 51%, 70%)";

    // avatar-text-span
    const avatarTextSpan = document.createElement("span");
    avatarTextSpan.className = "avatar-text-span";
    avatarTextSpan.innerText = "     Jules Wyvern";
    avatarTextSpan.style.fontWeight = "600";
    avatarTextSpan.style.fontSize = "16px";
    avatarTextSpan.style.color = "hsl(0, 0%, 100%)";
    avatarTextSpan.margin = "0";
   


    document.body.appendChild(wrapper);
    wrapper.appendChild(container);
    container.appendChild(card);
    card.appendChild(cardIMg);
    card.appendChild(cardTitle);
    card.appendChild(subtitle);
    card.appendChild(imgInfo);
    imgInfo.appendChild(imgIcon);
    imgInfo.appendChild(imgInfoText);
    imgInfo.appendChild(imgTimeIcon);
    imgInfo.appendChild(imgTimeText);
    card.appendChild(line);
    card.appendChild(imgAuthor);
    imgAuthor.appendChild(photoAuthor);
    imgAuthor.appendChild(avatarText);
    avatarText.appendChild(avatarTextSpan);
}

createCard();


