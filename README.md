# TypeScript Type Safety Bypass
This repository demonstrates a common error in TypeScript where type safety can be bypassed, leading to unexpected runtime behavior.  The `bug.ts` file shows code that compiles without errors but produces incorrect results due to type coercion. The `bugSolution.ts` file demonstrates a corrected version. 

## Bug Description
A function expecting numeric arguments is called with a string argument.  TypeScript's type system doesn't prevent this particular type coercion, leading to unexpected string concatenation instead of numeric addition. This highlights the importance of thorough type checking and input validation in TypeScript to maintain type safety. 