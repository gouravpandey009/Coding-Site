let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((contests) => {
    console.log(contests);
    let ihtml = "";
    for (const item in contests) {
      ihtml += `
      <div class="card mx-2 my-2" style="width: 25rem;">
        <img src="https://www.shutterstock.com/image-vector/contest-card-bannerbeautiful-greeting-scratched-260nw-572632144.jpg" alt="Contest Image">
        
      
        
        <div class="card-body mx-2">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text"> Status is ${contests[item].status} and site is  ${contests[item].site} </p>
          <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
          <p>Starts at: ${contests[item].start_time}</p>
          <p>Ends at: ${contests[item].end_time}</p>
          <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
        </div>
      </div>
      `;
    }
    cardContainer.innerHTML = ihtml;
  })
  .catch((error) => {
    console.log(error);
  });
