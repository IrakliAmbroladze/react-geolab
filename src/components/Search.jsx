import { Button } from "./Button";

export const Search = ({ searchRef, handleSearch }) => (
  <form className="flex gap-2.5 sm:gap-10 flex-col sm:flex-row">
    <input
      type="text"
      placeholder="Enter city ..."
      className="flex-1 border border-white rounded-md p-2.5 text-white focus:outline-none focus:shadow-lg"
      ref={searchRef}
    />
    <Button
      type="submit"
      textContent="search"
      bgColor="#A9A9A9"
      handleClick={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    />
  </form>
);
