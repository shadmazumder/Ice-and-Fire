import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import ContainerList from './ListComponent';
import BasicListItem from './BasicListItem';
// import AvatarListItem from './AvatarListItem'

export default class Main extends Component {

    state = {
        headerTextAlign: 'center', //`left`,
        headerText: 'Header Goes here',
        headerTextDecoration: 'none', //'underline',
        headerTextFontSize: 18 //20
    }

    renderListItem = (item)=>{

        return(
            <BasicListItem item = {item}/>
        )

        // return(
        //     <AvatarListItem item = {item}/>
        // )
    }

    render() {
        return (
            <ContainerList 
                containerStyle={styles.container} 
                headerStyle = {[
                    styles.header, 
                    {textAlign: this.state.headerTextAlign}, 
                    {textDecorationLine: this.state.headerTextDecoration},
                    {fontSize: this.state.headerTextFontSize}
                ]}
                headerText =  {this.state.headerText}
                listItem = {this.renderListItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    header: {
        flex: 0,
        marginTop: 8,
        fontWeight: 'bold'
    }
});

