import constants from "../../../constants.js";
import helpers from '../../../helpers/index.js';

const createVacancyModal = (vacancy) => {
    const experience = vacancy.experience === "от 1 года до 3-х лет" ||
                       vacancy.experience === "от 3-х лет" ?
                       `опыт ${vacancy.experience}` : vacancy.experience;
    const salary = helpers.moneyFormatter.format(vacancy.salary);

    return `<div class="modal">
                <div class="modal__overlay">
                    <div class="modal__wrapper">
                        <div class="modal__body">
                            <header class="modal__header header-modal">
                                <div class="header-modal__logo">
                                    <img src="${constants.API_URL}${vacancy.logo}" alt="Логотип компании ${vacancy.company}">
                                </div>
                                <div class="header-modal__main">
                                    <div class="header-modal__company">${vacancy.company}</div>
                                    <h4 class="header-modal__title">${vacancy.title}</h4>
                                </div>
                            </header>
                            <div class="modal__content content-modal">
                                <div class="content-modal__description">
                                    ${helpers.paragraphMaker(vacancy.description)}
                                </div>
                                <ul class="content-modal__list">
                                    <li class="content-modal__field">${salary}</li>
                                    <li class="content-modal__field">${vacancy.type}</li>
                                    <li class="content-modal__field">${vacancy.format}</li>
                                    <li class="content-modal__field">${experience}</li>
                                    <li class="content-modal__field">${vacancy.location}</li>
                                </ul>
                            </div>
                            <div class="modal__footer footer-modal">
                                <div class="footer-modal__contact">
                                    Отправляйте резюме на <a href="mailto: ${vacancy.email}">${vacancy.email}</a>
                                </div>
                                <button class="footer-modal__close-btn _btn__close _icon-close"></button>
                                <div class="footer-modal__likeman"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
};

export default createVacancyModal;
