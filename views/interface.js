document.addEventListener('DOMContentLoaded', () => {
  let noteContainer;

  if (localStorage.getItem("noteContainer") === null ) {
    console.log('string');
    noteContainer = new NoteContainer
    saveToLocalStorage(noteContainer);
  } else {
    console.log('another string else ');
    noteContainer = loadFromLocalStorage();
  }

  document.querySelector('#new_note_form').addEventListener('submit', (event) => {
    event.preventDefault()
    noteContainer = loadFromLocalStorage();
    let content = document.querySelector('#new_note_text_box')
    noteContainer.create(content.value)
    createLinks(noteContainer);
    content.value = null
    saveToLocalStorage(noteContainer);
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
  console.log(JSON.stringify(value));
  localStorage.setItem("noteContainer", JSON.stringify(value));
}

function loadFromLocalStorage() {
  const loadedContainer = localStorage.getItem("noteContainer");
  console.log(JSON.parse(loadedContainer));
  console.log(loadedContainer);
  const loadedData = JSON.parse(loadedContainer);
  let noteContainer = new NoteContainer(loadedData.notes, loadedData.idCounter);
  // console.log(noteContainer, 'testing string')
  createLinks(noteContainer);
  return noteContainer
}

function createLinks(container) {
  document.querySelector('#saved_notes_list').innerHTML = "";
  container.notes.forEach(note => {  
    let listNode = document.createElement('li');
    let linkNode = document.createElement('a');
    let noteId = note.id;
    let noteTitle = note.content.substring(0, 20);
    linkNode.setAttribute('href', `#${noteId}`)
    linkNode.innerText = noteTitle
    listNode.appendChild(linkNode)
    document.getElementById('saved_notes_list').appendChild(listNode);
  });
}
