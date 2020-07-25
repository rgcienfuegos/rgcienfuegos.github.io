function buildScreen(htmlString) {
    let div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.children[0]
  }