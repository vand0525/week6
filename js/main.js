import { enemyList } from './data.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  //when the page loads...
  buildEnemyCards();
  addListeners();
}

function addListeners() {
  //add a submit listener to the form
  let form = document.querySelector('#enemyForm');
  //add delete listeners for cards
  let section = document.querySelector('#enemies');
}

function buildEnemyCards() {
  if (!enemyList) return;
  let section = document.querySelector('#enemies');
  //called when page loads AND after any update to the enemyList
}

function addUserToList() {
  //save the form data in the list
  //remember to generate a uuid for each enemy
  //rebuild the list of enemies cards
}

function removeFromList() {
  //find the uuid in the card whose button was clicked
  //remove from the enemyList
  //rebuild the list of enemies cards
}
