import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
    const [groceryList, setGroceryList ] = useState([]);

    useEffect(() => {
        fetchGroceryList();
    }, []);

    const fetchGroceryList = () => {
        axios({
            method: 'GET',
            url: '/grocery'
        }).then(response => {
            setGroceryList(response.data);
        }).catch(error => {
            console.log(error);
            alert('Something went wrong!');
        });
    }
    function addItem() {

    }
    return (
        <div className="App">
            <Header />
            <form onSubmit={addItem}></form>
            <main>
                <p>Under Construction...{JSON.stringify(groceryList)}</p>
            </main>
        </div>
    );
}

export default App;
