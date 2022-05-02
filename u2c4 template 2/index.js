// write js code here corresponding to index.html
// You should add submit event on the form
var masaiForm=document.querySelector("#masaiForm")
var matchSchedule=JSON.parse(localStorage.getItem("schedule")) || [];
masaiForm.addEventListener("submit",matchDetails);

function matchDetails(){
    event.preventDefault();

    var matchObj={
    matchNum:masaiForm.matchNum.value,
    teamA:masaiForm.teamA.value,
    teamB:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value
    };
    matchSchedule.push(matchObj);
    console.log(matchSchedule);
   localStorage.setItem("schedule",JSON.stringify(matchSchedule));
}