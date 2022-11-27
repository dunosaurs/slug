import { assertEquals } from "std/testing/asserts.ts";
import { slug } from "./mod.ts";

Deno.test("Test all README examples", () => {
  assertEquals(slug("some string"), "some-string");
  assertEquals(slug("some string", "_"), "some_string");
  assertEquals(slug("I ♥ UNICODE"), "i-love-unicode");
  assertEquals(slug("I ♥ UNICODE", { lower: false }), "I-love-UNICODE");
  assertEquals(
    slug("some ƒÚÑķÝ and ☢ string", {
      replacement: "-",
      remove: undefined,
      lower: true,
      strict: false,
      locale: "vi",
      trim: true,
      extends: { "☢": "nuclear" },
    }),
    "some-funky-and-nuclear-string",
  );
});
