import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import ConnectionManager from '../services/ConnectionManager';
import AvatarListItem from './AvatarListItem';
import ContainerList from "./ListComponent";

export default class HouseScreen extends React.Component {
    
    state = {

        items: [],
        headerTextAlign: 'center',
        headerText: 'The Houses',
        headerTextDecoration: 'none',
        headerTextFontSize: 20
    };

    updateItems = items => {

        this.setState ({items: items});
    };

    renderListItem = item => {

        return <AvatarListItem item={item} />;
    };

    componentDidMount () {

        let connectionManger = new ConnectionManager ();
        connectionManger.updateHouses = this.updateItems;
        connectionManger.getAllHouses ();
    }

    render() {
        return (
            <ContainerList
                containerStyle={styles.container}
                headerStyle={[
                    styles.header,
                    {textAlign: this.state.headerTextAlign},
                    {textDecorationLine: this.state.headerTextDecoration},
                    {fontSize: this.state.headerTextFontSize},
                ]}
                headerText={this.state.headerText}
                items={this.state.items}
                listItem={this.renderListItem}
            />
        );
    }
}

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      marginTop: 20,
    },
    header: {
      flex: 0,
      marginTop: 8,
      fontWeight: 'bold',
    },
  });