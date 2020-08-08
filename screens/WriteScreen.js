import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class WriteScreen extends React.Component {
    render(){
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.text}>WRITE YOUR STORY HERE!!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: "red",
        backgroundColor: "yellow",
        fontWeight: "bold",
        fontSize: 25,
    }
})