import React from 'react'
import { View, Image } from 'react-native'
import StyledText from './StyledText'

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language, styles }) => (
  <View style={{flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl}} />
    </View>
    <View style={{ flex: 1,  }}>
      <StyledText fontSize='bold' fontWeight='bold'>{fullName}</StyledText>
      <StyledText color='secondary'>{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
)

export default RepositoryItemHeader