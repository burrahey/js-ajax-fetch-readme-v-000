const app = "I don't do much.";
const token = 'example_token'
$(document).ready(function (){
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
});
