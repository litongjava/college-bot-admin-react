import {ProColumns} from '@ant-design/pro-components';

export const rumi_rmp_rating_columns = (): ProColumns<any>[] => [
  {
    "title": "Teacher Id",
    "dataIndex": "teacher_id",
    "valueType": "text"
  },
  {
    "title": "School Id",
    "dataIndex": "school_id",
    "valueType": "text"
  },
  {
    "title": "Admin Reviewed At",
    "dataIndex": "admin_reviewed_at",
    "valueType": "dateTime"
  },
  {
    "title": "Attendance Mandatory",
    "dataIndex": "attendance_mandatory",
    "valueType": "text"
  },
  {
    "title": "Clarity Rating Rounded",
    "dataIndex": "clarity_rating_rounded",
    "valueType": "text"
  },
  {
    "title": "Class Name",
    "dataIndex": "class_name",
    "valueType": "text"
  },
  {
    "title": "Comment",
    "dataIndex": "comment",
    "valueType": "text",
    ellipsis:true,
  },
  {
    "title": "Course Type",
    "dataIndex": "course_type",
    "valueType": "text"
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
    "title": "Difficulty Rating Rounded",
    "dataIndex": "difficulty_rating_rounded",
    "valueType": "text"
  },
  {
    "title": "Flag Status",
    "dataIndex": "flag_status",
    "valueType": "text"
  },
  {
    "title": "Grade",
    "dataIndex": "grade",
    "valueType": "text"
  },
  {
    "title": "Helpful Rating Rounded",
    "dataIndex": "helpful_rating_rounded",
    "valueType": "text"
  },
  {
    "title": "Would Like Take Again",
    "dataIndex": "would_like_take_again",
    "valueType": "text"
  },
  {
    "title": "Is For Credit",
    "dataIndex": "is_for_credit",
    "valueType": "text"
  },
  {
    "title": "Is For Online Class",
    "dataIndex": "is_for_online_class",
    "valueType": "text"
  },
  {
    "title": "Mask Count",
    "dataIndex": "mask_count",
    "valueType": "text"
  },
  {
    "title": "Quality Rating",
    "dataIndex": "quality_rating",
    "valueType": "text"
  },
  {
    "title": "Rating Tags",
    "dataIndex": "rating_tags",
    "valueType": "text"
  },
  {
    "title": "Textbook Is Used",
    "dataIndex": "textbook_is_used",
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
