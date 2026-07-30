/* eslint-disable jsdoc/require-param */

/**
 * A deprecation should never be done in a patch.
 */
type DeprecationSemVer = `${number}.${number}`;

/** @internal */
export interface DeprecatedOptions {
  /**
   * The name of the function, following the syntax `faker.[module].[function]()`.
   */
  deprecated: string;
  /**
   * An alternative solution.
   */
  proposed?: string;
  /**
   * The semver since when this is deprecated.
   */
  since?: DeprecationSemVer;
  /**
   * The semver when this will be removed.
   */
  until?: DeprecationSemVer;
}

/**
 * @internal
 */
export function deprecated(options: DeprecatedOptions): void {
    throw new Error("STUB");
}
