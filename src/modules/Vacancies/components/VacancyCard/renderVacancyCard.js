import createVacancyCard from "./createVacancyCard.js";

const renderVacancyCard = (vacancy, element) => {
    const card = createVacancyCard(vacancy);
    element.insertAdjacentHTML('beforeend', card);
};

export default renderVacancyCard;
