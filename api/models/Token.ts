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
import {
    UserDetail,
    UserDetailFromJSON,
    UserDetailFromJSONTyped,
    UserDetailToJSON,
} from './UserDetail';

/**
 * 
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    authToken: string;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    readonly userId: number;
    /**
     * 
     * @type {UserDetail}
     * @memberof Token
     */
    user: UserDetail;
}

export function TokenFromJSON(json: any): Token {
    return TokenFromJSONTyped(json, false);
}

export function TokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): Token {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authToken': json['auth_token'],
        'userId': json['user_id'],
        'user': UserDetailFromJSON(json['user']),
    };
}

export function TokenToJSON(value?: Token | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auth_token': value.authToken,
        'user': UserDetailToJSON(value.user),
    };
}

