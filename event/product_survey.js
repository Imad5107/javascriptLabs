function submitFeedback() {
  const username = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const job = document.getElementById("job").value;
  const designation = document.getElementById("designation").value;
  const productType = document.getElementById("product_type").value;
  const feedback = document.getElementById("feedbackText").value;
  alert("button clicked");

  document.getElementById("displayName").innerHTML = username;
  document.getElementById("displayAge").innerHTML = age;
  document.getElementById("displayEmail").innerHTML = email;
  document.getElementById("displayJob").innerHTML = job;
  document.getElementById("displayDesignation").innerHTML = designation;
  document.getElementById("displayProductType").innerHTML = productType;
  document.getElementById("displayFeedbackText").innerHTML = feedback;

  document.getElementById("userInfo").style.display = "block";
}
