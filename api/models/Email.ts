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
 * @interface Email
 */
export interface Email {
    /**
     * 
     * @type {string}
     * @memberof Email
     */
    readonly id: string;
    /**
     * 
     * @type {Date}
     * @memberof Email
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Email
     */
    readonly senderName: string;
    /**
     * 
     * @type {string}
     * @memberof Email
     */
    readonly senderEmail: string;
    /**
     * 
     * @type {string}
     * @memberof Email
     */
    readonly recipient: string;
    /**
     * 
     * @type {string}
     * @memberof Email
     */
    readonly subject: string;
    /**
     * 
     * @type {string}
     * @memberof Email
     */
    readonly plain: string;
    /**
     * 
     * @type {string}
     * @memberof Email
     */
    readonly html: string;
}

export function EmailFromJSON(json: any): Email {
    return EmailFromJSONTyped(json, false);
}

export function EmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): Email {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'senderName': json['sender_name'],
        'senderEmail': json['sender_email'],
        'recipient': json['recipient'],
        'subject': json['subject'],
        'plain': json['plain'],
        'html': json['html'],
    };
}

export function EmailToJSON(value?: Email | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

