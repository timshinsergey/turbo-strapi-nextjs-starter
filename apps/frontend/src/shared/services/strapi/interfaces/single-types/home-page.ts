import type { StrapiDefaultTypeParams, StrapiPagination, StrapiParams } from '../common'
import type { SharedSeoComponent } from '../components/shared'

interface HomePageRequest {
	data: {
		seo: SharedSeoComponent
		sitemap_exclude?: boolean
	}
}

interface HomePageListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		seo?: SharedSeoComponent
	}
}

interface HomePageListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		seo?: SharedSeoComponent
	}
}

interface HomePageListResponse {
	data: HomePageListResponseDataItem[]
	meta: {
		pagination: StrapiPagination
	}
}

interface HomePageResponseDataObject {
	id: number
	attributes: StrapiDefaultTypeParams & {
		seo?: SharedSeoComponent
	}
}

interface HomePageResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		seo?: SharedSeoComponent
	}
}

interface HomePageResponse {
	data?: HomePageResponseDataObject
	meta?: object
}

namespace HomePage {
	/**
	 * No description
	 * @tags Home-page
	 * @name GetHomePage
	 * @request GET:/home-page
	 * @secure
	 * @response `200` `HomePageListResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetHomePage {
		export type RequestParams = {}
		export type RequestQuery = StrapiParams
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = HomePageListResponse
	}
	/**
	 * No description
	 * @tags Home-page
	 * @name PutHomePage
	 * @request PUT:/home-page
	 * @secure
	 * @response `200` `HomePageResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PutHomePage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = HomePageRequest
		export type RequestHeaders = {}
		export type ResponseBody = HomePageResponse
	}
	/**
	 * No description
	 * @tags Home-page
	 * @name DeleteHomePage
	 * @request DELETE:/home-page
	 * @secure
	 * @response `200` `number` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace DeleteHomePage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = number
	}
}

export type {
	HomePageRequest,
	HomePageListResponseDataItem,
	HomePageListResponseDataItemLocalized,
	HomePageListResponse,
	HomePageResponseDataObject,
	HomePageResponseDataObjectLocalized,
	HomePageResponse,
	HomePage,
}
