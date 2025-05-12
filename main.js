document.getElementById('add-button').addEventListener('click', () => {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text !== '') {
      const li = document.createElement('li');
      li.textContent = text;
      li.addEventListener('click', () => li.classList.toggle('done'));
      document.getElementById('todo-list').appendChild(li);
      input.value = '';
    }
  });
  