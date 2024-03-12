import React from "react";
import { View, Text } from 'react-native'
import { Routes, Route, Redirect } from 'react-router-native'
import RepositoryList from "./RepositoryList";
import AppBar from './AppBar'

const Main = () => {
  return(
    <View style={{ flex: 1}}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<Text>Sign In</Text>} />
      </Routes>
    </View>
  )
}

export default Main