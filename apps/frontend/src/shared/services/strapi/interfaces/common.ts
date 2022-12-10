interface StrapiMediaBase {
	name: string
	alternativeText: string
	caption: string
	hash: string
	/** @format float */
	size: number
	url: string
	previewUrl?: string
	provider: 'local' | 'aws-s3' | string
	provider_metadata?: any
	folderPath?: string
	/** @format date-time */
	createdAt: string
	/** @format date-time */
	updatedAt: string
}

interface StrapiImageFormat {
	ext: '.svg' | '.jpeg' | '.jpg' | '.webp' | '.png'
	url: string
	hash: string
	mime: 'image/svg+xml' | 'image/jpeg' | 'image/png' | string
	name: string
	path?: string
	/** @format float */
	size: number
	width: number
	height: number
}

type StrapiImage = {
	id: number
	attributes: StrapiMediaBase & {
		width: number
		height: number
		ext: '.svg' | '.jpeg' | '.jpg' | '.webp' | '.png'
		mime: 'image/svg+xml' | 'image/jpeg' | 'image/png' | string
		formats?: {
			large?: StrapiImageFormat
			medium?: StrapiImageFormat
			small?: StrapiImageFormat
			thumbnail?: StrapiImageFormat
		}
	}
}

type StrapiFile = {
	id: number
	attributes: StrapiMediaBase & {
		ext: '.pdf' | string
		mime: 'application/pdf' | string
	}
}

interface StrapiCreatedBy {
	id: number
	attributes: {
		firstname?: string
		lastname?: string
		username?: string
		/** @format email */
		email?: string
		resetPasswordToken?: string
		registrationToken?: string
		isActive?: boolean
		roles?: {
			data?: {
				id: number
				attributes: {
					name?: string
					code?: string
					description?: string
					users?: {
						data?: {
							id: number
							attributes: object
						}[]
					}
					permissions?: {
						data?: {
							id: number
							attributes: {
								action?: string
								subject?: string
								properties?: any
								conditions?: any
								role?: {
									data?: {
										id: number
										attributes: object
									}
								}
								/** @format date-time */
								createdAt: string
								/** @format date-time */
								updatedAt: string
								createdBy?: {
									data?: {
										id: number
										attributes: object
									}
								}
								updatedBy?: {
									data?: {
										id: number
										attributes: object
									}
								}
							}
						}[]
					}
					/** @format date-time */
					createdAt: string
					/** @format date-time */
					updatedAt: string
					createdBy?: {
						data?: {
							id: number
							attributes: object
						}
					}
					updatedBy?: {
						data?: {
							id: number
							attributes: object
						}
					}
				}
			}[]
		}
		blocked?: boolean
		preferedLanguage?: string
		/** @format date-time */
		createdAt: string
		/** @format date-time */
		updatedAt: string
		createdBy?: {
			data?: {
				id: number
				attributes: object
			}
		}
		updatedBy?: {
			data?: {
				id: number
				attributes: object
			}
		}
	}
}

interface StrapiUpdatedBy {
	id: number
	attributes: object
}

interface StrapiPagination {
	page: number
	/** @min 25 */
	pageSize: number
	/** @max 1 */
	pageCount: number
	total: number
}

interface StrapiParams {
	/** Sort by attributes ascending (asc) or descending (desc) */
	sort?: string
	/** Retun page/pageSize (default: true) */
	'pagination[withCount]'?: boolean
	/** Page number (default: 0) */
	'pagination[page]'?: number
	/** Page size (default: 25) */
	'pagination[pageSize]'?: number
	/** Offset value (default: 0) */
	'pagination[start]'?: number
	/** Number of entities to return (default: 25) */
	'pagination[limit]'?: number
	/** Fields to return (ex: title,author) */
	fields?: string
	/** Relations to return */
	populate?: string
	/** Filters to apply */
	filters?: object
	locale?: string
}

interface StrapiDefaultTypeParams {
	/** @format date-time */
	createdAt: string
	/** @format date-time */
	updatedAt: string
	/** @format date-time */
	publishedAt: string
	createdBy?: {
		data: StrapiCreatedBy
	}
	updatedBy?: {
		data: StrapiUpdatedBy
	}
	sitemap_exclude?: boolean
	locale: string
}

type StrapiMedia = StrapiImage | StrapiFile

export type {
	StrapiImage,
	StrapiFile,
	StrapiMedia,
	StrapiCreatedBy,
	StrapiUpdatedBy,
	StrapiPagination,
	StrapiParams,
	StrapiDefaultTypeParams,
}
