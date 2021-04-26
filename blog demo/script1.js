// BLOG EXAMPLE
fetch("https://grandcircusco.github.io/demo-apis/blog-posts.json")
.then(response => response.json())
.then(data => {
  // Fill in the <h1> with the page title
  const pageTitleEl = document.querySelector("h1");
  pageTitleEl.innerText = data.title;

  // Add posts
  const postsParentEl = document.getElementById("main");
  for (let post of data.posts) {
    console.log(post); // logging the post might help us as we develop.
    // create and append the section
    const sectionEl = document.createElement("section");
    sectionEl.classList.add("post");
    postsParentEl.appendChild(sectionEl);

    // create and append the title to the section
    const titleEl = document.createElement("h3");
    titleEl.innerText = post.title;
    sectionEl.appendChild(titleEl);

    // alternate technique: add a bunch of HTML
    sectionEl.insertAdjacentHTML("beforeend", `
    <p class="details">
      <span class="author"></span>
      <span class="date"></span>
    </p>
    <div class="content"></div>
    <ul class="tags"></ul>`);
    // then go back, find elements, and fill in their text
    // PRO TIP: querySelector can be used to search within an element!
    sectionEl.querySelector(".author").innerText = post.author;
    sectionEl.querySelector(".content").innerHTML = post.content;

  }
});