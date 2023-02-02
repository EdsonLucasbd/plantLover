import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';

interface ScrollTimeProps {
  values: ItemProps[],
}

interface ItemProps {
  value: number,
  label?: string
}

export const ScrollTime = ({ values }: ScrollTimeProps) => {
  function renderItem({ item }: ListRenderItemInfo<ItemProps>) {
    return <Text>{`${item.value} ${item.label !== undefined ? item.label : ''}`}</Text>
  }
  return (
    <FlatList
      data={values}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      style={{ width: '33.33%' }}
      contentContainerStyle={{ alignItems: 'center' }}
    // getItemLayout={(data, index) => (
    //   { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
    // )}
    />
  )
}
