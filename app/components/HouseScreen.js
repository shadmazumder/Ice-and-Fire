import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';

import ContainerList from "./ListComponent";
import AvatarListItem from './AvatarListItem';
import { getAllHouses } from '../actions/index';

class HouseScreen extends React.Component {
    state = {
        headerTextAlign: 'center',
        headerText: 'The Houses',
        headerTextDecoration: 'none',
        headerTextFontSize: 20
    };

    renderListItem = item => {
        return <AvatarListItem item={item} />;
    };

    componentDidMount() {
        this.props.getAllHouses();
    }

    render() {
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