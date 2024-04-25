import React from 'react';
import type { Metadata } from "next";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export const metadata: Metadata = {
  title: "Mi cv",
  description: "sobre mi",
};
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
const Micv = () => {
  return (
    <object
    data='/CURRICULUM.pdf' 
    type="application/pdf"
    width="100%"
    height="100%"
    >
    </object>
  )
}

export default Micv