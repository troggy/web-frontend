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
 * @interface ClusterDiscussionAssociation
 */
export interface ClusterDiscussionAssociation {
    /**
     * 
     * @type {number}
     * @memberof ClusterDiscussionAssociation
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof ClusterDiscussionAssociation
     */
    readonly discussion: number;
    /**
     * 
     * @type {number}
     * @memberof ClusterDiscussionAssociation
     */
    readonly cluster: number;
}

export function ClusterDiscussionAssociationFromJSON(json: any): ClusterDiscussionAssociation {
    return ClusterDiscussionAssociationFromJSONTyped(json, false);
}

export function ClusterDiscussionAssociationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClusterDiscussionAssociation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'discussion': json['discussion'],
        'cluster': json['cluster'],
    };
}

export function ClusterDiscussionAssociationToJSON(value?: ClusterDiscussionAssociation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

