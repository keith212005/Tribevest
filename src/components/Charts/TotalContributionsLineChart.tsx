import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LineChart, YAxis, XAxis } from 'react-native-svg-charts';
import { CustomGrid } from './CustomGrid';

export const TotalContributionsLineChart = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const data2 = ['7/20', '8/20', '9/20', '10/20', '11/20'];

  const axesSvg = { fontSize: 10, fill: 'grey' };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;

  const contentInset = { top: 20, bottom: 20 };

  return (
    <View style={{ height: 200, flexDirection: 'row' }}>
      <YAxis
        data={data}
        style={{ marginBottom: xAxisHeight }}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <LineChart
          style={{ flex: 1 }}
          data={data}
          contentInset={verticalContentInset}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
        >
          <CustomGrid />
        </LineChart>
        <XAxis
          style={{ marginHorizontal: -10, height: xAxisHeight }}
          data={data}
          formatLabel={(value, index) => index}
          contentInset={{ left: 10, right: 10 }}
          svg={axesSvg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
