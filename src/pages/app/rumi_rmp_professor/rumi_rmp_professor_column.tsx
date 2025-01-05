import {ProColumns} from '@ant-design/pro-components';

export const rumi_rmp_professor_columns = (): ProColumns<any>[] => [
  {
    "title": "Name",
    "dataIndex": "name",
    "valueType": "text"
  },
  {
    "title": "School Id",
    "dataIndex": "school_id",
    "valueType": "text"
  },
  {
    "title": "Department",
    "dataIndex": "department",
    "valueType": "text"
  },
  {
    "title": "Department Id",
    "dataIndex": "department_id",
    "valueType": "text"
  },
  {
    "title": "Avg Difficulty Rounded",
    "dataIndex": "avg_difficulty_rounded",
    "valueType": "text"
  },
  {
    "title": "Avg Rating Rounded",
    "dataIndex": "avg_rating_rounded",
    "valueType": "text"
  },
  {
    "title": "Most Useful Rating Id",
    "dataIndex": "most_useful_rating_id",
    "valueType": "text"
  },
  {
    "title": "Num Ratings",
    "dataIndex": "num_ratings",
    "valueType": "text"
  },
  {
    "title": "Would Take Again Count",
    "dataIndex": "would_take_again_count",
    "valueType": "text"
  },
  {
    "title": "Would Take Again Percent Rounded",
    "dataIndex": "would_take_again_percent_rounded",
    "valueType": "text"
  },
  {
    "title": "Source Url",
    "dataIndex": "source_url",
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
