var fetchButton = document.getElementById('generate-button'); 
var mainContent = document.querySelector('.main-content');
var legendTitle = document.querySelector('#legend-title');
var legendDesc = document.querySelector('#legend-description');
var legendTactical = document.querySelector('#legend-tactical');
var legendUltimate = document.querySelector('#legend-ultimate');
var legendPassive = document.querySelector('#legend-passive');

var legendObj = {
  name: 'Pathfinder',
  type: 'Movement',
  tactical: 'Grapple Arm',
  ultimate: 'Zipline Gun',
  passive: 'Scan Care Packs'
};

console.log(legendObj);




function replaceContent () {
  legendTitle.textContent = legendObj.name;
  legendDesc.textContent = legendObj.type;
  legendTactical.textContent = legendObj.tactical;
  legendUltimate.textContent = legendObj.ultimate;
  legendPassive.textContent = legendObj.passive;


  // mainContent.append(legendObj.name);
  // mainContent.append(legendObj.type);
  // mainContent.append(legendObj.tactical);


  // mainContent.
  var pathfinderImg = document.querySelector('#center-img');
  pathfinderImg.src = 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-pathfinder-xl.jpg.adapt.320w.jpg';

  }

  fetchButton.addEventListener('click', replaceContent);





