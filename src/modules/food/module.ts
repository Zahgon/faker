import { ModuleBase } from '../../internal/module-base';

/**
 * Converts the given string to title case.
 *
 * @param text The text to convert.
 */
function toTitleCase(text: string): string {
    throw new Error("STUB");
}

/**
 * Module for generating food-related data.
 *
 * ### Overview
 *
 * This module provides methods to generate various food-related information, such as items on a menu.
 * To generate the name of a dish, use [`dish()`](https://fakerjs.dev/api/food.html#dish) and to generate a long description for a dish use [`description()`](https://fakerjs.dev/api/food.html#description). Note that these will not correspond with each other.
 * You can also generate individual components of a dish such as [spices](https://fakerjs.dev/api/food.html#spice), [vegetables](https://fakerjs.dev/api/food.html#vegetable), [meats](https://fakerjs.dev/api/food.html#meat), [fruits](https://fakerjs.dev/api/food.html#fruit), or generic [ingredients](https://fakerjs.dev/api/food.html#ingredient).
 */
export class FoodModule extends ModuleBase {
  /**
   * Generates a random dish adjective.
   *
   * @example
   * faker.food.adjective() // 'crispy'
   *
   * @since 9.0.0
   */
  adjective(): string {
    return this.faker.helpers.arrayElement(
      this.faker.definitions.food.adjective
    );
  }

  /**
   * Generates a random dish description.
   *
   * @example
   * faker.food.description() // 'An exquisite ostrich roast, infused with the essence of longan, slow-roasted to bring out its natural flavors and served with a side of creamy red cabbage'
   *
   * @since 9.0.0
   */
  description(): string {
      throw new Error("STUB");
  }

  /**
   * Generates a random dish name.
   *
   * @example
   * faker.food.dish() // 'Tagine-Rubbed Venison Salad'
   *
   * @since 9.0.0
   */
  dish(): string {
      throw new Error("STUB");
  }

  /**
   * Generates a random food's ethnic category.
   *
   * @example
   * faker.food.ethnicCategory() // 'Italian'
   *
   * @since 9.0.0
   */
  ethnicCategory(): string {
      throw new Error("STUB");
  }

  /**
   * Generates a random fruit name.
   *
   * @example
   * faker.food.fruit() // 'lemon'
   *
   * @since 9.0.0
   */
  fruit(): string {
      throw new Error("STUB");
  }

  /**
   * Generates a random ingredient name.
   *
   * @example
   * faker.food.ingredient() // 'butter'
   *
   * @since 9.0.0
   */
  ingredient(): string {
      throw new Error("STUB");
  }

  /**
   * Generates a random meat.
   *
   * @example
   * faker.food.meat() // 'venison'
   *
   * @since 9.0.0
   */
  meat(): string {
      throw new Error("STUB");
  }

  /**
   * Generates a random spice name.
   *
   * @example
   * faker.food.spice() // 'chilli'
   *
   * @since 9.0.0
   */
  spice(): string {
      throw new Error("STUB");
  }

  /**
   * Generates a random vegetable name.
   *
   * @example
   * faker.food.vegetable() // 'broccoli'
   *
   * @since 9.0.0
   */
  vegetable(): string {
      throw new Error("STUB");
  }
}
