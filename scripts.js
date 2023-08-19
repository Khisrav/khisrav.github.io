document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("mobile");
    document.querySelector("body").classList.toggle("hidden");
});

const parentDiv = document.querySelector('.big-text');
const childDiv = document.querySelector('.hero-img');
const smoother = document.querySelector('.smoother');
function setParentHeightToChild() {
    childDiv.style.height = parentDiv.clientHeight + 'px';
    smoother.style.height = parentDiv.clientHeight + 'px';
}
setParentHeightToChild();