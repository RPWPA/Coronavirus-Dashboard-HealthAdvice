

//Might need in the future. 


import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'


async function loadingData() {
    const adviceUrl = `https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public`;
    const response = await fetch(adviceUrl);

    const cheerio = require('react-native-cheerio')
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);       // parse HTML string

    // console.log($("h3").html())

    // console.log($("h3").map(function (i,el){$(this).html()}))

    // $("h3").forEach(element => {
    //     console.log(element.html())
    // });

    // console.log($("div").find("h3").length)


    adv = [];

    $("h3").each(function (i,element){

        
        //console.log($("h3").html())
        adv[i] = $(this).text();
        
    })
    
    return adv;

    // map((h3) => ({
    //     title: $(h3).Text
    // }))
    //     //     .map((_,h3)=> ({
        //         title: $("Text", h3).text()
        // }));
    
}


class HealthAdvice extends Component {

    state = {
        adviceWHO : []
    }


    componentDidMount(){
        this.setState(async state => {
            const adviceWHO = await loadingData();
            //console.log(adviceWHO);
            return {adviceWHO}
            // console.log(advWHO)
            // console.log(adviceWHO[0])
            //return {adviceWHO}
        })
    }


    componentDidUpdate(){
        // console.log()
        console.log(this.state.adviceWHO);
        
    }

    render() {
        // console.log(this.state.adviceWHO);
        
        return (
            
            <ScrollView>
                {
                    this.state.adviceWHO.map(advice => <Text>{advice}</Text>)
                }
            </ScrollView>
        )
    }
}




export default HealthAdvice
