import type { StrapiDefaultTypeParams, StrapiPagination, StrapiParams } from '../common'

interface NotFoundPageRequest {
	data: {
		title: string
		description?: string
		seoTitle: string
		sitemap_exclude?: boolean
	}
}

interface NotFoundPageListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seotitle: string
	}
}

interface NotFoundPageListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seotitle: string
	}
}

interface NotFoundPageListResponse {
	data: NotFoundPageListResponseDataItem[]
	meta: {
		pagination: StrapiPagination
	}
}

interface NotFoundPageResponseDataObject {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seotitle: string
	}
}

interface NotFoundPageResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seotitle: string
	}
}

interface NotFoundPageResponse {
	data?: NotFoundPageResponseDataObject
	meta?: object
}

namespace NotFoundPage {
	/**
	 * No description
	 * @tags Not-found-page
	 * @name GetNotFoundPage
	 * @request GET:/not-found-page
	 * @secure
	 * @response `200` `NotFoundPageListResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetNotFoundPage {
		export type RequestParams = {}
		export type RequestQuery = StrapiParams
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = NotFoundPageListResponse
	}
	/**
	 * No description
	 * @tags Not-found-page
	 * @name PutNotFoundPage
	 * @request PUT:/not-found-page
	 * @secure
	 * @response `200` `NotFoundPageResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PutNotFoundPage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = NotFoundPageRequest
		export type RequestHeaders = {}
		export type ResponseBody = NotFoundPageResponse
	}
	/**
	 * No description
	 * @tags Not-found-page
	 * @name DeleteNotFoundPage
	 * @request DELETE:/not-found-page
	 * @secure
	 * @response `200` `number` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace DeleteNotFoundPage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = number
	}
}

export type {
	NotFoundPageRequest,
	NotFoundPageListResponseDataItem,
	NotFoundPageListResponseDataItemLocalized,
	NotFoundPageListResponse,
	NotFoundPageResponseDataObject,
	NotFoundPageResponseDataObjectLocalized,
	NotFoundPageResponse,
	NotFoundPage,
}
