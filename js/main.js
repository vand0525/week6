import { enemyList } from './data.js';
let enemies = [...enemyList]; // copy the contents of enemyList to a new array

document.addEventListener('DOMContentLoaded', init);

function init() {
	//when the page loads...
	buildEnemyCards();
	addListeners();
}

function addListeners() {
	//add a submit listener to the form
	let form = document.querySelector('#enemyForm');
	form.addEventListener('submit', addUserToList);
  
  document.getElementById('btnCancel').addEventListener('click', ev => {
    ev.preventDefault();
    document.getElementById('enemyForm').reset();
  })
	//add delete listeners for cards
	let section = document.querySelector('#enemies');
  section.addEventListener('click', removeFromList);
}

function buildEnemyCards() {
	if (!enemyList) return;
	let section = document.querySelector('#enemies');

	//called when page loads AND after any update to the enemyList
	section.innerHTML = enemies
		.map((enemy) => {
			return `<div class="enemy" data-ref=${enemy.uuid}>
        <h3>${enemy.name}</h3>
        <p>${enemy.reason}</p>
        <button class="btnDelete">Forgive Them</button>
      </div>`;
		})
		.join('');
}

function addUserToList(ev) {
	ev.preventDefault();

	const formData = new FormData(ev.target);
  const name = formData.get('enemy');
  const reason = formData.get('reason');

  document.getElementById('enemy').classList.remove('error');
  document.getElementById('reason').classList.remove('error');


  if (!name || !reason) {
    if (!name) {
      document.getElementById('enemy').classList.add('error');
    } 
    if (!reason) {
      document.getElementById('reason').classList.add('error'); 
    }
    return;
  }

	enemies.unshift({
		uuid: crypto.randomUUID(),
    name: name,
    reason: reason,
	});

  ev.target.reset();
	buildEnemyCards();
}

function removeFromList(ev) {
	let target = ev.target;
  if(target.localName === 'button' && target.classList.contains('btnDelete')){
    const card = target.closest('.enemy');
    if(card){
      const uuid = card.getAttribute('data-ref');
      enemies = enemies.filter(enemy => {
        if (uuid === enemy.uuid) return false;
        return true;
      });
      buildEnemyCards();
    } 
  }
}
