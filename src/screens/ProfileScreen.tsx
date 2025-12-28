import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('Sandip');
  const [name, setName] = useState('Eshan Sandeepa');
  const [email, setEmail] = useState('IT19957708@my.sliit.lk');
  const [contact, setContact] = useState('0701052408');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.privacyText}>
            We prioritize your privacy. All facial and web data is{'\n'}
            processed locally and never stored on our servers.{'\n'}
            Your information is safe with us.
          </Text>

          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=8' }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="pencil" size={16} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>UserName</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  value={username}
                  onChangeText={setUsername}
                  editable={isEditing}
                />
                <TouchableOpacity style={styles.editButton}>
                  <Ionicons name="pencil" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Name</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  editable={isEditing}
                />
                <TouchableOpacity style={styles.editButton}>
                  <Ionicons name="pencil" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  editable={isEditing}
                  keyboardType="email-address"
                />
                <TouchableOpacity style={styles.editButton}>
                  <Ionicons name="pencil" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Contact</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  value={contact}
                  onChangeText={setContact}
                  editable={isEditing}
                  keyboardType="phone-pad"
                />
                <TouchableOpacity style={styles.editButton}>
                  <Ionicons name="pencil" size={18} color="white" />
                </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    padding: 20,
  },
  privacyText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 30,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E0E0E0',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: '35%',
    backgroundColor: '#4A90E2',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
  formContainer: {
    gap: 20,
  },
  fieldContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
  editButton: {
    backgroundColor: '#4A90E2',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
