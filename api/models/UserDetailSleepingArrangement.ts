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

import {
    NullEnum,
    NullEnumFromJSON,
    NullEnumFromJSONTyped,
    NullEnumToJSON,
} from './NullEnum';
import {
    SleepingArrangementEnum,
    SleepingArrangementEnumFromJSON,
    SleepingArrangementEnumFromJSONTyped,
    SleepingArrangementEnumToJSON,
} from './SleepingArrangementEnum';

/**
 * @type UserDetailSleepingArrangement
 * 
 * @export
 */
export type UserDetailSleepingArrangement = NullEnum | SleepingArrangementEnum;

export function UserDetailSleepingArrangementFromJSON(json: any): UserDetailSleepingArrangement {
    return UserDetailSleepingArrangementFromJSONTyped(json, false);
}

export function UserDetailSleepingArrangementFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDetailSleepingArrangement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...NullEnumFromJSONTyped(json, true), ...SleepingArrangementEnumFromJSONTyped(json, true) };
}

export function UserDetailSleepingArrangementToJSON(value?: UserDetailSleepingArrangement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return { ...NullEnumToJSON(value), ...SleepingArrangementEnumToJSON(value) };
}

