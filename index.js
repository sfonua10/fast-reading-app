// const arrOfWords = ["hi", "how", "are", "you", "doing?"];
function get_text(el) {
  ret = "";
  var length = el.childNodes.length;
  for (var i = 0; i < length; i++) {
    var node = el.childNodes[i];
    if (node.nodeType != 8) {
      ret += node.nodeType != 1 ? node.nodeValue : get_text(node);
    }
  }
  return ret;
}
var words = get_text(document.querySelector("html"));
var arrOfWords = words.split(" ").filter((word) => word !== "" && word !== "↵");
console.log(arrOfWords);

for (let i = 0; i < arrOfWords.length; i++) {
  ((i) => {
    setTimeout(() => {
      document.querySelector(
        "#target"
      ).innerHTML = `<span style="color:blue">${arrOfWords[i]}</span>`;
    }, 200 * (i + 1));
  })(i);
}
