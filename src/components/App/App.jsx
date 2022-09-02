import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container'; // Step 1: import
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';



function App() {
    const [groceryList, setGroceryList ] = useState([]);
    const [groceryItem, setGroceryItem] = useState('');
    const [groceryQuantity, setGroceryQuantity] = useState('');
    const [groceryUnit, setGroceryUnit] = useState('');
    const [groceryPurchased, setGroceryPurchased] = useState('');

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
    const addGroceryItem = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/grocery',
            data: {
                name: groceryItem,
                quantity: groceryQuantity,
                unit: groceryUnit,
            }
          }).then(response => {

            fetchGroceryList()

          }).catch(error => {
            console.log(error);
            alert('Something went wrong!');
          });

    }
    return (
    <div className="App">
            <header>
                <h1>Shopping List</h1>
            </header>
            <h2>Add an Item</h2>
            <form onSubmit={addGroceryItem}>
                <label htmlFor="item">Item:</label>
                <TextField
                    size="small"
                    required
                    id="item"
                    value={groceryItem}
                    onChange={(event) => setGroceryItem(event.target.value)} />
                <label htmlFor="quantity">Quantity:</label>
                <TextField
                    size="small"
                    required
                    id="quantity"
                    value={groceryQuantity}
                    onChange={(event) => setGroceryQuantity(event.target.value)} />
                <label htmlFor="unit">Unit:</label>
                <TextField
                    size="small"
                    required
                    id="unit"
                    value={groceryUnit}
                    onChange={(event) => setGroceryUnit(event.target.value)} />
                <Button variant='contained' type="submit">Save</Button>
            </form>
            
                <Grid container spacing={2}>
                    {
                        groceryList.map((item) => {
                            return <Grid item xs={12} sm={4} key={item.id}>
                                <Card elevation={3}>

                                    <CardContent>
                                        <Typography variant='h5'>
                                            {item.name}
                                        </Typography>
                                        <Typography variant='h3'>
                                            {item.quantity}
                                        </Typography>
                                        <Typography variant='h3'>
                                            {item.unit}
                                        </Typography>


                                    </CardContent>

                                </Card>
                            </Grid>
                        })
                    }
                </Grid>
            


    </div>
    )
}

export default App;
