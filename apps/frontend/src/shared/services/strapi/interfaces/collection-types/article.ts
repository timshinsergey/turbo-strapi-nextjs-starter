import type { StrapiDefaultTypeParams, StrapiPagination, StrapiParams } from '../common'
import type { SharedSeoComponent } from '../components/shared'

interface ArticleLocalizationRequest {
	title: string
	slug: string
	seo: SharedSeoComponent
	locale: string
	sitemap_exclude?: boolean
}

interface ArticleRequest {
	data: {
		title: string
		slug: string
		seo: SharedSeoComponent
		sitemap_exclude?: boolean
		locale?: string
	}
}

interface ArticleLocalizationResponse extends StrapiDefaultTypeParams {
	title: string
	slug: string
	seo: SharedSeoComponent
	localizations: {
		data?: ArticleListResponseDataItemLocalized[]
	}
}

interface ArticleListResponseDataItem {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		slug: string
		seo: SharedSeoComponent
	}
}

interface ArticleListResponseDataItemLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		slug: string
		seo: SharedSeoComponent
		localizations: {
			data?: ArticleListResponseDataItemLocalized[]
		}
	}
}

interface ArticleListResponse {
	data: ArticleListResponseDataItem[]
	meta: {
		pagination: StrapiPagination
	}
}

interface ArticleResponseDataObject {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		slug: string
		seo: SharedSeoComponent
		localizations: {
			data?: ArticleListResponseDataItemLocalized[]
		}
	}
}

interface ArticleResponseDataObjectLocalized {
	id: number
	attributes: StrapiDefaultTypeParams & {
		title: string
		slug: string
		seo: SharedSeoComponent
		localizations: {
			data?: ArticleListResponseDataItemLocalized[]
		}
	}
}

interface ArticleResponse {
	data?: ArticleResponseDataObject
	meta?: object
}

namespace Article {
	/**
	 * No description
	 * @tags Article
	 * @name GetArticles
	 * @request GET:/articles
	 * @secure
	 * @response `200` `ArticleListResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetArticles {
		export type RequestParams = {}
		export type RequestQuery = StrapiParams
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ArticleListResponse
	}
	/**
	 * No description
	 * @tags Article
	 * @name PostArticles
	 * @request POST:/articles
	 * @secure
	 * @response `200` `ArticleResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostArticles {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ArticleRequest
		export type RequestHeaders = {}
		export type ResponseBody = ArticleResponse
	}
	/**
	 * No description
	 * @tags Article
	 * @name GetArticlesId
	 * @request GET:/articles/{id}
	 * @secure
	 * @response `200` `ArticleResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace GetArticlesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ArticleResponse
	}
	/**
	 * No description
	 * @tags Article
	 * @name PutArticlesId
	 * @request PUT:/articles/{id}
	 * @secure
	 * @response `200` `ArticleResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PutArticlesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = ArticleRequest
		export type RequestHeaders = {}
		export type ResponseBody = ArticleResponse
	}
	/**
	 * No description
	 * @tags Article
	 * @name DeleteArticlesId
	 * @request DELETE:/articles/{id}
	 * @secure
	 * @response `200` `number` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace DeleteArticlesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = number
	}
	/**
	 * No description
	 * @tags Article
	 * @name PostArticlesIdLocalizations
	 * @request POST:/articles/{id}/localizations
	 * @secure
	 * @response `200` `ArticleLocalizationResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostArticlesIdLocalizations {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = ArticleLocalizationRequest
		export type RequestHeaders = {}
		export type ResponseBody = ArticleLocalizationResponse
	}
}

export type {
	ArticleLocalizationRequest,
	ArticleRequest,
	ArticleLocalizationResponse,
	ArticleListResponseDataItem,
	ArticleListResponseDataItemLocalized,
	ArticleListResponse,
	ArticleResponseDataObject,
	ArticleResponseDataObjectLocalized,
	ArticleResponse,
	Article,
}
