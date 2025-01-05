import {ProColumns} from '@ant-design/pro-components';

export const rumi_school_dict_columns = (): ProColumns<any>[] => [
  {
    "title": "Rmp School Id",
    "dataIndex": "rmp_school_id",
    "valueType": "text"
  },
  {
    "title": "Name",
    "dataIndex": "name",
    "valueType": "text"
  },
  {
    "title": "Abbr Name",
    "dataIndex": "abbr_name",
    "valueType": "text"
  },
  {
    "title": "Bot Name",
    "dataIndex": "bot_name",
    "valueType": "text"
  },
  {
    "title": "Professor Names",
    "dataIndex": "professor_names",
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
