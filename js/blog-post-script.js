import { posts } from "../post.js";

const submitCommentBtn = document.querySelector("[data-comment-btn]");
const id = new URL(window.location.href).searchParams.get("id");
let post;
if (id == null) {
  post = {
    id: 100,
    title:
      "Wonderful Methods to Spot Investment Opportunities in the Stock Market",
    author: "Michael Faletti",
    date: "March 13, 2024",
    thumbnail: "assets/hero-pic.avif",
    profile_pic: "assets/michael_faletti.png",
  };
} else {
  post = posts.find((post) => id == post.id);
}
const blogTitle = document.querySelector("[data-blog-title]");
const blogImg = document.querySelector("[data-blog-img");
const blogProfileImg = document.querySelector("[data-profile-img]");
const blogAuthor = document.querySelector("[data-author]");
const blogDate = document.querySelector("[data-blog-date]");
blogTitle.textContent = post.title;
blogImg.setAttribute("src", post.thumbnail);
blogProfileImg.setAttribute("src", post.profile_pic);
blogAuthor.textContent = post.author;
blogDate.textContent = post.date;

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
