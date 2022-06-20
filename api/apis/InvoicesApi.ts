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
    Invoice,
    InvoiceFromJSON,
    InvoiceToJSON,
    PaginatedInvoiceList,
    PaginatedInvoiceListFromJSON,
    PaginatedInvoiceListToJSON,
    PatchedInvoice,
    PatchedInvoiceFromJSON,
    PatchedInvoiceToJSON,
} from '../models';

export interface InvoicesCreateRequest {
    invoice?: Invoice;
}

export interface InvoicesDestroyRequest {
    id: number;
}

export interface InvoicesListRequest {
    page?: number;
}

export interface InvoicesPartialUpdateRequest {
    id: number;
    patchedInvoice?: PatchedInvoice;
}

export interface InvoicesRetrieveRequest {
    id: number;
}

export interface InvoicesUpdateRequest {
    id: number;
    invoice?: Invoice;
}

/**
 * 
 */
export class InvoicesApi extends runtime.BaseAPI {

    /**
     */
    async invoicesCreateRaw(requestParameters: InvoicesCreateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Invoice>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/invoices/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceToJSON(requestParameters.invoice),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceFromJSON(jsonValue));
    }

    /**
     */
    async invoicesCreate(requestParameters: InvoicesCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Invoice> {
        const response = await this.invoicesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async invoicesDestroyRaw(requestParameters: InvoicesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling invoicesDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/invoices/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async invoicesDestroy(requestParameters: InvoicesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.invoicesDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async invoicesListRaw(requestParameters: InvoicesListRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<PaginatedInvoiceList>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/invoices/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedInvoiceListFromJSON(jsonValue));
    }

    /**
     */
    async invoicesList(requestParameters: InvoicesListRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<PaginatedInvoiceList> {
        const response = await this.invoicesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async invoicesPartialUpdateRaw(requestParameters: InvoicesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Invoice>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling invoicesPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/invoices/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedInvoiceToJSON(requestParameters.patchedInvoice),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceFromJSON(jsonValue));
    }

    /**
     */
    async invoicesPartialUpdate(requestParameters: InvoicesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Invoice> {
        const response = await this.invoicesPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async invoicesRetrieveRaw(requestParameters: InvoicesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Invoice>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling invoicesRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/invoices/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceFromJSON(jsonValue));
    }

    /**
     */
    async invoicesRetrieve(requestParameters: InvoicesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Invoice> {
        const response = await this.invoicesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async invoicesUpdateRaw(requestParameters: InvoicesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Invoice>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling invoicesUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/invoices/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceToJSON(requestParameters.invoice),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceFromJSON(jsonValue));
    }

    /**
     */
    async invoicesUpdate(requestParameters: InvoicesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Invoice> {
        const response = await this.invoicesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
