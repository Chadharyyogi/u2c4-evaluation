// write js code here corresponding to matches.html
var matchSchedule=JSON.parse(localStorage.getItem("schedule"))
var favourites=JSON.parse(localStorage.getItem("favourites")) || [];
displayMatch(matchSchedule);

function handleVenueSort(){
 var selected=document.querySelector("#filterVenue").value;
 var filtered=matchSchedule.filter(function(elem){
     return elem.venue==selected;
 })
 displayMatch(filtered);
}

function  displayMatch(data){
    document.querySelector("tbody").innerHTML="";
data.forEach(function(elem){
   var tr=document.createElement("tr");

   var td1=document.createElement("td");
  td1.textContent=elem.matchNum;

   var td2=document.createElement("td");
  td2.textContent=elem.teamA;


   var td3=document.createElement("td");
   td3.textContent=elem.teamB;


   var td4=document.createElement("td");
   td4.textContent=elem.date;


   var td5=document.createElement("td");
   td5.textContent=elem.venue;

   var td6=document.createElement("td");
 td6.textContent="Add to favourites"
 td6.style.color="green";
 td6.style.cursor="pointer";
 td6.addEventListener("click",function(){
  addToFav(elem);
 });



 tr.append(td1,td2,td3,td4,td5,td6)
 document.querySelector("tbody").append(tr);
});
}

function addToFav(elem){
    favourites.push(elem);
    console.log(favourites);
    localStorage.setItem("favourites",JSON.stringify(favourites));
}