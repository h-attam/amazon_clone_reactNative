import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import RecomendProduct from "../assets/recommend.jpg"

export default function Deals() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomended deal for you</Text>
      <Image source={RecomendProduct} style={styles.imgStyle}/>
      <View style={styles.bottomSection}>
        <View style={styles.row}>
            <TouchableOpacity style={styles.offDealBtn}>
                <Text style={styles.offDeal}>%18 off </Text>
            </TouchableOpacity>
            <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.discountPrice}>1,599₺</Text>
            <Text style={styles.actualPrice}>1,900₺</Text>
        </View>
        <Text style={styles.productName}>Nykaa Face Wash Gentle Skin Cleanser for all skin type</Text>
        <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.allDeals}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
       
    },
    imgStyle:{
      height:250,  
      width:"100%",
      marginVertical:10,
    },
    title:{
        fontSize:18,
        paddingHorizontal:10,
        color:"#000000",
        fontWeight:"bold",
    },
    bottomSection:{
        paddingHorizontal:10,
    },
    deal:{
        color:"#bc0201",
        fontWeight:"bold",
        marginLeft:6,
        fontSize:12,
    },
    offDeal:{
        fontSize:12,
        color:"#fff",
    },
    offDealBtn:{
        backgroundColor:"#bc0201",
        width:60,
        padding:5,
        borderRadius:3,
        alignItems:"center",
        
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
    },
    discountPrice:{
        color:"#00000",
        fontSize:16,
        marginVertical:5,
    },
    actualPrice:{
        fontSize:10,
        marginLeft:7,
        textDecorationLine:"line-through",
    },
    productName:{
    color:"#000000",
    fontSize:14,
    },
    allDeals:{
        color:"#017185",
        marginVertical:10,
        fontSize:14,

    }
})