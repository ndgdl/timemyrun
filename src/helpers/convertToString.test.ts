import { paceToString } from "./convertToString"

test('paceToString given a pace returns a string', () => {
  expect(paceToString(5 * 1000 * 60)).toBe('05:00')
  expect(paceToString(4 * 1000 * 60 + 35 * 1000)).toBe('04:35')
  expect(paceToString(3 * 1000 * 60 + 54 * 1000)).toBe('03:54')
})