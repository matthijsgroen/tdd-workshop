import wordlist from "workshop-klankblokken";
import { classifyWord } from "./klankblokken";

describe("classifyWord", () => {
  it.each(wordlist(1 /* <- increase this number when the test is green */))(
    'can classify "%s"',
    (word, expectedResult) => {
      const result = classifyWord(word);
      expect(result).toEqual(expectedResult);
    }
  );
});
