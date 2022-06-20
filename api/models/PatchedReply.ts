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
 * @interface PatchedReply
 */
export interface PatchedReply {
    /**
     * 
     * @type {number}
     * @memberof PatchedReply
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedReply
     */
    readonly user?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedReply
     */
    readonly comment?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedReply
     */
    content?: string;
    /**
     * 
     * @type {Date}
     * @memberof PatchedReply
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedReply
     */
    deletedAt?: Date | null;
}

export function PatchedReplyFromJSON(json: any): PatchedReply {
    return PatchedReplyFromJSONTyped(json, false);
}

export function PatchedReplyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedReply {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'deletedAt': !exists(json, 'deleted_at') ? undefined : (json['deleted_at'] === null ? null : new Date(json['deleted_at'])),
    };
}

export function PatchedReplyToJSON(value?: PatchedReply | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content,
        'deleted_at': value.deletedAt === undefined ? undefined : (value.deletedAt === null ? null : value.deletedAt.toISOString()),
    };
}

