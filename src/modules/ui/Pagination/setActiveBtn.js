const setActiveBtn = (currentBtn, btnGroup) => {
    for (const child of btnGroup.children) {
        if (currentBtn.dataset.id !== child.dataset.id) {
            child.classList.remove('active');
        }
        currentBtn.classList.add('active');
    }
};

export default setActiveBtn;
