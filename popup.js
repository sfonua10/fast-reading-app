let h1 = document.createElement("H1");
h1.id = "target";
h1.style.textAlign = "center";
h1.style.fontSize = "xx-large";
h1.style.minHeight = "50px";
document.body.prepend(h1);
let button = document.createElement("button");
button.setAttribute("onclick", "runScript()");
let t = document.createTextNode("RUN IT MAN");
button.appendChild(t);
document.body.prepend(button);

let supTag = document.querySelector("sup")?.tagName;
let scriptTag = document.querySelector("script")?.tagName;

function get_text(el) {
  ret = "";
  for (let i = 0; i < el.childNodes.length; i++) {
    const node = el.childNodes[i];
    if (supTag || scriptTag) {
      supTag !== node.tagName && scriptTag !== node.tagName
        ? (ret += node.nodeType != 1 ? node.nodeValue : get_text(node))
        : "";
    }
    // if (scriptTag !== node.tagName) {
    //   if (node.nodeType != 8) {
    //     ret += node.nodeType != 1 ? node.nodeValue : get_text(node);
    //   }
    // }
  }
  return ret;
}
function runScript() {
  const regex = /\s|[.]|—|;/g;
  const words = get_text(document.querySelector("body"));
  const arrOfWords = words
    .split(regex)
    .filter((word) => word !== "" && word !== "↵");
  console.log("arrOfWords", arrOfWords);
  for (let i = 0; i < arrOfWords.length; i++) {
    ((i) => {
      setTimeout(() => {
        document.querySelector(
          "#target"
        ).innerHTML = `<span style="color:#414141">${arrOfWords[i]}</span>`;
      }, 200 * (i + 1));
    })(i);
  }
}
