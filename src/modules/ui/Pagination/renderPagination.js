import createPaginationBtn from "./createPaginationBtn.js";

const renderPagination = (paginationInfo, element) => {
    element.innerHTML = "";
    for (let i = 1; i <= paginationInfo.totalPages; i++) {
        const btn = createPaginationBtn(i);
        if (paginationInfo.currentPage === i) {
            btn.classList.add('active');
        }
        element.appendChild(btn);
    }
};

export default renderPagination;
