const products = JSON.parse(allProducts);

const productsEl = document.querySelector(".products");

products.forEach((products) => {
    const productEl = document.createElement("div");
    productEl.classList.add("product");

    const imgEl = document.createElement("img");
    imgEl.classList.add("product__img");
    imgEl.src = products.img;
    imgEl.addText = products.addText;

    const linkEl = document.createElement("a");
    linkEl.classList.add("product__link");
    linkEl.href = "#";
    linkEl.textContent = products.title;

    const textEl = document.createElement("p");
    textEl.classList.add("product__text");
    textEl.textContent = products.text;

    const QuantityEl = document.createElement("p");
    QuantityEl.classList.add("cart-item__p");
    QuantityEl.textContent = products.quantity;

    const priceEl = document.createElement("p");
    priceEl.classList.add("product__price");
    priceEl.textContent = products.price;



    productsEl.append(productEl);
    productEl.append(imgEl);
    productEl.append(linkEl);
    productEl.append(textEl);
    productEl.append(priceEl);

    productEl.addEventListener("mouseenter", function (e) {
        e.preventDefault();
        imgEl.classList.add("product__animation");
        const addToCardEl = document.createElement("div");
        addToCardEl.classList.add("add_to_card");

        const linkAddEl = document.createElement("a");
        linkAddEl.classList.add("add_to_card__link");
        linkAddEl.href = "#";

        const buttonAddEl = document.createElement("button");
        buttonAddEl.classList.add("add_to_card__button");



        const imgAddEl = document.createElement("img");
        imgAddEl.classList.add("add_to_card__img");
        imgAddEl.src = "./img/cart.svg"

        const pAddEl = document.createElement("p");
        pAddEl.classList.add("add_to_card__p");
        pAddEl.textContent = "Add to Cart"


        productEl.append(addToCardEl);
        addToCardEl.append(linkAddEl);
        linkAddEl.append(buttonAddEl);
        buttonAddEl.append(imgAddEl);
        buttonAddEl.append(pAddEl);

        buttonAddEl.addEventListener("mouseenter", function (e) {
            e.preventDefault();
            buttonAddEl.classList.add("add_to_card__button-hover");
        });

        productEl.addEventListener("mouseleave", function (e) {
            e.preventDefault();
            buttonAddEl.classList.remove("add_to_card__button-hover");
            buttonAddEl.classList.add("add_to_card__button-leave");
        });

        buttonAddEl.addEventListener("click", function (e) {
            e.preventDefault();
            const cartItemsP = document.querySelector(".cart-items__text");
            cartItemsP.style.display = "block";
            const cartItemsEl = document.querySelector(".cart-items");

            const cartEl = document.createElement("div");
            cartEl.classList.add("cart-item");

            const cartImgEl = document.createElement("img");
            cartImgEl.classList.add("cart-item__img");
            cartImgEl.addText = products.addText;
            cartImgEl.src = products.img;

            const cartContentEl = document.createElement("div");
            cartContentEl.classList.add("cart-item__content");

            const cartLinkEl = document.createElement("a");
            cartLinkEl.classList.add("cart-item__link");
            cartLinkEl.textContent = products.title;
            cartLinkEl.href = "#";

            const cartPriceEl = document.createElement("p");
            cartPriceEl.classList.add("cart-item__p");
            cartPriceEl.textContent = `Price: ${products.price}`;

            const cartColorEl = document.createElement("p");
            cartColorEl.classList.add("cart-item__p");
            cartColorEl.textContent = `Color: ${products.color}`;

            const cartSizeEl = document.createElement("p");
            cartSizeEl.classList.add("cart-item__p");
            cartSizeEl.textContent = `Size: ${products.size}`;

            const cartQuantityEl = document.createElement("p");
            cartQuantityEl.classList.add("cart-item__p");
            cartQuantityEl.textContent = `Size: ${products.quantity}`;

            const cartCloseEl = document.createElement("a");
            cartCloseEl.classList.add("cart-item__close");
            cartCloseEl.textContent = "X";
            cartCloseEl.href = "#";

            cartItemsEl.append(cartEl);
            cartEl.append(cartImgEl);
            cartEl.append(cartContentEl);
            cartContentEl.append(cartLinkEl);
            cartContentEl.append(cartPriceEl);
            cartContentEl.append(cartColorEl);
            cartContentEl.append(cartSizeEl);
            cartContentEl.append(cartQuantityEl);
            cartEl.append(cartCloseEl);

            cartCloseEl.addEventListener("click", function (e) {
                e.preventDefault();
                cartEl.remove();
                if (cartItemsEl.children.length === 0) {
                    cartItemsP.style.display = "none";
                }
            });
        });
    });

    productEl.addEventListener("mouseleave", function (e) {
        imgEl.classList.remove("product__animation");
    });
});