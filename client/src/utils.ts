export const sum = (a: number, b: number): number => a + b
export const subtract = (a: number, b: number): number => {
  return a - b
}

export function calcCoffeeIngredient(coffeeName: string, cup = 1) {
  let espresso, water

  if (coffeeName === 'espresso') {
    espresso = 30 * cup
    return espresso
  }

  if (coffeeName === 'americano') {
    espresso = 30 * 2 * cup
    water = 100
    return espresso
  }

  return 100
}
