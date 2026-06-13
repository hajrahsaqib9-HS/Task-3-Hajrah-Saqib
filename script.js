const loginForm =
document.getElementById("loginForm");
if(loginForm){
loginForm.addEventListener(
"submit",
function(e){
e.preventDefault();
const email =
document.getElementById(
"email"
).value;
const password =
document.getElementById(
"password"
).value;
const savedEmail =
localStorage.getItem(
"userEmail"
);
const savedPassword =
localStorage.getItem(
"userPassword"
);
if(
email === savedEmail &&
password === savedPassword
){
window.location.href =
"dashboard.html";
}
else{
alert(
"Invalid Email or Password"
);
}
});
}
const moodCards =
document.querySelectorAll(".mood-card");
moodCards.forEach(card => {
card.addEventListener("click",()=>{
moodCards.forEach(c =>
c.classList.remove("active-mood")
);
card.classList.add("active-mood");
});
});
function showJournal(){
let notes =
JSON.parse(
localStorage.getItem("notes")
) || [];
let noteHTML = "";
notes.forEach((note,index)=>{
noteHTML += `
<div class="note">
<p>${note}</p>
<button onclick="deleteNote(${index})">
Delete
</button>
</div>
`;
});
document.getElementById(
"contentArea"
).innerHTML = `
<h2>📓 My Journal</h2>
<textarea id="noteText"
placeholder="Write your thoughts...">
</textarea>
<button onclick="saveNote()"
class="pink-btn">
Save Note
</button>
<div class="notes-list">
${noteHTML}
</div>
`;
}
function saveNote(){
const noteText =
document.getElementById(
"noteText"
).value;
if(noteText.trim() === ""){
alert("Write something!");
return;
}
let notes =
JSON.parse(
localStorage.getItem("notes")
) || [];
notes.push(noteText);
localStorage.setItem(
"notes",
JSON.stringify(notes)
);
showJournal();
}
function showMeditation(){
document.getElementById(
"contentArea"
).innerHTML = `
<h2>🧘 Meditation</h2>
<div class="meditation-box">
<h3>Breathing Exercise</h3>
<p>
Inhale for 4 seconds
</p>
<p>
Hold for 4 seconds
</p>
<p>
Exhale for 4 seconds
</p>
</div>
`;
}
function showGoals(){
let goals =
JSON.parse(
localStorage.getItem("goals")
) || [];
let goalHTML = "";
goals.forEach(goal=>{
goalHTML += `
<li>${goal}</li>
`;
});
document.getElementById(
"contentArea"
).innerHTML = `
<h2>🎯 My Goals</h2>
<input
type="text"
id="goalInput"
placeholder="Enter Goal">
<button
onclick="addGoal()"
class="pink-btn">
Add Goal
</button>
<ul>
${goalHTML}
</ul>
`;
}
function addGoal(){
let goalInput =
document.getElementById(
"goalInput"
);
if(goalInput.value.trim() === ""){
alert("Enter a goal!");
return;
}
let goals =
JSON.parse(
localStorage.getItem(
"goals"
)
) || [];
goals.push(
goalInput.value
);
localStorage.setItem(
"goals",
JSON.stringify(goals)
);
showGoals();
}
function showQuotes(){
const quotes = [
"Believe in yourself 💖",
"Small steps matter 🌸",
"You are stronger than you think ✨",
"Keep going, you're doing great 💪",
"Your future needs you 🌈"
];
let randomQuote =
quotes[
Math.floor(
Math.random()
*
quotes.length
)
];
document.getElementById(
"contentArea"
).innerHTML = `
<h2>💖 Daily Quote</h2>
<div class="quote-box">
<h3>
"${randomQuote}"
</h3>
<button
onclick="showQuotes()"
class="pink-btn">
New Quote
</button>
</div>
`;
}
const contentArea =
document.getElementById("contentArea");
if(contentArea){
showJournal();
}
const totalNotes =
document.getElementById("totalNotes");
if(totalNotes){
let notes =
JSON.parse(
localStorage.getItem("notes")
) || [];
totalNotes.innerText =
notes.length;
}
function deleteNote(index){
let notes =
JSON.parse(
localStorage.getItem("notes")
) || [];
notes.splice(index,1);
localStorage.setItem(
"notes",
JSON.stringify(notes)
);
showJournal();
}
const userName =
document.getElementById("userName");
if(userName){
userName.innerText =
localStorage.getItem(
"userName"
) || "User";
}
function logout(){
window.location.href =
"login.html";
}
const signupForm =
document.getElementById("signupForm");
if(signupForm){
signupForm.addEventListener(
"submit",
function(e){
e.preventDefault();
const name =
document.getElementById(
"signupName"
).value;
const email =
document.getElementById(
"signupEmail"
).value;
const password =
document.getElementById(
"signupPassword"
).value;
localStorage.setItem(
"userName",
name
);
localStorage.setItem(
"userEmail",
email
);
localStorage.setItem(
"userPassword",
password
);
alert(
"Account Created Successfully!"
);
window.location.href =
"login.html";
});
}
