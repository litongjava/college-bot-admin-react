import React from 'react';
import ApiTableLong from '@/components/common/ApiTableLong';
import { college_boot_prompt_columns } from '@/pages/app/college_boot_prompt/college_boot_prompt_column';

export default () => {
  const from = 'llm_chat_prompt';

  const beforePageRequest = (params: any, isRecoveryMode?: boolean) => {
    params.idType = 'long';

    if (isRecoveryMode) {
      params.deleted = 1;
    } else {
      params.deleted = 0;
    }
    params.remarkOp = 'ct';
    params.orderBy = 'id';
    params.update_time_type = 'string[]';
    params.update_time_to_type = 'ISO8601';
    params.update_time_op = 'bt';

    params.keyNameOp = 'ct';
    params.keyValueOp = 'ct';

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
      columns={college_boot_prompt_columns()}
      beforePageRequest={beforePageRequest}
      beforeCreateRequest={beforeCreateRequest}
    />
  );
};
