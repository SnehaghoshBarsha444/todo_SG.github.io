// Grab DOM elements
const noteTitle = document.getElementById('noteTitle');
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesList = document.getElementById('notesList');

// Function to create a new note item
function createNoteItem(title, noteText) {
    const noteItem = document.createElement('div');
    noteItem.classList.add('note-item');
    
    // Create title element
    const noteTitleElem = document.createElement('div');
    noteTitleElem.classList.add('note-title1');
    noteTitleElem.textContent = title;

    // Create note content element
    const noteContentElem = document.createElement('div');
    noteContentElem.classList.add('note-content');
    noteContentElem.textContent = noteText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        notesList.removeChild(noteItem);
    });

    // Append title, content, and delete button to the note item
    noteItem.appendChild(noteTitleElem);
    noteItem.appendChild(noteContentElem);
    noteItem.appendChild(deleteBtn);

    // Append the note item to the notes list
    notesList.appendChild(noteItem);
}

// Event listener to add a new note
addNoteBtn.addEventListener('click', () => {
    const titleText = noteTitle.value.trim();
    const noteText = noteInput.value.trim();
    if (titleText !== "" && noteText !== "") {
        createNoteItem(titleText, noteText);
        noteTitle.value = ""; // Clear title input after adding note
        noteInput.value = "";  // Clear content input after adding note
    } else {
        alert("Please enter both a title and note content!");
    }
});

// Allow pressing "Enter" to add a note (on the content field)
noteInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addNoteBtn.click();
    }
});