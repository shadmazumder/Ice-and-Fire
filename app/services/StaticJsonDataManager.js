import jsonData from '../resources/data.json'
import React, { Component } from 'react';

export default class StataticJsonDataManager{
    getHouses(){
        console.log(jsonData.houses)
        return jsonData.houses;
    }

    getBooks(){
        return jsonData.books
    }
}
