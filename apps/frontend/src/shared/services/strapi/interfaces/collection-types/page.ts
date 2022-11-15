import type { StrapiDefaultTypeParams, StrapiPagination, StrapiParams } from '../common'
import type { SharedSeoComponent } from '../components/shared'

interface PageRequest {
	data: {
		seo: SharedSeoComponent
		title: string
		slug: string
		sitemap_exclude?: boolean
	}
}

interface PageListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		seo?: SharedSeoComponent
		title: string
		slug: string
	}
}

interface PageListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		seo?: SharedSeoComponent
		title: string
		slug: string
	}
}

interface PageListResponse {
	data: PageListResponseDataItem[]
	meta: {
		pagination: StrapiPagination
	}
}

interface PageResponseDataObject {
	id: number
	attributes: StrapiDefaultTypeParams & {
		seo?: SharedSeoComponent
		title: string
		slug: string
	}
}

interface PageResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		seo?: SharedSeoComponent
		title: string
		slug: string
	}
}

interface PageResponse {
	data?: PageResponseDataObject
	meta?: object
}

namespace Page {
	/**
	 * No description
	 * @tags Page
	 * @name GetPages
	 * @request GET:/pages
	 * @secure
	 * @response `200` `PageListResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetPages {
		export type RequestParams = {}
		export type RequestQuery = StrapiParams
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = PageListResponse
	}
	/**
	 * No description
	 * @tags Page
	 * @name PostPages
	 * @request POST:/pages
	 * @secure
	 * @response `200` `PageResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostPages {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = PageRequest
		export type RequestHeaders = {}
		export type ResponseBody = PageResponse
	}
	/**
	 * No description
	 * @tags Page
	 * @name GetPagesId
	 * @request GET:/pages/{id}
	 * @secure
	 * @response `200` `PageResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetPagesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = PageResponse
	}
	/**
	 * No description
	 * @tags Page
	 * @name PutPagesId
	 * @request PUT:/pages/{id}
	 * @secure
	 * @response `200` `PageResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PutPagesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = PageRequest
		export type RequestHeaders = {}
		export type ResponseBody = PageResponse
	}
	/**
	 * No description
	 * @tags Page
	 * @name DeletePagesId
	 * @request DELETE:/pages/{id}
	 * @secure
	 * @response `200` `number` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace DeletePagesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = number
	}
}

export type {
	PageRequest,
	PageListResponseDataItem,
	PageListResponseDataItemLocalized,
	PageListResponse,
	PageResponseDataObject,
	PageResponseDataObjectLocalized,
	PageResponse,
	Page,
}
