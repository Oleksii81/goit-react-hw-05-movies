import React from 'react';
import { SearchBarStyled } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {

  return (
    <SearchBarStyled>
      <input
        type="text"
        name="movieName"
        pattern="^[a-zA-Zа-яА-Я0-9]+([' \-][a-zA-Zа-яА-Я0-9]+)*$"
        title="May contain only letters, apostrophe, dash and spaces. For example moon"
        required
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