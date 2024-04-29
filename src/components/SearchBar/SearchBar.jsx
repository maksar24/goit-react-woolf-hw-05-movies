import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Input, Label, SearchElement } from './SearchBar.styled';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(e.target.search.value);
    e.target.reset();
  };

  return (
    <SearchElement>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          <Label>Search</Label>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search movie"
        />
      </Form>
    </SearchElement>
  );
};

export default SearchBar;
