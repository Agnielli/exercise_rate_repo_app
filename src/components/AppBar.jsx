import React, { Children } from "react";
import { View, ViewPropTypes, StyleSheet, TouchableWithoutFeedback, ScrollView } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight + 10
  },
  scroll: {
    paddingBottom: 15
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary
  }
});

const AppBarTap = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  const texStyles = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight="bold" style={texStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal style={styles.scroll}>
      <AppBarTap to="/">Repositories</AppBarTap>
      <AppBarTap to="/signin">Sign In</AppBarTap>
    </ScrollView>
  </View>
)};

export default AppBar;
