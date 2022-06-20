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


import * as runtime from '../runtime';
import {
    ClusterDiscussionAssociation,
    ClusterDiscussionAssociationFromJSON,
    ClusterDiscussionAssociationToJSON,
    PaginatedClusterDiscussionAssociationList,
    PaginatedClusterDiscussionAssociationListFromJSON,
    PaginatedClusterDiscussionAssociationListToJSON,
    PatchedClusterDiscussionAssociation,
    PatchedClusterDiscussionAssociationFromJSON,
    PatchedClusterDiscussionAssociationToJSON,
} from '../models';

export interface ClusterDiscussionAssociationsCreateRequest {
    clusterDiscussionAssociation?: ClusterDiscussionAssociation;
}

export interface ClusterDiscussionAssociationsDestroyRequest {
    id: number;
}

export interface ClusterDiscussionAssociationsListRequest {
    page?: number;
}

export interface ClusterDiscussionAssociationsPartialUpdateRequest {
    id: number;
    patchedClusterDiscussionAssociation?: PatchedClusterDiscussionAssociation;
}

export interface ClusterDiscussionAssociationsRetrieveRequest {
    id: number;
}

export interface ClusterDiscussionAssociationsUpdateRequest {
    id: number;
    clusterDiscussionAssociation?: ClusterDiscussionAssociation;
}

/**
 * 
 */
export class ClusterDiscussionAssociationsApi extends runtime.BaseAPI {

    /**
     */
    async clusterDiscussionAssociationsCreateRaw(requestParameters: ClusterDiscussionAssociationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ClusterDiscussionAssociation>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_discussion_associations/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ClusterDiscussionAssociationToJSON(requestParameters.clusterDiscussionAssociation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClusterDiscussionAssociationFromJSON(jsonValue));
    }

    /**
     */
    async clusterDiscussionAssociationsCreate(requestParameters: ClusterDiscussionAssociationsCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ClusterDiscussionAssociation> {
        const response = await this.clusterDiscussionAssociationsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async clusterDiscussionAssociationsDestroyRaw(requestParameters: ClusterDiscussionAssociationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling clusterDiscussionAssociationsDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_discussion_associations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async clusterDiscussionAssociationsDestroy(requestParameters: ClusterDiscussionAssociationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.clusterDiscussionAssociationsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async clusterDiscussionAssociationsListRaw(requestParameters: ClusterDiscussionAssociationsListRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<PaginatedClusterDiscussionAssociationList>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_discussion_associations/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedClusterDiscussionAssociationListFromJSON(jsonValue));
    }

    /**
     */
    async clusterDiscussionAssociationsList(requestParameters: ClusterDiscussionAssociationsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<PaginatedClusterDiscussionAssociationList> {
        const response = await this.clusterDiscussionAssociationsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async clusterDiscussionAssociationsPartialUpdateRaw(requestParameters: ClusterDiscussionAssociationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ClusterDiscussionAssociation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling clusterDiscussionAssociationsPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_discussion_associations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedClusterDiscussionAssociationToJSON(requestParameters.patchedClusterDiscussionAssociation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClusterDiscussionAssociationFromJSON(jsonValue));
    }

    /**
     */
    async clusterDiscussionAssociationsPartialUpdate(requestParameters: ClusterDiscussionAssociationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ClusterDiscussionAssociation> {
        const response = await this.clusterDiscussionAssociationsPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async clusterDiscussionAssociationsRetrieveRaw(requestParameters: ClusterDiscussionAssociationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ClusterDiscussionAssociation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling clusterDiscussionAssociationsRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_discussion_associations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClusterDiscussionAssociationFromJSON(jsonValue));
    }

    /**
     */
    async clusterDiscussionAssociationsRetrieve(requestParameters: ClusterDiscussionAssociationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ClusterDiscussionAssociation> {
        const response = await this.clusterDiscussionAssociationsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async clusterDiscussionAssociationsUpdateRaw(requestParameters: ClusterDiscussionAssociationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ClusterDiscussionAssociation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling clusterDiscussionAssociationsUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_discussion_associations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ClusterDiscussionAssociationToJSON(requestParameters.clusterDiscussionAssociation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClusterDiscussionAssociationFromJSON(jsonValue));
    }

    /**
     */
    async clusterDiscussionAssociationsUpdate(requestParameters: ClusterDiscussionAssociationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ClusterDiscussionAssociation> {
        const response = await this.clusterDiscussionAssociationsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
