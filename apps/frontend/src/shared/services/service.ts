/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
	data?: object | [] | null
	error: {
		status?: number
		name?: string
		message?: string
		details?: object
	}
}

export interface ArticleLocalizationRequest {
	title: string
	slug: string
	seo: SharedSeoComponent
	locale: string
	sitemap_exclude?: boolean
}

export interface ArticleRequest {
	data: {
		title: string
		slug: string
		seo: SharedSeoComponent
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ArticleLocalizationResponse {
	id?: number
	title?: string
	slug?: string
	seo?: SharedSeoComponent
	/** @format date-time */
	createdAt?: string
	/** @format date-time */
	updatedAt?: string
	/** @format date-time */
	publishedAt?: string
	createdBy?: {
		data?: {
			id?: number
			attributes?: {
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
						id?: number
						attributes?: {
							name?: string
							code?: string
							description?: string
							users?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							permissions?: {
								data?: {
									id?: number
									attributes?: {
										action?: string
										subject?: string
										properties?: any
										conditions?: any
										role?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
									}
								}[]
							}
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
						}
					}[]
				}
				blocked?: boolean
				preferedLanguage?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
			}
		}
	}
	updatedBy?: {
		data?: {
			id?: number
			attributes?: object
		}
	}
	localizations?: {
		data?: any[]
	}
	locale?: string
	sitemap_exclude?: boolean
}

export interface ArticleListResponseDataItem {
	id?: number
	attributes?: {
		title?: string
		slug?: string
		seo?: SharedSeoComponent
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: ArticleListResponseDataItemLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ArticleListResponseDataItemLocalized {
	id?: number
	attributes?: {
		title?: string
		slug?: string
		seo?: SharedSeoComponent
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ArticleListResponse {
	data?: ArticleListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface ArticleResponseDataObject {
	id?: number
	attributes?: {
		title?: string
		slug?: string
		seo?: SharedSeoComponent
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: ArticleResponseDataObjectLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ArticleResponseDataObjectLocalized {
	id?: number
	attributes?: {
		title?: string
		slug?: string
		seo?: SharedSeoComponent
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ArticleResponse {
	data?: ArticleResponseDataObject
	meta?: object
}

export interface SharedSeoComponent {
	id?: number
	metaTitle?: string
	metaDescription?: string
	metaImage?: {
		data?: {
			id?: number
			attributes?: {
				name?: string
				alternativeText?: string
				caption?: string
				width?: number
				height?: number
				formats?: any
				hash?: string
				ext?: string
				mime?: string
				/** @format float */
				size?: number
				url?: string
				previewUrl?: string
				provider?: string
				provider_metadata?: any
				related?: {
					data?: {
						id?: number
						attributes?: object
					}[]
				}
				folder?: {
					data?: {
						id?: number
						attributes?: {
							name?: string
							pathId?: number
							parent?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							children?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							files?: {
								data?: {
									id?: number
									attributes?: {
										name?: string
										alternativeText?: string
										caption?: string
										width?: number
										height?: number
										formats?: any
										hash?: string
										ext?: string
										mime?: string
										/** @format float */
										size?: number
										url?: string
										previewUrl?: string
										provider?: string
										provider_metadata?: any
										related?: {
											data?: {
												id?: number
												attributes?: object
											}[]
										}
										folder?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										folderPath?: string
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: {
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
															id?: number
															attributes?: {
																name?: string
																code?: string
																description?: string
																users?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}[]
																}
																permissions?: {
																	data?: {
																		id?: number
																		attributes?: {
																			action?: string
																			subject?: string
																			properties?: any
																			conditions?: any
																			role?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																			/** @format date-time */
																			createdAt?: string
																			/** @format date-time */
																			updatedAt?: string
																			createdBy?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																			updatedBy?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																		}
																	}[]
																}
																/** @format date-time */
																createdAt?: string
																/** @format date-time */
																updatedAt?: string
																createdBy?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}
																}
																updatedBy?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}
																}
															}
														}[]
													}
													blocked?: boolean
													preferedLanguage?: string
													/** @format date-time */
													createdAt?: string
													/** @format date-time */
													updatedAt?: string
													createdBy?: {
														data?: {
															id?: number
															attributes?: object
														}
													}
													updatedBy?: {
														data?: {
															id?: number
															attributes?: object
														}
													}
												}
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										sitemap_exclude?: boolean
									}
								}[]
							}
							path?: string
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							sitemap_exclude?: boolean
						}
					}
				}
				folderPath?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				sitemap_exclude?: boolean
			}
		}
	}
	metaSocial?: {
		id?: number
		socialNetwork?: 'Facebook' | 'Twitter'
		title?: string
		description?: string
		image?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats?: any
					hash?: string
					ext?: string
					mime?: string
					/** @format float */
					size?: number
					url?: string
					previewUrl?: string
					provider?: string
					provider_metadata?: any
					related?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					folder?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								pathId?: number
								parent?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								children?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								files?: {
									data?: {
										id?: number
										attributes?: {
											name?: string
											alternativeText?: string
											caption?: string
											width?: number
											height?: number
											formats?: any
											hash?: string
											ext?: string
											mime?: string
											/** @format float */
											size?: number
											url?: string
											previewUrl?: string
											provider?: string
											provider_metadata?: any
											related?: {
												data?: {
													id?: number
													attributes?: object
												}[]
											}
											folder?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											folderPath?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								path?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}
					}
					folderPath?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
	}[]
	keywords?: string
	metaRobots?: string
	structuredData?: any
	metaViewport?: string
	canonicalURL?: string
}

export interface BlogPageLocalizationRequest {
	title: string
	description?: string
	seo: SharedSeoComponent
	slug: string
	locale: string
	sitemap_exclude?: boolean
}

export interface BlogPageRequest {
	data: {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface BlogPageLocalizationResponse {
	id?: number
	title?: string
	description?: string
	seo?: SharedSeoComponent
	slug?: string
	/** @format date-time */
	createdAt?: string
	/** @format date-time */
	updatedAt?: string
	/** @format date-time */
	publishedAt?: string
	createdBy?: {
		data?: {
			id?: number
			attributes?: {
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
						id?: number
						attributes?: {
							name?: string
							code?: string
							description?: string
							users?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							permissions?: {
								data?: {
									id?: number
									attributes?: {
										action?: string
										subject?: string
										properties?: any
										conditions?: any
										role?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
									}
								}[]
							}
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
						}
					}[]
				}
				blocked?: boolean
				preferedLanguage?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
			}
		}
	}
	updatedBy?: {
		data?: {
			id?: number
			attributes?: object
		}
	}
	localizations?: {
		data?: any[]
	}
	locale?: string
	sitemap_exclude?: boolean
}

export interface BlogPageListResponseDataItem {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: BlogPageListResponseDataItemLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface BlogPageListResponseDataItemLocalized {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface BlogPageListResponse {
	data?: BlogPageListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface BlogPageResponseDataObject {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: BlogPageResponseDataObjectLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface BlogPageResponseDataObjectLocalized {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface BlogPageResponse {
	data?: BlogPageResponseDataObject
	meta?: object
}

export interface ContactsPageLocalizationRequest {
	title: string
	description?: string
	seo: SharedSeoComponent
	slug: string
	locale: string
	sitemap_exclude?: boolean
}

export interface ContactsPageRequest {
	data: {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ContactsPageLocalizationResponse {
	id?: number
	title?: string
	description?: string
	seo?: SharedSeoComponent
	slug?: string
	/** @format date-time */
	createdAt?: string
	/** @format date-time */
	updatedAt?: string
	/** @format date-time */
	publishedAt?: string
	createdBy?: {
		data?: {
			id?: number
			attributes?: {
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
						id?: number
						attributes?: {
							name?: string
							code?: string
							description?: string
							users?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							permissions?: {
								data?: {
									id?: number
									attributes?: {
										action?: string
										subject?: string
										properties?: any
										conditions?: any
										role?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
									}
								}[]
							}
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
						}
					}[]
				}
				blocked?: boolean
				preferedLanguage?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
			}
		}
	}
	updatedBy?: {
		data?: {
			id?: number
			attributes?: object
		}
	}
	localizations?: {
		data?: any[]
	}
	locale?: string
	sitemap_exclude?: boolean
}

export interface ContactsPageListResponseDataItem {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: ContactsPageListResponseDataItemLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ContactsPageListResponseDataItemLocalized {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ContactsPageListResponse {
	data?: ContactsPageListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface ContactsPageResponseDataObject {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: ContactsPageResponseDataObjectLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ContactsPageResponseDataObjectLocalized {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ContactsPageResponse {
	data?: ContactsPageResponseDataObject
	meta?: object
}

export interface GlobalLocalizationRequest {
	socialMedia?: SharedLinkComponent[]
	/** @example "string or id" */
	logo: number | string
	footer: GlobalFooterComponent
	/** @example "string or id" */
	favicon: number | string
	locale: string
	sitemap_exclude?: boolean
}

export interface GlobalRequest {
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

export interface GlobalLocalizationResponse {
	id?: number
	socialMedia?: SharedLinkComponent[]
	logo?: {
		data?: {
			id?: number
			attributes?: {
				name?: string
				alternativeText?: string
				caption?: string
				width?: number
				height?: number
				formats?: any
				hash?: string
				ext?: string
				mime?: string
				/** @format float */
				size?: number
				url?: string
				previewUrl?: string
				provider?: string
				provider_metadata?: any
				related?: {
					data?: {
						id?: number
						attributes?: object
					}[]
				}
				folder?: {
					data?: {
						id?: number
						attributes?: {
							name?: string
							pathId?: number
							parent?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							children?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							files?: {
								data?: {
									id?: number
									attributes?: {
										name?: string
										alternativeText?: string
										caption?: string
										width?: number
										height?: number
										formats?: any
										hash?: string
										ext?: string
										mime?: string
										/** @format float */
										size?: number
										url?: string
										previewUrl?: string
										provider?: string
										provider_metadata?: any
										related?: {
											data?: {
												id?: number
												attributes?: object
											}[]
										}
										folder?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										folderPath?: string
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: {
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
															id?: number
															attributes?: {
																name?: string
																code?: string
																description?: string
																users?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}[]
																}
																permissions?: {
																	data?: {
																		id?: number
																		attributes?: {
																			action?: string
																			subject?: string
																			properties?: any
																			conditions?: any
																			role?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																			/** @format date-time */
																			createdAt?: string
																			/** @format date-time */
																			updatedAt?: string
																			createdBy?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																			updatedBy?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																		}
																	}[]
																}
																/** @format date-time */
																createdAt?: string
																/** @format date-time */
																updatedAt?: string
																createdBy?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}
																}
																updatedBy?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}
																}
															}
														}[]
													}
													blocked?: boolean
													preferedLanguage?: string
													/** @format date-time */
													createdAt?: string
													/** @format date-time */
													updatedAt?: string
													createdBy?: {
														data?: {
															id?: number
															attributes?: object
														}
													}
													updatedBy?: {
														data?: {
															id?: number
															attributes?: object
														}
													}
												}
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										sitemap_exclude?: boolean
									}
								}[]
							}
							path?: string
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							sitemap_exclude?: boolean
						}
					}
				}
				folderPath?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				sitemap_exclude?: boolean
			}
		}
	}
	footer?: GlobalFooterComponent
	favicon?: {
		data?: {
			id?: number
			attributes?: {
				name?: string
				alternativeText?: string
				caption?: string
				width?: number
				height?: number
				formats?: any
				hash?: string
				ext?: string
				mime?: string
				/** @format float */
				size?: number
				url?: string
				previewUrl?: string
				provider?: string
				provider_metadata?: any
				related?: {
					data?: {
						id?: number
						attributes?: object
					}[]
				}
				folder?: {
					data?: {
						id?: number
						attributes?: {
							name?: string
							pathId?: number
							parent?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							children?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							files?: {
								data?: {
									id?: number
									attributes?: {
										name?: string
										alternativeText?: string
										caption?: string
										width?: number
										height?: number
										formats?: any
										hash?: string
										ext?: string
										mime?: string
										/** @format float */
										size?: number
										url?: string
										previewUrl?: string
										provider?: string
										provider_metadata?: any
										related?: {
											data?: {
												id?: number
												attributes?: object
											}[]
										}
										folder?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										folderPath?: string
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: {
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
															id?: number
															attributes?: {
																name?: string
																code?: string
																description?: string
																users?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}[]
																}
																permissions?: {
																	data?: {
																		id?: number
																		attributes?: {
																			action?: string
																			subject?: string
																			properties?: any
																			conditions?: any
																			role?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																			/** @format date-time */
																			createdAt?: string
																			/** @format date-time */
																			updatedAt?: string
																			createdBy?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																			updatedBy?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																		}
																	}[]
																}
																/** @format date-time */
																createdAt?: string
																/** @format date-time */
																updatedAt?: string
																createdBy?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}
																}
																updatedBy?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}
																}
															}
														}[]
													}
													blocked?: boolean
													preferedLanguage?: string
													/** @format date-time */
													createdAt?: string
													/** @format date-time */
													updatedAt?: string
													createdBy?: {
														data?: {
															id?: number
															attributes?: object
														}
													}
													updatedBy?: {
														data?: {
															id?: number
															attributes?: object
														}
													}
												}
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										sitemap_exclude?: boolean
									}
								}[]
							}
							path?: string
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							sitemap_exclude?: boolean
						}
					}
				}
				folderPath?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				sitemap_exclude?: boolean
			}
		}
	}
	/** @format date-time */
	createdAt?: string
	/** @format date-time */
	updatedAt?: string
	createdBy?: {
		data?: {
			id?: number
			attributes?: {
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
						id?: number
						attributes?: {
							name?: string
							code?: string
							description?: string
							users?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							permissions?: {
								data?: {
									id?: number
									attributes?: {
										action?: string
										subject?: string
										properties?: any
										conditions?: any
										role?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
									}
								}[]
							}
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
						}
					}[]
				}
				blocked?: boolean
				preferedLanguage?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
			}
		}
	}
	updatedBy?: {
		data?: {
			id?: number
			attributes?: object
		}
	}
	localizations?: {
		data?: any[]
	}
	locale?: string
	sitemap_exclude?: boolean
}

export interface GlobalListResponseDataItem {
	id?: number
	attributes?: {
		socialMedia?: SharedLinkComponent[]
		logo?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats?: any
					hash?: string
					ext?: string
					mime?: string
					/** @format float */
					size?: number
					url?: string
					previewUrl?: string
					provider?: string
					provider_metadata?: any
					related?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					folder?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								pathId?: number
								parent?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								children?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								files?: {
									data?: {
										id?: number
										attributes?: {
											name?: string
											alternativeText?: string
											caption?: string
											width?: number
											height?: number
											formats?: any
											hash?: string
											ext?: string
											mime?: string
											/** @format float */
											size?: number
											url?: string
											previewUrl?: string
											provider?: string
											provider_metadata?: any
											related?: {
												data?: {
													id?: number
													attributes?: object
												}[]
											}
											folder?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											folderPath?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								path?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}
					}
					folderPath?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		footer?: GlobalFooterComponent
		favicon?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats?: any
					hash?: string
					ext?: string
					mime?: string
					/** @format float */
					size?: number
					url?: string
					previewUrl?: string
					provider?: string
					provider_metadata?: any
					related?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					folder?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								pathId?: number
								parent?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								children?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								files?: {
									data?: {
										id?: number
										attributes?: {
											name?: string
											alternativeText?: string
											caption?: string
											width?: number
											height?: number
											formats?: any
											hash?: string
											ext?: string
											mime?: string
											/** @format float */
											size?: number
											url?: string
											previewUrl?: string
											provider?: string
											provider_metadata?: any
											related?: {
												data?: {
													id?: number
													attributes?: object
												}[]
											}
											folder?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											folderPath?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								path?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}
					}
					folderPath?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: GlobalListResponseDataItemLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface GlobalListResponseDataItemLocalized {
	id?: number
	attributes?: {
		socialMedia?: SharedLinkComponent[]
		logo?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats?: any
					hash?: string
					ext?: string
					mime?: string
					/** @format float */
					size?: number
					url?: string
					previewUrl?: string
					provider?: string
					provider_metadata?: any
					related?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					folder?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								pathId?: number
								parent?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								children?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								files?: {
									data?: {
										id?: number
										attributes?: {
											name?: string
											alternativeText?: string
											caption?: string
											width?: number
											height?: number
											formats?: any
											hash?: string
											ext?: string
											mime?: string
											/** @format float */
											size?: number
											url?: string
											previewUrl?: string
											provider?: string
											provider_metadata?: any
											related?: {
												data?: {
													id?: number
													attributes?: object
												}[]
											}
											folder?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											folderPath?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								path?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}
					}
					folderPath?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		footer?: GlobalFooterComponent
		favicon?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats?: any
					hash?: string
					ext?: string
					mime?: string
					/** @format float */
					size?: number
					url?: string
					previewUrl?: string
					provider?: string
					provider_metadata?: any
					related?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					folder?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								pathId?: number
								parent?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								children?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								files?: {
									data?: {
										id?: number
										attributes?: {
											name?: string
											alternativeText?: string
											caption?: string
											width?: number
											height?: number
											formats?: any
											hash?: string
											ext?: string
											mime?: string
											/** @format float */
											size?: number
											url?: string
											previewUrl?: string
											provider?: string
											provider_metadata?: any
											related?: {
												data?: {
													id?: number
													attributes?: object
												}[]
											}
											folder?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											folderPath?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								path?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}
					}
					folderPath?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface GlobalListResponse {
	data?: GlobalListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface GlobalResponseDataObject {
	id?: number
	attributes?: {
		socialMedia?: SharedLinkComponent[]
		logo?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats?: any
					hash?: string
					ext?: string
					mime?: string
					/** @format float */
					size?: number
					url?: string
					previewUrl?: string
					provider?: string
					provider_metadata?: any
					related?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					folder?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								pathId?: number
								parent?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								children?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								files?: {
									data?: {
										id?: number
										attributes?: {
											name?: string
											alternativeText?: string
											caption?: string
											width?: number
											height?: number
											formats?: any
											hash?: string
											ext?: string
											mime?: string
											/** @format float */
											size?: number
											url?: string
											previewUrl?: string
											provider?: string
											provider_metadata?: any
											related?: {
												data?: {
													id?: number
													attributes?: object
												}[]
											}
											folder?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											folderPath?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								path?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}
					}
					folderPath?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		footer?: GlobalFooterComponent
		favicon?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats?: any
					hash?: string
					ext?: string
					mime?: string
					/** @format float */
					size?: number
					url?: string
					previewUrl?: string
					provider?: string
					provider_metadata?: any
					related?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					folder?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								pathId?: number
								parent?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								children?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								files?: {
									data?: {
										id?: number
										attributes?: {
											name?: string
											alternativeText?: string
											caption?: string
											width?: number
											height?: number
											formats?: any
											hash?: string
											ext?: string
											mime?: string
											/** @format float */
											size?: number
											url?: string
											previewUrl?: string
											provider?: string
											provider_metadata?: any
											related?: {
												data?: {
													id?: number
													attributes?: object
												}[]
											}
											folder?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											folderPath?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								path?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}
					}
					folderPath?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: GlobalResponseDataObjectLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface GlobalResponseDataObjectLocalized {
	id?: number
	attributes?: {
		socialMedia?: SharedLinkComponent[]
		logo?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats?: any
					hash?: string
					ext?: string
					mime?: string
					/** @format float */
					size?: number
					url?: string
					previewUrl?: string
					provider?: string
					provider_metadata?: any
					related?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					folder?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								pathId?: number
								parent?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								children?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								files?: {
									data?: {
										id?: number
										attributes?: {
											name?: string
											alternativeText?: string
											caption?: string
											width?: number
											height?: number
											formats?: any
											hash?: string
											ext?: string
											mime?: string
											/** @format float */
											size?: number
											url?: string
											previewUrl?: string
											provider?: string
											provider_metadata?: any
											related?: {
												data?: {
													id?: number
													attributes?: object
												}[]
											}
											folder?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											folderPath?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								path?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}
					}
					folderPath?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		footer?: GlobalFooterComponent
		favicon?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats?: any
					hash?: string
					ext?: string
					mime?: string
					/** @format float */
					size?: number
					url?: string
					previewUrl?: string
					provider?: string
					provider_metadata?: any
					related?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					folder?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								pathId?: number
								parent?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								children?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								files?: {
									data?: {
										id?: number
										attributes?: {
											name?: string
											alternativeText?: string
											caption?: string
											width?: number
											height?: number
											formats?: any
											hash?: string
											ext?: string
											mime?: string
											/** @format float */
											size?: number
											url?: string
											previewUrl?: string
											provider?: string
											provider_metadata?: any
											related?: {
												data?: {
													id?: number
													attributes?: object
												}[]
											}
											folder?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											folderPath?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								path?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}
					}
					folderPath?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface GlobalResponse {
	data?: GlobalResponseDataObject
	meta?: object
}

export interface SharedLinkComponent {
	id?: number
	href?: string
	label?: string
	target?: '_blank'
	isExternal?: boolean
}

export interface GlobalFooterComponent {
	id?: number
	copyright?: string
}

export interface HomePageLocalizationRequest {
	seo: SharedSeoComponent
	blocks: (LogoCloudsGrid | HeroSimpleCentered | (LogoCloudsGrid & HeroSimpleCentered))[]
	locale: string
	sitemap_exclude?: boolean
}

export interface HomePageRequest {
	data: {
		seo: SharedSeoComponent
		blocks: (LogoCloudsGrid | HeroSimpleCentered | (LogoCloudsGrid & HeroSimpleCentered))[]
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface HomePageLocalizationResponse {
	id?: number
	seo?: SharedSeoComponent
	blocks?: (LogoCloudsGrid | HeroSimpleCentered | (LogoCloudsGrid & HeroSimpleCentered))[]
	/** @format date-time */
	createdAt?: string
	/** @format date-time */
	updatedAt?: string
	/** @format date-time */
	publishedAt?: string
	createdBy?: {
		data?: {
			id?: number
			attributes?: {
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
						id?: number
						attributes?: {
							name?: string
							code?: string
							description?: string
							users?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							permissions?: {
								data?: {
									id?: number
									attributes?: {
										action?: string
										subject?: string
										properties?: any
										conditions?: any
										role?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
									}
								}[]
							}
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
						}
					}[]
				}
				blocked?: boolean
				preferedLanguage?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
			}
		}
	}
	updatedBy?: {
		data?: {
			id?: number
			attributes?: object
		}
	}
	localizations?: {
		data?: any[]
	}
	locale?: string
	sitemap_exclude?: boolean
}

export interface HomePageListResponseDataItem {
	id?: number
	attributes?: {
		seo?: SharedSeoComponent
		blocks?: (LogoCloudsGrid | HeroSimpleCentered | (LogoCloudsGrid & HeroSimpleCentered))[]
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: HomePageListResponseDataItemLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface HomePageListResponseDataItemLocalized {
	id?: number
	attributes?: {
		seo?: SharedSeoComponent
		blocks?: (LogoCloudsGrid | HeroSimpleCentered | (LogoCloudsGrid & HeroSimpleCentered))[]
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface HomePageListResponse {
	data?: HomePageListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface HomePageResponseDataObject {
	id?: number
	attributes?: {
		seo?: SharedSeoComponent
		blocks?: (LogoCloudsGrid | HeroSimpleCentered | (LogoCloudsGrid & HeroSimpleCentered))[]
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: HomePageResponseDataObjectLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface HomePageResponseDataObjectLocalized {
	id?: number
	attributes?: {
		seo?: SharedSeoComponent
		blocks?: (LogoCloudsGrid | HeroSimpleCentered | (LogoCloudsGrid & HeroSimpleCentered))[]
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface HomePageResponse {
	data?: HomePageResponseDataObject
	meta?: object
}

export interface LogoCloudsGrid {
	id?: number
	__component?: string
	title?: string
	logos?: {
		data?: {
			id?: number
			attributes?: {
				name?: string
				alternativeText?: string
				caption?: string
				width?: number
				height?: number
				formats?: any
				hash?: string
				ext?: string
				mime?: string
				/** @format float */
				size?: number
				url?: string
				previewUrl?: string
				provider?: string
				provider_metadata?: any
				related?: {
					data?: {
						id?: number
						attributes?: object
					}[]
				}
				folder?: {
					data?: {
						id?: number
						attributes?: {
							name?: string
							pathId?: number
							parent?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							children?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							files?: {
								data?: {
									id?: number
									attributes?: {
										name?: string
										alternativeText?: string
										caption?: string
										width?: number
										height?: number
										formats?: any
										hash?: string
										ext?: string
										mime?: string
										/** @format float */
										size?: number
										url?: string
										previewUrl?: string
										provider?: string
										provider_metadata?: any
										related?: {
											data?: {
												id?: number
												attributes?: object
											}[]
										}
										folder?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										folderPath?: string
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: {
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
															id?: number
															attributes?: {
																name?: string
																code?: string
																description?: string
																users?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}[]
																}
																permissions?: {
																	data?: {
																		id?: number
																		attributes?: {
																			action?: string
																			subject?: string
																			properties?: any
																			conditions?: any
																			role?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																			/** @format date-time */
																			createdAt?: string
																			/** @format date-time */
																			updatedAt?: string
																			createdBy?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																			updatedBy?: {
																				data?: {
																					id?: number
																					attributes?: object
																				}
																			}
																		}
																	}[]
																}
																/** @format date-time */
																createdAt?: string
																/** @format date-time */
																updatedAt?: string
																createdBy?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}
																}
																updatedBy?: {
																	data?: {
																		id?: number
																		attributes?: object
																	}
																}
															}
														}[]
													}
													blocked?: boolean
													preferedLanguage?: string
													/** @format date-time */
													createdAt?: string
													/** @format date-time */
													updatedAt?: string
													createdBy?: {
														data?: {
															id?: number
															attributes?: object
														}
													}
													updatedBy?: {
														data?: {
															id?: number
															attributes?: object
														}
													}
												}
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										sitemap_exclude?: boolean
									}
								}[]
							}
							path?: string
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							sitemap_exclude?: boolean
						}
					}
				}
				folderPath?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				sitemap_exclude?: boolean
			}
		}[]
	}
}

export interface HeroSimpleCentered {
	id?: number
	__component?: string
	title?: string
	description?: string
	primaryLink?: SharedLinkComponent
	secondaryLink?: SharedLinkComponent
	topLink?: SharedLinkComponent
	topText?: string
}

export interface NotFoundPageLocalizationRequest {
	title: string
	description?: string
	seoTitle: string
	locale: string
	sitemap_exclude?: boolean
}

export interface NotFoundPageRequest {
	data: {
		title: string
		description?: string
		seoTitle: string
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface NotFoundPageLocalizationResponse {
	id?: number
	title?: string
	description?: string
	seoTitle?: string
	/** @format date-time */
	createdAt?: string
	/** @format date-time */
	updatedAt?: string
	/** @format date-time */
	publishedAt?: string
	createdBy?: {
		data?: {
			id?: number
			attributes?: {
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
						id?: number
						attributes?: {
							name?: string
							code?: string
							description?: string
							users?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							permissions?: {
								data?: {
									id?: number
									attributes?: {
										action?: string
										subject?: string
										properties?: any
										conditions?: any
										role?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
									}
								}[]
							}
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
						}
					}[]
				}
				blocked?: boolean
				preferedLanguage?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
			}
		}
	}
	updatedBy?: {
		data?: {
			id?: number
			attributes?: object
		}
	}
	localizations?: {
		data?: any[]
	}
	locale?: string
	sitemap_exclude?: boolean
}

export interface NotFoundPageListResponseDataItem {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seoTitle?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: NotFoundPageListResponseDataItemLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface NotFoundPageListResponseDataItemLocalized {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seoTitle?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface NotFoundPageListResponse {
	data?: NotFoundPageListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface NotFoundPageResponseDataObject {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seoTitle?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: NotFoundPageResponseDataObjectLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface NotFoundPageResponseDataObjectLocalized {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seoTitle?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface NotFoundPageResponse {
	data?: NotFoundPageResponseDataObject
	meta?: object
}

export interface PageLocalizationRequest {
	seo: SharedSeoComponent
	title: string
	slug: string
	locale: string
	sitemap_exclude?: boolean
}

export interface PageRequest {
	data: {
		seo: SharedSeoComponent
		title: string
		slug: string
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface PageLocalizationResponse {
	id?: number
	seo?: SharedSeoComponent
	title?: string
	slug?: string
	/** @format date-time */
	createdAt?: string
	/** @format date-time */
	updatedAt?: string
	/** @format date-time */
	publishedAt?: string
	createdBy?: {
		data?: {
			id?: number
			attributes?: {
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
						id?: number
						attributes?: {
							name?: string
							code?: string
							description?: string
							users?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							permissions?: {
								data?: {
									id?: number
									attributes?: {
										action?: string
										subject?: string
										properties?: any
										conditions?: any
										role?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
									}
								}[]
							}
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
						}
					}[]
				}
				blocked?: boolean
				preferedLanguage?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
			}
		}
	}
	updatedBy?: {
		data?: {
			id?: number
			attributes?: object
		}
	}
	localizations?: {
		data?: any[]
	}
	locale?: string
	sitemap_exclude?: boolean
}

export interface PageListResponseDataItem {
	id?: number
	attributes?: {
		seo?: SharedSeoComponent
		title?: string
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: PageListResponseDataItemLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface PageListResponseDataItemLocalized {
	id?: number
	attributes?: {
		seo?: SharedSeoComponent
		title?: string
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface PageListResponse {
	data?: PageListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface PageResponseDataObject {
	id?: number
	attributes?: {
		seo?: SharedSeoComponent
		title?: string
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: PageResponseDataObjectLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface PageResponseDataObjectLocalized {
	id?: number
	attributes?: {
		seo?: SharedSeoComponent
		title?: string
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface PageResponse {
	data?: PageResponseDataObject
	meta?: object
}

export interface ServiceLocalizationRequest {
	title: string
	description?: string
	slug: string
	seo: SharedSeoComponent
	locale: string
	sitemap_exclude?: boolean
}

export interface ServiceRequest {
	data: {
		title: string
		description?: string
		slug: string
		seo: SharedSeoComponent
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ServiceLocalizationResponse {
	id?: number
	title?: string
	description?: string
	slug?: string
	seo?: SharedSeoComponent
	/** @format date-time */
	createdAt?: string
	/** @format date-time */
	updatedAt?: string
	/** @format date-time */
	publishedAt?: string
	createdBy?: {
		data?: {
			id?: number
			attributes?: {
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
						id?: number
						attributes?: {
							name?: string
							code?: string
							description?: string
							users?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							permissions?: {
								data?: {
									id?: number
									attributes?: {
										action?: string
										subject?: string
										properties?: any
										conditions?: any
										role?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
									}
								}[]
							}
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
						}
					}[]
				}
				blocked?: boolean
				preferedLanguage?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
			}
		}
	}
	updatedBy?: {
		data?: {
			id?: number
			attributes?: object
		}
	}
	localizations?: {
		data?: any[]
	}
	locale?: string
	sitemap_exclude?: boolean
}

export interface ServiceListResponseDataItem {
	id?: number
	attributes?: {
		title?: string
		description?: string
		slug?: string
		seo?: SharedSeoComponent
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: ServiceListResponseDataItemLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ServiceListResponseDataItemLocalized {
	id?: number
	attributes?: {
		title?: string
		description?: string
		slug?: string
		seo?: SharedSeoComponent
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ServiceListResponse {
	data?: ServiceListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface ServiceResponseDataObject {
	id?: number
	attributes?: {
		title?: string
		description?: string
		slug?: string
		seo?: SharedSeoComponent
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: ServiceResponseDataObjectLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ServiceResponseDataObjectLocalized {
	id?: number
	attributes?: {
		title?: string
		description?: string
		slug?: string
		seo?: SharedSeoComponent
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ServiceResponse {
	data?: ServiceResponseDataObject
	meta?: object
}

export interface ServicesPageLocalizationRequest {
	title: string
	description?: string
	seo: SharedSeoComponent
	slug: string
	locale: string
	sitemap_exclude?: boolean
}

export interface ServicesPageRequest {
	data: {
		title: string
		description?: string
		seo: SharedSeoComponent
		slug: string
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ServicesPageLocalizationResponse {
	id?: number
	title?: string
	description?: string
	seo?: SharedSeoComponent
	slug?: string
	/** @format date-time */
	createdAt?: string
	/** @format date-time */
	updatedAt?: string
	/** @format date-time */
	publishedAt?: string
	createdBy?: {
		data?: {
			id?: number
			attributes?: {
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
						id?: number
						attributes?: {
							name?: string
							code?: string
							description?: string
							users?: {
								data?: {
									id?: number
									attributes?: object
								}[]
							}
							permissions?: {
								data?: {
									id?: number
									attributes?: {
										action?: string
										subject?: string
										properties?: any
										conditions?: any
										role?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										/** @format date-time */
										createdAt?: string
										/** @format date-time */
										updatedAt?: string
										createdBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
										updatedBy?: {
											data?: {
												id?: number
												attributes?: object
											}
										}
									}
								}[]
							}
							/** @format date-time */
							createdAt?: string
							/** @format date-time */
							updatedAt?: string
							createdBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
							updatedBy?: {
								data?: {
									id?: number
									attributes?: object
								}
							}
						}
					}[]
				}
				blocked?: boolean
				preferedLanguage?: string
				/** @format date-time */
				createdAt?: string
				/** @format date-time */
				updatedAt?: string
				createdBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
				updatedBy?: {
					data?: {
						id?: number
						attributes?: object
					}
				}
			}
		}
	}
	updatedBy?: {
		data?: {
			id?: number
			attributes?: object
		}
	}
	localizations?: {
		data?: any[]
	}
	locale?: string
	sitemap_exclude?: boolean
}

export interface ServicesPageListResponseDataItem {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: ServicesPageListResponseDataItemLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ServicesPageListResponseDataItemLocalized {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ServicesPageListResponse {
	data?: ServicesPageListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface ServicesPageResponseDataObject {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: ServicesPageResponseDataObjectLocalized[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ServicesPageResponseDataObjectLocalized {
	id?: number
	attributes?: {
		title?: string
		description?: string
		seo?: SharedSeoComponent
		slug?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		/** @format date-time */
		publishedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: {
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
							id?: number
							attributes?: {
								name?: string
								code?: string
								description?: string
								users?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								permissions?: {
									data?: {
										id?: number
										attributes?: {
											action?: string
											subject?: string
											properties?: any
											conditions?: any
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					blocked?: boolean
					preferedLanguage?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		localizations?: {
			data?: any[]
		}
		locale?: string
		sitemap_exclude?: boolean
	}
}

export interface ServicesPageResponse {
	data?: ServicesPageResponseDataObject
	meta?: object
}

export interface UploadFileRequest {
	data: {
		name: string
		alternativeText?: string
		caption?: string
		width?: number
		height?: number
		formats?: any
		hash: string
		ext?: string
		mime: string
		/** @format float */
		size: number
		url: string
		previewUrl?: string
		provider: string
		provider_metadata?: any
		related?: (number | string)[]
		/** @example "string or id" */
		folder?: number | string
		folderPath: string
		sitemap_exclude?: boolean
	}
}

export interface UploadFileListResponseDataItem {
	id?: number
	attributes?: {
		name?: string
		alternativeText?: string
		caption?: string
		width?: number
		height?: number
		formats?: any
		hash?: string
		ext?: string
		mime?: string
		/** @format float */
		size?: number
		url?: string
		previewUrl?: string
		provider?: string
		provider_metadata?: any
		related?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		folder?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					pathId?: number
					parent?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					children?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					files?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								alternativeText?: string
								caption?: string
								width?: number
								height?: number
								formats?: any
								hash?: string
								ext?: string
								mime?: string
								/** @format float */
								size?: number
								url?: string
								previewUrl?: string
								provider?: string
								provider_metadata?: any
								related?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								folder?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								folderPath?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					path?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		folderPath?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UploadFileListResponseDataItemLocalized {
	id?: number
	attributes?: {
		name?: string
		alternativeText?: string
		caption?: string
		width?: number
		height?: number
		formats?: any
		hash?: string
		ext?: string
		mime?: string
		/** @format float */
		size?: number
		url?: string
		previewUrl?: string
		provider?: string
		provider_metadata?: any
		related?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		folder?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					pathId?: number
					parent?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					children?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					files?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								alternativeText?: string
								caption?: string
								width?: number
								height?: number
								formats?: any
								hash?: string
								ext?: string
								mime?: string
								/** @format float */
								size?: number
								url?: string
								previewUrl?: string
								provider?: string
								provider_metadata?: any
								related?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								folder?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								folderPath?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					path?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		folderPath?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UploadFileListResponse {
	data?: UploadFileListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface UploadFileResponseDataObject {
	id?: number
	attributes?: {
		name?: string
		alternativeText?: string
		caption?: string
		width?: number
		height?: number
		formats?: any
		hash?: string
		ext?: string
		mime?: string
		/** @format float */
		size?: number
		url?: string
		previewUrl?: string
		provider?: string
		provider_metadata?: any
		related?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		folder?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					pathId?: number
					parent?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					children?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					files?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								alternativeText?: string
								caption?: string
								width?: number
								height?: number
								formats?: any
								hash?: string
								ext?: string
								mime?: string
								/** @format float */
								size?: number
								url?: string
								previewUrl?: string
								provider?: string
								provider_metadata?: any
								related?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								folder?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								folderPath?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					path?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		folderPath?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UploadFileResponseDataObjectLocalized {
	id?: number
	attributes?: {
		name?: string
		alternativeText?: string
		caption?: string
		width?: number
		height?: number
		formats?: any
		hash?: string
		ext?: string
		mime?: string
		/** @format float */
		size?: number
		url?: string
		previewUrl?: string
		provider?: string
		provider_metadata?: any
		related?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		folder?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					pathId?: number
					parent?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					children?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					files?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								alternativeText?: string
								caption?: string
								width?: number
								height?: number
								formats?: any
								hash?: string
								ext?: string
								mime?: string
								/** @format float */
								size?: number
								url?: string
								previewUrl?: string
								provider?: string
								provider_metadata?: any
								related?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								folder?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								folderPath?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					path?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		folderPath?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UploadFileResponse {
	data?: UploadFileResponseDataObject
	meta?: object
}

export interface UploadFolderRequest {
	data: {
		name: string
		pathId: number
		/** @example "string or id" */
		parent?: number | string
		children?: (number | string)[]
		files?: (number | string)[]
		path: string
		sitemap_exclude?: boolean
	}
}

export interface UploadFolderListResponseDataItem {
	id?: number
	attributes?: {
		name?: string
		pathId?: number
		parent?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					pathId?: number
					parent?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					children?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					files?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								alternativeText?: string
								caption?: string
								width?: number
								height?: number
								formats?: any
								hash?: string
								ext?: string
								mime?: string
								/** @format float */
								size?: number
								url?: string
								previewUrl?: string
								provider?: string
								provider_metadata?: any
								related?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								folder?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								folderPath?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					path?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		children?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		files?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		path?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UploadFolderListResponseDataItemLocalized {
	id?: number
	attributes?: {
		name?: string
		pathId?: number
		parent?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					pathId?: number
					parent?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					children?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					files?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								alternativeText?: string
								caption?: string
								width?: number
								height?: number
								formats?: any
								hash?: string
								ext?: string
								mime?: string
								/** @format float */
								size?: number
								url?: string
								previewUrl?: string
								provider?: string
								provider_metadata?: any
								related?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								folder?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								folderPath?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					path?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		children?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		files?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		path?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UploadFolderListResponse {
	data?: UploadFolderListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface UploadFolderResponseDataObject {
	id?: number
	attributes?: {
		name?: string
		pathId?: number
		parent?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					pathId?: number
					parent?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					children?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					files?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								alternativeText?: string
								caption?: string
								width?: number
								height?: number
								formats?: any
								hash?: string
								ext?: string
								mime?: string
								/** @format float */
								size?: number
								url?: string
								previewUrl?: string
								provider?: string
								provider_metadata?: any
								related?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								folder?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								folderPath?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					path?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		children?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		files?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		path?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UploadFolderResponseDataObjectLocalized {
	id?: number
	attributes?: {
		name?: string
		pathId?: number
		parent?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					pathId?: number
					parent?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					children?: {
						data?: {
							id?: number
							attributes?: object
						}[]
					}
					files?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								alternativeText?: string
								caption?: string
								width?: number
								height?: number
								formats?: any
								hash?: string
								ext?: string
								mime?: string
								/** @format float */
								size?: number
								url?: string
								previewUrl?: string
								provider?: string
								provider_metadata?: any
								related?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								folder?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								folderPath?: string
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					path?: string
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					sitemap_exclude?: boolean
				}
			}
		}
		children?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		files?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		path?: string
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UploadFolderResponse {
	data?: UploadFolderResponseDataObject
	meta?: object
}

export interface UsersPermissionsPermissionRequest {
	data: {
		action: string
		/** @example "string or id" */
		role?: number | string
	}
}

export interface UsersPermissionsPermissionListResponseDataItem {
	id?: number
	attributes?: {
		action?: string
		role?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					description?: string
					type?: string
					permissions?: {
						data?: {
							id?: number
							attributes?: {
								action?: string
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					users?: {
						data?: {
							id?: number
							attributes?: {
								username?: string
								/** @format email */
								email?: string
								provider?: string
								resetPasswordToken?: string
								confirmationToken?: string
								confirmed?: boolean
								blocked?: boolean
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
	}
}

export interface UsersPermissionsPermissionListResponseDataItemLocalized {
	id?: number
	attributes?: {
		action?: string
		role?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					description?: string
					type?: string
					permissions?: {
						data?: {
							id?: number
							attributes?: {
								action?: string
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					users?: {
						data?: {
							id?: number
							attributes?: {
								username?: string
								/** @format email */
								email?: string
								provider?: string
								resetPasswordToken?: string
								confirmationToken?: string
								confirmed?: boolean
								blocked?: boolean
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
	}
}

export interface UsersPermissionsPermissionListResponse {
	data?: UsersPermissionsPermissionListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface UsersPermissionsPermissionResponseDataObject {
	id?: number
	attributes?: {
		action?: string
		role?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					description?: string
					type?: string
					permissions?: {
						data?: {
							id?: number
							attributes?: {
								action?: string
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					users?: {
						data?: {
							id?: number
							attributes?: {
								username?: string
								/** @format email */
								email?: string
								provider?: string
								resetPasswordToken?: string
								confirmationToken?: string
								confirmed?: boolean
								blocked?: boolean
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
	}
}

export interface UsersPermissionsPermissionResponseDataObjectLocalized {
	id?: number
	attributes?: {
		action?: string
		role?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					description?: string
					type?: string
					permissions?: {
						data?: {
							id?: number
							attributes?: {
								action?: string
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					users?: {
						data?: {
							id?: number
							attributes?: {
								username?: string
								/** @format email */
								email?: string
								provider?: string
								resetPasswordToken?: string
								confirmationToken?: string
								confirmed?: boolean
								blocked?: boolean
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
	}
}

export interface UsersPermissionsPermissionResponse {
	data?: UsersPermissionsPermissionResponseDataObject
	meta?: object
}

export interface UsersPermissionsRoleRequest {
	data: {
		name: string
		description?: string
		type?: string
		permissions?: (number | string)[]
		users?: (number | string)[]
	}
}

export interface UsersPermissionsRoleListResponseDataItem {
	id?: number
	attributes?: {
		name?: string
		description?: string
		type?: string
		permissions?: {
			data?: {
				id?: number
				attributes?: {
					action?: string
					role?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								description?: string
								type?: string
								permissions?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								users?: {
									data?: {
										id?: number
										attributes?: {
											username?: string
											/** @format email */
											email?: string
											provider?: string
											resetPasswordToken?: string
											confirmationToken?: string
											confirmed?: boolean
											blocked?: boolean
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}[]
		}
		users?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
	}
}

export interface UsersPermissionsRoleListResponseDataItemLocalized {
	id?: number
	attributes?: {
		name?: string
		description?: string
		type?: string
		permissions?: {
			data?: {
				id?: number
				attributes?: {
					action?: string
					role?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								description?: string
								type?: string
								permissions?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								users?: {
									data?: {
										id?: number
										attributes?: {
											username?: string
											/** @format email */
											email?: string
											provider?: string
											resetPasswordToken?: string
											confirmationToken?: string
											confirmed?: boolean
											blocked?: boolean
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}[]
		}
		users?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
	}
}

export interface UsersPermissionsRoleListResponse {
	data?: UsersPermissionsRoleListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface UsersPermissionsRoleResponseDataObject {
	id?: number
	attributes?: {
		name?: string
		description?: string
		type?: string
		permissions?: {
			data?: {
				id?: number
				attributes?: {
					action?: string
					role?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								description?: string
								type?: string
								permissions?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								users?: {
									data?: {
										id?: number
										attributes?: {
											username?: string
											/** @format email */
											email?: string
											provider?: string
											resetPasswordToken?: string
											confirmationToken?: string
											confirmed?: boolean
											blocked?: boolean
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}[]
		}
		users?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
	}
}

export interface UsersPermissionsRoleResponseDataObjectLocalized {
	id?: number
	attributes?: {
		name?: string
		description?: string
		type?: string
		permissions?: {
			data?: {
				id?: number
				attributes?: {
					action?: string
					role?: {
						data?: {
							id?: number
							attributes?: {
								name?: string
								description?: string
								type?: string
								permissions?: {
									data?: {
										id?: number
										attributes?: object
									}[]
								}
								users?: {
									data?: {
										id?: number
										attributes?: {
											username?: string
											/** @format email */
											email?: string
											provider?: string
											resetPasswordToken?: string
											confirmationToken?: string
											confirmed?: boolean
											blocked?: boolean
											role?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: {
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
																id?: number
																attributes?: {
																	name?: string
																	code?: string
																	description?: string
																	users?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}[]
																	}
																	permissions?: {
																		data?: {
																			id?: number
																			attributes?: {
																				action?: string
																				subject?: string
																				properties?: any
																				conditions?: any
																				role?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				/** @format date-time */
																				createdAt?: string
																				/** @format date-time */
																				updatedAt?: string
																				createdBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																				updatedBy?: {
																					data?: {
																						id?: number
																						attributes?: object
																					}
																				}
																			}
																		}[]
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														blocked?: boolean
														preferedLanguage?: string
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											sitemap_exclude?: boolean
										}
									}[]
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}[]
		}
		users?: {
			data?: {
				id?: number
				attributes?: object
			}[]
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
	}
}

export interface UsersPermissionsRoleResponse {
	data?: UsersPermissionsRoleResponseDataObject
	meta?: object
}

export interface UsersPermissionsUserRequest {
	data: {
		username: string
		/** @format email */
		email: string
		provider?: string
		/**
		 * @format password
		 * @example "*******"
		 */
		password?: string
		resetPasswordToken?: string
		confirmationToken?: string
		confirmed?: boolean
		blocked?: boolean
		/** @example "string or id" */
		role?: number | string
		sitemap_exclude?: boolean
	}
}

export interface UsersPermissionsUserListResponseDataItem {
	id?: number
	attributes?: {
		username?: string
		/** @format email */
		email?: string
		provider?: string
		resetPasswordToken?: string
		confirmationToken?: string
		confirmed?: boolean
		blocked?: boolean
		role?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					description?: string
					type?: string
					permissions?: {
						data?: {
							id?: number
							attributes?: {
								action?: string
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					users?: {
						data?: {
							id?: number
							attributes?: {
								username?: string
								/** @format email */
								email?: string
								provider?: string
								resetPasswordToken?: string
								confirmationToken?: string
								confirmed?: boolean
								blocked?: boolean
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UsersPermissionsUserListResponseDataItemLocalized {
	id?: number
	attributes?: {
		username?: string
		/** @format email */
		email?: string
		provider?: string
		resetPasswordToken?: string
		confirmationToken?: string
		confirmed?: boolean
		blocked?: boolean
		role?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					description?: string
					type?: string
					permissions?: {
						data?: {
							id?: number
							attributes?: {
								action?: string
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					users?: {
						data?: {
							id?: number
							attributes?: {
								username?: string
								/** @format email */
								email?: string
								provider?: string
								resetPasswordToken?: string
								confirmationToken?: string
								confirmed?: boolean
								blocked?: boolean
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UsersPermissionsUserListResponse {
	data?: UsersPermissionsUserListResponseDataItem[]
	meta?: {
		pagination?: {
			page?: number
			/** @min 25 */
			pageSize?: number
			/** @max 1 */
			pageCount?: number
			total?: number
		}
	}
}

export interface UsersPermissionsUserResponseDataObject {
	id?: number
	attributes?: {
		username?: string
		/** @format email */
		email?: string
		provider?: string
		resetPasswordToken?: string
		confirmationToken?: string
		confirmed?: boolean
		blocked?: boolean
		role?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					description?: string
					type?: string
					permissions?: {
						data?: {
							id?: number
							attributes?: {
								action?: string
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					users?: {
						data?: {
							id?: number
							attributes?: {
								username?: string
								/** @format email */
								email?: string
								provider?: string
								resetPasswordToken?: string
								confirmationToken?: string
								confirmed?: boolean
								blocked?: boolean
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UsersPermissionsUserResponseDataObjectLocalized {
	id?: number
	attributes?: {
		username?: string
		/** @format email */
		email?: string
		provider?: string
		resetPasswordToken?: string
		confirmationToken?: string
		confirmed?: boolean
		blocked?: boolean
		role?: {
			data?: {
				id?: number
				attributes?: {
					name?: string
					description?: string
					type?: string
					permissions?: {
						data?: {
							id?: number
							attributes?: {
								action?: string
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: {
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
													id?: number
													attributes?: {
														name?: string
														code?: string
														description?: string
														users?: {
															data?: {
																id?: number
																attributes?: object
															}[]
														}
														permissions?: {
															data?: {
																id?: number
																attributes?: {
																	action?: string
																	subject?: string
																	properties?: any
																	conditions?: any
																	role?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	/** @format date-time */
																	createdAt?: string
																	/** @format date-time */
																	updatedAt?: string
																	createdBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																	updatedBy?: {
																		data?: {
																			id?: number
																			attributes?: object
																		}
																	}
																}
															}[]
														}
														/** @format date-time */
														createdAt?: string
														/** @format date-time */
														updatedAt?: string
														createdBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
														updatedBy?: {
															data?: {
																id?: number
																attributes?: object
															}
														}
													}
												}[]
											}
											blocked?: boolean
											preferedLanguage?: string
											/** @format date-time */
											createdAt?: string
											/** @format date-time */
											updatedAt?: string
											createdBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
											updatedBy?: {
												data?: {
													id?: number
													attributes?: object
												}
											}
										}
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
							}
						}[]
					}
					users?: {
						data?: {
							id?: number
							attributes?: {
								username?: string
								/** @format email */
								email?: string
								provider?: string
								resetPasswordToken?: string
								confirmationToken?: string
								confirmed?: boolean
								blocked?: boolean
								role?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								/** @format date-time */
								createdAt?: string
								/** @format date-time */
								updatedAt?: string
								createdBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								updatedBy?: {
									data?: {
										id?: number
										attributes?: object
									}
								}
								sitemap_exclude?: boolean
							}
						}[]
					}
					/** @format date-time */
					createdAt?: string
					/** @format date-time */
					updatedAt?: string
					createdBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
					updatedBy?: {
						data?: {
							id?: number
							attributes?: object
						}
					}
				}
			}
		}
		/** @format date-time */
		createdAt?: string
		/** @format date-time */
		updatedAt?: string
		createdBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		updatedBy?: {
			data?: {
				id?: number
				attributes?: object
			}
		}
		sitemap_exclude?: boolean
	}
}

export interface UsersPermissionsUserResponse {
	data?: UsersPermissionsUserResponseDataObject
	meta?: object
}

export interface UsersPermissionsRole {
	id?: number
	name?: string
	description?: string
	type?: string
	createdAt?: string
	updatedAt?: string
}

export interface UsersPermissionsUser {
	/** @example 1 */
	id?: number
	/** @example "foo.bar" */
	username?: string
	/** @example "foo.bar@strapi.io" */
	email?: string
	/** @example "local" */
	provider?: string
	/** @example true */
	confirmed?: boolean
	/** @example false */
	blocked?: boolean
	/** @example "2022-06-02T08:32:06.258Z" */
	createdAt?: string
	/** @example "2022-06-02T08:32:06.267Z" */
	updatedAt?: string
}

export interface UsersPermissionsUserRegistration {
	/** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
	jwt?: string
	user?: UsersPermissionsUser
}

export type UsersPermissionsPermissionsTree = Record<
	string,
	{
		/** every controller of the api */
		controllers?: Record<
			string,
			Record<
				string,
				{
					enabled?: boolean
					policy?: string
				}
			>
		>
	}
>

export interface GetArticlesParams {
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
}

export interface GetBlogPageParams {
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
}

export interface GetContactsPageParams {
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
}

export interface GetGlobalParams {
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
}

export interface GetHomePageParams {
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
}

export interface GetNotFoundPageParams {
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
}

export interface GetPagesParams {
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
}

export interface GetServicesParams {
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
}

export interface GetServicesPageParams {
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
}

export interface GetUploadFilesParams {
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
}

export interface UsersCreatePayload {
	email: string
	username: string
	password: string
}

export interface UsersUpdatePayload {
	email: string
	username: string
	password: string
}

export interface LocalCreatePayload {
	identifier?: string
	password?: string
}

export interface LocalRegisterCreatePayload {
	username?: string
	email?: string
	password?: string
}

export interface ForgotPasswordCreatePayload {
	email?: string
}

export interface ResetPasswordCreatePayload {
	password?: string
	passwordConfirmation?: string
	code?: string
}

export interface ChangePasswordCreatePayload {
	password: string
	currentPassword: string
	passwordConfirmation: string
}

export interface EmailConfirmationListParams {
	/** confirmation token received by email */
	confirmation?: string
}

export interface SendEmailConfirmationCreatePayload {
	email?: string
}

export namespace Article {
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
		export type RequestQuery = {
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
		}
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

export namespace BlogPage {
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
		export type RequestQuery = {
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
		}
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

export namespace ContactsPage {
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
		export type RequestQuery = {
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
		}
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

export namespace Global {
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
		export type RequestQuery = {
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
		}
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

export namespace HomePage {
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
		export type RequestQuery = {
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
		}
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

export namespace NotFoundPage {
	/**
	 * No description
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
	export namespace GetNotFoundPage {
		export type RequestParams = {}
		export type RequestQuery = {
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
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = NotFoundPageListResponse
	}
	/**
	 * No description
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
	export namespace PutNotFoundPage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = NotFoundPageRequest
		export type RequestHeaders = {}
		export type ResponseBody = NotFoundPageResponse
	}
	/**
	 * No description
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
	export namespace DeleteNotFoundPage {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = number
	}
	/**
	 * No description
	 * @tags Not-found-page
	 * @name PostNotFoundPageLocalizations
	 * @request POST:/not-found-page/localizations
	 * @secure
	 * @response `200` `NotFoundPageLocalizationResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostNotFoundPageLocalizations {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = NotFoundPageLocalizationRequest
		export type RequestHeaders = {}
		export type ResponseBody = NotFoundPageLocalizationResponse
	}
}

export namespace Page {
	/**
	 * No description
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
	export namespace GetPages {
		export type RequestParams = {}
		export type RequestQuery = {
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
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = PageListResponse
	}
	/**
	 * No description
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
	export namespace PostPages {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = PageRequest
		export type RequestHeaders = {}
		export type ResponseBody = PageResponse
	}
	/**
	 * No description
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
	export namespace GetPagesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = PageResponse
	}
	/**
	 * No description
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
	export namespace PutPagesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = PageRequest
		export type RequestHeaders = {}
		export type ResponseBody = PageResponse
	}
	/**
	 * No description
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
	export namespace DeletePagesId {
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
	 * @tags Page
	 * @name PostPagesIdLocalizations
	 * @request POST:/pages/{id}/localizations
	 * @secure
	 * @response `200` `PageLocalizationResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostPagesIdLocalizations {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = PageLocalizationRequest
		export type RequestHeaders = {}
		export type ResponseBody = PageLocalizationResponse
	}
}

export namespace Service {
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
		export type RequestQuery = {
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
		}
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
	/**
	 * No description
	 * @tags Service
	 * @name PostServicesIdLocalizations
	 * @request POST:/services/{id}/localizations
	 * @secure
	 * @response `200` `ServiceLocalizationResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostServicesIdLocalizations {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = ServiceLocalizationRequest
		export type RequestHeaders = {}
		export type ResponseBody = ServiceLocalizationResponse
	}
}

export namespace ServicesPage {
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
		export type RequestQuery = {
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
		}
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
	/**
	 * No description
	 * @tags Services-page
	 * @name PostServicesPageLocalizations
	 * @request POST:/services-page/localizations
	 * @secure
	 * @response `200` `ServicesPageLocalizationResponse` OK
	 * @response `400` `Error` Bad Request
	 * @response `401` `Error` Unauthorized
	 * @response `403` `Error` Forbidden
	 * @response `404` `Error` Not Found
	 * @response `500` `Error` Internal Server Error
	 */
	export namespace PostServicesPageLocalizations {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ServicesPageLocalizationRequest
		export type RequestHeaders = {}
		export type ResponseBody = ServicesPageLocalizationResponse
	}
}

export namespace UploadFile {
	/**
	 * No description
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
	export namespace GetUploadFiles {
		export type RequestParams = {}
		export type RequestQuery = {
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
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UploadFileListResponse
	}
	/**
	 * No description
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
	export namespace GetUploadFilesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UploadFileResponse
	}
	/**
	 * No description
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
	export namespace DeleteUploadFilesId {
		export type RequestParams = {
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = number
	}
}

export namespace UsersPermissionsUsersRoles {
	/**
 * No description
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
	export namespace PermissionsList {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = {
			permissions?: UsersPermissionsPermissionsTree
		}
	} /**
 * No description
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
	export namespace RolesDetail {
		export type RequestParams = {
			/** role Id */
			id?: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = {
			role?: UsersPermissionsRole
		}
	} /**
 * No description
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
	export namespace RolesList {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = {
			roles?: (UsersPermissionsRole & {
				nb_users?: number
			})[]
		}
	} /**
 * No description
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
	export namespace RolesCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = UsersPermissionsRoleRequest
		export type RequestHeaders = {}
		export type ResponseBody = {
			ok?: 'true'
		}
	} /**
 * No description
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
	export namespace RolesUpdate {
		export type RequestParams = {
			/** role Id */
			role?: string
		}
		export type RequestQuery = {}
		export type RequestBody = UsersPermissionsRoleRequest
		export type RequestHeaders = {}
		export type ResponseBody = {
			ok?: 'true'
		}
	} /**
 * No description
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
	export namespace RolesDelete {
		export type RequestParams = {
			/** role Id */
			role?: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = {
			ok?: 'true'
		}
	}
	/**
	 * No description
	 * @tags Users-Permissions - Users & Roles
	 * @name CountList
	 * @summary Get user count
	 * @request GET:/users/count
	 * @secure
	 * @response `200` `number` Returns a number
	 * @response `default` `Error` Error
	 */
	export namespace CountList {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = number
	}
	/**
	 * No description
	 * @tags Users-Permissions - Users & Roles
	 * @name UsersList
	 * @summary Get list of users
	 * @request GET:/users
	 * @secure
	 * @response `200` `(UsersPermissionsUser)[]`
	 * @response `default` `Error` Error
	 */
	export namespace UsersList {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UsersPermissionsUser[]
	} /**
 * No description
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
	export namespace UsersCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = UsersCreatePayload
		export type RequestHeaders = {}
		export type ResponseBody = UsersPermissionsUser & {
			role?: UsersPermissionsRole
		}
	}
	/**
	 * No description
	 * @tags Users-Permissions - Users & Roles
	 * @name GetUsersPermissionsUsersRoles
	 * @summary Get authenticated user info
	 * @request GET:/users/me
	 * @secure
	 * @response `200` `UsersPermissionsUser` Returns user info
	 * @response `default` `Error` Error
	 */
	export namespace GetUsersPermissionsUsersRoles {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UsersPermissionsUser
	}
	/**
	 * No description
	 * @tags Users-Permissions - Users & Roles
	 * @name UsersDetail
	 * @summary Get a user
	 * @request GET:/users/{id}
	 * @secure
	 * @response `200` `UsersPermissionsUser`
	 * @response `default` `Error` Error
	 */
	export namespace UsersDetail {
		export type RequestParams = {
			/** user Id */
			id?: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UsersPermissionsUser
	} /**
 * No description
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
	export namespace UsersUpdate {
		export type RequestParams = {
			/** user Id */
			id?: string
		}
		export type RequestQuery = {}
		export type RequestBody = UsersUpdatePayload
		export type RequestHeaders = {}
		export type ResponseBody = UsersPermissionsUser & {
			role?: UsersPermissionsRole
		}
	}
	/**
	 * No description
	 * @tags Users-Permissions - Users & Roles
	 * @name UsersDelete
	 * @summary Delete a user
	 * @request DELETE:/users/{id}
	 * @secure
	 * @response `200` `(UsersPermissionsUser)` Returns deleted user info
	 * @response `default` `Error` Error
	 */
	export namespace UsersDelete {
		export type RequestParams = {
			id: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UsersPermissionsUser
	}
}

export namespace UsersPermissionsAuth {
	/**
	 * @description Redirects to provider login before being redirect to /auth/{provider}/callback
	 * @tags Users-Permissions - Auth
	 * @name List
	 * @summary Login with a provider
	 * @request GET:/connect/(.*)
	 * @secure
	 * @response `301` `void` Redirect response
	 * @response `default` `Error` Error
	 */
	export namespace List {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = any
	}
	/**
	 * @description Returns a jwt token and user info
	 * @tags Users-Permissions - Auth
	 * @name LocalCreate
	 * @summary Local login
	 * @request POST:/auth/local
	 * @secure
	 * @response `200` `UsersPermissionsUserRegistration` Connection
	 * @response `default` `Error` Error
	 */
	export namespace LocalCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = LocalCreatePayload
		export type RequestHeaders = {}
		export type ResponseBody = UsersPermissionsUserRegistration
	}
	/**
	 * @description Returns a jwt token and user info
	 * @tags Users-Permissions - Auth
	 * @name LocalRegisterCreate
	 * @summary Register a user
	 * @request POST:/auth/local/register
	 * @secure
	 * @response `200` `UsersPermissionsUserRegistration` Successfull registration
	 * @response `default` `Error` Error
	 */
	export namespace LocalRegisterCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = LocalRegisterCreatePayload
		export type RequestHeaders = {}
		export type ResponseBody = UsersPermissionsUserRegistration
	}
	/**
	 * No description
	 * @tags Users-Permissions - Auth
	 * @name CallbackDetail
	 * @summary Default Callback from provider auth
	 * @request GET:/auth/{provider}/callback
	 * @secure
	 * @response `200` `UsersPermissionsUserRegistration` Returns a jwt token and user info
	 * @response `default` `Error` Error
	 */
	export namespace CallbackDetail {
		export type RequestParams = {
			provider: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = UsersPermissionsUserRegistration
	} /**
 * No description
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
	export namespace ForgotPasswordCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ForgotPasswordCreatePayload
		export type RequestHeaders = {}
		export type ResponseBody = {
			ok?: 'true'
		}
	}
	/**
	 * No description
	 * @tags Users-Permissions - Auth
	 * @name ResetPasswordCreate
	 * @summary Rest user password
	 * @request POST:/auth/reset-password
	 * @secure
	 * @response `200` `UsersPermissionsUserRegistration` Returns a jwt token and user info
	 * @response `default` `Error` Error
	 */
	export namespace ResetPasswordCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ResetPasswordCreatePayload
		export type RequestHeaders = {}
		export type ResponseBody = UsersPermissionsUserRegistration
	}
	/**
	 * No description
	 * @tags Users-Permissions - Auth
	 * @name ChangePasswordCreate
	 * @summary Update user's own password
	 * @request POST:/auth/change-password
	 * @secure
	 * @response `200` `UsersPermissionsUserRegistration` Returns a jwt token and user info
	 * @response `default` `Error` Error
	 */
	export namespace ChangePasswordCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ChangePasswordCreatePayload
		export type RequestHeaders = {}
		export type ResponseBody = UsersPermissionsUserRegistration
	}
	/**
	 * No description
	 * @tags Users-Permissions - Auth
	 * @name EmailConfirmationList
	 * @summary Confirm user email
	 * @request GET:/auth/email-confirmation
	 * @secure
	 * @response `301` `void` Redirects to the configure email confirmation redirect url
	 * @response `default` `Error` Error
	 */
	export namespace EmailConfirmationList {
		export type RequestParams = {}
		export type RequestQuery = {
			/** confirmation token received by email */
			confirmation?: string
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = any
	} /**
 * No description
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
	export namespace SendEmailConfirmationCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = SendEmailConfirmationCreatePayload
		export type RequestHeaders = {}
		export type ResponseBody = {
			email?: string
			sent?: 'true'
		}
	}
}

import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	HeadersDefaults,
	ResponseType,
} from 'axios'

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
		getArticles: (query: GetArticlesParams, params: RequestParams = {}) =>
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

		/**
		 * No description
		 *
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
		postArticlesIdLocalizations: (
			id: number,
			data: ArticleLocalizationRequest,
			params: RequestParams = {}
		) =>
			this.request<ArticleLocalizationResponse, Error>({
				path: `/articles/${id}/localizations`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
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
		getBlogPage: (query: GetBlogPageParams, params: RequestParams = {}) =>
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

		/**
		 * No description
		 *
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
		postBlogPageLocalizations: (data: BlogPageLocalizationRequest, params: RequestParams = {}) =>
			this.request<BlogPageLocalizationResponse, Error>({
				path: `/blog-page/localizations`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
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
		getContactsPage: (query: GetContactsPageParams, params: RequestParams = {}) =>
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

		/**
		 * No description
		 *
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
		postContactsPageLocalizations: (
			data: ContactsPageLocalizationRequest,
			params: RequestParams = {}
		) =>
			this.request<ContactsPageLocalizationResponse, Error>({
				path: `/contacts-page/localizations`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
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
		getGlobal: (query: GetGlobalParams, params: RequestParams = {}) =>
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

		/**
		 * No description
		 *
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
		postGlobalLocalizations: (data: GlobalLocalizationRequest, params: RequestParams = {}) =>
			this.request<GlobalLocalizationResponse, Error>({
				path: `/global/localizations`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
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
		getHomePage: (query: GetHomePageParams, params: RequestParams = {}) =>
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

		/**
		 * No description
		 *
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
		postHomePageLocalizations: (data: HomePageLocalizationRequest, params: RequestParams = {}) =>
			this.request<HomePageLocalizationResponse, Error>({
				path: `/home-page/localizations`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
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
		getNotFoundPage: (query: GetNotFoundPageParams, params: RequestParams = {}) =>
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

		/**
		 * No description
		 *
		 * @tags Not-found-page
		 * @name PostNotFoundPageLocalizations
		 * @request POST:/not-found-page/localizations
		 * @secure
		 * @response `200` `NotFoundPageLocalizationResponse` OK
		 * @response `400` `Error` Bad Request
		 * @response `401` `Error` Unauthorized
		 * @response `403` `Error` Forbidden
		 * @response `404` `Error` Not Found
		 * @response `500` `Error` Internal Server Error
		 */
		postNotFoundPageLocalizations: (
			data: NotFoundPageLocalizationRequest,
			params: RequestParams = {}
		) =>
			this.request<NotFoundPageLocalizationResponse, Error>({
				path: `/not-found-page/localizations`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
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
		getPages: (query: GetPagesParams, params: RequestParams = {}) =>
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

		/**
		 * No description
		 *
		 * @tags Page
		 * @name PostPagesIdLocalizations
		 * @request POST:/pages/{id}/localizations
		 * @secure
		 * @response `200` `PageLocalizationResponse` OK
		 * @response `400` `Error` Bad Request
		 * @response `401` `Error` Unauthorized
		 * @response `403` `Error` Forbidden
		 * @response `404` `Error` Not Found
		 * @response `500` `Error` Internal Server Error
		 */
		postPagesIdLocalizations: (
			id: number,
			data: PageLocalizationRequest,
			params: RequestParams = {}
		) =>
			this.request<PageLocalizationResponse, Error>({
				path: `/pages/${id}/localizations`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
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
		getServices: (query: GetServicesParams, params: RequestParams = {}) =>
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

		/**
		 * No description
		 *
		 * @tags Service
		 * @name PostServicesIdLocalizations
		 * @request POST:/services/{id}/localizations
		 * @secure
		 * @response `200` `ServiceLocalizationResponse` OK
		 * @response `400` `Error` Bad Request
		 * @response `401` `Error` Unauthorized
		 * @response `403` `Error` Forbidden
		 * @response `404` `Error` Not Found
		 * @response `500` `Error` Internal Server Error
		 */
		postServicesIdLocalizations: (
			id: number,
			data: ServiceLocalizationRequest,
			params: RequestParams = {}
		) =>
			this.request<ServiceLocalizationResponse, Error>({
				path: `/services/${id}/localizations`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
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
		getServicesPage: (query: GetServicesPageParams, params: RequestParams = {}) =>
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

		/**
		 * No description
		 *
		 * @tags Services-page
		 * @name PostServicesPageLocalizations
		 * @request POST:/services-page/localizations
		 * @secure
		 * @response `200` `ServicesPageLocalizationResponse` OK
		 * @response `400` `Error` Bad Request
		 * @response `401` `Error` Unauthorized
		 * @response `403` `Error` Forbidden
		 * @response `404` `Error` Not Found
		 * @response `500` `Error` Internal Server Error
		 */
		postServicesPageLocalizations: (
			data: ServicesPageLocalizationRequest,
			params: RequestParams = {}
		) =>
			this.request<ServicesPageLocalizationResponse, Error>({
				path: `/services-page/localizations`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
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
		getUploadFiles: (query: GetUploadFilesParams, params: RequestParams = {}) =>
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
