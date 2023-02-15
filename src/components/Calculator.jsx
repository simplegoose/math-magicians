import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

export default function Calculator() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const doCalculation = (btnName) => {
    const obj = calculate(data, btnName);

    setData(obj);
  };

  const getValue = (data) => {
    if (data.next !== null) return data.next;

    if (data.total !== null) return data.total;

    return 0;
  };

  return (
    <main>
      <section className="calc-section">
        <div className="calculator">
          <div className="screen">{getValue(data)}</div>
          <Button type="button" className="btn" onClick={() => doCalculation('AC')}>AC</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('+/-')}>+/-</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('%')}>%</Button>
          <Button type="button" className="btn bg-orange" onClick={() => doCalculation('÷')}>&divide;</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('7')}>7</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('8')}>8</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('9')}>9</Button>
          <Button type="button" className="btn bg-orange" onClick={() => doCalculation('x')}>x</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('4')}>4</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('5')}>5</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('6')}>6</Button>
          <Button type="button" className="btn bg-orange" onClick={() => doCalculation('-')}>-</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('1')}>1</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('2')}>2</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('3')}>3</Button>
          <Button type="button" className="btn bg-orange" onClick={() => doCalculation('+')}>+</Button>
          <Button type="button" className="btn span-2" onClick={() => doCalculation('0')}>0</Button>
          <Button type="button" className="btn" onClick={() => doCalculation('.')}>.</Button>
          <Button type="button" className="btn bg-orange" onClick={() => doCalculation('=')}>=</Button>
        </div>
      </section>
    </main>
  );
}
