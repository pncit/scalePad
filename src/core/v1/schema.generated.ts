// Generated from spec/core-api.json by scripts/generate.mjs. Regenerate with `npm run generate`; do not edit.
export interface paths {
    "/core/v1/assets/hardware": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Hardware Assets
         * @description This endpoint retrieves a detailed list of hardware assets. The endpoint supports filtering and sorting based on various criteria.
         *
         *     A hardware asset is an active physical device for a client managed by the MSP, enriched with information such as the associated client, assigned contact and other device-specific details.
         */
        get: operations["list-hardware-assets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/assets/hardware/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Hardware Asset
         * @description This endpoint retrieves a single hardware asset, identified by its unique ID.
         *
         *     A hardware asset is an active physical device for a client managed by the MSP, enriched with information such as the associated client, assigned contact and other device-specific details.
         */
        get: operations["get-hardware-asset"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/assets/saas": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List SaaS Assets
         * @description This endpoint retrieves a detailed list of SaaS assets. The endpoint supports filtering and sorting based on various criteria.
         *
         *     A SaaS asset is a cloud-based software application used by a client organization, tracked and managed by the MSP as part of its service delivery.
         */
        get: operations["list-saas-assets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/assets/saas-users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List SaaS Users
         * @description This endpoint retrieves a detailed list of SaaS users. The endpoint supports filtering and sorting based on various criteria.
         *
         *     A SaaS user is an individual at the client organization who has been assigned access to a SaaS license managed by the MSP.
         */
        get: operations["list-saas-users"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/assets/saas-users/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SaaS User
         * @description This endpoint retrieves a single SaaS user, identified by its unique ID.
         *
         *     A SaaS user is an individual at the client organization who has been assigned access to a SaaS license managed by the MSP.
         */
        get: operations["get-saas-user"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/assets/saas/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SaaS Asset
         * @description This endpoint retrieves a single SaaS asset, identified by its unique ID.
         *
         *     A SaaS asset is a cloud-based software application used by a client organization, tracked and managed by the MSP as part of its service delivery.
         */
        get: operations["get-saas-asset"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/clients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Clients
         * @description This endpoint retrieves a detailed list of clients. The endpoint supports filtering and sorting based on various criteria.
         *
         *     A client is an active customer organization managed by the MSP, enriched with data such as employee and device counts, geographic details, and other customer-specific details.
         */
        get: operations["list-clients"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/clients/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Client
         * @description This endpoint retrieves a single client, identified by its unique ID.
         *
         *     A client is an active customer organization managed by the MSP, enriched with data such as employee and device counts, geographic details, and other customer-specific details.
         */
        get: operations["get-client"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * List Contacts
         * @description This endpoint retrieves a detailed list of contacts. The endpoint supports filtering and sorting based on various criteria.
         *
         *     A contact is an active individual associated with a client of an MSP, enriched with information such as their role, name and other contact-specific details.
         */
        post: operations["list-contacts"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/contacts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Contact
         * @description This endpoint retrieves a single contact, identified by its unique ID.
         *
         *     A contact is an active individual associated with a client of an MSP, enriched with information such as their role, name and other contact-specific details.
         */
        get: operations["get-contact"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/integrations/configurations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Integration Configurations
         * @description This endpoint returns the list of integration configurations associated with the MSP. It indicates which configurations are the primary integrations associated with specific entities.
         *
         *     An integration configuration is a specific instance of an integration.
         */
        get: operations["list-integration-configurations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/integrations/vendors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Integration Vendors
         * @description This endpoint retrieves a complete list of integration vendors which can be used to identify third-party services and platforms that can be integrated with.
         */
        get: operations["list-integration-vendors"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * List Members
         * @description This endpoint retrieves a detailed list of members. The endpoint supports filtering and sorting based on various criteria.
         *
         *     A member is an active user (employee, contractor, downstream IT, etc.) within the MSP, enriched with details including their roles, access to ScalePad products, and other associated employee attributes.
         */
        post: operations["list-members"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/members/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Member
         * @description This endpoint retrieves a single member, identified by its unique ID.
         *
         *     A member is an active user (employee, contractor, downstream IT, etc.) within the MSP, enriched with details including their roles, access to ScalePad products, and other associated employee attributes.
         */
        get: operations["get-member"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/opportunities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Opportunities
         * @description This endpoint retrieves a detailed list of opportunities. The endpoint supports filtering and sorting based on various criteria.
         *
         *     An opportunity is a sales opportunity for an active client managed by the MSP, enriched with information such as status, stage, associated contact, and other sales-related information.
         */
        get: operations["list-opportunities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/opportunities/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Opportunity
         * @description This endpoint retrieves a single opportunity, identified by its unique ID.
         *
         *     An opportunity is a sales opportunity for an active client managed by the MSP, enriched with information such as status, stage, associated contact, and other sales-related information.
         */
        get: operations["get-opportunity"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/product-catalog": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Product Catalog Records
         * @description This endpoint retrieves product catalog records exported from PSA integrations. The endpoint supports filtering and sorting based on various criteria.
         *
         *     A product catalog record represents a PSA product or item with source identifiers, classification fields, pricing, activity state, and integration lineage.
         */
        get: operations["list-product-catalog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/product-catalog/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product Catalog Record
         * @description This endpoint retrieves a single product catalog record, identified by its unique ID.
         *
         *     A product catalog record represents a PSA product or item with source identifiers, classification fields, pricing, activity state, and integration lineage.
         */
        get: operations["get-product-catalog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/service/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Contracts
         * @description This endpoint retrieves a detailed list of contracts. The endpoint supports filtering and sorting based on various criteria.
         *
         *     A contract is a formal agreement between the MSP and its active client, enriched with information such as the associated client, contact, and other agreement-specific details.
         */
        get: operations["list-contracts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/service/contracts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Contract
         * @description This endpoint retrieves a single contract, identified by its unique ID.
         *
         *     A contract is a formal agreement between the MSP and its active client, enriched with information such as the associated client, contact, and other agreement-specific details.
         */
        get: operations["get-contract"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/service/tickets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Tickets
         * @description This endpoint retrieves a detailed list of tickets. The endpoint supports filtering and sorting based on various criteria.
         *
         *     A ticket is a service request or an issue raised by a client or an MSP, enriched with details about the requester, the client, issue summary, and other issue-related details.
         */
        get: operations["list-tickets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/service/tickets/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Ticket
         * @description This endpoint retrieves a single ticket, identified by its unique ID.
         *
         *     A ticket is a service request or an issue raised by a client or an MSP, enriched with details about the requester, the client, issue summary, and other issue-related details.
         */
        get: operations["get-ticket"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/sites": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Sites
         * @description This endpoint retrieves a list of client sites materialized from PSA location data. Use `filter[client.id]` to return sites for a specific client.
         */
        get: operations["list-sites"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/core/v1/sites/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Site
         * @description This endpoint retrieves a single client site identified by its unique ID.
         */
        get: operations["get-site"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Details of a single validation failure in a 400 Bad Request response */
        "SpApi.CoreApi.Core.Errors.Model.BadRequestErrorDetail": {
            /**
             * @description The unique textual code for the error
             * @example BAD_REQUEST
             */
            readonly code: string;
            /**
             * @description A detailed human-readable description of the error, with suggestions for resolution
             * @example The field 'cursor' has an invalid format. Please ensure that the request follows the API specification in the documentation.
             */
            detail: string;
            /**
             * @description A brief human-readable title for the error
             * @example The field 'cursor' has an invalid format.
             */
            title: string;
        };
        /** @description Error response returned when the request is malformed or contains invalid parameter values (HTTP 400) */
        "SpApi.CoreApi.Core.Errors.Model.BadRequestResponse": {
            /**
             * @description A list of error details that include a code, title, and detail for each error that occurred during the request
             * @example [
             *       {
             *         "code": "BAD_REQUEST",
             *         "title": "The field 'cursor' has an invalid format.",
             *         "detail": "The field 'cursor' has an invalid format. Please ensure that the request follows the API specification in the documentation."
             *       }
             *     ]
             */
            errors: components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestErrorDetail"][];
        };
        /** @description Details of a single server failure in a 500 Internal Server Error response */
        "SpApi.CoreApi.Core.Errors.Model.InternalServerErrorErrorDetail": {
            /**
             * @description The unique textual code for the error
             * @example INTERNAL_SERVER_ERROR
             */
            readonly code: string;
            /**
             * @description A detailed human-readable description of the error, with suggestions for resolution
             * @example The server was unable to process the request. Please try again later. If this reoccurs, please contact support for further resolution.
             */
            detail: string;
            /**
             * @description A brief human-readable title for the error
             * @example The server was unable to process the request.
             */
            title: string;
        };
        /** @description Error response returned when the server encounters an unexpected condition while processing the request (HTTP 500) */
        "SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse": {
            /**
             * @description A list of error details that include a code, title, and detail for each error that occurred during the request
             * @example [
             *       {
             *         "code": "INTERNAL_SERVER_ERROR",
             *         "title": "The server was unable to process the request.",
             *         "detail": "The server was unable to process the request. Please try again later. If this reoccurs, please contact support for further resolution."
             *       }
             *     ]
             */
            errors: components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorErrorDetail"][];
        };
        /** @description Details of a single missing-resource failure in a 404 Not Found response */
        "SpApi.CoreApi.Core.Errors.Model.NotFoundErrorDetail": {
            /**
             * @description The unique textual code for the error
             * @example NOT_FOUND
             */
            code: string;
            /**
             * @description A detailed human-readable description of the error, with suggestions for resolution
             * @example The requested resource could not be found. Please check the API documentation to ensure the correct URL and version have been used.
             */
            detail: string;
            /**
             * @description A brief human-readable title for the error
             * @example The requested resource could not be found.
             */
            title: string;
        };
        /** @description Error response returned when no resource exists for the requested identifier (HTTP 404) */
        "SpApi.CoreApi.Core.Errors.Model.NotFoundResponse": {
            /**
             * @description A list of error details that include a code, title, and detail for each error that occurred during the request
             * @example [
             *       {
             *         "code": "NOT_FOUND",
             *         "title": "The requested resource could not be found.",
             *         "detail": "The requested resource could not be found. Please check the API documentation to ensure the correct URL and version have been used."
             *       }
             *     ]
             */
            errors: components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundErrorDetail"][];
        };
        /** @description Details of a single processing failure in a 422 Unprocessable Content response */
        "SpApi.CoreApi.Core.Errors.Model.UnprocessableContentErrorDetail": {
            /**
             * @description The unique textual code for the error
             * @example UNPROCESSABLE_CONTENT
             */
            readonly code: string;
            /**
             * @description A detailed human-readable description of the error, with suggestions for resolution
             * @example No primary PSA was found for this account. Please ensure a PSA that supports this feature has been integrated.
             */
            detail: string;
            /**
             * @description A brief human-readable title for the error
             * @example No primary PSA was found for this account.
             */
            title: string;
        };
        /** @description Error response returned when the request is well-formed but cannot be processed for this account (HTTP 422) */
        "SpApi.CoreApi.Core.Errors.Model.UnprocessableContentResponse": {
            /**
             * @description A list of error details that include a code, title, and detail for each error that occurred during the request
             * @example [
             *       {
             *         "code": "UNPROCESSABLE_CONTENT",
             *         "title": "No primary PSA was found for this account.",
             *         "detail": "No primary PSA was found for this account. Please ensure a PSA that supports this feature has been integrated."
             *       }
             *     ]
             */
            errors: components["schemas"]["SpApi.CoreApi.Core.Errors.Model.UnprocessableContentErrorDetail"][];
        };
        /**
         * @description Parsed request-body filter container.
         *
         *     The request JSON shape is:
         *     {
         *       "filter": {
         *         "name.full": "cont:\"Luke\"",
         *         "contact_info.email": "eq:\"a@b.com\""
         *       }
         *     }
         *
         *     This container is NOT directly JSON-deserialized.
         *     A custom input formatter reads the JSON, validates/parses it via SpApi.CoreApi.Packages.Core.Packages.Filters.Logic.ICoreFilterParserService,
         *     and produces this type so controllers receive a ready-to-use Wm.Search.Model.Query.Field.Filter.QueryFilter.QueryFilter.
         */
        "SpApi.CoreApi.Core.Filters.Model.BodyFilterContainer_SpApi.CoreApi.Core.v1.Contacts.Model.Contact_": {
            /**
             * @description Parsed filter tree produced by M:SpApi.CoreApi.Packages.Core.Packages.Filters.Logic.ICoreFilterParserService.ParseFilters(System.Type,System.Collections.Generic.Dictionary{System.String,System.String}).
             * @example {
             *       "name.full": "cont:\"Luke\""
             *     }
             */
            filter?: components["schemas"]["Wm.Search.Model.Query.Field.Filter.QueryFilter.QueryFilter"];
            /**
             * @description Raw body filter dictionary (same structure as query-string filter binding).
             * @example {
             *       "name.full": "cont:\"exam\""
             *     }
             */
            filterDictionary?: {
                [key: string]: string;
            };
        };
        /**
         * @description Parsed request-body filter container.
         *
         *     The request JSON shape is:
         *     {
         *       "filter": {
         *         "name.full": "cont:\"Luke\"",
         *         "contact_info.email": "eq:\"a@b.com\""
         *       }
         *     }
         *
         *     This container is NOT directly JSON-deserialized.
         *     A custom input formatter reads the JSON, validates/parses it via SpApi.CoreApi.Packages.Core.Packages.Filters.Logic.ICoreFilterParserService,
         *     and produces this type so controllers receive a ready-to-use Wm.Search.Model.Query.Field.Filter.QueryFilter.QueryFilter.
         */
        "SpApi.CoreApi.Core.Filters.Model.BodyFilterContainer_SpApi.CoreApi.Core.v1.Members.Model.Member_": {
            /**
             * @description Parsed filter tree produced by M:SpApi.CoreApi.Packages.Core.Packages.Filters.Logic.ICoreFilterParserService.ParseFilters(System.Type,System.Collections.Generic.Dictionary{System.String,System.String}).
             * @example {
             *       "name.full": "cont:\"Luke\""
             *     }
             */
            filter?: components["schemas"]["Wm.Search.Model.Query.Field.Filter.QueryFilter.QueryFilter"];
            /**
             * @description Raw body filter dictionary (same structure as query-string filter binding).
             * @example {
             *       "name.full": "cont:\"exam\""
             *     }
             */
            filterDictionary?: {
                [key: string]: string;
            };
        };
        /** @description A single page of records matching the query, along with the total record count and a cursor for fetching the next page */
        "SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Clients.Model.Client_": {
            /**
             * @description The records that match the query
             * @example [
             *       {
             *         "id": "00006dab0f9f5d117124aade71a2ah6a",
             *         "name": "Space Sprockets, Inc",
             *         "lifecycle": "CUSTOMER",
             *         "primary_domain": "scalepad.com",
             *         "num_contacts": 100,
             *         "num_hardware_assets": 509,
             *         "record_lineage": [
             *           {
             *             "source_record_id": "123",
             *             "integration_configuration": {
             *               "id": "TAxitIYnxnQP",
             *               "vendor": {
             *                 "id": "1",
             *                 "brand_name": "ConnectWise Manage"
             *               }
             *             }
             *           }
             *         ],
             *         "address": {
             *           "address_line_1": "123 Main St",
             *           "address_line_2": "Apt 1",
             *           "address_line_3": "Building A",
             *           "city": "San Francisco",
             *           "state_prov_code": "CA",
             *           "state_prov_name": "California",
             *           "country_code": "US",
             *           "country_name": "United States",
             *           "is_eu": false,
             *           "postal_code": "12345",
             *           "geo_spatial_coordinates": {
             *             "longitude": 38.82,
             *             "latitude": 40.71,
             *             "h3_cell_id": 1234567890
             *           }
             *         },
             *         "record_created_at": "2019-09-30T15:28:17Z",
             *         "record_updated_at": "2019-09-30T15:28:17Z"
             *       }
             *     ]
             */
            data: components["schemas"]["SpApi.CoreApi.Core.v1.Clients.Model.Client"][];
            /**
             * @description The cursor used to fetch the next page of records, if more records are available (null on the last page)
             * @example WyJ0aWNrZXQiXQ
             */
            next_cursor: string | null;
            /**
             * Format: int64
             * @description The total number of records that match the query
             * @example 24
             */
            total_count: number;
        };
        /** @description A single page of records matching the query, along with the total record count and a cursor for fetching the next page */
        "SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Contacts.Model.Contact_": {
            /**
             * @description The records that match the query
             * @example [
             *       {
             *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *         "client": {
             *           "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *           "name": "ABC Manufacturing Inc."
             *         },
             *         "title": "IT Manager",
             *         "contact_info": {
             *           "email": "john.smith@abcmanufacturing.com",
             *           "phone": "6013789938"
             *         },
             *         "name": {
             *           "first": "John",
             *           "middle": "Michael",
             *           "last": "Smith",
             *           "full": "John Michael Smith"
             *         },
             *         "record_lineage": [
             *           {
             *             "source_record_id": "123",
             *             "integration_configuration": {
             *               "id": "TAxitIYnxnQP",
             *               "vendor": {
             *                 "id": "1",
             *                 "brand_name": "ConnectWise Manage"
             *               }
             *             }
             *           }
             *         ],
             *         "record_created_at": "2019-09-30T15:28:17Z",
             *         "record_updated_at": "2019-09-30T15:28:17Z"
             *       }
             *     ]
             */
            data: components["schemas"]["SpApi.CoreApi.Core.v1.Contacts.Model.Contact"][];
            /**
             * @description The cursor used to fetch the next page of records, if more records are available (null on the last page)
             * @example WyJ0aWNrZXQiXQ
             */
            next_cursor: string | null;
            /**
             * Format: int64
             * @description The total number of records that match the query
             * @example 24
             */
            total_count: number;
        };
        /** @description A single page of records matching the query, along with the total record count and a cursor for fetching the next page */
        "SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Contracts.Model.Contract_": {
            /**
             * @description The records that match the query
             * @example [
             *       {
             *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *         "name": "Managed IT Services Agreement",
             *         "client": {
             *           "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *           "name": "ABC Manufacturing Inc."
             *         },
             *         "contact": {
             *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
             *         },
             *         "is_recurring": false,
             *         "type": "UNASSIGNED",
             *         "term": {
             *           "starts_at": "2025-01-01T00:00:00Z",
             *           "ends_at": "2099-12-31T00:00:00Z",
             *           "is_auto_renew": true,
             *           "billing_period": "MONTHLY"
             *         },
             *         "source_type": "MSA - RECURRING",
             *         "is_addendum": false,
             *         "parent_contract": {
             *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *           "name": "Master Service Agreement - ABC Manufacturing"
             *         },
             *         "status": "EXPIRED",
             *         "total_price": {
             *           "amount": 150,
             *           "iso_currency_code": "USD"
             *         },
             *         "total_cost": {
             *           "amount": 150,
             *           "iso_currency_code": "USD"
             *         },
             *         "is_billable": true,
             *         "pricing_item_total_price": {
             *           "amount": 150,
             *           "iso_currency_code": "USD"
             *         },
             *         "pricing_item_total_cost": {
             *           "amount": 150,
             *           "iso_currency_code": "USD"
             *         },
             *         "contract_pricings": [
             *           {
             *             "id": "1243",
             *             "status": "ACTIVE",
             *             "is_billable": true,
             *             "term": {
             *               "starts_at": "2024-05-01T00:00:00Z",
             *               "ends_at": "2024-12-31T00:00:00Z"
             *             },
             *             "is_rollover_allowed": false,
             *             "description": "Monthly managed services support",
             *             "recurrent_charge_frequency": "MONTHLY",
             *             "unit_price": {
             *               "amount": 150,
             *               "iso_currency_code": "USD"
             *             },
             *             "unit_cost": {
             *               "amount": 75,
             *               "iso_currency_code": "USD"
             *             },
             *             "quantity": 10.9,
             *             "total_price": {
             *               "amount": 150,
             *               "iso_currency_code": "USD"
             *             },
             *             "total_cost": {
             *               "amount": 75,
             *               "iso_currency_code": "USD"
             *             },
             *             "pricing_type": "UNIT",
             *             "unit_type": "PRODUCT",
             *             "items": [
             *               {
             *                 "product": {
             *                   "id": "1234",
             *                   "name": "ACME - STARTER PACK"
             *                 }
             *               }
             *             ]
             *           }
             *         ],
             *         "record_lineage": [
             *           {
             *             "source_record_id": "123",
             *             "integration_configuration": {
             *               "id": "TAxitIYnxnQP",
             *               "vendor": {
             *                 "id": "1",
             *                 "brand_name": "ConnectWise Manage"
             *               }
             *             }
             *           }
             *         ],
             *         "record_created_at": "2019-09-30T15:28:17Z",
             *         "record_updated_at": "2019-09-30T15:28:17Z"
             *       }
             *     ]
             */
            data: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.Contract"][];
            /**
             * @description The cursor used to fetch the next page of records, if more records are available (null on the last page)
             * @example WyJ0aWNrZXQiXQ
             */
            next_cursor: string | null;
            /**
             * Format: int64
             * @description The total number of records that match the query
             * @example 24
             */
            total_count: number;
        };
        /** @description A single page of records matching the query, along with the total record count and a cursor for fetching the next page */
        "SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAsset_": {
            /**
             * @description The records that match the query
             * @example [
             *       {
             *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *         "name": "TYUIAJHEVI014",
             *         "client": {
             *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *           "name": "TechCorp Solutions LLC"
             *         },
             *         "contact": {
             *           "id": "4k9678ty-4rt8-8g3e-a789-wfe5e6789rfd"
             *         },
             *         "manufacturer": {
             *           "id": "HPINC",
             *           "name": "HP Inc."
             *         },
             *         "model": {
             *           "number": "OptiPlex 7090",
             *           "description": "Dell OptiPlex 7090 Desktop Computer"
             *         },
             *         "serial_number": "PF4WERG4",
             *         "type": "WORKSTATION",
             *         "last_login_user": "sarah.johnson",
             *         "location_name": "Main Office - Floor 2",
             *         "mac_addresses": [
             *           "00-1B-44-11-3A-B7",
             *           "00-1B-44-11-3A-B8"
             *         ],
             *         "configuration": {
             *           "cpu": {
             *             "name": "Intel Core i7-11700",
             *             "manufacturer_name": "Intel",
             *             "manufacturer_id": "INTEL"
             *           },
             *           "ram_bytes": 17179869184,
             *           "disks": [
             *             {
             *               "name": "C:",
             *               "total_bytes": 4306093056,
             *               "used_bytes": 645879
             *             }
             *           ]
             *         },
             *         "software": {
             *           "operating_system": "Windows 11 Pro",
             *           "antivirus_info": {
             *             "status": "UNKNOWN",
             *             "definition_status": "OUTOFDATE"
             *           },
             *           "office_suite_info": {
             *             "name": "Microsoft Office 365",
             *             "version": "16.0.14326.20404"
             *           }
             *         },
             *         "address": {
             *           "address_line_1": "123 Business Park Drive",
             *           "address_line_2": "Suite 200",
             *           "address_line_3": "Building A",
             *           "city": "San Francisco",
             *           "state_prov_code": "CA",
             *           "state_prov_name": "California",
             *           "country_code": "US",
             *           "country_name": "United States",
             *           "is_eu": false,
             *           "postal_code": "94105",
             *           "geo_spatial_coordinates": {
             *             "latitude": 37.7749,
             *             "longitude": -122.4194,
             *             "h3_cell_id": 592540628193968100
             *           }
             *         },
             *         "record_lineage": [
             *           {
             *             "source_record_id": "123",
             *             "integration_configuration": {
             *               "id": "TAxitIYnxnQP",
             *               "vendor": {
             *                 "id": "1",
             *                 "brand_name": "ConnectWise Manage"
             *               }
             *             }
             *           }
             *         ],
             *         "record_created_at": "2019-09-30T15:28:17Z",
             *         "record_updated_at": "2019-09-30T15:28:17Z"
             *       }
             *     ]
             */
            data: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAsset"][];
            /**
             * @description The cursor used to fetch the next page of records, if more records are available (null on the last page)
             * @example WyJ0aWNrZXQiXQ
             */
            next_cursor: string | null;
            /**
             * Format: int64
             * @description The total number of records that match the query
             * @example 24
             */
            total_count: number;
        };
        /** @description A single page of records matching the query, along with the total record count and a cursor for fetching the next page */
        "SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Members.Model.Member_": {
            /**
             * @description The records that match the query
             * @example [
             *       {
             *         "id": "1g9876ty-4er6-4g3t-a123-wfe5e5234rfd",
             *         "name": {
             *           "first": "John",
             *           "last": "Smith",
             *           "middle": "Michael",
             *           "full": "John Michael Smith"
             *         },
             *         "hired_at": "2024-02-05T00:00:00Z",
             *         "title": "Technician",
             *         "is_scalepad_user": true,
             *         "contact_info": {
             *           "email": "john.smith@company.com",
             *           "ext": "1234",
             *           "phone": "6013789938"
             *         },
             *         "reports_to_member": {
             *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *           "email": "sarah.johnson@company.com"
             *         },
             *         "work_roles": [
             *           "Analyst",
             *           "Engineer"
             *         ],
             *         "hourly_cost": {
             *           "iso_currency_code": "USD",
             *           "amount": 85.5
             *         },
             *         "daily_capacity": 8,
             *         "record_lineage": [
             *           {
             *             "source_record_id": "123",
             *             "integration_configuration": {
             *               "id": "TAxitIYnxnQP",
             *               "vendor": {
             *                 "id": "1",
             *                 "brand_name": "ConnectWise Manage"
             *               }
             *             }
             *           }
             *         ],
             *         "address": {
             *           "address_line_1": "123 Main Street",
             *           "address_line_2": "Suite 200",
             *           "city": "New York",
             *           "state_prov_code": "NY",
             *           "state_prov_name": "New York",
             *           "country_code": "US",
             *           "country_name": "United States",
             *           "is_eu": false,
             *           "postal_code": "10001",
             *           "geo_spatial_coordinates": {
             *             "latitude": 40.71,
             *             "longitude": 74.06,
             *             "h3_cell_id": 1234567890
             *           }
             *         },
             *         "record_created_at": "2019-09-30T15:28:17Z",
             *         "record_updated_at": "2019-09-30T15:28:17Z"
             *       }
             *     ]
             */
            data: components["schemas"]["SpApi.CoreApi.Core.v1.Members.Model.Member"][];
            /**
             * @description The cursor used to fetch the next page of records, if more records are available (null on the last page)
             * @example WyJ0aWNrZXQiXQ
             */
            next_cursor: string | null;
            /**
             * Format: int64
             * @description The total number of records that match the query
             * @example 24
             */
            total_count: number;
        };
        /** @description A single page of records matching the query, along with the total record count and a cursor for fetching the next page */
        "SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Opportunities.Model.Opportunity_": {
            /**
             * @description The records that match the query
             * @example [
             *       {
             *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *         "title": "Managed IT Services - ABC Corp",
             *         "description": "Comprehensive managed IT services including help desk, network monitoring, and cybersecurity for 150-user manufacturing company",
             *         "source_status": "Open",
             *         "source_stage": "Stage 2: Technical Review",
             *         "is_active": true,
             *         "probability": 75,
             *         "client": {
             *           "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *           "name": "ABC Manufacturing Inc."
             *         },
             *         "contact": {
             *           "id": "1g4123ty-4er6-5h3h-a234-wfe5e5234rfd"
             *         },
             *         "responsible_member": {
             *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
             *         },
             *         "record_lineage": [
             *           {
             *             "source_record_id": "123",
             *             "integration_configuration": {
             *               "id": "TAxitIYnxnQP",
             *               "vendor": {
             *                 "id": "1",
             *                 "brand_name": "ConnectWise Manage"
             *               }
             *             }
             *           }
             *         ],
             *         "record_created_at": "2019-09-30T15:28:17Z",
             *         "record_updated_at": "2019-09-30T15:28:17Z"
             *       }
             *     ]
             */
            data: components["schemas"]["SpApi.CoreApi.Core.v1.Opportunities.Model.Opportunity"][];
            /**
             * @description The cursor used to fetch the next page of records, if more records are available (null on the last page)
             * @example WyJ0aWNrZXQiXQ
             */
            next_cursor: string | null;
            /**
             * Format: int64
             * @description The total number of records that match the query
             * @example 24
             */
            total_count: number;
        };
        /** @description A single page of records matching the query, along with the total record count and a cursor for fetching the next page */
        "SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.ProductCatalog.Model.ProductCatalog_": {
            /**
             * @description The records that match the query
             * @example [
             *       {
             *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *         "source_system": "CONNECTWISE",
             *         "source_product_id": "123",
             *         "source_product_identifier": "MSP-SVC",
             *         "name": "Managed IT Services",
             *         "description": "Monthly managed IT services package.",
             *         "category": "Services",
             *         "subcategory": "Managed Services",
             *         "product_type": "Service",
             *         "product_class": "Non-Inventory",
             *         "manufacturer_name": "Microsoft",
             *         "unit_cost": 75,
             *         "unit_price": 125,
             *         "is_active": true,
             *         "updated_at": "2026-06-11T18:00:20Z",
             *         "record_lineage": [
             *           {
             *             "source_record_id": "123",
             *             "integration_configuration": {
             *               "id": "TAxitIYnxnQP",
             *               "vendor": {
             *                 "id": "1",
             *                 "brand_name": "ConnectWise Manage"
             *               }
             *             }
             *           }
             *         ],
             *         "record_created_at": "2019-09-30T15:28:17Z",
             *         "record_updated_at": "2019-09-30T15:28:17Z"
             *       }
             *     ]
             */
            data: components["schemas"]["SpApi.CoreApi.Core.v1.ProductCatalog.Model.ProductCatalog"][];
            /**
             * @description The cursor used to fetch the next page of records, if more records are available (null on the last page)
             * @example WyJ0aWNrZXQiXQ
             */
            next_cursor: string | null;
            /**
             * Format: int64
             * @description The total number of records that match the query
             * @example 24
             */
            total_count: number;
        };
        /** @description A single page of records matching the query, along with the total record count and a cursor for fetching the next page */
        "SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAsset_": {
            /**
             * @description The records that match the query
             * @example [
             *       {
             *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *         "client": {
             *           "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *           "name": "ABC Manufacturing Inc."
             *         },
             *         "product": {
             *           "manufacturer": {
             *             "id": "MS",
             *             "name": "Microsoft"
             *           },
             *           "id": "1234g43b06d130vcf4b3d523573q3g8l",
             *           "name": "Amazing Product",
             *           "category": "Productivity",
             *           "manufacturer_sku": {
             *             "id": "42345ae5-h3r7-8569-er45-qertjn9c0d23",
             *             "name": "Microsoft 365 Business Basic"
             *           }
             *         },
             *         "status": "Enabled",
             *         "tenant_domain": "contoso.onmicrosoft.com",
             *         "term": {
             *           "starts_at": "2025-03-01T00:00:00Z",
             *           "ends_at": "2025-03-31T00:00:00Z",
             *           "is_auto_renewed": true
             *         },
             *         "subscriptions": [
             *           {
             *             "id": "b1e0e2a3-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
             *             "commerce_subscription_id": "c2f1f3b4-5d6e-7f8a-9b0c-1d2e3f4a5b6c",
             *             "status": "Active",
             *             "type": "Licensed",
             *             "license_count": 25,
             *             "billing_cycle_name": "Annual",
             *             "friendly_name": "Microsoft 365 Business Premium",
             *             "term": {
             *               "starts_at": "2025-03-01T00:00:00Z",
             *               "ends_at": "2026-03-01T00:00:00Z",
             *               "is_auto_renewed": true
             *             },
             *             "provider_name": "Microsoft",
             *             "partner_tier": "Tier 1",
             *             "csp_tier": "Tier 1"
             *           }
             *         ],
             *         "pool": {
             *           "type": "SEAT",
             *           "capacity": 100,
             *           "utilized": 75,
             *           "suspended": 5,
             *           "grace_period_warning": 3
             *         },
             *         "record_lineage": [
             *           {
             *             "source_record_id": "123",
             *             "integration_configuration": {
             *               "id": "TAxitIYnxnQP",
             *               "vendor": {
             *                 "id": "1",
             *                 "brand_name": "ConnectWise Manage"
             *               }
             *             }
             *           }
             *         ],
             *         "record_created_at": "2019-09-30T15:28:17Z",
             *         "record_updated_at": "2019-09-30T15:28:17Z"
             *       }
             *     ]
             */
            data: components["schemas"]["SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAsset"][];
            /**
             * @description The cursor used to fetch the next page of records, if more records are available (null on the last page)
             * @example WyJ0aWNrZXQiXQ
             */
            next_cursor: string | null;
            /**
             * Format: int64
             * @description The total number of records that match the query
             * @example 24
             */
            total_count: number;
        };
        /** @description A single page of records matching the query, along with the total record count and a cursor for fetching the next page */
        "SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUser_": {
            /**
             * @description The records that match the query
             * @example [
             *       {
             *         "id": "1g9876ty-4er6-4g3t-a123-wfe5e5234rfd",
             *         "client": {
             *           "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *           "name": "ABC Manufacturing Inc."
             *         },
             *         "contact": {
             *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
             *         },
             *         "asset": {
             *           "id": "12345a0c-4aqa-40fd-aqaw-eq3f03ge1579",
             *           "status": "Enabled"
             *         },
             *         "product": {
             *           "manufacturer": {
             *             "id": "MS",
             *             "name": "Microsoft"
             *           },
             *           "id": "-123456789123456789",
             *           "name": "Amazing Product",
             *           "category": "Productivity",
             *           "manufacturer_sku": {
             *             "id": "26abc4ww-1gg5-12ee-1234-12345as12e06",
             *             "name": "Microsoft 365 Business Basic"
             *           }
             *         },
             *         "term": {
             *           "starts_at": "2025-01-01T00:00:00Z",
             *           "ends_at": "2025-12-31T23:59:59Z"
             *         },
             *         "subscription": {
             *           "id": "b1e0e2a3-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
             *           "commerce_subscription_id": "c2f1f3b4-5d6e-7f8a-9b0c-1d2e3f4a5b6c",
             *           "status": "Active",
             *           "license_count": 25,
             *           "billing_cycle_name": "Annual",
             *           "is_auto_renewed": true
             *         },
             *         "activity": {
             *           "last_active_at": "2025-01-15T14:30:25Z",
             *           "is_active": true
             *         },
             *         "authentication": {
             *           "is_mfa_enabled": true,
             *           "mfa_methods": [
             *             "SMS",
             *             "Authenticator App"
             *           ],
             *           "default_mfa_method": "Authenticator App"
             *         },
             *         "is_admin": false,
             *         "record_lineage": [
             *           {
             *             "source_record_id": "123",
             *             "integration_configuration": {
             *               "id": "TAxitIYnxnQP",
             *               "vendor": {
             *                 "id": "1",
             *                 "brand_name": "ConnectWise Manage"
             *               }
             *             }
             *           }
             *         ],
             *         "record_created_at": "2019-09-30T15:28:17Z",
             *         "record_updated_at": "2019-09-30T15:28:17Z"
             *       }
             *     ]
             */
            data: components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUser"][];
            /**
             * @description The cursor used to fetch the next page of records, if more records are available (null on the last page)
             * @example WyJ0aWNrZXQiXQ
             */
            next_cursor: string | null;
            /**
             * Format: int64
             * @description The total number of records that match the query
             * @example 24
             */
            total_count: number;
        };
        /** @description A single page of records matching the query, along with the total record count and a cursor for fetching the next page */
        "SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Sites.Model.Site_": {
            /**
             * @description The records that match the query
             * @example [
             *       {
             *         "id": "4k9678ty-4rt8-8g3e-a789-wfe5e6789rfd",
             *         "name": "Main Office",
             *         "client": {
             *           "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *           "name": "ABC Manufacturing Inc."
             *         },
             *         "address": {
             *           "address_line_1": "123 Main St",
             *           "address_line_2": "Suite 200",
             *           "city": "San Francisco",
             *           "state_prov_code": "CA",
             *           "state_prov_name": "California",
             *           "country_code": "US",
             *           "country_name": "United States",
             *           "postal_code": "94105"
             *         },
             *         "record_lineage": [
             *           {
             *             "source_record_id": "123",
             *             "integration_configuration": {
             *               "id": "TAxitIYnxnQP",
             *               "vendor": {
             *                 "id": "1",
             *                 "brand_name": "ConnectWise Manage"
             *               }
             *             }
             *           }
             *         ]
             *       }
             *     ]
             */
            data: components["schemas"]["SpApi.CoreApi.Core.v1.Sites.Model.Site"][];
            /**
             * @description The cursor used to fetch the next page of records, if more records are available (null on the last page)
             * @example WyJ0aWNrZXQiXQ
             */
            next_cursor: string | null;
            /**
             * Format: int64
             * @description The total number of records that match the query
             * @example 24
             */
            total_count: number;
        };
        /** @description A single page of records matching the query, along with the total record count and a cursor for fetching the next page */
        "SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Tickets.Model.Ticket_": {
            /**
             * @description The records that match the query
             * @example [
             *       {
             *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *         "owner_member": {
             *           "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23"
             *         },
             *         "responsible_member": {
             *           "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23"
             *         },
             *         "client": {
             *           "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *           "name": "ABC Manufacturing Inc."
             *         },
             *         "contact": {
             *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
             *         },
             *         "contract": {
             *           "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *           "name": "Premium Support Agreement"
             *         },
             *         "board": {
             *           "id": "78",
             *           "name": "Backup Alerts"
             *         },
             *         "summary": "Email server connectivity issues affecting multiple users",
             *         "source": "Email Connector",
             *         "category": "INCIDENT",
             *         "is_child_ticket": false,
             *         "is_long_ticket": true,
             *         "timeline": {
             *           "created_at": "2025-08-27T13:32:12Z",
             *           "updated_at": "2025-08-27T13:32:12Z",
             *           "responded_at": "2025-08-27T13:32:12Z",
             *           "planned_at": "2025-08-27T13:32:12Z",
             *           "resolved_at": "2025-08-27T13:32:12Z",
             *           "closed_at": "2025-08-27T13:32:12Z"
             *         },
             *         "duration": {
             *           "minutes_to_respond": 8,
             *           "minutes_to_plan": 9,
             *           "minutes_to_resolve": 15,
             *           "minutes_to_close": 3618,
             *           "minutes_worked": 240
             *         },
             *         "sla": {
             *           "is_response_in_sla": true,
             *           "is_plan_in_sla": true,
             *           "is_resolution_in_sla": false
             *         },
             *         "status": {
             *           "current": "UNASSIGNED",
             *           "history": [
             *             {
             *               "started_at": "2025-08-20T15:22:05Z",
             *               "ended_at": "2025-08-20T15:22:05Z",
             *               "status": "ASSIGNED"
             *             }
             *           ]
             *         },
             *         "priority": {
             *           "current": "1",
             *           "history": [
             *             {
             *               "started_at": "2025-08-20T15:22:05Z",
             *               "ended_at": "2025-08-20T15:22:05Z",
             *               "priority": "1"
             *             }
             *           ]
             *         },
             *         "impact": "MEDIUM",
             *         "severity": "HIGH",
             *         "num_notes": 12,
             *         "record_lineage": [
             *           {
             *             "source_record_id": "123",
             *             "integration_configuration": {
             *               "id": "TAxitIYnxnQP",
             *               "vendor": {
             *                 "id": "1",
             *                 "brand_name": "ConnectWise Manage"
             *               }
             *             }
             *           }
             *         ],
             *         "record_created_at": "2019-09-30T15:28:17Z",
             *         "record_updated_at": "2019-09-30T15:28:17Z"
             *       }
             *     ]
             */
            data: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.Ticket"][];
            /**
             * @description The cursor used to fetch the next page of records, if more records are available (null on the last page)
             * @example WyJ0aWNrZXQiXQ
             */
            next_cursor: string | null;
            /**
             * Format: int64
             * @description The total number of records that match the query
             * @example 24
             */
            total_count: number;
        };
        /** @description Provenance metadata indicating the record's identifier in the source system and the integration vendor and configuration that sourced it. */
        "SpApi.CoreApi.Core.Model.RecordLineage": {
            /**
             * @description Details about the integration setup that sourced this record.
             * @example {
             *       "id": "TAxitIYnxnQP",
             *       "vendor": {
             *         "id": "1",
             *         "brand_name": "ConnectWise Manage"
             *       }
             *     }
             */
            integration_configuration?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineageIntegrationConfiguration"] | null;
            /**
             * @description ID of this record in the source system.
             * @example 123
             */
            source_record_id?: string | null;
        };
        /** @description Details about the integration setup that sourced this record. */
        "SpApi.CoreApi.Core.Model.RecordLineageIntegrationConfiguration": {
            /**
             * @description ID of the integration setup this record was sourced from.
             * @example TAxitIYnxnQP
             */
            id?: string | null;
            /**
             * @description Details about the integration vendor that sourced this record.
             * @example {
             *       "id": "1",
             *       "brand_name": "ConnectWise Manage"
             *     }
             */
            vendor?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineageIntegrationConfigurationVendor"] | null;
        };
        /** @description Details about the integration vendor that sourced this record. */
        "SpApi.CoreApi.Core.Model.RecordLineageIntegrationConfigurationVendor": {
            /**
             * @description Name of the integration vendor that sourced this record. Note: A vendor’s name may change if the vendor rebrands.
             * @example ConnectWise Manage
             */
            brand_name?: string | null;
            /**
             * @description ID of the integration vendor that sourced this record.
             * @example 1
             */
            id?: string | null;
        };
        /** @description An active customer organization managed by the MSP, enriched with data such as employee and device counts, geographic details, and other customer-specific details. */
        "SpApi.CoreApi.Core.v1.Clients.Model.Client": {
            /**
             * @description Geographic information relating to the client's billing location with ISO-standardized country and state information where possible.
             * @example {
             *       "address_line_1": "123 Main St",
             *       "address_line_2": "Apt 1",
             *       "address_line_3": "Building A",
             *       "city": "San Francisco",
             *       "state_prov_code": "CA",
             *       "state_prov_name": "California",
             *       "country_code": "US",
             *       "country_name": "United States",
             *       "is_eu": false,
             *       "postal_code": "12345",
             *       "geo_spatial_coordinates": {
             *         "longitude": 38.82,
             *         "latitude": 40.71,
             *         "h3_cell_id": 1234567890
             *       }
             *     }
             */
            address?: components["schemas"]["SpApi.CoreApi.Core.v1.Clients.Model.ClientAddress"] | null;
            /**
             * @description Unique identifier of the client organization in ScalePad.
             * @example 00006dab0f9f5d117124aade71a2ah6a
             */
            id?: string;
            /**
             * @description Classification of the client organization based on its relationship with the MSP.
             * @example CUSTOMER
             */
            lifecycle?: string;
            /**
             * @description Name of the client organization.
             * @example Space Sprockets, Inc
             */
            name?: string;
            /**
             * Format: int64
             * @description Number of active contacts existing for that client organization.
             * @example 100
             */
            num_contacts?: number;
            /**
             * Format: int64
             * @description Number of active hardware assets assigned to the client organization.
             * @example 509
             */
            num_hardware_assets?: number;
            /**
             * @description Internet domain name associated with the client, derived from their contacts.
             * @example scalepad.com
             */
            primary_domain?: string | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was created
             * @example 2019-09-30T15:28:17Z
             */
            record_created_at?: string;
            /**
             * @example [
             *       {
             *         "source_record_id": "123",
             *         "integration_configuration": {
             *           "id": "TAxitIYnxnQP",
             *           "vendor": {
             *             "id": "1",
             *             "brand_name": "ConnectWise Manage"
             *           }
             *         }
             *       }
             *     ]
             */
            record_lineage?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineage"][] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was last updated
             * @example 2019-09-30T15:28:17Z
             */
            record_updated_at?: string;
        };
        /** @description Geographic information relating to the client's billing location with ISO-standardized country and state information where possible. */
        "SpApi.CoreApi.Core.v1.Clients.Model.ClientAddress": {
            /**
             * @description Address line 1 of the client organization.
             * @example 123 Main St
             */
            address_line_1?: string | null;
            /**
             * @description Address line 2 of the client organization.
             * @example Apt 1
             */
            address_line_2?: string | null;
            /**
             * @description Address line 3 of the client organization.
             * @example Building A
             */
            address_line_3?: string | null;
            /**
             * @description City of the client organization.
             * @example San Francisco
             */
            city?: string | null;
            /**
             * @description ISO country code of the client organization.
             * @example US
             */
            country_code?: string | null;
            /**
             * @description Official displayable name of the country of the client organization.
             * @example United States
             */
            country_name?: string | null;
            /**
             * @description Geospatial information relating to the client organization.
             * @example {
             *       "longitude": 38.82,
             *       "latitude": 40.71,
             *       "h3_cell_id": 1234567890
             *     }
             */
            geo_spatial_coordinates?: components["schemas"]["SpApi.CoreApi.Core.v1.Clients.Model.ClientAddressGeoSpatialCoordinates"] | null;
            /**
             * @description Flag indicating if the client is located in the European Union for compliance and regulatory purposes.
             * @example false
             */
            is_eu?: boolean | null;
            /**
             * @description Postal service code of the client organization.
             * @example 12345
             */
            postal_code?: string | null;
            /**
             * @description Province or state code of the client organization.
             * @example CA
             */
            state_prov_code?: string | null;
            /**
             * @description Province or state name of the client organization.
             * @example California
             */
            state_prov_name?: string | null;
        };
        /** @description Geospatial information relating to the client organization. */
        "SpApi.CoreApi.Core.v1.Clients.Model.ClientAddressGeoSpatialCoordinates": {
            /**
             * Format: int64
             * @description Geospatial cell using the H3 coding system with a 2 km precision for the location of the client organization.
             * @example 1234567890
             */
            h3_cell_id?: number;
            /**
             * Format: double
             * @description Latitude to a 2 km precision for the location of the client organization.
             * @example 40.71
             */
            latitude?: number | null;
            /**
             * Format: double
             * @description Longitude to a 2 km precision for the location of the client organization.
             * @example 38.82
             */
            longitude?: number | null;
        };
        /** @description An active individual associated with a client of an MSP, enriched with information such as their role, name and other contact-specific details. */
        "SpApi.CoreApi.Core.v1.Contacts.Model.Contact": {
            /**
             * @description Client organization that the contact is associated with.
             * @example {
             *       "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *       "name": "ABC Manufacturing Inc."
             *     }
             */
            client?: components["schemas"]["SpApi.CoreApi.Core.v1.Contacts.Model.ContactClient"];
            /**
             * @description Primary communication details of the contact.
             * @example {
             *       "email": "john.smith@abcmanufacturing.com",
             *       "phone": "6013789938"
             *     }
             */
            contact_info?: components["schemas"]["SpApi.CoreApi.Core.v1.Contacts.Model.ContactContactInfo"] | null;
            /**
             * @description Unique identifier of the contact in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
            /**
             * @description Name of the contact.
             * @example {
             *       "first": "John",
             *       "middle": "Michael",
             *       "last": "Smith",
             *       "full": "John Michael Smith"
             *     }
             */
            name?: components["schemas"]["SpApi.CoreApi.Core.v1.Contacts.Model.ContactName"] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was created
             * @example 2019-09-30T15:28:17Z
             */
            record_created_at?: string;
            /**
             * @example [
             *       {
             *         "source_record_id": "123",
             *         "integration_configuration": {
             *           "id": "TAxitIYnxnQP",
             *           "vendor": {
             *             "id": "1",
             *             "brand_name": "ConnectWise Manage"
             *           }
             *         }
             *       }
             *     ]
             */
            record_lineage?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineage"][] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was last updated
             * @example 2019-09-30T15:28:17Z
             */
            record_updated_at?: string;
            /**
             * @description Professional job title or role of the contact within their client organization.
             * @example IT Manager
             */
            title?: string | null;
        };
        /** @description Client organization that the contact is associated with. */
        "SpApi.CoreApi.Core.v1.Contacts.Model.ContactClient": {
            /**
             * @description Unique identifier of the client in ScalePad.
             * @example 00000ae5-h3r7-6468-er45-wiuynj9c0d23
             */
            id?: string;
            /**
             * @description Name of the client organization.
             * @example ABC Manufacturing Inc.
             */
            name?: string;
        };
        /** @description Primary communication details of the contact. */
        "SpApi.CoreApi.Core.v1.Contacts.Model.ContactContactInfo": {
            /**
             * @description Email address of the contact.
             * @example john.smith@abcmanufacturing.com
             */
            email?: string | null;
            /**
             * @description Phone number of the contact.
             * @example 6013789938
             */
            phone?: string | null;
        };
        /** @description Name of the contact. */
        "SpApi.CoreApi.Core.v1.Contacts.Model.ContactName": {
            /**
             * @description First name of the contact.
             * @example John
             */
            first?: string | null;
            /**
             * @description Complete name of the contact.
             * @example John Michael Smith
             */
            full?: string | null;
            /**
             * @description Last name of the contact.
             * @example Smith
             */
            last?: string | null;
            /**
             * @description Middle name of the contact.
             * @example Michael
             */
            middle?: string | null;
        };
        /** @description A formal agreement between the MSP and its active client, enriched with information such as the associated client, contact, and other agreement-specific details. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.Contract": {
            /**
             * @description Client organization that is receiving the services and/or products from the MSP under this contract.
             * @example {
             *       "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *       "name": "ABC Manufacturing Inc."
             *     }
             */
            client?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractClient"];
            /**
             * @description Contact who is responsible for the contract.
             * @example {
             *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
             *     }
             */
            contact?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractContact"] | null;
            /**
             * @example [
             *       {
             *         "id": "1243",
             *         "status": "ACTIVE",
             *         "is_billable": true,
             *         "term": {
             *           "starts_at": "2024-05-01T00:00:00Z",
             *           "ends_at": "2024-12-31T00:00:00Z"
             *         },
             *         "is_rollover_allowed": false,
             *         "description": "Monthly managed services support",
             *         "recurrent_charge_frequency": "MONTHLY",
             *         "unit_price": {
             *           "amount": 150,
             *           "iso_currency_code": "USD"
             *         },
             *         "unit_cost": {
             *           "amount": 75,
             *           "iso_currency_code": "USD"
             *         },
             *         "quantity": 10.9,
             *         "total_price": {
             *           "amount": 150,
             *           "iso_currency_code": "USD"
             *         },
             *         "total_cost": {
             *           "amount": 75,
             *           "iso_currency_code": "USD"
             *         },
             *         "pricing_type": "UNIT",
             *         "unit_type": "PRODUCT",
             *         "items": [
             *           {
             *             "product": {
             *               "id": "1234",
             *               "name": "ACME - STARTER PACK"
             *             }
             *           }
             *         ]
             *       }
             *     ]
             */
            contract_pricings?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricings"][];
            /** @description Header-level contract description from the source PSA. */
            description?: string | null;
            /**
             * @description Unique identifier of the contract in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
            /**
             * @description Flag indicating whether this contract is an extension or modification to an existing contract. This is currently only supported by ConnectWise (Bill Amount). All other source systems default to null.
             * @example false
             */
            is_addendum?: boolean | null;
            /**
             * @description Flag indicating whether the pricing item is billable. Currently, only ConnectWise supports this flag. All other source systems return true if any of the contract pricing items is billable.
             * @example true
             */
            is_billable?: boolean | null;
            /**
             * @description Flag indicating whether the contract represents recurring services.
             * @example false
             */
            is_recurring?: boolean | null;
            /**
             * @description Name of the contract.
             * @example Managed IT Services Agreement
             */
            name?: string;
            /**
             * @description Reference to the primary or original contract to which the current contract is related.
             * @example {
             *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *       "name": "Master Service Agreement - ABC Manufacturing"
             *     }
             */
            parent_contract?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractParentContract"] | null;
            /**
             * @description Sum of the total cost for all active pricing items in the contract.
             * @example {
             *       "amount": 150,
             *       "iso_currency_code": "USD"
             *     }
             */
            pricing_item_total_cost?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractPricingItemTotalCost"] | null;
            /**
             * @description Sum of the total price for all active/billable pricing items in the contract.
             * @example {
             *       "amount": 150,
             *       "iso_currency_code": "USD"
             *     }
             */
            pricing_item_total_price?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractPricingItemTotalPrice"] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was created
             * @example 2019-09-30T15:28:17Z
             */
            record_created_at?: string;
            /**
             * @example [
             *       {
             *         "source_record_id": "123",
             *         "integration_configuration": {
             *           "id": "TAxitIYnxnQP",
             *           "vendor": {
             *             "id": "1",
             *             "brand_name": "ConnectWise Manage"
             *           }
             *         }
             *       }
             *     ]
             */
            record_lineage?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineage"][] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was last updated
             * @example 2019-09-30T15:28:17Z
             */
            record_updated_at?: string;
            /**
             * @description Original contract type value from the source system before ScalePad standardization.
             * @example MSA - RECURRING
             */
            source_type?: string | null;
            /**
             * @description ScalePad standardized value indicating the current state of the contract within its lifecycle.
             * @example EXPIRED
             * @enum {string}
             */
            status?: "SUSPENDED" | "EXPIRED" | "ACTIVE" | "DRAFT" | "SENT" | "SIGNED" | "NOT_EXECUTED" | "CANCELLED";
            /**
             * @description Defines active period of the contract including duration, renewal settings, and billing frequency.
             * @example {
             *       "starts_at": "2025-01-01T00:00:00Z",
             *       "ends_at": "2099-12-31T00:00:00Z",
             *       "is_auto_renew": true,
             *       "billing_period": "MONTHLY"
             *     }
             */
            term?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractTerm"] | null;
            /**
             * @description Total cost for the contract. This is currently only supported by ConnectWise (Bill Amount). All other source systems default to null.
             * @example {
             *       "amount": 150,
             *       "iso_currency_code": "USD"
             *     }
             */
            total_cost?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractTotalCost"] | null;
            /**
             * @description Total price for the contract. For ConnectWise this will be the Bill Amount plus any Additions.
             * @example {
             *       "amount": 150,
             *       "iso_currency_code": "USD"
             *     }
             */
            total_price?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractTotalPrice"] | null;
            /**
             * @description ScalePad standardized type value, mapped from the source system's native contract type, representing the classification of the contract.
             * @example UNASSIGNED
             * @enum {string|null}
             */
            type?: "MANAGED_SERVICES" | "BLOCK" | "3RD_PARTY" | "UNASSIGNED" | null;
        };
        /** @description Client organization that is receiving the services and/or products from the MSP under this contract. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractClient": {
            /**
             * @description Unique identifier of the client organization in ScalePad.
             * @example 00000ae5-h3r7-6468-er45-wiuynj9c0d23
             */
            id?: string;
            /**
             * @description Name of the client organization.
             * @example ABC Manufacturing Inc.
             */
            name?: string;
        };
        /** @description Contact who is responsible for the contract. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractContact": {
            /**
             * @description Unique identifier of the contact in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
        };
        /** @description List of active pricing line items associated with the contract. Inactive or expired pricings are excluded. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricings": {
            /**
             * @description Detailed description of the service or product being billed.
             * @example Monthly managed services support
             */
            description?: string | null;
            /**
             * @description Unique identifier of the contract pricing item.
             * @example 1243
             */
            id?: string;
            /**
             * @description Flag indicating whether the pricing item is billable. Currently, only ConnectWise supports this flag. All other source systems default to true.
             * @example true
             */
            is_billable?: boolean | null;
            /**
             * @description Flag indicating whether unused quantities or amounts can roll over to the next billing period.
             * @example false
             */
            is_rollover_allowed?: boolean | null;
            /**
             * @example [
             *       {
             *         "product": {
             *           "id": "1234",
             *           "name": "ACME - STARTER PACK"
             *         }
             *       }
             *     ]
             */
            items?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsItems"][] | null;
            /**
             * @description Type of pricing model for this item.
             * @example UNIT
             * @enum {string|null}
             */
            pricing_type?: "UNKNOWN" | "UNIT" | "ALLOCATION" | null;
            /**
             * Format: double
             * @description Number of units sold or used.
             * @example 10.9
             */
            quantity?: number | null;
            /**
             * @description Billing frequency for this pricing item.
             * @example MONTHLY
             * @enum {string|null}
             */
            recurrent_charge_frequency?: "NOT_CHARGED" | "ONE_TIME" | "ANNUAL" | "SEMI_ANNUAL" | "QUARTERLY" | "BI_MONTHLY" | "MONTHLY" | "WEEKLY" | "BI_WEEKLY" | "OTHER" | null;
            /**
             * @description ScalePad standardized value indicating the current state of the contract pricing item.
             * @example ACTIVE
             * @enum {string|null}
             */
            status?: "ACTIVE" | "INACTIVE" | "CANCELLED" | "EXPIRED" | null;
            /**
             * @description Billing period for this specific pricing item, defining when the item is active and billable.
             * @example {
             *       "starts_at": "2024-05-01T00:00:00Z",
             *       "ends_at": "2024-12-31T00:00:00Z"
             *     }
             */
            term?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsTerm"] | null;
            /**
             * @description Total cost incurred by the MSP for this pricing item.
             * @example {
             *       "amount": 75,
             *       "iso_currency_code": "USD"
             *     }
             */
            total_cost?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsTotalCost"] | null;
            /**
             * @description Total price for this pricing item.
             * @example {
             *       "amount": 150,
             *       "iso_currency_code": "USD"
             *     }
             */
            total_price?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsTotalPrice"] | null;
            /**
             * @description Cost incurred by the MSP per unit of the service or product item.
             * @example {
             *       "amount": 75,
             *       "iso_currency_code": "USD"
             *     }
             */
            unit_cost?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsUnitCost"] | null;
            /**
             * @description Price per unit for this service or product item.
             * @example {
             *       "amount": 150,
             *       "iso_currency_code": "USD"
             *     }
             */
            unit_price?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsUnitPrice"] | null;
            /**
             * @description Pricing item type that is being billed, defining what each quantity represents.
             * @example PRODUCT
             * @enum {string|null}
             */
            unit_type?: "TICKET" | "HOURS" | "PRODUCT" | "RECURRING" | null;
        };
        /** @description List of products or services associated with this pricing item. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsItems": {
            /**
             * @description Product details for items within this pricing structure.
             * @example {
             *       "id": "1234",
             *       "name": "ACME - STARTER PACK"
             *     }
             */
            product?: components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsItemsProduct"] | null;
        };
        /** @description Product details for items within this pricing structure. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsItemsProduct": {
            /**
             * @description Source system identifier for the product.
             * @example 1234
             */
            id?: string;
            /**
             * @description Name of the product.
             * @example ACME - STARTER PACK
             */
            name?: string | null;
        };
        /** @description Billing period for this specific pricing item, defining when the item is active and billable. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsTerm": {
            /**
             * Format: date-time
             * @description End date for this pricing item's billing period.
             * @example 2024-12-31T00:00:00Z
             */
            ends_at?: string | null;
            /**
             * Format: date-time
             * @description Start date for this pricing item's billing period.
             * @example 2024-05-01T00:00:00Z
             */
            starts_at?: string;
        };
        /** @description Total cost incurred by the MSP for this pricing item. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsTotalCost": {
            /**
             * Format: double
             * @description Total cost incurred by the MSP for this pricing item.
             * @example 75
             */
            amount?: number;
            /**
             * @description Three letter ISO code for currency.
             * @example USD
             */
            iso_currency_code?: string;
        };
        /** @description Total price for this pricing item. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsTotalPrice": {
            /**
             * Format: double
             * @description Total price for this pricing item.
             * @example 150
             */
            amount?: number;
            /**
             * @description Three letter ISO code for currency.
             * @example USD
             */
            iso_currency_code?: string;
        };
        /** @description Cost incurred by the MSP per unit of the service or product item. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsUnitCost": {
            /**
             * Format: double
             * @description Cost incurred by the MSP.
             * @example 75
             */
            amount?: number;
            /**
             * @description Three letter ISO code for currency.
             * @example USD
             */
            iso_currency_code?: string;
        };
        /** @description Price per unit for this service or product item. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsUnitPrice": {
            /**
             * Format: double
             * @description Price per unit for this service or product item.
             * @example 150
             */
            amount?: number;
            /**
             * @description Three letter ISO code for currency.
             * @example USD
             */
            iso_currency_code?: string;
        };
        /** @description Reference to the primary or original contract to which the current contract is related. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractParentContract": {
            /**
             * @description Unique identifier of the parent contract in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
            /**
             * @description Name of the parent contract. This is currently only supported by ConnectWise (Bill Amount). All other source systems default to null.
             * @example Master Service Agreement - ABC Manufacturing
             */
            name?: string | null;
        };
        /** @description Sum of the total cost for all active pricing items in the contract. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractPricingItemTotalCost": {
            /**
             * Format: double
             * @description Sum of the total cost for all active pricing items in the contract.
             * @example 150
             */
            amount?: number | null;
            /**
             * @description Three letter ISO code for currency.
             * @example USD
             */
            iso_currency_code?: string | null;
        };
        /** @description Sum of the total price for all active/billable pricing items in the contract. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractPricingItemTotalPrice": {
            /**
             * Format: double
             * @description Sum of the total price for all active/billable pricing items in the contract.
             * @example 150
             */
            amount?: number | null;
            /**
             * @description Three letter ISO code for currency.
             * @example USD
             */
            iso_currency_code?: string | null;
        };
        /** @description Defines active period of the contract including duration, renewal settings, and billing frequency. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractTerm": {
            /**
             * @description Billing frequency for the contract.
             * @example MONTHLY
             * @enum {string|null}
             */
            billing_period?: "NOT_BILLED" | "ONE_TIME" | "ANNUAL" | "SEMI_ANNUAL" | "QUARTERLY" | "BI_MONTHLY" | "MONTHLY" | "BI_WEEKLY" | "WEEKLY" | "OTHER" | null;
            /**
             * Format: date-time
             * @description The date when the contract is set to expire.
             * @example 2099-12-31T00:00:00Z
             */
            ends_at?: string | null;
            /**
             * @description Flag indicating whether the contract automatically renews upon expiration.
             * @example true
             */
            is_auto_renew?: boolean | null;
            /**
             * Format: date-time
             * @description The date when the contract goes into effect.
             * @example 2025-01-01T00:00:00Z
             */
            starts_at?: string;
        };
        /** @description Total cost for the contract. This is currently only supported by ConnectWise (Bill Amount). All other source systems default to null. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractTotalCost": {
            /**
             * Format: double
             * @description Total cost for the contract. This is currently only supported by ConnectWise (Bill Amount). All other source systems default to null.
             * @example 150
             */
            amount?: number | null;
            /**
             * @description Three letter ISO code for currency.
             * @example USD
             */
            iso_currency_code?: string | null;
        };
        /** @description Total price for the contract. For ConnectWise this will be the Bill Amount plus any Additions. */
        "SpApi.CoreApi.Core.v1.Contracts.Model.ContractTotalPrice": {
            /**
             * Format: double
             * @description Total price for the contract. For ConnectWise this will be the Bill Amount plus any Additions.
             * @example 150
             */
            amount?: number | null;
            /**
             * @description Three letter ISO code for currency.
             * @example USD
             */
            iso_currency_code?: string | null;
        };
        /** @description An active physical device for a client managed by the MSP, enriched with information such as the associated client, assigned contact and other device-specific details. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAsset": {
            /**
             * @description Geographic information relating to the hardware asset's location with ISO-standardized country and state information where possible.
             * @example {
             *       "address_line_1": "123 Business Park Drive",
             *       "address_line_2": "Suite 200",
             *       "address_line_3": "Building A",
             *       "city": "San Francisco",
             *       "state_prov_code": "CA",
             *       "state_prov_name": "California",
             *       "country_code": "US",
             *       "country_name": "United States",
             *       "is_eu": false,
             *       "postal_code": "94105",
             *       "geo_spatial_coordinates": {
             *         "latitude": 37.7749,
             *         "longitude": -122.4194,
             *         "h3_cell_id": 592540628193968100
             *       }
             *     }
             */
            address?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetAddress"];
            /**
             * @description Client organization that uses the hardware asset.
             * @example {
             *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *       "name": "TechCorp Solutions LLC"
             *     }
             */
            client?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetClient"];
            /**
             * @description Hardware configuration details including CPU, memory, and storage specifications.
             * @example {
             *       "cpu": {
             *         "name": "Intel Core i7-11700",
             *         "manufacturer_name": "Intel",
             *         "manufacturer_id": "INTEL"
             *       },
             *       "ram_bytes": 17179869184,
             *       "disks": [
             *         {
             *           "name": "C:",
             *           "total_bytes": 4306093056,
             *           "used_bytes": 645879
             *         }
             *       ]
             *     }
             */
            configuration?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetConfiguration"];
            /**
             * @description Contact who uses the hardware asset.
             * @example {
             *       "id": "4k9678ty-4rt8-8g3e-a789-wfe5e6789rfd"
             *     }
             */
            contact?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetContact"];
            /**
             * @description Unique identifier of the hardware asset in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
            /**
             * @description Last user to log into the hardware asset.
             * @example sarah.johnson
             */
            last_login_user?: string | null;
            /**
             * @description Physical location of the hardware asset in the client's organization.
             * @example Main Office - Floor 2
             */
            location_name?: string | null;
            /**
             * @description List of MAC addresses associated with the hardware asset.
             * @example [
             *       "00-1B-44-11-3A-B7",
             *       "00-1B-44-11-3A-B8"
             *     ]
             */
            mac_addresses?: string[] | null;
            /**
             * @description ScalePad standardized manufacturer details of the hardware asset.
             * @example {
             *       "id": "HPINC",
             *       "name": "HP Inc."
             *     }
             */
            manufacturer?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetManufacturer"];
            /**
             * @description Model information of the hardware asset provided by the manufacturer.
             * @example {
             *       "number": "OptiPlex 7090",
             *       "description": "Dell OptiPlex 7090 Desktop Computer"
             *     }
             */
            model?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetModel"];
            /**
             * @description Name of the hardware asset.
             * @example TYUIAJHEVI014
             */
            name?: string | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was created
             * @example 2019-09-30T15:28:17Z
             */
            record_created_at?: string;
            /**
             * @example [
             *       {
             *         "source_record_id": "123",
             *         "integration_configuration": {
             *           "id": "TAxitIYnxnQP",
             *           "vendor": {
             *             "id": "1",
             *             "brand_name": "ConnectWise Manage"
             *           }
             *         }
             *       }
             *     ]
             */
            record_lineage?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineage"][] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was last updated
             * @example 2019-09-30T15:28:17Z
             */
            record_updated_at?: string;
            /**
             * @description Unique number assigned by the manufacturer to the hardware asset.
             * @example PF4WERG4
             */
            serial_number?: string | null;
            /**
             * @description Information about critical software installed on the hardware asset.
             * @example {
             *       "operating_system": "Windows 11 Pro",
             *       "antivirus_info": {
             *         "status": "UNKNOWN",
             *         "definition_status": "OUTOFDATE"
             *       },
             *       "office_suite_info": {
             *         "name": "Microsoft Office 365",
             *         "version": "16.0.14326.20404"
             *       }
             *     }
             */
            software?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetSoftware"];
            /**
             * @description ScalePad standardized classification that identifies the category of the hardware asset.
             * @example WORKSTATION
             * @enum {string|null}
             */
            type?: "WORKSTATION" | "IMAGING" | "SERVER" | "NETWORK" | "MOBILE" | "VIRTUAL" | null;
        };
        /** @description Geographic information relating to the hardware asset's location with ISO-standardized country and state information where possible. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetAddress": {
            /**
             * @description Address line 1 of the hardware asset.
             * @example 123 Business Park Drive
             */
            address_line_1?: string | null;
            /**
             * @description Address line 2 of the hardware asset.
             * @example Suite 200
             */
            address_line_2?: string | null;
            /**
             * @description Address line 3 of the hardware asset.
             * @example Building A
             */
            address_line_3?: string | null;
            /**
             * @description City of the hardware asset.
             * @example San Francisco
             */
            city?: string | null;
            /**
             * @description ISO country code of the hardware asset.
             * @example US
             */
            country_code?: string | null;
            /**
             * @description Official displayable name of the country of the hardware asset.
             * @example United States
             */
            country_name?: string | null;
            /**
             * @description Geospatial information relating to the hardware asset.
             * @example {
             *       "latitude": 37.7749,
             *       "longitude": -122.4194,
             *       "h3_cell_id": 592540628193968100
             *     }
             */
            geo_spatial_coordinates?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetAddressGeoSpatialCoordinates"];
            /**
             * @description Flag indicating if the hardware asset is located in the European Union for compliance and regulatory purposes.
             * @example false
             */
            is_eu?: boolean | null;
            /**
             * @description Postal service code of the hardware asset.
             * @example 94105
             */
            postal_code?: string | null;
            /**
             * @description Province or state code of the hardware asset.
             * @example CA
             */
            state_prov_code?: string | null;
            /**
             * @description Province or state name of the hardware asset.
             * @example California
             */
            state_prov_name?: string | null;
        };
        /** @description Geospatial information relating to the hardware asset. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetAddressGeoSpatialCoordinates": {
            /**
             * Format: int64
             * @description Geospatial cell using the H3 coding system with a 2 km precision for the location of the hardware asset.
             * @example 592540628193968100
             */
            h3_cell_id?: number;
            /**
             * Format: double
             * @description Latitude to a 2 km precision for the location of the hardware asset.
             * @example 37.7749
             */
            latitude?: number;
            /**
             * Format: double
             * @description Longitude to a 2 km precision for the location of the hardware asset.
             * @example -122.4194
             */
            longitude?: number;
        };
        /** @description Client organization that uses the hardware asset. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetClient": {
            /**
             * @description Unique identifier of the client organization in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
            /**
             * @description Name of the client organization.
             * @example TechCorp Solutions LLC
             */
            name?: string;
        };
        /** @description Hardware configuration details including CPU, memory, and storage specifications. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetConfiguration": {
            /**
             * @description CPU specifications for the hardware asset.
             * @example {
             *       "name": "Intel Core i7-11700",
             *       "manufacturer_name": "Intel",
             *       "manufacturer_id": "INTEL"
             *     }
             */
            cpu?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetConfigurationCpu"];
            /**
             * @example [
             *       {
             *         "name": "C:",
             *         "total_bytes": 4306093056,
             *         "used_bytes": 645879
             *       }
             *     ]
             */
            disks?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetConfigurationDisks"][] | null;
            /**
             * Format: int64
             * @description Total installed system memory (RAM) on the hardware asset, measured in bytes.
             * @example 17179869184
             */
            ram_bytes?: number | null;
        };
        /** @description CPU specifications for the hardware asset. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetConfigurationCpu": {
            /**
             * @description CPU manufacturer identifier in ScalePad.
             * @example INTEL
             */
            manufacturer_id?: string | null;
            /**
             * @description CPU manufacturer name in ScalePad.
             * @example Intel
             */
            manufacturer_name?: string | null;
            /**
             * @description CPU model name.
             * @example Intel Core i7-11700
             */
            name?: string | null;
        };
        /** @description List of disks and their storage information including capacity and usage. Note that usage data is updated based on periodic syncs and may be subject to delays ranging from 24 hours to several days. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetConfigurationDisks": {
            /**
             * @description Name of the disk.
             * @example C:
             */
            name?: string | null;
            /**
             * Format: int64
             * @description Total storage capacity of the disk, measured in bytes.
             * @example 4306093056
             */
            total_bytes?: number | null;
            /**
             * Format: int64
             * @description Amount of storage space that is currently in use on the disk, measured in bytes.
             * @example 645879
             */
            used_bytes?: number | null;
        };
        /** @description Contact who uses the hardware asset. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetContact": {
            /**
             * @description Unique identifier of the contact in ScalePad.
             * @example 4k9678ty-4rt8-8g3e-a789-wfe5e6789rfd
             */
            id?: string;
        };
        /** @description ScalePad standardized manufacturer details of the hardware asset. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetManufacturer": {
            /**
             * @description Unique identifier of the manufacturer in ScalePad.
             * @example HPINC
             */
            id?: string | null;
            /**
             * @description Name of the manufacturer in ScalePad.
             * @example HP Inc.
             */
            name?: string | null;
        };
        /** @description Model information of the hardware asset provided by the manufacturer. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetModel": {
            /**
             * @description Description of the model.
             * @example Dell OptiPlex 7090 Desktop Computer
             */
            description?: string | null;
            /**
             * @description Number of the model.
             * @example OptiPlex 7090
             */
            number?: string | null;
        };
        /** @description Information about critical software installed on the hardware asset. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetSoftware": {
            /**
             * @description Information about the antivirus software.
             * @example {
             *       "status": "UNKNOWN",
             *       "definition_status": "OUTOFDATE"
             *     }
             */
            antivirus_info?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetSoftwareAntivirusInfo"];
            /**
             * @description Information about the office suite software.
             * @example {
             *       "name": "Microsoft Office 365",
             *       "version": "16.0.14326.20404"
             *     }
             */
            office_suite_info?: components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetSoftwareOfficeSuiteInfo"];
            /**
             * @description Information about the operating system.
             * @example Windows 11 Pro
             */
            operating_system?: string | null;
        };
        /** @description Information about the antivirus software. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetSoftwareAntivirusInfo": {
            /**
             * @description Current state of the antivirus software configuration.
             * @example OUTOFDATE
             * @enum {string|null}
             */
            definition_status?: "OUTOFDATE" | "UNKNOWN" | "UPTODATE" | null;
            /**
             * @description Current state of the antivirus software.
             * @example UNKNOWN
             * @enum {string|null}
             */
            status?: "UNKNOWN" | "DISABLED" | "RUNNING" | null;
        };
        /** @description Information about the office suite software. */
        "SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetSoftwareOfficeSuiteInfo": {
            /**
             * @description Name of the office suite software.
             * @example Microsoft Office 365
             */
            name?: string | null;
            /**
             * @description Version of the office suite software.
             * @example 16.0.14326.20404
             */
            version?: string | null;
        };
        /** @description The list of integration instances configured in the account */
        "SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations": {
            /**
             * @description The integration instances configured in the account
             * @example [
             *       {
             *         "id": "5Vprq5VpwWGS",
             *         "vendor": {
             *           "id": "2",
             *           "brand_name": "Kaseya VSA"
             *         },
             *         "nickname": "GLOBAL ConnectWise Manage (TEST)",
             *         "external_url": "https://na.myconnectwise.net",
             *         "connection": {
             *           "fqdn": "na.myconnectwise.net",
             *           "base_uri": null,
             *           "tenant_id": "acme"
             *         },
             *         "primary": [
             *           "TICKET",
             *           "OPPORTUNITY"
             *         ]
             *       }
             *     ]
             */
            data?: components["schemas"]["SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations_IntegrationConfigurationItem"][];
        };
        /** @description A single configured integration instance, including the vendor it connects to and the data types it is primary for */
        "SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations_IntegrationConfigurationItem": {
            /**
             * @description Non-secret connection settings of this integration instance, for callers that build their own vendor deep links. Null for vendors that do not expose any. Never contains credentials.
             * @example {
             *       "fqdn": "na.myconnectwise.net",
             *       "base_uri": null,
             *       "tenant_id": "acme"
             *     }
             */
            connection?: components["schemas"]["SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations_IntegrationConnection"] | null;
            /**
             * @description URL of the vendor web application this integration instance connects to, derived from the instance's connection settings. Null when the vendor does not expose such a URL (for example ServiceNow) or when the connection settings needed to derive it are not present. Never contains credentials.
             * @example https://na.myconnectwise.net
             */
            external_url?: string | null;
            /**
             * @description Unique identifier of this integration instance in ScalePad.
             * @example 5Vprq5VpwWGS
             */
            id?: string;
            /**
             * @description Human-readable integration setup name for system identification and operational monitoring. Used by MSP teams to distinguish between multiple instances of the same PSA vendor.
             * @example GLOBAL ConnectWise Manage (TEST)
             */
            nickname?: string | null;
            /**
             * @description List of datatypes for which this integration is the primary. Items of those datatypes will be created in this integration when create actions are called. The list will be empty if this integration is not the primary for any datatype.
             * @example [
             *       "TICKET",
             *       "OPPORTUNITY"
             *     ]
             */
            primary?: ("CLIENT" | "CONTRACT" | "CONTACT" | "HARDWARE_ASSET" | "MEMBER" | "OPPORTUNITY" | "SAAS_ASSET" | "SAAS_USER" | "TICKET")[];
            /**
             * @description Details about the integration vendor this integration instance belongs to.
             * @example {
             *       "id": "2",
             *       "brand_name": "Kaseya VSA"
             *     }
             */
            vendor?: components["schemas"]["SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations_IntegrationVendor"];
        };
        /** @description Non-secret connection settings of an integration instance. Each field is null when the vendor does not use it or it has not been set. */
        "SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations_IntegrationConnection": {
            /**
             * @description Base URL of the Autotask web application, as configured.
             * @example https://ww3.autotask.net/
             */
            base_uri?: string | null;
            /**
             * @description Vendor connection address, as configured. Format varies by vendor.
             * @example na.myconnectwise.net
             */
            fqdn?: string | null;
            /**
             * @description Tenant or company identifier within the vendor instance, as configured. Used by ConnectWise Manage and HaloPSA.
             * @example acme
             */
            tenant_id?: string | null;
        };
        /** @description The integration vendor an integration instance belongs to */
        "SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations_IntegrationVendor": {
            /**
             * @description Human-readable name of the vendor (not unique). Note: A vendor’s name may change if the vendor rebrands.
             * @example Kaseya VSA
             */
            brand_name?: string;
            /**
             * @description Unique identifier of the vendor in ScalePad.
             * @example 2
             */
            id?: string;
        };
        /** @description The list of integration vendors supported by ScalePad */
        "SpApi.CoreApi.Core.v1.Integrations.Model.Vendors": {
            /**
             * @description The integration vendors that match the query
             * @example [
             *       {
             *         "name": "Autotask PSA",
             *         "vendor_id": "40",
             *         "category": "PSA & RMM",
             *         "data_types_supported": [
             *           "HARDWARE_ASSET",
             *           "CONTACT"
             *         ]
             *       }
             *     ]
             */
            data?: components["schemas"]["SpApi.CoreApi.Core.v1.Integrations.Model.Vendors_Vendor"][];
        };
        /** @description An integration vendor supported by ScalePad, including its category and the data types it can sync */
        "SpApi.CoreApi.Core.v1.Integrations.Model.Vendors_Vendor": {
            /**
             * @description The category of service the vendor provides
             * @example PSA & RMM
             * @enum {string}
             */
            category?: "PSA" | "RMM" | "SaaS" | "Network" | "Documentation" | "Backup" | "Customer Satisfaction" | "Cybersecurity" | "PSA & RMM";
            /**
             * @description The data types this vendor can sync into ScalePad
             * @example [
             *       "HARDWARE_ASSET",
             *       "CONTACT"
             *     ]
             */
            data_types_supported?: ("CLIENT" | "CONTRACT" | "CONTACT" | "HARDWARE_ASSET" | "MEMBER" | "OPPORTUNITY" | "SAAS_ASSET" | "SAAS_USER" | "TICKET")[];
            /**
             * @description Human-readable name of the vendor (not unique). Note: A vendor's name may change if the vendor rebrands.
             * @example Autotask PSA
             */
            name?: string;
            /**
             * @description Unique identifier of the vendor in ScalePad
             * @example 40
             */
            vendor_id?: string;
        };
        /** @description An active user (employee, contractor, downstream IT, etc.) within the MSP, enriched with details including their roles, access to ScalePad products, and other associated employee attributes. */
        "SpApi.CoreApi.Core.v1.Members.Model.Member": {
            /**
             * @description Geographic information of the location where the member is based, with ISO-standardized country and state information where possible.
             * @example {
             *       "address_line_1": "123 Main Street",
             *       "address_line_2": "Suite 200",
             *       "city": "New York",
             *       "state_prov_code": "NY",
             *       "state_prov_name": "New York",
             *       "country_code": "US",
             *       "country_name": "United States",
             *       "is_eu": false,
             *       "postal_code": "10001",
             *       "geo_spatial_coordinates": {
             *         "latitude": 40.71,
             *         "longitude": 74.06,
             *         "h3_cell_id": 1234567890
             *       }
             *     }
             */
            address?: components["schemas"]["SpApi.CoreApi.Core.v1.Members.Model.MemberAddress"] | null;
            /**
             * @description Communication details of the member.
             * @example {
             *       "email": "john.smith@company.com",
             *       "ext": "1234",
             *       "phone": "6013789938"
             *     }
             */
            contact_info?: components["schemas"]["SpApi.CoreApi.Core.v1.Members.Model.MemberContactInfo"];
            /**
             * Format: int32
             * @description Number of working hours the member is available per day.
             * @example 8
             */
            daily_capacity?: number | null;
            /**
             * Format: date-time
             * @description Date when the member was hired by the MSP.
             * @example 2024-02-05T00:00:00Z
             */
            hired_at?: string | null;
            /**
             * @description Cost incurred by the MSP per hour of work performed by the member. This is the default hourly cost for the member.
             * @example {
             *       "iso_currency_code": "USD",
             *       "amount": 85.5
             *     }
             */
            hourly_cost?: components["schemas"]["SpApi.CoreApi.Core.v1.Members.Model.MemberHourlyCost"] | null;
            /**
             * @description Unique identifier of the member in ScalePad.
             * @example 1g9876ty-4er6-4g3t-a123-wfe5e5234rfd
             */
            id?: string;
            /**
             * @description Flag indicating whether the member is a ScalePad platform user.
             * @example true
             */
            is_scalepad_user?: boolean;
            /**
             * @description Name of the member.
             * @example {
             *       "first": "John",
             *       "last": "Smith",
             *       "middle": "Michael",
             *       "full": "John Michael Smith"
             *     }
             */
            name?: components["schemas"]["SpApi.CoreApi.Core.v1.Members.Model.MemberName"];
            /**
             * Format: date-time
             * @description Timestamp of when this record was created
             * @example 2019-09-30T15:28:17Z
             */
            record_created_at?: string;
            /**
             * @example [
             *       {
             *         "source_record_id": "123",
             *         "integration_configuration": {
             *           "id": "TAxitIYnxnQP",
             *           "vendor": {
             *             "id": "1",
             *             "brand_name": "ConnectWise Manage"
             *           }
             *         }
             *       }
             *     ]
             */
            record_lineage?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineage"][] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was last updated
             * @example 2019-09-30T15:28:17Z
             */
            record_updated_at?: string;
            /**
             * @description Identifies who this member reports to.
             * @example {
             *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
             *       "email": "sarah.johnson@company.com"
             *     }
             */
            reports_to_member?: components["schemas"]["SpApi.CoreApi.Core.v1.Members.Model.MemberReportsToMember"] | null;
            /**
             * @description Professional job title or role of the member within MSP.
             * @example Technician
             */
            title?: string | null;
            /**
             * @description List of responsibilities or functional roles assigned to the member within an MSP.
             * @example [
             *       "Analyst",
             *       "Engineer"
             *     ]
             */
            work_roles?: string[] | null;
        };
        /** @description Geographic information of the location where the member is based, with ISO-standardized country and state information where possible. */
        "SpApi.CoreApi.Core.v1.Members.Model.MemberAddress": {
            /**
             * @description Address line 1 of the member.
             * @example 123 Main Street
             */
            address_line_1?: string | null;
            /**
             * @description Address line 2 of the member.
             * @example Suite 200
             */
            address_line_2?: string | null;
            /** @description Address line 3 of the member. */
            address_line_3?: string | null;
            /**
             * @description City of the member.
             * @example New York
             */
            city?: string | null;
            /**
             * @description ISO country code of the member.
             * @example US
             */
            country_code?: string | null;
            /**
             * @description Official displayable name of the country of the member.
             * @example United States
             */
            country_name?: string | null;
            /**
             * @description Geospatial information relating to the member.
             * @example {
             *       "latitude": 40.71,
             *       "longitude": 74.06,
             *       "h3_cell_id": 1234567890
             *     }
             */
            geo_spatial_coordinates?: components["schemas"]["SpApi.CoreApi.Core.v1.Members.Model.MemberAddressGeoSpatialCoordinates"] | null;
            /**
             * @description Flag indicating if the member is located in the European Union for compliance and regulatory purposes.
             * @example false
             */
            is_eu?: boolean | null;
            /**
             * @description Postal service code of the member.
             * @example 10001
             */
            postal_code?: string | null;
            /**
             * @description Province or state code of the member.
             * @example NY
             */
            state_prov_code?: string | null;
            /**
             * @description Province or state name of the member.
             * @example New York
             */
            state_prov_name?: string | null;
        };
        /** @description Geospatial information relating to the member. */
        "SpApi.CoreApi.Core.v1.Members.Model.MemberAddressGeoSpatialCoordinates": {
            /**
             * Format: int64
             * @description Geospatial cell using the H3 coding system with a 2 km precision for the location of the member.
             * @example 1234567890
             */
            h3_cell_id?: number | null;
            /**
             * Format: double
             * @description Latitude to a 2 km precision for the location of the member.
             * @example 40.71
             */
            latitude?: number | null;
            /**
             * Format: double
             * @description Longitude to a 2 km precision for the location of the member.
             * @example 74.06
             */
            longitude?: number | null;
        };
        /** @description Communication details of the member. */
        "SpApi.CoreApi.Core.v1.Members.Model.MemberContactInfo": {
            /**
             * @description Email address of the member.
             * @example john.smith@company.com
             */
            email?: string;
            /**
             * @description Phone extension of the member.
             * @example 1234
             */
            ext?: string | null;
            /**
             * @description Phone number of the member.
             * @example 6013789938
             */
            phone?: string | null;
        };
        /** @description Cost incurred by the MSP per hour of work performed by the member. This is the default hourly cost for the member. */
        "SpApi.CoreApi.Core.v1.Members.Model.MemberHourlyCost": {
            /**
             * Format: double
             * @description Cost incurred by the MSP per hour of work performed by the member.
             * @example 85.5
             */
            amount?: number | null;
            /**
             * @description Three letter ISO code for currency.
             * @example USD
             */
            iso_currency_code?: string | null;
        };
        /** @description Name of the member. */
        "SpApi.CoreApi.Core.v1.Members.Model.MemberName": {
            /**
             * @description First name of the member.
             * @example John
             */
            first?: string;
            /**
             * @description Complete name of the member.
             * @example John Michael Smith
             */
            full?: string | null;
            /**
             * @description Last name of the member.
             * @example Smith
             */
            last?: string;
            /**
             * @description Middle name of the member.
             * @example Michael
             */
            middle?: string | null;
        };
        /** @description Identifies who this member reports to. */
        "SpApi.CoreApi.Core.v1.Members.Model.MemberReportsToMember": {
            /**
             * @description Email address of the member.
             * @example sarah.johnson@company.com
             */
            email?: string | null;
            /**
             * @description Unique identifier of the member this person reports to in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
        };
        /** @description A sales opportunity for an active client managed by the MSP, enriched with information such as status, stage, associated contact, and other sales-related information. */
        "SpApi.CoreApi.Core.v1.Opportunities.Model.Opportunity": {
            /**
             * @description Client organization associated with the opportunity.
             * @example {
             *       "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *       "name": "ABC Manufacturing Inc."
             *     }
             */
            client?: components["schemas"]["SpApi.CoreApi.Core.v1.Opportunities.Model.OpportunityClient"];
            /**
             * @description Contact associated with the opportunity.
             * @example {
             *       "id": "1g4123ty-4er6-5h3h-a234-wfe5e5234rfd"
             *     }
             */
            contact?: components["schemas"]["SpApi.CoreApi.Core.v1.Opportunities.Model.OpportunityContact"] | null;
            /**
             * @description Detailed explanation of the opportunity.
             * @example Comprehensive managed IT services including help desk, network monitoring, and cybersecurity for 150-user manufacturing company
             */
            description?: string | null;
            /**
             * @description Unique identifier of the opportunity in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
            /**
             * @description Boolean flag indicating whether the opportunity is active.
             * @example true
             */
            is_active?: boolean | null;
            /**
             * Format: int32
             * @description Likelihood that the opportunity will be successfully closed (won), expressed as a percentage from 0 to 100.
             * @example 75
             */
            probability?: number | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was created
             * @example 2019-09-30T15:28:17Z
             */
            record_created_at?: string;
            /**
             * @example [
             *       {
             *         "source_record_id": "123",
             *         "integration_configuration": {
             *           "id": "TAxitIYnxnQP",
             *           "vendor": {
             *             "id": "1",
             *             "brand_name": "ConnectWise Manage"
             *           }
             *         }
             *       }
             *     ]
             */
            record_lineage?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineage"][] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was last updated
             * @example 2019-09-30T15:28:17Z
             */
            record_updated_at?: string;
            /**
             * @description Member at the MSP who is responsible for managing the opportunity.
             * @example {
             *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
             *     }
             */
            responsible_member?: components["schemas"]["SpApi.CoreApi.Core.v1.Opportunities.Model.OpportunityResponsibleMember"] | null;
            /**
             * @description Original opportunity stage value from the source system before ScalePad standardization.
             * @example Stage 2: Technical Review
             */
            source_stage?: string | null;
            /**
             * @description Original opportunity state value from the source system before ScalePad standardization.
             * @example Open
             */
            source_status?: string | null;
            /**
             * @description Short, descriptive name that identifies the nature of the opportunity.
             * @example Managed IT Services - ABC Corp
             */
            title?: string | null;
        };
        /** @description Client organization associated with the opportunity. */
        "SpApi.CoreApi.Core.v1.Opportunities.Model.OpportunityClient": {
            /**
             * @description Unique identifier of the client organization in ScalePad.
             * @example 00000ae5-h3r7-6468-er45-wiuynj9c0d23
             */
            id?: string;
            /**
             * @description Name of the client organization.
             * @example ABC Manufacturing Inc.
             */
            name?: string;
        };
        /** @description Contact associated with the opportunity. */
        "SpApi.CoreApi.Core.v1.Opportunities.Model.OpportunityContact": {
            /**
             * @description Unique identifier of the contact in ScalePad.
             * @example 1g4123ty-4er6-5h3h-a234-wfe5e5234rfd
             */
            id?: string;
        };
        /** @description Member at the MSP who is responsible for managing the opportunity. */
        "SpApi.CoreApi.Core.v1.Opportunities.Model.OpportunityResponsibleMember": {
            /**
             * @description Unique identifier of the member in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
        };
        /** @description A product catalog record exported from a PSA integration, including source identifiers, classification fields, pricing, and lineage. */
        "SpApi.CoreApi.Core.v1.ProductCatalog.Model.ProductCatalog": {
            /**
             * @description Product category from the source PSA when available.
             * @example Services
             */
            category?: string | null;
            /**
             * @description Longer or customer-facing product description from the source PSA when available.
             * @example Monthly managed IT services package.
             */
            description?: string | null;
            /**
             * @description Unique identifier of the product catalog record in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
            /**
             * @description Whether the source PSA marks this product active when that state is available.
             * @example true
             */
            is_active?: boolean | null;
            /**
             * @description Manufacturer name from the source PSA when available.
             * @example Microsoft
             */
            manufacturer_name?: string | null;
            /**
             * @description Product display label from the source PSA. Some vendors expose this value through a description-named source field.
             * @example Managed IT Services
             */
            name?: string | null;
            /**
             * @description Product class from the source PSA when available.
             * @example Non-Inventory
             */
            product_class?: string | null;
            /**
             * @description Product type from the source PSA when available.
             * @example Service
             */
            product_type?: string | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was created
             * @example 2019-09-30T15:28:17Z
             */
            record_created_at?: string;
            /**
             * @example [
             *       {
             *         "source_record_id": "123",
             *         "integration_configuration": {
             *           "id": "TAxitIYnxnQP",
             *           "vendor": {
             *             "id": "1",
             *             "brand_name": "ConnectWise Manage"
             *           }
             *         }
             *       }
             *     ]
             */
            record_lineage?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineage"][] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was last updated
             * @example 2019-09-30T15:28:17Z
             */
            record_updated_at?: string;
            /**
             * @description Product identifier assigned by the source PSA.
             * @example 123
             */
            source_product_id?: string | null;
            /**
             * @description Human-facing product code, SKU, or identifier from the source PSA when available. Retained for matching related source records such as PSA contract additions.
             * @example MSP-SVC
             */
            source_product_identifier?: string | null;
            /**
             * @description PSA system that supplied the product catalog record.
             * @example CONNECTWISE
             */
            source_system?: string;
            /**
             * @description Product subcategory from the source PSA when available.
             * @example Managed Services
             */
            subcategory?: string | null;
            /**
             * Format: double
             * @description Product unit cost from the source PSA when available.
             * @example 75
             */
            unit_cost?: number | null;
            /**
             * Format: double
             * @description Product unit price from the source PSA when available.
             * @example 125
             */
            unit_price?: number | null;
            /**
             * Format: date-time
             * @description Source product last-updated timestamp when the PSA exposes one.
             * @example 2026-06-11T18:00:20Z
             */
            updated_at?: string | null;
        };
        /** @description A cloud-based software application used by a client organization, tracked and managed by the MSP as part of its service delivery. */
        "SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAsset": {
            /**
             * @description Client organization that uses the SaaS asset.
             * @example {
             *       "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *       "name": "ABC Manufacturing Inc."
             *     }
             */
            client?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetClient"];
            /**
             * @description Unique identifier of the SaaS asset in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
            /**
             * @description Total number of SaaS licenses or entitlements available under a subscription.
             * @example {
             *       "type": "SEAT",
             *       "capacity": 100,
             *       "utilized": 75,
             *       "suspended": 5,
             *       "grace_period_warning": 3
             *     }
             */
            pool?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetPool"] | null;
            /**
             * @description SaaS product information.
             * @example {
             *       "manufacturer": {
             *         "id": "MS",
             *         "name": "Microsoft"
             *       },
             *       "id": "1234g43b06d130vcf4b3d523573q3g8l",
             *       "name": "Amazing Product",
             *       "category": "Productivity",
             *       "manufacturer_sku": {
             *         "id": "42345ae5-h3r7-8569-er45-qertjn9c0d23",
             *         "name": "Microsoft 365 Business Basic"
             *       }
             *     }
             */
            product?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetProduct"] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was created
             * @example 2019-09-30T15:28:17Z
             */
            record_created_at?: string;
            /**
             * @example [
             *       {
             *         "source_record_id": "123",
             *         "integration_configuration": {
             *           "id": "TAxitIYnxnQP",
             *           "vendor": {
             *             "id": "1",
             *             "brand_name": "ConnectWise Manage"
             *           }
             *         }
             *       }
             *     ]
             */
            record_lineage?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineage"][] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was last updated
             * @example 2019-09-30T15:28:17Z
             */
            record_updated_at?: string;
            /**
             * @description Source status value representing current lifecycle or availability state of the SaaS license.
             * @example Enabled
             */
            status?: string | null;
            /**
             * @example [
             *       {
             *         "id": "b1e0e2a3-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
             *         "commerce_subscription_id": "c2f1f3b4-5d6e-7f8a-9b0c-1d2e3f4a5b6c",
             *         "status": "Active",
             *         "type": "Licensed",
             *         "license_count": 25,
             *         "billing_cycle_name": "Annual",
             *         "friendly_name": "Microsoft 365 Business Premium",
             *         "term": {
             *           "starts_at": "2025-03-01T00:00:00Z",
             *           "ends_at": "2026-03-01T00:00:00Z",
             *           "is_auto_renewed": true
             *         },
             *         "provider_name": "Microsoft",
             *         "partner_tier": "Tier 1",
             *         "csp_tier": "Tier 1"
             *       }
             *     ]
             */
            subscriptions?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetSubscriptions"][] | null;
            /**
             * @description Default verified domain of the Microsoft 365 tenant the asset belongs to.
             * @example contoso.onmicrosoft.com
             */
            tenant_domain?: string | null;
            /**
             * @description Represents the active subscription or term duration of the SaaS asset.
             * @example {
             *       "starts_at": "2025-03-01T00:00:00Z",
             *       "ends_at": "2025-03-31T00:00:00Z",
             *       "is_auto_renewed": true
             *     }
             */
            term?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetTerm"] | null;
        };
        /** @description Client organization that uses the SaaS asset. */
        "SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetClient": {
            /**
             * @description Unique identifier of the client organization in ScalePad.
             * @example 00000ae5-h3r7-6468-er45-wiuynj9c0d23
             */
            id?: string;
            /**
             * @description Name of the client organization.
             * @example ABC Manufacturing Inc.
             */
            name?: string;
        };
        /** @description Total number of SaaS licenses or entitlements available under a subscription. */
        "SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetPool": {
            /**
             * Format: int64
             * @description Maximum number of licenses purchased or allocated under the pool.
             * @example 100
             */
            capacity?: number | null;
            /**
             * Format: int64
             * @description Number of licenses nearing their expiration or in a grace period.
             * @example 3
             */
            grace_period_warning?: number | null;
            /**
             * Format: int64
             * @description Number of licenses that are temporarily disabled or on hold.
             * @example 5
             */
            suspended?: number | null;
            /**
             * @description Describes the pool type.
             * @example SEAT
             * @enum {string|null}
             */
            type?: "SEAT" | null;
            /**
             * Format: int64
             * @description Number of licenses currently assigned or in use.
             * @example 75
             */
            utilized?: number | null;
        };
        /** @description SaaS product information. */
        "SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetProduct": {
            /**
             * @description Classification of the SaaS product representing its utility.
             * @example Productivity
             */
            category?: string | null;
            /**
             * @description Unique identifier of the SaaS product in ScalePad.
             * @example 1234g43b06d130vcf4b3d523573q3g8l
             */
            id?: string | null;
            /**
             * @description Manufacturer information of the SaaS product.
             * @example {
             *       "id": "MS",
             *       "name": "Microsoft"
             *     }
             */
            manufacturer?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetProductManufacturer"] | null;
            /**
             * @description SKU code of the SaaS product provided by the manufacturer.
             * @example {
             *       "id": "42345ae5-h3r7-8569-er45-qertjn9c0d23",
             *       "name": "Microsoft 365 Business Basic"
             *     }
             */
            manufacturer_sku?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetProductManufacturerSku"] | null;
            /**
             * @description Name of the SaaS product.
             * @example Amazing Product
             */
            name?: string | null;
        };
        /** @description Manufacturer information of the SaaS product. */
        "SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetProductManufacturer": {
            /**
             * @description Unique identifier of the manufacturer.
             * @example MS
             */
            id?: string | null;
            /**
             * @description Name of the manufacturer.
             * @example Microsoft
             */
            name?: string | null;
        };
        /** @description SKU code of the SaaS product provided by the manufacturer. */
        "SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetProductManufacturerSku": {
            /**
             * @description Unique identifier of the SKU code.
             * @example 42345ae5-h3r7-8569-er45-qertjn9c0d23
             */
            id?: string | null;
            /**
             * @description Name of the SKU code.
             * @example Microsoft 365 Business Basic
             */
            name?: string | null;
        };
        /** @description Microsoft subscriptions matched to this SaaS asset. */
        "SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetSubscriptions": {
            /**
             * @description Billing cycle of the subscription.
             * @example Annual
             */
            billing_cycle_name?: string | null;
            /**
             * @description Microsoft commerce (legacy) subscription identifier.
             * @example c2f1f3b4-5d6e-7f8a-9b0c-1d2e3f4a5b6c
             */
            commerce_subscription_id?: string | null;
            /**
             * @description CSP tier associated with the subscription.
             * @example Tier 1
             */
            csp_tier?: string | null;
            /**
             * @description Display name of the subscription.
             * @example Microsoft 365 Business Premium
             */
            friendly_name?: string | null;
            /**
             * @description Identifier of the Microsoft subscription.
             * @example b1e0e2a3-4c5d-6e7f-8a9b-0c1d2e3f4a5b
             */
            id?: string | null;
            /**
             * Format: int64
             * @description Number of licenses associated with the subscription.
             * @example 25
             */
            license_count?: number | null;
            /**
             * @description Partner tier associated with the subscription.
             * @example Tier 1
             */
            partner_tier?: string | null;
            /**
             * @description Name of the subscription provider.
             * @example Microsoft
             */
            provider_name?: string | null;
            /**
             * @description Current status of the subscription.
             * @example Active
             */
            status?: string | null;
            /**
             * @description Term duration of the subscription.
             * @example {
             *       "starts_at": "2025-03-01T00:00:00Z",
             *       "ends_at": "2026-03-01T00:00:00Z",
             *       "is_auto_renewed": true
             *     }
             */
            term?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetSubscriptionsTerm"] | null;
            /**
             * @description Type of the subscription.
             * @example Licensed
             */
            type?: string | null;
        };
        /** @description Term duration of the subscription. */
        "SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetSubscriptionsTerm": {
            /**
             * Format: date-time
             * @description Scheduled end date of the subscription term.
             * @example 2026-03-01T00:00:00Z
             */
            ends_at?: string | null;
            /**
             * @description Whether the subscription automatically renews at the end of the current term.
             * @example true
             */
            is_auto_renewed?: boolean | null;
            /**
             * Format: date-time
             * @description Date when the subscription term became (or will become) active.
             * @example 2025-03-01T00:00:00Z
             */
            starts_at?: string | null;
        };
        /** @description Represents the active subscription or term duration of the SaaS asset. */
        "SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetTerm": {
            /**
             * Format: date-time
             * @description Scheduled end date of the license or subscription term.
             * @example 2025-03-31T00:00:00Z
             */
            ends_at?: string | null;
            /**
             * @description Flag indicating whether the license will automatically renew at the end of the current term.
             * @example true
             */
            is_auto_renewed?: boolean | null;
            /**
             * Format: date-time
             * @description Date when the SaaS asset became (or will become) active.
             * @example 2025-03-01T00:00:00Z
             */
            starts_at?: string | null;
        };
        /** @description An individual at the client organization who has been assigned access to a SaaS license managed by the MSP. */
        "SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUser": {
            /**
             * @description Activity information of the SaaS user, if provided by the vendor.
             * @example {
             *       "last_active_at": "2025-01-15T14:30:25Z",
             *       "is_active": true
             *     }
             */
            activity?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserActivity"] | null;
            /**
             * @description SaaS asset information associated with the user.
             * @example {
             *       "id": "12345a0c-4aqa-40fd-aqaw-eq3f03ge1579",
             *       "status": "Enabled"
             *     }
             */
            asset?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserAsset"] | null;
            /**
             * @description Multi-factor authentication information for user.
             * @example {
             *       "is_mfa_enabled": true,
             *       "mfa_methods": [
             *         "SMS",
             *         "Authenticator App"
             *       ],
             *       "default_mfa_method": "Authenticator App"
             *     }
             */
            authentication?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserAuthentication"] | null;
            /**
             * @description Client organization that the SaaS user is associated with.
             * @example {
             *       "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *       "name": "ABC Manufacturing Inc."
             *     }
             */
            client?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserClient"];
            /**
             * @description Contact who is assigned to the license for the SaaS asset.
             * @example {
             *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
             *     }
             */
            contact?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserContact"] | null;
            /**
             * @description Unique identifier of the SaaS user in ScalePad.
             * @example 1g9876ty-4er6-4g3t-a123-wfe5e5234rfd
             */
            id?: string;
            /**
             * @description Flag indicating whether the user has admin privileges.
             * @example false
             */
            is_admin?: boolean | null;
            /**
             * @description SaaS product information.
             * @example {
             *       "manufacturer": {
             *         "id": "MS",
             *         "name": "Microsoft"
             *       },
             *       "id": "-123456789123456789",
             *       "name": "Amazing Product",
             *       "category": "Productivity",
             *       "manufacturer_sku": {
             *         "id": "26abc4ww-1gg5-12ee-1234-12345as12e06",
             *         "name": "Microsoft 365 Business Basic"
             *       }
             *     }
             */
            product?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserProduct"] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was created
             * @example 2019-09-30T15:28:17Z
             */
            record_created_at?: string;
            /**
             * @example [
             *       {
             *         "source_record_id": "123",
             *         "integration_configuration": {
             *           "id": "TAxitIYnxnQP",
             *           "vendor": {
             *             "id": "1",
             *             "brand_name": "ConnectWise Manage"
             *           }
             *         }
             *       }
             *     ]
             */
            record_lineage?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineage"][] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was last updated
             * @example 2019-09-30T15:28:17Z
             */
            record_updated_at?: string;
            /**
             * @description Selected Microsoft subscription details for this user SKU row.
             * @example {
             *       "id": "b1e0e2a3-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
             *       "commerce_subscription_id": "c2f1f3b4-5d6e-7f8a-9b0c-1d2e3f4a5b6c",
             *       "status": "Active",
             *       "license_count": 25,
             *       "billing_cycle_name": "Annual",
             *       "is_auto_renewed": true
             *     }
             */
            subscription?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserSubscription"] | null;
            /**
             * @description Represents the active subscription or term duration of the SaaS asset.
             * @example {
             *       "starts_at": "2025-01-01T00:00:00Z",
             *       "ends_at": "2025-12-31T23:59:59Z"
             *     }
             */
            term?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserTerm"] | null;
        };
        /** @description Activity information of the SaaS user, if provided by the vendor. */
        "SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserActivity": {
            /**
             * @description Flag indicating whether the user is considered active in the system.
             * @example true
             */
            is_active?: boolean | null;
            /**
             * Format: date-time
             * @description Most recent time the user was active in the system.
             * @example 2025-01-15T14:30:25Z
             */
            last_active_at?: string | null;
        };
        /** @description SaaS asset information associated with the user. */
        "SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserAsset": {
            /**
             * @description Unique identifier of the SaaS asset in ScalePad.
             * @example 12345a0c-4aqa-40fd-aqaw-eq3f03ge1579
             */
            id?: string | null;
            /**
             * @description Source status value representing current lifecycle or availability state of the SaaS license.
             * @example Enabled
             */
            status?: string | null;
        };
        /** @description Multi-factor authentication information for user. */
        "SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserAuthentication": {
            /**
             * @description Default multi-factor authentication method for user.
             * @example Authenticator App
             */
            default_mfa_method?: string | null;
            /**
             * @description Flag indicating whether multi-factor authentication is enabled for the user.
             * @example true
             */
            is_mfa_enabled?: boolean | null;
            /**
             * @description List of multi-factor authentication methods enabled for the user.
             * @example [
             *       "SMS",
             *       "Authenticator App"
             *     ]
             */
            mfa_methods?: string[] | null;
        };
        /** @description Client organization that the SaaS user is associated with. */
        "SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserClient": {
            /**
             * @description Unique identifier of the client organization in ScalePad.
             * @example 00000ae5-h3r7-6468-er45-wiuynj9c0d23
             */
            id?: string;
            /**
             * @description Name of the client organization.
             * @example ABC Manufacturing Inc.
             */
            name?: string;
        };
        /** @description Contact who is assigned to the license for the SaaS asset. */
        "SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserContact": {
            /**
             * @description Unique identifier of the contact in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string | null;
        };
        /** @description SaaS product information. */
        "SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserProduct": {
            /**
             * @description Classification of the SaaS product representing its utility.
             * @example Productivity
             */
            category?: string | null;
            /**
             * @description Unique identifier of the SaaS product in ScalePad.
             * @example -123456789123456789
             */
            id?: string | null;
            /**
             * @description Manufacturer information of the SaaS product.
             * @example {
             *       "id": "MS",
             *       "name": "Microsoft"
             *     }
             */
            manufacturer?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserProductManufacturer"] | null;
            /**
             * @description SKU code of the SaaS product provided by the manufacturer.
             * @example {
             *       "id": "26abc4ww-1gg5-12ee-1234-12345as12e06",
             *       "name": "Microsoft 365 Business Basic"
             *     }
             */
            manufacturer_sku?: components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserProductManufacturerSku"] | null;
            /**
             * @description Name of the SaaS product.
             * @example Amazing Product
             */
            name?: string | null;
        };
        /** @description Manufacturer information of the SaaS product. */
        "SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserProductManufacturer": {
            /**
             * @description Unique identifier of the manufacturer.
             * @example MS
             */
            id?: string | null;
            /**
             * @description Name of the manufacturer.
             * @example Microsoft
             */
            name?: string | null;
        };
        /** @description SKU code of the SaaS product provided by the manufacturer. */
        "SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserProductManufacturerSku": {
            /**
             * @description Unique identifier of the SKU code.
             * @example 26abc4ww-1gg5-12ee-1234-12345as12e06
             */
            id?: string | null;
            /**
             * @description Name of the SKU code.
             * @example Microsoft 365 Business Basic
             */
            name?: string | null;
        };
        /** @description Selected Microsoft subscription details for this user SKU row. */
        "SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserSubscription": {
            /**
             * @description Billing cycle of the subscription.
             * @example Annual
             */
            billing_cycle_name?: string | null;
            /**
             * @description Microsoft commerce (legacy) subscription identifier.
             * @example c2f1f3b4-5d6e-7f8a-9b0c-1d2e3f4a5b6c
             */
            commerce_subscription_id?: string | null;
            /**
             * @description Identifier of the Microsoft subscription.
             * @example b1e0e2a3-4c5d-6e7f-8a9b-0c1d2e3f4a5b
             */
            id?: string | null;
            /**
             * @description Whether the subscription automatically renews at the end of the current term.
             * @example true
             */
            is_auto_renewed?: boolean | null;
            /**
             * Format: int64
             * @description Number of licenses associated with the subscription.
             * @example 25
             */
            license_count?: number | null;
            /**
             * @description Current status of the subscription.
             * @example Active
             */
            status?: string | null;
        };
        /** @description Represents the active subscription or term duration of the SaaS asset. */
        "SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserTerm": {
            /**
             * Format: date-time
             * @description Scheduled end date of the license or subscription term.
             * @example 2025-12-31T23:59:59Z
             */
            ends_at?: string | null;
            /**
             * Format: date-time
             * @description Date when the SaaS asset became (or will become) active.
             * @example 2025-01-01T00:00:00Z
             */
            starts_at?: string | null;
        };
        /** @description A physical or logical client site materialized from PSA location data. */
        "SpApi.CoreApi.Core.v1.Sites.Model.Site": {
            /**
             * @description Postal address for the client site.
             * @example {
             *       "address_line_1": "123 Main St",
             *       "address_line_2": "Suite 200",
             *       "city": "San Francisco",
             *       "state_prov_code": "CA",
             *       "state_prov_name": "California",
             *       "country_code": "US",
             *       "country_name": "United States",
             *       "postal_code": "94105"
             *     }
             */
            address?: components["schemas"]["SpApi.CoreApi.Core.v1.Sites.Model.SiteAddress"] | null;
            /**
             * @description Client organization that owns the site.
             * @example {
             *       "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *       "name": "ABC Manufacturing Inc."
             *     }
             */
            client?: components["schemas"]["SpApi.CoreApi.Core.v1.Sites.Model.SiteClient"];
            /**
             * @description Unique identifier of the site in ScalePad.
             * @example 4k9678ty-4rt8-8g3e-a789-wfe5e6789rfd
             */
            id?: string;
            /**
             * @description Display name of the site.
             * @example Main Office
             */
            name?: string;
            /**
             * @example [
             *       {
             *         "source_record_id": "123",
             *         "integration_configuration": {
             *           "id": "TAxitIYnxnQP",
             *           "vendor": {
             *             "id": "1",
             *             "brand_name": "ConnectWise Manage"
             *           }
             *         }
             *       }
             *     ]
             */
            record_lineage?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineage"][] | null;
        };
        /** @description Postal address for the client site. */
        "SpApi.CoreApi.Core.v1.Sites.Model.SiteAddress": {
            /**
             * @description Address line 1 of the client site.
             * @example 123 Main St
             */
            address_line_1?: string | null;
            /**
             * @description Address line 2 of the client site.
             * @example Suite 200
             */
            address_line_2?: string | null;
            /**
             * @description City of the client site.
             * @example San Francisco
             */
            city?: string | null;
            /**
             * @description ISO country code of the client site.
             * @example US
             */
            country_code?: string | null;
            /**
             * @description Official displayable name of the country of the client site.
             * @example United States
             */
            country_name?: string | null;
            /**
             * @description Postal service code of the client site.
             * @example 94105
             */
            postal_code?: string | null;
            /**
             * @description Province or state code of the client site.
             * @example CA
             */
            state_prov_code?: string | null;
            /**
             * @description Province or state name of the client site.
             * @example California
             */
            state_prov_name?: string | null;
        };
        /** @description Client organization that owns the site. */
        "SpApi.CoreApi.Core.v1.Sites.Model.SiteClient": {
            /**
             * @description Unique identifier of the client organization in ScalePad.
             * @example 00000ae5-h3r7-6468-er45-wiuynj9c0d23
             */
            id?: string;
            /**
             * @description Name of the client organization.
             * @example ABC Manufacturing Inc.
             */
            name?: string;
        };
        /** @description A service request or an issue raised by a client or an MSP, enriched with details about the requester, the client, issue summary, and other issue-related details. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.Ticket": {
            /**
             * @description Represents a workflow queue or service category of the ticket.
             * @example {
             *       "id": "78",
             *       "name": "Backup Alerts"
             *     }
             */
            board?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketBoard"] | null;
            /**
             * @description ScalePad standardized classification value, mapped from the source system's native category of the ticket. In the event that the ticket categories have not been mapped to Scalepad standards, the ticket category will fallback to the ones found in the MSP. The fallbacks will not have code descriptions.
             * @example INCIDENT
             * @enum {string|null}
             */
            category?: "INCIDENT" | "NETWORK_INCIDENT" | "FIREWALL_INCIDENT" | "ROUTER_INCIDENT" | "WIFI_INCIDENT" | "CONNECTIVITY_INCIDENT" | "SERVER_INCIDENT" | "HARDWARE_INCIDENT" | "WORKSTATION_INCIDENT" | "SHARED_PERIPHERAL_INCIDENT" | "MOBILE_DEVICE_INCIDENT" | "STORAGE_INCIDENT" | "SOFTWARE_INCIDENT" | "CLIENT_SOFTWARE_INCIDENT" | "SERVER_SOFTWARE_INCIDENT" | "COMMUNICATION_SYSTEM_INCIDENT" | "PHONE_SYSTEM_INCIDENT" | "MESSAGING_SYSTEM_INCIDENT" | "VIDEO_CONFERENCING_INCIDENT" | "SERVICE_REQUEST" | "NETWORK_REQUEST" | "FIREWALL_REQUEST" | "ROUTER_REQUEST" | "WIFI_REQUEST" | "CONNECTIVITY_REQUEST" | "HARDWARE_REQUEST" | "WORKSTATION_REQUEST" | "SERVER_REQUEST" | "SHARED_PERIPHERAL_REQUEST" | "MOBILE_DEVICE_REQUEST" | "ASSET_DISPOSAL_REQUEST" | "SOFTWARE_REQUEST" | "CLIENT_SOFTWARE_REQUEST" | "SERVER_SOFTWARE_REQUEST" | "COMMUNICATION_SYSTEM_REQUEST" | "PHONE_SYSTEM_REQUEST" | "MESSAGING_SYSTEM_REQUEST" | "VIDEO_CONFERENCING_REQUEST" | "IT_MANAGEMENT" | "CYBERSECURITY_MANAGEMENT" | "BREACH" | "MALWARE" | "DISASTER_RECOVERY" | "BACKUP_FAILURE" | "RESTORATION" | "DISASTER_RECOVERY_PLAN" | "DOCUMENTATION_TRAINING" | "DOCUMENTATION" | "TRAINING" | "USER_MANAGEMENT" | "USER_CREATION" | "USER_DELETION" | "USER_ACCESS_MODIFICATION" | "AUDIT" | "COMPLIANCE_AUDIT" | "FINANCIAL_AUDIT" | "GENERAL_MANAGEMENT" | "PROJECT_MANAGEMENT" | "CHANGE_MANAGEMENT" | "STRATEGIC_PLANNING" | "BUDGETING" | "UNASSIGNED" | null;
            /**
             * @description Client organization associated with the ticket.
             * @example {
             *       "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *       "name": "ABC Manufacturing Inc."
             *     }
             */
            client?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketClient"];
            /**
             * @description Contact who submitted the ticket or serves as the main point of communication at the client organization for the ticket.
             * @example {
             *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
             *     }
             */
            contact?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketContact"] | null;
            /**
             * @description Contract associated with the ticket.
             * @example {
             *       "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
             *       "name": "Premium Support Agreement"
             *     }
             */
            contract?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketContract"] | null;
            /**
             * @description Structured set of time-based metrics, measured in minutes, that represent how long it takes to progress through different stages of a ticket's lifecycle. These durations are adjusted to exclude account time-off, non-working days, and wait times to reflect true working time.
             * @example {
             *       "minutes_to_respond": 8,
             *       "minutes_to_plan": 9,
             *       "minutes_to_resolve": 15,
             *       "minutes_to_close": 3618,
             *       "minutes_worked": 240
             *     }
             */
            duration?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketDuration"] | null;
            /**
             * @description Unique identifier of the ticket in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string;
            /**
             * @description Categorizes the scope of the issue's effect on the client's business operations.
             * @example MEDIUM
             */
            impact?: string | null;
            /**
             * @description Indicates whether this ticket is a child ticket of another service ticket.
             * @example false
             */
            is_child_ticket?: boolean | null;
            /**
             * @description Indicates whether this resolved ticket took more than one standard deviation above the account/category baseline resolution time.
             * @example true
             */
            is_long_ticket?: boolean | null;
            /**
             * Format: int32
             * @description Total number of notes associated with the ticket.
             * @example 12
             */
            num_notes?: number | null;
            /**
             * @description Member of an MSP who is accountable for the ticket.
             * @example {
             *       "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23"
             *     }
             */
            owner_member?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketOwnerMember"] | null;
            /**
             * @description Represents the urgency level assigned to a ticket, indicating how quickly it should be addressed. Includes both the current priority and a historical log of past priority changes with timestamps.
             * @example {
             *       "current": "1",
             *       "history": [
             *         {
             *           "started_at": "2025-08-20T15:22:05Z",
             *           "ended_at": "2025-08-20T15:22:05Z",
             *           "priority": "1"
             *         }
             *       ]
             *     }
             */
            priority?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketPriority"] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was created
             * @example 2019-09-30T15:28:17Z
             */
            record_created_at?: string;
            /**
             * @example [
             *       {
             *         "source_record_id": "123",
             *         "integration_configuration": {
             *           "id": "TAxitIYnxnQP",
             *           "vendor": {
             *             "id": "1",
             *             "brand_name": "ConnectWise Manage"
             *           }
             *         }
             *       }
             *     ]
             */
            record_lineage?: components["schemas"]["SpApi.CoreApi.Core.Model.RecordLineage"][] | null;
            /**
             * Format: date-time
             * @description Timestamp of when this record was last updated
             * @example 2019-09-30T15:28:17Z
             */
            record_updated_at?: string;
            /**
             * @description Member of an MSP who resolved the ticket. For a lot of tickets, this will be the same as the owner member.
             * @example {
             *       "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23"
             *     }
             */
            responsible_member?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketResponsibleMember"] | null;
            /**
             * @description Categorizes how technically serious or urgent the issue is.
             * @example HIGH
             */
            severity?: string | null;
            /**
             * @description A set of boolean indicators showing whether milestones on the ticket were met according to the ticket's agreed Service Level Agreement (SLA), if one exists.
             * @example {
             *       "is_response_in_sla": true,
             *       "is_plan_in_sla": true,
             *       "is_resolution_in_sla": false
             *     }
             */
            sla?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketSla"] | null;
            /**
             * @description Source or channel used to create the ticket in the source PSA.
             * @example Email Connector
             */
            source?: string | null;
            /**
             * @description ScalePad standardized status value, mapped from the source system's native ticket status, representing the state of the ticket in the service workflow, along with a historical log of all past status transitions.
             * @example {
             *       "current": "UNASSIGNED",
             *       "history": [
             *         {
             *           "started_at": "2025-08-20T15:22:05Z",
             *           "ended_at": "2025-08-20T15:22:05Z",
             *           "status": "ASSIGNED"
             *         }
             *       ]
             *     }
             */
            status?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketStatus"] | null;
            /**
             * @description Description that briefly explains the issue, the purpose of the ticket and other relevant details.
             * @example Email server connectivity issues affecting multiple users
             */
            summary?: string | null;
            /**
             * @description A set of key timestamps that represent the lifecycle stages of a ticket.
             * @example {
             *       "created_at": "2025-08-27T13:32:12Z",
             *       "updated_at": "2025-08-27T13:32:12Z",
             *       "responded_at": "2025-08-27T13:32:12Z",
             *       "planned_at": "2025-08-27T13:32:12Z",
             *       "resolved_at": "2025-08-27T13:32:12Z",
             *       "closed_at": "2025-08-27T13:32:12Z"
             *     }
             */
            timeline?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketTimeline"] | null;
        };
        /** @description Represents a workflow queue or service category of the ticket. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketBoard": {
            /**
             * @description Source system identifier of the board.
             * @example 78
             */
            id?: string | null;
            /**
             * @description Name of the board.
             * @example Backup Alerts
             */
            name?: string | null;
        };
        /** @description Client organization associated with the ticket. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketClient": {
            /**
             * @description Unique identifier of the client organization associated with the ticket in ScalePad.
             * @example 00000ae5-h3r7-6468-er45-wiuynj9c0d23
             */
            id?: string;
            /**
             * @description Name of the client organization associated with the ticket.
             * @example ABC Manufacturing Inc.
             */
            name?: string;
        };
        /** @description Contact who submitted the ticket or serves as the main point of communication at the client organization for the ticket. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketContact": {
            /**
             * @description Unique identifier of the contact associated with the ticket in ScalePad.
             * @example 1g4123ty-4er6-4g3t-a345-wfe5e5234rfd
             */
            id?: string | null;
        };
        /** @description Contract associated with the ticket. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketContract": {
            /**
             * @description Unique identifier of the contract in ScalePad.
             * @example 00000ae5-h3r7-6468-er45-wiuynj9c0d23
             */
            id?: string | null;
            /**
             * @description Name of the contract.
             * @example Premium Support Agreement
             */
            name?: string | null;
        };
        /** @description Structured set of time-based metrics, measured in minutes, that represent how long it takes to progress through different stages of a ticket's lifecycle. These durations are adjusted to exclude account time-off, non-working days, and wait times to reflect true working time. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketDuration": {
            /**
             * Format: int32
             * @description Time (in minutes) from ticket creation to when the ticket was formally closed.
             * @example 3618
             */
            minutes_to_close?: number | null;
            /**
             * Format: int32
             * @description Time (in minutes) from ticket creation to when work was scheduled or planned.
             * @example 9
             */
            minutes_to_plan?: number | null;
            /**
             * Format: int32
             * @description Time (in minutes) from ticket creation to when the issue was marked as resolved.
             * @example 15
             */
            minutes_to_resolve?: number | null;
            /**
             * Format: int32
             * @description Time (in minutes) between ticket creation and the first technician response.
             * @example 8
             */
            minutes_to_respond?: number | null;
            /**
             * Format: int32
             * @description Total actual time (in minutes) spent by the technician(s) working on the ticket.
             * @example 240
             */
            minutes_worked?: number | null;
        };
        /** @description Member of an MSP who is accountable for the ticket. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketOwnerMember": {
            /**
             * @description Unique identifier of the member assigned to the ticket in ScalePad.
             * @example 00000ae5-h3r7-6468-er45-wiuynj9c0d23
             */
            id?: string | null;
        };
        /** @description Represents the urgency level assigned to a ticket, indicating how quickly it should be addressed. Includes both the current priority and a historical log of past priority changes with timestamps. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketPriority": {
            /**
             * @description The ticket's active priority level.
             * @example 1
             * @enum {string|null}
             */
            current?: "1" | "2" | "3" | "4" | "5" | "UNASSIGNED" | null;
            /**
             * @example [
             *       {
             *         "started_at": "2025-08-20T15:22:05Z",
             *         "ended_at": "2025-08-20T15:22:05Z",
             *         "priority": "1"
             *       }
             *     ]
             */
            history?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketPriorityHistory"][] | null;
        };
        /** @description List of all previous priority states the ticket went through, including the time periods when each was active. Priority states shown here are based on the most recent 24-hour snapshot and may not reflect the real-time priority of the ticket. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketPriorityHistory": {
            /**
             * Format: date-time
             * @description Date when the ticket exited this priority state.
             * @example 2025-08-20T15:22:05Z
             */
            ended_at?: string | null;
            /**
             * @description The priority level that was active during this time period.
             * @example 1
             * @enum {string|null}
             */
            priority?: "1" | "2" | "3" | "4" | "5" | "UNASSIGNED" | null;
            /**
             * Format: date-time
             * @description Date when the ticket was assigned this priority.
             * @example 2025-08-20T15:22:05Z
             */
            started_at?: string | null;
        };
        /** @description Member of an MSP who resolved the ticket. For a lot of tickets, this will be the same as the owner member. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketResponsibleMember": {
            /**
             * @description Unique identifier of the member who resolved the ticket in ScalePad.
             * @example 00000ae5-h3r7-6468-er45-wiuynj9c0d23
             */
            id?: string | null;
        };
        /** @description A set of boolean indicators showing whether milestones on the ticket were met according to the ticket's agreed Service Level Agreement (SLA), if one exists. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketSla": {
            /**
             * @description True if the ticket was scheduled or planned within the agreed SLA timeframe.
             * @example true
             */
            is_plan_in_sla?: boolean | null;
            /**
             * @description True if the ticket was resolved within the SLA-defined resolution time.
             * @example false
             */
            is_resolution_in_sla?: boolean | null;
            /**
             * @description True if the ticket was responded to within the SLA-defined response time.
             * @example true
             */
            is_response_in_sla?: boolean | null;
        };
        /** @description ScalePad standardized status value, mapped from the source system's native ticket status, representing the state of the ticket in the service workflow, along with a historical log of all past status transitions. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketStatus": {
            /**
             * @description ScalePad standardized current status value of the ticket in the service workflow.
             * @example UNASSIGNED
             * @enum {string|null}
             */
            current?: "NEW" | "ASSIGNED" | "SCHEDULED" | "TRIAGE" | "IN_PROGRESS" | "WAITING_CLIENT" | "WAITING_VENDOR" | "CANCELLED" | "COMPLETED" | "CLOSED" | "REOPENED" | "ESCALATED" | "CLIENT_RESPONDED" | "UNASSIGNED" | null;
            /**
             * @example [
             *       {
             *         "started_at": "2025-08-20T15:22:05Z",
             *         "ended_at": "2025-08-20T15:22:05Z",
             *         "status": "ASSIGNED"
             *       }
             *     ]
             */
            history?: components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.TicketStatusHistory"][] | null;
        };
        /** @description List of status change events, showing when the ticket entered and exited each status. Statuses shown here are based on the most recent 24-hour snapshot and may not reflect the real-time status of the ticket. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketStatusHistory": {
            /**
             * Format: date-time
             * @description Timestamp of when the ticket exited this status. Marks the end of this status period.
             * @example 2025-08-20T15:22:05Z
             */
            ended_at?: string | null;
            /**
             * Format: date-time
             * @description Timestamp of when the ticket entered this status. Marks the beginning of this status period.
             * @example 2025-08-20T15:22:05Z
             */
            started_at?: string | null;
            /**
             * @description ScalePad standardized status value during this time period. Represents the state of the ticket at that moment.
             * @example ASSIGNED
             * @enum {string|null}
             */
            status?: "NEW" | "ASSIGNED" | "SCHEDULED" | "TRIAGE" | "IN_PROGRESS" | "WAITING_CLIENT" | "WAITING_VENDOR" | "CANCELLED" | "COMPLETED" | "CLOSED" | "REOPENED" | "ESCALATED" | "CLIENT_RESPONDED" | "UNASSIGNED" | null;
        };
        /** @description A set of key timestamps that represent the lifecycle stages of a ticket. */
        "SpApi.CoreApi.Core.v1.Tickets.Model.TicketTimeline": {
            /**
             * Format: date-time
             * @description Timestamp of when the ticket was closed.
             * @example 2025-08-27T13:32:12Z
             */
            closed_at?: string | null;
            /**
             * Format: date-time
             * @description Timestamp of when the ticket was created.
             * @example 2025-08-27T13:32:12Z
             */
            created_at?: string | null;
            /**
             * Format: date-time
             * @description Timestamp of when the ticket was planned.
             * @example 2025-08-27T13:32:12Z
             */
            planned_at?: string | null;
            /**
             * Format: date-time
             * @description Timestamp of when the ticket was resolved.
             * @example 2025-08-27T13:32:12Z
             */
            resolved_at?: string | null;
            /**
             * Format: date-time
             * @description Timestamp of when the ticket was first responded to.
             * @example 2025-08-27T13:32:12Z
             */
            responded_at?: string | null;
            /**
             * Format: date-time
             * @description Timestamp of when the ticket was last updated.
             * @example 2025-08-27T13:32:12Z
             */
            updated_at?: string | null;
        };
        /**
         * @description Opaque, parsed representation of a `filter[...]` query expression. Produced internally by the API's filter parser; it never appears in request or response payloads.
         * @example {
         *       "name.full": "cont:\"Luke\""
         *     }
         */
        "Wm.Search.Model.Query.Field.Filter.QueryFilter.QueryFilter": Record<string, never>;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "list-hardware-assets": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `client.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[client.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `client.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[client.name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[client.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `configuration.cpu.manufacturer_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[configuration.cpu.manufacturer_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.cpu.manufacturer_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.cpu.manufacturer_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[configuration.cpu.manufacturer_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `configuration.cpu.manufacturer_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[configuration.cpu.manufacturer_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.cpu.manufacturer_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.cpu.manufacturer_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[configuration.cpu.manufacturer_name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[configuration.cpu.manufacturer_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `configuration.cpu.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[configuration.cpu.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.cpu.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.cpu.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[configuration.cpu.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `configuration.disks.total_bytes`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[configuration.disks.total_bytes]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.disks.total_bytes]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.disks.total_bytes]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[configuration.disks.total_bytes]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[configuration.disks.total_bytes]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[configuration.disks.total_bytes]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[configuration.disks.total_bytes]"?: string;
                /**
                 * @description Filters records by using a query string on the field `configuration.disks.used_bytes`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[configuration.disks.used_bytes]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.disks.used_bytes]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.disks.used_bytes]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[configuration.disks.used_bytes]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[configuration.disks.used_bytes]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[configuration.disks.used_bytes]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[configuration.disks.used_bytes]"?: string;
                /**
                 * @description Filters records by using a query string on the field `configuration.ram_bytes`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[configuration.ram_bytes]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.ram_bytes]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[configuration.ram_bytes]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[configuration.ram_bytes]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[configuration.ram_bytes]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[configuration.ram_bytes]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[configuration.ram_bytes]"?: string;
                /**
                 * @description Filters records by using a query string on the field `contact.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[contact.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contact.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contact.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[contact.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `location_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[location_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[location_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[location_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[location_name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[location_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `manufacturer.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[manufacturer.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[manufacturer.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[manufacturer.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[manufacturer.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `manufacturer.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[manufacturer.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[manufacturer.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[manufacturer.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[manufacturer.name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[manufacturer.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `model.number`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[model.number]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[model.number]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[model.number]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[model.number]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[model.number]"?: string;
                /**
                 * @description Filters records by using a query string on the field `name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_created_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_created_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_created_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_created_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_created_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_created_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.brand_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.brand_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.source_record_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.source_record_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_updated_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `serial_number`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[serial_number]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[serial_number]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[serial_number]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[serial_number]"?: string;
                /**
                 * @description Filters records by using a query string on the field `software.antivirus_info.definition_status`.
                 *
                 *
                 *
                 *     *Possible values*: `OUTOFDATE`, `UNKNOWN`, `UPTODATE`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[software.antivirus_info.definition_status]=OUTOFDATE` - to filter for exact match.
                 *
                 *
                 *     * `filter[software.antivirus_info.definition_status]=eq:OUTOFDATE` - to filter for exact match.
                 *
                 *
                 *     * `filter[software.antivirus_info.definition_status]=in:OUTOFDATE,UNKNOWN,UPTODATE` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[software.antivirus_info.definition_status]"?: string;
                /**
                 * @description Filters records by using a query string on the field `software.antivirus_info.status`.
                 *
                 *
                 *
                 *     *Possible values*: `UNKNOWN`, `DISABLED`, `RUNNING`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[software.antivirus_info.status]=UNKNOWN` - to filter for exact match.
                 *
                 *
                 *     * `filter[software.antivirus_info.status]=eq:UNKNOWN` - to filter for exact match.
                 *
                 *
                 *     * `filter[software.antivirus_info.status]=in:UNKNOWN,DISABLED,RUNNING` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[software.antivirus_info.status]"?: string;
                /**
                 * @description Filters records by using a query string on the field `software.office_suite_info.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[software.office_suite_info.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[software.office_suite_info.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[software.office_suite_info.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[software.office_suite_info.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `software.office_suite_info.version`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[software.office_suite_info.version]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[software.office_suite_info.version]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[software.office_suite_info.version]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[software.office_suite_info.version]"?: string;
                /**
                 * @description Filters records by using a query string on the field `software.operating_system`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[software.operating_system]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[software.operating_system]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[software.operating_system]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[software.operating_system]"?: string;
                /**
                 * @description Filters records by using a query string on the field `type`.
                 *
                 *
                 *
                 *     *Possible values*: `WORKSTATION`, `IMAGING`, `SERVER`, `NETWORK`, `MOBILE`, `VIRTUAL`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[type]=WORKSTATION` - to filter for exact match.
                 *
                 *
                 *     * `filter[type]=eq:WORKSTATION` - to filter for exact match.
                 *
                 *
                 *     * `filter[type]=in:WORKSTATION,IMAGING,SERVER` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[type]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
                /**
                 * @description One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending.
                 *
                 *     *Sortable fields*: `id`, `name`, `client.id`, `client.name`, `contact.id`, `manufacturer.id`, `manufacturer.name`, `model.number`, `type`, `location_name`, `configuration.cpu.name`, `configuration.cpu.manufacturer_name`, `configuration.cpu.manufacturer_id`, `configuration.ram_bytes`, `software.operating_system`, `software.antivirus_info.status`, `software.antivirus_info.definition_status`, `software.office_suite_info.name`, `software.office_suite_info.version`, `record_created_at`, `record_updated_at`.
                 * @example id
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *           "name": "TYUIAJHEVI014",
                     *           "client": {
                     *             "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *             "name": "TechCorp Solutions LLC"
                     *           },
                     *           "contact": {
                     *             "id": "4k9678ty-4rt8-8g3e-a789-wfe5e6789rfd"
                     *           },
                     *           "manufacturer": {
                     *             "id": "HPINC",
                     *             "name": "HP Inc."
                     *           },
                     *           "model": {
                     *             "number": "OptiPlex 7090",
                     *             "description": "Dell OptiPlex 7090 Desktop Computer"
                     *           },
                     *           "serial_number": "PF4WERG4",
                     *           "type": "WORKSTATION",
                     *           "last_login_user": "sarah.johnson",
                     *           "location_name": "Main Office - Floor 2",
                     *           "mac_addresses": [
                     *             "00-1B-44-11-3A-B7",
                     *             "00-1B-44-11-3A-B8"
                     *           ],
                     *           "configuration": {
                     *             "cpu": {
                     *               "name": "Intel Core i7-11700",
                     *               "manufacturer_name": "Intel",
                     *               "manufacturer_id": "INTEL"
                     *             },
                     *             "ram_bytes": 17179869184,
                     *             "disks": [
                     *               {
                     *                 "name": "C:",
                     *                 "total_bytes": 4306093056,
                     *                 "used_bytes": 645879
                     *               }
                     *             ]
                     *           },
                     *           "software": {
                     *             "operating_system": "Windows 11 Pro",
                     *             "antivirus_info": {
                     *               "status": "UNKNOWN",
                     *               "definition_status": "OUTOFDATE"
                     *             },
                     *             "office_suite_info": {
                     *               "name": "Microsoft Office 365",
                     *               "version": "16.0.14326.20404"
                     *             }
                     *           },
                     *           "address": {
                     *             "address_line_1": "123 Business Park Drive",
                     *             "address_line_2": "Suite 200",
                     *             "address_line_3": "Building A",
                     *             "city": "San Francisco",
                     *             "state_prov_code": "CA",
                     *             "state_prov_name": "California",
                     *             "country_code": "US",
                     *             "country_name": "United States",
                     *             "is_eu": false,
                     *             "postal_code": "94105",
                     *             "geo_spatial_coordinates": {
                     *               "latitude": 37.7749,
                     *               "longitude": -122.4194,
                     *               "h3_cell_id": 592540628193968100
                     *             }
                     *           },
                     *           "record_lineage": [
                     *             {
                     *               "source_record_id": "123",
                     *               "integration_configuration": {
                     *                 "id": "TAxitIYnxnQP",
                     *                 "vendor": {
                     *                   "id": "1",
                     *                   "brand_name": "ConnectWise Manage"
                     *                 }
                     *               }
                     *             }
                     *           ],
                     *           "record_created_at": "2019-09-30T15:28:17Z",
                     *           "record_updated_at": "2019-09-30T15:28:17Z"
                     *         }
                     *       ],
                     *       "total_count": 24,
                     *       "next_cursor": "WyJ0aWNrZXQiXQ"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAsset_"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "get-hardware-asset": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifier of the hardware asset */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *       "name": "TYUIAJHEVI014",
                     *       "client": {
                     *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *         "name": "TechCorp Solutions LLC"
                     *       },
                     *       "contact": {
                     *         "id": "4k9678ty-4rt8-8g3e-a789-wfe5e6789rfd"
                     *       },
                     *       "manufacturer": {
                     *         "id": "HPINC",
                     *         "name": "HP Inc."
                     *       },
                     *       "model": {
                     *         "number": "OptiPlex 7090",
                     *         "description": "Dell OptiPlex 7090 Desktop Computer"
                     *       },
                     *       "serial_number": "PF4WERG4",
                     *       "type": "WORKSTATION",
                     *       "last_login_user": "sarah.johnson",
                     *       "location_name": "Main Office - Floor 2",
                     *       "mac_addresses": [
                     *         "00-1B-44-11-3A-B7",
                     *         "00-1B-44-11-3A-B8"
                     *       ],
                     *       "configuration": {
                     *         "cpu": {
                     *           "name": "Intel Core i7-11700",
                     *           "manufacturer_name": "Intel",
                     *           "manufacturer_id": "INTEL"
                     *         },
                     *         "ram_bytes": 17179869184,
                     *         "disks": [
                     *           {
                     *             "name": "C:",
                     *             "total_bytes": 4306093056,
                     *             "used_bytes": 645879
                     *           }
                     *         ]
                     *       },
                     *       "software": {
                     *         "operating_system": "Windows 11 Pro",
                     *         "antivirus_info": {
                     *           "status": "UNKNOWN",
                     *           "definition_status": "OUTOFDATE"
                     *         },
                     *         "office_suite_info": {
                     *           "name": "Microsoft Office 365",
                     *           "version": "16.0.14326.20404"
                     *         }
                     *       },
                     *       "address": {
                     *         "address_line_1": "123 Business Park Drive",
                     *         "address_line_2": "Suite 200",
                     *         "address_line_3": "Building A",
                     *         "city": "San Francisco",
                     *         "state_prov_code": "CA",
                     *         "state_prov_name": "California",
                     *         "country_code": "US",
                     *         "country_name": "United States",
                     *         "is_eu": false,
                     *         "postal_code": "94105",
                     *         "geo_spatial_coordinates": {
                     *           "latitude": 37.7749,
                     *           "longitude": -122.4194,
                     *           "h3_cell_id": 592540628193968100
                     *         }
                     *       },
                     *       "record_lineage": [
                     *         {
                     *           "source_record_id": "123",
                     *           "integration_configuration": {
                     *             "id": "TAxitIYnxnQP",
                     *             "vendor": {
                     *               "id": "1",
                     *               "brand_name": "ConnectWise Manage"
                     *             }
                     *           }
                     *         }
                     *       ],
                     *       "record_created_at": "2019-09-30T15:28:17Z",
                     *       "record_updated_at": "2019-09-30T15:28:17Z"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAsset"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-saas-assets": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `client.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[client.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `client.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[client.name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[client.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `pool.capacity`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[pool.capacity]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[pool.capacity]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[pool.capacity]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[pool.capacity]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[pool.capacity]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[pool.capacity]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[pool.capacity]"?: string;
                /**
                 * @description Filters records by using a query string on the field `pool.grace_period_warning`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[pool.grace_period_warning]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[pool.grace_period_warning]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[pool.grace_period_warning]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[pool.grace_period_warning]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[pool.grace_period_warning]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[pool.grace_period_warning]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[pool.grace_period_warning]"?: string;
                /**
                 * @description Filters records by using a query string on the field `pool.suspended`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[pool.suspended]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[pool.suspended]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[pool.suspended]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[pool.suspended]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[pool.suspended]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[pool.suspended]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[pool.suspended]"?: string;
                /**
                 * @description Filters records by using a query string on the field `pool.type`.
                 *
                 *
                 *
                 *     *Possible values*: `SEAT`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[pool.type]=SEAT` - to filter for exact match.
                 *
                 *
                 *     * `filter[pool.type]=eq:SEAT` - to filter for exact match.
                 *
                 *
                 *     * `filter[pool.type]=in:SEAT` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[pool.type]"?: string;
                /**
                 * @description Filters records by using a query string on the field `pool.utilized`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[pool.utilized]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[pool.utilized]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[pool.utilized]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[pool.utilized]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[pool.utilized]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[pool.utilized]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[pool.utilized]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.category`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.category]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.category]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.category]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.category]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.manufacturer_sku.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.manufacturer_sku.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer_sku.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer_sku.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.manufacturer_sku.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.manufacturer_sku.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.manufacturer_sku.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer_sku.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer_sku.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.manufacturer_sku.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.manufacturer.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.manufacturer.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.manufacturer.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.manufacturer.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.manufacturer.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.manufacturer.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_created_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_created_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_created_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_created_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_created_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_created_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.brand_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.brand_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.source_record_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.source_record_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_updated_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `status`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[status]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[status]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[status]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[status]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.billing_cycle_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.billing_cycle_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.billing_cycle_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.billing_cycle_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscriptions.billing_cycle_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.commerce_subscription_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.commerce_subscription_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.commerce_subscription_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.commerce_subscription_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscriptions.commerce_subscription_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.csp_tier`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.csp_tier]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.csp_tier]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.csp_tier]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscriptions.csp_tier]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.friendly_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.friendly_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.friendly_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.friendly_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscriptions.friendly_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscriptions.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.license_count`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.license_count]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.license_count]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.license_count]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[subscriptions.license_count]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[subscriptions.license_count]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[subscriptions.license_count]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[subscriptions.license_count]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.partner_tier`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.partner_tier]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.partner_tier]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.partner_tier]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscriptions.partner_tier]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.provider_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.provider_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.provider_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.provider_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscriptions.provider_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.status`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.status]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.status]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.status]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscriptions.status]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.term.ends_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.term.ends_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[subscriptions.term.ends_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[subscriptions.term.ends_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[subscriptions.term.ends_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[subscriptions.term.ends_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.term.is_auto_renewed`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.term.is_auto_renewed]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.term.is_auto_renewed]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[subscriptions.term.is_auto_renewed]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.term.starts_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.term.starts_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[subscriptions.term.starts_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[subscriptions.term.starts_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[subscriptions.term.starts_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[subscriptions.term.starts_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscriptions.type`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscriptions.type]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.type]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscriptions.type]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscriptions.type]"?: string;
                /**
                 * @description Filters records by using a query string on the field `tenant_domain`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[tenant_domain]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[tenant_domain]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[tenant_domain]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[tenant_domain]"?: string;
                /**
                 * @description Filters records by using a query string on the field `term.ends_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[term.ends_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[term.ends_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[term.ends_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[term.ends_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[term.ends_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `term.is_auto_renewed`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[term.is_auto_renewed]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[term.is_auto_renewed]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[term.is_auto_renewed]"?: string;
                /**
                 * @description Filters records by using a query string on the field `term.starts_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[term.starts_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[term.starts_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[term.starts_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[term.starts_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[term.starts_at]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
                /**
                 * @description One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending.
                 *
                 *     *Sortable fields*: `id`, `client.id`, `client.name`, `product.manufacturer.id`, `product.manufacturer.name`, `product.id`, `product.name`, `product.category`, `product.manufacturer_sku.id`, `product.manufacturer_sku.name`, `status`, `tenant_domain`, `term.starts_at`, `term.ends_at`, `term.is_auto_renewed`, `pool.type`, `pool.capacity`, `pool.utilized`, `pool.suspended`, `pool.grace_period_warning`, `record_created_at`, `record_updated_at`.
                 * @example id
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *           "client": {
                     *             "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *             "name": "ABC Manufacturing Inc."
                     *           },
                     *           "product": {
                     *             "manufacturer": {
                     *               "id": "MS",
                     *               "name": "Microsoft"
                     *             },
                     *             "id": "1234g43b06d130vcf4b3d523573q3g8l",
                     *             "name": "Amazing Product",
                     *             "category": "Productivity",
                     *             "manufacturer_sku": {
                     *               "id": "42345ae5-h3r7-8569-er45-qertjn9c0d23",
                     *               "name": "Microsoft 365 Business Basic"
                     *             }
                     *           },
                     *           "status": "Enabled",
                     *           "tenant_domain": "contoso.onmicrosoft.com",
                     *           "term": {
                     *             "starts_at": "2025-03-01T00:00:00Z",
                     *             "ends_at": "2025-03-31T00:00:00Z",
                     *             "is_auto_renewed": true
                     *           },
                     *           "subscriptions": [
                     *             {
                     *               "id": "b1e0e2a3-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
                     *               "commerce_subscription_id": "c2f1f3b4-5d6e-7f8a-9b0c-1d2e3f4a5b6c",
                     *               "status": "Active",
                     *               "type": "Licensed",
                     *               "license_count": 25,
                     *               "billing_cycle_name": "Annual",
                     *               "friendly_name": "Microsoft 365 Business Premium",
                     *               "term": {
                     *                 "starts_at": "2025-03-01T00:00:00Z",
                     *                 "ends_at": "2026-03-01T00:00:00Z",
                     *                 "is_auto_renewed": true
                     *               },
                     *               "provider_name": "Microsoft",
                     *               "partner_tier": "Tier 1",
                     *               "csp_tier": "Tier 1"
                     *             }
                     *           ],
                     *           "pool": {
                     *             "type": "SEAT",
                     *             "capacity": 100,
                     *             "utilized": 75,
                     *             "suspended": 5,
                     *             "grace_period_warning": 3
                     *           },
                     *           "record_lineage": [
                     *             {
                     *               "source_record_id": "123",
                     *               "integration_configuration": {
                     *                 "id": "TAxitIYnxnQP",
                     *                 "vendor": {
                     *                   "id": "1",
                     *                   "brand_name": "ConnectWise Manage"
                     *                 }
                     *               }
                     *             }
                     *           ],
                     *           "record_created_at": "2019-09-30T15:28:17Z",
                     *           "record_updated_at": "2019-09-30T15:28:17Z"
                     *         }
                     *       ],
                     *       "total_count": 24,
                     *       "next_cursor": "WyJ0aWNrZXQiXQ"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAsset_"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-saas-users": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `activity.is_active`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[activity.is_active]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[activity.is_active]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[activity.is_active]"?: string;
                /**
                 * @description Filters records by using a query string on the field `activity.last_active_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[activity.last_active_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[activity.last_active_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[activity.last_active_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[activity.last_active_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[activity.last_active_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `asset.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[asset.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[asset.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[asset.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[asset.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `asset.status`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[asset.status]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[asset.status]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[asset.status]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[asset.status]"?: string;
                /**
                 * @description Filters records by using a query string on the field `authentication.default_mfa_method`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[authentication.default_mfa_method]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[authentication.default_mfa_method]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[authentication.default_mfa_method]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[authentication.default_mfa_method]"?: string;
                /**
                 * @description Filters records by using a query string on the field `authentication.is_mfa_enabled`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[authentication.is_mfa_enabled]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[authentication.is_mfa_enabled]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[authentication.is_mfa_enabled]"?: string;
                /**
                 * @description Filters records by using a query string on the field `client.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[client.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `client.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[client.name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[client.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `contact.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[contact.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contact.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contact.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[contact.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `is_admin`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[is_admin]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[is_admin]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[is_admin]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.category`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.category]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.category]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.category]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.category]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.manufacturer_sku.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.manufacturer_sku.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer_sku.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer_sku.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.manufacturer_sku.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.manufacturer_sku.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.manufacturer_sku.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer_sku.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer_sku.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.manufacturer_sku.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.manufacturer.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.manufacturer.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.manufacturer.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.manufacturer.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.manufacturer.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.manufacturer.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.manufacturer.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_created_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_created_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_created_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_created_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_created_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_created_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.brand_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.brand_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.source_record_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.source_record_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_updated_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscription.billing_cycle_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscription.billing_cycle_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscription.billing_cycle_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscription.billing_cycle_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscription.billing_cycle_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscription.commerce_subscription_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscription.commerce_subscription_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscription.commerce_subscription_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscription.commerce_subscription_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscription.commerce_subscription_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscription.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscription.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscription.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscription.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscription.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscription.is_auto_renewed`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscription.is_auto_renewed]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscription.is_auto_renewed]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[subscription.is_auto_renewed]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscription.license_count`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscription.license_count]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscription.license_count]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscription.license_count]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[subscription.license_count]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[subscription.license_count]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[subscription.license_count]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[subscription.license_count]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subscription.status`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subscription.status]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscription.status]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subscription.status]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subscription.status]"?: string;
                /**
                 * @description Filters records by using a query string on the field `term.ends_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[term.ends_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[term.ends_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[term.ends_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[term.ends_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[term.ends_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `term.starts_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[term.starts_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[term.starts_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[term.starts_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[term.starts_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[term.starts_at]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
                /**
                 * @description One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending.
                 *
                 *     *Sortable fields*: `id`, `client.id`, `client.name`, `contact.id`, `asset.id`, `asset.status`, `product.manufacturer.id`, `product.manufacturer.name`, `product.id`, `product.name`, `product.category`, `product.manufacturer_sku.id`, `product.manufacturer_sku.name`, `term.starts_at`, `term.ends_at`, `activity.last_active_at`, `activity.is_active`, `authentication.is_mfa_enabled`, `authentication.default_mfa_method`, `is_admin`, `record_created_at`, `record_updated_at`.
                 * @example id
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "1g9876ty-4er6-4g3t-a123-wfe5e5234rfd",
                     *           "client": {
                     *             "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *             "name": "ABC Manufacturing Inc."
                     *           },
                     *           "contact": {
                     *             "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
                     *           },
                     *           "asset": {
                     *             "id": "12345a0c-4aqa-40fd-aqaw-eq3f03ge1579",
                     *             "status": "Enabled"
                     *           },
                     *           "product": {
                     *             "manufacturer": {
                     *               "id": "MS",
                     *               "name": "Microsoft"
                     *             },
                     *             "id": "-123456789123456789",
                     *             "name": "Amazing Product",
                     *             "category": "Productivity",
                     *             "manufacturer_sku": {
                     *               "id": "26abc4ww-1gg5-12ee-1234-12345as12e06",
                     *               "name": "Microsoft 365 Business Basic"
                     *             }
                     *           },
                     *           "term": {
                     *             "starts_at": "2025-01-01T00:00:00Z",
                     *             "ends_at": "2025-12-31T23:59:59Z"
                     *           },
                     *           "subscription": {
                     *             "id": "b1e0e2a3-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
                     *             "commerce_subscription_id": "c2f1f3b4-5d6e-7f8a-9b0c-1d2e3f4a5b6c",
                     *             "status": "Active",
                     *             "license_count": 25,
                     *             "billing_cycle_name": "Annual",
                     *             "is_auto_renewed": true
                     *           },
                     *           "activity": {
                     *             "last_active_at": "2025-01-15T14:30:25Z",
                     *             "is_active": true
                     *           },
                     *           "authentication": {
                     *             "is_mfa_enabled": true,
                     *             "mfa_methods": [
                     *               "SMS",
                     *               "Authenticator App"
                     *             ],
                     *             "default_mfa_method": "Authenticator App"
                     *           },
                     *           "is_admin": false,
                     *           "record_lineage": [
                     *             {
                     *               "source_record_id": "123",
                     *               "integration_configuration": {
                     *                 "id": "TAxitIYnxnQP",
                     *                 "vendor": {
                     *                   "id": "1",
                     *                   "brand_name": "ConnectWise Manage"
                     *                 }
                     *               }
                     *             }
                     *           ],
                     *           "record_created_at": "2019-09-30T15:28:17Z",
                     *           "record_updated_at": "2019-09-30T15:28:17Z"
                     *         }
                     *       ],
                     *       "total_count": 24,
                     *       "next_cursor": "WyJ0aWNrZXQiXQ"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUser_"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "get-saas-user": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "1g9876ty-4er6-4g3t-a123-wfe5e5234rfd",
                     *       "client": {
                     *         "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *         "name": "ABC Manufacturing Inc."
                     *       },
                     *       "contact": {
                     *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
                     *       },
                     *       "asset": {
                     *         "id": "12345a0c-4aqa-40fd-aqaw-eq3f03ge1579",
                     *         "status": "Enabled"
                     *       },
                     *       "product": {
                     *         "manufacturer": {
                     *           "id": "MS",
                     *           "name": "Microsoft"
                     *         },
                     *         "id": "-123456789123456789",
                     *         "name": "Amazing Product",
                     *         "category": "Productivity",
                     *         "manufacturer_sku": {
                     *           "id": "26abc4ww-1gg5-12ee-1234-12345as12e06",
                     *           "name": "Microsoft 365 Business Basic"
                     *         }
                     *       },
                     *       "term": {
                     *         "starts_at": "2025-01-01T00:00:00Z",
                     *         "ends_at": "2025-12-31T23:59:59Z"
                     *       },
                     *       "subscription": {
                     *         "id": "b1e0e2a3-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
                     *         "commerce_subscription_id": "c2f1f3b4-5d6e-7f8a-9b0c-1d2e3f4a5b6c",
                     *         "status": "Active",
                     *         "license_count": 25,
                     *         "billing_cycle_name": "Annual",
                     *         "is_auto_renewed": true
                     *       },
                     *       "activity": {
                     *         "last_active_at": "2025-01-15T14:30:25Z",
                     *         "is_active": true
                     *       },
                     *       "authentication": {
                     *         "is_mfa_enabled": true,
                     *         "mfa_methods": [
                     *           "SMS",
                     *           "Authenticator App"
                     *         ],
                     *         "default_mfa_method": "Authenticator App"
                     *       },
                     *       "is_admin": false,
                     *       "record_lineage": [
                     *         {
                     *           "source_record_id": "123",
                     *           "integration_configuration": {
                     *             "id": "TAxitIYnxnQP",
                     *             "vendor": {
                     *               "id": "1",
                     *               "brand_name": "ConnectWise Manage"
                     *             }
                     *           }
                     *         }
                     *       ],
                     *       "record_created_at": "2019-09-30T15:28:17Z",
                     *       "record_updated_at": "2019-09-30T15:28:17Z"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUser"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "get-saas-asset": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *       "client": {
                     *         "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *         "name": "ABC Manufacturing Inc."
                     *       },
                     *       "product": {
                     *         "manufacturer": {
                     *           "id": "MS",
                     *           "name": "Microsoft"
                     *         },
                     *         "id": "1234g43b06d130vcf4b3d523573q3g8l",
                     *         "name": "Amazing Product",
                     *         "category": "Productivity",
                     *         "manufacturer_sku": {
                     *           "id": "42345ae5-h3r7-8569-er45-qertjn9c0d23",
                     *           "name": "Microsoft 365 Business Basic"
                     *         }
                     *       },
                     *       "status": "Enabled",
                     *       "tenant_domain": "contoso.onmicrosoft.com",
                     *       "term": {
                     *         "starts_at": "2025-03-01T00:00:00Z",
                     *         "ends_at": "2025-03-31T00:00:00Z",
                     *         "is_auto_renewed": true
                     *       },
                     *       "subscriptions": [
                     *         {
                     *           "id": "b1e0e2a3-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
                     *           "commerce_subscription_id": "c2f1f3b4-5d6e-7f8a-9b0c-1d2e3f4a5b6c",
                     *           "status": "Active",
                     *           "type": "Licensed",
                     *           "license_count": 25,
                     *           "billing_cycle_name": "Annual",
                     *           "friendly_name": "Microsoft 365 Business Premium",
                     *           "term": {
                     *             "starts_at": "2025-03-01T00:00:00Z",
                     *             "ends_at": "2026-03-01T00:00:00Z",
                     *             "is_auto_renewed": true
                     *           },
                     *           "provider_name": "Microsoft",
                     *           "partner_tier": "Tier 1",
                     *           "csp_tier": "Tier 1"
                     *         }
                     *       ],
                     *       "pool": {
                     *         "type": "SEAT",
                     *         "capacity": 100,
                     *         "utilized": 75,
                     *         "suspended": 5,
                     *         "grace_period_warning": 3
                     *       },
                     *       "record_lineage": [
                     *         {
                     *           "source_record_id": "123",
                     *           "integration_configuration": {
                     *             "id": "TAxitIYnxnQP",
                     *             "vendor": {
                     *               "id": "1",
                     *               "brand_name": "ConnectWise Manage"
                     *             }
                     *           }
                     *         }
                     *       ],
                     *       "record_created_at": "2019-09-30T15:28:17Z",
                     *       "record_updated_at": "2019-09-30T15:28:17Z"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAsset"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-clients": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `lifecycle`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[lifecycle]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[lifecycle]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[lifecycle]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[lifecycle]"?: string;
                /**
                 * @description Filters records by using a query string on the field `name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `num_contacts`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[num_contacts]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[num_contacts]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[num_contacts]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[num_contacts]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[num_contacts]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[num_contacts]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[num_contacts]"?: string;
                /**
                 * @description Filters records by using a query string on the field `num_hardware_assets`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[num_hardware_assets]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[num_hardware_assets]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[num_hardware_assets]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[num_hardware_assets]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[num_hardware_assets]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[num_hardware_assets]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[num_hardware_assets]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_created_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_created_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_created_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_created_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_created_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_created_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.brand_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.brand_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.source_record_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.source_record_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_updated_at]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
                /**
                 * @description One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending.
                 *
                 *     *Sortable fields*: `name`, `lifecycle`, `num_contacts`, `num_hardware_assets`, `record_created_at`, `record_updated_at`.
                 * @example name
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "00006dab0f9f5d117124aade71a2ah6a",
                     *           "name": "Space Sprockets, Inc",
                     *           "lifecycle": "CUSTOMER",
                     *           "primary_domain": "scalepad.com",
                     *           "num_contacts": 100,
                     *           "num_hardware_assets": 509,
                     *           "record_lineage": [
                     *             {
                     *               "source_record_id": "123",
                     *               "integration_configuration": {
                     *                 "id": "TAxitIYnxnQP",
                     *                 "vendor": {
                     *                   "id": "1",
                     *                   "brand_name": "ConnectWise Manage"
                     *                 }
                     *               }
                     *             }
                     *           ],
                     *           "address": {
                     *             "address_line_1": "123 Main St",
                     *             "address_line_2": "Apt 1",
                     *             "address_line_3": "Building A",
                     *             "city": "San Francisco",
                     *             "state_prov_code": "CA",
                     *             "state_prov_name": "California",
                     *             "country_code": "US",
                     *             "country_name": "United States",
                     *             "is_eu": false,
                     *             "postal_code": "12345",
                     *             "geo_spatial_coordinates": {
                     *               "longitude": 38.82,
                     *               "latitude": 40.71,
                     *               "h3_cell_id": 1234567890
                     *             }
                     *           },
                     *           "record_created_at": "2019-09-30T15:28:17Z",
                     *           "record_updated_at": "2019-09-30T15:28:17Z"
                     *         }
                     *       ],
                     *       "total_count": 24,
                     *       "next_cursor": "WyJ0aWNrZXQiXQ"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Clients.Model.Client_"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "get-client": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifier of the client */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "00006dab0f9f5d117124aade71a2ah6a",
                     *       "name": "Space Sprockets, Inc",
                     *       "lifecycle": "CUSTOMER",
                     *       "primary_domain": "scalepad.com",
                     *       "num_contacts": 100,
                     *       "num_hardware_assets": 509,
                     *       "record_lineage": [
                     *         {
                     *           "source_record_id": "123",
                     *           "integration_configuration": {
                     *             "id": "TAxitIYnxnQP",
                     *             "vendor": {
                     *               "id": "1",
                     *               "brand_name": "ConnectWise Manage"
                     *             }
                     *           }
                     *         }
                     *       ],
                     *       "address": {
                     *         "address_line_1": "123 Main St",
                     *         "address_line_2": "Apt 1",
                     *         "address_line_3": "Building A",
                     *         "city": "San Francisco",
                     *         "state_prov_code": "CA",
                     *         "state_prov_name": "California",
                     *         "country_code": "US",
                     *         "country_name": "United States",
                     *         "is_eu": false,
                     *         "postal_code": "12345",
                     *         "geo_spatial_coordinates": {
                     *           "longitude": 38.82,
                     *           "latitude": 40.71,
                     *           "h3_cell_id": 1234567890
                     *         }
                     *       },
                     *       "record_created_at": "2019-09-30T15:28:17Z",
                     *       "record_updated_at": "2019-09-30T15:28:17Z"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.Clients.Model.Client"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-contacts": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `client.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[client.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `client.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[client.name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[client.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_created_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_created_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_created_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_created_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_created_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_created_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.brand_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.brand_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.source_record_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.source_record_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_updated_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `title`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[title]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[title]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[title]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[title]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[title]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
                /**
                 * @description One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending.
                 *
                 *     *Sortable fields*: `client.id`, `client.name`, `title`, `contact_info.email`, `record_created_at`, `record_updated_at`.
                 * @example client.id
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * @description ---
         *
         *     **Body-only filter fields (PII):**
         *
         *     - `contact_info.email`
         *     - `name.full`
         *
         *     These fields **cannot** be supplied as query parameters (`filter[...]`). Provide them under the request body `filter` dictionary instead.
         *
         *     **Body filter value format:**
         *
         *     - Each entry under `filter` is: `"<field>": "<operator>:<value>"`
         *
         *     **Quoting / escaping (strings):**
         *
         *     - If a value contains spaces or commas, wrap it in quotes: `eq:\"John Smith\"`
         *     - If a value itself contains quotes, escape them: `eq:\"Acme \\\"Corp\\\"\"`
         *
         *     **Examples:**
         *
         *     - `contact_info.email`
         *       - Supports comparison operators: `eq`, `in`.
         *       - Examples:
         *         - `{ "filter": { "contact_info.email": "eq:example_value" } }`
         *         - `{ "filter": { "contact_info.email": "in:example_value_1,example_value_2,example_value_3" } }`
         *
         *     - `name.full`
         *       - Supports comparison operators: `eq`, `in`, `cont`.
         *       - Examples:
         *         - `{ "filter": { "name.full": "eq:example_value" } }`
         *         - `{ "filter": { "name.full": "in:example_value_1,example_value_2,example_value_3" } }`
         *         - `{ "filter": { "name.full": "cont:word" } }`
         */
        requestBody?: {
            content: {
                "application/*+json": components["schemas"]["SpApi.CoreApi.Core.Filters.Model.BodyFilterContainer_SpApi.CoreApi.Core.v1.Contacts.Model.Contact_"];
                /**
                 * @example {
                 *       "filter": {
                 *         "contact_info.email": "eq:example_value",
                 *         "name.full": "eq:example_value"
                 *       }
                 *     }
                 */
                "application/json": {
                    filter?: {
                        /** @description Body-only filter. Value format: `<operator>:<value>`. */
                        "contact_info.email"?: string;
                        /** @description Body-only filter. Value format: `<operator>:<value>`. */
                        "name.full"?: string;
                    } & {
                        [key: string]: string;
                    };
                };
                "application/json-patch+json": components["schemas"]["SpApi.CoreApi.Core.Filters.Model.BodyFilterContainer_SpApi.CoreApi.Core.v1.Contacts.Model.Contact_"];
                "text/json": components["schemas"]["SpApi.CoreApi.Core.Filters.Model.BodyFilterContainer_SpApi.CoreApi.Core.v1.Contacts.Model.Contact_"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *           "client": {
                     *             "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *             "name": "ABC Manufacturing Inc."
                     *           },
                     *           "title": "IT Manager",
                     *           "contact_info": {
                     *             "email": "john.smith@abcmanufacturing.com",
                     *             "phone": "6013789938"
                     *           },
                     *           "name": {
                     *             "first": "John",
                     *             "middle": "Michael",
                     *             "last": "Smith",
                     *             "full": "John Michael Smith"
                     *           },
                     *           "record_lineage": [
                     *             {
                     *               "source_record_id": "123",
                     *               "integration_configuration": {
                     *                 "id": "TAxitIYnxnQP",
                     *                 "vendor": {
                     *                   "id": "1",
                     *                   "brand_name": "ConnectWise Manage"
                     *                 }
                     *               }
                     *             }
                     *           ],
                     *           "record_created_at": "2019-09-30T15:28:17Z",
                     *           "record_updated_at": "2019-09-30T15:28:17Z"
                     *         }
                     *       ],
                     *       "total_count": 24,
                     *       "next_cursor": "WyJ0aWNrZXQiXQ"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Contacts.Model.Contact_"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "get-contact": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifier of the contact */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *       "client": {
                     *         "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *         "name": "ABC Manufacturing Inc."
                     *       },
                     *       "title": "IT Manager",
                     *       "contact_info": {
                     *         "email": "john.smith@abcmanufacturing.com",
                     *         "phone": "6013789938"
                     *       },
                     *       "name": {
                     *         "first": "John",
                     *         "middle": "Michael",
                     *         "last": "Smith",
                     *         "full": "John Michael Smith"
                     *       },
                     *       "record_lineage": [
                     *         {
                     *           "source_record_id": "123",
                     *           "integration_configuration": {
                     *             "id": "TAxitIYnxnQP",
                     *             "vendor": {
                     *               "id": "1",
                     *               "brand_name": "ConnectWise Manage"
                     *             }
                     *           }
                     *         }
                     *       ],
                     *       "record_created_at": "2019-09-30T15:28:17Z",
                     *       "record_updated_at": "2019-09-30T15:28:17Z"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.Contacts.Model.Contact"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-integration-configurations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "5Vprq5VpwWGS",
                     *           "vendor": {
                     *             "id": "2",
                     *             "brand_name": "Kaseya VSA"
                     *           },
                     *           "nickname": "GLOBAL ConnectWise Manage (TEST)",
                     *           "external_url": "https://na.myconnectwise.net",
                     *           "connection": {
                     *             "fqdn": "na.myconnectwise.net",
                     *             "base_uri": null,
                     *             "tenant_id": "acme"
                     *           },
                     *           "primary": [
                     *             "TICKET",
                     *             "OPPORTUNITY"
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-integration-vendors": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `category`.
                 *
                 *
                 *
                 *     *Possible values*: `PSA`, `RMM`, `SaaS`, `Network`, `Documentation`, `Backup`, `Customer Satisfaction`, `Cybersecurity`, `PSA & RMM`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[category]=PSA` - to filter for exact match.
                 *
                 *
                 *     * `filter[category]=eq:PSA` - to filter for exact match.
                 *
                 *
                 *     * `filter[category]=in:PSA,RMM,SaaS` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[category]=cont:PSA` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[category]"?: string;
                /**
                 * @description Filters records by using a query string on the field `name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `vendor_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[vendor_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[vendor_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[vendor_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[vendor_id]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example [
                     *       {
                     *         "data": [
                     *           {
                     *             "name": "Autotask PSA",
                     *             "vendor_id": "40",
                     *             "category": "PSA & RMM",
                     *             "data_types_supported": [
                     *               "HARDWARE_ASSET",
                     *               "CONTACT"
                     *             ]
                     *           }
                     *         ]
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.Integrations.Model.Vendors"][];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.UnprocessableContentResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-members": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `daily_capacity`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[daily_capacity]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[daily_capacity]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[daily_capacity]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[daily_capacity]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[daily_capacity]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[daily_capacity]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[daily_capacity]"?: string;
                /**
                 * @description Filters records by using a query string on the field `hired_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[hired_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[hired_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[hired_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[hired_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[hired_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `hourly_cost.amount`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[hourly_cost.amount]=42.5` - to filter for exact match.
                 *
                 *
                 *     * `filter[hourly_cost.amount]=eq:42.5` - to filter for exact match.
                 *
                 *
                 *     * `filter[hourly_cost.amount]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[hourly_cost.amount]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[hourly_cost.amount]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[hourly_cost.amount]=lte:42` - to filter for less than or equal to
                 * @example eq:42.5
                 */
                "filter[hourly_cost.amount]"?: string;
                /**
                 * @description Filters records by using a query string on the field `id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `is_scalepad_user`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[is_scalepad_user]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[is_scalepad_user]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[is_scalepad_user]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_created_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_created_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_created_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_created_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_created_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_created_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.brand_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.brand_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.source_record_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.source_record_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_updated_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `reports_to_member.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[reports_to_member.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[reports_to_member.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[reports_to_member.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[reports_to_member.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `title`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[title]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[title]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[title]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[title]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[title]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
                /**
                 * @description One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending.
                 *
                 *     *Sortable fields*: `hired_at`, `title`, `is_scalepad_user`, `hourly_cost.amount`, `daily_capacity`, `record_created_at`, `record_updated_at`.
                 * @example hired_at
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * @description ---
         *
         *     **Body-only filter fields (PII):**
         *
         *     - `contact_info.email`
         *     - `contact_info.phone`
         *     - `name.full`
         *     - `reports_to_member.email`
         *
         *     These fields **cannot** be supplied as query parameters (`filter[...]`). Provide them under the request body `filter` dictionary instead.
         *
         *     **Body filter value format:**
         *
         *     - Each entry under `filter` is: `"<field>": "<operator>:<value>"`
         *
         *     **Quoting / escaping (strings):**
         *
         *     - If a value contains spaces or commas, wrap it in quotes: `eq:\"John Smith\"`
         *     - If a value itself contains quotes, escape them: `eq:\"Acme \\\"Corp\\\"\"`
         *
         *     **Examples:**
         *
         *     - `contact_info.email`
         *       - Supports comparison operators: `eq`, `in`.
         *       - Examples:
         *         - `{ "filter": { "contact_info.email": "eq:example_value" } }`
         *         - `{ "filter": { "contact_info.email": "in:example_value_1,example_value_2,example_value_3" } }`
         *
         *     - `contact_info.phone`
         *       - Supports comparison operators: `eq`, `in`.
         *       - Examples:
         *         - `{ "filter": { "contact_info.phone": "eq:example_value" } }`
         *         - `{ "filter": { "contact_info.phone": "in:example_value_1,example_value_2,example_value_3" } }`
         *
         *     - `name.full`
         *       - Supports comparison operators: `eq`, `in`, `cont`.
         *       - Examples:
         *         - `{ "filter": { "name.full": "eq:example_value" } }`
         *         - `{ "filter": { "name.full": "in:example_value_1,example_value_2,example_value_3" } }`
         *         - `{ "filter": { "name.full": "cont:word" } }`
         *
         *     - `reports_to_member.email`
         *       - Supports comparison operators: `eq`, `in`.
         *       - Examples:
         *         - `{ "filter": { "reports_to_member.email": "eq:example_value" } }`
         *         - `{ "filter": { "reports_to_member.email": "in:example_value_1,example_value_2,example_value_3" } }`
         */
        requestBody?: {
            content: {
                "application/*+json": components["schemas"]["SpApi.CoreApi.Core.Filters.Model.BodyFilterContainer_SpApi.CoreApi.Core.v1.Members.Model.Member_"];
                /**
                 * @example {
                 *       "filter": {
                 *         "contact_info.email": "eq:example_value",
                 *         "contact_info.phone": "eq:example_value",
                 *         "name.full": "eq:example_value",
                 *         "reports_to_member.email": "eq:example_value"
                 *       }
                 *     }
                 */
                "application/json": {
                    filter?: {
                        /** @description Body-only filter. Value format: `<operator>:<value>`. */
                        "contact_info.email"?: string;
                        /** @description Body-only filter. Value format: `<operator>:<value>`. */
                        "contact_info.phone"?: string;
                        /** @description Body-only filter. Value format: `<operator>:<value>`. */
                        "name.full"?: string;
                        /** @description Body-only filter. Value format: `<operator>:<value>`. */
                        "reports_to_member.email"?: string;
                    } & {
                        [key: string]: string;
                    };
                };
                "application/json-patch+json": components["schemas"]["SpApi.CoreApi.Core.Filters.Model.BodyFilterContainer_SpApi.CoreApi.Core.v1.Members.Model.Member_"];
                "text/json": components["schemas"]["SpApi.CoreApi.Core.Filters.Model.BodyFilterContainer_SpApi.CoreApi.Core.v1.Members.Model.Member_"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "1g9876ty-4er6-4g3t-a123-wfe5e5234rfd",
                     *           "name": {
                     *             "first": "John",
                     *             "last": "Smith",
                     *             "middle": "Michael",
                     *             "full": "John Michael Smith"
                     *           },
                     *           "hired_at": "2024-02-05T00:00:00Z",
                     *           "title": "Technician",
                     *           "is_scalepad_user": true,
                     *           "contact_info": {
                     *             "email": "john.smith@company.com",
                     *             "ext": "1234",
                     *             "phone": "6013789938"
                     *           },
                     *           "reports_to_member": {
                     *             "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *             "email": "sarah.johnson@company.com"
                     *           },
                     *           "work_roles": [
                     *             "Analyst",
                     *             "Engineer"
                     *           ],
                     *           "hourly_cost": {
                     *             "iso_currency_code": "USD",
                     *             "amount": 85.5
                     *           },
                     *           "daily_capacity": 8,
                     *           "record_lineage": [
                     *             {
                     *               "source_record_id": "123",
                     *               "integration_configuration": {
                     *                 "id": "TAxitIYnxnQP",
                     *                 "vendor": {
                     *                   "id": "1",
                     *                   "brand_name": "ConnectWise Manage"
                     *                 }
                     *               }
                     *             }
                     *           ],
                     *           "address": {
                     *             "address_line_1": "123 Main Street",
                     *             "address_line_2": "Suite 200",
                     *             "city": "New York",
                     *             "state_prov_code": "NY",
                     *             "state_prov_name": "New York",
                     *             "country_code": "US",
                     *             "country_name": "United States",
                     *             "is_eu": false,
                     *             "postal_code": "10001",
                     *             "geo_spatial_coordinates": {
                     *               "latitude": 40.71,
                     *               "longitude": 74.06,
                     *               "h3_cell_id": 1234567890
                     *             }
                     *           },
                     *           "record_created_at": "2019-09-30T15:28:17Z",
                     *           "record_updated_at": "2019-09-30T15:28:17Z"
                     *         }
                     *       ],
                     *       "total_count": 24,
                     *       "next_cursor": "WyJ0aWNrZXQiXQ"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Members.Model.Member_"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "get-member": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "1g9876ty-4er6-4g3t-a123-wfe5e5234rfd",
                     *       "name": {
                     *         "first": "John",
                     *         "last": "Smith",
                     *         "middle": "Michael",
                     *         "full": "John Michael Smith"
                     *       },
                     *       "hired_at": "2024-02-05T00:00:00Z",
                     *       "title": "Technician",
                     *       "is_scalepad_user": true,
                     *       "contact_info": {
                     *         "email": "john.smith@company.com",
                     *         "ext": "1234",
                     *         "phone": "6013789938"
                     *       },
                     *       "reports_to_member": {
                     *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *         "email": "sarah.johnson@company.com"
                     *       },
                     *       "work_roles": [
                     *         "Analyst",
                     *         "Engineer"
                     *       ],
                     *       "hourly_cost": {
                     *         "iso_currency_code": "USD",
                     *         "amount": 85.5
                     *       },
                     *       "daily_capacity": 8,
                     *       "record_lineage": [
                     *         {
                     *           "source_record_id": "123",
                     *           "integration_configuration": {
                     *             "id": "TAxitIYnxnQP",
                     *             "vendor": {
                     *               "id": "1",
                     *               "brand_name": "ConnectWise Manage"
                     *             }
                     *           }
                     *         }
                     *       ],
                     *       "address": {
                     *         "address_line_1": "123 Main Street",
                     *         "address_line_2": "Suite 200",
                     *         "city": "New York",
                     *         "state_prov_code": "NY",
                     *         "state_prov_name": "New York",
                     *         "country_code": "US",
                     *         "country_name": "United States",
                     *         "is_eu": false,
                     *         "postal_code": "10001",
                     *         "geo_spatial_coordinates": {
                     *           "latitude": 40.71,
                     *           "longitude": 74.06,
                     *           "h3_cell_id": 1234567890
                     *         }
                     *       },
                     *       "record_created_at": "2019-09-30T15:28:17Z",
                     *       "record_updated_at": "2019-09-30T15:28:17Z"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.Members.Model.Member"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-opportunities": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `client.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[client.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `client.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[client.name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[client.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `contact.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[contact.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contact.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contact.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[contact.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `is_active`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[is_active]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[is_active]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[is_active]"?: string;
                /**
                 * @description Filters records by using a query string on the field `probability`.
                 *
                 *     Supports comparison operators: `eq`, `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[probability]=42` - to filter for exact match.
                 *
                 *
                 *     * `filter[probability]=eq:42` - to filter for exact match.
                 *
                 *
                 *     * `filter[probability]=gt:42` - to filter for greater than
                 *
                 *
                 *     * `filter[probability]=gte:42` - to filter for greater than or equal to
                 *
                 *
                 *     * `filter[probability]=lt:42` - to filter for less than
                 *
                 *
                 *     * `filter[probability]=lte:42` - to filter for less than or equal to
                 * @example eq:42
                 */
                "filter[probability]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_created_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_created_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_created_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_created_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_created_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_created_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.brand_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.brand_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.source_record_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.source_record_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_updated_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `responsible_member.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[responsible_member.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[responsible_member.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[responsible_member.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[responsible_member.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `source_stage`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[source_stage]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_stage]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_stage]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[source_stage]"?: string;
                /**
                 * @description Filters records by using a query string on the field `source_status`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[source_status]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_status]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_status]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[source_status]"?: string;
                /**
                 * @description Filters records by using a query string on the field `title`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[title]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[title]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[title]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[title]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[title]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
                /**
                 * @description One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending.
                 *
                 *     *Sortable fields*: `title`, `source_status`, `source_stage`, `is_active`, `probability`, `client.id`, `client.name`, `contact.id`, `responsible_member.id`, `record_created_at`, `record_updated_at`.
                 * @example title
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *           "title": "Managed IT Services - ABC Corp",
                     *           "description": "Comprehensive managed IT services including help desk, network monitoring, and cybersecurity for 150-user manufacturing company",
                     *           "source_status": "Open",
                     *           "source_stage": "Stage 2: Technical Review",
                     *           "is_active": true,
                     *           "probability": 75,
                     *           "client": {
                     *             "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *             "name": "ABC Manufacturing Inc."
                     *           },
                     *           "contact": {
                     *             "id": "1g4123ty-4er6-5h3h-a234-wfe5e5234rfd"
                     *           },
                     *           "responsible_member": {
                     *             "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
                     *           },
                     *           "record_lineage": [
                     *             {
                     *               "source_record_id": "123",
                     *               "integration_configuration": {
                     *                 "id": "TAxitIYnxnQP",
                     *                 "vendor": {
                     *                   "id": "1",
                     *                   "brand_name": "ConnectWise Manage"
                     *                 }
                     *               }
                     *             }
                     *           ],
                     *           "record_created_at": "2019-09-30T15:28:17Z",
                     *           "record_updated_at": "2019-09-30T15:28:17Z"
                     *         }
                     *       ],
                     *       "total_count": 24,
                     *       "next_cursor": "WyJ0aWNrZXQiXQ"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Opportunities.Model.Opportunity_"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "get-opportunity": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *       "title": "Managed IT Services - ABC Corp",
                     *       "description": "Comprehensive managed IT services including help desk, network monitoring, and cybersecurity for 150-user manufacturing company",
                     *       "source_status": "Open",
                     *       "source_stage": "Stage 2: Technical Review",
                     *       "is_active": true,
                     *       "probability": 75,
                     *       "client": {
                     *         "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *         "name": "ABC Manufacturing Inc."
                     *       },
                     *       "contact": {
                     *         "id": "1g4123ty-4er6-5h3h-a234-wfe5e5234rfd"
                     *       },
                     *       "responsible_member": {
                     *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
                     *       },
                     *       "record_lineage": [
                     *         {
                     *           "source_record_id": "123",
                     *           "integration_configuration": {
                     *             "id": "TAxitIYnxnQP",
                     *             "vendor": {
                     *               "id": "1",
                     *               "brand_name": "ConnectWise Manage"
                     *             }
                     *           }
                     *         }
                     *       ],
                     *       "record_created_at": "2019-09-30T15:28:17Z",
                     *       "record_updated_at": "2019-09-30T15:28:17Z"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.Opportunities.Model.Opportunity"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-product-catalog": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `category`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[category]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[category]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[category]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[category]"?: string;
                /**
                 * @description Filters records by using a query string on the field `id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `is_active`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[is_active]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[is_active]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[is_active]"?: string;
                /**
                 * @description Filters records by using a query string on the field `manufacturer_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[manufacturer_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[manufacturer_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[manufacturer_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[manufacturer_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product_class`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product_class]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product_class]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product_class]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product_class]"?: string;
                /**
                 * @description Filters records by using a query string on the field `product_type`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[product_type]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product_type]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[product_type]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[product_type]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_created_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_created_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_created_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_created_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_created_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_created_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.brand_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.brand_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.source_record_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.source_record_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_updated_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `source_product_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[source_product_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_product_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_product_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[source_product_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `source_product_identifier`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[source_product_identifier]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_product_identifier]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_product_identifier]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[source_product_identifier]"?: string;
                /**
                 * @description Filters records by using a query string on the field `source_system`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[source_system]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_system]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_system]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[source_system]"?: string;
                /**
                 * @description Filters records by using a query string on the field `subcategory`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[subcategory]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subcategory]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[subcategory]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[subcategory]"?: string;
                /**
                 * @description Filters records by using a query string on the field `updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[updated_at]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
                /**
                 * @description One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending.
                 *
                 *     *Sortable fields*: `source_system`, `source_product_id`, `source_product_identifier`, `name`, `category`, `subcategory`, `product_type`, `product_class`, `manufacturer_name`, `unit_cost`, `unit_price`, `is_active`, `updated_at`, `record_created_at`, `record_updated_at`.
                 * @example source_system
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *           "source_system": "CONNECTWISE",
                     *           "source_product_id": "123",
                     *           "source_product_identifier": "MSP-SVC",
                     *           "name": "Managed IT Services",
                     *           "description": "Monthly managed IT services package.",
                     *           "category": "Services",
                     *           "subcategory": "Managed Services",
                     *           "product_type": "Service",
                     *           "product_class": "Non-Inventory",
                     *           "manufacturer_name": "Microsoft",
                     *           "unit_cost": 75,
                     *           "unit_price": 125,
                     *           "is_active": true,
                     *           "updated_at": "2026-06-11T18:00:20Z",
                     *           "record_lineage": [
                     *             {
                     *               "source_record_id": "123",
                     *               "integration_configuration": {
                     *                 "id": "TAxitIYnxnQP",
                     *                 "vendor": {
                     *                   "id": "1",
                     *                   "brand_name": "ConnectWise Manage"
                     *                 }
                     *               }
                     *             }
                     *           ],
                     *           "record_created_at": "2019-09-30T15:28:17Z",
                     *           "record_updated_at": "2019-09-30T15:28:17Z"
                     *         }
                     *       ],
                     *       "total_count": 24,
                     *       "next_cursor": "WyJ0aWNrZXQiXQ"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.ProductCatalog.Model.ProductCatalog_"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "get-product-catalog": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifier of the product catalog record */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *       "source_system": "CONNECTWISE",
                     *       "source_product_id": "123",
                     *       "source_product_identifier": "MSP-SVC",
                     *       "name": "Managed IT Services",
                     *       "description": "Monthly managed IT services package.",
                     *       "category": "Services",
                     *       "subcategory": "Managed Services",
                     *       "product_type": "Service",
                     *       "product_class": "Non-Inventory",
                     *       "manufacturer_name": "Microsoft",
                     *       "unit_cost": 75,
                     *       "unit_price": 125,
                     *       "is_active": true,
                     *       "updated_at": "2026-06-11T18:00:20Z",
                     *       "record_lineage": [
                     *         {
                     *           "source_record_id": "123",
                     *           "integration_configuration": {
                     *             "id": "TAxitIYnxnQP",
                     *             "vendor": {
                     *               "id": "1",
                     *               "brand_name": "ConnectWise Manage"
                     *             }
                     *           }
                     *         }
                     *       ],
                     *       "record_created_at": "2019-09-30T15:28:17Z",
                     *       "record_updated_at": "2019-09-30T15:28:17Z"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.ProductCatalog.Model.ProductCatalog"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-contracts": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `client.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[client.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `client.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[client.name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[client.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `contact.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[contact.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contact.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contact.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[contact.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `contract_pricings.is_billable`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[contract_pricings.is_billable]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[contract_pricings.is_billable]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[contract_pricings.is_billable]"?: string;
                /**
                 * @description Filters records by using a query string on the field `contract_pricings.items.product.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[contract_pricings.items.product.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contract_pricings.items.product.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contract_pricings.items.product.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[contract_pricings.items.product.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `contract_pricings.items.product.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[contract_pricings.items.product.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contract_pricings.items.product.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contract_pricings.items.product.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[contract_pricings.items.product.name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[contract_pricings.items.product.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `contract_pricings.pricing_type`.
                 *
                 *
                 *
                 *     *Possible values*: `UNKNOWN`, `UNIT`, `ALLOCATION`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[contract_pricings.pricing_type]=UNKNOWN` - to filter for exact match.
                 *
                 *
                 *     * `filter[contract_pricings.pricing_type]=eq:UNKNOWN` - to filter for exact match.
                 *
                 *
                 *     * `filter[contract_pricings.pricing_type]=in:UNKNOWN,UNIT,ALLOCATION` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[contract_pricings.pricing_type]"?: string;
                /**
                 * @description Filters records by using a query string on the field `id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `is_addendum`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[is_addendum]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[is_addendum]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[is_addendum]"?: string;
                /**
                 * @description Filters records by using a query string on the field `is_billable`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[is_billable]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[is_billable]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[is_billable]"?: string;
                /**
                 * @description Filters records by using a query string on the field `is_recurring`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[is_recurring]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[is_recurring]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[is_recurring]"?: string;
                /**
                 * @description Filters records by using a query string on the field `name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `parent_contract.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[parent_contract.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[parent_contract.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[parent_contract.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[parent_contract.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `parent_contract.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[parent_contract.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[parent_contract.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[parent_contract.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[parent_contract.name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[parent_contract.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_created_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_created_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_created_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_created_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_created_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_created_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.brand_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.brand_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.source_record_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.source_record_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_updated_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `source_type`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[source_type]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_type]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[source_type]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[source_type]"?: string;
                /**
                 * @description Filters records by using a query string on the field `status`.
                 *
                 *
                 *
                 *     *Possible values*: `SUSPENDED`, `EXPIRED`, `ACTIVE`, `DRAFT`, `SENT`, `SIGNED`, `NOT_EXECUTED`, `CANCELLED`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[status]=SUSPENDED` - to filter for exact match.
                 *
                 *
                 *     * `filter[status]=eq:SUSPENDED` - to filter for exact match.
                 *
                 *
                 *     * `filter[status]=in:SUSPENDED,EXPIRED,ACTIVE` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[status]"?: string;
                /**
                 * @description Filters records by using a query string on the field `term.billing_period`.
                 *
                 *
                 *
                 *     *Possible values*: `NOT_BILLED`, `ONE_TIME`, `ANNUAL`, `SEMI_ANNUAL`, `QUARTERLY`, `BI_MONTHLY`, `MONTHLY`, `BI_WEEKLY`, `WEEKLY`, `OTHER`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[term.billing_period]=NOT_BILLED` - to filter for exact match.
                 *
                 *
                 *     * `filter[term.billing_period]=eq:NOT_BILLED` - to filter for exact match.
                 *
                 *
                 *     * `filter[term.billing_period]=in:NOT_BILLED,ONE_TIME,ANNUAL` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[term.billing_period]"?: string;
                /**
                 * @description Filters records by using a query string on the field `term.ends_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[term.ends_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[term.ends_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[term.ends_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[term.ends_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[term.ends_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `term.is_auto_renew`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[term.is_auto_renew]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[term.is_auto_renew]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[term.is_auto_renew]"?: string;
                /**
                 * @description Filters records by using a query string on the field `term.starts_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[term.starts_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[term.starts_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[term.starts_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[term.starts_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[term.starts_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `type`.
                 *
                 *
                 *
                 *     *Possible values*: `MANAGED_SERVICES`, `BLOCK`, `3RD_PARTY`, `UNASSIGNED`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[type]=MANAGED_SERVICES` - to filter for exact match.
                 *
                 *
                 *     * `filter[type]=eq:MANAGED_SERVICES` - to filter for exact match.
                 *
                 *
                 *     * `filter[type]=in:MANAGED_SERVICES,BLOCK,3RD_PARTY` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[type]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
                /**
                 * @description One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending.
                 *
                 *     *Sortable fields*: `name`, `client.id`, `client.name`, `contact.id`, `is_recurring`, `type`, `term.starts_at`, `term.ends_at`, `term.is_auto_renew`, `term.billing_period`, `source_type`, `is_addendum`, `parent_contract.name`, `status`, `is_billable`, `record_created_at`, `record_updated_at`.
                 * @example name
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *           "name": "Managed IT Services Agreement",
                     *           "client": {
                     *             "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *             "name": "ABC Manufacturing Inc."
                     *           },
                     *           "contact": {
                     *             "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
                     *           },
                     *           "is_recurring": false,
                     *           "type": "UNASSIGNED",
                     *           "term": {
                     *             "starts_at": "2025-01-01T00:00:00Z",
                     *             "ends_at": "2099-12-31T00:00:00Z",
                     *             "is_auto_renew": true,
                     *             "billing_period": "MONTHLY"
                     *           },
                     *           "source_type": "MSA - RECURRING",
                     *           "is_addendum": false,
                     *           "parent_contract": {
                     *             "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *             "name": "Master Service Agreement - ABC Manufacturing"
                     *           },
                     *           "status": "EXPIRED",
                     *           "total_price": {
                     *             "amount": 150,
                     *             "iso_currency_code": "USD"
                     *           },
                     *           "total_cost": {
                     *             "amount": 150,
                     *             "iso_currency_code": "USD"
                     *           },
                     *           "is_billable": true,
                     *           "pricing_item_total_price": {
                     *             "amount": 150,
                     *             "iso_currency_code": "USD"
                     *           },
                     *           "pricing_item_total_cost": {
                     *             "amount": 150,
                     *             "iso_currency_code": "USD"
                     *           },
                     *           "contract_pricings": [
                     *             {
                     *               "id": "1243",
                     *               "status": "ACTIVE",
                     *               "is_billable": true,
                     *               "term": {
                     *                 "starts_at": "2024-05-01T00:00:00Z",
                     *                 "ends_at": "2024-12-31T00:00:00Z"
                     *               },
                     *               "is_rollover_allowed": false,
                     *               "description": "Monthly managed services support",
                     *               "recurrent_charge_frequency": "MONTHLY",
                     *               "unit_price": {
                     *                 "amount": 150,
                     *                 "iso_currency_code": "USD"
                     *               },
                     *               "unit_cost": {
                     *                 "amount": 75,
                     *                 "iso_currency_code": "USD"
                     *               },
                     *               "quantity": 10.9,
                     *               "total_price": {
                     *                 "amount": 150,
                     *                 "iso_currency_code": "USD"
                     *               },
                     *               "total_cost": {
                     *                 "amount": 75,
                     *                 "iso_currency_code": "USD"
                     *               },
                     *               "pricing_type": "UNIT",
                     *               "unit_type": "PRODUCT",
                     *               "items": [
                     *                 {
                     *                   "product": {
                     *                     "id": "1234",
                     *                     "name": "ACME - STARTER PACK"
                     *                   }
                     *                 }
                     *               ]
                     *             }
                     *           ],
                     *           "record_lineage": [
                     *             {
                     *               "source_record_id": "123",
                     *               "integration_configuration": {
                     *                 "id": "TAxitIYnxnQP",
                     *                 "vendor": {
                     *                   "id": "1",
                     *                   "brand_name": "ConnectWise Manage"
                     *                 }
                     *               }
                     *             }
                     *           ],
                     *           "record_created_at": "2019-09-30T15:28:17Z",
                     *           "record_updated_at": "2019-09-30T15:28:17Z"
                     *         }
                     *       ],
                     *       "total_count": 24,
                     *       "next_cursor": "WyJ0aWNrZXQiXQ"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Contracts.Model.Contract_"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "get-contract": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifier of the contract */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *       "name": "Managed IT Services Agreement",
                     *       "client": {
                     *         "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *         "name": "ABC Manufacturing Inc."
                     *       },
                     *       "contact": {
                     *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
                     *       },
                     *       "is_recurring": false,
                     *       "type": "UNASSIGNED",
                     *       "term": {
                     *         "starts_at": "2025-01-01T00:00:00Z",
                     *         "ends_at": "2099-12-31T00:00:00Z",
                     *         "is_auto_renew": true,
                     *         "billing_period": "MONTHLY"
                     *       },
                     *       "source_type": "MSA - RECURRING",
                     *       "is_addendum": false,
                     *       "parent_contract": {
                     *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *         "name": "Master Service Agreement - ABC Manufacturing"
                     *       },
                     *       "status": "EXPIRED",
                     *       "total_price": {
                     *         "amount": 150,
                     *         "iso_currency_code": "USD"
                     *       },
                     *       "total_cost": {
                     *         "amount": 150,
                     *         "iso_currency_code": "USD"
                     *       },
                     *       "is_billable": true,
                     *       "pricing_item_total_price": {
                     *         "amount": 150,
                     *         "iso_currency_code": "USD"
                     *       },
                     *       "pricing_item_total_cost": {
                     *         "amount": 150,
                     *         "iso_currency_code": "USD"
                     *       },
                     *       "contract_pricings": [
                     *         {
                     *           "id": "1243",
                     *           "status": "ACTIVE",
                     *           "is_billable": true,
                     *           "term": {
                     *             "starts_at": "2024-05-01T00:00:00Z",
                     *             "ends_at": "2024-12-31T00:00:00Z"
                     *           },
                     *           "is_rollover_allowed": false,
                     *           "description": "Monthly managed services support",
                     *           "recurrent_charge_frequency": "MONTHLY",
                     *           "unit_price": {
                     *             "amount": 150,
                     *             "iso_currency_code": "USD"
                     *           },
                     *           "unit_cost": {
                     *             "amount": 75,
                     *             "iso_currency_code": "USD"
                     *           },
                     *           "quantity": 10.9,
                     *           "total_price": {
                     *             "amount": 150,
                     *             "iso_currency_code": "USD"
                     *           },
                     *           "total_cost": {
                     *             "amount": 75,
                     *             "iso_currency_code": "USD"
                     *           },
                     *           "pricing_type": "UNIT",
                     *           "unit_type": "PRODUCT",
                     *           "items": [
                     *             {
                     *               "product": {
                     *                 "id": "1234",
                     *                 "name": "ACME - STARTER PACK"
                     *               }
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "record_lineage": [
                     *         {
                     *           "source_record_id": "123",
                     *           "integration_configuration": {
                     *             "id": "TAxitIYnxnQP",
                     *             "vendor": {
                     *               "id": "1",
                     *               "brand_name": "ConnectWise Manage"
                     *             }
                     *           }
                     *         }
                     *       ],
                     *       "record_created_at": "2019-09-30T15:28:17Z",
                     *       "record_updated_at": "2019-09-30T15:28:17Z"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.Contracts.Model.Contract"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-tickets": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `board.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[board.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[board.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[board.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[board.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `board.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[board.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[board.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[board.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[board.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `category`.
                 *
                 *
                 *
                 *     *Possible values*: `INCIDENT`, `NETWORK_INCIDENT`, `FIREWALL_INCIDENT`, `ROUTER_INCIDENT`, `WIFI_INCIDENT`, `CONNECTIVITY_INCIDENT`, `SERVER_INCIDENT`, `HARDWARE_INCIDENT`, `WORKSTATION_INCIDENT`, `SHARED_PERIPHERAL_INCIDENT`, `MOBILE_DEVICE_INCIDENT`, `STORAGE_INCIDENT`, `SOFTWARE_INCIDENT`, `CLIENT_SOFTWARE_INCIDENT`, `SERVER_SOFTWARE_INCIDENT`, `COMMUNICATION_SYSTEM_INCIDENT`, `PHONE_SYSTEM_INCIDENT`, `MESSAGING_SYSTEM_INCIDENT`, `VIDEO_CONFERENCING_INCIDENT`, `SERVICE_REQUEST`, `NETWORK_REQUEST`, `FIREWALL_REQUEST`, `ROUTER_REQUEST`, `WIFI_REQUEST`, `CONNECTIVITY_REQUEST`, `HARDWARE_REQUEST`, `WORKSTATION_REQUEST`, `SERVER_REQUEST`, `SHARED_PERIPHERAL_REQUEST`, `MOBILE_DEVICE_REQUEST`, `ASSET_DISPOSAL_REQUEST`, `SOFTWARE_REQUEST`, `CLIENT_SOFTWARE_REQUEST`, `SERVER_SOFTWARE_REQUEST`, `COMMUNICATION_SYSTEM_REQUEST`, `PHONE_SYSTEM_REQUEST`, `MESSAGING_SYSTEM_REQUEST`, `VIDEO_CONFERENCING_REQUEST`, `IT_MANAGEMENT`, `CYBERSECURITY_MANAGEMENT`, `BREACH`, `MALWARE`, `DISASTER_RECOVERY`, `BACKUP_FAILURE`, `RESTORATION`, `DISASTER_RECOVERY_PLAN`, `DOCUMENTATION_TRAINING`, `DOCUMENTATION`, `TRAINING`, `USER_MANAGEMENT`, `USER_CREATION`, `USER_DELETION`, `USER_ACCESS_MODIFICATION`, `AUDIT`, `COMPLIANCE_AUDIT`, `FINANCIAL_AUDIT`, `GENERAL_MANAGEMENT`, `PROJECT_MANAGEMENT`, `CHANGE_MANAGEMENT`, `STRATEGIC_PLANNING`, `BUDGETING`, `UNASSIGNED`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[category]=INCIDENT` - to filter for exact match.
                 *
                 *
                 *     * `filter[category]=eq:INCIDENT` - to filter for exact match.
                 *
                 *
                 *     * `filter[category]=in:INCIDENT,NETWORK_INCIDENT,FIREWALL_INCIDENT` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[category]"?: string;
                /**
                 * @description Filters records by using a query string on the field `client.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[client.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `client.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[client.name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[client.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `contact.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[contact.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contact.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contact.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[contact.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `contract.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[contract.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contract.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contract.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[contract.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `contract.name`.
                 *
                 *     Supports comparison operators: `eq`, `in`, `cont`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[contract.name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contract.name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[contract.name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 *
                 *
                 *     * `filter[contract.name]=cont:word` - to filter using a partial match.
                 * @example eq:example_value
                 */
                "filter[contract.name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `impact`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[impact]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[impact]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[impact]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[impact]"?: string;
                /**
                 * @description Filters records by using a query string on the field `is_child_ticket`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[is_child_ticket]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[is_child_ticket]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[is_child_ticket]"?: string;
                /**
                 * @description Filters records by using a query string on the field `is_long_ticket`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[is_long_ticket]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[is_long_ticket]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[is_long_ticket]"?: string;
                /**
                 * @description Filters records by using a query string on the field `owner_member.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[owner_member.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[owner_member.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[owner_member.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[owner_member.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `priority.current`.
                 *
                 *
                 *
                 *     *Possible values*: `1`, `2`, `3`, `4`, `5`, `UNASSIGNED`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[priority.current]=1` - to filter for exact match.
                 *
                 *
                 *     * `filter[priority.current]=eq:1` - to filter for exact match.
                 *
                 *
                 *     * `filter[priority.current]=in:1,2,3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[priority.current]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_created_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_created_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_created_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_created_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_created_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_created_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.brand_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.brand_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.source_record_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.source_record_id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[record_updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[record_updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[record_updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[record_updated_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `responsible_member.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[responsible_member.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[responsible_member.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[responsible_member.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[responsible_member.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `severity`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[severity]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[severity]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[severity]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[severity]"?: string;
                /**
                 * @description Filters records by using a query string on the field `sla.is_plan_in_sla`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[sla.is_plan_in_sla]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[sla.is_plan_in_sla]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[sla.is_plan_in_sla]"?: string;
                /**
                 * @description Filters records by using a query string on the field `sla.is_resolution_in_sla`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[sla.is_resolution_in_sla]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[sla.is_resolution_in_sla]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[sla.is_resolution_in_sla]"?: string;
                /**
                 * @description Filters records by using a query string on the field `sla.is_response_in_sla`.
                 *
                 *     Supports comparison operators: `eq`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[sla.is_response_in_sla]=true` - to filter for exact match.
                 *
                 *
                 *     * `filter[sla.is_response_in_sla]=eq:true` - to filter for exact match.
                 * @example eq:true
                 */
                "filter[sla.is_response_in_sla]"?: string;
                /**
                 * @description Filters records by using a query string on the field `status.current`.
                 *
                 *
                 *
                 *     *Possible values*: `NEW`, `ASSIGNED`, `SCHEDULED`, `TRIAGE`, `IN_PROGRESS`, `WAITING_CLIENT`, `WAITING_VENDOR`, `CANCELLED`, `COMPLETED`, `CLOSED`, `REOPENED`, `ESCALATED`, `CLIENT_RESPONDED`, `UNASSIGNED`.
                 *
                 *
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[status.current]=NEW` - to filter for exact match.
                 *
                 *
                 *     * `filter[status.current]=eq:NEW` - to filter for exact match.
                 *
                 *
                 *     * `filter[status.current]=in:NEW,ASSIGNED,SCHEDULED` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[status.current]"?: string;
                /**
                 * @description Filters records by using a query string on the field `timeline.closed_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[timeline.closed_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[timeline.closed_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[timeline.closed_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[timeline.closed_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[timeline.closed_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `timeline.created_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[timeline.created_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[timeline.created_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[timeline.created_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[timeline.created_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[timeline.created_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `timeline.planned_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[timeline.planned_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[timeline.planned_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[timeline.planned_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[timeline.planned_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[timeline.planned_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `timeline.resolved_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[timeline.resolved_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[timeline.resolved_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[timeline.resolved_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[timeline.resolved_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[timeline.resolved_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `timeline.responded_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[timeline.responded_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[timeline.responded_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[timeline.responded_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[timeline.responded_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[timeline.responded_at]"?: string;
                /**
                 * @description Filters records by using a query string on the field `timeline.updated_at`.
                 *
                 *     Supports comparison operators: `gt`, `gte`, `lt`, `lte`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[timeline.updated_at]=gt:2023-01-01T00:00:00Z` - to filter for dates after
                 *
                 *
                 *     * `filter[timeline.updated_at]=gte:2023-01-01T00:00:00Z` - to filter for dates after or on
                 *
                 *
                 *     * `filter[timeline.updated_at]=lt:2023-01-01T00:00:00Z` - to filter for dates before
                 *
                 *
                 *     * `filter[timeline.updated_at]=lte:2023-01-01T00:00:00Z` - to filter for dates before or on
                 * @example gt:2023-01-01T00:00:00Z
                 */
                "filter[timeline.updated_at]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
                /**
                 * @description One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending.
                 *
                 *     *Sortable fields*: `id`, `client.name`, `is_child_ticket`, `is_long_ticket`, `timeline.created_at`, `timeline.updated_at`, `timeline.responded_at`, `timeline.planned_at`, `timeline.resolved_at`, `timeline.closed_at`, `sla.is_response_in_sla`, `sla.is_plan_in_sla`, `sla.is_resolution_in_sla`, `status.current`, `priority.current`, `impact`, `severity`, `record_created_at`, `record_updated_at`.
                 * @example id
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *           "owner_member": {
                     *             "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23"
                     *           },
                     *           "responsible_member": {
                     *             "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23"
                     *           },
                     *           "client": {
                     *             "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *             "name": "ABC Manufacturing Inc."
                     *           },
                     *           "contact": {
                     *             "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
                     *           },
                     *           "contract": {
                     *             "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *             "name": "Premium Support Agreement"
                     *           },
                     *           "board": {
                     *             "id": "78",
                     *             "name": "Backup Alerts"
                     *           },
                     *           "summary": "Email server connectivity issues affecting multiple users",
                     *           "source": "Email Connector",
                     *           "category": "INCIDENT",
                     *           "is_child_ticket": false,
                     *           "is_long_ticket": true,
                     *           "timeline": {
                     *             "created_at": "2025-08-27T13:32:12Z",
                     *             "updated_at": "2025-08-27T13:32:12Z",
                     *             "responded_at": "2025-08-27T13:32:12Z",
                     *             "planned_at": "2025-08-27T13:32:12Z",
                     *             "resolved_at": "2025-08-27T13:32:12Z",
                     *             "closed_at": "2025-08-27T13:32:12Z"
                     *           },
                     *           "duration": {
                     *             "minutes_to_respond": 8,
                     *             "minutes_to_plan": 9,
                     *             "minutes_to_resolve": 15,
                     *             "minutes_to_close": 3618,
                     *             "minutes_worked": 240
                     *           },
                     *           "sla": {
                     *             "is_response_in_sla": true,
                     *             "is_plan_in_sla": true,
                     *             "is_resolution_in_sla": false
                     *           },
                     *           "status": {
                     *             "current": "UNASSIGNED",
                     *             "history": [
                     *               {
                     *                 "started_at": "2025-08-20T15:22:05Z",
                     *                 "ended_at": "2025-08-20T15:22:05Z",
                     *                 "status": "ASSIGNED"
                     *               }
                     *             ]
                     *           },
                     *           "priority": {
                     *             "current": "1",
                     *             "history": [
                     *               {
                     *                 "started_at": "2025-08-20T15:22:05Z",
                     *                 "ended_at": "2025-08-20T15:22:05Z",
                     *                 "priority": "1"
                     *               }
                     *             ]
                     *           },
                     *           "impact": "MEDIUM",
                     *           "severity": "HIGH",
                     *           "num_notes": 12,
                     *           "record_lineage": [
                     *             {
                     *               "source_record_id": "123",
                     *               "integration_configuration": {
                     *                 "id": "TAxitIYnxnQP",
                     *                 "vendor": {
                     *                   "id": "1",
                     *                   "brand_name": "ConnectWise Manage"
                     *                 }
                     *               }
                     *             }
                     *           ],
                     *           "record_created_at": "2019-09-30T15:28:17Z",
                     *           "record_updated_at": "2019-09-30T15:28:17Z"
                     *         }
                     *       ],
                     *       "total_count": 24,
                     *       "next_cursor": "WyJ0aWNrZXQiXQ"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Tickets.Model.Ticket_"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "get-ticket": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd",
                     *       "owner_member": {
                     *         "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23"
                     *       },
                     *       "responsible_member": {
                     *         "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23"
                     *       },
                     *       "client": {
                     *         "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *         "name": "ABC Manufacturing Inc."
                     *       },
                     *       "contact": {
                     *         "id": "1g4123ty-4er6-4g3t-a345-wfe5e5234rfd"
                     *       },
                     *       "contract": {
                     *         "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *         "name": "Premium Support Agreement"
                     *       },
                     *       "board": {
                     *         "id": "78",
                     *         "name": "Backup Alerts"
                     *       },
                     *       "summary": "Email server connectivity issues affecting multiple users",
                     *       "source": "Email Connector",
                     *       "category": "INCIDENT",
                     *       "is_child_ticket": false,
                     *       "is_long_ticket": true,
                     *       "timeline": {
                     *         "created_at": "2025-08-27T13:32:12Z",
                     *         "updated_at": "2025-08-27T13:32:12Z",
                     *         "responded_at": "2025-08-27T13:32:12Z",
                     *         "planned_at": "2025-08-27T13:32:12Z",
                     *         "resolved_at": "2025-08-27T13:32:12Z",
                     *         "closed_at": "2025-08-27T13:32:12Z"
                     *       },
                     *       "duration": {
                     *         "minutes_to_respond": 8,
                     *         "minutes_to_plan": 9,
                     *         "minutes_to_resolve": 15,
                     *         "minutes_to_close": 3618,
                     *         "minutes_worked": 240
                     *       },
                     *       "sla": {
                     *         "is_response_in_sla": true,
                     *         "is_plan_in_sla": true,
                     *         "is_resolution_in_sla": false
                     *       },
                     *       "status": {
                     *         "current": "UNASSIGNED",
                     *         "history": [
                     *           {
                     *             "started_at": "2025-08-20T15:22:05Z",
                     *             "ended_at": "2025-08-20T15:22:05Z",
                     *             "status": "ASSIGNED"
                     *           }
                     *         ]
                     *       },
                     *       "priority": {
                     *         "current": "1",
                     *         "history": [
                     *           {
                     *             "started_at": "2025-08-20T15:22:05Z",
                     *             "ended_at": "2025-08-20T15:22:05Z",
                     *             "priority": "1"
                     *           }
                     *         ]
                     *       },
                     *       "impact": "MEDIUM",
                     *       "severity": "HIGH",
                     *       "num_notes": 12,
                     *       "record_lineage": [
                     *         {
                     *           "source_record_id": "123",
                     *           "integration_configuration": {
                     *             "id": "TAxitIYnxnQP",
                     *             "vendor": {
                     *               "id": "1",
                     *               "brand_name": "ConnectWise Manage"
                     *             }
                     *           }
                     *         }
                     *       ],
                     *       "record_created_at": "2019-09-30T15:28:17Z",
                     *       "record_updated_at": "2019-09-30T15:28:17Z"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.Tickets.Model.Ticket"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "list-sites": {
        parameters: {
            query?: {
                /** @description The pointer used to fetch a certain page of records */
                cursor?: string;
                /**
                 * @description Filters records by using a query string on the field `client.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[client.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[client.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[client.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.brand_name`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.brand_name]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.brand_name]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.integration_configuration.vendor.id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.integration_configuration.vendor.id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.integration_configuration.vendor.id]"?: string;
                /**
                 * @description Filters records by using a query string on the field `record_lineage.source_record_id`.
                 *
                 *     Supports comparison operators: `eq`, `in`.
                 *
                 *     Query examples:
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=eq:example_value` - to filter for exact match.
                 *
                 *
                 *     * `filter[record_lineage.source_record_id]=in:example_value_1,example_value_2,example_value_3` - to filter when any item in the list matches.
                 * @example eq:example_value
                 */
                "filter[record_lineage.source_record_id]"?: string;
                /** @description The number of records to be returned in a single page */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": "4k9678ty-4rt8-8g3e-a789-wfe5e6789rfd",
                     *           "name": "Main Office",
                     *           "client": {
                     *             "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *             "name": "ABC Manufacturing Inc."
                     *           },
                     *           "address": {
                     *             "address_line_1": "123 Main St",
                     *             "address_line_2": "Suite 200",
                     *             "city": "San Francisco",
                     *             "state_prov_code": "CA",
                     *             "state_prov_name": "California",
                     *             "country_code": "US",
                     *             "country_name": "United States",
                     *             "postal_code": "94105"
                     *           },
                     *           "record_lineage": [
                     *             {
                     *               "source_record_id": "123",
                     *               "integration_configuration": {
                     *                 "id": "TAxitIYnxnQP",
                     *                 "vendor": {
                     *                   "id": "1",
                     *                   "brand_name": "ConnectWise Manage"
                     *                 }
                     *               }
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "total_count": 24,
                     *       "next_cursor": "WyJ0aWNrZXQiXQ"
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Model.PaginatedResponse_SpApi.CoreApi.Core.v1.Sites.Model.Site_"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
    "get-site": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifier of the site */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "4k9678ty-4rt8-8g3e-a789-wfe5e6789rfd",
                     *       "name": "Main Office",
                     *       "client": {
                     *         "id": "00000ae5-h3r7-6468-er45-wiuynj9c0d23",
                     *         "name": "ABC Manufacturing Inc."
                     *       },
                     *       "address": {
                     *         "address_line_1": "123 Main St",
                     *         "address_line_2": "Suite 200",
                     *         "city": "San Francisco",
                     *         "state_prov_code": "CA",
                     *         "state_prov_name": "California",
                     *         "country_code": "US",
                     *         "country_name": "United States",
                     *         "postal_code": "94105"
                     *       },
                     *       "record_lineage": [
                     *         {
                     *           "source_record_id": "123",
                     *           "integration_configuration": {
                     *             "id": "TAxitIYnxnQP",
                     *             "vendor": {
                     *               "id": "1",
                     *               "brand_name": "ConnectWise Manage"
                     *             }
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.v1.Sites.Model.Site"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.BadRequestResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.NotFoundResponse"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse"];
                };
            };
        };
    };
}
