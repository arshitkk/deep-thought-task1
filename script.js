// imported the data
import data from "./data.js";

//fetched all the neccesary elemets

let cardContainer = document.querySelector(".card-container");
let taskName = document.querySelector(".task-name");
let taskTitle = document.querySelector(".task-title");
let taskDescription = document.querySelector(".task-description");
let journeyBoardBtn = document.querySelector(".journey-board-btn");
let journeyBoardTranslate = document.querySelector(".journey-board-translate");
let blackHeadingTitle = document.querySelector(".black-heading-title");
let badge = document.querySelector(".badge");
let ul = document.querySelector("ul");

let journeyBoardHidden; // to track the side bar hide/show logic

// initial its hidden so did the following
journeyBoardTranslate.style.cssText = "transform: translateX(-15rem);";
journeyBoardBtn.style.cssText = "transform: scaleX(1)";

//initially showed the badge
const p = document.createElement("p"); // Create <p> element
p.innerText = "1";
badge.append(p);

// show/hide logic for sidebar
journeyBoardBtn.addEventListener("click", () => {
  if (journeyBoardHidden === true) {
    console.log("hidden");
    // Set text content
    badge.append(p);
    ul.style.display = "none";
    journeyBoardTranslate.style.cssText = "transform: translateX(-15rem);";
    journeyBoardBtn.style.cssText = "transform: scaleX(1)";

    journeyBoardHidden = false;
  } else {
    console.log("unhidden");
    if (badge.children[0]) {
      badge.removeChild(badge.children[0]);
    }
    ul.style.display = "block";
    journeyBoardBtn.style.cssText = "transform: scaleX(-1)";
    journeyBoardTranslate.style.cssText = "transform: translateX(0);";
    journeyBoardHidden = true;
  }
});

// added data dynamically
etaskName.textContent = data.title;
taskTitle.textContent = data.tasks[0].task_title;
taskDescription.textContent = data.tasks[0].task_description;

// dynamically adding cards inside the  Card container
data.tasks[0].assets.forEach((element) => {
  cardContainer.innerHTML += `<div class="card">
                <div class="card-title">
                    <p class="text">${element.asset_title}</p>
                    <i class="fa-solid fa-circle-info fa-lg" style="color: #ffffff;"></i>
                </div>
                <div class="card-description">
                    <p>
                        <b>Description: </b>
                        ${element.asset_description}
                    </p>
                </div>
                <div class="card-content">
                    ${element.asset_content}
                </div>
</div>`;
});

//added list to sidebar dynamically

// initial list which was in bold , that is why it was added seperated
let headList = document.createElement("li");
headList.innerHTML = `<p class="bold-list">${data.title}</p>`;
ul.append(headList);

//dynamically adding the data using array
data.tasks[0].assets.forEach((element) => {
  let list = document.createElement("li");
  list.innerText = element.asset_title;
  ul.append(list);
});
