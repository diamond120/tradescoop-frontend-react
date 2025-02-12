const postsPerPage = 4;
let currentPage = 1;

const posts = [
  {
    id: 1,
    title: "Options Trading Basics For Beginners",
    author: "Samuel Choi",
    date: "March 14, 2024",
    thumbnail: "assets/options-image.avif",
    profile_pic: "assets/samuel-choi.png",
  },
  {
    id: 2,
    title: "Key Options Trading Terms and Concepts",
    author: "Samuel Choi",
    date: "March 14, 2024",
    thumbnail: "assets/key-options.avif",
    profile_pic: "assets/samuel-choi.png",
  },
  {
    id: 3,
    title: "Complementary Analysis Methods",
    author: "Michael Faletti",
    date: "March 14, 2024",
    thumbnail: "assets/complementary.avif",
    profile_pic: "assets/michael_faletti.png",
  },
  {
    id: 4,
    title: "Options Trading Basics For Beginners",
    author: "Michael Faletti",
    date: "March 14, 2024",
    thumbnail: "assets/opportunities.avif",
    profile_pic: "assets/michael_faletti.png",
  },
  {
    id: 5,
    title: "Options Trading Basics For Beginners",
    author: "Samuel Choi",
    date: "March 14, 2024",
    thumbnail: "assets/options-image.avif",
    profile_pic: "assets/samuel-choi.png",
  },
  {
    id: 6,
    title: "Key Options Trading Terms and Concepts",
    author: "Samuel Choi",
    date: "March 14, 2024",
    thumbnail: "assets/key-options.avif",
    profile_pic: "assets/samuel-choi.png",
  },
  {
    id: 7,
    title: "Complementary Analysis Methods",
    author: "Michael Faletti",
    date: "March 14, 2024",
    thumbnail: "assets/complementary.avif",
    profile_pic: "assets/michael_faletti.png",
  },
  {
    id: 8,
    title: "Options Trading Basics For Beginners",
    author: "Michael Faletti",
    date: "March 14, 2024",
    thumbnail: "assets/opportunities.avif",
    profile_pic: "assets/michael_faletti.png",
  },
];

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
