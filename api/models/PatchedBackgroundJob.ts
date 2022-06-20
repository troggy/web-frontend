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
    StateEnum,
    StateEnumFromJSON,
    StateEnumFromJSONTyped,
    StateEnumToJSON,
} from './StateEnum';
import {
    TypeBd6Enum,
    TypeBd6EnumFromJSON,
    TypeBd6EnumFromJSONTyped,
    TypeBd6EnumToJSON,
} from './TypeBd6Enum';

/**
 * 
 * @export
 * @interface PatchedBackgroundJob
 */
export interface PatchedBackgroundJob {
    /**
     * 
     * @type {number}
     * @memberof PatchedBackgroundJob
     */
    readonly id?: number;
    /**
     * 
     * @type {TypeBd6Enum}
     * @memberof PatchedBackgroundJob
     */
    type?: TypeBd6Enum;
    /**
     * 
     * @type {StateEnum}
     * @memberof PatchedBackgroundJob
     */
    state?: StateEnum;
    /**
     * 
     * @type {Date}
     * @memberof PatchedBackgroundJob
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedBackgroundJob
     */
    readonly nextAttemptAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof PatchedBackgroundJob
     */
    tryCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedBackgroundJob
     */
    maxTries?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedBackgroundJob
     */
    readonly payload?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedBackgroundJob
     */
    failureInfo?: string | null;
}

export function PatchedBackgroundJobFromJSON(json: any): PatchedBackgroundJob {
    return PatchedBackgroundJobFromJSONTyped(json, false);
}

export function PatchedBackgroundJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedBackgroundJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : TypeBd6EnumFromJSON(json['type']),
        'state': !exists(json, 'state') ? undefined : StateEnumFromJSON(json['state']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'nextAttemptAt': !exists(json, 'next_attempt_at') ? undefined : (new Date(json['next_attempt_at'])),
        'tryCount': !exists(json, 'try_count') ? undefined : json['try_count'],
        'maxTries': !exists(json, 'max_tries') ? undefined : json['max_tries'],
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
        'failureInfo': !exists(json, 'failure_info') ? undefined : json['failure_info'],
    };
}

export function PatchedBackgroundJobToJSON(value?: PatchedBackgroundJob | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': TypeBd6EnumToJSON(value.type),
        'state': StateEnumToJSON(value.state),
        'try_count': value.tryCount,
        'max_tries': value.maxTries,
        'failure_info': value.failureInfo,
    };
}

