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
    PaginatedSMSSList,
    PaginatedSMSSListFromJSON,
    PaginatedSMSSListToJSON,
    PatchedSMSS,
    PatchedSMSSFromJSON,
    PatchedSMSSToJSON,
    SMSS,
    SMSSFromJSON,
    SMSSToJSON,
} from '../models';

export interface SmssCreateRequest {
    sMSS?: SMSS;
}

export interface SmssDestroyRequest {
    id: number;
}

export interface SmssListRequest {
    page?: number;
}

export interface SmssPartialUpdateRequest {
    id: number;
    patchedSMSS?: PatchedSMSS;
}

export interface SmssRetrieveRequest {
    id: number;
}

export interface SmssUpdateRequest {
    id: number;
    sMSS?: SMSS;
}

/**
 * 
 */
export class SmssApi extends runtime.BaseAPI {

    /**
     */
    async smssCreateRaw(requestParameters: SmssCreateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<SMSS>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/smss/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SMSSToJSON(requestParameters.sMSS),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SMSSFromJSON(jsonValue));
    }

    /**
     */
    async smssCreate(requestParameters: SmssCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<SMSS> {
        const response = await this.smssCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async smssDestroyRaw(requestParameters: SmssDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling smssDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/smss/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async smssDestroy(requestParameters: SmssDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.smssDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async smssListRaw(requestParameters: SmssListRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<PaginatedSMSSList>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/smss/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedSMSSListFromJSON(jsonValue));
    }

    /**
     */
    async smssList(requestParameters: SmssListRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<PaginatedSMSSList> {
        const response = await this.smssListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async smssPartialUpdateRaw(requestParameters: SmssPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<SMSS>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling smssPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/smss/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedSMSSToJSON(requestParameters.patchedSMSS),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SMSSFromJSON(jsonValue));
    }

    /**
     */
    async smssPartialUpdate(requestParameters: SmssPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<SMSS> {
        const response = await this.smssPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async smssRetrieveRaw(requestParameters: SmssRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<SMSS>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling smssRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/smss/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SMSSFromJSON(jsonValue));
    }

    /**
     */
    async smssRetrieve(requestParameters: SmssRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<SMSS> {
        const response = await this.smssRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async smssUpdateRaw(requestParameters: SmssUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<SMSS>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling smssUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/smss/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SMSSToJSON(requestParameters.sMSS),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SMSSFromJSON(jsonValue));
    }

    /**
     */
    async smssUpdate(requestParameters: SmssUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<SMSS> {
        const response = await this.smssUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
