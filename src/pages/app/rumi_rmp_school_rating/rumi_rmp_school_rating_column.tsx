import {ProColumns} from '@ant-design/pro-components';

export const rumi_rmp_school_rating_columns = (): ProColumns<any>[] => [
  {
    "title": "Clubs Rating",
    "dataIndex": "clubs_rating",
    "valueType": "text"
  },
  {
    "title": "Comment",
    "dataIndex": "comment",
    "valueType": "text",
    ellipsis:true,
  },
  {
    "title": "Created By User",
    "dataIndex": "created_by_user",
    "valueType": "text"
  },
  {
    "title": "Date",
    "dataIndex": "date",
    "valueType": "dateTime"
  },
  {
    "title": "Facilities Rating",
    "dataIndex": "facilities_rating",
    "valueType": "text"
  },
  {
    "title": "Flag Status",
    "dataIndex": "flag_status",
    "valueType": "text"
  },
  {
    "title": "Food Rating",
    "dataIndex": "food_rating",
    "valueType": "text"
  },
  {
    "title": "Happiness Rating",
    "dataIndex": "happiness_rating",
    "valueType": "text"
  },
  {
    "title": "Internet Rating",
    "dataIndex": "internet_rating",
    "valueType": "text"
  },
  {
    "title": "Legacy Id",
    "dataIndex": "legacy_id",
    "valueType": "text"
  },
  {
    "title": "Location Rating",
    "dataIndex": "location_rating",
    "valueType": "text"
  },
  {
    "title": "Opportunities Rating",
    "dataIndex": "opportunities_rating",
    "valueType": "text"
  },
  {
    "title": "Reputation Rating",
    "dataIndex": "reputation_rating",
    "valueType": "text"
  },
  {
    "title": "Safety Rating",
    "dataIndex": "safety_rating",
    "valueType": "text"
  },
  {
    "title": "Social Rating",
    "dataIndex": "social_rating",
    "valueType": "text"
  },
  {
    "title": "Thumbs Down Total",
    "dataIndex": "thumbs_down_total",
    "valueType": "text"
  },
  {
    "title": "Thumbs Up Total",
    "dataIndex": "thumbs_up_total",
    "valueType": "text"
  },
  {
    "title": "School Id",
    "dataIndex": "school_id",
    "valueType": "text"
  },
  {
    "title": "Remark",
    "dataIndex": "remark",
    "valueType": "text"
  },
  {
    title: "update_time",
    dataIndex: "update_time",
    valueType: "dateTime",
    hideInSearch: true,
    hideInForm: true,
  },
  {
    key: "update_time",
    title: "update_time",
    dataIndex: "update_time_range",
    valueType: "dateTimeRange",
    hideInTable: true,
    hideInForm: true,
    hideInDescriptions: true,
  },
];
