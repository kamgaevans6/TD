
(function () {
  const STORAGE_KEY = 'vanilla-todo-tasks';

  const form = document.getElementById('task-form');
  const input = document.getElementById('task-input');
  const list = document.getElementById('task-list');
  const countLabel = document.getElementById('count-label');
  const clearDoneBtn = document.getElementById('clear-done');

  let tasks = loadTasks();

  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.error('Impossible de lire les tâches enregistrées :', err);
      return [];
    }
  }

  function saveTasks() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (err) {
      console.error('Impossible d’enregistrer les tâches :', err);
    }
  }

  function makeId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function addTask(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    tasks.push({ id: makeId(), text: trimmed, done: false });
    saveTasks();
    render();
  }

  function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.done = !task.done;
      saveTasks();
      render();
    }
  }

  function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    render();
  }

  function clearDone() {
    tasks = tasks.filter(t => !t.done);
    saveTasks();
    render();
  }

  function render() {
    list.innerHTML = '';

    if (tasks.length === 0) {
      const empty = document.createElement('li');
      empty.className = 'empty-state';
      empty.textContent = 'Rien pour l’instant. Ajoutez votre première tâche ci-dessus.';
      list.appendChild(empty);
    } else {
      tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task' + (task.done ? ' done' : '');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.done;
        checkbox.setAttribute('aria-label', 'Marquer comme terminée : ' + task.text);
        checkbox.addEventListener('change', () => toggleTask(task.id));

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;

        const del = document.createElement('button');
        del.className = 'delete-btn';
        del.type = 'button';
        del.innerHTML = '&#10005;';
        del.setAttribute('aria-label', 'Supprimer : ' + task.text);
        del.addEventListener('click', () => deleteTask(task.id));

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(del);
        list.appendChild(li);
      });
    }

    const remaining = tasks.filter(t => !t.done).length;
    const total = tasks.length;
    countLabel.textContent = total === 0
      ? '0 tâche'
      : remaining + ' sur ' + total + ' restante' + (remaining > 1 ? 's' : '');

    clearDoneBtn.disabled = tasks.every(t => !t.done);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(input.value);
    input.value = '';
    input.focus();
  });

  clearDoneBtn.addEventListener('click', clearDone);

  render();
})();
