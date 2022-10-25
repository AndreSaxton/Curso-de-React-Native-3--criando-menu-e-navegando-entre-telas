import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Produtor from './Produtor'
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({ topo: Topo, melhoresProdutores = true }) {
    const navigation = useNavigation();

    const [titulo, lista] = useProdutores();

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{ titulo }</Text>
        </>
    }

    // return <Text>{ titulo }</Text>
    return <FlatList 
        data={lista}
        renderItem={({ item }) => <Produtor {...item}
        aoPressionar={() => {
            navigation.navigate('Produtor');
        }}
        />}
        keyExtractor={({nome}) => nome }
        ListHeaderComponent={TopoLista}
         />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
})