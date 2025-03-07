import coldCoffeeImg from '../assets/frappuccino-coffee-img.jpg'
import classicCoffeeImg from '../assets/classic-coffee-img.png'
import experienceCoffeeImg from '../assets/coffee-food-img.jpg'


export default function loadHome(){
    const content = document.querySelector("#content");

    // Home Container
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    //--- COLD COFFEE CARD ---//

    // Cold Coffee Card (container)
    const coldContainer = document.createElement('div');
    coldContainer.classList.add('card');
    coldContainer.classList.add('cold-coffee');
    
    // Cold Coffee Img (container)
    const coldImg = document.createElement('div');
    coldImg.classList.add('cold-coffee-img');

    // Cold Coffee Img (img)
    const coldImage = document.createElement('img');
    coldImage.src = coldCoffeeImg;
    coldImage.alt = 'Two frappuccinos and a beautiful cat';
    coldImg.appendChild(coldImage);

    // Cold Coffee Text (container)
    const coldText = document.createElement('div');
    coldText.classList.add('cold-coffee-text');

    // Cold Coffee Text (2 p)
    const coldTitle = document.createElement('p');
    coldTitle.classList.add('cold-title');
    coldTitle.textContent = 'ENJOY THE SUMMER';

    const coldSubtitle = document.createElement('p');
    coldSubtitle.classList.add('cold-subtitle');
    coldSubtitle.textContent = 'Try our delicious frappuccinos!';

    coldText.appendChild(coldTitle);
    coldText.appendChild(coldSubtitle);

    // Appending
    coldContainer.appendChild(coldImg);
    coldContainer.appendChild(coldText);

    homeContainer.appendChild(coldContainer);


    //--- CLASSIC COFFEE CARD ---//

    // Classic Coffee Card (container)
    const classicContainer = document.createElement('div');
    classicContainer.classList.add('card');
    classicContainer.classList.add('classic-coffee');
    
    // Classic Coffee Img (container)
    const classicImg = document.createElement('div');
    classicImg.classList.add('classic-coffee-img');

    // Classic Coffee Img (img)
    const classicImage = document.createElement('img');
    classicImage.src = classicCoffeeImg;
    classicImage.alt = 'Two wonderful coffee cups';
    classicImg.appendChild(classicImage);


    // Classic Coffee Text (container)
    const classicText = document.createElement('div');
    classicText.classList.add('classic-coffee-text');

    // Classic Coffee Text (2 p)
    const classicTitle = document.createElement('p');
    classicTitle.classList.add('classic-title');
    
    const classicTextNode = document.createTextNode('FIND THE PLEASURE OF A ');
    const emClassicElement = document.createElement('em');
    emClassicElement.textContent = 'CLASSIC';
    
    classicTitle.appendChild(classicTextNode);
    classicTitle.appendChild(emClassicElement);

    const classicSubtitle = document.createElement('p');
    classicSubtitle.classList.add('classic-subtitle');
    classicSubtitle.textContent = 'Try our premium blend of coffees';

    classicText.appendChild(classicTitle);
    classicText.appendChild(classicSubtitle);

    // Appending
    classicContainer.appendChild(classicImg);
    classicContainer.appendChild(classicText);

    homeContainer.appendChild(classicContainer);


    //--- EXPERIENCE COFFEE CARD ---//

    // Experience Coffee Card (container)
    const experienceContainer = document.createElement('div');
    experienceContainer.classList.add('card');
    experienceContainer.classList.add('experience-coffee');
    
    // Experience Coffee Img (container)
    const experienceImg = document.createElement('div');
    experienceImg.classList.add('experience-coffee-img');

    // Experience Coffee Img (img)
    const experienceImage = document.createElement('img');
    experienceImage.src = experienceCoffeeImg;
    experienceImage.alt = 'A lady enjoys our coffee and food experience';
    experienceImg.appendChild(experienceImage);


    // Experience Coffee Text (container)
    const experienceText = document.createElement('div');
    experienceText.classList.add('experience-coffee-text');

    // Experience Coffee Text (2 p)
    const experienceTitle = document.createElement('p');
    experienceTitle.classList.add('experience-title');
    
    const experienceTextNode = document.createTextNode('LIVE A TASTE ');
    const emExperienceElement = document.createElement('em');
    emExperienceElement.textContent = 'EXPERIENCE';
    
    experienceTitle.appendChild(experienceTextNode);
    experienceTitle.appendChild(emExperienceElement);

    const experienceSubtitle = document.createElement('p');
    experienceSubtitle.classList.add('experience-subtitle');
    experienceSubtitle.textContent = 'Varied gourmet menu';

    experienceText.appendChild(experienceTitle);
    experienceText.appendChild(experienceSubtitle);

    // Appending
    experienceContainer.appendChild(experienceImg);
    experienceContainer.appendChild(experienceText);

    homeContainer.appendChild(experienceContainer);


    //--- REFERENCES CARD ---//
    const referencesContainer = document.createElement('div');
    referencesContainer.classList.add('references')

    const referencesTitle = document.createElement('h2');
    referencesTitle.textContent = 'A special thanks to...';

    referencesContainer.appendChild(referencesTitle);

    const firstReference = document.createElement('p')
    const firstTextNode = document.createTextNode('Awsome Coffee logo from ');
    const firtsLink = document.createElement('a');
    firtsLink.href = 'https://pixabay.com/vectors/coffee-hot-cup-mug-morning-307147';
    firtsLink.textContent = 'pixabay';
    firstReference.appendChild(firstTextNode);
    firstReference.appendChild(firtsLink);

    referencesContainer.appendChild(firstReference);

    
    const secondReference = document.createElement('p')
    const secondTextNodeOne = document.createTextNode('Those awsome coffees by ');
    const secondLinkOne = document.createElement('a');
    secondLinkOne.href = 'https://unsplash.com/es/@nate_dumlao';
    secondLinkOne.textContent = 'Nate Dumlao';
    const secondTextNodeTwo = document.createTextNode(' from ');
    const secondLinkTwo = document.createElement('a');
    secondLinkTwo.href = 'https://unsplash.com/es/fotos/foto-de-angulo-alto-de-dos-tazas-verdes-llenas-de-cafe-c2Y16tC3yO8';
    secondLinkTwo.textContent = 'Unsplash';
    secondReference.appendChild(secondTextNodeOne);
    secondReference.appendChild(secondLinkOne);
    secondReference.appendChild(secondTextNodeTwo);
    secondReference.appendChild(secondLinkTwo);

    referencesContainer.appendChild(secondReference);


    const thirdReference = document.createElement('p')
    const thirdTextNodeOne = document.createTextNode('That beautiful cat photo by ');
    const thirdLinkOne = document.createElement('a');
    thirdLinkOne.href = 'https://unsplash.com/es/@rebaspike?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    thirdLinkOne.textContent = 'Reba Spike';
    const thirdTextNodeTwo = document.createTextNode(' from ');
    const thirdLinkTwo = document.createElement('a');
    thirdLinkTwo.href = 'https://unsplash.com/es/fotos/gato-negro-sobre-mesa-de-madera-marron-xxIyFBpcDuk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    thirdLinkTwo.textContent = 'Unsplash';
    thirdReference.appendChild(thirdTextNodeOne);
    thirdReference.appendChild(thirdLinkOne);
    thirdReference.appendChild(thirdTextNodeTwo);
    thirdReference.appendChild(thirdLinkTwo);

    referencesContainer.appendChild(thirdReference);


    const fourthReference = document.createElement('p')
    const fourthTextNodeOne = document.createTextNode('The lady photo by ');
    const fourthLinkOne = document.createElement('a');
    fourthLinkOne.href = 'https://unsplash.com/es/@pablomerchanm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    fourthLinkOne.textContent = 'Pablo Merchán Montes';
    const fourthTextNodeTwo = document.createTextNode(' from ');
    const fourthLinkTwo = document.createElement('a');
    fourthLinkTwo.href = 'https://unsplash.com/es/fotos/mujer-sosteniendo-tenedor-en-la-mesa-delantera-Orz90t6o0e4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    fourthLinkTwo.textContent = 'Unsplash';
    fourthReference.appendChild(fourthTextNodeOne);
    fourthReference.appendChild(fourthLinkOne);
    fourthReference.appendChild(fourthTextNodeTwo);
    fourthReference.appendChild(fourthLinkTwo);

    referencesContainer.appendChild(fourthReference);

    homeContainer.appendChild(referencesContainer);


    // Final Appending
    content.appendChild(homeContainer);
}