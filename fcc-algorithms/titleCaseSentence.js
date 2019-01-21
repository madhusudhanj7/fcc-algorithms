// Basic Algorithm Scripting: Title Case a Sentence.

function titleCase(str) {
 let lower = str.toLowerCase();
 let splitter = lower.split(" ");
 for(let i=0; i<splitter.length; i++){
   splitter[i] = splitter[i].charAt(0).toUpperCase() + splitter[i].slice(1);
 }
 return splitter.join(" ");
}
titleCase("I'm a little tea pot");


