const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default SearchBar;
