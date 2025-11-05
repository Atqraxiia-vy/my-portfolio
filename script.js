document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  const btn = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav-links");
  btn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.background = "#fff";
    nav.style.position = "absolute";
    nav.style.right = "20px";
    nav.style.top = "60px";
    nav.style.padding = "15px";
    nav.style.borderRadius = "10px";
    nav.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
  });
});
