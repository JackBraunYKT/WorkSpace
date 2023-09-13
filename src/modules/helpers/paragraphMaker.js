const paragraphMaker = (input) => {
  return input.split('\n')
      .reduce((acc, paragraph) =>
        `${acc}<p>${paragraph}</p>`
      , '');
};

export default paragraphMaker;
