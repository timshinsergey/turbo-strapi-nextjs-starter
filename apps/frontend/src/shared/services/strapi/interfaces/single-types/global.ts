import type {
	StrapiDefaultTypeParams,
	StrapiImage,
	StrapiPagination,
	StrapiParams,
} from '../common'
import type { GlobalFooterComponent } from '../components/global'
import type { SharedLinkComponent } from '../components/shared'

interface GlobalRequest {
	data: {
		socialMedia?: SharedLinkComponent[]
		/** @example "string or id" */
		logo: number | string
		footer: GlobalFooterComponent
		/** @example "string or id" */
		favicon: number | string
		sitemap_exclude?: boolean
	}
}

interface GlobalListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		socialMedia?: SharedLinkComponent[]
		logo?: {
			data: StrapiImage
		}
		footer?: GlobalFooterComponent
		favicon?: {
			data?: StrapiImage
		}
	}
}

interface GlobalListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		socialMedia?: SharedLinkComponent[]
		logo?: {
			data: StrapiImage
		}
		footer?: GlobalFooterComponent
		favicon?: {
			data?: StrapiImage
		}
	}
}

interface GlobalListResponse {
	data: GlobalListResponseDataItem[]
	meta: {
		pagination: StrapiPagination
	}
}

interface GlobalResponseDataObject {
	id: number
	attributes: StrapiDefaultTypeParams & {
		socialMedia?: SharedLinkComponent[]
		logo?: {
			data: StrapiImage
		}
		footer?: GlobalFooterComponent
		favicon?: {
			data?: StrapiImage
		}
	}
}

interface GlobalResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		socialMedia?: SharedLinkComponent[]
		logo?: {
			data: StrapiImage
		}
		footer?: GlobalFooterComponent
		favicon?: {
			data?: StrapiImage
		}
	}
}

interface GlobalResponse {
	data?: GlobalResponseDataObject
	meta?: object
}

namespace Global {
	/**
	 * No description
	 * @tags Global
	 * @name GetGlobal
	 * @request GET:/global
	 * @secure
	 * @response `200` `GlobalListResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetGlobal {
		export type RequestParams = {}
		export type RequestQuery = StrapiParams
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = GlobalListResponse
	}
	/**
	 * No description
	 * @tags Global
	 * @name PutGlobal
	 * @request PUT:/global
	 * @secure
	 * @response `200` `GlobalResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PutGlobal {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = GlobalRequest
		export type RequestHeaders = {}
		export type ResponseBody = GlobalResponse
	}
	/**
	 * No description
	 * @tags Global
	 * @name DeleteGlobal
	 * @request DELETE:/global
	 * @secure
	 * @response `200` `number` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace DeleteGlobal {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = number
	}
}

export type {
	GlobalRequest,
	GlobalListResponseDataItem,
	GlobalListResponseDataItemLocalized,
	GlobalListResponse,
	GlobalResponseDataObject,
	GlobalResponseDataObjectLocalized,
	GlobalResponse,
	Global,
}
