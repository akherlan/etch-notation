import { RoughNotation } from './rough-notation';

const annotate = RoughNotation.annotate;
document.addEventListener("readystatechange", function(event) {
if (event.target.readyState === "complete") {

var darkred = '#e60006';
var lightblue = '#e0f2fd';
var yellow = '#ffe536';
var penColor = darkred;
var highlighterColor = yellow;

var highlightTitle = document.querySelector("h2 a");
var highlightHighlight = document.querySelectorAll("span.highlight, mark");
var highlightUnderline = document.querySelectorAll(".underline");
var highlightStrike = document.querySelectorAll(".strike");
var highlightCross = document.querySelectorAll(".cross");
var highlightCircle = document.querySelectorAll(".circle");

annotate(highlightTitle, { type: 'highlight', color: highlighterColor, multiline: true }).show();

highlightHighlight.forEach(function(item) {
  annotate(item, { type: 'highlight', color: highlighterColor, multiline:true, animate: false }).show();
});

highlightUnderline.forEach(function(item) {
  annotate(item, { type: 'underline', color: penColor, strokeWidth: 1, multiline:true, padding:[2, -1], animate: false }).show();
});

highlightStrike.forEach(function(item) {
  annotate(item, { type: 'strike-through', color: penColor, strokeWidth: 1, multiline:true, animate: false}).show();
});

highlightCross.forEach(function(item) {
  annotate(item, { type: 'crossed-off', color: penColor, strokeWidth: 0.75, multiline:true, animate: false}).show();
});

highlightCircle.forEach(function(item) {
  annotate(item, { type: 'circle', color: penColor, strokeWidth: 0.75, animate: false}).show();
});

}
});
