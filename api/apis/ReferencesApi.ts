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
    PaginatedReferenceList,
    PaginatedReferenceListFromJSON,
    PaginatedReferenceListToJSON,
    PatchedReference,
    PatchedReferenceFromJSON,
    PatchedReferenceToJSON,
    Reference,
    ReferenceFromJSON,
    ReferenceToJSON,
} from '../models';

export interface ReferencesCreateRequest {
    reference: Reference;
}

export interface ReferencesDestroyRequest {
    id: number;
}

export interface ReferencesListRequest {
    page?: number;
}

export interface ReferencesPartialUpdateRequest {
    id: number;
    patchedReference?: PatchedReference;
}

export interface ReferencesRetrieveRequest {
    id: number;
}

export interface ReferencesUpdateRequest {
    id: number;
    reference: Reference;
}

/**
 * 
 */
export class ReferencesApi extends runtime.BaseAPI {

    /**
     */
    async referencesCreateRaw(requestParameters: ReferencesCreateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Reference>> {
        if (requestParameters.reference === null || requestParameters.reference === undefined) {
            throw new runtime.RequiredError('reference','Required parameter requestParameters.reference was null or undefined when calling referencesCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/references/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReferenceToJSON(requestParameters.reference),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReferenceFromJSON(jsonValue));
    }

    /**
     */
    async referencesCreate(requestParameters: ReferencesCreateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Reference> {
        const response = await this.referencesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async referencesDestroyRaw(requestParameters: ReferencesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling referencesDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/references/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async referencesDestroy(requestParameters: ReferencesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.referencesDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async referencesListRaw(requestParameters: ReferencesListRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<PaginatedReferenceList>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/references/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedReferenceListFromJSON(jsonValue));
    }

    /**
     */
    async referencesList(requestParameters: ReferencesListRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<PaginatedReferenceList> {
        const response = await this.referencesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async referencesPartialUpdateRaw(requestParameters: ReferencesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Reference>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling referencesPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/references/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedReferenceToJSON(requestParameters.patchedReference),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReferenceFromJSON(jsonValue));
    }

    /**
     */
    async referencesPartialUpdate(requestParameters: ReferencesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Reference> {
        const response = await this.referencesPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async referencesRetrieveRaw(requestParameters: ReferencesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Reference>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling referencesRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/references/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReferenceFromJSON(jsonValue));
    }

    /**
     */
    async referencesRetrieve(requestParameters: ReferencesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Reference> {
        const response = await this.referencesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async referencesUpdateRaw(requestParameters: ReferencesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Reference>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling referencesUpdate.');
        }

        if (requestParameters.reference === null || requestParameters.reference === undefined) {
            throw new runtime.RequiredError('reference','Required parameter requestParameters.reference was null or undefined when calling referencesUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/references/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ReferenceToJSON(requestParameters.reference),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReferenceFromJSON(jsonValue));
    }

    /**
     */
    async referencesUpdate(requestParameters: ReferencesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Reference> {
        const response = await this.referencesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
