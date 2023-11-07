import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { SearchBarStyled } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {

    const [value, setValue] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    const inputValue = value.toLowerCase();
    onSubmit(inputValue);
    if (!inputValue.trim()) {
      toast.error('Please enter search query');
      return;
    }
  };

  return (
    <SearchBarStyled onSubmit={onFormSubmit}>
      <input
        type="text"
        name="movieName"
        pattern="^[a-zA-Zа-яА-Я0-9]+([' \-][a-zA-Zа-яА-Я0-9]+)*$"
        title="May contain only letters, apostrophe, dash numbers and spaces"
        required
        value={value}
        onChange={event => setValue(event.target.value)}
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
        className="search-input"
      />
      <button type="submit" className="search-btn">
        <span>Search</span>
      </button>
    </SearchBarStyled>
  );
};

export default SearchBar;