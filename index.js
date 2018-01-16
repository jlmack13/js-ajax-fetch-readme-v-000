const app = "I don't do much.";
//
// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(res => res.json())
//   .then(json => console.log(json));
//
// fetch('https://api.github.com/user/repos').
//   then(res => res.json()).
//   then(json => console.log(json))

const token = 'TOKEN-HERE'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => json.()).then(json => console.log(json));
