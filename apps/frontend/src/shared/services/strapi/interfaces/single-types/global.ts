import type {
	StrapiDefaultTypeParams,
	StrapiImage,
	StrapiPagination,
	StrapiParams,
} from '../common'
import type { GlobalFooterComponent } from '../components/global'
import type { SharedLinkComponent } from '../components/shared'

interface GlobalLocalizationRequest {
	socialMedia?: SharedLinkComponent[]
	/** @example "string or id" */
	logo: number | string
	footer: GlobalFooterComponent
	/** @example "string or id" */
	favicon: number | string
	locale: string
	sitemap_exclude?: boolean
}

interface GlobalRequest {
	data: {
		socialMedia?: SharedLinkComponent[]
		/** @example "string or id" */
		logo: number | string
		footer: GlobalFooterComponent
		/** @example "string or id" */
		favicon: number | string
		locale?: string
		sitemap_exclude?: boolean
	}
}

interface GlobalLocalizationResponse extends StrapiDefaultTypeParams {
	socialMedia?: SharedLinkComponent[]
	logo: {
		data: StrapiImage
	}
	footer: GlobalFooterComponent
	favicon: {
		data?: StrapiImage
	}
	localizations: {
		data?: GlobalListResponseDataItemLocalized[]
	}
}

interface GlobalListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		socialMedia?: SharedLinkComponent[]
		logo: {
			data: StrapiImage
		}
		footer: GlobalFooterComponent
		favicon: {
			data?: StrapiImage
		}
		localizations: {
			data?: GlobalListResponseDataItemLocalized[]
		}
	}
}

interface GlobalListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		socialMedia?: SharedLinkComponent[]
		logo: {
			data: StrapiImage
		}
		footer: GlobalFooterComponent
		favicon: {
			data?: StrapiImage
		}
		localizations: {
			data?: GlobalListResponseDataItemLocalized[]
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
		logo: {
			data: StrapiImage
		}
		footer: GlobalFooterComponent
		favicon: {
			data?: StrapiImage
		}
		localizations: {
			data?: GlobalListResponseDataItemLocalized[]
		}
	}
}

interface GlobalResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		socialMedia?: SharedLinkComponent[]
		logo: {
			data: StrapiImage
		}
		footer: GlobalFooterComponent
		favicon: {
			data?: StrapiImage
		}
		localizations: {
			data?: GlobalListResponseDataItemLocalized[]
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
	/**
	 * No description
	 * @tags Global
	 * @name PostGlobalLocalizations
	 * @request POST:/global/localizations
	 * @secure
	 * @response `200` `GlobalLocalizationResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostGlobalLocalizations {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = GlobalLocalizationRequest
		export type RequestHeaders = {}
		export type ResponseBody = GlobalLocalizationResponse
	}
}

export type {
	GlobalLocalizationRequest,
	GlobalRequest,
	GlobalLocalizationResponse,
	GlobalListResponseDataItem,
	GlobalListResponseDataItemLocalized,
	GlobalListResponse,
	GlobalResponseDataObject,
	GlobalResponseDataObjectLocalized,
	GlobalResponse,
	Global,
}
