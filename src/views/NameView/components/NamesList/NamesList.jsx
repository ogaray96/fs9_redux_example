import React from 'react';

const NamesList = () => {
  const names = ['Peter Parker', 'Harry Osborn', 'Miles Morales'];

  return (
    <table>
      {names.map((name) => (
        <tr>
          <td>{name}</td>
        </tr>
      ))}
    </table>
  );
};

NamesList.propTypes = {};

NamesList.defaultProps = {};

export default NamesList;
