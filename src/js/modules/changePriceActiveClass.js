const changePriceActiveClass = () => {
    const priceCards = document.querySelectorAll(".price__item");

    if (priceCards) {
        priceCards.forEach(card => {
            card.addEventListener("mouseenter", () => {
                priceCards.forEach(item => {
                    item.classList.remove("active")
                })

                card.classList.add("active");
            })
        })
    }
}

export default changePriceActiveClass;