import React from 'react';
import css from './SearchBar.module.css';

export const Searchbar = ({ text, ClickHandler }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm}>
        <button
          type="submit"
          className={css.SearchFormButton}
          onClick={ClickHandler}
        >
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
