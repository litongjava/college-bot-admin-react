import ApiTableLong from '@/components/common/ApiTableLong';
import {rumi_rmp_rating_columns} from "@/pages/app/rumi_rmp_rating/rumi_rmp_rating_column";

export default () => {
  const from = 'rumi_rmp_rating';
  const beforePageRequest = (params: any, isRecoveryMode?: boolean) => {
    params.idType = 'long';

    if (isRecoveryMode) {
      params.deleted = 1;
    } else {
      params.deleted = 0;
    }
    params.remarkOp = 'ct';
    params.orderBy = 'update_time';
    params.isAsc = 'false';
    params.update_time_type = 'string[]';
    params.update_time_to_type = 'ISO8601';
    params.update_time_op = 'bt';

    params.comment_op = 'ct';

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
      columns={rumi_rmp_rating_columns()}
      beforePageRequest={beforePageRequest}
      beforeCreateRequest={beforeCreateRequest}
    />
  );
};
