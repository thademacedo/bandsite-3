/*Comments Section
- You must have an array in JavaScript with 3 default comment objects to start. Comments must have a name, a timestamp, and the comment text.
- You must have a function called displayComment() that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.
- All dynamic HTML should be added to DOM via DOM Methods for individual elements. Avoid bulk assigning stringified HTML using innerHTML
- You must use an HTML Form with the following functionality:
1. That submits using the addEventListener
2. Prevents the page from reloading when submitting a new comment
3. Constructs a new comment object
4. Pushes a new comment object to an array of comments
5. Clears all comments from the page
6. Re-renders to the page all comments from the comment array
7. Clears the input fields after submitting a new comment*/

var comments = [];

// Function to display a comment
function displayComment(comment) {
  var commentsContainer = document.getElementById("commentsContainer");

  var commentDiv = document.createElement("div");
  var nameElement = document.createElement("strong");
  var timestampElement = document.createElement("span");
  var textElement = document.createElement("p");

  nameElement.textContent = comment.name;
  timestampElement.textContent = "(" + comment.timestamp + ")";
  textElement.textContent = comment.text;

  commentDiv.appendChild(nameElement);
  commentDiv.appendChild(timestampElement);
  commentDiv.appendChild(document.createElement("br"));
  commentDiv.appendChild(textElement);
  commentDiv.appendChild(document.createElement("br"));

  commentsContainer.appendChild(commentDiv);
}

// Function to clear all comments
function clearComments() {
  var commentsContainer = document.getElementById("commentsContainer");
  while (commentsContainer.firstChild) {
    commentsContainer.firstChild.remove();
  }
}

// Function to render all comments
function renderComments() {
  clearComments();
  comments.forEach(function (comment) {
    displayComment(comment);
  });
}

// Event listener for the form submission
document
  .getElementById("commentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var commentInput = document.getElementById("comment");

    var newComment = {
      name: nameInput.value,
      timestamp: new Date().toISOString().slice(0, 10),
      text: commentInput.value,
    };

    comments.push(newComment);

    clearComments();
    renderComments();

    nameInput.value = "";
    commentInput.value = "";
  });