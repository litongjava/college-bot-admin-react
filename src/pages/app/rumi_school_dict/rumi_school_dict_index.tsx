import ApiTableLong from '@/components/common/ApiTableLong';
import { rumi_school_dict_columns } from '@/pages/app/rumi_school_dict/rumi_school_dict_column';

export default () => {
  const from = 'rumi_school_dict';
  const beforePageRequest = (params: any, isRecoveryMode?: boolean) => {
    params.idType = 'long';

    if (isRecoveryMode) {
      params.deleted = 1;
    } else {
      params.deleted = 0;
    }
    params.remarkOp = 'ct';
    params.orderBy = 'id';
    params.isAsc = 'true';
    params.update_time_type = 'string[]';
    params.update_time_to_type = 'ISO8601';
    params.update_time_op = 'bt';

    params.name_op = 'ct';
    params.abbr_name_op = 'ct';
    params.bot_name_op = 'ct';
    params.professor_names_op = 'ct';

    return params;
  };

  const beforeCreateRequest = (formValues: any) => {
    return {
      ...formValues,
      idType: 'long',
    };
  };
  return (
    <ApiTableLong
      from={from}
      columns={rumi_school_dict_columns()}
      beforePageRequest={beforePageRequest}
      beforeCreateRequest={beforeCreateRequest}
    />
  );
};
