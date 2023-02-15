function repeat(times: number, block: (index: number) => void): void;
function repeat(from: number, to: number, block: (index: number) => void): void;
function repeat(from: unknown, to: unknown, block?: unknown): void {
    throw new Error("Method not implemented.");
}

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

// const repeat = (times: number, block: (index: number) => void) => {
//   for (let index = 0; index < times; index++) {
//     block(index + 1);
//   }
// };

const println = (...data: any[]) => {
  console.log(...data);
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


repeat()