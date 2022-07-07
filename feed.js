function populateFeed(){
    const feed = document.getElementById("feed");
    var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
          if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                var postList = JSON.parse(xhr.responseText);
                var orderedList = postList.sort((a, b) => parseFloat(b.index) - parseFloat(a.index));
                feed.innerHTML = "";
                for (var i = 0, len = orderedList.length; i < len; ++i) {
                  var currentValue = orderedList[i];
                  var currentTitle = currentValue.title;
                  var currentContent = currentValue.content;

                  var postBox = document.createElement("div");
                  postBox.setAttribute("class", "post");
                  var postMeta = document.createElement("div");
                  postMeta.setAttribute("class", "post-meta");
                  var postTime = document.createElement("h3");
                  postTime.innerHTML = currentValue.time;
                  var postAuthor = document.createElement("h3");
                  postAuthor.innerHTML = `Posted by ${currentValue.author}`;

                  var postTitle = document.createElement("h2");
                  postTitle.innerHTML = currentTitle;
                  var postContent = document.createElement("p");
                  postContent.setAttribute("class", "post-content");
                  postContent.innerHTML = currentContent;
                  
                  postBox.appendChild(postMeta);
                  postMeta.appendChild(postTime);
                  postMeta.appendChild(postAuthor);
                  postBox.appendChild(postTitle);
                  postBox.appendChild(postContent);
                  feed.appendChild(postBox);
                }
              }
          }
      }
    xhr.open("GET", `api/posts.json`, true);
    xhr.send();
  }
  
  populateFeed();
  setInterval(() => populateFeed(), 10000)