import { aboutCards, aboutReferences } from "./data";

export default function loadAbout(){

const content = document.querySelector('#content');

function createAboutCard(aboutCard){
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('about-card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('about-card-img');

    const image = document.createElement('img');
    image.src = aboutCard.cardImg;
    image.alt = aboutCard.cardAlt;
    imageContainer.appendChild(image);
    cardContainer.appendChild(imageContainer);

    const textContainer = document.createElement('div');
    textContainer.classList.add('about-card-text');

    const textTitle = document.createElement('p');
    textTitle.classList.add('card-text-title');
    textTitle.textContent = aboutCard.cardTitle;
    textContainer.appendChild(textTitle);

    aboutCard.cardEntrances.forEach(entrance => {
        const textEntrance = document.createElement('p');
        textEntrance.textContent = entrance;
        textContainer.appendChild(textEntrance);
    });

    cardContainer.appendChild(textContainer);

    return cardContainer;
};

function createReference(entrance) {
    const paragraph = document.createElement('p');

    const textOne = document.createTextNode(entrance.firstText);
    paragraph.appendChild(textOne);
    
    const linkOne = document.createElement('a');
    linkOne.href = entrance.firstLinkRef;
    linkOne.textContent = entrance.firstLinkText;
    paragraph.appendChild(linkOne);
    
    const textTwo = document.createTextNode(entrance.secondText);
    paragraph.appendChild(textTwo);

    const linkTwo = document.createElement('a');
    linkTwo.href = entrance.secondLinkRef;
    linkTwo.textContent = entrance.secondLinkText;
    paragraph.appendChild(linkTwo);

    return paragraph;
};

// ABOUT CONTAINER
const aboutContainer = document.createElement('div');
aboutContainer.classList.add('about-container');

// SECTIONS
aboutCards.forEach(aboutCard => {
    const card = createAboutCard(aboutCard);
    aboutContainer.appendChild(card);
  });

// REFERENCES
const referenceContainer = document.createElement('div');
referenceContainer.classList.add('home-references')

const referencesTitle = document.createElement('h2');
referencesTitle.textContent = 'This would not be possible without the work of...';
referenceContainer.appendChild(referencesTitle);

aboutReferences.forEach(reference => {
    const entrance = createReference(reference);
    referenceContainer.appendChild(entrance);
});

aboutContainer.appendChild(referenceContainer);

content.appendChild(aboutContainer);
}