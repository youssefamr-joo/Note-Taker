"use strict";
const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const noteForm = document.getElementById("noteForm");
const spinnerOverlay = document.getElementById("spinnerOverlay");

let notes = [];

// get from local storage
document.addEventListener("DOMContentLoaded", () => {
  notes = JSON.parse(localStorage.getItem("notes")) || [];
  displayNotes();
});

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (noteTitle.value.trim() === "" || noteContent.value.trim() === "") {
    noteTitle.classList.add("is-invalid");
    noteContent.classList.add("is-invalid");
    return;
  }
  noteTitle.classList.remove("is-invalid");
  noteContent.classList.remove("is-invalid");
  showSpinner();
  setTimeout(() => {
    addNote();
    displayNotes();
    hideSpinner();
  }, 500);
});

// add notes function
function addNote() {
  const note = {
    title: noteTitle.value,
    content: noteContent.value,
  };

  notes.push(note);
  saveToLocalStorage();
}

// display notes function
function displayNotes() {
  let cartona = ``;
  notes.forEach((note, index) => {
    const words = note.content.split(" ");
    let truncatedContent = note.content;

    if (words.length > 15) {
      truncatedContent = words.slice(0, 15).join(" ") + "...";
    }

    cartona += `
      <div class='note-card-n card shadow col-md-4'>
        <div class="card-body">
          <h2 class="text-center">${note.title}</h2>
          <p class="text-muted" data-full-content="${note.content}">${truncatedContent}</p>
        </div>
        <div class="card-footer bg-white">
          <button onclick='getDetailed(${index}, this)' class="btn btn-sm btn-primary">Details</button>
          <button onclick='deleteNoteWithSpinner(${index}, this)' class="btn btn-sm btn-danger delete-note">Delete</button>
        </div>
      </div>
    `;
  });

  document.querySelector("#notesContainer").innerHTML = cartona;
  clearForm();
}

// delete note function with spinner
function deleteNoteWithSpinner(index) {
  showSpinner();
  setTimeout(() => {
    notes.splice(index, 1);
    saveToLocalStorage();
    displayNotes();
    hideSpinner();
  }, 500);
}

// clear value of html after submit function
function clearForm() {
  noteTitle.value = "";
  noteContent.value = "";
}

// get detailed note function
function getDetailed(index) {
  showSpinner();
  setTimeout(() => {
    const fullContent = document.querySelector(
      `[data-full-content="${notes[index].content}"]`
    ).dataset.fullContent;
    document.getElementById(
      "noteTitleDetail"
    ).innerText = `${notes[index].title}`;
    document.getElementById("noteContentDetail").innerText = fullContent;
    document.querySelector("#noteDetails").classList.remove("d-none");
    hideSpinner();
  }, 500);
}

// hide note details function
document.getElementById("closeDetail").addEventListener("click", function () {
  hideNoteDetails();
});
function hideNoteDetails() {
  document.querySelector("#noteDetails").classList.add("d-none");
}

// add to local storage function
function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// show spinner function
function showSpinner() {
  spinnerOverlay.classList.remove("d-none");
}

// hide spinner function
function hideSpinner() {
  spinnerOverlay.classList.add("d-none");
}
