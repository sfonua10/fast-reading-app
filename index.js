let supTag = document.querySelector("sup").tagName;
function get_text(el) {
  ret = "";
  const length = el.childNodes.length;
  for (let i = 0; i < length; i++) {
    const node = el.childNodes[i];
    if (supTag !== node.tagName) {
      if (node.nodeType != 8) {
        ret += node.nodeType != 1 ? node.nodeValue : get_text(node);
      }
    }
  }
  return ret;
}

const words = get_text(document.querySelector("body"));
const arrOfWords = words
  .split(" ")
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
