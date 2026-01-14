const loaderContainer = document.querySelector(".loader-container");
const pageWrapper = document.querySelector(".page-wrapper");

// addEventListener("load", () => {
//   loaderContainer.style.visibility = "hidden";
//   pageWrapper.style.visibility = "visible";
//   console.log("Page loaded");
// });

setTimeout(() => {
  loaderContainer.style.visibility = "hidden";
  pageWrapper.style.visibility = "visible";
}, 3000);
