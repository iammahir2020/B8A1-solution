# Type vs Interface in TypeScript

## Introduction

Both interface and type give a name to the shape of our data. On the surface, both look the same, but there are some subtle differences.

## Same Job for Objects

We can think about types and interfaces from the perspective of a school admission form. An interface is the form and the boxes students must fill in, and the type is the same thing described using type.

```ts
interface StudentInterface {
  name: string;
  age: number;
}

type StudentType = {
  name: string;
  age: number;
};
```

## Choices Need Type

But not everything is a form or an object. Sometimes someone has to choose between multiple options, like a t-shirt size: small, medium or large. If it is a pick between options, a list or a plain value, then type is the thing we need to use, because interfaces cannot handle these kinds of things.

```ts
type TShirtSizeType = "small" | "medium" | "large";
type PointType = [number, number];

// interface TShirtSizeInterface = "small" | "medium";  // Error: not possible with interface
```

## Extending

Now we want to create another form for master's students. We need to keep all the fields from the student form, but add new fields to it. For interfaces, we use the keyword `extends`, and for types, we use the `&` symbol. But if we extend an interface and it has the same field with a conflicting type, it will throw an error immediately. However, types will not throw an error. If the parent type has id as a string, and the extended type has id as a number, it will silently give never.

```ts
interface MastersStudentInterface extends StudentInterface {
  thesis: string;
}

type MastersStudentType = StudentType & { thesis: string };

// Conflicting fields
interface PersonInterface { id: string }
interface StudentWithIdInterface extends PersonInterface { id: number }  // Error right away

type PersonType = { id: string };
type StudentWithIdType = PersonType & { id: number };  // No error, but id becomes never
```

## Merging

Interfaces can be merged. If we declare two interfaces with the same name and different properties, what TypeScript does is merge both of them, and now both properties are required. If we declare two types with the same name, it gives us an error that the name has already been declared.

```ts
interface AdmissionInterface { id: number }
interface AdmissionInterface { name: string }

const admission: AdmissionInterface = { id: 1, name: "Rakib" };   // Needs both id and name

type AdmissionType = { id: number };
type AdmissionType = { name: string };   // Error: Duplicate identifier 'AdmissionType'
```

## Conclusion

Interfaces are best used for forms, objects, and classes, while types are best for choices, tuples, and everything else. For a project, we have to be consistent in how we use them.
