// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
// import TaskItem from './components/TaskItem';


// /*
// <div> <section> - <View>
// <h1> <h2> <h3> - <Text>
// <button> - <TouchableOpacity>
// <img> - <Image>
// <input> - <TextInput>
// */ 


// export default function App() {



//   const [count, setCount] = useState<number>(0);
//   const [inputValue, setInputValue] = useState<string>('');

//   return (
//     < SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}> 
//         <Text style={styles.title}>Bilousov</Text>
//         <Text style={styles.counterText}>Counter: {count}</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Введите значение..."
//           value={inputValue}
//           onChangeText={(text) => {
//             setInputValue(text);
//             const parsed = parseInt(text, 10);
//             if (!isNaN(parsed)) {
//               setCount(parsed);
//             }
//           }}
//           keyboardType="numeric"
//         />
//       </View>
//       <View style={styles.buttonRow}>
//         <TouchableOpacity
//           style={[styles.button, styles.incrementButton]}
//           onPress={() => setCount(count + 1)}
//         >
//           <Text style={styles.buttonText}>+1</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.decrementButton]}
//           onPress={() => setCount(count - 1)}
//         >
//           <Text style={styles.buttonText}>-1</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 20,
//     width: '100%',
//   },
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   counterText: {
//     fontSize: 32,
//     marginBottom: 30,
//     fontWeight: '600',
//     color: '#256ab',
//   },
//   buttonRow: {
//     paddingHorizontal: 24,
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   incrementButton: {
//     backgroundColor: '#4CAF50',
//   },
//   decrementButton: {
//     backgroundColor: '#F44336',
//   },
//   button: {
//     paddingHorizontal: 24,
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// interface Task {
//   id: string;
//   title: string;
// }

// export default function App() {

//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [text, setText] = useState<string>('');

//   const handleAddTask = () => {
//     if (text.trim() === '') return;

//     const newTask: Task = {
//       id: Date.now().toString(),
//       title: text,
//     };
    
//     setTasks([...tasks, newTask]);
//     setText('');
//   };

//   const handleDeleteTask = (id: string) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };


//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Bilousov</Text>
//       </View>

//       <View style={styles.inputContainer}>
//         <TextInput style = {styles.input}
//           placeholder = "Add a new task"
//           value = {text}
//           onChangeText = {(value) => setText(value)}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={tasks}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TaskItem
//             id={item.id}
//             title={item.title}
//             onDelete={handleDeleteTask}
//           />
//         )}
//         ListEmptyComponent={() => (
//           <Text style={{ textAlign: 'center', marginTop: 20, color: '#999' }}>
//             No tasks available. Add a new task!
//           </Text>
//         )}
//       />
//     </SafeAreaView>
//   );


// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 12,
//     marginRight: 10,
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });



// interface Task {
//   id: string;
//   title: string;
//   quantity: number;
//   purchased: boolean;
// }

// export default function App() {

//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [text, setText] = useState<string>('');
//   const [quantity, setQuantity] = useState<number>(1);

//   const handleAddTask = () => {
//     if (text.trim() === '') return;
    

//     const newTask: Task = {
//       id: Date.now().toString(),
//       title: text,
//       quantity: quantity,
//       purchased: false, 
//     };
    
//     setTasks([...tasks, newTask]);
//     setText('');
//     setQuantity(1); 
//   };

//   const handleDeleteTask = (id: string) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const handleTogglePurchased = (id: string) => {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, purchased: !task.purchased } : task
//     ));
//   };


//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Bilousov</Text>
//       </View>

//       <View style={styles.inputContainer}>
//         <TextInput style = {styles.input}
//           placeholder = "Product"
//           value = {text}
//           numberOfLines={1}
//           onChangeText = {(value) => setText(value)}
//         />
//         <TextInput style = {[styles.input, styles.quantityInput]}
//           placeholder = "Quantity"
//           value = {quantity.toString()}
//           keyboardType="numeric"
//           onChangeText = {(value) => setQuantity(Number(value))}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={tasks}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TaskItem
//             id={item.id}
//             title={item.title}
//             quantity={item.quantity}
//             purchased={item.purchased}
//             onDelete={handleDeleteTask}
//             onToggleStatus={handleTogglePurchased}
//           />
//         )}
//         ListEmptyComponent={() => (
//           <Text style={{ textAlign: 'center', marginTop: 20, color: '#999' }}>
//             No tasks available. Add a new task!
//           </Text>
//         )}
//       />
//     </SafeAreaView>
//   );


// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 12,
//     marginRight: 10,
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   quantityInput: {
//     flex: 1,
//   },
// });
