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
 * @interface PageVersion
 */
export interface PageVersion {
    /**
     * 
     * @type {number}
     * @memberof PageVersion
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof PageVersion
     */
    readonly page: number;
    /**
     * 
     * @type {number}
     * @memberof PageVersion
     */
    readonly user: number;
    /**
     * 
     * @type {string}
     * @memberof PageVersion
     */
    readonly upload: string | null;
    /**
     * 
     * @type {string}
     * @memberof PageVersion
     */
    readonly title: string;
    /**
     * 
     * @type {string}
     * @memberof PageVersion
     */
    readonly content: string;
    /**
     * 
     * @type {string}
     * @memberof PageVersion
     */
    readonly address: string | null;
    /**
     * 
     * @type {string}
     * @memberof PageVersion
     */
    readonly geom: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PageVersion
     */
    readonly createdAt: Date;
}

export function PageVersionFromJSON(json: any): PageVersion {
    return PageVersionFromJSONTyped(json, false);
}

export function PageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'page': json['page'],
        'user': json['user'],
        'upload': json['upload'],
        'title': json['title'],
        'content': json['content'],
        'address': json['address'],
        'geom': json['geom'],
        'createdAt': (new Date(json['created_at'])),
    };
}

export function PageVersionToJSON(value?: PageVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

