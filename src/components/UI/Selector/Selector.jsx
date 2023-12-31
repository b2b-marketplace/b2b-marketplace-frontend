import CreatableSelect from 'react-select/creatable';

import './Selector.scss';

const Selector = (props) => {
  const { value, options, name, onChange, ...restedProps } = props;
  const getValue = () => (value ? options.find((option) => option.value === value) : '');

  const handleChange = (newAddress = '') =>
    onChange({
      target: {
        name,
        value: newAddress.value,
        validationMessage: newAddress.value ? '' : 'Необходимо выбрать',
      },
    });

  return (
    <CreatableSelect
      className="custom-select"
      options={options}
      value={getValue()}
      onChange={handleChange}
      classNamePrefix="custom-select"
      {...restedProps}
    />
  );
};

export default Selector;
