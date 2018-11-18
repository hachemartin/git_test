const rocket1 = new Rocket("Rocket1", "32WESSDS", "3");
const rocket2 = new Rocket("Rocket2", "LDSFJA32", "6");

function showData(rocket) {
  var newDiv = document.createElement("div");
  newDiv.id = rocket.rocketName;
  newDiv.innerHTML = '<p>' + rocket.rocketName + '<br>' + rocket.serialNum + '<br>' + rocket.propellersNum + '</p>';
  document.getElementById('main').appendChild(newDiv);
}

showData(rocket1);
showData(rocket2);