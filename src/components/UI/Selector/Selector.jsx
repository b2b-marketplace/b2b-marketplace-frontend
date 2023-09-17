import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './Selector.scss';

const animatedComponents = makeAnimated();

const Selector = (props) => {
  const { value, options, name, onChange, ...restedProps } = props;
  const getValue = () => value ? options.find((option) => option.value === value) : '';

  const handleChange = (newAddress = '') => onChange({
    target: {
      name,
      value: newAddress.value
    }
  });

  return (
    <Select
      className="custom-select"
      components={animatedComponents}
      options={options}
      value={getValue()}
      onChange={handleChange}
      classNamePrefix={'custom-select'}
      {...restedProps}
    />
  );
};

export default Selector;
