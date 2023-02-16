export const repeatUpTo = (
  from: number,
  to: number,
  block: (index: number) => void
) => {
  if (from > to) {
    throw new Error(
      "Error while calling repeatUpTo. Parameter 'from' must be smaller or equal to parameter 'to'."
    );
  }
  for (let index = from; index < to + 1; index++) {
    block(index);
  }
};
