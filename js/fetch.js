// /* ###################### POSTS ########################## */
// const PostsSection = document.getElementById("posts");
// loadData();
// function loadData() {
//   const posts = "https://jsonplaceholder.typicode.com/posts";
//   fetch(posts)
//     .then((res) => res.json())
//     .then((data) => Posts(data));
// }

// function Posts(posts) {
//   let newUser = 0;
//   let oldUser = 0;
//   // let newContainer = document.createElement("div");
//   for (const post of posts) {
//     const div = document.createElement("div");
//     newUser = post.userId;
//     div.setAttribute(
//       "class",
//       "rounded-lg border-2 border-gray-300 p-5 bg-green-200"
//     );

//     if (oldUser !== newUser) {
//       // newContainer.appendChild(div);
//       var newContainer = document.createElement("div");
//       const h2 = document.createElement("h2");
//       newContainer.setAttribute(
//         "class",
//         " grid grid-cols-4 gap-4"
//       );
//       h2.setAttribute("class", 'text-center py-5 text-5xl font-black text-green-900');
//       h2.innerHTML = `${post.userId} <sup>th</sup> User's Post`;
//       PostsSection.appendChild(h2);
//       PostsSection.appendChild(newContainer);
//       oldUser = newUser;
//     }

//     // div.appendChild(newContainer);
//     div.innerHTML = `
//     <small class='text-5xl font-serif font-black'>${post.userId}</small><small class='text-3xl font-serif font-medium'>-${post.id}</small>
//     <h2 class="text-3xl font-mono font-semibold py-3">${post.title}</h2>
//             <div class="flex items-center text-sm text-gray-400">

//             </div>
//             <div class="text-base py-5 font-sans">${post.body}</div>
//             `;

//     newContainer.appendChild(div);
//     // }
//   }
// }

// /* ###################### USERS ########################## */

// const usersSection = document.getElementById("users");
// const usersDataUrl = "https://jsonplaceholder.typicode.com/users";
// fetch(usersDataUrl)
//   .then((res) => res.json())
//   .then((data) => Users(data));

// function Users(users) {
//   console.log(users);
//   for (const user of users) {
//     const div = document.createElement("div");
//     div.setAttribute(
//       "class",
//       "rounded-lg border-2 border-gray-300 p-5 bg-green-200"
//     );
//     div.innerHTML = `<div class="flex items-end font-semibold text-2xl"><span class='text-5xl'>${user.id}</span>:
//     <h5 class='italic'> ${user.username}</h5>
// </div>
// <div>
//     <h2 class="text-xl font-black font-sans">${user.name}</h2><span class="text-sm text-indigo-500"><a href="mailto:email:${user.email}">email:${user.email}</a> <br> <a href="tel:+phone:${user.phone}">phone:${user.phone}</a></span><br><a
//         href="http://${user.website}" target="_blank" rel="noopener noreferrer">${user.website}</a>
// </div>
// <div class="italic text-sm font-bold border border-black px-3">company: ${user.company.name},${user.company.catchphrase} - ${user.company.bs}</div>
// <address class="border-s-8 border-indigo-500 inset-3 ps-2 ms-2 text-base font-sans bg-blue-400 my-5">
//     City: ${user.address.city}
//     Geo: ${user.address.geo.lat},${user.address.geo.lng}
//     Street: ${user.address.street}
//     Suite: ${user.address.suite}
//     Zip: ${user.address.zipcode}
// </address>`;
//     usersSection.appendChild(div);
//   }
// }

/* ###################### COMMENTS ########################## */

// const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
// fetch(commentsUrl)
//   .then((res) => res.json())
//   .then((data) => Comments(data));

// function Comments(comments) {
//   const commentsSection = document.getElementById("comments");
//   let oldComment = 0;
//   let newComment = 0;
//   for (const comment of comments) {
//     newComment = comment.postId;
//     const newCommentContainer = document.createElement("div");
//     newCommentContainer.setAttribute("class", "rounded-lg border p-5");

//     if (oldComment !== newComment) {
//       var commentContainer = document.createElement("div");
//       commentContainer.setAttribute(
//         "class",
//         "rounded-lg border-8 border-green-900 border-double grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-5"
//       );
//       commentsSection.appendChild(commentContainer);
//       oldComment = newComment;
//     }

//     newCommentContainer.innerHTML = `<div class="flex items-end"><span class="text-5xl font-black">${comment.postId}</span><span class="text-3xl">:
//     ${comment.id}</span></div>
// <h2 class="text-3xl font-black text-amber-700 text-end">${comment.name}</h2>
// <a href="mailto:${comment.email}" class="italic font-mono text-xs text-end block">${comment.email}</a>
// <div class="bg-amber-100 text-base p-3 mt-5 text-justify">${comment.body}</div>`;
//     commentContainer.appendChild(newCommentContainer);
//   }
// }

/* ###################### CRUD ########################## */

// function createAPost() {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       morder: 1,
//       height: 2,
//       width: 2,
//       posetLine: "1 0 1 0 1 0 1 0 1 0 1 1 1",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// function fullData() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// function deleteAPost() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE",
//   });
// }
// function patchAPost() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PATCH",
//     body: JSON.stringify({
//       title: "foo",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

const loadPhone = async (searchText, isShowAll = false) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  showPhone(phones, isShowAll);
};

const showPhone = (phones, isShowAll) => {
  const phoneSection = document.getElementById("phone-section");
  phoneSection.innerHTML = "";

  /* show all button */
  const showAllContainer = document.getElementById("showAllContainer");
  let b = 12;
  let a = 0;

  if (phones.length > b && !isShowAll) {
    showAllContainer.classList.remove("hidden");

    phones = phones.slice(a, b);
  } else {
    showAllContainer.classList.add("hidden");
  }

  for (const phone of phones) {
    const div = document.createElement("div");
    div.setAttribute("class", "card bg-base-100 border p-6");
    div.innerHTML = `
    <figure class="px-[75px] pt-[23px] pb-[33px] bg-[#0D6EFD]/5 rounded-lg">
      <img src="${phone.image}" alt="Phone" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center mt-6 mb-2">
      <h2 class="card-title text-2xl font-bold capitalize">${phone.phone_name}</h2>
      <p class='text-[#706F6F] text-lg leading-7'>There are many variations of passages of available, but the majority have suffered</p>
      <button class='font-bold text-2xl'>$<span>999</span></button>
      <div class="card-actions">
          <button class="btn bg-blue text-white font-semibold mt-4" onclick="handleShowDetails('${phone.slug}'); details.showModal()">Show Details</button>
      </div>
    </div>
`;

    phoneSection.appendChild(div);
  }
  /* hide loader */
  loaderToggle(false);
};

/* search button handle */
const searchHandle = (isShowAll) => {
  const searchField = document.getElementById("Search");
  const searchText = searchField.value;
  loaderToggle(true);

  loadPhone(searchText, isShowAll);
};

loadPhone("apple");

const loaderToggle = (isLoading) => {
  const loader = document.getElementById("loader");
  if (isLoading) {
    loader.classList.replace("hidden", "flex");
  } else {
    loader.classList.replace("flex", "hidden");
  }
};

const showAllToggle = () => {
  searchHandle(true);
};

const handleShowDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const details = data.data;
  // console.log(details);

  const information = document.getElementById("information");
  information.innerHTML = `<figure class='px-[202px] py-[51px] bg-[#0D6EFD]/5 rounded-lg'><img src="${
    details.image
  }" alt="Phone" /></figure>
<div class="card-body">
    <h2 class="card-title text-3xl font-bold mt-10 mb-6">${details.name}</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <p class='text-gray-400'><span class='font-bold text-black/95'>Storage: </span>${
      details?.mainFeatures?.storage || "Not Identified"
    }</p>
    <p class='text-gray-400'><span class='font-bold text-black/95'>Display Size: </span>${
      details?.mainFeatures?.displaySize || "Not Identified"
    }</p>
    <p class='text-gray-400'><span class='font-bold text-black/95'>Chipset: </span>${
      details?.mainFeatures?.chipSet || "Not Identified"
    }</p>
    <p class='text-gray-400'><span class='font-bold text-black/95'>Memory: </span>${
      details?.mainFeatures?.memory || "Not Identified"
    }</p>
    <p class='text-gray-400'><span class='font-bold text-black/95'>Slug: </span>${
      details?.slug || "Not Identified"
    }</p>
    <p class='text-gray-400'><span class='font-bold text-black/95'>Release Date: </span>${
      details?.releaseDate || "No info about release date"
    }</p>
    <p class='text-gray-400'><span class='font-bold text-black/95'>Brand: </span>${
      details?.brand || "Others Branded"
    }</p>
    <p class='text-gray-400'><span class='font-bold text-black/95'>GPS: </span>${
      details?.others?.GPS || "No GPS available"
    }</p>
    <div class="card-actions modal-action justify-end">
        <button class="text-xl font-bold text-white btn btn-lg bg-error capitalize">Close</button>
    </div>
</div>`;
};
