import { FakerError } from '../../errors/faker-error';
import type { Faker } from '../../faker';

const REGEX_DOT_OR_BRACKET = /\.|\(/;

/**
 * Resolves the given expression and returns its result. This method should only be used when using serialized expressions.
 *
 * This method is useful if you have to build a random string from a static, non-executable source
 * (e.g. string coming from a developer, stored in a database or a file).
 *
 * It tries to resolve the expression on the given/default entrypoints:
 *
 * ```js
 * const firstName = fakeEval('person.firstName', faker);
 * const firstName2 = fakeEval('person.first_name', faker);
 * ```
 *
 * Is equivalent to:
 *
 * ```js
 * const firstName = faker.person.firstName();
 * const firstName2 = faker.helpers.arrayElement(faker.rawDefinitions.person.first_name);
 * ```
 *
 * You can provide parameters as well. At first, they will be parsed as json,
 * and if that isn't possible, it will fall back to string:
 *
 * ```js
 * const message = fakeEval('phone.number(+!# !## #### #####!)', faker);
 * ```
 *
 * It is also possible to use multiple parameters (comma separated).
 *
 * ```js
 * const pin = fakeEval('string.numeric(4, {"allowLeadingZeros": true})', faker);
 * ```
 *
 * This method can resolve expressions with varying depths (dot separated parts).
 *
 * ```ts
 * const airlineModule = fakeEval('airline', faker); // AirlineModule
 * const airlineObject = fakeEval('airline.airline', faker); // { name: 'Etihad Airways', iataCode: 'EY' }
 * const airlineCode = fakeEval('airline.airline.iataCode', faker); // 'EY'
 * const airlineName = fakeEval('airline.airline().name', faker); // 'Etihad Airways'
 * const airlineMethodName = fakeEval('airline.airline.name', faker); // 'bound airline'
 * ```
 *
 * It is not possible to execute arbitrary JavaScript through this method;
 * expressions can only resolve properties and methods reachable from the given entrypoints.
 *
 * This method will never return arrays, as it will pick a random element from them instead.
 *
 * @param expression The expression to evaluate on the entrypoints.
 * @param faker The faker instance to resolve array elements.
 * @param entrypoints The entrypoints to use when evaluating the expression.
 *
 * @see faker.helpers.fake() If you wish to have a string with multiple expressions.
 *
 * @example
 * fakeEval('person.lastName', faker) // 'Barrows'
 * fakeEval('helpers.arrayElement(["heads", "tails"])', faker) // 'tails'
 * fakeEval('number.int(9999)', faker) // 4834
 *
 * @since 8.4.0
 */
export function fakeEval(
  expression: string,
  faker: Faker,
  entrypoints: ReadonlyArray<unknown> = [faker, faker.definitions.raw]
): unknown {
    throw new Error("STUB");
}

/**
 * Evaluates a function call and returns the new read index and the mapped results.
 *
 * @param input The input string to parse.
 * @param entrypoints The entrypoints to attempt the call on.
 */
function evalProcessFunction(
  input: string,
  entrypoints: ReadonlyArray<unknown>
): [continueIndex: number, mapped: unknown[]] {
    throw new Error("STUB");
}

/**
 * Tries to find the parameters of a function call.
 *
 * @param input The input string to parse.
 */
function findParams(input: string): [continueIndex: number, params: unknown[]] {
    throw new Error("STUB");
}

/**
 * Processes one expression part and returns the new read index and the mapped results.
 *
 * @param input The input string to parse.
 * @param entrypoints The entrypoints to resolve on.
 */
function evalProcessExpression(
  input: string,
  entrypoints: ReadonlyArray<unknown>
): [continueIndex: number, mapped: unknown[]] {
    throw new Error("STUB");
}

/**
 * Resolves the given property on the given entrypoint.
 *
 * @param entrypoint The entrypoint to resolve the property on.
 * @param key The property name to resolve.
 */
function resolveProperty(entrypoint: unknown, key: string): unknown {
    throw new Error("STUB");
}
