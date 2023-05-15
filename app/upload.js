import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';


export default outputPage = () => {
  return (
      <SafeAreaView style = {{fled: 1, backgroundColor: COLORS.backgroundBlue}} >
          <View style={{alignItems: 'center', backgroundColor:COLORS.backgroundBlue}}>
            <Text style = {{color: COLORS.white, fontWeight: "bold", fontSize: "60px"}}>Upload Page</Text>
            <Text style = {{color: COLORS.lighterGreen, fontWeight: "bold", fontSize: "20px", textAlign: "center", position: "relative", marginTop:"50%"}}>This Page is not ready for the Beta, please check in later!</Text>
            <Text style = {{color: COLORS.backgroundBlue, marginTop:"50000%"}}>Sneaky Text</Text>
            </View>           
      </SafeAreaView>
  )
}
