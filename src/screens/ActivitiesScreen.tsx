import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

export default function ActivitiesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activities</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.activityCard, { backgroundColor: '#4FC3F7' }]}
          onPress={() => navigation.navigate('Questionnaire')}
        >
          <Text style={styles.activityText}>Questionnaire</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.activityCard, { backgroundColor: '#EF5350' }]}
          onPress={() => navigation.navigate('PlayGame')}
        >
          <Text style={styles.activityText}>Play game</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.activityCard, { backgroundColor: '#66BB6A' }]}>
          <Text style={styles.activityText}>History</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    padding: 20,
    gap: 20,
  },
  activityCard: {
    height: 150,
    borderRadius: 15,
    justifyContent: 'flex-end',
    padding: 20,
  },
  activityText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
