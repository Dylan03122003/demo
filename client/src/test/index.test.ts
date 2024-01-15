import { calcCoffeeIngredient, subtract, sum } from '../utils'

describe('sum', () => {
  it('should sum', () => {
    const expectedOutcome = 3

    expect(sum(1, 2)).toBe(expectedOutcome)
  })

  it('should stract', () => {
    expect(subtract(1, 2)).toBe(-1)
  })

  it('should give me coffee', () => {
    expect(calcCoffeeIngredient('espresso')).toBe(30)
    expect(calcCoffeeIngredient('americano')).toBe(60)
    expect(calcCoffeeIngredient('milk')).toBe(100)
  })
})
