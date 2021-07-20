import React from 'react';

export default function MyButton(props) {
  return (
    <button
      type="button"
      {...props}
      onClick={() => {
        // eslint-disable-next-line no-undef
        underfinedFunction();
      }}
    />
  );
}
