const fetch = require("node-fetch");


// construct the URL to post to a publication

 fetch('http://localhost:5000')
       .then((response) => response.json())
       .then((responseJson) => {
           console.log(responseJson.result)
         return responseJson;
       })
       .catch((error) => {
         console.error(error);
       });

