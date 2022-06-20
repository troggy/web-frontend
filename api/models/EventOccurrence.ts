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
 * @interface EventOccurrence
 */
export interface EventOccurrence {
    /**
     * 
     * @type {number}
     * @memberof EventOccurrence
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof EventOccurrence
     */
    readonly event: number;
    /**
     * 
     * @type {number}
     * @memberof EventOccurrence
     */
    readonly user: number;
    /**
     * 
     * @type {string}
     * @memberof EventOccurrence
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof EventOccurrence
     */
    photoKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventOccurrence
     */
    geom?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventOccurrence
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventOccurrence
     */
    link?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventOccurrence
     */
    during?: string;
    /**
     * 
     * @type {Date}
     * @memberof EventOccurrence
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof EventOccurrence
     */
    readonly updatedAt: Date;
}

export function EventOccurrenceFromJSON(json: any): EventOccurrence {
    return EventOccurrenceFromJSONTyped(json, false);
}

export function EventOccurrenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventOccurrence {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'event': json['event'],
        'user': json['user'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'photoKey': !exists(json, 'photo_key') ? undefined : json['photo_key'],
        'geom': !exists(json, 'geom') ? undefined : json['geom'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'during': !exists(json, 'during') ? undefined : json['during'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function EventOccurrenceToJSON(value?: EventOccurrence | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content,
        'photo_key': value.photoKey,
        'geom': value.geom,
        'address': value.address,
        'link': value.link,
        'during': value.during,
    };
}

