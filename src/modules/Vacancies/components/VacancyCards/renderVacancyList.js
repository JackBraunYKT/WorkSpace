import renderVacancyCard from "../VacancyCard/renderVacancyCard.js";

const renderVacancyList = (vacancies, element) => {
    element.innerHTML = "";
    vacancies.forEach((vacancy) => {
        renderVacancyCard(vacancy, element);
    });
};

export default renderVacancyList;
