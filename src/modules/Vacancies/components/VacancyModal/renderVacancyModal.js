import createVacancyModal from "./createVacancyModal.js";

const renderVacancyModal = (vacancy) => {
    const modal = createVacancyModal(vacancy);
    const vacanciesCards = document.querySelector('.cards');
    vacanciesCards.insertAdjacentHTML('beforeend', modal);
    document.body.style.overflow = "hidden";
};

export default renderVacancyModal;
