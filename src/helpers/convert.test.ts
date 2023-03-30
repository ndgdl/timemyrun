import { toSpeed, toPace } from "./convert";

test('toSpeed given a pace returns a string', () => {
  expect(toSpeed(5 * 1000 * 60)).toBe(12);
  expect(toSpeed(4 * 1000 * 60 + 35 * 1000)).toBe(13.09);
  expect(toSpeed(3 * 1000 * 60 + 54 * 1000)).toBe(15.38);
})

test('toPace given a speed returns a string', () => {
  expect(toPace(12)).toBe(5 * 1000 * 60)
  expect(toPace(9.22)).toBe(6 * 1000 * 60 + 30 * 1000 + 456)
  expect(toPace(13.98)).toBe(4 * 1000 * 60 + 17 * 1000 + 511)
})