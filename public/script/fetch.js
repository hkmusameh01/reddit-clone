fetch("/posts")
  .then((data) => data.json())
  .then((data) => {
    createPostDom(data);
  })
  .catch((err) => console.log(err));


logOut.addEventListener('click', e => {
  fetch('/logout')
})