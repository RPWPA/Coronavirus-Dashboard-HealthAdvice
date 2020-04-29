import React, {useState,useEffect} from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'

async function loadingData() {
    const adviceUrl = `https://www.weforum.org/agenda/2020/03/coronavirus-covid-19-advice-health-virus-disease/`;
    const response = await fetch(adviceUrl);

    const cheerio = require('react-native-cheerio')
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);       // parse HTML string

    adv = [];
    var hasNumber = /\d/;   
    $("B").each(function (i,element){
        //console.log($("h3").html())
        
        var urlData = $(this).text()
        
        if(hasNumber.test(urlData)){
            // this === element
            adv[i] = $(this).text();
            
            // console.log($(this).text()) 
        }
        
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

            advArr !== " " ? <Text style={styles.adviceHeader}>Advice from WHO</Text> : null

            }
            {   
                advArr !== " " ? advArr.map((advice,index) => 
                
                <View key={index}>
                    
                     <Text style={styles.advices}>{advice}</Text> 
                
                </View>)
                : <Text style={styles.waiting}>Please wait while we load the newest data :)</Text>

            }
            {
                advArr !== " " ? <View><Text
                style={styles.visitSite}
                onPress={() => Linking.openURL(`https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public`)}
                >Visit the site for more info and advices</Text></View> : null
            }

        </View>
    )
}




const styles = StyleSheet.create({
    adviceContainer:{
        height:900,
        paddingLeft:10
        
    },
    adviceHeader:{
        fontSize:25,
        color:"#007bff",
        marginTop:180,
        width:211,
        borderBottomColor:"#0F0F0F",
        marginLeft:60,
        marginBottom:22
    },
    advices:{
        fontSize:20,
        marginBottom:10,
    },
    waiting:{
        marginTop:340,
        alignItems:"center",
        width:374,
        fontSize:18
    },
    visitSite:{
        color:"blue",
        fontSize:20,
    }
})


export default HealthAdvice