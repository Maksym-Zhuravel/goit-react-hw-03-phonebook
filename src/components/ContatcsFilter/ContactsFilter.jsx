import { Input } from 'components/PhonebookForm/PhonebookForm.styled';
import PropTypes from 'prop-types';

const ContactsFilter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <Input
        type="text"
        name="filter"
        placeholder="Search from contact list"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactsFilter;
