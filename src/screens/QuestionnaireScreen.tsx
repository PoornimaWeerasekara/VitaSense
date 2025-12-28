import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type QuestionnaireScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Questionnaire'>;
};

const questions = [
  { id: 1, text: 'In the last month, how often have you been upset because of something that happened unexpectedly?', reverse: false },
  { id: 2, text: 'In the last month, how often have you felt that you were unable to control the important things in your life?', reverse: false },
  { id: 3, text: 'In the last month, how often have you felt nervous and stressed?', reverse: false },
  { id: 4, text: 'In the last month, how often have you felt confident about your ability to handle your personal problems?', reverse: true },
  { id: 5, text: 'In the last month, how often have you felt that things were going your way?', reverse: true },
  { id: 6, text: 'In the last month, how often have you found that you could not cope with all the things that you had to do?', reverse: false },
  { id: 7, text: 'In the last month, how often have you been able to control irritations in your life?', reverse: true },
  { id: 8, text: 'In the last month, how often have you felt that you were on top of things?', reverse: true },
  { id: 9, text: 'In the last month, how often have you been angered because of things that happened that were outside of your control?', reverse: false },
  { id: 10, text: 'In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?', reverse: false },
];

const options = [
  { label: 'Never', value: 0 },
  { label: 'Almost Never', value: 1 },
  { label: 'Sometimes', value: 2 },
  { label: 'Fairly Often', value: 3 },
  { label: 'Very Often', value: 4 },
];

export default function QuestionnaireScreen({ navigation }: QuestionnaireScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = (finalAnswers: { [key: number]: number }) => {
    let totalScore = 0;

    questions.forEach((question) => {
      const answer = finalAnswers[question.id] || 0;
      
      if (question.reverse) {
        // Reverse scoring for questions 4, 5, 7, 8
        const reversedScore = 4 - answer;
        totalScore += reversedScore;
      } else {
        totalScore += answer;
      }
    });

    let stressLevel = '';
    if (totalScore >= 0 && totalScore <= 13) {
      stressLevel = 'Low Stress';
    } else if (totalScore >= 14 && totalScore <= 26) {
      stressLevel = 'Moderate Stress';
    } else if (totalScore >= 27 && totalScore <= 40) {
      stressLevel = 'High Stress';
    }

    Alert.alert(
      'Assessment Complete',
      `Your total score: ${totalScore}\nStress Level: ${stressLevel}`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('MainTabs'),
        },
      ]
    );
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Questionnaire</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}>
          <Ionicons name="notifications-outline" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.questionNumber}>
          Question {currentQuestion + 1} of {questions.length}
        </Text>
        
        <Text style={styles.questionText}>
          {questions[currentQuestion].text}
        </Text>

        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.optionButton,
                answers[questions[currentQuestion].id] === option.value && styles.selectedOption,
              ]}
              onPress={() => handleAnswer(option.value)}
            >
              <Text
                style={[
                  styles.optionText,
                  answers[questions[currentQuestion].id] === option.value && styles.selectedOptionText,
                ]}
              >
                {option.label}
              </Text>
              <View style={styles.radioOuter}>
                {answers[questions[currentQuestion].id] === option.value && (
                  <View style={styles.radioInner} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.navigationButtons}>
        {currentQuestion > 0 && (
          <TouchableOpacity style={styles.prevButton} onPress={handlePrevious}>
            <Text style={styles.prevButtonText}>Previous</Text>
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
  progressBarContainer: {
    height: 4,
    backgroundColor: '#E0E0E0',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4A90E2',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  questionNumber: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
    marginBottom: 15,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 30,
    lineHeight: 28,
  },
  optionsContainer: {
    gap: 15,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  selectedOption: {
    borderColor: '#4A90E2',
    backgroundColor: '#F0F7FF',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  selectedOptionText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4A90E2',
  },
  navigationButtons: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  prevButton: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  prevButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});
