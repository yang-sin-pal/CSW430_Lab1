import React from "react";
import { ScrollView } from "react-native";
import styles from "./Q4/style";
import data from './Q4/Data';
import Square from './Q4/Square';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
}