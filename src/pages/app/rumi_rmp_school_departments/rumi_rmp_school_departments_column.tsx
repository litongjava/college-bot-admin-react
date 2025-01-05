import {ProColumns} from '@ant-design/pro-components';

export const rumi_rmp_school_departments_columns = (): ProColumns<any>[] => [

  {
    "title": "D Id",
    "dataIndex": "d_id",
    "valueType": "text"
  },
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
