fetch('cards.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cards');
    data.cards.forEach(card => {
      const cardHTML = `
        <div class="card">
          <div class="inner">
            <div class="front">
              <strong>${card.name}</strong><br />
              ${card.title}
            </div>
            <div class="back">
              ${card.email}<br />
              ${card.phone}
            </div>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', cardHTML);
    });
  })
  .catch(error => {
    console.error('Error loading cards:', error);
  });
