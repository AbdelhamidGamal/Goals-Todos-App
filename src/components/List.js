import React from 'react';

const ListCompo = props => {
  return (
    <ul>
      {props.thelist.map(i => (
        <li key={i.id}>
          <span
            onClick={() => props.toggle && props.toggle(i)}
            style={{ textDecoration: i.complete ? 'line-through' : 'none' }}
          >
            {i.name}
          </span>
          <div>
            <i
              onClick={() => props.removeitem(i)}
              className='far fa-trash-alt'
            ></i>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListCompo;
