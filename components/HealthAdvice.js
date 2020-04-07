import React, {useState,useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'

async function loadingData() {
    const adviceUrl = `https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public`;
    const response = await fetch(adviceUrl);

    const cheerio = require('react-native-cheerio')
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);       // parse HTML string


    adv = [];

    $("h3").each(function (i,element){

        //console.log($("h3").html()) 
        // this === element
        adv[i] = $(this).text();
        
    })
    
    return adv;
    
}



const HealthAdvice = () => {

    
    const [advArr, setAdvArr] = useState(" ")

    useEffect(() => {

        const fetchData = async () => {
            const results = await loadingData()
            setAdvArr(results);
        }
        
        fetchData()

    },[])

    return (
        <View style={styles.adviceContainer}>

            {

            advArr !== " " ? <Text style={styles.adviceHeader}>Advice from WHO:</Text> : null

            }
            {   
                advArr !== " " ? advArr.map((advice,index) => 
                
                <View key={index}>
                    
                     <Text style={styles.advices}>{index + 1}) {advice}.</Text> 
                
                </View>) 
                : <Text style={styles.waiting}>Please wait while we load the newest data :)</Text>
            }

        </View>
    )
}




const styles = StyleSheet.create({
    adviceContainer:{
        height:900,
        fontFamily:"Roboto",
        backgroundColor:"#54002A",
        paddingLeft:10
        
    },
    adviceHeader:{
        fontSize:25,
        marginTop:180,
        borderBottomWidth:3,
        width:211,
        color:"#00A0A0",
        borderBottomColor:"#0F0F0F",
        marginBottom:22
    },
    advices:{
        fontSize:20,
        marginBottom:10,
        color:"#00A0A0",
    },
    waiting:{
        fontFamily:"Roboto",
        marginTop:340,
        color:"#00A0A0",
        alignItems:"center",
        width:374,
        fontSize:18
    }
})


export default HealthAdvice