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
    AccountDeletionReason,
    AccountDeletionReasonFromJSON,
    AccountDeletionReasonFromJSONTyped,
    AccountDeletionReasonToJSON,
} from './AccountDeletionReason';

/**
 * 
 * @export
 * @interface PaginatedAccountDeletionReasonList
 */
export interface PaginatedAccountDeletionReasonList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedAccountDeletionReasonList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAccountDeletionReasonList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAccountDeletionReasonList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<AccountDeletionReason>}
     * @memberof PaginatedAccountDeletionReasonList
     */
    results?: Array<AccountDeletionReason>;
}

export function PaginatedAccountDeletionReasonListFromJSON(json: any): PaginatedAccountDeletionReasonList {
    return PaginatedAccountDeletionReasonListFromJSONTyped(json, false);
}

export function PaginatedAccountDeletionReasonListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedAccountDeletionReasonList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(AccountDeletionReasonFromJSON)),
    };
}

export function PaginatedAccountDeletionReasonListToJSON(value?: PaginatedAccountDeletionReasonList | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(AccountDeletionReasonToJSON)),
    };
}

