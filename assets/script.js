var fetchButton = document.getElementById('generate-button'); 
var mainContent = document.querySelector('.main-content');
// var legendTitle = document.querySelector('#legend-title');
// var legendDesc = document.querySelector('#legend-description');
// var legendTactical = document.querySelector('#legend-tactical');
// var legendUltimate = document.querySelector('#legend-ultimate');
// var legendPassive = document.querySelector('#legend-passive');

var pathfinderObj = {
  name: 'Pathfinder',
  type: 'Movement',
  tactical: 'Grapple Arm',
  ultimate: 'Zipline Gun',
  passive: 'Scan Care Packs',
  image: 'https://steamuserimages-a.akamaihd.net/ugc/947348594919524774/3BF530521DBEEFB063F1949624C2714B338AA083/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
};
var wraithObj = {
  name: 'Wraith',
  type: 'Movement',
  tactical: 'Phase',
  ultimate: 'Portal',
  passive: 'Enemies Detection',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wraith-xl.jpg.adapt.320w.jpg'
};
var mirageObj = {
  name: 'Mirage',
  type: 'Support',
  tactical: 'Decoy',
  ultimate: 'Bunch Of Decoys',
  passive: 'Invisible Rez',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-mirage-xl.jpg.adapt.320w.jpg'
};
var wattsonObj = {
  name: 'Wattson',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wattson-xl.jpg.adapt.320w.jpg'
};



var legendAr = [pathfinderObj, wraithObj, mirageObj, wattsonObj];

function randomLegend () {
  var randomIndex = Math.floor(Math.random() * legendAr.length)
  return legendAr[randomIndex];
}




function replaceContent () {
  var selectLegend = randomLegend();
  var legendAr = [pathfinderObj, wraithObj, mirageObj];
  console.log(legendAr);
  var showImg = document.createElement('img');
  var showName = document.createElement('h1');
  var showType = document.createElement('h4');
  var showTac = document.createElement('h4');
  var showUlt = document.createElement('h4');
  var showPassive = document.createElement('h4');

  showImg.src = selectLegend.image;
  showName.textContent = selectLegend.name;
  showType.textContent = selectLegend.type;
  showTac.textContent = selectLegend.tactical;
  showUlt.textContent = selectLegend.ultimate;
  showPassive.textContent = selectLegend.passive;
  mainContent.innerHTML = ''; 


  mainContent.append(showImg);
  mainContent.append(showName);
  mainContent.append(showType);
  mainContent.append(showTac);
  mainContent.append(showUlt);
  mainContent.append(showPassive);


  mainContent.append(fetchButton);
  }

  fetchButton.addEventListener('click', replaceContent);




















































  // function replaceContent () {
  //   legendTitle.textContent = pathfinderObj.name;
  //   legendDesc.textContent = pathfinderObj.type;
  //   legendTactical.textContent = pathfinderObj.tactical;
  //   legendUltimate.textContent = pathfinderObj.ultimate;
  //   legendPassive.textContent = pathfinderObj.passive;
  
  
  //   // mainContent.append(legendObj.name);
  //   // mainContent.append(legendObj.type);
  //   // mainContent.append(legendObj.tactical);
  
  
  //   // mainContent.
  //   var pathfinderImg = document.querySelector('#center-img');
  //   pathfinderImg.src = 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-pathfinder-xl.jpg.adapt.320w.jpg';
  
  //   }