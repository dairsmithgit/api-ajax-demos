// BLOG EXAMPLE
fetch("https://grandcircusco.github.io/demo-apis/blog-posts.json")
.then(response => response.json())
.then(data => {
  // Fill in the <h1> with the
  const pageTitleEl = document.querySelector("h1");
  pageTitleEl.innerText = data.title;

  // Add posts
  const postsParentEl = document.getElementById("main");
  for (let post of data.posts) {
    console.log(post);
    const sectionEl = document.createElement("section");
    sectionEl.classList.add("post");
    postsParentEl.appendChild(sectionEl);

    const titleEl = document.createElement("h3");
    titleEl.innerText = post.title;
    sectionEl.appendChild(titleEl);
    sectionEl.insertAdjacentHTML("beforeend", )
  }
});
