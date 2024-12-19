import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Category = ({item, selectedCategory, setSelectedCategory}) => {
  console.log('selectedCategory:', selectedCategory);
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && {
            color: 'white',
            backgroundColor: '#E96E6E',
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#938F8F',
    backgroundColor: '#DFDCDC',
    textAlign: 'center',
    borderRadius: 16,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
