import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function MonitorScreen() {
  const [facialMonitoring, setFacialMonitoring] = useState(true);
  const [webActivityMonitoring, setWebActivityMonitoring] = useState(true);
  const [heartRate, setHeartRate] = useState(88);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Facial Monitoring Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Facial Monitoring</Text>
            <Switch
              value={facialMonitoring}
              onValueChange={setFacialMonitoring}
              trackColor={{ false: '#D0D0D0', true: '#66BB6A' }}
              thumbColor={facialMonitoring ? '#FFF' : '#F4F3F4'}
            />
          </View>
          <Text style={styles.sectionDescription}>
            Images captured randomly. No images stored.{'\n'}
            Your privacy is our priority
          </Text>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="camera" size={24} color="white" />
            <Text style={styles.actionButtonText}>Take photo now</Text>
          </TouchableOpacity>
        </View>

        {/* Web Activity Monitoring Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Web Activity Monitoring</Text>
            <Switch
              value={webActivityMonitoring}
              onValueChange={setWebActivityMonitoring}
              trackColor={{ false: '#D0D0D0', true: '#66BB6A' }}
              thumbColor={webActivityMonitoring ? '#FFF' : '#F4F3F4'}
            />
          </View>
          <Text style={styles.sectionDescription}>
            Monitoring web browsing patterns for stress indicators
          </Text>

          <View style={styles.statusCard}>
            <Ionicons name="globe" size={24} color="#4A90E2" />
            <Text style={styles.statusText}>Browsing activity analyzed locally.</Text>
          </View>
        </View>

        {/* Heart Rate Monitoring Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Heart rate Monitoring</Text>
          <Text style={styles.sectionDescription}>
            Real time heart rate data from connected device.
          </Text>

          <View style={styles.heartRateContainer}>
            <Text style={styles.heartRateValue}>{heartRate} bpm</Text>
            <Text style={styles.heartRateStatus}>- NORMAL</Text>
          </View>

          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#EF5350' }]}>
            <Ionicons name="heart" size={24} color="white" />
            <Text style={styles.actionButtonText}>Check heart rate now</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.historyLink}>See History</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  content: {
    padding: 20,
    gap: 25,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    gap: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionDescription: {
    fontSize: 13,
    color: '#999',
    lineHeight: 18,
  },
  actionButton: {
    backgroundColor: '#4FC3F7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 12,
    gap: 10,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F7FF',
    padding: 15,
    borderRadius: 10,
    gap: 10,
  },
  statusText: {
    fontSize: 14,
    color: '#4A90E2',
    flex: 1,
  },
  heartRateContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  heartRateValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  heartRateStatus: {
    fontSize: 18,
    fontWeight: '600',
    color: '#66BB6A',
    marginLeft: 10,
  },
  historyLink: {
    textAlign: 'center',
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '600',
  },
});
