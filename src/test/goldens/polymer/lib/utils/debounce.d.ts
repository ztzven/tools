/// <reference path="boot.d.ts" />
/// <reference path="mixin.d.ts" />
/// <reference path="async.d.ts" />

declare namespace Polymer {

  class Debouncer {

    /**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param asyncModule Object with Async interface.
     * @param callback Callback to run.
     */
    setConfig(asyncModule: AsyncModule, callback: () => any): any;

    /**
     * Cancels an active debouncer and returns a reference to itself.
     */
    cancel(): any;

    /**
     * Flushes an active debouncer and returns a reference to itself.
     */
    flush(): any;

    /**
     * Returns true if the debouncer is active.
     *
     * @returns True if active.
     */
    isActive(): boolean;
  }
}
