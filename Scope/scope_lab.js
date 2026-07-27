var globalVar = "I am a global variable";
let globallet = "I am a gloable let variable";
const globalcst = "I am a globla const";

{
  // Block Scope
  var blockVar = "I am a block variable";
  let blockLet = "I am a block let";
  const blockcst = "I am block const";

  // block scope
  console.log(blockVar);
  console.log(blockLet);
  console.log(blockcst);
}

// Global Scope
console.log(globalVar);
console.log(globallet);
console.log(globalcst);

function show() {
  var fVar = "I am function var";
  let fLet = "I am function let";
  const fcst = "I am function const";
}

show();
console.log(fVar);
console.log(fLet);
console.log(fcst);
