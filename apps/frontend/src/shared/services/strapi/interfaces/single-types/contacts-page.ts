import type { StrapiDefaultTypeParams, StrapiPagination, StrapiParams } from '../common'
import type { SharedSeoComponent } from '../components/shared'

interface ContactsPageLocalizationRequest {
	title: string
	description?: string
	seo: SharedSeoComponent
	slug: string
	locale: string
	sitemap_exclude?: boolean
}

interface ContactsPageRequest {
	data: {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		locale?: string
		sitemap_exclude?: boolean
	}
}

interface ContactsPageLocalizationResponse extends StrapiDefaultTypeParams {
	title: string
	description?: string
	seo: SharedSeoComponent
	slug: string
	localizations: {
		data?: ContactsPageListResponseDataItemLocalized[]
	}
}

interface ContactsPageListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		localizations: {
			data?: ContactsPageListResponseDataItemLocalized[]
		}
	}
}

interface ContactsPageListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		localizations: {
			data?: ContactsPageListResponseDataItemLocalized[]
		}
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
		seo: SharedSeoComponent
		slug: string
		localizations: {
			data?: ContactsPageListResponseDataItemLocalized[]
		}
	}
}

interface ContactsPageResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		localizations: {
			data?: ContactsPageListResponseDataItemLocalized[]
		}
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
	/**
	 * No description
	 * @tags Contacts-page
	 * @name PostContactsPageLocalizations
	 * @request POST:/contacts-page/localizations
	 * @secure
	 * @response `200` `ContactsPageLocalizationResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostContactsPageLocalizations {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ContactsPageLocalizationRequest
		export type RequestHeaders = {}
		export type ResponseBody = ContactsPageLocalizationResponse
	}
}

export type {
	ContactsPageLocalizationRequest,
	ContactsPageRequest,
	ContactsPageLocalizationResponse,
	ContactsPageListResponseDataItem,
	ContactsPageListResponseDataItemLocalized,
	ContactsPageListResponse,
	ContactsPageResponseDataObject,
	ContactsPageResponseDataObjectLocalized,
	ContactsPageResponse,
	ContactsPage,
}
