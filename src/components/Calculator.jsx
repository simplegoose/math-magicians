import React from 'react';

export default function Calculator() {
  return (
    <main>
      <section className="calc-section">
        <div className="calculator">
          <div className="screen">0</div>
          <button type="button" className="btn">AC</button>
          <button type="button" className="btn">+/-</button>
          <button type="button" className="btn">%</button>
          <button type="button" className="btn bg-orange">&divide;</button>
          <button type="button" className="btn">7</button>
          <button type="button" className="btn">8</button>
          <button type="button" className="btn">9</button>
          <button type="button" className="btn bg-orange">x</button>
          <button type="button" className="btn">4</button>
          <button type="button" className="btn">5</button>
          <button type="button" className="btn">6</button>
          <button type="button" className="btn bg-orange">-</button>
          <button type="button" className="btn">1</button>
          <button type="button" className="btn">2</button>
          <button type="button" className="btn">3</button>
          <button type="button" className="btn bg-orange">+</button>
          <button type="button" className="btn span-2">0</button>
          <button type="button" className="btn">.</button>
          <button type="button" className="btn bg-orange">=</button>
        </div>
      </section>
    </main>
  );
}
