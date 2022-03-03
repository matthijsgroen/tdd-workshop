import wordlist from "workshop-klankblokken";
import { classifyWord } from "./klankblokken";

describe("classifyWord", () => {
  describe.each(
    wordlist(1 /* <- increase this number when the test is green */)
  )("$category", ({ words }) => {
    it.each(words)('can classify "%s"', (word, expectedResult) => {
      const result = classifyWord(word);
      expect(result).toEqual(expectedResult);
    });
  });
});
