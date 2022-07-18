# FreshserviceApiSdkCodegen.ServiceItem

## Properties

| Name                         | Type         | Description                                                                                  | Notes                 |
| ---------------------------- | ------------ | -------------------------------------------------------------------------------------------- | --------------------- |
| **id**                       | **Number**   | Unique identifier of the service item                                                        | [optional] [readonly] |
| **display_id**               | **Number**   | Unique identifier of the service item                                                        | [optional] [readonly] |
| **category_id**              | **Number**   | Unique identifier of the service item                                                        | [optional] [readonly] |
| **product_id**               | **Number**   | The ID of the product mapped to the item                                                     | [optional] [readonly] |
| **name**                     | **String**   | Name of the item                                                                             | [optional]            |
| **short_description**        | **String**   | Short description about the item, should be less than 255 characters                         | [optional]            |
| **description**              | **String**   | Description about the item                                                                   | [optional]            |
| **cost**                     | **Number**   | Cost of the item                                                                             | [optional]            |
| **allow_attachments**        | **Boolean**  | Set to true if requester is allowed to attach a file                                         | [optional]            |
| **cost_visibility**          | **Boolean**  | Set to true if cost should be visible to the requester                                       | [optional]            |
| **delivery_time**            | **Number**   | Estimated delivery time of the item                                                          | [optional]            |
| **deleted**                  | **Boolean**  | Set to True if the item is deleted                                                           | [optional]            |
| **delivery_time_visibility** | **Boolean**  | Set to True if delivery time of the item should be visible to the requester                  | [optional]            |
| **create_child**             | **Boolean**  | Applicable to bundles. Set to True if additional items needs to be created as child tickets. | [optional]            |
| **allow_quantity**           | **Boolean**  | Set as True to allow the requester to request for more than 1 quantity                       | [optional]            |
| **bundle**                   | **Boolean**  | Set as True for if this service item contains child items.                                   | [optional]            |
| **child_items**              | **[Number]** | Unique identifiers of all the child items of the bundle.                                     | [optional]            |
| **group_visibility**         | **Object**   | Set ‘1’ for visibility to all requesters. Set ‘2’ for restricted visibility.                 | [optional]            |
| **visibility**               | **Object**   | number Set ‘1’ for draft and ‘2’ for published.                                              | [optional]            |
| **custom_fields**            | **Object**   | Custom fields that are associated with a Freshservice entity                                 | [optional]            |
| **created_at**               | **Date**     | Timestamp at which the service item was created                                              | [optional] [readonly] |
| **updated_at**               | **Date**     | Timestamp at which the service item was last modified                                        | [optional] [readonly] |
