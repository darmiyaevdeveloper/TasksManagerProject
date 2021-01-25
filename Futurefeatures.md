Sections:
On the side there is sections, meaning, that you can make sections like, homework or just study

Smaller sections/headings:
These are big goals etc

Tasks:
These are tasks that can be completed and recorded

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