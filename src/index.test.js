/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable import/named */
/* eslint-disable linebreak-style */
import { sum, prod } from './index';

describe('index', () => {
  it('adds 1 + 2 to equal 3', () => {
    // AAA
    // arrange - настроить
    const a = 1;
    const b = 2;
    // act - запустить-вызвать
    const result = sum(a, b);
    // assert - проверить
    expect(result).toBe(3);
  });
  it('multiply 5 to 2 to equal 10', () => {
    const a = 5;
    const b = 2;
    const result = prod(a, b);
    expect(result).toBe(10);
  });
});
