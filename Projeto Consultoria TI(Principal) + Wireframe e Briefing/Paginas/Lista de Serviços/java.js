let cartCount = 0;
let cartItems = [];

function addToCart(serviceName, imageUrl) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    // Adiciona o serviço ao array de itens do carrinho
    cartItems.push({ name: serviceName, image: imageUrl });

    // Atualiza a lista de itens no modal do carrinho
    updateCartItems();
}

function updateCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    // Adiciona cada item na lista do modal
    cartItems.forEach(item => {
        const listItem = document.createElement('li');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const name = document.createElement('span');
        name.textContent = item.name;

        listItem.appendChild(img);
        listItem.appendChild(name);
        cartItemsContainer.appendChild(listItem);
    });

    // Exibe o modal do carrinho
    document.getElementById('cart-modal').style.display = 'block';
}

function closeCart() {
    // Esconde o modal do carrinho
    document.getElementById('cart-modal').style.display = 'none';
}
