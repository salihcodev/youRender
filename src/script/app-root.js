// FAQ's section script:

// ANIMATE [FAQ] ACCORDION.

// assign elements.
var questions = document.getElementsByClassName('question');
var togglerViewer = document.getElementsByClassName('toggler-viewer');
var i;

// loop over and add event for every question.
for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function () {
    // define next sibling.
    var answer = this.nextElementSibling;

    // toggler icon depends on the class which is added here.
    this.classList.toggle('toggle-FAQ-icon');

    // if it has a height, reassign it to <null>, otherwise add scroll height for the element.
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.padding = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.padding = '1rem 1rem 3rem';
    }
  });
}
