const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL) ;

const LIST_URL = "https://dog.ceo/api/breed/hound/images/random" ;
const promese  =  fetch(LIST_URL) ;

const doggos = document.querySelector(".doggos");
const doggoslist = document.querySelector(".doggoslist") ;

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);




function listDogs()  {
 const promese = fetch(LIST_URL) ;
 promese
       .then(function(response) {
         const processingPromese = response.json();
         return processingPromese;
       })
          .then(function(processedResponse) {
            const select = document.createElement("select");
            select.src = processedResponse.message;
            doggoslist.appendChild(select);
          });

       }
       
  document.querySelector(".peak-a-dog").addEventListener("click" , listDogs);





