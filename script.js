var btn = document.getElementById("btn");

if (btn) {
  btn.addEventListener("click", function () {
    window.location.href = "https://wa.me/message/MY4J7OB6I6MIE1";
  });
}

fetch("https://pulseweb-site.onrender.com/reviews")
  .then(res => res.json())
  .then(reviews => {
    const container = document.getElementById("google-reviews");
    if (!container) return;

    reviews.slice(0, 3).forEach(review => {
      const card = document.createElement("div");
      card.className = "avaliacao-card";

      card.innerHTML = `
        <p>“${review.text}”</p>
        <strong>${review.author_name}</strong>
        <span>${"★".repeat(review.rating)}</span>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Erro ao buscar reviews:", err);
  });
