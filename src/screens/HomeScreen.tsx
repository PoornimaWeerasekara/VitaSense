import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const [stressLevel, setStressLevel] = useState('Low');
  const [stressPercentage, setStressPercentage] = useState(15);
  const [heartRate, setHeartRate] = useState(92);

  const getStressColor = (): [string, string] => {
    switch (stressLevel.toLowerCase()) {
      case 'low':
        return ['#66BB6A', '#81C784'];
      case 'medium':
        return ['#FFA726', '#FFB74D'];
      case 'high':
        return ['#EF5350', '#E57373'];
      default:
        return ['#4A90E2', '#5B9FE3'];
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hello, Kavindu!</Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={14} color="#4A90E2" />
              <Text style={styles.location}>Pitiyandala</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="settings-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications" size={24} color="#4A90E2" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>• Here's your current stress states!</Text>

          <View style={styles.stressCircleContainer}>
            <LinearGradient
              colors={getStressColor()}
              style={styles.stressCircle}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.stressLevelText}>{stressLevel.toUpperCase()}</Text>
              <Text style={styles.stressPercentageText}>{stressPercentage}%</Text>
            </LinearGradient>
          </View>

          <Text style={styles.currentStressText}>
            Current stress level: <Text style={styles.stressLevelHighlight}>{stressLevel}</Text>
          </Text>

          <View style={styles.indicatorsGrid}>
            <View style={[styles.indicatorCard, { backgroundColor: '#4A90E2' }]}>
              <Ionicons name="scan-outline" size={32} color="white" />
              <Text style={styles.indicatorLabel}>Facial tension{'\n'}detected</Text>
            </View>

            <View style={[styles.indicatorCard, { backgroundColor: '#66BB6A' }]}>
              <Ionicons name="globe-outline" size={32} color="white" />
              <Text style={styles.indicatorLabel}>Web Activity{'\n'}Changes</Text>
            </View>

            <View style={[styles.indicatorCard, { backgroundColor: '#EF5350' }]}>
              <Ionicons name="heart" size={32} color="white" />
              <Text style={styles.indicatorLabel}>High heart rate</Text>
            </View>

            <View style={[styles.indicatorCard, { backgroundColor: '#FFA726' }]}>
              <Ionicons name="hand-left-outline" size={32} color="white" />
              <Text style={styles.indicatorLabel}>Touch pressure{'\n'}detected</Text>
            </View>
          </View>

          <View style={styles.heartRateCard}>
            <Ionicons name="heart" size={24} color="#EF5350" />
            <Text style={styles.heartRateText}>Heart Rate: {heartRate} bpm</Text>
          </View>
        </View>
      </ScrollView>
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
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  location: {
    fontSize: 12,
    color: '#666',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    padding: 5,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  stressCircleContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  stressCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  stressLevelText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  stressPercentageText: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
  },
  currentStressText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  stressLevelHighlight: {
    fontWeight: 'bold',
    color: '#66BB6A',
  },
  indicatorsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginBottom: 20,
  },
  indicatorCard: {
    width: '47%',
    aspectRatio: 1.2,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
  },
  indicatorLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
  },
  heartRateCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#EF5350',
    gap: 10,
  },
  heartRateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
