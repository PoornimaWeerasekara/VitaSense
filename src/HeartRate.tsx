import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle } from 'react-native-svg';

interface CircularProgressProps {
    value: number;
    maxValue: number;
    size: number;
    strokeWidth: number;
    color: string;
    label: string;
    unit: string;
    status: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
    value,
    maxValue,
    size,
    strokeWidth,
    color,
    label,
    unit,
    status,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progress = (value / maxValue) * circumference;
    const strokeDashoffset = circumference - progress;

    return (
        <View style={styles.circularProgressContainer}>
            <Svg width={size} height={size}>
                {/* Background Circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#E0E0E0"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                {/* Progress Circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </Svg>
            <View style={styles.circularProgressContent}>
                <Text style={styles.circularProgressValue}>{value}</Text>
                <Text style={styles.circularProgressUnit}>{unit}</Text>
            </View>
            <Text style={styles.circularProgressLabel}>{label}</Text>
            <Text style={[styles.circularProgressStatus, { color }]}>{status}</Text>
        </View>
    );
};

export default function HeartRate() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                </View>

                {/* Heart Rate Monitoring Section */}
                <View style={styles.section}>
                    <Text style={styles.title}>Heart rate Monitoring</Text>
                    <Text style={styles.subtitle}>Real time heart rate data from connected device.</Text>

                    <View style={styles.heartRateDisplay}>
                        <Text style={styles.heartRateValue}>88 bpm - </Text>
                        <Text style={styles.heartRateStatus}>NORMAL</Text>
                    </View>

                    <TouchableOpacity style={styles.checkButton}>
                        <Ionicons name="heart-outline" size={28} color="white" />
                        <Text style={styles.checkButtonText}>Check heart rate now</Text>
                    </TouchableOpacity>
                </View>

                {/* HRV Metrics Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>HRV Metrics</Text>
                    <Text style={styles.subtitle}>Real time heart rate data from connected device.</Text>

                    <View style={styles.metricsGrid}>
                        <View style={styles.metricRow}>
                            <CircularProgress
                                value={88}
                                maxValue={200}
                                size={120}
                                strokeWidth={12}
                                color="#4A90E2"
                                label="SDNN"
                                unit="bpm"
                                status="Good"
                            />
                            <CircularProgress
                                value={50}
                                maxValue={100}
                                size={120}
                                strokeWidth={12}
                                color="#4CAF50"
                                label="RMSSD"
                                unit="bpm"
                                status="Good"
                            />
                        </View>
                        <View style={styles.metricRow}>
                            <CircularProgress
                                value={30}
                                maxValue={100}
                                size={120}
                                strokeWidth={12}
                                color="#EF5350"
                                label="PNN50"
                                unit="%"
                                status="Good"
                            />
                            <CircularProgress
                                value={50}
                                maxValue={100}
                                size={120}
                                strokeWidth={12}
                                color="#FF9800"
                                label="CoV"
                                unit="ms"
                                status="Good"
                            />
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
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    section: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 13,
        color: '#999',
        marginBottom: 20,
    },
    heartRateDisplay: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    heartRateValue: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
    },
    heartRateStatus: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    checkButton: {
        backgroundColor: '#EF5350',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        borderRadius: 12,
        gap: 10,
    },
    checkButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    metricsGrid: {
        marginTop: 20,
    },
    metricRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    circularProgressContainer: {
        alignItems: 'center',
        position: 'relative',
    },
    circularProgressContent: {
        position: 'absolute',
        top: 30,
        alignItems: 'center',
    },
    circularProgressValue: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    circularProgressUnit: {
        fontSize: 12,
        color: '#999',
        marginTop: -5,
    },
    circularProgressLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginTop: 10,
    },
    circularProgressStatus: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 5,
    },
});
