// 4.Intermediate Algorithm Scripting: Wherefore art thou.

function spinalCase(str) {
  var spinal = str.replace(/(?!^)([A-Z])/g, ' $1')
                .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
  return spinal;
}

spinalCase('This Is Spinal Tap');
