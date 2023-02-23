import calculate from '../logic/calculate';

describe('Test calculation function', () => {
  test('Return the sum of the object variables', () => {
    expect(calculate({ total: 5, next: 3, operation: '+' }, '=')).toEqual({ total: '8', next: null, operation: null });
  });

  test('Return the multiplication of the object variables', () => {
    expect(calculate({ total: 5, next: 3, operation: 'x' }, '=')).toEqual({ total: '15', next: null, operation: null });
  });

  test('Return the division of the object variables', () => {
    expect(calculate({ total: 24, next: 3, operation: '÷' }, '=')).toEqual({ total: '8', next: null, operation: null });
  });

  test('Return the modulus of the object variables', () => {
    expect(calculate({ total: 24, next: 3, operation: '%' }, '=')).toEqual({ total: '0', next: null, operation: null });
  });

  test('Return the subtraction of the object variables', () => {
    expect(calculate({ total: 3, next: 9, operation: '-' }, '=')).toEqual({ total: '-6', next: null, operation: null });
  });
});
