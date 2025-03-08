import hotCoffeeImg from '../assets/Hot-Coffee-img.png';
import icedCoffeeImg from '../assets/Iced-Coffee-img.png';
import frappuccinoImg from '../assets/Frappuccino-img.png';
import teaImg from '../assets/Tea-img.png';
import bakeryImg from '../assets/Bakery-img.png';
import sandwichImg from '../assets/Sandwich-img.png';
import snackImg from '../assets/Snack-img.png';

import aboutClockImg from '../assets/about-clock-img.jpg'
import aboutFriendsImg from '../assets/about-friends-img.jpg'
import deliveryImg from '../assets/about-delivery-img.jpg'
import compromiseImg from '../assets/about-compromise-img.jpg'

export const drinksData = [
  {
    itemImg: hotCoffeeImg,
    imgAlt: 'Hot-Coffee image',
    itemTitle: 'Hot Coffees',
  },
  {
    itemImg: icedCoffeeImg,
    imgAlt: 'Iced-Coffee image',
    itemTitle: 'Iced Coffees',
  },
  {
    itemImg: frappuccinoImg,
    imgAlt: 'Frappuccino image',
    itemTitle: 'Frappuccinos',
  },
  {
    itemImg: teaImg,
    imgAlt: 'Tea image',
    itemTitle: 'Hot tea',
  },
];

export const foodData = [
  {
    itemImg: bakeryImg,
    imgAlt: 'Bakery image',
    itemTitle: 'Bakery',
  },
  {
    itemImg: sandwichImg,
    imgAlt: 'Sandwich image',
    itemTitle: 'Sandwichs',
  },
  {
    itemImg: snackImg,
    imgAlt: 'Snack image',
    itemTitle: 'Snacks',
  },
];

export const referencesData = [
    {
        firstText: 'Hot Coffee photo by ',
        firstLinkRef: 'https://unsplash.com/es/@denesroland?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        firstLinkText: 'Roland Denes',
        secondText: ' on ',
        secondLinkRef: 'https://unsplash.com/es/fotos/cafe-en-taza-de-te-de-ceramica-negra-zeZMi6Y4fZY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        secondLinkText: 'Unsplash'
    },
    {
        firstText: 'Iced Coffee photo by ',
        firstLinkRef: 'https://unsplash.com/es/@shootdelicious?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        firstLinkText: 'Eiliv Aceron',
        secondText: ' on ',
        secondLinkRef: 'https://unsplash.com/es/fotos/vaso-alto-lleno-de-cafe-helado-_tSgUmeYMm8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        secondLinkText: 'Unsplash'
    },
    {
        firstText: 'Frappuccino photo by ',
        firstLinkRef: 'https://unsplash.com/es/@victorrutka?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        firstLinkText: 'Victor Rutka',
        secondText: ' on ',
        secondLinkRef: 'https://unsplash.com/es/fotos/frappe-de-galleta-de-chocolate-4FujjkcI40g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        secondLinkText: 'Unsplash'
    },
    {
        firstText: 'Hot Tea photo by ',
        firstLinkRef: 'https://unsplash.com/es/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        firstLinkText: 'Nathan Dumlao',
        secondText: ' on ',
        secondLinkRef: 'https://unsplash.com/es/fotos/taza-de-te-de-fotografia-de-enfoque-superficial-8yBQQqH3q8Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        secondLinkText: 'Unsplash'
    },
    {
        firstText: 'Bakery photo by ',
        firstLinkRef: 'https://unsplash.com/es/@khlebnikovayulia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        firstLinkText: 'Yulia Khlebnikova',
        secondText: ' on ',
        secondLinkRef: 'https://unsplash.com/es/fotos/pan-horneado-29D6U5sZfjk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        secondLinkText: 'Unsplash'
    },
    {
        firstText: 'Sandwich photo by ',
        firstLinkRef: 'https://unsplash.com/es/@nikizhang1995?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        firstLinkText: '燕珊 张',
        secondText: ' on ',
        secondLinkRef: 'https://unsplash.com/es/fotos/pan-con-queso-y-verduras-sobre-mesa-de-madera-marron-hfwJaTMlMkY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        secondLinkText: 'Unsplash'
    },
    {
        firstText: 'Snack photo by ',
        firstLinkRef: 'https://unsplash.com/es/@olhakozachenko?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        firstLinkText: 'Olga Kozachenko',
        secondText: ' on ',
        secondLinkRef: 'https://unsplash.com/es/fotos/vaso-transparente-junto-al-pan-moreno-en-un-plato-de-ceramica-azul-GiTJpq74ER0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        secondLinkText: 'Unsplash'
    }
];

export const aboutCards = [
  {
    cardImg: aboutClockImg,
    cardAlt: 'Clock image',
    cardTitle: 'Hours',
    cardEntrances: [
      'Monday to Friday | 6 AM - 9 PM',
      'Saturday | 8 AM - 5 PM',
      'Sunday | CLOSED'
    ]
  },
  {
    cardImg: aboutFriendsImg,
    cardAlt: 'Friends taking coffee',
    cardTitle: 'In Store',
    cardEntrances: [
      'Our trained baristas await you in our stores to offer you a very special drink.',
      'The warm atmosphere and the details of our handcrafted products make the experience unique and unmatched.'
    ]
  },
  {
    cardImg: deliveryImg,
    cardAlt: 'A programer taking coffee at home',
    cardTitle: 'Delivery',
    cardEntrances: [
      'Customers can order their favorite drinks and products wherever they are with third-party logistics operators.'
    ]
  },
  {
    cardImg: compromiseImg,
    cardAlt: 'Coffee beans image',
    cardTitle: 'Our Compromise',
    cardEntrances: [
      'Inspiring and nurturing the human spirit: One person, one cup, and one community at a time.',
      'These are the principles that guide us in fulfilling our mission every day'
    ]
  } 
]

export const aboutReferences = [
  {
    firstText: 'Clock photo by ',
    firstLinkRef: 'https://unsplash.com/es/@malvestida?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    firstLinkText: 'Malvestida',
    secondText: ' on ',
    secondLinkRef: 'https://unsplash.com/es/fotos/persona-sosteniendo-reloj-despertador-analogico-de-doble-campana-rojo-y-beige-FfbVFLAVscw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    secondLinkText: 'Unsplash'  
  },
  {
    firstText: 'Coffee friends photo by ',
    firstLinkRef: 'https://unsplash.com/es/@jbhalla28?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    firstLinkText: 'justin bhalla',
    secondText: ' on ',
    secondLinkRef: 'https://unsplash.com/es/fotos/persona-sosteniendo-capuchino-en-taza-de-ceramica-negra-uoMj5Or_9CE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    secondLinkText: 'Unsplash'   
  },
  {
    firstText: 'Coffee at home photo by',
    firstLinkRef: 'https://unsplash.com/es/@_ferh97?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    firstLinkText: 'Fernando Hernandez',
    secondText: ' on ',
    secondLinkRef: 'https://unsplash.com/es/fotos/frasco-de-vidrio-lleno-efzwcMRM6j4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    secondLinkText: 'Unsplash'
  },
  {
    firstText: 'Coffee beans photo by ',
    firstLinkRef: 'https://unsplash.com/es/@miloezger?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    firstLinkText: 'Milo Miloezger',
    secondText: ' on ',
    secondLinkRef: 'https://unsplash.com/es/fotos/granos-de-cafe-en-wok-de-acero-gris-rKYRJu0n06Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    secondLinkText: 'Unsplash'      
  }
];