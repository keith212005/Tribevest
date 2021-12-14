/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { TRIBEVEST_PLANS } from '@constants';
import createState from 'react-hook-setstate';

// LOCAL IMPORTS
import { color, images, useGlobalStyles } from '@resources';
import { BillingCard, FastImg, MessageWithIcon } from '@components';
import { Divider } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

export const Step10 = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  //   const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  const [state, setState] = createState<any>({
    plans: TRIBEVEST_PLANS,
    selectedPlan: TRIBEVEST_PLANS[0],
  });

  useEffect(() => {}, [state.plans]);

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
          const newArr = state.plans.map((plan: any) => {
            plan.selected = plan.id === item.id ? true : false;
            return plan;
          });
          setState({ plans: newArr, selectedPlan: item });
        }}
      />
    );
  };

  const _renderTribevestPlans = () => {
    return state.plans.map((item: any) => _renderBillCard(item));
  };

  const _renderSelectedPackageInformation = () => {
    return (
      <View>
        {/* render What are you getting */}
        <Text
          style={[
            globalStyle.textStyle('_18', 'text', 'NUNITO_SEMIBOLD'),
            { marginTop: 12 },
          ]}
        >
          {loc('WHAT_YOU_GETTING')}
        </Text>

        {/* RenderStandard Pakcage setup */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <Text
            style={[globalStyle.textStyle('_16', 'text', 'NUNITO_REGULAR')]}
          >
            {loc('STANDARD_PKG_ANNUAL')}
          </Text>
          <Text style={[globalStyle.textStyle('_16', 'text', 'NUNITO_BOLD')]}>
            {' '}
            ${state.selectedPlan.amount * 12}
          </Text>
        </View>

        {/* Render Customize your setup container */}
        <View style={styles.customizeSetupContainer}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text
              style={[globalStyle.textStyle('_14', 'black', 'NUNITO_SEMIBOLD')]}
            >
              {loc('CUSTOMIZE_SETUP')}
            </Text>
            {FastImg(images.info_circle, 26)}
          </View>
          <Text
            style={[globalStyle.textStyle('_14', 'blue', 'NUNITO_SEMIBOLD')]}
          >
            {loc('SWITCH_TO_CUSTOM_PACKAGE')}
          </Text>
        </View>

        {/* Render Messages */}
        <View style={{ marginVertical: 10 }}>
          <MessageWithIcon
            icon={'tick_circle_light'}
            tintColor={colors.green}
            message={loc('LLC_FILING')}
          />
          <MessageWithIcon
            icon={'tick_circle_light'}
            tintColor={colors.green}
            message={loc('BUSINESS_BANK_AC')}
          />
          <MessageWithIcon
            icon={'tick_circle_light'}
            tintColor={colors.green}
            message={loc('OPERATING_ACCOUNT')}
          />
          <MessageWithIcon
            icon={'tick_circle_light'}
            tintColor={colors.green}
            message={loc('AUTOMATED_ANUAL_COMP')}
          />
        </View>
      </View>
    );
  };

  const _renderTotalDueToday = () => {
    return (
      <View>
        <Divider />
        <View
          style={[
            globalStyle.layoutDirection('row', 'space-between', 'center'),
          ]}
        >
          <Text
            style={[
              globalStyle.textStyle('_16', 'text', 'NUNITO_REGULAR'),
              { marginVertical: 20 },
            ]}
          >
            {loc('DUE_TODAY')}
          </Text>
          <Text style={[globalStyle.textStyle('_16', 'text', 'NUNITO_BOLD')]}>
            {' '}
            ${state.selectedPlan.amount * 12}
          </Text>
        </View>
        <Divider />
      </View>
    );
  };

  const _renderTermsAndCondition = () => {
    return (
      <View style={styles.termsAndCondition}>
        <MessageWithIcon
          icon={'tick_circle_filled'}
          tintColor={colors.primaryColor}
          message={loc('AUTOMATED_ANUAL_COMP')}
        />
        <MessageWithIcon
          icon={'tick_star'}
          tintColor={colors.primaryColor}
          message={loc('CANCEL_ANYTIME')}
        />
        <MessageWithIcon
          icon={'shield_tick'}
          tintColor={colors.primaryColor}
          message={loc('POWERED_BY_STRIPE')}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {_renderTitle()}
      {_renderTribevestPlans()}
      {_renderSelectedPackageInformation()}
      {_renderTotalDueToday()}
      {_renderTermsAndCondition()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  customizeSetupContainer: {
    backgroundColor: color.light_blue_background,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  termsAndCondition: {
    marginVertical: 20,
  },
});
