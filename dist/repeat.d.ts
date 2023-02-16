declare const repeat: (times: number, block: (index: number) => void) => void;
declare const repeatUpTo: (from: number, to: number, block: (index: number) => void) => void;
declare const repeatDownTo: (from: number, to: number, block: (index: number) => void) => void;
declare const println: (...data: any[]) => void;
declare const newLine: () => void;
declare const TODO: (message?: string) => never;
declare const measureTimeMillis: (block: () => void) => number;
