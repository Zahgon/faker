import { FakerError } from '../../errors/faker-error';
import { ModuleBase } from '../../internal/module-base';
import type { NumberOrRange } from '../../utils/types';

const commonFileTypes = ['video', 'audio', 'image', 'text', 'application'];

const commonMimeTypes = [
  'application/pdf',
  'audio/mpeg',
  'audio/wav',
  'image/png',
  'image/jpeg',
  'image/gif',
  'video/mp4',
  'video/mpeg',
  'text/html',
];

const commonInterfaceTypes = ['en', 'wl', 'ww'] as const;
const commonInterfaceSchemas = {
  index: 'o',
  slot: 's',
  mac: 'x',
  pci: 'p',
} as const;

const CRON_DAY_OF_WEEK = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
] as const;

/**
 * Generates fake data for many computer systems properties.
 */
export class SystemModule extends ModuleBase {
  /**
   * Returns a random file name with extension.
   *
   * @param options An options object.
   * @param options.extensionCount Define how many extensions the file name should have. Defaults to `1`.
   *
   * @example
   * faker.system.fileName() // 'faithfully_calculating.u8mdn'
   * faker.system.fileName({ extensionCount: 2 }) // 'times_after.swf.ntf'
   * faker.system.fileName({ extensionCount: { min: 1, max: 2 } }) // 'jaywalk_like_ill.osfpvg'
   *
   * @since 3.1.0
   */
  fileName(
    options: {
      /**
       * Define how many extensions the file name should have.
       *
       * @default 1
       */
      extensionCount?: NumberOrRange;
    } = {}
  ): string {
      throw new Error("STUB");
  }

  /**
   * Returns a random file name with a given extension or a commonly used extension.
   *
   * @param extension The file extension to use. Empty string is considered to be not set.
   *
   * @example
   * faker.system.commonFileName() // 'dollar.jpg'
   * faker.system.commonFileName('txt') // 'global_borders_wyoming.txt'
   *
   * @since 3.1.0
   */
  commonFileName(extension?: string): string {
      throw new Error("STUB");
  }

  /**
   * Returns a mime-type.
   *
   * @example
   * faker.system.mimeType() // 'video/vnd.vivo'
   *
   * @since 3.1.0
   */
  mimeType(): string {
      throw new Error("STUB");
  }

  /**
   * Returns a commonly used file type.
   *
   * @example
   * faker.system.commonFileType() // 'audio'
   *
   * @since 3.1.0
   */
  commonFileType(): string {
      throw new Error("STUB");
  }

  /**
   * Returns a commonly used file extension.
   *
   * @example
   * faker.system.commonFileExt() // 'gif'
   *
   * @since 3.1.0
   */
  commonFileExt(): string {
      throw new Error("STUB");
  }

  /**
   * Returns a file type.
   *
   * @example
   * faker.system.fileType() // 'message'
   *
   * @since 3.1.0
   */
  fileType(): string {
      throw new Error("STUB");
  }

  /**
   * Returns a file extension.
   *
   * @param mimeType Valid [mime-type](https://github.com/jshttp/mime-db/blob/master/db.json)
   *
   * @example
   * faker.system.fileExt() // 'emf'
   * faker.system.fileExt('application/json') // 'json'
   *
   * @since 3.1.0
   */
  fileExt(mimeType?: string): string {
      throw new Error("STUB");
  }

  /**
   * Returns a directory path.
   *
   * @example
   * faker.system.directoryPath() // '/etc/mail'
   *
   * @since 3.1.0
   */
  directoryPath(): string {
      throw new Error("STUB");
  }

  /**
   * Returns a file path.
   *
   * @example
   * faker.system.filePath() // '/usr/local/src/money.dotx'
   *
   * @since 3.1.0
   */
  filePath(): string {
      throw new Error("STUB");
  }

  /**
   * Returns a [semantic version](https://semver.org).
   *
   * @example
   * faker.system.semver() // '1.15.2'
   *
   * @since 3.1.0
   */
  semver(): string {
      throw new Error("STUB");
  }

  /**
   * Returns a random [network interface](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/networking_guide/sec-understanding_the_predictable_network_interface_device_names).
   *
   * @param options The options to use.
   * @param options.interfaceType The interface type. Can be one of `en`, `wl`, `ww`.
   * @param options.interfaceSchema The interface schema. Can be one of `index`, `slot`, `mac`, `pci`.
   *
   * @example
   * faker.system.networkInterface() // 'enp0s3'
   * faker.system.networkInterface({ interfaceType: 'wl' }) // 'wlo1'
   * faker.system.networkInterface({ interfaceSchema: 'mac' }) // 'enx000c29c00000'
   * faker.system.networkInterface({ interfaceType: 'en', interfaceSchema: 'pci' }) // 'enp5s0f1d0'
   *
   * @since 7.4.0
   */
  networkInterface(
    options: {
      /**
       * The interface type. Can be one of `en`, `wl`, `ww`.
       *
       * @default faker.helpers.arrayElement(['en', 'wl', 'ww'])
       */
      interfaceType?: (typeof commonInterfaceTypes)[number];
      /**
       * The interface schema. Can be one of `index`, `slot`, `mac`, `pci`.
       *
       * @default faker.helpers.objectKey(['index' | 'slot' | 'mac' | 'pci'])
       */
      interfaceSchema?: keyof typeof commonInterfaceSchemas;
    } = {}
  ): string {
      throw new Error("STUB");
  }

  /**
   * Returns a random cron expression.
   *
   * @param options The optional options to use.
   * @param options.includeYear Whether to include a year in the generated expression. Defaults to `false`.
   * @param options.includeNonStandard Whether to include a `@yearly`, `@monthly`, `@daily`, etc text labels in the generated expression. Defaults to `false`.
   *
   * @example
   * faker.system.cron() // '45 23 * * 6'
   * faker.system.cron({ includeYear: true }) // '45 23 * * 6 2067'
   * faker.system.cron({ includeYear: false }) // '45 23 * * 6'
   * faker.system.cron({ includeNonStandard: false }) // '45 23 * * 6'
   * faker.system.cron({ includeNonStandard: true }) // '@yearly'
   *
   * @since 7.5.0
   */
  cron(
    options: {
      /**
       * Whether to include a year in the generated expression.
       *
       * @default false
       */
      includeYear?: boolean;
      /**
       * Whether to include a `@yearly`, `@monthly`, `@daily`, etc text labels in the generated expression.
       *
       * @default false
       */
      includeNonStandard?: boolean;
    } = {}
  ): string {
      throw new Error("STUB");
  }
}
