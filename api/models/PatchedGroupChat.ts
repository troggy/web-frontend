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
 * @interface PatchedGroupChat
 */
export interface PatchedGroupChat {
    /**
     * 
     * @type {number}
     * @memberof PatchedGroupChat
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedGroupChat
     */
    readonly user?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedGroupChat
     */
    title?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedGroupChat
     */
    onlyAdminsInvite?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedGroupChat
     */
    readonly isDm?: boolean;
}

export function PatchedGroupChatFromJSON(json: any): PatchedGroupChat {
    return PatchedGroupChatFromJSONTyped(json, false);
}

export function PatchedGroupChatFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedGroupChat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'onlyAdminsInvite': !exists(json, 'only_admins_invite') ? undefined : json['only_admins_invite'],
        'isDm': !exists(json, 'is_dm') ? undefined : json['is_dm'],
    };
}

export function PatchedGroupChatToJSON(value?: PatchedGroupChat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'only_admins_invite': value.onlyAdminsInvite,
    };
}

