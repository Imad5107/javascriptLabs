function calculateArea() {
  length = parseFloat(document.getElementById("length").value);
  width = parseFloat(document.getElementById("width").value);

  console.log(length);
  console.log(width);
  let area = length * width;
  const result = document.getElementById("result");

  result.innerText = `The area is : ${area}`;
}
