/* eslint-disable no-undef */
import React, { memo, useMemo, useState } from 'react';
import { View, ScrollView } from 'react-native';

// LOCAL IMORTS
import { CAP_TABLE } from '@constants';
import { Pagination } from './Pagination';
import { useGlobalStyles } from '@resources';
import { renderAvatar, _renderText } from '@components';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import { Divider } from 'react-native-elements';

let PageSize = 5;
export const ContributedParticipantsList = () => {
  const globalStyle = useGlobalStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return CAP_TABLE.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <View>
      {_renderText(loc('CONTRIBUTIONS_DATE'), {
        ...globalStyle.textStyle('_16', 'text', 'NUNITO_BOLD'),
      })}
      <View
        style={[
          globalStyle.layoutDirection('row', 'space-between', 'center'),
          { marginTop: 8 },
        ]}
      >
        {_renderText(_.startCase(_.toLower(loc('PARTICIPANT'))), {
          ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_SEMIBOLD'),
        })}
        {_renderText(loc('AMOUNT'), {
          ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_SEMIBOLD'),
        })}
      </View>
      <Divider style={{ marginVertical: 8 }} />
      <ScrollView contentContainerStyle={{ height: 300 }}>
        {currentTableData.map((item) => (
          <RenderItem key={item.id} item={item} />
        ))}
      </ScrollView>

      <Pagination
        currentPage={currentPage}
        totalCount={CAP_TABLE.length}
        pageSize={PageSize}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </View>
  );
};

const RenderItem = memo(({ item }: any) => {
  const globalStyle = useGlobalStyles();

  return (
    <View>
      <View
        style={[
          globalStyle.layoutDirection('row', 'flex-start', 'center'),
          { paddingHorizontal: 10, paddingVertical: 8 },
        ]}
      >
        {renderAvatar(item.imageUrl, 40, { marginRight: 10, marginLeft: -10 })}
        {_renderText(item.name, {
          ...globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          flex: 2,
        })}
        {_renderText(item.amount, {
          ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
        })}
      </View>
      <Divider />
    </View>
  );
});
