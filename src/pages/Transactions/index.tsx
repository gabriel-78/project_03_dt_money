import React, { useEffect, useState } from 'react'
import * as S from "./styles"
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import SearchForm from '../../components/SearchForm'

interface Transaction {
    category: string;
    createdAt: string;
    description: string;
    id: number;
    price: number;
    type: "income" | "outcome";
}

export const Transactions = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const loadTransactions = async () => {
        const response = await fetch("http://localhost:3333/transactions");
        const data = await response.json();

        setTransactions(data);
    }
    
    useEffect(() => {
        loadTransactions();
    },[]);

    return <div>
        <Header/>
        <Summary/>

        <S.TransactionContainer>
            <SearchForm/>

            <S.TransactionTable>
                <tbody>
                    {transactions.map((transaction) => 
                        <tr key={transaction.id}>
                            <td width="50%">{transaction.description}</td>
                            <td>
                                <S.PriceHighlight variant={transaction.type} >
                                {transaction.price}
                                </S.PriceHighlight>
                                </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    )}
                </tbody>
            </S.TransactionTable>
        </S.TransactionContainer>
    </div>
}