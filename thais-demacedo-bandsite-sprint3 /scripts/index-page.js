//API
const apiKey = "84b28e44-354e-44ef-aec8-820ce4501fa2";
let arrofcomments = [];
function comments() {
  axios
    .get("https://project-1-api.herokuapp.com/comments?api_key=" + apiKey)
    .then((result) => {
      console.log(result.data);
      clearComments();
      for (let i = 0; i < result.data.length; i++) {
        displayComment(result.data[i]);
        console.log(arrofcomments);
      }
      console.log(arrofcomments);
    })
    .catch((error) => {
      console.log(error);
    });
}
comments();

function displayComment(obj) {
  console.log(obj);
  let maincommentsContainer = document.getElementById("commentsContainer");
  let commentsContainer = document.createElement("div");
  commentsContainer.classList.add("status-update");
  let img = document.createElement("div");
  img.classList.add("comment_section__profile-picture");
  let strong = document.createElement("strong");
  strong.classList.add("status-update__name");
  strong.innerHTML = obj.name;
  let span = document.createElement("span");
  span.classList.add("status-update__timestamp");
  span.innerHTML = obj.timestamp;
  let pa = document.createElement("div");
  pa.classList.add("status-update__text");
  pa.innerHTML = obj.comment;
  commentsContainer.appendChild(img);
  commentsContainer.appendChild(strong);
  commentsContainer.appendChild(span);
  commentsContainer.appendChild(pa);
  maincommentsContainer.appendChild(commentsContainer);
}

// Function to clear all comments
function clearComments() {
  let commentsContainer = document.getElementById("commentsContainer");
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

    let nameInput = document.getElementById("name");
    let commentInput = document.getElementById("comment");

    let newComment = {
      name: nameInput.value,
      comment: commentInput.value,
    };

    axios
      .post(
        "https://project-1-api.herokuapp.com/comments?api_key=" + apiKey,
        newComment
      )
      .then(() => {
        comments();
        renderComments();
      });

    nameInput.value = "";
    commentInput.value = "";
  });

  