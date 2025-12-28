import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type PlayGameScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PlayGame'>;
};

export default function PlayGameScreen({ navigation }: PlayGameScreenProps) {
  const [gameState, setGameState] = useState<'waiting' | 'ready' | 'playing'>('waiting');
  const [startTime, setStartTime] = useState<number>(0);
  const [reactionTime, setReactionTime] = useState<number>(0);
  const [countdown, setCountdown] = useState<number>(3);
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (gameState === 'waiting') {
      // Start countdown
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            startGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [gameState]);

  const startGame = () => {
    const delay = Math.random() * 3000 + 1000; // Random delay between 1-4 seconds
    
    setTimeout(() => {
      setGameState('ready');
      setStartTime(Date.now());
      
      // Animate circle appearance
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        speed: 20,
      }).start();
    }, delay);
  };

  const handleTap = () => {
    if (gameState === 'ready') {
      const endTime = Date.now();
      const reaction = endTime - startTime;
      setReactionTime(reaction);
      
      // Navigate to result screen
      let stressLevel = 'Low Stress';
      if (reaction > 300) {
        stressLevel = 'High Stress';
      } else if (reaction > 200) {
        stressLevel = 'Medium Stress';
      }

      navigation.navigate('GameResult', {
        time: reaction / 1000,
        score: reaction,
        stressLevel,
      });
    }
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
        {gameState === 'waiting' && (
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionTitle}>Get Ready!</Text>
            <Text style={styles.instructionText}>
              Tap the circle as soon as it appears
            </Text>
            <Text style={styles.countdownText}>{countdown}</Text>
          </View>
        )}

        {gameState === 'playing' && (
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionTitle}>Wait for it...</Text>
            <Text style={styles.instructionText}>
              Circle will appear soon. Be ready!
            </Text>
          </View>
        )}

        {gameState === 'ready' && (
          <TouchableOpacity
            style={styles.gameArea}
            onPress={handleTap}
            activeOpacity={1}
          >
            <Animated.View
              style={[
                styles.circle,
                {
                  transform: [{ scale: scaleAnim }],
                },
              ]}
            />
          </TouchableOpacity>
        )}
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  instructionContainer: {
    alignItems: 'center',
  },
  instructionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  countdownText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  gameArea: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#EF5350',
  },
});
