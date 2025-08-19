import fruits from '../data/fruits'
import leafs from '../data/leafs'
import vegetables from '../data/vegetables'
import exotic from '../data/exotic'
import root from '../data/root'

import vegetable from '../assets/crops/vegetables.jpg'
import fruit from '../assets/crops/fruits.jpg'
import exotics from '../assets/crops/Exotic.jpg'
import leaf from '../assets/crops/leaf.jpg'
import roots from '../assets/crops/root-vegetables.jpg'

const crops = [
  {
    id: "vegetables",
    name: "vegetables",
    image: vegetable,
    dsort: 'Your crop are on a freshness journey to consumers—and we’re here for it',
    description: 'Your crop are on a freshness journey to consumers—and we’re here for it',
    items: vegetables
  },  
  {
    id: "fruits",
    name: "fruits",
    image: fruit,
     dsort: 'Your crop are on a freshness journey to consumers—and we’re here for it',
     description: 'Your crop are on a freshness journey to consumers—and we’re here for it',
     items: fruits
     
   
  },
  {
    id: "leafs",
    name: "leafs",
    image: leaf,
    dsort: 'Your crop are on a freshness journey to consumers—and we’re here for it',
    description: 'Your crop are on a freshness journey to consumers—and we’re here for it',
    items: leafs 
  },
  {
    id: "exotic",
    name: "exotic",
    image: exotics,
    dsort: 'Your crop are on a freshness journey to consumers—and we’re here for it',
    description: 'Your crop are on a freshness journey to consumers—and we’re here for it',
    items: exotic
  },
  {
    id: "root",
    name: "root",
    image: roots,
    dsort: 'Your crop are on a freshness journey to consumers—and we’re here for it',
    description: 'Your crop are on a freshness journey to consumers—and we’re here for it',
    items: root
  },
];

export default crops;