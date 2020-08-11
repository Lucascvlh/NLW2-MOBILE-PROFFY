import React, {useState} from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStrorage from '@react-native-community/async-storage'
import {useFocusEffect} from '@react-navigation/native'

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

function Favorites(){
  const [favorites, setFavorites] = useState([]);
  function loadFavorites(){
    AsyncStrorage.getItem('favorites').then(response => {
      if(response) {
        setFavorites(JSON.parse(response));
      }
    })
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffy favoritos"/>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal:16
        }}
        >
        {favorites.map((teacher: Teacher) =>{
          return(
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Favorites;