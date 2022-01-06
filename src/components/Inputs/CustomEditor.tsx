/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTheme } from '@react-navigation/native';
import { scale } from '@resources';
import React, { useRef } from 'react';
import { Text, ScrollView } from 'react-native';

// THIRD PARTY IMPORTS
import {
  actions,
  RichEditor,
  RichEditorProps,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
interface DefaultProps extends RichEditorProps {}

export const CustomEditor = (props: DefaultProps) => {
  const richText = useRef(null);
  const { colors } = useTheme() as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  return (
    <>
      <ScrollView nestedScrollEnabled={true}>
        <RichEditor
          useContainer={true}
          initialHeight={138}
          ref={richText}
          onChange={(descriptionText) => {
            console.log('descriptionText:', descriptionText);
          }}
          editorInitializedCallback={() => {}}
          style={{
            flex: 0,
            minHeight: 500,
            height: 200,
            borderRadius: 8,
            borderWidth: 0.5,
            borderColor: colors.placeHolderColor,
          }}
        />
      </ScrollView>
      <RichToolbar
        style={{
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
          backgroundColor: '#F1F5F9d',
          height: scale(35),
          borderWidth: 1,
          borderColor: isDarkTheme ? colors.white : colors.placeHolderColor,
        }}
        editor={richText}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.insertLink,
          actions.undo,
          actions.redo,
        ]}
        iconMap={{
          [actions.heading1]: ({ tintColor }) => (
            <Text style={[{ color: tintColor }]}>H1</Text>
          ),
        }}
      />
    </>
  );
};
