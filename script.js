function generatePortfolio(){

let name = document.getElementById("name").value;
let skills = document.getElementById("skills").value;
let github = document.getElementById("github").value;
let linkedin = document.getElementById("linkedin").value;
let about = document.getElementById("about").value;

let portfolio = `
<h2>${name}</h2>

<h3>About Me</h3>
<p>${about}</p>

<h3>Skills</h3>
<p>${skills}</p>

<h3>Links</h3>

<p>
<a href="${github}" target="_blank">GitHub</a>
</p>

<p>
<a href="${linkedin}" target="_blank">LinkedIn</a>
</p>
`;

document.getElementById("portfolio").innerHTML = portfolio;

}