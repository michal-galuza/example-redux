export const parseParams = (
  param: undefined | string | readonly string[]
): string | null => (param && typeof param !== "object" ? param : null);
