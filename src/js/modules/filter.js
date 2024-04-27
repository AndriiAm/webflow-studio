const filter = () => {
    const triggers = document.querySelectorAll(".portfolio__nav-item")
    const items = document.querySelectorAll(".portfolio__item");

    function filterContent () {
        triggers.forEach(trigger => {
            trigger.addEventListener("click", (e) => {
                const targetType = e.target.dataset.type;

                triggers.forEach(trigger => {
                    trigger.classList.remove("active")
                })

                e.target.classList.add("active");

                if (targetType === "All") {
                    items.forEach(item => {
                        item.style.display = "block";
                    });
                } else {
                    items.forEach(item => {
                        if (item.dataset.type === targetType) {
                            item.style.display = "block";
                        } else {
                            item.style.display = "none";
                        }
                    })
                }
            })
        })
    }

    if (items.length > 0) {
        filterContent();
    }
}

export default filter;