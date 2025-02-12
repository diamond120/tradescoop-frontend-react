import { posts } from "../post.js";

const submitCommentBtn = document.querySelector("[data-comment-btn]");

submitCommentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const form = e.currentTarget.closest("form");
  const name = form.name.value;
  const email = form.email.value;
  const comment = form.comment.value;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  form.insertAdjacentHTML(
    "beforebegin",
    `<ul>
      <li><h3>Thanks for your comment!</h3></li>
        <li>name: ${name}</li>
        <li>email: ${email}</li>
        <li>comment: ${comment}</li>
        </ul>`
  );
  form.remove();
});
