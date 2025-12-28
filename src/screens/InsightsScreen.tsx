import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function InsightsScreen() {
  const weeklyData = [
    { day: 'Mon', level: 15, color: '#66BB6A' },
    { day: 'Tue', level: 25, color: '#FFA726' },
    { day: 'Wed', level: 12, color: '#66BB6A' },
    { day: 'Thu', level: 30, color: '#EF5350' },
    { day: 'Fri', level: 18, color: '#66BB6A' },
    { day: 'Sat', level: 10, color: '#66BB6A' },
    { day: 'Sun', level: 22, color: '#FFA726' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Insights</Text>
        <Ionicons name="notifications-outline" size={24} color="#4A90E2" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Weekly Overview */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Weekly Stress Overview</Text>
            <View style={styles.chartContainer}>
              {weeklyData.map((item, index) => (
                <View key={index} style={styles.barContainer}>
                  <View style={styles.barWrapper}>
                    <LinearGradient
                      colors={[item.color, item.color]}
                      style={[styles.bar, { height: `${item.level * 3}%` }]}
                    />
                  </View>
                  <Text style={styles.barLabel}>{item.day}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Statistics Cards */}
          <View style={styles.statsGrid}>
            <View style={[styles.statCard, { backgroundColor: '#4A90E2' }]}>
              <Ionicons name="trending-down" size={32} color="white" />
              <Text style={styles.statValue}>15%</Text>
              <Text style={styles.statLabel}>Avg Stress</Text>
            </View>

            <View style={[styles.statCard, { backgroundColor: '#66BB6A' }]}>
              <Ionicons name="checkmark-circle" size={32} color="white" />
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Good Days</Text>
            </View>

            <View style={[styles.statCard, { backgroundColor: '#FFA726' }]}>
              <Ionicons name="pulse" size={32} color="white" />
              <Text style={styles.statValue}>85 bpm</Text>
              <Text style={styles.statLabel}>Avg Heart Rate</Text>
            </View>

            <View style={[styles.statCard, { backgroundColor: '#9C27B0' }]}>
              <Ionicons name="calendar" size={32} color="white" />
              <Text style={styles.statValue}>7</Text>
              <Text style={styles.statLabel}>Days Tracked</Text>
            </View>
          </View>

          {/* Recommendations */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Recommendations</Text>
            <View style={styles.recommendationsList}>
              <View style={styles.recommendationItem}>
                <Ionicons name="fitness" size={24} color="#4A90E2" />
                <Text style={styles.recommendationText}>
                  Try 10 minutes of meditation daily
                </Text>
              </View>
              <View style={styles.recommendationItem}>
                <Ionicons name="water" size={24} color="#4A90E2" />
                <Text style={styles.recommendationText}>
                  Stay hydrated - drink 8 glasses of water
                </Text>
              </View>
              <View style={styles.recommendationItem}>
                <Ionicons name="moon" size={24} color="#4A90E2" />
                <Text style={styles.recommendationText}>
                  Maintain 7-8 hours of sleep schedule
                </Text>
              </View>
            </View>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    padding: 20,
    gap: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 200,
    paddingVertical: 10,
  },
  barContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
  barWrapper: {
    flex: 1,
    width: '70%',
    justifyContent: 'flex-end',
  },
  bar: {
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    minHeight: 20,
  },
  barLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  statCard: {
    width: '47%',
    borderRadius: 15,
    padding: 20,
    gap: 10,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
  },
  recommendationsList: {
    gap: 15,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 15,
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
  },
  recommendationText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});
