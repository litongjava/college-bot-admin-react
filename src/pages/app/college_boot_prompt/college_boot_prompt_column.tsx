import { ProColumns } from "@ant-design/pro-components";

export const college_boot_prompt_columns = (): ProColumns<any>[] => [
  {
    title: "name",
    dataIndex: "name",
    formItemProps() {
      return {
        rules: [
          {
            required: true,
          },
        ],
      };
    },
  },
  {
    title: "prompt",
    dataIndex: "prompt",
    valueType: "textarea",
    ellipsis: true,
    formItemProps() {
      return {
        rules: [
          {
            required: true,
          },
        ],
      };
    },
  },
  {
    title: "env",
    dataIndex: "env",
  },
  {
    title: "Remark",
    dataIndex: "remark",
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
