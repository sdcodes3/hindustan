var events = [
  "Literature", "Performing Arts", "Visual Arts", "Mass Media", "Sports event", "Personality Contest", "DJ War"
];

var subEvents = [
  ["Debate", "Open Mic"], ["Instrumental", "Singing", "Dancing", "Drama", "Rap Battle"], ["Rangoli Making", "Canvas Painting"], ["Reel Making", "Photography"],
];


var eventCard = document.getElementById("event-card");

redirectToEvent = (i) => {
  localStorage.setItem("event", i);
  console.log(events[i]);
  window.location.href = "event_screen.html";

}


if (window.location.pathname === "/index.html") {

  for (var i = 0; i < events.length; i++) {
    eventCard.innerHTML += `<div class="col-12 col-md-3 gy-5 container" style="cursor:pointer">
    <article class="sigma_post style-12">
      <div class="sigma_post-thumb">
        <a onclick="redirectToEvent(${i})">
          <img src="assets/img/home-2/350x300.jpg" alt="img" style="width="100px !important"">
        </a>
      </div>
      <div class="sigma_post-body">
        <div class="sigma_post-content">
          <!-- <div class="sigma_post-meta is-absolute">
            <a onclick="redirectToEvent(${i})" class="sigma_post-date">
              <i class="fal fa-calendar-alt"></i>
              28 January, 2024
            </a>
          </div> -->
         
          <h5 style="font-size:20px !important">
            ${events[i]}
          </h5>
          <ul id ="card${i}" class="d-flex">
          </ul>
        </div>
       
      </div>
    </article>
  </div>`;
    var card = document.getElementById(`card${i}`);
    // for (var j = 0; j < subEvents[i].length; j++) {
    //   card.innerHTML += `<li class=" col-12 col-md-4" onclick=""> ${j + 1}.${subEvents[i][j]}</a></li>`;
    // }

  }


}

if (window.location.pathname === "/event_screen.html") {
  var event = localStorage.getItem("event");
  var e = document.getElementsByClassName("event-name")[0];
  e.innerHTML = `<h3 class="title">${events[event]} <span class="primary-color">Events</span>
  </h3>` ;

  var subEvent = document.getElementsByClassName("sub-events")[0];

  for (var i = 0; i < subEvents[event].length; i++) {
    subEvent.innerHTML += `<div class="col-12 col-md-3 gy-5">
    <article class="sigma_post style-12">
      <div class="sigma_post-thumb">
        <a >
          <img src="assets/img/home-2/350x300.jpg" alt="img">
        </a>
      </div>
      <div class="sigma_post-body">
        <div class="sigma_post-content">
           <div class="sigma_post-meta is-absolute">
            <a onclick="redirectToEvent(${i})" class="sigma_post-date">
              <i class="fal fa-calendar-alt"></i>
              28 January, 2024
            </a>
          </div> 
         
          <h5 class="mt-3">
            ${subEvents[event][i]}
          </h5>
          <div class="d-flex justify-content-between mt-4">
            <button class="btn">Registration</button>
            <button class="btn">Rules</button>
          </div>
          
        </div>
       
      </div>
     
    </article>
  </div>`;

  }


}

