export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="country-filter-panel container">
      <div className="country-filter-panel__intro">
        <p className="country-filter-panel__eyebrow">Country explorer</p>
        <h2>Search, sort, and filter countries</h2>
        <p>
          Use the search bar to find a country by name, then narrow the list by
          region or sort it alphabetically.
        </p>
      </div>

      <div className="country-filter-panel__controls">
        <label className="country-search-field">
          <span>Search countries</span>
          <input
            type="text"
            placeholder="Type a country name"
            value={search}
            onChange={handleInputChange}
          />
        </label>

        <div className="country-sort-group" aria-label="Sort countries">
          <button type="button" onClick={() => sortCountries("asc")}>A → Z</button>
          <button type="button" onClick={() => sortCountries("des")}>Z → A</button>
        </div>

        <label className="country-region-field">
          <span>Region</span>
          <select
            className="select-section"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="all">All regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
      </div>
    </section>
  );
};