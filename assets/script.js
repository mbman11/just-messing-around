var fetchButton = document.getElementById('generate-button'); 






function showMeSumn () {
    // var fetchButton = document.getElementById('generate-button'); 
    // var genRandomNumber = Math.random();
    var contentDiv = document.createElement('div');

    contentDiv.setAttribute('class','content-div');
    contentDiv.querySelector('.content-div');

    contentDiv.innerHTML = '';

    contentDiv.textContent = img;
    var img = document.createElement('img');

    
    img.setAttribute('class','legend-pic')
    img.src = 'https://i1.sndcdn.com/artworks-000584129213-qlm6e5-t500x500.jpg';

    contentDiv.append(img);
    document.body.append(contentDiv);

  }

  fetchButton.addEventListener('click', showMeSumn);





