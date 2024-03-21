
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App(){
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const addTask = () => {
        if (task.trim() != ''){
            setTaskList([...taskList, task]);
            setTask('');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Tarefas</Text>
            <TextInput 
                style={styles.input}
                placeholder='Digite uma nova tarefa:'
                value='{task}'
                onChangeText={text => setTask(text)}
            />

            <Button title='Adicinar Tarefa' onPress={addTask} />
            {taskList.map((item, index) => {
                <Text key={index} style={styles.task}>(item)</Text>
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title:{
        fontSize: 24,
        marginBottom: 20,
    },
    input:{
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    task:{
        fontSize: 16,
        marginTop: 5,
    },
})
