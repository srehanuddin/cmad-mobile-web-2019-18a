import React from 'react';

import {View, Text, Button} from 'react-native'
import { Actions } from 'react-native-router-flux';

class About extends React.Component {
    render(){
        return(
            <View>
                <Text>This is About Page</Text>
                <Button
                    title="Go to home page"
                    onPress={()=> {Actions.home()}}
                />
            </View>
        )
    }
}

export default About;