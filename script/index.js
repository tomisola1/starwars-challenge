  
  //fetch data from api
window.addEventListener("DOMContentLoaded", callApi);


function callApi(){
  const images = [
    "luke_skywalker.jpeg",
    "beru_lars.jpeg",
    "biggs_darklighter.jpeg",
    "c-3po.png",
    "darth_vadar.jpeg",
    "kenobi.jpeg",
    "leia_organa.jpeg",
    "owen_lars.jpeg",
    "r2-d2.jpeg",
    "r5-d4.jpeg",
  ];

    //fetch characters from the https://swapi.dev/api/people
    const apiURL = "https://swapi.dev/api/people";


  fetch(apiURL)
    .then(   function(response){ return response.json() }   )
    .then( data=> {
    //get array of characters from data
    let characters = data.results;
    //dynamically create containers for characters
    characters.forEach( (character,index)=>{
          let character_container = document.createElement("div");
          //<div> </div>
          character_container.classList.add("card__container")
          //<div class="card__container">
          
          //</div>

          let character_container_string = `  
          <div class="image__container">
          <img id="image_click${index}" src="images/${images[index]}" alt="luke"/> 
          </div>
          <div class="card__details">
              <h3 id="name-slot${index}"><strong>Name: </strong><span class="name">${character.name}</span> </h3>
              <div id="lower__card${index}" class="lower__card hidden">
                  <h3><strong>Height: </strong>${character.height}</h3>
                  <h3><strong>Gender: </strong>${character.gender}</h3>
      
              </div>
          </div>  `

          character_container.innerHTML = character_container_string;
       

         // add the character container to the root
         const rootContainer = document.getElementById("root");
         rootContainer.appendChild( character_container );
         
         let nameSlot = document.getElementById(`name-slot${index}`);
         let lowerCard = document.getElementById(`lower__card${index}`);
         nameSlot.addEventListener('click', () => {
           lowerCard.classList.toggle('hidden')
         });
      



        });
  
  });
}
    








