import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {genericGetRequest} from '../../requests';

export function Search({placeholder, setValue, endpoint, extraAtributes}) {
  const [inputValue, setInputValue] = useState('');

  function handleChangeInputValue({target: {value}}) {
    setInputValue(value);
  }

  async function submitSearch() {
    const response = await genericGetRequest(`${endpoint}/${inputValue}`);
    setValue([response]);
  }

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChangeInputValue}
        {...extraAtributes}
      />
      <button
        type="button"
        onClick={submitSearch}
        disabled={ inputValue.length === 0 }
      >
        Pesquisar
      </button>
    </div>
  );
}

Search.defaultProps = {
  placeholder: '',
  setValue: null,
  extraAtributes: null,
};

Search.propTypes = {
  placeholder: PropTypes.string,
  setValue: PropTypes.func,
  endpoint: PropTypes.string.isRequired,
  extraAtributes: PropTypes.any,
};
