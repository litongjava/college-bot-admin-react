import React from 'react';
import ApiTableLong from '@/components/common/ApiTableLong';
import {
  beforeImageCreateRequest,
  beforeImagePageRequest,
} from '@/pages/file/images/imagesService';
import { rumi_index_recommends_columns } from '@/pages/app/rumi_index_recommends/rumi_index_recommends_column';

export default () => {
  const from = 'rumi_index_recommends';
  return (
    <ApiTableLong
      from={from}
      columns={rumi_index_recommends_columns()}
      beforePageRequest={beforeImagePageRequest}
      beforeCreateRequest={beforeImageCreateRequest}
      containsUpload={true}
      maxFiles={1}
      uploadCategory="images"
    />
  );
};
