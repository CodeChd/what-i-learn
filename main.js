// const initialFacts = [
//     {
//       id: 1,
//       text: "React is being developed by Meta (formerly facebook)",
//       source: "https://opensource.fb.com/",
//       category: "technology",
//       votesInteresting: 24,
//       votesMindblowing: 9,
//       votesFalse: 4,
//       createdIn: 2021,
//     },
//     {
//       id: 2,
//       text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//       source:
//         "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//       category: "society",
//       votesInteresting: 11,
//       votesMindblowing: 2,
//       votesFalse: 0,
//       createdIn: 2019,
//     },
//     {
//       id: 3,
//       text: "Lisbon is the capital of Portugal",
//       source: "https://en.wikipedia.org/wiki/Lisbon",
//       category: "society",
//       votesInteresting: 8,
//       votesMindblowing: 3,
//       votesFalse: 1,
//       createdIn: 2015,
//     },
//   ];

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];
  
const btn = document.querySelector(".open")
const form = document.querySelector(".fact-form")
const list = document.querySelector(".facts-list")

list.innerHTML = ""

async function loadfunction(){

    const data = await fetch("https://ebpnruaiihixslzzvksu.supabase.co/rest/v1/facts",{
        headers : {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVicG5ydWFpaWhpeHNsenp2a3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0OTk4OTQsImV4cCI6MTk5MzA3NTg5NH0.O3LxLPNemQaJRJyakIIL8UggFZBgY9YhrlLCDIoP0R8",
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVicG5ydWFpaWhpeHNsenp2a3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0OTk4OTQsImV4cCI6MTk5MzA3NTg5NH0.O3LxLPNemQaJRJyakIIL8UggFZBgY9YhrlLCDIoP0R8"
        }
    })
    const res = await data.json()
    db(res)
    
}
loadfunction()

function db (res){

const ArrElements = res.map( (e) => {
        
    return  `<li class="fact"  >
    <p >
      ${e.text}
      <a href="${e.source}" target="_blank" class="source">(Source)</a>
    </p>
    <span class="tag" style="background-color: ${CATEGORIES.find(color => color.name === e.category).color};">${e.category}</span>
    <div class="vote-buttons">
      <button>👍 ${e.votesinterest}</button>
      <button>🤯 ${e.votesMIndBlown}</button>
      <button>⛔️ ${e.votesDislike}</button>
    </div>
  </li>`
})

const arr = ArrElements.join("")

list.insertAdjacentHTML('afterbegin', arr)
console.log(res)
}









btn.addEventListener("click", () => {
    if(form.classList.contains("hidden")){
            form.classList.remove("hidden")
            btn.textContent = "CLOSE"
        }else{
            form.classList.add("hidden")
            btn.textContent = "Share a fact"
    }
})