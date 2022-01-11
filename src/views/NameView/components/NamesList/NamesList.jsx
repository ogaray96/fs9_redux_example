import React from 'react';

const NamesList = () => {
  const names = ['Peter Parker', 'Harry Osborn', 'Miles Morales'];

  return (
    <table>
      <tbody>
        {names.map((name) => (
          <tr key={name}>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

NamesList.propTypes = {};

NamesList.defaultProps = {};

export default NamesList;
