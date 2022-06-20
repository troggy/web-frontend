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
    SMSS,
    SMSSFromJSON,
    SMSSFromJSONTyped,
    SMSSToJSON,
} from './SMSS';

/**
 * 
 * @export
 * @interface PaginatedSMSSList
 */
export interface PaginatedSMSSList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedSMSSList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSMSSList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSMSSList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<SMSS>}
     * @memberof PaginatedSMSSList
     */
    results?: Array<SMSS>;
}

export function PaginatedSMSSListFromJSON(json: any): PaginatedSMSSList {
    return PaginatedSMSSListFromJSONTyped(json, false);
}

export function PaginatedSMSSListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedSMSSList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(SMSSFromJSON)),
    };
}

export function PaginatedSMSSListToJSON(value?: PaginatedSMSSList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(SMSSToJSON)),
    };
}

