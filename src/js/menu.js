import { drinksData, foodData, referencesData } from './data.js';

export default function loadMenu() {

  function createSection(sectionName) {
    const sectionContainer = document.createElement('div');
    sectionContainer.classList.add('section-container');
  
    const firstDivider = document.createElement('hr');

    const sectionTitle = document.createElement('p');
    sectionTitle.classList.add('section-title');
    sectionTitle.textContent = `${sectionName}`;
  
    const secondDivider = document.createElement('hr');

    sectionContainer.appendChild(firstDivider);
    sectionContainer.appendChild(sectionTitle);
    sectionContainer.appendChild(secondDivider);

    return sectionContainer;
  };

  function createCard(item) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-item');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('item-img');

    const image = document.createElement('img');
    image.src = item.itemImg;
    image.alt = item.imgAlt;

    imageContainer.appendChild(image);

    const title = document.createElement('p');
    title.classList.add('item-title');
    title.textContent = item.itemTitle;

    cardContainer.appendChild(imageContainer);
    cardContainer.appendChild(title);

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

  // CONTENT CONTAINER
  const contentContainer = document.querySelector('#content');

  // MENU CONTAINER
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  // PRESENTATION
  const presentation = document.createElement('div');
  presentation.classList.add('presentation');

  const presentationText = document.createElement('p');
  presentationText.textContent = 'Enjoy them!';

  const presentationTitle = document.createElement('p');
  presentationTitle.classList.add('presentation-title');
  presentationTitle.textContent = 'Get to know our seasonal drinks and foods';

  presentation.appendChild(presentationText);
  presentation.appendChild(presentationTitle);
  menuContainer.appendChild(presentation);

  // MENU CARD CONTAINER
  const menuCardContainer = document.createElement('div');
  menuCardContainer.classList.add('menu-card-container');

  // DRINK CONTAINER
  const drinkSection = createSection('Drinks');

  // ITEM'S CONTAINER
  const drinkItemsContainer = document.createElement('div');
  drinkItemsContainer.classList.add('card-container');

  // CREATE ITEMS FROM DATA
  drinksData.forEach(item => {
    const card = createCard(item);
    drinkItemsContainer.appendChild(card);
  });

  drinkSection.appendChild(drinkItemsContainer);
  menuCardContainer.appendChild(drinkSection);

  // FOOD CONTAINER
  const foodSection = createSection('Food');

  // ITEM'S CONTAINER
  const foodItemsContainer = document.createElement('div');
  foodItemsContainer.classList.add('card-container');

  // CREATE ITEMS FROM DATA
  foodData.forEach(item => {
    const card = createCard(item);
    foodItemsContainer.appendChild(card);
  });

  foodSection.appendChild(foodItemsContainer);
  menuCardContainer.appendChild(foodSection);

  // REFERENCES SECTION
  const referenceSectionContainer = createSection('References');

  // REFERENCES DATA LOADER
  const referencesContainer = document.createElement('div');
  referencesContainer.classList.add('menu-references');

  referencesData.forEach(reference => {
    const entrance = createReference(reference);
    referencesContainer.appendChild(entrance);
  });

  referenceSectionContainer.appendChild(referencesContainer);
  menuCardContainer.appendChild(referenceSectionContainer);

  // FINAL APPENDING
  menuContainer.appendChild(menuCardContainer);
  contentContainer.appendChild(menuContainer);
}