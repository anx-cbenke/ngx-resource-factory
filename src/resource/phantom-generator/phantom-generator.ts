import {ResourceInstance} from "../resource-instance";


/**
 * Interface defining the signature of the phantom ID generator.
 */
export interface PhantomGenerator {

    /**
     * Generates a new phantom ID.
     * @param {ResourceInstance} instance Instance to generate phantom ID for.
     * @returns {string} New phantom ID.
     */
    generate: (instance: ResourceInstance) => string;

    /**
     * Checks if the given ID was a phantom ID generates by this instance.
     * @param {string} pk ID to check.
     * @returns {boolean} Is phantom ID generated by this instance.
     */
    is: (pk: string) => boolean;

}