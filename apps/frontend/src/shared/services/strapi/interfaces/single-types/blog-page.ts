import type { StrapiDefaultTypeParams, StrapiPagination, StrapiParams } from '../common'
import type { SharedSeoComponent } from '../components/shared'

interface BlogPageLocalizationRequest {
	title: string
	description?: string
	seo: SharedSeoComponent
	slug: string
	locale: string
	sitemap_exclude?: boolean
}

interface BlogPageRequest {
	data: {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		locale?: string
		sitemap_exclude?: boolean
	}
}

interface BlogPageLocalizationResponse extends StrapiDefaultTypeParams {
	title: string
	description?: string
	seo: SharedSeoComponent
	slug: string
	localizations: {
		data?: BlogPageListResponseDataItemLocalized[]
	}
}

interface BlogPageListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		localizations: {
			data?: BlogPageListResponseDataItemLocalized[]
		}
	}
}

interface BlogPageListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		localizations: {
			data?: BlogPageListResponseDataItemLocalized[]
		}
	}
}

interface BlogPageListResponse {
	data: BlogPageListResponseDataItem[]
	meta: {
		pagination: StrapiPagination
	}
}

interface BlogPageResponseDataObject {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		localizations: {
			data?: BlogPageListResponseDataItemLocalized[]
		}
	}
}

interface BlogPageResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		localizations: {
			data?: BlogPageListResponseDataItemLocalized[]
		}
	}
}

interface BlogPageResponse {
	data?: BlogPageResponseDataObject
	meta?: object
}

namespace BlogPage {
	/**
	 * No description
	 * @tags Blog-page
	 * @name GetBlogPage
	 * @request GET:/blog-page
	 * @secure
	 * @response `200` `BlogPageListResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetBlogPage {
		export type RequestParams = {}
		export type RequestQuery = StrapiParams
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = BlogPageListResponse
	}
	/**
	 * No description
	 * @tags Blog-page
	 * @name PutBlogPage
	 * @request PUT:/blog-page
	 * @secure
	 * @response `200` `BlogPageResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PutBlogPage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = BlogPageRequest
		export type RequestHeaders = {}
		export type ResponseBody = BlogPageResponse
	}
	/**
	 * No description
	 * @tags Blog-page
	 * @name DeleteBlogPage
	 * @request DELETE:/blog-page
	 * @secure
	 * @response `200` `number` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace DeleteBlogPage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = number
	}
	/**
	 * No description
	 * @tags Blog-page
	 * @name PostBlogPageLocalizations
	 * @request POST:/blog-page/localizations
	 * @secure
	 * @response `200` `BlogPageLocalizationResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostBlogPageLocalizations {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = BlogPageLocalizationRequest
		export type RequestHeaders = {}
		export type ResponseBody = BlogPageLocalizationResponse
	}
}

export type {
	BlogPageLocalizationRequest,
	BlogPageRequest,
	BlogPageLocalizationResponse,
	BlogPageListResponseDataItem,
	BlogPageListResponseDataItemLocalized,
	BlogPageListResponse,
	BlogPageResponseDataObject,
	BlogPageResponseDataObjectLocalized,
	BlogPageResponse,
	BlogPage,
}
