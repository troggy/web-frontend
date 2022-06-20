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
 * @interface TokenCreate
 */
export interface TokenCreate {
    /**
     * 
     * @type {string}
     * @memberof TokenCreate
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenCreate
     */
    email?: string;
}

export function TokenCreateFromJSON(json: any): TokenCreate {
    return TokenCreateFromJSONTyped(json, false);
}

export function TokenCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': !exists(json, 'password') ? undefined : json['password'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function TokenCreateToJSON(value?: TokenCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password': value.password,
        'email': value.email,
    };
}

