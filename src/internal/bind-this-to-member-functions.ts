/**
 * Bind all functions of the given instance to itself so you can use them independently.
 *
 * @internal
 *
 * @param instance The class instance of which the methods are to be bound to itself.
 *
 * @example
 * const someModule = new SomeModule(faker);
 * bindThisToMemberFunctions(someModule); // Usually called inside the constructor passing `this`
 * const someMethod = someModule.someMethod;
 * someMethod(); // Works
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function bindThisToMemberFunctions<TClass extends { new (): any }>(
  instance: InstanceType<TClass>
): void {
    throw new Error("STUB");
}
