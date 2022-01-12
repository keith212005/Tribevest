/* eslint-disable no-undef */
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { RoundGradientButton, _renderText } from '@components';
import { color, responsiveWidth, scale, useGlobalStyles } from '@resources';
import { CheckBox, Divider } from 'react-native-elements';
import { SCHEDULED_CONTRIBUTIONS } from '@constants';

export const EditContributionModalLayout = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const isDark = useSelector((state: any) => state.theme.isDarkTheme);

  const _renderRow = (title: string, description: string) => {
    return (
      <View
        style={[
          globalStyle.layoutDirection('row', 'space-between', 'center'),
          { paddingHorizontal: 20, paddingVertical: 16 },
        ]}
      >
        {_renderText(loc(title), {
          ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
        })}
        {_renderText(description, {
          ...globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
        })}
      </View>
    );
  };

  const _renderScheduledList = () => {
    return (
      <View
        style={[
          styles.listContainer,
          { backgroundColor: isDark ? colors.card : colors.white },
        ]}
      >
        <View
          style={[
            globalStyle.layoutDirection('row', 'space-between', 'center'),
          ]}
        >
          {_renderText(loc('DATE'), {
            ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_SEMIBOLD'),
          })}
          {_renderText(loc('STATUS'), {
            ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_SEMIBOLD'),
          })}
        </View>
        <Divider style={{ marginVertical: 8 }} />
        <ScrollView>
          <>
            {SCHEDULED_CONTRIBUTIONS.map((item: any) => {
              return (
                <View key={item.id}>
                  <View
                    style={[
                      globalStyle.layoutDirection(
                        'row',
                        'flex-start',
                        'center',
                      ),
                      { paddingVertical: 5 },
                    ]}
                  >
                    <CheckBox
                      checked={item.checked}
                      style={{}}
                      containerStyle={{ padding: 0 }}
                      onPress={() => {}}
                    />
                    {_renderText(item.date, {
                      flex: 8,
                      ...globalStyle.textStyle(
                        '_14',
                        'text',
                        'NUNITO_SEMIBOLD',
                      ),
                    })}
                    {_renderText(item.status, {
                      color:
                        item.status === 'Success'
                          ? colors.green_text
                          : colors.primaryColor,
                    })}
                  </View>
                  <Divider style={{}} />
                </View>
              );
            })}
            <RoundGradientButton
              gradientColor={colors.primaryGradiant}
              title={loc('CANCEL_CONTRIBUTIONS')}
              onPress={() => {}}
              disabled={false}
              titleStyle={{
                ...globalStyle.textStyle('_14', 'white', 'NUNITO_REGULAR'),
              }}
              extraStyle={{
                marginVertical: 20,
                width: responsiveWidth(76),
                alignSelf: 'center',
              }}
            />
          </>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={{ paddingBottom: 30 }}>
      {_renderText(loc('EDIT_CONTRIBUTION_SERIES'), {
        ...globalStyle.textStyle('_18', 'text', 'NUNITO_BOLD'),
        marginVertical: 16,
        marginHorizontal: 20,
      })}
      <Divider style={{ marginBottom: 24 }} />
      {_renderRow('FUNDING_ROUND', 'Our First Funding Round')}
      {_renderRow('BANK_ACCOUNT', 'Chase Bank Ending-1234')}
      {_renderRow('AMOUNT', '$500.00')}
      {_renderRow('START_DATE', 'June 2, 2021')}
      {_renderRow('MONTHLY_RECURRING_DATE', 'Monthly on day 2')}
      <Divider style={{ marginBottom: 24 }} />
      {_renderText(loc('EDIT_CONTRIBUTIONS_NOTE'), {
        marginHorizontal: 20,
        marginBottom: 24,
        ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
      })}

      {_renderScheduledList()}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: scale(20),
    borderWidth: 1,
    borderRadius: 10,
    padding: scale(16),
    borderColor: color.lightText,
  },
});
