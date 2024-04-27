const detectActivePage = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const currentPath = location.pathname;
        const menuItemsAll = document.querySelectorAll('.menu__link');
        const menuItemsHeader = document.querySelectorAll('.menu__link--header');
        const menuItemsFooter = document.querySelectorAll('.menu__link--footer');

        if (currentPath === "/" || currentPath === "/webflow/") {
            menuItemsHeader[0].classList.add("active");
            menuItemsFooter[0].classList.add("active")
        } else {
            menuItemsAll.forEach(item => {
                item.style.transition = "none";
                if (item.pathname === currentPath) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        const timeout = setTimeout(() =>
            menuItemsAll.forEach(item => {
                item.style.transition = "0.2s all linear";
                clearTimeout(timeout);
            }), 200)
    });
}

export default detectActivePage;