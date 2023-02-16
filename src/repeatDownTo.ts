export const repeatDownTo = (
  from: number,
  to: number,
  block: (index: number) => void
) => {
  if (from < to) {
    throw new Error(
      "Error while calling repeatDownTo. Parameter 'from' must be greater or equal to parameter 'to'."
    );
  }

  let index = from;
  while (index >= to) {
    block(index);
    index--;
  }
};
