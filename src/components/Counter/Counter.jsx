

export const Counter = ({ initial, stock, count, setCount }) => {
  const addUp = () => {
    count < stock && setCount(count + 1);
  };

  const substractOne = () => {
    count > initial && setCount(count - 1);
  };

  return (
    <div className="contador-ppal">
      <button  className='item-boton' onClick={substractOne} disabled={count === initial}>
        -
      </button>

      <p className='digital'>{count}</p>

      <button  className='item-boton' onClick={addUp} disabled={count === stock}>
        +
      </button>
      </div>
    
  );
};


