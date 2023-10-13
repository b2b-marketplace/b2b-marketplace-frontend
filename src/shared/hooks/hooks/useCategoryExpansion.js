import { useState } from 'react';

export const useCategoryExpansion = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategoryExpansion = (index) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return { expandedCategories, toggleCategoryExpansion };
};
