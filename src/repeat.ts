// interface IRepeat {
//   repeat(times: number, block: (index: number) => void): void;
//   repeat(from: number, to: number, block: (index: number) => void): void;
// }

// class Repeat implements IRepeat{
//     repeat(times: number, block: (index: number) => void): void;
//     repeat(from: number, to: number, block: (index: number) => void): void;
//     repeat(from: unknown, to: unknown, block?: unknown): void {
//         throw new Error("Method not implemented.");
//     }
// }

const repeat = (times: number, block: (index: number) => void) => {
  if (times < 0){

  }

  for (let index = 0; index < times; index++) {
    block(index + 1);
  }
};

const repeatUpTo = (
  from: number,
  to: number,
  block: (index: number) => void
) => {
  for (let index = from; index < to + 1; index++) {
    block(index);
  }
};

const repeatDownTo = (
  from: number,
  to: number,
  block: (index: number) => void
) => {
  let index = from;
  while (index >= to) {
    block(index);
    index--;
  }
};

const println = (...data: any[]) => {
  console.log(...data);
};

const newLine = () => {
  println("");
};

const TODO = (message: string = "Not implemented exception") => {
  throw new Error(message);
};

const measureTimeMillis = (block: () => void): number => {
  const startTime = new Date();
  block();
  const endTime = new Date();
  return endTime.getTime() - startTime.getTime();
};

repeat(5, (index) => {
  println(index);
});

newLine();

repeatUpTo(5, 8, (index) => {
  println(index);
});

newLine();

repeatDownTo(8, 5, (index) => {
  println(index);
});
