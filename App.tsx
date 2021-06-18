import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState<any | null>(null);
  const [taskItems, setTaskItems] = useState([] as any);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask('');
  }

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>To-Do List</Text>
        <View style={styles.items}>
          {taskItems.map((item: string, index: number) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item}></Task>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Type a Task'} value={task} onChangeText={text => setTask(text)} onSubmitEditing={() => handleAddTask()}></TextInput>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '89%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
});
