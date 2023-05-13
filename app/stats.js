import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';


export default outputPage = () => {
  return (
      <SafeAreaView style = {{fled: 1, backgroundColor: COLORS.backgroundBlue}}>
          <View style={{alignItems: 'center'}}><Text style = {{color: COLORS.lighterGreen}}>Stats Page</Text></View>           
      </SafeAreaView>
  )
}
