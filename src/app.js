import Vacancy from './modules/vacancies/script.js';
import Pagination from './modules/ui/Pagination/index.js';
import constants from './modules/constants.js';
import helpers from './modules/helpers/index.js';

const init = async () => {
    helpers.isWebp();

    const cardsList = document.querySelector('.cards__list');
    const filter = document.querySelector('.filter');
    const filterOpenBtn = document.querySelector('.vacancies__filter-btn');
    const filterForm = document.querySelector('.filter__form');
    const resetBtn = filterForm.querySelector('.filter__reset');
    const vacancyPagination = document.querySelector('.cards__pagination');

    const {vacancies, pagination} = await helpers.fetchData(constants.VACANCY_URL);
    const locations = await helpers.fetchData(constants.LOCATION_URL);

    Vacancy.filterLocation.setLocations(locations);
    Vacancy.renderVacancyList(vacancies, cardsList);
    Pagination.renderPagination(pagination, vacancyPagination);

    resetBtn.addEventListener('click', (e) => {
        Vacancy.filterLocation.resetLocation();
    });

    filterOpenBtn.addEventListener('click', (e) => {
        filter.classList.toggle('isOpen');
        filterOpenBtn.classList.toggle('isOpen');
    });

    vacancyPagination.addEventListener('click', async ({target}) => {
        const paginationBtn = target.closest('.pagination__btn');
        if (paginationBtn) {
            const {vacancies} = await helpers.fetchWithParams(constants.VACANCY_URL, {
                page: paginationBtn.dataset.id,
            });
            Pagination.setActiveBtn(paginationBtn, vacancyPagination);
            Vacancy.renderVacancyList(vacancies, cardsList);
        }
    });

    cardsList.addEventListener('click', async ({target}) => {
        const vacancyCard = target.closest('.vacancy-card');
        if (vacancyCard) {
            const data = await helpers.fetchData(`${constants.VACANCY_URL}/${vacancyCard.dataset.id}`);
            Vacancy.renderVacancyModal(data);

            const modal = document.querySelector('.modal');
            modal.addEventListener('click', ({target}) => {
                const closeBtn = target.closest('._btn__close');
                const modalWrapper = target.closest('.modal__wrapper');
                if (closeBtn || !modalWrapper) {
                    document.body.style.overflow = "";
                    modal.remove();
                }
            });
        }
    });

    filterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(filterForm);
        const params = {};
        formData.forEach((value, key) => {
            params[key] = value;
        });
        const {vacancies, pagination} = await helpers.fetchWithParams(constants.VACANCY_URL, params);
        Vacancy.renderVacancyList(vacancies, cardsList);
        Pagination.renderPagination(pagination, vacancyPagination);
    });
};

init();
