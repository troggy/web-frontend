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
    ClusterPageAssociation,
    ClusterPageAssociationFromJSON,
    ClusterPageAssociationToJSON,
    PaginatedClusterPageAssociationList,
    PaginatedClusterPageAssociationListFromJSON,
    PaginatedClusterPageAssociationListToJSON,
    PatchedClusterPageAssociation,
    PatchedClusterPageAssociationFromJSON,
    PatchedClusterPageAssociationToJSON,
} from '../models';

export interface ClusterPageAssociationsCreateRequest {
    clusterPageAssociation?: ClusterPageAssociation;
}

export interface ClusterPageAssociationsDestroyRequest {
    id: number;
}

export interface ClusterPageAssociationsListRequest {
    page?: number;
}

export interface ClusterPageAssociationsPartialUpdateRequest {
    id: number;
    patchedClusterPageAssociation?: PatchedClusterPageAssociation;
}

export interface ClusterPageAssociationsRetrieveRequest {
    id: number;
}

export interface ClusterPageAssociationsUpdateRequest {
    id: number;
    clusterPageAssociation?: ClusterPageAssociation;
}

/**
 * 
 */
export class ClusterPageAssociationsApi extends runtime.BaseAPI {

    /**
     */
    async clusterPageAssociationsCreateRaw(requestParameters: ClusterPageAssociationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ClusterPageAssociation>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_page_associations/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ClusterPageAssociationToJSON(requestParameters.clusterPageAssociation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClusterPageAssociationFromJSON(jsonValue));
    }

    /**
     */
    async clusterPageAssociationsCreate(requestParameters: ClusterPageAssociationsCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ClusterPageAssociation> {
        const response = await this.clusterPageAssociationsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async clusterPageAssociationsDestroyRaw(requestParameters: ClusterPageAssociationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling clusterPageAssociationsDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_page_associations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async clusterPageAssociationsDestroy(requestParameters: ClusterPageAssociationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.clusterPageAssociationsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async clusterPageAssociationsListRaw(requestParameters: ClusterPageAssociationsListRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<PaginatedClusterPageAssociationList>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_page_associations/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedClusterPageAssociationListFromJSON(jsonValue));
    }

    /**
     */
    async clusterPageAssociationsList(requestParameters: ClusterPageAssociationsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<PaginatedClusterPageAssociationList> {
        const response = await this.clusterPageAssociationsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async clusterPageAssociationsPartialUpdateRaw(requestParameters: ClusterPageAssociationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ClusterPageAssociation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling clusterPageAssociationsPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_page_associations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedClusterPageAssociationToJSON(requestParameters.patchedClusterPageAssociation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClusterPageAssociationFromJSON(jsonValue));
    }

    /**
     */
    async clusterPageAssociationsPartialUpdate(requestParameters: ClusterPageAssociationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ClusterPageAssociation> {
        const response = await this.clusterPageAssociationsPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async clusterPageAssociationsRetrieveRaw(requestParameters: ClusterPageAssociationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ClusterPageAssociation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling clusterPageAssociationsRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_page_associations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClusterPageAssociationFromJSON(jsonValue));
    }

    /**
     */
    async clusterPageAssociationsRetrieve(requestParameters: ClusterPageAssociationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ClusterPageAssociation> {
        const response = await this.clusterPageAssociationsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async clusterPageAssociationsUpdateRaw(requestParameters: ClusterPageAssociationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ClusterPageAssociation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling clusterPageAssociationsUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/cluster_page_associations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ClusterPageAssociationToJSON(requestParameters.clusterPageAssociation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClusterPageAssociationFromJSON(jsonValue));
    }

    /**
     */
    async clusterPageAssociationsUpdate(requestParameters: ClusterPageAssociationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ClusterPageAssociation> {
        const response = await this.clusterPageAssociationsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
