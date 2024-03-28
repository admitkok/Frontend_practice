"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { List } from 'react-virtualized';
import {Skeleton} from "@nextui-org/react";
import CocktailItem from "../components/CocktailItem.tsx";

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    // Add more properties as needed
}

const API_KEY = '1';

const CocktailMenu: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get<{ drinks: Cocktail[] }>(
                `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=${searchTerm}`
            );
            setCocktails(response.data.drinks || []);
        } catch (error) {
            console.error('Error fetching cocktails:', error);
        } finally {
            setLoading(false);
        }
    };

    const rowRenderer = ({ index, key, style }: any) => {
        const cocktail = cocktails[index];
        return (
            <div key={key} style={style}>
                <CocktailItem cocktail={cocktail}/>
            </div>
        );
    };

    return (
        <div style={{width: "100vw",display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding: "100px"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent:"center"}}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search cocktails..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div style={{ height: '100%', width: '100%', marginTop:"20px", marginBottom: "20px", display:"flex", flexDirection: "column", justifyContent:"center"}}>
                {loading ? (
                    <Skeleton />
                ) : (
                    cocktails.length === 0 ? (
                        <h1>No cocktails found</h1>
                    ) : (
                        <List
                        width={1200}
                        height={750}
                        rowCount={cocktails.length}
                        rowHeight={400}
                        rowRenderer={rowRenderer}
                        direction="vertical"
                    />
                    )
                )}
            </div>
        </div>
    );
};

export default CocktailMenu;
