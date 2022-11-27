# slug

> Deno library for converting arbitrary strings into valid slugs

```typescript
import { slug } from "https://deno.land/x/slug/mod.ts";

console.log(slug("some string")); // some-string
console.log(slug("some string", "_")); // some_string
console.log(slug("I ♥ UNICODE")); // i-love-unicode
console.log(slug("I ♥ UNICODE", { lower: false })); // I-love-UNICODE
```

## Options

```typescript
slug("some ƒÚÑķÝ and ☢ string", {
  replacement: "-", // replace spaces with replacement character (defaults to `-`)
  remove: /[^\w\s$*_+~.()'"!\-:@]+/g, // remove characters that match regex (defaults to `/[^\w\s$*_+~.()'"!\-:@]+/g`)
  lower: true, // convert to lower case (defaults to `true`)
  strict: false, // strip special characters except replacement (defaults to `false`)
  locale: "vi", // language code of the locale to use (defaults to `vi`)
  trim: true, // trim leading and trailing replacement chars (defaults to `true`)
  extends: { "☢": "nuclear" }, // extend default unicode character set (defaults to `{}`)
}); // some-funky-and-nuclear-string
```

## Propers

Heavily inspired by: [Slug](https://www.npmjs.com/package/slug) and
[Slugify](https://www.npmjs.com/package/slugify)
