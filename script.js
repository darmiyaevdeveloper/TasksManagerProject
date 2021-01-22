
/*
Sections:
On the side there is sections, meaning, that you can make sections like, homework or just study

Smaller sections/headings:
These are big goals etc

Tasks:
These are tasks that can be completed and recorded

*/



//alert('test')


//Read localStorage:
/*
if (localStorage.getItem('object') === undefined) {
  localStorage.setItem('object', '')
} else {
  //let objectData = localStorage.getItem('object');
  let objectData = {
    section: {
      heading: {
        task: 'label'
      }
    },
    studyRoutine: {
      onweekdays: {
        mathBook: 'important'
      },
      onweekends: {
        mathBook: 'important',
        scienceBook: 'notimportant'
      }
    }
  }
  alert(objectData[1])
  // loop sections
  alert(objectData.length)
  for (var i = 0; i < objectData.length; i++) {
    // loop headings
    for (var y = 0; y < objectData[i].length; y++) {
      // loop tasks
      for (var x = 0; x < objectData[i][y].length; x++) {
        const myElementMade = document.createElement('input');
        myElementMade.setAttribute('type', 'text')

      }
    }
  }
}
*/
/*
objectData = {
  section {
    heading {
      task: 'label'
    }
  }
  studyRoutine {
    onweekdays {
      mathBook: 'important';
    }
    onweekends {
      mathBook: 'important',
      scienceBook: 'notimportant'
    }
  }
}
*/
/*
function wait() {
  console.log('test');
  setTimeout(wait, 2000)
}

setTimeout(function () {
  setTimeout(wait)
}, 2000)
*/
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
/*
Idea for deleting:
Press X button
- Add the id in a list
- If user trys to add in there again replace that Idea
- That's it!
*/
window.deleted = [];
const sidebar = document.getElementById('sidebarTasks');
window.counter = 0;
window.counterHeadings = 0;
window.counterLabel = 0;
window.counterLabelDelete = 0;
window.counterTasks = 0;
const newTask = (id, labelid) => {
  window.counterTasks++
  const heading = document.getElementById(id);
  const label = document.getElementById(labelid);
  label.insertAdjacentHTML('afterend', `<br><input placeholder="task" name="task" type="text" id="task${window.counterTasks}" style="position: relative; left: 4vw;"></input>`)
  document.getElementById(`task${window.counterTasks}`).insertAdjacentHTML('afterend', `<label for="task" style="position: relative; left: 4vw;" id="label${window.counterLabel}"><button onclick="checkTask()">></button></label>`)
}
const newHeading = (id, labelid) => {
  const sectionElement = document.getElementById(id);
  window.counterHeadings++
  window.counterLabel++
  alert(id)
  /*
  const newHeading = document.createElement('input');
  newHeading.setAttribute('placeholder', 'heading');
  newHeading.setAttribute('name', 'heading');
  newHeading.setAttribute('type', 'text');
  newHeading.id = 'element' + window.counterHeadings;
  newHeading.style = "position: relative; left: 2vw;";
  */
  const test = 'element' + window.counterHeadings;
  document.getElementById(`${labelid}`).insertAdjacentHTML('afterend', `<br><input placeholder="heading" name="heading" type="text" id="heading${window.counterHeadings}" style="position: relative; left: 2vw;"></input>`)
  //sidebar.appendChild(newHeading)
  /*
  const label = document.createElement('label');
  label.setAttribute('for', 'heading');
  label.style = "position: relative; left: 2vw;";
  label.innerHTML = `<button onclick="newTask('heading${window.counterHeadings}')">+</button>`;
  console.log(label.innerHTML);
  */
  document.getElementById(`heading${window.counterHeadings}`).insertAdjacentHTML('afterend', `<label for="heading" style="position: relative; left: 2vw;" id="label${window.counterLabel}"><button onclick="newTask('heading${window.counterHeadings}', 'label${window.counterLabel}')">+</button></label>`);
}
const addSection = () => {
  window.counter++
  window.counterLabel++
  const newSection = document.createElement('input');
  newSection.setAttribute('placeholder', 'section');
  newSection.setAttribute('name', 'section');
  newSection.setAttribute('type', 'text');
  newSection.id = 'element' + window.counter;
  const test = 'element' + window.counter;
  sidebar.appendChild(newSection)
  const label = document.createElement('label');
  label.setAttribute('for', 'section');
  label.innerHTML = `<button onclick="newHeading('element${window.counter}', 'label${window.counterLabel}')">+</button>`;
  label.id = `label${window.counterLabel}`;
  console.log(label.innerHTML);
  sidebar.appendChild(label)
  // Label 2 not working
  const label2 = document.createElement('label');
  label2.setAttribute('for', 'section');
  label2.id = `labelDelete${window.counterLabelDelete}`;
  label2.innerHTML = `<button onclick="deleteType('section', 'labelDelete${window.counterLabelDelete}')"`;
  sidebar.appendChild(label2)
  const br = document.createElement('br');
  sidebar.appendChild(br);

}