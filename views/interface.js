document.addEventListener('DOMContentLoaded', () => {
  let noteContainer;

  if (localStorage.getItem("noteContainer") === null ) {
    noteContainer = new NoteContainer
    saveToLocalStorage(noteContainer);
  } else {
    noteContainer = loadFromLocalStorage();
  }

  document.querySelector('#new_note_form').addEventListener('submit', (event) => {
    event.preventDefault()
    noteContainer = loadFromLocalStorage();
    let content = document.querySelector('#new_note_text_box')
    emojify(content.value).then((noteContentEmoji) => {
      noteContainer.create(noteContentEmoji)
      createLinks(noteContainer);
      saveToLocalStorage(noteContainer);
    })
    content.value = null
  })

  window.addEventListener('hashchange', () => {
    noteContainer = loadFromLocalStorage();
    let url = window.location.hash.split('#')
    if(url.length > 1) {
      let noteId = url[1]
      let noteContent = noteContainer.getContentById(parseInt(noteId))
      showNotePage()
      document.querySelector('#note_display_content').innerText = noteContent
    } else {
      hideNotePage()
    }
    saveToLocalStorage(noteContainer);
  })

  document.querySelector('#note_display').addEventListener('submit', (event) => {
    noteContainer = loadFromLocalStorage();
    event.preventDefault()
    hideNotePage()
    history.replaceState(null, null, ' ');
    saveToLocalStorage(noteContainer);
  })
})

function showNotePage() {
  document.querySelector('#main_page_display').style.display = 'none'
  document.querySelector('#note_display').style.display = 'block'
}

function hideNotePage() {
  document.querySelector('#main_page_display').style.display = 'block'
  document.querySelector('#note_display').style.display = 'none'
}

function saveToLocalStorage(value) {
  localStorage.setItem("noteContainer", JSON.stringify(value));
}

function loadFromLocalStorage() {
  const loadedContainer = localStorage.getItem("noteContainer");
  const loadedData = JSON.parse(loadedContainer);
  let noteContainer = new NoteContainer();
  createNotesFromJSON(noteContainer, loadedData.notes);
  createLinks(noteContainer);
  return noteContainer;
}

function createNotesFromJSON(noteContainer, notes) {
  notes.forEach(note => {
    noteContainer.create(note.content);
  })
}

function createLinks(container) {
  document.querySelector('#saved_notes_list').innerHTML = "";
  container.notes.forEach(note => {  
    let listNode = document.createElement('p');
    let linkNode = document.createElement('a');
    let noteId = note.id;
    let noteTitle = note.title();
    linkNode.setAttribute('href', `#${noteId}`)
    linkNode.innerText = noteTitle
    listNode.appendChild(linkNode)
    document.getElementById('saved_notes_list').appendChild(listNode);
  });
}

async function emojify(content) {
  const rawResponse = await fetch('https://makers-emojify.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"text": content})
  });
  let emojifiedContent = await rawResponse.json();
  let response = await emojifiedContent
  return response.emojified_text
}
