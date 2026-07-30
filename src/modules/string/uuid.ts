import type { SimpleFaker } from '../../simple-faker';

/**
 * Returns a UUID v4 ([Universally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)).
 *
 * @internal
 *
 * @param faker The faker instance to use.
 */
export function uuidV4(faker: SimpleFaker): string {
    throw new Error("STUB");
}

/**
 * Returns a UUID v7 ([Universally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)).
 *
 * @internal
 *
 * @param faker The faker instance to use.
 * @param refDate The reference date to retrieve the unix timestamp from.
 */
export function uuidV7(faker: SimpleFaker, refDate: Date): string {
    throw new Error("STUB");
}
