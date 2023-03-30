import { stringToPace } from "./parseString";

test('stringToPace given a string returns a pace', () => {
  expect(stringToPace('05:00')).toBe(5 * 1000 * 60)
  expect(stringToPace('04:35')).toBe(4 * 1000 * 60 + 35 * 1000)
  expect(stringToPace('03:54')).toBe(3 * 1000 * 60 + 54 * 1000)
})