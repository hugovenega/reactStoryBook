import React from 'react';

export default function ButtonComponent() {
  return function reactButton() {
    return (
      <button className="bg-blue-500 text-white font-bold py-2 px-2 rounded" type="button">Button</button>
    );
  };
}
