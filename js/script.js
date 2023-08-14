const buttons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".filter-cards .card");

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    cards.forEach((card) => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");     
        }
    });
}

buttons.forEach(button => button.addEventListener("click", filterCards));