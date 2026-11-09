# any, unknown and never in TypeScript

## Introduction

Let's talk about any, unknown and never. These three describe the type of a value, but they are vastly different. We will talk about them with a common example: a mystery box delivered to our house.

## The Hierarchy

In the hierarchy of these three, unknown is the biggest box. Anything fits in it, and it is the topmost type. It can be anything, but we have to narrow it down. Never is the empty box. Nothing fits in it, and it is impossible for any value to be of this type. Any is the rule breaker, which ignores the box.

```ts
let a: unknown = 5;       // OK: anything fits in unknown
let b: unknown = "hi";    // OK

let c: never = 5;         // Error: nothing fits in never
```

## any

Any is like opening the box blindly and using whatever is inside. If there is something harmful, we will get harmed by it, because we are not being careful or checking it. TypeScript stays silent, and the bug shows up only during runtime.

```ts
let box: any = 42;
box.toUpperCase();   // No TypeScript error, but it crashes at runtime
```

## unknown

For unknown, we first look into the box before using it. If it's a phone, we charge it. If it's a book, we read it. It can hold anything, but it must be checked before it is used. We normally use `typeof` to check what the item is, and then we use it.

```ts
let box: unknown = "phone";

const charge = box.toUpperCase();     // Error: box is of type unknown

if (typeof box === "string") {
  const charge = box.toUpperCase();   // OK: safe after checking
}
```

## never

For never, think of a car that's also a pizza. No such thing exists, so it is never delivered. For example, a function that always throws an error never returns anything, so its return type is never. Nothing can be a string and a number at the same time, so `string & number` is never.

```ts
function fail(message: string): never {
  throw new Error(message);
}

type Impossible = string & number;   // never
```

## Conclusion

In conclusion, any is trusting blindly because it stops type checking, so we should always avoid it. Unknown means we check first and then use it, so bugs or issues can be caught before running. Never is the impossible case, which can never happen.
