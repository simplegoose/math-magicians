import React from 'react';
import Calculator from '../components/Calculator';

export default function CalculatorPage() {
  return (
    <main className="calc_main">
      <div className="calc_title">
        <h2>Let&rsquo;s do some math!</h2>
      </div>
      <Calculator />
    </main>
  );
}
