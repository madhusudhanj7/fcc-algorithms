// Intermediate Algorithm Scripting: DNA Pairing.

function pairElement(str) {

  str = str.split("");
  for(let i=0; i<str.length; i++){
    switch(str[i]){
      case "A":
      str[i] += "T";
      break;
      case "T":
      str[i] += "A";
      break;
      case "G":
      str[i] += "C";
      break;
      case "C":
      str[i] += "G";
      break;
    }
    str[i] = str[i].split("");
  }
  return str;
}

pairElement("GCG");

