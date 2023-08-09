// Global Variables
var fetchButton = document.getElementById('generate-button'); 
var mainContent = document.querySelector('.main-content');
var mainBodyContainer = document.querySelector('.main-section');

// Arrays & Objects
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
};

var weaponAr = ['Havoc','Flatline','Hemlock', 'R-301', "Nemesis", 'Alternator', 'Prowler','R-99','Volt','CAR','Devotion','L-STAR','Spitfire','Rampage','EVA-8','Mastiff','Peace Keeper','Mozambique','G7 Scout','Triple Take','30-30 Repeater','Charge Rifle','Longbow','Sentinel','Wingman','P2020','RE-45',];

// put each object into legend array
var legendAr = [pathfinderObj, wraithObj, mirageObj, wattsonObj, ashObj, ballisticObj, bangaloreObj, bloodhoundObj,catalystObj,causticObj,cryptoObj,fuseObj,gibbyObj,horizonObj,lifelineObj, lobaObj, maggieObj, newcastleObj, octaneObj, rampartObj, revenantObj, seerObj, valkyrieObj, vantageObj];


// select random weapons 1 & 2 from weaponArray length
function randomWeapon1() {
  var randomIndex = Math.floor(Math.random() * weaponAr.length)
  return weaponAr[randomIndex];
}
function randomWeapon2() {
  var randomIndex = Math.floor(Math.random() * weaponAr.length)
  return weaponAr[randomIndex];
}
// select random from legend array which has objects in the array
function randomLegend () {
  var randomIndex = Math.floor(Math.random() * legendAr.length)
  return legendAr[randomIndex];
}


// replace main content within the main-content div
function replaceContent () {
  // assign Math.random functions to variables
  var selectLegend = randomLegend();
  var selectRandomWeapon1 = randomWeapon1();
  var selectRandomWeapon2 = randomWeapon2();

  // make elements
  //x-icon
  var xIcon = document.createElement('img');
  xIcon.setAttribute('id',"x-icon")
  xIcon.src = 'https://cdn.icon-icons.com/icons2/2518/PNG/512/x_icon_150997.png'; 
  
  // img
  var showImg = document.createElement('img');
  showImg.setAttribute('class', 'legend-image')
  showImg.src = selectLegend.image;

  // name
  var showName = document.createElement('h1');
  showName.textContent = selectLegend.name;

  // weapon 1 name
  var showWeapon1 = document.createElement('h3');
  showWeapon1.textContent = selectRandomWeapon1;

  // weapon 2 name
  var showWeapon2 = document.createElement('h3');
  showWeapon2.textContent = selectRandomWeapon2;

  // create 2nd container
  var makeContainer = document.createElement('div')
  makeContainer.classList.add('main-content');
  makeContainer.textContent = 'make stuff show up';


  // clear  content
  mainContent.innerHTML = ''; 


  // append elements
  mainContent.append(xIcon);
  mainContent.append(showImg);
  mainContent.append(showName);
  mainContent.append(showWeapon1);
  mainContent.append(showWeapon2);
  mainContent.append(fetchButton);

  mainBodyContainer.append(makeContainer);
  };

  // add click event to button with function on click
  fetchButton.addEventListener('click', replaceContent);
