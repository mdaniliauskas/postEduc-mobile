import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Telainicial from '../views/Telainicial';
import Entrar from '../views/Entrar';
import Cadastrar from '../views/Cadastrar';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
    initialRouteName = "Telainicial" 
    screenOptions = {{headerShow: false}}>
        <Stack.Screen name="Telainicial" component={Telainicial} />
        <Stack.Screen name="Entrar" component={Entrar} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
    </Stack.Navigator>
);