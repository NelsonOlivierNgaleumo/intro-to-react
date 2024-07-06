import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';

export default function Counter({ title }) {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <div>
      {value === 5 ? (
        'YOU DA WIENER'
      ) : (
        <>
          <h1>{title}</h1>
          <h2>{value}</h2>
          <Button type="button" className={value <= 0 ? 'btn btn-danger' : 'btn btn-success'} onClick={handleClick}>
            Increment
          </Button>
          {value <= 0 ? (
            ''
          ) : (
            <Button type="button" onClick={() => setValue((prevState) => prevState - 1)}>
              Decrement
            </Button>
          )}

          <Button type="button" onClick={() => setValue(0)}>
            Reset
          </Button>
        </>
      )}
    </div>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'Counter Default',
};
