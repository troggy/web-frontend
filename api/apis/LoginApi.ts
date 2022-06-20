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
    Token,
    TokenFromJSON,
    TokenToJSON,
    TokenCreate,
    TokenCreateFromJSON,
    TokenCreateToJSON,
} from '../models';

export interface LoginCreateRequest {
    tokenCreate?: TokenCreate;
}

/**
 * 
 */
export class LoginApi extends runtime.BaseAPI {

    /**
     * Use this endpoint to obtain user authentication token.
     */
    async loginCreateRaw(requestParameters: LoginCreateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Token>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/login/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TokenCreateToJSON(requestParameters.tokenCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     * Use this endpoint to obtain user authentication token.
     */
    async loginCreate(requestParameters: LoginCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Token> {
        const response = await this.loginCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
