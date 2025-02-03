import UploadPreview from '@/components/common/UploadPreview';
import { ProColumns } from '@ant-design/pro-components';

export const rumi_index_recommends_columns = (): ProColumns<any>[] => [
  {
    title: 'school_id',
    dataIndex: 'school_id',
    valueType: 'text',
  },
  {
    title: 'title',
    dataIndex: 'title',
    valueType: 'text',
  },
  {
    title: 'subtitle',
    dataIndex: 'subtitle',
    valueType: 'text',
  },
  {
    title: 'Files',
    dataIndex: 'files',
    valueType: 'text',
    hideInForm: true,
    search: false,
    render: (_, record) => <UploadPreview listType="picture-circle" fileList={record.files} />,
  },
  {
    title: 'update_time',
    dataIndex: 'update_time',
    valueType: 'dateTime',
    hideInSearch: true,
    hideInForm: true,
  },
  {
    key: 'update_time',
    title: 'update_time',
    dataIndex: 'update_time_range',
    valueType: 'dateTimeRange',
    hideInTable: true,
    hideInForm: true,
    hideInDescriptions: true,
  },
];
