// function calculateArea() {
//   length = parseFloat(document.getElementById("length").value);
//   width = parseFloat(document.getElementById("width").value);

//   console.log(length);
//   console.log(width);
//   let area = length * width;
//   const result = document.getElementById("result");

//   result.innerText = `The area is : ${area}`;
// }

function totalAmount() {
  let g1 = parseFloat(document.getElementById("g1").value);
  let g2 = parseFloat(document.getElementById("g2").value);
  let g3 = parseFloat(document.getElementById("g3").value);

  let total = g1 + g2 + g3;

  const result = document.getElementById("result");
  result.innerText = `The total Amount of is : ${total} $`;
}
