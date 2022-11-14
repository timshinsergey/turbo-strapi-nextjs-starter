import type { StrapiDefaultTypeParams, StrapiPagination, StrapiParams } from '../common'
import type { SharedSeoComponent } from '../components/shared'

interface ServicesPageRequest {
	data: {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		sitemap_exclude?: boolean
	}
}

interface ServicesPageListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo?: SharedSeoComponent
		slug: string
	}
}

interface ServicesPageListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo?: SharedSeoComponent
		slug: string
	}
}

interface ServicesPageListResponse {
	data: ServicesPageListResponseDataItem[]
	meta: {
		pagination: StrapiPagination
	}
}

interface ServicesPageResponseDataObject {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo?: SharedSeoComponent
		slug: string
	}
}

interface ServicesPageResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo?: SharedSeoComponent
		slug: string
	}
}

interface ServicesPageResponse {
	data?: ServicesPageResponseDataObject
	meta?: object
}

namespace ServicesPage {
	/**
	 * No description
	 * @tags Services-page
	 * @name GetServicesPage
	 * @request GET:/services-page
	 * @secure
	 * @response `200` `ServicesPageListResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetServicesPage {
		export type RequestParams = {}
		export type RequestQuery = StrapiParams
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ServicesPageListResponse
	}
	/**
	 * No description
	 * @tags Services-page
	 * @name PutServicesPage
	 * @request PUT:/services-page
	 * @secure
	 * @response `200` `ServicesPageResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PutServicesPage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ServicesPageRequest
		export type RequestHeaders = {}
		export type ResponseBody = ServicesPageResponse
	}
	/**
	 * No description
	 * @tags Services-page
	 * @name DeleteServicesPage
	 * @request DELETE:/services-page
	 * @secure
	 * @response `200` `number` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace DeleteServicesPage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = number
	}
}

export type {
	ServicesPageRequest,
	ServicesPageListResponseDataItem,
	ServicesPageListResponseDataItemLocalized,
	ServicesPageListResponse,
	ServicesPageResponseDataObject,
	ServicesPageResponseDataObjectLocalized,
	ServicesPageResponse,
	ServicesPage,
}
