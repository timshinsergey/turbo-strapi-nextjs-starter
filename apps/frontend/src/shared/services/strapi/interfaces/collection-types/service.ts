import type { StrapiDefaultTypeParams, StrapiPagination, StrapiParams } from '../common'
import type { SharedSeoComponent } from '../components/shared'

interface ServiceRequest {
	data: {
		title: string
		description?: string
		slug: string
		seo: SharedSeoComponent
		sitemap_exclude?: boolean
	}
}

interface ServiceListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		slug: string
		seo?: SharedSeoComponent
	}
}

interface ServiceListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		slug: string
		seo?: SharedSeoComponent
	}
}

interface ServiceListResponse {
	data: ServiceListResponseDataItem[]
	meta: {
		pagination: StrapiPagination
	}
}

interface ServiceResponseDataObject {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		slug: string
		seo?: SharedSeoComponent
	}
}

interface ServiceResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		slug: string
		seo?: SharedSeoComponent
	}
}

interface ServiceResponse {
	data?: ServiceResponseDataObject
	meta?: object
}

namespace Service {
	/**
	 * No description
	 * @tags Service
	 * @name GetServices
	 * @request GET:/services
	 * @secure
	 * @response `200` `ServiceListResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetServices {
		export type RequestParams = {}
		export type RequestQuery = StrapiParams
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ServiceListResponse
	}
	/**
	 * No description
	 * @tags Service
	 * @name PostServices
	 * @request POST:/services
	 * @secure
	 * @response `200` `ServiceResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostServices {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ServiceRequest
		export type RequestHeaders = {}
		export type ResponseBody = ServiceResponse
	}
	/**
	 * No description
	 * @tags Service
	 * @name GetServicesId
	 * @request GET:/services/{id}
	 * @secure
	 * @response `200` `ServiceResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetServicesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ServiceResponse
	}
	/**
	 * No description
	 * @tags Service
	 * @name PutServicesId
	 * @request PUT:/services/{id}
	 * @secure
	 * @response `200` `ServiceResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PutServicesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = ServiceRequest
		export type RequestHeaders = {}
		export type ResponseBody = ServiceResponse
	}
	/**
	 * No description
	 * @tags Service
	 * @name DeleteServicesId
	 * @request DELETE:/services/{id}
	 * @secure
	 * @response `200` `number` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace DeleteServicesId {
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
	ServiceRequest,
	ServiceListResponseDataItem,
	ServiceListResponseDataItemLocalized,
	ServiceListResponse,
	ServiceResponseDataObject,
	ServiceResponseDataObjectLocalized,
	ServiceResponse,
	Service,
}
