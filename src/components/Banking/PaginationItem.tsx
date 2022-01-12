// import React from 'react';
// import { View } from 'react-native';
// import Animated, {
//   Extrapolate,
//   interpolate,
//   useAnimatedStyle,
// } from 'react-native-reanimated';

// // LOCAL IMPORT
// import { color } from '@resources';

// export const PaginationItem: React.FC<{
//   index: number;
//   length: number;
//   animValue: Animated.SharedValue<number>;
// }> = (props) => {
//   console.log('Pagination Item render.....');

//   const { animValue, index, length } = props;
//   const width = 8;

//   const animStyle = useAnimatedStyle(() => {
//     let inputRange = [index - 1, index, index + 1];
//     let outputRange = [-width, 0, width];

//     if (index === 0 && animValue.value > length - 1) {
//       inputRange = [length - 1, length, length + 1];
//       outputRange = [-width, 0, width];
//     }

//     return {
//       transform: [
//         {
//           translateX: interpolate(
//             animValue.value,
//             inputRange,
//             outputRange,
//             Extrapolate.CLAMP,
//           ),
//         },
//       ],
//     };
//   }, [animValue, index, length]);
//   return (
//     <View
//       style={{
//         backgroundColor: 'white',
//         width,
//         height: width,
//         borderRadius: 50,
//         overflow: 'hidden',
//       }}
//     >
//       <Animated.View
//         style={[
//           { borderRadius: 50, backgroundColor: color.blue, flex: 1 },
//           animStyle,
//         ]}
//       />
//     </View>
//   );
// };
