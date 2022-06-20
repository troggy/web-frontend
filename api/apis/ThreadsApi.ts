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
    PaginatedThreadList,
    PaginatedThreadListFromJSON,
    PaginatedThreadListToJSON,
    PatchedThread,
    PatchedThreadFromJSON,
    PatchedThreadToJSON,
    Thread,
    ThreadFromJSON,
    ThreadToJSON,
} from '../models';

export interface ThreadsCreateRequest {
    thread?: Thread;
}

export interface ThreadsDestroyRequest {
    id: number;
}

export interface ThreadsListRequest {
    page?: number;
}

export interface ThreadsPartialUpdateRequest {
    id: number;
    patchedThread?: PatchedThread;
}

export interface ThreadsRetrieveRequest {
    id: number;
}

export interface ThreadsUpdateRequest {
    id: number;
    thread?: Thread;
}

/**
 * 
 */
export class ThreadsApi extends runtime.BaseAPI {

    /**
     */
    async threadsCreateRaw(requestParameters: ThreadsCreateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Thread>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/threads/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ThreadToJSON(requestParameters.thread),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThreadFromJSON(jsonValue));
    }

    /**
     */
    async threadsCreate(requestParameters: ThreadsCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Thread> {
        const response = await this.threadsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async threadsDestroyRaw(requestParameters: ThreadsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling threadsDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/threads/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async threadsDestroy(requestParameters: ThreadsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.threadsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async threadsListRaw(requestParameters: ThreadsListRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<PaginatedThreadList>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/threads/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedThreadListFromJSON(jsonValue));
    }

    /**
     */
    async threadsList(requestParameters: ThreadsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<PaginatedThreadList> {
        const response = await this.threadsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async threadsPartialUpdateRaw(requestParameters: ThreadsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Thread>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling threadsPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/threads/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedThreadToJSON(requestParameters.patchedThread),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThreadFromJSON(jsonValue));
    }

    /**
     */
    async threadsPartialUpdate(requestParameters: ThreadsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Thread> {
        const response = await this.threadsPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async threadsRetrieveRaw(requestParameters: ThreadsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Thread>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling threadsRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/threads/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThreadFromJSON(jsonValue));
    }

    /**
     */
    async threadsRetrieve(requestParameters: ThreadsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Thread> {
        const response = await this.threadsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async threadsUpdateRaw(requestParameters: ThreadsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Thread>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling threadsUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/threads/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ThreadToJSON(requestParameters.thread),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThreadFromJSON(jsonValue));
    }

    /**
     */
    async threadsUpdate(requestParameters: ThreadsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Thread> {
        const response = await this.threadsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
