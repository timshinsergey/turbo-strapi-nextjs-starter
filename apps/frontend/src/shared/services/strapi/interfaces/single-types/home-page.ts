import type { StrapiDefaultTypeParams, StrapiPagination, StrapiParams } from '../common'
import type { StrapiBlock } from '../components/blocks'
import type { SharedSeoComponent } from '../components/shared'

interface HomePageLocalizationRequest {
	seo: SharedSeoComponent
	blocks: StrapiBlock[]
	locale: string
	sitemap_exclude?: boolean
}
interface HomePageRequest {
	data: {
		seo: SharedSeoComponent
		locale?: string
		sitemap_exclude?: boolean
	}
}

interface HomePageLocalizationResponse extends StrapiDefaultTypeParams {
	seo: SharedSeoComponent
	blocks?: StrapiBlock[]
	localizations: {
		data?: HomePageListResponseDataItemLocalized[]
	}
}

interface HomePageListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		seo: SharedSeoComponent
		blocks?: StrapiBlock[]
		localizations: {
			data?: HomePageListResponseDataItemLocalized[]
		}
	}
}

interface HomePageListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		seo: SharedSeoComponent
		blocks?: StrapiBlock[]
		localizations: {
			data?: HomePageListResponseDataItemLocalized[]
		}
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
		seo: SharedSeoComponent
		blocks?: StrapiBlock[]
		localizations: {
			data?: HomePageListResponseDataItemLocalized[]
		}
	}
}

interface HomePageResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		seo: SharedSeoComponent
		blocks?: StrapiBlock[]
		localizations: {
			data?: HomePageListResponseDataItemLocalized[]
		}
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
	/**
	 * No description
	 * @tags Home-page
	 * @name PostHomePageLocalizations
	 * @request POST:/home-page/localizations
	 * @secure
	 * @response `200` `HomePageLocalizationResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostHomePageLocalizations {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = HomePageLocalizationRequest
		export type RequestHeaders = {}
		export type ResponseBody = HomePageLocalizationResponse
	}
}

export type {
	HomePageLocalizationRequest,
	HomePageRequest,
	HomePageLocalizationResponse,
	HomePageListResponseDataItem,
	HomePageListResponseDataItemLocalized,
	HomePageListResponse,
	HomePageResponseDataObject,
	HomePageResponseDataObjectLocalized,
	HomePageResponse,
	HomePage,
}
