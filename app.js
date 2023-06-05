// Get all elements with the class "col-sm-4"
var colElements = document.getElementsByClassName("col-sm-4");

// Add event listeners to each element
for (var i = 0; i < colElements.length; i++) {
  colElements[i].addEventListener("mouseenter", function() {
    this.style.color = "white"; // Change the color when hovering over the element
  });

  colElements[i].addEventListener("mouseleave", function() {
    this.style.color = ""; // Revert the color back to the default when not hovering
  });
}
