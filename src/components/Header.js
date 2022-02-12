import React from 'react';

const HeaderPage = ({ handleSearch }) => {
  return (
    <header className="header">
      <div className="header__title">REACT SEARCH</div>
      <div className="header__search">
        <input
          type="search"
          placeholder="Search users by country"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default HeaderPage;
