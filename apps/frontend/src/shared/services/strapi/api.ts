import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	HeadersDefaults,
	ResponseType,
} from 'axios'
import type {
	ArticleListResponse,
	ArticleRequest,
	ArticleResponse,
} from './interfaces/collection-types/article'
import type {
	PageListResponse,
	PageRequest,
	PageResponse,
} from './interfaces/collection-types/page'
import type {
	ServiceListResponse,
	ServiceRequest,
	ServiceResponse,
} from './interfaces/collection-types/service'
import type { StrapiParams } from './interfaces/common'
import type { UploadFileListResponse, UploadFileResponse } from './interfaces/plugins/media-library'
import type {
	ChangePasswordCreatePayload,
	EmailConfirmationListParams,
	ForgotPasswordCreatePayload,
	LocalCreatePayload,
	LocalRegisterCreatePayload,
	ResetPasswordCreatePayload,
	SendEmailConfirmationCreatePayload,
	UsersCreatePayload,
	UsersPermissionsPermissionsTree,
	UsersPermissionsRole,
	UsersPermissionsRoleRequest,
	UsersPermissionsUser,
	UsersPermissionsUserRegistration,
	UsersUpdatePayload,
} from './interfaces/plugins/roles-and-permissions'
import type {
	BlogPageListResponse,
	BlogPageRequest,
	BlogPageResponse,
} from './interfaces/single-types/blog-page'
import type {
	ContactsPageListResponse,
	ContactsPageRequest,
	ContactsPageResponse,
} from './interfaces/single-types/contacts-page'
import type {
	GlobalListResponse,
	GlobalRequest,
	GlobalResponse,
} from './interfaces/single-types/global'
import type {
	HomePageListResponse,
	HomePageRequest,
	HomePageResponse,
} from './interfaces/single-types/home-page'
import type {
	NotFoundPageListResponse,
	NotFoundPageRequest,
	NotFoundPageResponse,
} from './interfaces/single-types/not-found-page'
import type {
	ServicesPageListResponse,
	ServicesPageRequest,
	ServicesPageResponse,
} from './interfaces/single-types/service-page'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams
	extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean
	/** request path */
	path: string
	/** content type of request body */
	type?: ContentType
	/** query params */
	query?: QueryParamsType
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseType
	/** request body */
	body?: unknown
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown>
	extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
	securityWorker?: (
		securityData: SecurityDataType | null
	) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
	secure?: boolean
	format?: ResponseType
}

export enum ContentType {
	Json = 'application/json',
	FormData = 'multipart/form-data',
	UrlEncoded = 'application/x-www-form-urlencoded',
	Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
	public instance: AxiosInstance
	private securityData: SecurityDataType | null = null
	private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
	private secure?: boolean
	private format?: ResponseType

	constructor({
		securityWorker,
		secure,
		format,
		...axiosConfig
	}: ApiConfig<SecurityDataType> = {}) {
		this.instance = axios.create({
			...axiosConfig,
			baseURL: axiosConfig.baseURL || 'http://localhost:1337/api',
		})
		this.secure = secure
		this.format = format
		this.securityWorker = securityWorker
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data
	}

	protected mergeRequestParams(
		params1: AxiosRequestConfig,
		params2?: AxiosRequestConfig
	): AxiosRequestConfig {
		const method = params1.method || (params2 && params2.method)

		return {
			...this.instance.defaults,
			...params1,
			...(params2 || {}),
			headers: {
				...((method &&
					this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
					{}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {}),
			},
		}
	}

	protected stringifyFormItem(formItem: unknown) {
		if (typeof formItem === 'object' && formItem !== null) {
			return JSON.stringify(formItem)
		} else {
			return `${formItem}`
		}
	}

	protected createFormData(input: Record<string, unknown>): FormData {
		return Object.keys(input || {}).reduce((formData, key) => {
			const property = input[key]
			const propertyContent: any[] = property instanceof Array ? property : [property]

			for (const formItem of propertyContent) {
				const isFileType = formItem instanceof Blob || formItem instanceof File
				formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem))
			}

			return formData
		}, new FormData())
	}

	public request = async <T = any, _E = any>({
		secure,
		path,
		type,
		query,
		format,
		body,
		...params
	}: FullRequestParams): Promise<AxiosResponse<T>> => {
		const secureParams =
			((typeof secure === 'boolean' ? secure : this.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{}
		const requestParams = this.mergeRequestParams(params, secureParams)
		const responseFormat = format || this.format || undefined

		if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
			body = this.createFormData(body as Record<string, unknown>)
		}

		if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
			body = JSON.stringify(body)
		}

		return this.instance.request({
			...requestParams,
			headers: {
				...(requestParams.headers || {}),
				...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
			},
			params: query,
			responseType: responseFormat,
			data: body,
			url: path,
		})
	}
}

/**
 * @title DOCUMENTATION
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService YOUR_TERMS_OF_SERVICE_URL
 * @baseUrl http://localhost:1337/api
 * @externalDocs https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html
 * @contact TEAM <contact-email@something.io> (mywebsite.io)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
	article = {
		/**
		 * No description
		 *
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
		getArticles: (query: StrapiParams, params: RequestParams = {}) =>
			this.request<ArticleListResponse, Error>({
				path: `/articles`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		postArticles: (data: ArticleRequest, params: RequestParams = {}) =>
			this.request<ArticleResponse, Error>({
				path: `/articles`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		getArticlesId: (id: number, params: RequestParams = {}) =>
			this.request<ArticleResponse, Error>({
				path: `/articles/${id}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		putArticlesId: (id: number, data: ArticleRequest, params: RequestParams = {}) =>
			this.request<ArticleResponse, Error>({
				path: `/articles/${id}`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		deleteArticlesId: (id: number, params: RequestParams = {}) =>
			this.request<number, Error>({
				path: `/articles/${id}`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),
	}
	blogPage = {
		/**
		 * No description
		 *
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
		getBlogPage: (query: StrapiParams, params: RequestParams = {}) =>
			this.request<BlogPageListResponse, Error>({
				path: `/blog-page`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		putBlogPage: (data: BlogPageRequest, params: RequestParams = {}) =>
			this.request<BlogPageResponse, Error>({
				path: `/blog-page`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		deleteBlogPage: (params: RequestParams = {}) =>
			this.request<number, Error>({
				path: `/blog-page`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),
	}
	contactsPage = {
		/**
		 * No description
		 *
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
		getContactsPage: (query: StrapiParams, params: RequestParams = {}) =>
			this.request<ContactsPageListResponse, Error>({
				path: `/contacts-page`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		putContactsPage: (data: ContactsPageRequest, params: RequestParams = {}) =>
			this.request<ContactsPageResponse, Error>({
				path: `/contacts-page`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		deleteContactsPage: (params: RequestParams = {}) =>
			this.request<number, Error>({
				path: `/contacts-page`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),
	}
	global = {
		/**
		 * No description
		 *
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
		getGlobal: (query: StrapiParams, params: RequestParams = {}) =>
			this.request<GlobalListResponse, Error>({
				path: `/global`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		putGlobal: (data: GlobalRequest, params: RequestParams = {}) =>
			this.request<GlobalResponse, Error>({
				path: `/global`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		deleteGlobal: (params: RequestParams = {}) =>
			this.request<number, Error>({
				path: `/global`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),
	}
	homePage = {
		/**
		 * No description
		 *
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
		getHomePage: (query: StrapiParams, params: RequestParams = {}) =>
			this.request<HomePageListResponse, Error>({
				path: `/home-page`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		putHomePage: (data: HomePageRequest, params: RequestParams = {}) =>
			this.request<HomePageResponse, Error>({
				path: `/home-page`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		deleteHomePage: (params: RequestParams = {}) =>
			this.request<number, Error>({
				path: `/home-page`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),
	}
	notFoundPage = {
		/**
		 * No description
		 *
		 * @tags Not-found-page
		 * @name GetNotFoundPage
		 * @request GET:/not-found-page
		 * @secure
		 * @response `200` `NotFoundPageListResponse` OK
		 * @response `400` `Error` Bad Request
		 * @response `401` `Error` Unauthorized
		 * @response `403` `Error` Forbidden
		 * @response `404` `Error` Not Found
		 * @response `500` `Error` Internal Server Error
		 */
		getNotFoundPage: (query: StrapiParams, params: RequestParams = {}) =>
			this.request<NotFoundPageListResponse, Error>({
				path: `/not-found-page`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Not-found-page
		 * @name PutNotFoundPage
		 * @request PUT:/not-found-page
		 * @secure
		 * @response `200` `NotFoundPageResponse` OK
		 * @response `400` `Error` Bad Request
		 * @response `401` `Error` Unauthorized
		 * @response `403` `Error` Forbidden
		 * @response `404` `Error` Not Found
		 * @response `500` `Error` Internal Server Error
		 */
		putNotFoundPage: (data: NotFoundPageRequest, params: RequestParams = {}) =>
			this.request<NotFoundPageResponse, Error>({
				path: `/not-found-page`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Not-found-page
		 * @name DeleteNotFoundPage
		 * @request DELETE:/not-found-page
		 * @secure
		 * @response `200` `number` OK
		 * @response `400` `Error` Bad Request
		 * @response `401` `Error` Unauthorized
		 * @response `403` `Error` Forbidden
		 * @response `404` `Error` Not Found
		 * @response `500` `Error` Internal Server Error
		 */
		deleteNotFoundPage: (params: RequestParams = {}) =>
			this.request<number, Error>({
				path: `/not-found-page`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),
	}
	page = {
		/**
		 * No description
		 *
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
		getPages: (query: StrapiParams, params: RequestParams = {}) =>
			this.request<PageListResponse, Error>({
				path: `/pages`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		postPages: (data: PageRequest, params: RequestParams = {}) =>
			this.request<PageResponse, Error>({
				path: `/pages`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		getPagesId: (id: number, params: RequestParams = {}) =>
			this.request<PageResponse, Error>({
				path: `/pages/${id}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		putPagesId: (id: number, data: PageRequest, params: RequestParams = {}) =>
			this.request<PageResponse, Error>({
				path: `/pages/${id}`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		deletePagesId: (id: number, params: RequestParams = {}) =>
			this.request<number, Error>({
				path: `/pages/${id}`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),
	}
	service = {
		/**
		 * No description
		 *
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
		getServices: (query: StrapiParams, params: RequestParams = {}) =>
			this.request<ServiceListResponse, Error>({
				path: `/services`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		postServices: (data: ServiceRequest, params: RequestParams = {}) =>
			this.request<ServiceResponse, Error>({
				path: `/services`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		getServicesId: (id: number, params: RequestParams = {}) =>
			this.request<ServiceResponse, Error>({
				path: `/services/${id}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		putServicesId: (id: number, data: ServiceRequest, params: RequestParams = {}) =>
			this.request<ServiceResponse, Error>({
				path: `/services/${id}`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		deleteServicesId: (id: number, params: RequestParams = {}) =>
			this.request<number, Error>({
				path: `/services/${id}`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),
	}
	servicesPage = {
		/**
		 * No description
		 *
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
		getServicesPage: (query: StrapiParams, params: RequestParams = {}) =>
			this.request<ServicesPageListResponse, Error>({
				path: `/services-page`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		putServicesPage: (data: ServicesPageRequest, params: RequestParams = {}) =>
			this.request<ServicesPageResponse, Error>({
				path: `/services-page`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
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
		deleteServicesPage: (params: RequestParams = {}) =>
			this.request<number, Error>({
				path: `/services-page`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),
	}
	uploadFile = {
		/**
		 * No description
		 *
		 * @tags Upload - File
		 * @name GetUploadFiles
		 * @request GET:/upload/files
		 * @secure
		 * @response `200` `UploadFileListResponse` OK
		 * @response `400` `Error` Bad Request
		 * @response `401` `Error` Unauthorized
		 * @response `403` `Error` Forbidden
		 * @response `404` `Error` Not Found
		 * @response `500` `Error` Internal Server Error
		 */
		getUploadFiles: (query: StrapiParams, params: RequestParams = {}) =>
			this.request<UploadFileListResponse, Error>({
				path: `/upload/files`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Upload - File
		 * @name GetUploadFilesId
		 * @request GET:/upload/files/{id}
		 * @secure
		 * @response `200` `UploadFileResponse` OK
		 * @response `400` `Error` Bad Request
		 * @response `401` `Error` Unauthorized
		 * @response `403` `Error` Forbidden
		 * @response `404` `Error` Not Found
		 * @response `500` `Error` Internal Server Error
		 */
		getUploadFilesId: (id: number, params: RequestParams = {}) =>
			this.request<UploadFileResponse, Error>({
				path: `/upload/files/${id}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Upload - File
		 * @name DeleteUploadFilesId
		 * @request DELETE:/upload/files/{id}
		 * @secure
		 * @response `200` `number` OK
		 * @response `400` `Error` Bad Request
		 * @response `401` `Error` Unauthorized
		 * @response `403` `Error` Forbidden
		 * @response `404` `Error` Not Found
		 * @response `500` `Error` Internal Server Error
		 */
		deleteUploadFilesId: (id: number, params: RequestParams = {}) =>
			this.request<number, Error>({
				path: `/upload/files/${id}`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),
	}
	usersPermissionsUsersRoles = {
		/**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name PermissionsList
 * @summary Get default generated permissions
 * @request GET:/users-permissions/permissions
 * @secure
 * @response `200` `{
    permissions?: UsersPermissionsPermissionsTree,

}` Returns the permissions tree
 * @response `default` `Error` Error
 */
		permissionsList: (params: RequestParams = {}) =>
			this.request<
				{
					permissions?: UsersPermissionsPermissionsTree
				},
				Error
			>({
				path: `/users-permissions/permissions`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name RolesDetail
 * @summary Get a role
 * @request GET:/users-permissions/roles/{id}
 * @secure
 * @response `200` `{
    role?: UsersPermissionsRole,

}`
 * @response `default` `Error` Error
 */
		rolesDetail: (id?: any, params: RequestParams = {}) =>
			this.request<
				{
					role?: UsersPermissionsRole
				},
				Error
			>({
				path: `/users-permissions/roles/${id}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name RolesList
 * @summary List roles
 * @request GET:/users-permissions/roles
 * @secure
 * @response `200` `{
    roles?: ((UsersPermissionsRole & {
    nb_users?: number,

}))[],

}` Returns list of roles
 * @response `default` `Error` Error
 */
		rolesList: (params: RequestParams = {}) =>
			this.request<
				{
					roles?: (UsersPermissionsRole & {
						nb_users?: number
					})[]
				},
				Error
			>({
				path: `/users-permissions/roles`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name RolesCreate
 * @summary Create a role
 * @request POST:/users-permissions/roles
 * @secure
 * @response `200` `{
    ok?: "true",

}` Returns ok if the role was create
 * @response `default` `Error` Error
 */
		rolesCreate: (data: UsersPermissionsRoleRequest, params: RequestParams = {}) =>
			this.request<
				{
					ok?: 'true'
				},
				Error
			>({
				path: `/users-permissions/roles`,
				method: 'POST',
				body: data,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name RolesUpdate
 * @summary Update a role
 * @request PUT:/users-permissions/roles/{role}
 * @secure
 * @response `200` `{
    ok?: "true",

}` Returns ok if the role was udpated
 * @response `default` `Error` Error
 */
		rolesUpdate: (data: UsersPermissionsRoleRequest, role?: any, params: RequestParams = {}) =>
			this.request<
				{
					ok?: 'true'
				},
				Error
			>({
				path: `/users-permissions/roles/${role}`,
				method: 'PUT',
				body: data,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name RolesDelete
 * @summary Delete a role
 * @request DELETE:/users-permissions/roles/{role}
 * @secure
 * @response `200` `{
    ok?: "true",

}` Returns ok if the role was delete
 * @response `default` `Error` Error
 */
		rolesDelete: (role?: any, params: RequestParams = {}) =>
			this.request<
				{
					ok?: 'true'
				},
				Error
			>({
				path: `/users-permissions/roles/${role}`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Users-Permissions - Users & Roles
		 * @name CountList
		 * @summary Get user count
		 * @request GET:/users/count
		 * @secure
		 * @response `200` `number` Returns a number
		 * @response `default` `Error` Error
		 */
		countList: (params: RequestParams = {}) =>
			this.request<number, Error>({
				path: `/users/count`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Users-Permissions - Users & Roles
		 * @name UsersList
		 * @summary Get list of users
		 * @request GET:/users
		 * @secure
		 * @response `200` `(UsersPermissionsUser)[]`
		 * @response `default` `Error` Error
		 */
		usersList: (params: RequestParams = {}) =>
			this.request<UsersPermissionsUser[], Error>({
				path: `/users`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name UsersCreate
 * @summary Create a user
 * @request POST:/users
 * @secure
 * @response `201` `(UsersPermissionsUser & {
    role?: UsersPermissionsRole,

})` Returns created user info
 * @response `default` `Error` Error
 */
		usersCreate: (data: UsersCreatePayload, params: RequestParams = {}) =>
			this.request<
				UsersPermissionsUser & {
					role?: UsersPermissionsRole
				},
				Error
			>({
				path: `/users`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Users-Permissions - Users & Roles
		 * @name GetUsersPermissionsUsersRoles
		 * @summary Get authenticated user info
		 * @request GET:/users/me
		 * @secure
		 * @response `200` `UsersPermissionsUser` Returns user info
		 * @response `default` `Error` Error
		 */
		getUsersPermissionsUsersRoles: (params: RequestParams = {}) =>
			this.request<UsersPermissionsUser, Error>({
				path: `/users/me`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Users-Permissions - Users & Roles
		 * @name UsersDetail
		 * @summary Get a user
		 * @request GET:/users/{id}
		 * @secure
		 * @response `200` `UsersPermissionsUser`
		 * @response `default` `Error` Error
		 */
		usersDetail: (id?: any, params: RequestParams = {}) =>
			this.request<UsersPermissionsUser, Error>({
				path: `/users/${id}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name UsersUpdate
 * @summary Update a user
 * @request PUT:/users/{id}
 * @secure
 * @response `200` `(UsersPermissionsUser & {
    role?: UsersPermissionsRole,

})` Returns updated user info
 * @response `default` `Error` Error
 */
		usersUpdate: (data: UsersUpdatePayload, id?: any, params: RequestParams = {}) =>
			this.request<
				UsersPermissionsUser & {
					role?: UsersPermissionsRole
				},
				Error
			>({
				path: `/users/${id}`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Users-Permissions - Users & Roles
		 * @name UsersDelete
		 * @summary Delete a user
		 * @request DELETE:/users/{id}
		 * @secure
		 * @response `200` `(UsersPermissionsUser)` Returns deleted user info
		 * @response `default` `Error` Error
		 */
		usersDelete: (id: string, params: RequestParams = {}) =>
			this.request<UsersPermissionsUser, Error>({
				path: `/users/${id}`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params,
			}),
	}
	usersPermissionsAuth = {
		/**
		 * @description Redirects to provider login before being redirect to /auth/{provider}/callback
		 *
		 * @tags Users-Permissions - Auth
		 * @name List
		 * @summary Login with a provider
		 * @request GET:/connect/(.*)
		 * @secure
		 * @response `301` `void` Redirect response
		 * @response `default` `Error` Error
		 */
		list: (params: RequestParams = {}) =>
			this.request<any, void | Error>({
				path: `/connect/(.*)`,
				method: 'GET',
				secure: true,
				...params,
			}),

		/**
		 * @description Returns a jwt token and user info
		 *
		 * @tags Users-Permissions - Auth
		 * @name LocalCreate
		 * @summary Local login
		 * @request POST:/auth/local
		 * @secure
		 * @response `200` `UsersPermissionsUserRegistration` Connection
		 * @response `default` `Error` Error
		 */
		localCreate: (data: LocalCreatePayload, params: RequestParams = {}) =>
			this.request<UsersPermissionsUserRegistration, Error>({
				path: `/auth/local`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * @description Returns a jwt token and user info
		 *
		 * @tags Users-Permissions - Auth
		 * @name LocalRegisterCreate
		 * @summary Register a user
		 * @request POST:/auth/local/register
		 * @secure
		 * @response `200` `UsersPermissionsUserRegistration` Successfull registration
		 * @response `default` `Error` Error
		 */
		localRegisterCreate: (data: LocalRegisterCreatePayload, params: RequestParams = {}) =>
			this.request<UsersPermissionsUserRegistration, Error>({
				path: `/auth/local/register`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Users-Permissions - Auth
		 * @name CallbackDetail
		 * @summary Default Callback from provider auth
		 * @request GET:/auth/{provider}/callback
		 * @secure
		 * @response `200` `UsersPermissionsUserRegistration` Returns a jwt token and user info
		 * @response `default` `Error` Error
		 */
		callbackDetail: (provider: string, params: RequestParams = {}) =>
			this.request<UsersPermissionsUserRegistration, Error>({
				path: `/auth/${provider}/callback`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
 * No description
 *
 * @tags Users-Permissions - Auth
 * @name ForgotPasswordCreate
 * @summary Send rest password email
 * @request POST:/auth/forgot-password
 * @secure
 * @response `200` `{
    ok?: "true",

}` Returns ok
 * @response `default` `Error` Error
 */
		forgotPasswordCreate: (data: ForgotPasswordCreatePayload, params: RequestParams = {}) =>
			this.request<
				{
					ok?: 'true'
				},
				Error
			>({
				path: `/auth/forgot-password`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Users-Permissions - Auth
		 * @name ResetPasswordCreate
		 * @summary Rest user password
		 * @request POST:/auth/reset-password
		 * @secure
		 * @response `200` `UsersPermissionsUserRegistration` Returns a jwt token and user info
		 * @response `default` `Error` Error
		 */
		resetPasswordCreate: (data: ResetPasswordCreatePayload, params: RequestParams = {}) =>
			this.request<UsersPermissionsUserRegistration, Error>({
				path: `/auth/reset-password`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Users-Permissions - Auth
		 * @name ChangePasswordCreate
		 * @summary Update user's own password
		 * @request POST:/auth/change-password
		 * @secure
		 * @response `200` `UsersPermissionsUserRegistration` Returns a jwt token and user info
		 * @response `default` `Error` Error
		 */
		changePasswordCreate: (data: ChangePasswordCreatePayload, params: RequestParams = {}) =>
			this.request<UsersPermissionsUserRegistration, Error>({
				path: `/auth/change-password`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Users-Permissions - Auth
		 * @name EmailConfirmationList
		 * @summary Confirm user email
		 * @request GET:/auth/email-confirmation
		 * @secure
		 * @response `301` `void` Redirects to the configure email confirmation redirect url
		 * @response `default` `Error` Error
		 */
		emailConfirmationList: (query: EmailConfirmationListParams, params: RequestParams = {}) =>
			this.request<any, void | Error>({
				path: `/auth/email-confirmation`,
				method: 'GET',
				query: query,
				secure: true,
				...params,
			}),

		/**
 * No description
 *
 * @tags Users-Permissions - Auth
 * @name SendEmailConfirmationCreate
 * @summary Send confirmation email
 * @request POST:/auth/send-email-confirmation
 * @secure
 * @response `200` `{
    email?: string,
    sent?: "true",

}` Returns email and boolean to confirm email was sent
 * @response `default` `Error` Error
 */
		sendEmailConfirmationCreate: (
			data: SendEmailConfirmationCreatePayload,
			params: RequestParams = {}
		) =>
			this.request<
				{
					email?: string
					sent?: 'true'
				},
				Error
			>({
				path: `/auth/send-email-confirmation`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),
	}
}
