/* tslint:disable */
/* eslint-disable */
/**
 * Couchers API
 * Couchers API documentation
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PatchedLanguage
 */
export interface PatchedLanguage {
    /**
     * 
     * @type {number}
     * @memberof PatchedLanguage
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedLanguage
     */
    readonly code?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedLanguage
     */
    name?: string;
}

export function PatchedLanguageFromJSON(json: any): PatchedLanguage {
    return PatchedLanguageFromJSONTyped(json, false);
}

export function PatchedLanguageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedLanguage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function PatchedLanguageToJSON(value?: PatchedLanguage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

