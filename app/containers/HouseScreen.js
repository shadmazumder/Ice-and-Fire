import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import ContainerList from "../components/ListComponent";
import AvatarListItem from '../components/AvatarListItem';
import { getAllHouses } from '../actions/index';

class HouseScreen extends React.Component {
    state = {
        headerTextAlign: 'center',
        headerText: 'The Houses',
        headerTextDecoration: 'none',
        headerTextFontSize: 20
    };

    renderListItem = item => {
        return <AvatarListItem item={item} onPress = {this.itemOnPress}/>;
    };

    itemOnPress = (item) => {
        console.log('pinged me !!!')
        console.log(item);

        // this.props.navigation.navigate('DetailsScreen', item);
    }

    componentDidMount() {
        this.props.getAllHouses();
    }

    render() {
        if (this.props.houses.length == 0) {
            return (
                <Spinner
                    visible={true}
                    textContent={"Loading..."}
                    textStyle={{ color: '#FFF' }}
                />
            )
        }
        return (
            <ContainerList
                containerStyle={styles.container}
                headerStyle={[
                    styles.header,
                    { textAlign: this.state.headerTextAlign },
                    { textDecorationLine: this.state.headerTextDecoration },
                    { fontSize: this.state.headerTextFontSize },
                ]}
                headerText={this.state.headerText}
                items={this.props.houses}
                listItem={this.renderListItem}
            />
        );
    }
}

function mapToStateProps(state) {
    return {
        houses: state.houses
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllHouses: getAllHouses
    }, dispatch);
}

const styles = StyleSheet.create({
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


export default connect(mapToStateProps, mapDispatchToProps)(HouseScreen);