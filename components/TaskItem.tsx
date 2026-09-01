import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

// interface TaskItemProps {
//     id: string;
//     title: string;
//     onDelete: (id: string) => void;
// }

// export default function TaskItem({ id, title, onDelete }: TaskItemProps) {
//         return (
//             <View style={styles.card}>
//                 <Text style={styles.cardText}>{title}</Text>
//                 <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(id)}>
//                     <Text style={styles.deleteButtonText}>Delete</Text>
//                 </TouchableOpacity>
//             </View>
//         );
// }

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#fff',
//         padding: 15,
//         marginBottom: 10,
//         borderRadius: 10,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#ddd',
//     },
//     cardText: {
//         fontSize: 16,
//         color: '#333',
//         flex: 1,
//         marginRight: 10,
//     },
//     deleteButton: {
//         backgroundColor: '#ff4d4d',
//         width: 32,
//         height: 32,
//         borderRadius: 16,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     deleteButtonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 14,
//     },
// });


interface TaskItemProps {
    id: string;
    title: string;
    quantity: number;
    purchased: boolean;
    onDelete: (id: string) => void;
    onToggleStatus: (id: string) => void;
}

export default function TaskItem({ id, title, quantity, purchased, onDelete, onToggleStatus }: TaskItemProps) {
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => onToggleStatus(id)}>
                <Text style={{ color: purchased ? 'green' : 'red', marginRight: 10 }}>
                    {purchased ? 'Purchased' : 'Not Purchased'}
                </Text>
            </TouchableOpacity>
            <Text style={styles.cardText}>{title}</Text>
            <Text style={styles.quantityText}>{quantity} шт.</Text>
            <TouchableOpacity
                style={[styles.statusButton, purchased ? styles.statusBought : styles.statusNotBought]}
                onPress={() => onToggleStatus(id)}
            >
                <Text style={styles.statusButtonText}>
                    {purchased ? 'да' : 'нет'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(id)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    cardText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    quantityText: {
        fontSize: 16,
        color: '#666',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'right',
        marginRight: 15,
    },
    statusButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBought: {
        backgroundColor: 'green',
    },
    statusNotBought: {
        backgroundColor: 'red',
    },
    statusButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

