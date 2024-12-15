function orderNow() {
  alert("Redirecting to the order page...");
  // Here you can redirect to an actual order page or implement further functionality
  window.location.href = "https://example.com/order"; // Replace with actual order link
}

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
