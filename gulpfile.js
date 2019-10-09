const { src, dest } = require("gulp");
const path = require("path");

function html() {
  return src(["*.+(html|json|png|css)"]).pipe(dest("dist"));
}

exports.html = html;
