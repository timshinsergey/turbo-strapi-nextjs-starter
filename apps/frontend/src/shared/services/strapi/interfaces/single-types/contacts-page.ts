import type { StrapiDefaultTypeParams, StrapiPagination, StrapiParams } from '../common'
import type { SharedSeoComponent } from '../components/shared'

interface ContactsPageRequest {
	data: {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		sitemap_exclude?: boolean
	}
}

interface ContactsPageListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo?: SharedSeoComponent
		slug: string
	}
}

interface ContactsPageListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo?: SharedSeoComponent
		slug: string
	}
}

interface ContactsPageListResponse {
	data: ContactsPageListResponseDataItem[]
	meta: {
		pagination: StrapiPagination
	}
}

interface ContactsPageResponseDataObject {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo?: SharedSeoComponent
		slug: string
	}
}

interface ContactsPageResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo?: SharedSeoComponent
		slug: string
	}
}

interface ContactsPageResponse {
	data?: ContactsPageResponseDataObject
	meta?: object
}

namespace ContactsPage {
	/**
	 * No description
	 * @tags Contacts-page
	 * @name GetContactsPage
	 * @request GET:/contacts-page
	 * @secure
	 * @response `200` `ContactsPageListResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetContactsPage {
		export type RequestParams = {}
		export type RequestQuery = StrapiParams
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ContactsPageListResponse
	}
	/**
	 * No description
	 * @tags Contacts-page
	 * @name PutContactsPage
	 * @request PUT:/contacts-page
	 * @secure
	 * @response `200` `ContactsPageResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PutContactsPage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ContactsPageRequest
		export type RequestHeaders = {}
		export type ResponseBody = ContactsPageResponse
	}
	/**
	 * No description
	 * @tags Contacts-page
	 * @name DeleteContactsPage
	 * @request DELETE:/contacts-page
	 * @secure
	 * @response `200` `number` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace DeleteContactsPage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = number
	}
}

export type {
	ContactsPageRequest,
	ContactsPageListResponseDataItem,
	ContactsPageListResponseDataItemLocalized,
	ContactsPageListResponse,
	ContactsPageResponseDataObject,
	ContactsPageResponseDataObjectLocalized,
	ContactsPageResponse,
	ContactsPage,
}
