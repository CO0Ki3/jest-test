import React, { useState } from 'react';

function Counter() {
  const [ value, setValue ] = useState({
    value: 0,
    title: '',
  });

  const changeTitle = (e) => {
    setValue(() => ({ value: value.value, title: e.target.value }));
  };

  const changeValue = () => {
    setValue((prev) => ({ value: prev.value + 1, title: value.title }));
  };

  return(
    <div>
      <input value={ value.title } id="title" onChange={changeTitle} placeholder="rendering" data-testid="inputtest"/>
      <br/>
      <b>{value.title}</b>
      <br/>
      <button id="up" onClick={ changeValue }>증가</button>
      <br/>
      <b>{value.value}</b>
    </div>
  );
}

export default Counter;