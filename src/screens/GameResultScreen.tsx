import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type GameResultScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'GameResult'>;
  route: RouteProp<RootStackParamList, 'GameResult'>;
};

export default function GameResultScreen({ navigation, route }: GameResultScreenProps) {
  const { time, score, stressLevel } = route.params;

  const getStressColor = () => {
    if (stressLevel.includes('Low')) return '#66BB6A';
    if (stressLevel.includes('Medium')) return '#FFA726';
    return '#EF5350';
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Play game</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Game over!</Text>
        
        <View style={styles.statsContainer}>
          <Text style={styles.statLabel}>Time {time.toFixed(2)}s</Text>
          <Text style={styles.statLabel}>Score {score}ms</Text>
        </View>

        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: getStressColor() }]} />
        </View>

        <Text style={styles.resultText}>
          Reaction speed suggest: <Text style={[styles.stressText, { color: getStressColor() }]}>{stressLevel}</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.playAgainButton]}
            onPress={() => navigation.replace('PlayGame')}
          >
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.exitButton]}
            onPress={() => navigation.navigate('MainTabs')}
          >
            <Text style={styles.buttonText}>Exit</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 40,
    marginBottom: 20,
  },
  statsContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  statLabel: {
    fontSize: 18,
    color: '#4FC3F7',
    fontWeight: '600',
    marginVertical: 5,
  },
  circleContainer: {
    marginVertical: 40,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 40,
  },
  stressText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  button: {
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  playAgainButton: {
    backgroundColor: '#4FC3F7',
  },
  exitButton: {
    backgroundColor: '#EF5350',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
