// FAQ's section script:

// ANIMATE [FAQ] ACCORDION.

// assign elements.
var questions = document.getElementsByClassName("question");
var i;

// loop over and add event for every question.
for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    // define next sibling.
    var answer = this.nextElementSibling;
    answer.classList.toggle("add-padding-to-accordion");

    // if it has a height reassign it to <null>, otherwise add scroll height for the element.
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}
