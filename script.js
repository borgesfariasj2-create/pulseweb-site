<<<<<<< HEAD
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  window.location.href = "https://wa.me/message/MY4J7OB6I6MIE1";
});

fetch("http://localhost:3000/reviews")
  .then(res => res.json())
  .then(reviews => {
    const container = document.getElementById("google-reviews");

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
=======
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  window.location.href = "https://wa.me/message/MY4J7OB6I6MIE1";
});

fetch("http://localhost:3000/reviews")
  .then(res => res.json())
  .then(reviews => {
    const container = document.getElementById("google-reviews");

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
>>>>>>> 05cef53be9e307583c7d05b0332132c96cfc8298
