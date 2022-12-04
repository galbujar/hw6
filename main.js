const main = document.querySelector("main");

const jokeOne = "The problem is not that obesity runs in your family. It is that no one runs in your family.";
const jokeTwo = "It takes a lot of balls to golf the way I do.";
const jokeThree = "A blind man walked into a bar and a table and a chair";

const template = `
<section>
<h1>My Jokes</h>
<ul>
<li>${jokeOne}</li>
<li>${jokeTwo}</li>
<li>${jokeThree}</li>
</ul>
</section>
`
main.innerHTML = template; 

const p = document.createElement('p');
p.textContent = "That's all folks!";
main.appendChild(p); 