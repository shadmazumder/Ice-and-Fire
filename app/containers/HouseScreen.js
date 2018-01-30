import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import ContainerList from "../components/ListComponent";
import BasicListItem from '../components/BasicListItem';
import { getAllHouses, setHouse } from '../actions/index';

class HouseScreen extends React.Component {

    renderListItem = item => {
        return <BasicListItem 
                            item={item} 
                            onPress={this.itemOnPress} 
                            title = {item.name}
                            subTitle = {item.region}
                />;
    };

    listItemKeyExtractor = item => {
        return item.url
    }

    itemOnPress = (item) => {
        this.props.setHouse(item);
        this.props.navigation.navigate('HouseDetails', item);
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
                    { textAlign: 'center' },
                    { textDecorationLine: 'none' },
                    { fontSize: 20 },
                ]}
                headerText={'The Houses'}
                items={this.props.houses}
                listItem={this.renderListItem}
                keyExtractor={this.listItemKeyExtractor}
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
        getAllHouses: getAllHouses,
        setHouse: setHouse
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