// SearchScreen.js

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Your search bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        // Add additional search input props as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
    marginRight:30,
    width: 600,
    backgroundColor: "white"
  },
  searchInput: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default SearchScreen;
