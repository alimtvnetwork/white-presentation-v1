/**
 * Boolean guard utilities enforcing positive boolean conventions
 * and safe affirmative checks without raw negations.
 */

export function isBooleanFalse(value: unknown): boolean {
  return value === false;
}

export function isFalse(value: unknown): boolean {
  return !value;
}

export function hasNot(value: unknown): boolean {
  return !value;
}

export function isBooleanTrue(value: unknown): boolean {
  return Boolean(value);
}
