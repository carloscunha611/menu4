function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/carloscunha611`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      blog.href = data.blog
    })
}

getGitHubProfileInfos()

let navigation = document.querySelector('nav')
navigation.onclick = function () {
  navigation.classList.toggle('active')
}
