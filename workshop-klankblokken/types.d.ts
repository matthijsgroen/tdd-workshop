type Classification = [letter: string, classification: string][];
declare const wordlist: (level: number) => {
    category: string;
    words: [word: string, definition: Classification][];
}[];
export default wordlist;

//# sourceMappingURL=types.d.ts.map
