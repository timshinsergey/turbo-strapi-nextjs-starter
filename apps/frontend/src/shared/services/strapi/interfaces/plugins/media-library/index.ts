interface UploadFileRequest {
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

interface UploadFileListResponseDataItem {
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

interface UploadFileListResponseDataItemLocalized {
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

interface UploadFileListResponse {
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

interface UploadFileResponseDataObject {
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

interface UploadFileResponseDataObjectLocalized {
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

interface UploadFileResponse {
	data?: UploadFileResponseDataObject
	meta?: object
}

interface UploadFolderRequest {
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

interface UploadFolderListResponseDataItem {
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

interface UploadFolderListResponseDataItemLocalized {
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

interface UploadFolderListResponse {
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

interface UploadFolderResponseDataObject {
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

interface UploadFolderResponseDataObjectLocalized {
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

interface UploadFolderResponse {
	data?: UploadFolderResponseDataObject
	meta?: object
}

interface GetUploadFilesParams {
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

namespace UploadFile {
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

export type {
	UploadFileRequest,
	UploadFileListResponseDataItem,
	UploadFileListResponseDataItemLocalized,
	UploadFileListResponse,
	UploadFileResponseDataObject,
	UploadFileResponseDataObjectLocalized,
	UploadFileResponse,
	UploadFolderRequest,
	UploadFolderListResponseDataItem,
	UploadFolderListResponseDataItemLocalized,
	UploadFolderListResponse,
	UploadFolderResponseDataObject,
	UploadFolderResponseDataObjectLocalized,
	UploadFolderResponse,
	GetUploadFilesParams,
	UploadFile,
}
