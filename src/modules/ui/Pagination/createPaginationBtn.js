const createPaginationBtn = (value) => {
    const btn = document.createElement('button');
    btn.classList.add('pagination__btn', '_btn__simple-small');
    btn.textContent = value;
    btn.dataset.id = value;
    return btn;
};

export default createPaginationBtn;
