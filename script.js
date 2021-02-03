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
window.divCounter = 0;
window.divCounter2 = 0;
const deleteType = (labelAdd, labelDelete, inputType, spacing, elementNumber) => {
  window.divCounter++
  /* Remove elements given as id's */
  /* Insert div so div can be used to append later */
  //document.getElementById(labelDelete).insertAdjacentHTML('afterend', `<div id="${inputType}"></div>`)
  document.getElementById(labelDelete).remove()
  document.getElementById(spacing).remove()
  document.getElementById(inputType).insertAdjacentHTML('afterend', `<div id="div${window.divCounter}"`)
  const myNewDiv = document.createElement('div');
  myNewDiv.id = `div2${window.divCounter2}`;
  document.getElementById('sidebarTasks').appendChild(myNewDiv)
  document.getElementById(myNewDiv.id).insertAdjacentHTML('beforebegin', `</div>`)
  document.getElementById(myNewDiv.id).remove()
  //document.getElementById(inputType).remove()
  //document.getElementById(labelAdd).remove()
  //document.getElementById(`element${elementNumber + 1}`).remove()
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
  //document.getElementById(`${labelid}`)
  document.getElementById(`${labelid}`).nextElementSibling.insertAdjacentHTML('afterend', `<br><input placeholder="heading" name="heading" type="text" id="heading${window.counterHeadings}" style="position: relative; left: 2vw;"></input>`)
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
  document.getElementById(`label${window.counterLabel}`).insertAdjacentHTML('afterend', `<label for="section" id="labelDelete${window.counterLabelDelete}"><button onclick="deleteType('label${window.counterLabel}', 'labelDelete${window.counterLabelDelete}', 'element${window.counter}', 'br${window.counterBr}', '${window.counter}')">X</button></label>`)
  // br has id so can be deleted and not take up space.
  const br = document.createElement('br');
  br.id = `br${window.counterBr}`;
  sidebar.appendChild(br);
}
window.counterCheck = 0;
const navbarRight = document.getElementById('navbarRight');
const version = document.getElementById('version');
const rightNavBar = () => {
  // If window.counterCheck is not 1 then it's 0
  if (window.counterCheck !== 1) {
    window.counterCheck = 1;
    navbarRight.style= 'visibility: visible; position: absolute;';
    const URL = '/version.md';
    fetch(URL)
    .then(res => res.text())
    .then(text => {
      console.log(text);
      // - 1
      version.innerHTML = text.slice(0, text.search("Log:"));
    })
    .catch(err => console.log(err));
    navbarRight.style.top = '10%';
    //68
    navbarRight.style.left = '68%';
    var counter = 0;
    var myInterval = setInterval(function () {
      counter++
      console.log(counter);
      navbarRight.style.width = `${counter}%`;
      navbarRight.style.left++
      if (counter > 29) {
        clearInterval(myInterval)
      }
    }, 10)
  } else {
    window.counterCheck = 0;
    navbarRight.style.top = '10%';
    //68
    navbarRight.style.left = '68%';
    var counter = 29;
    var myInterval = setInterval(function () {
      counter--
      console.log(counter);
      navbarRight.style.width = `${counter}%`;
      navbarRight.style.left--
      if (counter < 1) {
        navbarRight.style= 'visibility: hidden; position: absolute;';
        clearInterval(myInterval)
      }
    }, 10)
  }
}
const toggleDarkOrLight = document.getElementsByTagName("i")[0];
var toggled = false;
const toggle = () => {
  if (toggled === false) {
    toggleDarkOrLight.classList.remove("fa-toggle-off");
    toggleDarkOrLight.classList.add("fa-toggle-on");
    toggled = true;
  } else {
    toggleDarkOrLight.classList.remove("fa-toggle-on");
    toggleDarkOrLight.classList.add("fa-toggle-off");
    toggled = false;
  }
};