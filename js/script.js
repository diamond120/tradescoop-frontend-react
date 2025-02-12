const postsPerPage = 4;
let currentPage = 1;

import { posts } from "../post.js";

const postsContainer = document.querySelector(".posts-cont");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
const endBtn = document.getElementById("end-btn");
const currentPageEle = document.querySelector("[data-current-page]");
const totalPageEle = document.querySelector("[data-total-page]");

function displayPosts() {
  postsContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const postsToDisplay = posts.slice(startIndex, endIndex);

  postsToDisplay.forEach((post) => {
    postsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="post">
            <a href="/blog-post.html?id=${post.id}" class="post-img">
              <img src=${post.thumbnail} alt="">
            </a>
            <div class="post-info">
              <a href="/blog-post.html?id=${post.id}" class="post-title">
                <h3>${post.title}</h3>
              </a>
              <div class="profile-cont">
                <div class="profile">
                  <img src=${post.profile_pic} alt="${post.author}" class="profile-img-cont">

                  <p class="poppins-semibold profile-name">Samuel Choi</p>
                </div>
                <div class="date">${post.date}</div>
              </div>
            </div>
</div> 
        `
    );
  });

  currentPageEle.textContent = `${currentPage}`;
  totalPageEle.textContent = `${Math.ceil(posts.length / postsPerPage)}`;

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === Math.ceil(posts.length / postsPerPage);
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayPosts();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(posts.length / postsPerPage)) {
    currentPage++;
    displayPosts();
  }
});
console.log(startBtn);
startBtn.addEventListener("click", () => {
  console.log("here");
  currentPage = 1;
  displayPosts();
});
endBtn.addEventListener("click", () => {
  currentPage = Math.ceil(posts.length / postsPerPage);
  displayPosts();
});

displayPosts();
