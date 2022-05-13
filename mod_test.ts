import { assertEquals } from "./test_deps.ts";
import { slug } from "./mod.ts";

Deno.test("Test all README examples", () => {
  assertEquals(slug("some string"), "some-string");
  assertEquals(slug("some string", "_"), "some_string");
  assertEquals(slug("I ♥ UNICODE"), "I-love-UNICODE");
  assertEquals(
    slug("some ƒÚÑķÝ and ☢ string", {
      replacement: "-",
      remove: undefined,
      lower: false,
      strict: false,
      locale: "vi",
      trim: true,
      extends: { "☢": "nuclear" },
    }),
    "some-fUNkY-and-nuclear-string",
  );
});
