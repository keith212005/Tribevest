/* eslint-disable no-undef */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { TRIBEVEST_PLANS } from '@constants';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';
import { BillingCard } from '@components';

export const Step10 = () => {
  const globalStyle = useGlobalStyles();
  //   const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  //   const [state, setState] = createState({});

  const _renderTitle = () => {
    return (
      <Text
        style={[
          globalStyle.textStyle('_16', 'text', 'NUNITO_BOLD'),
          { textAlign: 'center', marginBottom: 20 },
        ]}
      >
        {loc('GET_STARTED_YOUR_WAY')}
      </Text>
    );
  };

  const _renderBillCard = (item: any) => {
    return (
      <BillingCard
        title={loc(item.title)}
        amount={item.amount}
        description={loc(item.description)}
        selected={item.selected}
        onPress={() => {
          console.log(item);
        }}
      />
    );
  };

  const _renderTribevestPlans = () => {
    return TRIBEVEST_PLANS.map((item) => _renderBillCard(item));
  };

  return (
    <View style={styles.container}>
      {_renderTitle()}
      {_renderTribevestPlans()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
});
