var fetchButton = document.getElementById('generate-button'); 
var mainContent = document.querySelector('.main-content');
// var legendTitle = document.querySelector('#legend-title');
// var legendDesc = document.querySelector('#legend-description');
// var legendTactical = document.querySelector('#legend-tactical');
// var legendUltimate = document.querySelector('#legend-ultimate');
// var legendPassive = document.querySelector('#legend-passive');

// var api = "https://api.mozambiquehe.re/maprotation?auth=" + key;

// var key = '80c33bdb5b6fa49fd470a52433400195';

// console.log(api);

var pathfinderObj = {
  name: 'Pathfinder',
  type: 'Movement',
  tactical: 'Grapple Arm',
  ultimate: 'Zipline Gun',
  passive: 'Scan Care Packs',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-pathfinder.png.adapt.crop16x9.png'
};
var wraithObj = {
  name: 'Wraith',
  type: 'Movement',
  tactical: 'Phase',
  ultimate: 'Portal',
  passive: 'Enemies Detection',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wraith.png.adapt.crop16x9.png'
};
var mirageObj = {
  name: 'Mirage',
  type: 'Support',
  tactical: 'Decoy',
  ultimate: 'Bunch Of Decoys',
  passive: 'Invisible Rez',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-mirage.png.adapt.crop16x9.png'
};
var wattsonObj = {
  name: 'Wattson',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wattson.png.adapt.crop16x9.png'
};

var ashObj = {
  name: 'Ash',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-ash.png.adapt.crop16x9.png'
}
var ballisticObj = {
  name: 'Ballistic',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/arsenal/apex-grid-tile-legends-ballistic.png.adapt.crop16x9.png'
}
var bangaloreObj = {
  name: 'Bangalore',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bangalore.png.adapt.crop16x9.png'
}
var bloodhoundObj = {
  name: 'Bloodhound',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bloodhound.png.adapt.crop16x9.png'
}
var catalystObj = {
  name: 'Catalyst',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/10/apex-grid-tile-legends-catalyst.png.adapt.crop16x9.png'
}
var causticObj = {
  name: 'Caustic',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-caustic.png.adapt.crop16x9.png'
}
var cryptoObj = {
  name: 'Crypto',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-crypto.png.adapt.crop16x9.png'
}
var fuseObj = {
  name: 'Fuse',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/01/apex-grid-tile-legends-fuse.png.adapt.crop16x9.png'
}
var gibbyObj = {
  name: 'Gibraltar',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-gibraltar.png.adapt.crop16x9.png'
}
var horizonObj = {
  name: 'Horizon',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-horizon.png.adapt.crop16x9.png'
}
var lifelineObj = {
  name: 'Lifeline',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-lifeline.png.adapt.crop16x9.png'
}
var lobaObj = {
  name: 'Loba',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-loba.png.adapt.crop16x9.png'
}
var maggieObj = {
  name: 'Mad Maggie',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/01/apex-grid-tile-legends-maggie.png.adapt.crop16x9.png'
}
var newcastleObj = {
  name: 'Newcastle',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/05/apex-grid-tile-legends-newcastle.png.adapt.crop16x9.png'
}
var octaneObj = {
  name: 'Octane',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-octane.png.adapt.crop16x9.png'
}
var rampartObj = {
  name: 'Rampart',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-rampart.png.adapt.crop16x9.png'
}
var revenantObj = {
  name: 'Revenant',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2023/07/apex-grid-tile-legends-revenant.png.adapt.crop16x9.png'
}
var seerObj = {
  name: 'Seer',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-seer.png.adapt.crop16x9.png'
}
var valkyrieObj = {
  name: 'Valkyrie',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-valkyrie.png.adapt.crop16x9.png'
}
var vantageObj = {
  name: 'Vantage',
  type: 'Defense',
  tactical: 'Electric Fences',
  ultimate: 'Sheild Regen',
  passive: 'Auto Heal Shields',
  image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/07/apex-grid-tile-legends-vantage.png.adapt.crop16x9.png'
}


var legendAr = [pathfinderObj, wraithObj, mirageObj, wattsonObj, ashObj, ballisticObj, bangaloreObj, bloodhoundObj,catalystObj,causticObj,cryptoObj,fuseObj,gibbyObj,horizonObj,lifelineObj, lobaObj, maggieObj, newcastleObj, octaneObj, rampartObj, revenantObj, seerObj, valkyrieObj, vantageObj];

function randomLegend () {
  var randomIndex = Math.floor(Math.random() * legendAr.length)
  return legendAr[randomIndex];
}




function replaceContent () {
  var selectLegend = randomLegend();
  var legendAr = [pathfinderObj, wraithObj, mirageObj];
  // console.log(legendAr);
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
  // mainContent.append(showType);
  // mainContent.append(showTac);
  // mainContent.append(showUlt);
  // mainContent.append(showPassive);


  mainContent.append(fetchButton);
  }

  fetchButton.addEventListener('click', replaceContent);

  console.log(legendAr);


















































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