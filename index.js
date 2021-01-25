function getImage(){

    url = "https://api.mocki.io/v1/35acf9fa";
  
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      display_image(data.img_url);
    })
    .catch(function(error){
      console.log("Error: " + error);
    });
  
  }
  
  function display_image(img_url){
    document.getElementById("image").src = img_url;
  }
  