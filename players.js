function countPlayers(){
    const parent = document.getElementById("playercount");
    var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
          if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                var requestResult = JSON.parse(xhr.responseText);
                parent.innerHTML = `${requestResult.players.online}/${requestResult.players.max} Online Players`;
              }
          }
      }
    xhr.open("GET", `https://api.mcsrvstat.us/2/survival.eliteplex.net`, true);
    xhr.send();
  }
  
  countPlayers();
  setInterval(() => countPlayers(), 10000)