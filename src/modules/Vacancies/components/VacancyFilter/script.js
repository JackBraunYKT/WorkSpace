import Choices from 'choices.js';

const citySelect = document.querySelector('#city');
const cityChoices = new Choices(citySelect, {
  searchEnabled: false,
  itemSelectText: '',
});

const setLocations = (locations) => {
  cityChoices.setChoices(
      locations.map((location) => {
        return {value: location};
      }),
      'value',
      'label',
      false,
  );
};

const resetLocation = () => {
  cityChoices.setChoiceByValue('');
};

export default {setLocations, resetLocation};
