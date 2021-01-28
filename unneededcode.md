/*
  if (window.counterHeadings > 1) {
    if (document.getElementById(`heading${window.counterHeadings - 1}`).nextElementSibling.nextElementSibling.id.slice(0, 4) !== 'task') {
      document.getElementById(`heading${window.counterHeadings - 1}`).nextElementSibling.insertAdjacentHTML('afterend', `<br><input placeholder="heading" name="heading" type="text" id="heading${window.counterHeadings}" style="position: relative; left: 2vw;"></input>`)
      // insert label button "+"
      document.getElementById(`heading${window.counterHeadings}`).insertAdjacentHTML('afterend', `<label for="heading" style="position: relative; left: 2vw;" id="label${window.counterLabel}"><button onclick="newTask('heading${window.counterHeadings}', 'label${window.counterLabel}')">+</button></label>`);
    } else {
      alert(document.querySelectorAll(`#heading${window.counterHeadings - 1} > *`));
      document.getElementById(`heading${window.counterHeadings - 1}`).nextElementSibling.insertAdjacentHTML('afterend', `<br><input placeholder="heading" name="heading" type="text" id="heading${window.counterHeadings}" style="position: relative; left: 2vw;"></input>`)
      // insert label button "+"
      document.getElementById(`heading${window.counterHeadings}`).insertAdjacentHTML('afterend', `<label for="heading" style="position: relative; left: 2vw;" id="label${window.counterLabel}"><button onclick="newTask('heading${window.counterHeadings}', 'label${window.counterLabel}')">+</button></label>`);
    }
  } else {
    document.getElementById(`${labelid}`).insertAdjacentHTML('afterend', `<br><input placeholder="heading" name="heading" type="text" id="heading${window.counterHeadings}" style="position: relative; left: 2vw;"></input>`)
  // insert label button "+"
  document.getElementById(`heading${window.counterHeadings}`).insertAdjacentHTML('afterend', `<label for="heading" style="position: relative; left: 2vw;" id="label${window.counterLabel}"><button onclick="newTask('heading${window.counterHeadings}', 'label${window.counterLabel}')">+</button></label>`);
  }
  */
  if (window.counterHeadings > 1) {
    window.counter = 0;
    window.counterPrev = [labelid];
    while (true) {
      console.log(window.counterPrev[window.counterPrev]);
      window.counterPrev.push(document.getElementById(window.counterPrev[window.counterPrev.length - 1]).nextElementSibling.id)
      window.counter++
      if (window.counter > 20) {
        break;
      }
  }