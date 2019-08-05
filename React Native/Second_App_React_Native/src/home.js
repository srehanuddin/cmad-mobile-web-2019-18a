import React from 'react';

import {View, Text, Button} from 'react-native'
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
    render(){
        return(
            <View>
                <Text>This is Home Page</Text>
                <Button
                    title="Go to about page"
                    onPress={()=> {Actions.about()}}
                />
            </View>
        )
    }
}

export default Home;