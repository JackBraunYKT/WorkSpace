import constants from "../../../constants.js";
import helpers from "../../../helpers/index.js";

const createVacancyCard = (vacancy) => {
    const experience = vacancy.experience === "от 1 года до 3-х лет" ||
                       vacancy.experience === "от 3-х лет" ?
                       `опыт ${vacancy.experience}` : vacancy.experience;
    const salary = helpers.moneyFormatter.format(vacancy.salary);

    return `<article class="vacancy-card" tabindex="0" data-id="${vacancy.id}">
                <img src="${constants.API_URL}${vacancy.logo}" alt="Логотип компании ${vacancy.company}" class="vacancy-card__logo">
                <p class="vacancy-card__company">${vacancy.company}</p>
                <h3 class="vacancy-card__title">${vacancy.title}</h3>
                <ul class="vacancy-card__list">
                    <li class="vacancy-card__field">от ${salary}</li>
                    <li class="vacancy-card__field">${vacancy.format}</li>
                    <li class="vacancy-card__field">${vacancy.type}</li>
                    <li class="vacancy-card__field">${experience}</li>
                </ul>
            </article>`;
};

export default createVacancyCard;
