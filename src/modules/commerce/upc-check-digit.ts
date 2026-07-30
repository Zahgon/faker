import { FakerError } from '../../errors/faker-error';

/**
 * Calculates the check digit for a UPC‑A using the Modulo 10 algorithm.
 *
 * @param digits The first 11 digits (UPC body) as a numeric string.
 *
 * @returns The check digit (0–9).
 *
 * @throws {FakerError} If `digits` is not exactly 11 numeric characters.
 *
 * @see upc
 *
 * @since 10.2.0
 */
export function calculateUPCCheckDigit(digits: string): number {
    throw new Error("STUB");
}
