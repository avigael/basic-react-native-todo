import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TaskProps {
    text: string,
}

const Task = (props: TaskProps) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#bfbfbf',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
});
