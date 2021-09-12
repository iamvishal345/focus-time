import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/color';
import { spacingSizes } from './src/utils/sizes';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/timer';
import { FocusHistory } from './src/features/focus/FocusHistory';
const STATUS = {
  COMPLETE: 1,
  CANCELLED: 0,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState('');
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory((values) => [...values, { subject, status }]);
  };

  const saveFocusHistory = async()=>{
    try{
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory))
    }catch(e){
      console.log(e)
    }
  }

  const loadFocusHistory = async ()=>{
    try{
      const history = await AsyncStorage.getItem("focusHistory")
      if(history && JSON.parse(history).length){
        setFocusHistory(JSON.parse(history))
      }
    }catch(e){
      console.log(e)
    }
  }
  React.useEffect(()=>{
    loadFocusHistory()
  },[])

 React.useEffect(()=>{
    saveFocusHistory()
  },[focusHistory])
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUS.COMPLETE);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUS.CANCELLED);
            setFocusSubject(null);
          }}
        />
      ) : (
          <View style={{flex:1}} >
          <Focus addSubject={setFocusSubject} />
          <FocusHistory
            focusHistory={focusHistory}
            onClear={() => setFocusHistory([])}
          />
          </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
    paddingTop: Platform.OS === 'ios' ? spacingSizes.md : spacingSizes.lg,
  },
});
