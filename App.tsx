import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState<string[]>([]);

    const addTask = () => {
        if (task.trim() !== '') {
            setTaskList([...taskList, task]);
            setTask('');
        }
    }

    const editTask = (index: number, newText: string) => {
        const newTaskList = [...taskList];
        newTaskList[index] = newText;
        setTaskList(newTaskList);
    }

    const deleteTask = (index: number) => {
        const newTaskList = [...taskList];
        newTaskList.splice(index, 1);
        setTaskList(newTaskList);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Tarefas</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite uma nova tarefa:'
                value={task}
                onChangeText={text => setTask(text)}
            />
            <Button title='Adicionar Tarefa' onPress={addTask} />
            {taskList.map((item, index) => (
                <View key={index} style={styles.taskContainer}>
                    <TextInput
                        style={styles.taskInput}
                        value={item}
                        onChangeText={text => editTask(index, text)}
                    />
                    <Button title="Excluir" onPress={() => deleteTask(index)} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    taskInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginRight: 10,
        paddingHorizontal: 10,
    },
});
