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
    Conversation,
    ConversationFromJSON,
    ConversationToJSON,
    PaginatedConversationList,
    PaginatedConversationListFromJSON,
    PaginatedConversationListToJSON,
    PatchedConversation,
    PatchedConversationFromJSON,
    PatchedConversationToJSON,
} from '../models';

export interface ConversationsCreateRequest {
    conversation?: Conversation;
}

export interface ConversationsDestroyRequest {
    id: number;
}

export interface ConversationsListRequest {
    page?: number;
}

export interface ConversationsPartialUpdateRequest {
    id: number;
    patchedConversation?: PatchedConversation;
}

export interface ConversationsRetrieveRequest {
    id: number;
}

export interface ConversationsUpdateRequest {
    id: number;
    conversation?: Conversation;
}

/**
 * 
 */
export class ConversationsApi extends runtime.BaseAPI {

    /**
     */
    async conversationsCreateRaw(requestParameters: ConversationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Conversation>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/conversations/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConversationToJSON(requestParameters.conversation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationFromJSON(jsonValue));
    }

    /**
     */
    async conversationsCreate(requestParameters: ConversationsCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Conversation> {
        const response = await this.conversationsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async conversationsDestroyRaw(requestParameters: ConversationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling conversationsDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/conversations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async conversationsDestroy(requestParameters: ConversationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.conversationsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async conversationsListRaw(requestParameters: ConversationsListRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<PaginatedConversationList>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/conversations/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedConversationListFromJSON(jsonValue));
    }

    /**
     */
    async conversationsList(requestParameters: ConversationsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<PaginatedConversationList> {
        const response = await this.conversationsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async conversationsPartialUpdateRaw(requestParameters: ConversationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Conversation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling conversationsPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/conversations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedConversationToJSON(requestParameters.patchedConversation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationFromJSON(jsonValue));
    }

    /**
     */
    async conversationsPartialUpdate(requestParameters: ConversationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Conversation> {
        const response = await this.conversationsPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async conversationsRetrieveRaw(requestParameters: ConversationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Conversation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling conversationsRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/conversations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationFromJSON(jsonValue));
    }

    /**
     */
    async conversationsRetrieve(requestParameters: ConversationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Conversation> {
        const response = await this.conversationsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async conversationsUpdateRaw(requestParameters: ConversationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Conversation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling conversationsUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/conversations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ConversationToJSON(requestParameters.conversation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationFromJSON(jsonValue));
    }

    /**
     */
    async conversationsUpdate(requestParameters: ConversationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Conversation> {
        const response = await this.conversationsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
