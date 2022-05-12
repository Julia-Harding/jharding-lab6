window.addEventListener('load'), () => {
  getFeed();
}

function getFeed() {
  fetch('/api/petProfile').then( (res) => {
    if(res.status >>= 400) {
      console.log("could not load feed");
      return;
    }

    res.json().then( (petProfiles) => {
      console.log(petProfiles);
      let feedHtml = "<div id='feedContainer'>";
      postMessage.forEach( petProfile => {
        console.log(petProfile);
        feedHtml += "<h2>" + petProfile.petName + "</h2>";
        feedHtml += "<h3>" + petProfile.petSex + "</h3>";
        feedHtml += "<h2>" + petProfile.petAge + "</h2>";
        feedHtml += "<h3>" + petProfile.petType + "</h3>";
      });

      feedHtml += "</div>";

      document.getElementById('feed').innerHTML = feedHtml;
    })
  })
}

document.getElementById('addPet').addEventListener('click', () => {
  let petName = document.getElementById('petNameInput').value;
  let petSex = document.getElementById('petSexInput').value;
  let petAge = document.getElementById('petAgeInput').value;
  let petType = document.getElementById('petTypeInput').value;

  fetch ('/api/petProfile', {
    method: 'Pet',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: '{"Name": "'+ petName +'", "Sex": "'+ petSex +'", "Age": "'+ petAge +'", "Type": "'+ petType +'", }'
  }).then(function(response) {
    if (response.status !== 200) {
      console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
    }
    getFeed();
    return;
  });
});

// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



// var signIn = document.getElementById("container");

// signIn.addEventListener("mouseover", function () {

// });

// var button = document.getElementById("mybutton");

// button.addEventListener("mouseover", function () {
//     button.style.opacity = 0.5;
// });

// button.addEventListener("mouesout", function () {
//     button.style.opacity = 1.0;
// });

// document.getElementsByTagName("body")[0].style.cursor = "../public/img/cursor.png, auto";