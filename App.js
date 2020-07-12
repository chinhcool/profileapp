import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// Color define================================ 
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const BG_COLOR = "#F9F8FF";

// Image define=============================
const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  // { id: 7, imgSource: require('./assets/7.jpg') },
  // { id: 8, imgSource: require('./assets/8.jpg') },
  
];
// ===================================================
const centerImgData = Math.floor(imgData.length / 2);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <View style={styles.preHeader}>
        <Ionicons name="ios-arrow-back" size={40} color="black" />
        <Entypo name="dots-two-vertical" size={24} color="black" />
        <Entypo name="dots-two-vertical" size={24} color="black" />
        </View> */}
        <View style={styles.avatarWrapper}>
           <Image
              style={styles.avatar}
              source={require('./assets/avt.jpg')}
          />
        </View>
       
        <View style={styles.userInfo}>
          <Text style={styles.name}>Pham Chinh</Text>
          <Text style={styles.job}>Developer</Text>
          <View style={styles.btnWrapper}>
            <TouchableOpacity>
              <View style={[styles.btn,styles.followBtn]}>
              <Text style={styles.btnLabel}>Follow</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.btn,styles.sendBtn]}>
              <Feather name="send" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.countArea}>
        <View> 
          <Text style={styles.countText}>2808</Text>
          <Text style={styles.countLabelText}>Photos</Text>
        </View>
        <View> 
          <Text style={styles.countText}>1109</Text>
          <Text style={styles.countLabelText}>Followers</Text>
        </View>
        <View> 
          <Text style={styles.countText}>1</Text>
          <Text style={styles.countLabelText}>Following</Text>
        </View>
      </View>
      <View style={styles.imagesArea}>
        <View>
          {
            imgData.slice(0, centerImgData).map(item => {
              return <Image style={styles.image} source ={item.imgSource} key={item.id}/>
            })
          }
        </View>
        <View>
          {
            imgData.slice(centerImgData).map(item => {
              return <Image style={styles.image} source ={item.imgSource} key={item.id}/>
            })
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  
  header: {
    flex: 0.3,
    backgroundColor: BG_COLOR,
    flexDirection: 'row',
  },

  // preHeader:{
  //   flex: 1,
  //   backgroundColor: "red",
  //   flexDirection: "row",
  // },

  avatarWrapper: {
    flex: 0.4,
    justifyContent:'center',
    alignItems: 'center',
    
  },
  userInfo: {
    flex: 0.6,
    justifyContent: 'center',
    // fontWeight: 'bold'
  },
  btn: {
    height:35, //30
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // Shadowing
    shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  btnWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  followBtn: {
    width:120,
    backgroundColor:FOLLOW_COLOR,
  },
  sendBtn: {
    width:60,
    backgroundColor:SEND_MESSAGE_COLOR,
    marginLeft: 10,
  },
  btnLabel: {
   color: 'white',
   fontSize: 16
  },
  countArea: {
    flex: 0.15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  countText: {
    fontSize: 20,
    fontWeight:"bold",
    // justifyContent: "center",
    // alignItems: "center",
    
    
  },
  countLabelText: {
    fontSize: 15,
    fontWeight:"500",
    color: "gray"
  },
  imagesArea: {
    flex: 0.6,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    
    
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
     marginTop:5,
  },
  job: {
    fontSize: 15,
    color: "gray",
  },

image: {
  width: 160,
  height: 150,
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 10,
  borderRadius: 20,
  // justifyContent:"center",
},

});
