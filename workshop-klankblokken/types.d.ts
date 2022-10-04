type Classification = [letter: string, classification: string][];
declare const wordlist: (level: number) => {
    category: string;
    words: [word: string, definition: Classification][];
}[];
export const main: (classifyWord: (input: string) => Classification) => Promise<never>;

//# sourceMappingURL=types.d.ts.map
