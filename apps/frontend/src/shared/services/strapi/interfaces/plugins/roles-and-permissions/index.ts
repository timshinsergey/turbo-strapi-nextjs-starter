interface UsersPermissionsPermissionRequest {
	data: {
		action: string
		/** @example "string or id" */
		role?: number | string
	}
}

interface UsersPermissionsPermissionListResponseDataItem {
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

interface UsersPermissionsPermissionListResponseDataItemLocalized {
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

interface UsersPermissionsPermissionListResponse {
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

interface UsersPermissionsPermissionResponseDataObject {
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

interface UsersPermissionsPermissionResponseDataObjectLocalized {
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

interface UsersPermissionsPermissionResponse {
	data?: UsersPermissionsPermissionResponseDataObject
	meta?: object
}

interface UsersPermissionsRoleRequest {
	data: {
		name: string
		description?: string
		type?: string
		permissions?: (number | string)[]
		users?: (number | string)[]
	}
}

interface UsersPermissionsRoleListResponseDataItem {
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

interface UsersPermissionsRoleListResponseDataItemLocalized {
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

interface UsersPermissionsRoleListResponse {
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

interface UsersPermissionsRoleResponseDataObject {
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

interface UsersPermissionsRoleResponseDataObjectLocalized {
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

interface UsersPermissionsRoleResponse {
	data?: UsersPermissionsRoleResponseDataObject
	meta?: object
}

interface UsersPermissionsUserRequest {
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

interface UsersPermissionsUserListResponseDataItem {
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

interface UsersPermissionsUserListResponseDataItemLocalized {
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

interface UsersPermissionsUserListResponse {
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

interface UsersPermissionsUserResponseDataObject {
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

interface UsersPermissionsUserResponseDataObjectLocalized {
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

interface UsersPermissionsUserResponse {
	data?: UsersPermissionsUserResponseDataObject
	meta?: object
}

interface UsersPermissionsRole {
	id?: number
	name?: string
	description?: string
	type?: string
	createdAt?: string
	updatedAt?: string
}

interface UsersPermissionsUser {
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

interface UsersPermissionsUserRegistration {
	/** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
	jwt?: string
	user?: UsersPermissionsUser
}

type UsersPermissionsPermissionsTree = Record<
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

interface UsersCreatePayload {
	email: string
	username: string
	password: string
}

interface UsersUpdatePayload {
	email: string
	username: string
	password: string
}

interface LocalCreatePayload {
	identifier?: string
	password?: string
}

interface LocalRegisterCreatePayload {
	username?: string
	email?: string
	password?: string
}

interface ForgotPasswordCreatePayload {
	email?: string
}

interface ResetPasswordCreatePayload {
	password?: string
	passwordConfirmation?: string
	code?: string
}

interface ChangePasswordCreatePayload {
	password: string
	currentPassword: string
	passwordConfirmation: string
}

interface EmailConfirmationListParams {
	/** confirmation token received by email */
	confirmation?: string
}

interface SendEmailConfirmationCreatePayload {
	email?: string
}

namespace UsersPermissionsUsersRoles {
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

namespace UsersPermissionsAuth {
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

export type {
	UsersPermissionsPermissionRequest,
	UsersPermissionsPermissionListResponseDataItem,
	UsersPermissionsPermissionListResponseDataItemLocalized,
	UsersPermissionsPermissionListResponse,
	UsersPermissionsPermissionResponseDataObject,
	UsersPermissionsPermissionResponseDataObjectLocalized,
	UsersPermissionsPermissionResponse,
	UsersPermissionsRoleRequest,
	UsersPermissionsRoleListResponseDataItem,
	UsersPermissionsRoleListResponseDataItemLocalized,
	UsersPermissionsRoleListResponse,
	UsersPermissionsRoleResponseDataObject,
	UsersPermissionsRoleResponseDataObjectLocalized,
	UsersPermissionsRoleResponse,
	UsersPermissionsUserRequest,
	UsersPermissionsUserListResponseDataItem,
	UsersPermissionsUserListResponseDataItemLocalized,
	UsersPermissionsUserListResponse,
	UsersPermissionsUserResponseDataObject,
	UsersPermissionsUserResponseDataObjectLocalized,
	UsersPermissionsUserResponse,
	UsersPermissionsRole,
	UsersPermissionsUser,
	UsersPermissionsUserRegistration,
	UsersPermissionsPermissionsTree,
	UsersCreatePayload,
	UsersUpdatePayload,
	LocalCreatePayload,
	LocalRegisterCreatePayload,
	ForgotPasswordCreatePayload,
	ResetPasswordCreatePayload,
	ChangePasswordCreatePayload,
	EmailConfirmationListParams,
	SendEmailConfirmationCreatePayload,
	UsersPermissionsUsersRoles,
	UsersPermissionsAuth,
}
