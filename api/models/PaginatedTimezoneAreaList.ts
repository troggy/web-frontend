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
    TimezoneArea,
    TimezoneAreaFromJSON,
    TimezoneAreaFromJSONTyped,
    TimezoneAreaToJSON,
} from './TimezoneArea';

/**
 * 
 * @export
 * @interface PaginatedTimezoneAreaList
 */
export interface PaginatedTimezoneAreaList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedTimezoneAreaList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedTimezoneAreaList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedTimezoneAreaList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<TimezoneArea>}
     * @memberof PaginatedTimezoneAreaList
     */
    results?: Array<TimezoneArea>;
}

export function PaginatedTimezoneAreaListFromJSON(json: any): PaginatedTimezoneAreaList {
    return PaginatedTimezoneAreaListFromJSONTyped(json, false);
}

export function PaginatedTimezoneAreaListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedTimezoneAreaList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(TimezoneAreaFromJSON)),
    };
}

export function PaginatedTimezoneAreaListToJSON(value?: PaginatedTimezoneAreaList | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(TimezoneAreaToJSON)),
    };
}

