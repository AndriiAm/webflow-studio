const accordion = () => {
    const accTriggers = document.querySelectorAll(".accordion__item-trigger");

    if (accTriggers.length > 0) {
        makeAccordion(accTriggers);
        changeAccordionItemState(accTriggers[0])
    }

    function makeAccordion(accTriggers) {
        accTriggers.forEach(trigger => {
            trigger.addEventListener("click", (e) => {
                e.target.parentElement.classList.toggle("active");

                accTriggers.forEach(item => {
                    if (item != e.target.parentElement) {
                        item.classList.remove("active")
                    }
                    changeAccordionItemState(item);
                })
            })
        })
    }

    function changeAccordionItemState(trigger) {
        if (trigger.classList.contains("active")) {
            trigger.nextElementSibling.classList.add("_active");
            trigger.nextElementSibling.style.maxHeight = trigger.nextElementSibling.scrollHeight + "px";
        } else {
            trigger.nextElementSibling.style.maxHeight = 0;
            trigger.nextElementSibling.classList.remove("_active");
        }
    }
}

export default accordion;