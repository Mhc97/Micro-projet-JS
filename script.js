const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return alert('Merci d’entrer une tâche');
  addTask(text);
  input.value = 'Merci d’entrer une tâche';
});

function addTask(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✓';
  const delBtn = document.createElement('button');
  delBtn.textContent = '✕';

  doneBtn.onclick = () => li.classList.toggle('completed');
  delBtn.onclick = () => list.removeChild(li);

  li.appendChild(span);
  li.append(doneBtn, delBtn);
  list.appendChild(li);
}
