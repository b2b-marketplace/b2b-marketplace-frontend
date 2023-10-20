import React, { useState } from 'react';

import IconClose from '../Icon/Icon_close';
import IconSearch from '../Icon/Icon_search';

import './Search.scss';

const Search = ({ size }) => {
  const [searchText, setSearchText] = useState('');
  const [showSearchIcon, setShowSearchIcon] = useState(true);

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
    setShowSearchIcon(event.target.value === ''); // Проверка на пустой ввод
  };

  const handleSearch = () => {
    // логика поиска здесь, используя значение searchText
    console.log('Выполняем поиск с текстом:', searchText);
  };

  const clearSearchText = () => {
    setSearchText('');
    setShowSearchIcon(true);
  };

  return (
    <div className={`search ${size}`}>
      <input
        type="text"
        className="search__input"
        placeholder="Поиск...."
        value={searchText}
        onChange={handleSearchInputChange}
      />
      <button
        type="button"
        className="search__button"
        onClick={showSearchIcon ? handleSearch : clearSearchText}
      >
        {showSearchIcon ? <IconSearch className="search__icon" /> : <IconClose className="search__icon"/>}
      </button>
    </div>
  );
};

export default Search;
