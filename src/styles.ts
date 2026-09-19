import { StyleSheet, Dimensions } from 'react-native';

export const { width } = Dimensions.get('window');
export const tileSize = width / 3;

export const globalStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  feedHeader: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  avatarSmall: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  avatarLarge: { width: 80, height: 80, borderRadius: 40, marginRight: 20 },
  mainMedia: { width: width, height: width },
  actionsBar: { flexDirection: 'row', justifyContent: 'space-between', padding: 10 },
  boldText: { fontWeight: '600' },
  gridTile: { width: tileSize, height: tileSize, borderWidth: 0.5, borderColor: '#fff' },
  searchBar: { height: 40, margin: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 10 },
  profileHeader: { flexDirection: 'row', padding: 20, alignItems: 'center', borderBottomWidth: 1, borderColor: '#eee' },
  commentInputContainer: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderColor: '#eee', alignItems: 'center' },
  roundedInput: { flex: 1, height: 40, borderWidth: 1, borderColor: '#ccc', borderRadius: 20, paddingHorizontal: 15, marginRight: 10 },
  sendButtonText: { color: '#0095f6', fontWeight: 'bold' },
  toggleTabContainer: { flexDirection: 'row', height: 50, borderTopWidth: 1, borderColor: '#eee' },
  tab: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  activeTab: { borderBottomWidth: 2, borderColor: '#000' },
  blueButton: { backgroundColor: '#0095f6', margin: 20, padding: 15, borderRadius: 8, alignItems: 'center' },
  blueButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  thumbnail: { width: 80, height: 80, borderRadius: 8, marginRight: 15 },
  underlineInput: { borderBottomWidth: 1, borderColor: '#ccc', paddingVertical: 8, marginBottom: 30, fontSize: 16 }
});
