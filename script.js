/* Nonfications, Thanks to MDN */
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Take a break!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
notifyMe()
/* Add deleted elements and refer to it when created in same place / position */
window.deletedSections = [];
window.deletedHeadings = [];
window.deletedTasks = [];
const sidebar = document.getElementById('sidebarTasks');
/* Counts each element so they can have different id's to be selected */
window.counter = 0;
window.counterHeadings = 0;
window.counterLabel = 0;
window.counterLabelDelete = 0;
window.counterTasks = 0;
window.counterBr = 0;
/* To avoid any interferance there is a seperate delete function for tasks(because properties of tasks differ) */
const deleteTask = (taskid) => {

}
/* Delete sections and headings */
const deleteType = (labelAdd, labelDelete, inputType, spacing) => {
  /* Remove elements given as id's */
  document.getElementById(labelAdd).remove()
  /* Insert div so div can be used to append later */
  document.getElementById(labelDelete).insertAdjacentHTML('afterend', `<div id="${inputType}"></div>`)
  document.getElementById(labelDelete).remove()
  document.getElementById(inputType).remove()
  document.getElementById(spacing).remove()
  /* Check if inputType is section or heading */
  if (inputType.slice(0, 7) === 'element') {
    /* Push to section counter */
    window.deletedSections.push(inputType)
  } else if (inputType.slice(0, 7) === 'heading') {
    /* Push to heading counter */
    window.deletedHeadings.push(inputType)
  }
}
/* New task */
const newTask = (id, labelid) => {
  // Counter tasks for id's that work
  window.counterTasks++
  window.counterLabel++
  const heading = document.getElementById(id);
  const label = document.getElementById(labelid);
  // Insert task input
  label.insertAdjacentHTML('afterend', `<br><input placeholder="task" name="task" type="text" id="task${window.counterTasks}" style="position: relative; left: 4vw;"></input>`)
  // Insert button to go to the task
  document.getElementById(`task${window.counterTasks}`).insertAdjacentHTML('afterend', `<label for="task" style="position: relative; left: 4vw;" id="label${window.counterLabel}"><button onclick="checkTask()">></button></label>`)
}
const newHeading = (id, labelid) => {
  const sectionElement = document.getElementById(id);
  // Counter for headings and id's
  window.counterHeadings++
  window.counterLabel++
  // test declared to fix some bugs but might be unnessary
  const test = 'element' + window.counterHeadings;
  // creat heading input
  document.getElementById(`${labelid}`).insertAdjacentHTML('afterend', `<br><input placeholder="heading" name="heading" type="text" id="heading${window.counterHeadings}" style="position: relative; left: 2vw;"></input>`)
  // insert label button "+"
  document.getElementById(`heading${window.counterHeadings}`).insertAdjacentHTML('afterend', `<label for="heading" style="position: relative; left: 2vw;" id="label${window.counterLabel}"><button onclick="newTask('heading${window.counterHeadings}', 'label${window.counterLabel}')">+</button></label>`);
}
const addSection = () => {
  // counter for section, label and <br>
  window.counter++
  window.counterLabel++
  window.counterBr++
  const newSection = document.createElement('input');
  // add attributes to section and appendChild() because section is not moved to the right so this is a better aprroach
  newSection.setAttribute('placeholder', 'section');
  newSection.setAttribute('name', 'section');
  newSection.setAttribute('type', 'text');
  newSection.id = 'element' + window.counter;
  // test again
  const test = 'element' + window.counter;
  sidebar.appendChild(newSection)
  const label = document.createElement('label');
  // label with "+"
  label.setAttribute('for', 'section');
  label.innerHTML = `<button onclick="newHeading('element${window.counter}', 'label${window.counterLabel}')">+</button>`;
  label.id = `label${window.counterLabel}`;
  console.log(label.innerHTML);
  sidebar.appendChild(label)
  // delete label "X"
  document.getElementById(`label${window.counterLabel}`).insertAdjacentHTML('afterend', `<label for="section" id="labelDelete${window.counterLabelDelete}"><button onclick="deleteType('label${window.counterLabel}', 'labelDelete${window.counterLabelDelete}', 'element${window.counter}', 'br${window.counterBr}')">X</button></label>`)
  // br has id so can be deleted and not take up space.
  const br = document.createElement('br');
  br.id = `br${window.counterBr}`;
  sidebar.appendChild(br);
}