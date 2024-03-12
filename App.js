import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

console.log("hola")

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  )
}

