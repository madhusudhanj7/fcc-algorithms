Basic Algorithm Scripting: Title Case a Sentence

function titleCase(str) {
var changeCase = str.substring(0,1).toUpperCase() + str.substring(1,str.length).toLowerCase();
  return changeCase;
}

titleCase("I'm a little tea pot");
