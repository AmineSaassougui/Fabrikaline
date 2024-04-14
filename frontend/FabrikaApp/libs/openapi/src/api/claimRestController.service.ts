/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { Claim } from '../model/claim';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ClaimRestControllerService {

    protected basePath = 'http://localhost:8083';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param currentPos 
     * @param step 
     * @param searchCriteria 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public advancedSearchClaim(currentPos?: number, step?: number, searchCriteria?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<Array<Claim>>;
    public advancedSearchClaim(currentPos?: number, step?: number, searchCriteria?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Array<Claim>>>;
    public advancedSearchClaim(currentPos?: number, step?: number, searchCriteria?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Array<Claim>>>;
    public advancedSearchClaim(currentPos?: number, step?: number, searchCriteria?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (currentPos !== undefined && currentPos !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>currentPos, 'currentPos');
        }
        if (step !== undefined && step !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>step, 'step');
        }
        if (searchCriteria !== undefined && searchCriteria !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>searchCriteria, 'searchCriteria');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/Claim/advancedSearch`;
        return this.httpClient.request<Array<Claim>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteClaim(id: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext, transferCache?: boolean}): Observable<any>;
    public deleteClaim(id: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
    public deleteClaim(id: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<any>>;
    public deleteClaim(id: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined, context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteClaim.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/Claim/Delete/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}`;
        return this.httpClient.request<any>('delete', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllClaim(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Array<Claim>>;
    public getAllClaim(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Array<Claim>>>;
    public getAllClaim(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Array<Claim>>>;
    public getAllClaim(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/Claim/GetAll`;
        return this.httpClient.request<Array<Claim>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loadClaim(id: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Claim>;
    public loadClaim(id: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Claim>>;
    public loadClaim(id: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Claim>>;
    public loadClaim(id: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling loadClaim.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/Claim/Load/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}`;
        return this.httpClient.request<Claim>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param entities 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveAllClaim(entities: Array<Claim>, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<Array<Claim>>;
    public saveAllClaim(entities: Array<Claim>, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Array<Claim>>>;
    public saveAllClaim(entities: Array<Claim>, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Array<Claim>>>;
    public saveAllClaim(entities: Array<Claim>, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (entities === null || entities === undefined) {
            throw new Error('Required parameter entities was null or undefined when calling saveAllClaim.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (entities) {
            entities.forEach((element) => {
                localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                  <any>element, 'entities');
            })
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/Claim/SaveAll`;
        return this.httpClient.request<Array<Claim>>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param orderId 
     * @param userId 
     * @param complainttypeId 
     * @param complaintcategoryId 
     * @param claim 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveClaim(orderId: number, userId: number, complainttypeId: number, complaintcategoryId: number, claim: Claim, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<Claim>;
    public saveClaim(orderId: number, userId: number, complainttypeId: number, complaintcategoryId: number, claim: Claim, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Claim>>;
    public saveClaim(orderId: number, userId: number, complainttypeId: number, complaintcategoryId: number, claim: Claim, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Claim>>;
    public saveClaim(orderId: number, userId: number, complainttypeId: number, complaintcategoryId: number, claim: Claim, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling saveClaim.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling saveClaim.');
        }
        if (complainttypeId === null || complainttypeId === undefined) {
            throw new Error('Required parameter complainttypeId was null or undefined when calling saveClaim.');
        }
        if (complaintcategoryId === null || complaintcategoryId === undefined) {
            throw new Error('Required parameter complaintcategoryId was null or undefined when calling saveClaim.');
        }
        if (claim === null || claim === undefined) {
            throw new Error('Required parameter claim was null or undefined when calling saveClaim.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/Claim/save/${this.configuration.encodeParam({name: "orderId", value: orderId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}/${this.configuration.encodeParam({name: "userId", value: userId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}/${this.configuration.encodeParam({name: "complainttypeId", value: complainttypeId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}/${this.configuration.encodeParam({name: "complaintcategoryId", value: complaintcategoryId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}`;
        return this.httpClient.request<Claim>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: claim,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

}
