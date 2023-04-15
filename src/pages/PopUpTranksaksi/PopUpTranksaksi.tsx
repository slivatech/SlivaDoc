import React, { useState } from 'react';
import styled from 'styled-components';
import topUp from '../../assets/icon/topUp.svg';
import tarik from '../../assets/icon/tarik-tunai.svg';
import { AppContainer, Card } from './PopUpTranksaksiStyle';
import iconMoney from "../../assets/icon/money.svg";


  

const PopUpTranksaksi: React.FC = () => {
  interface ICard {
    total: any;
    title: string;
    btn: any;
  }
  
  const jobAp = [
    {
        id: 1,
        total: 16,
        title: "Total Transaksi",
        btn : [
            {
                text : "View Detail"
            },
        ]
        
    },
    {
        id: 2,
        total: 59,
        title: "Total Konsultasi",
        btn : [
            {
                text : "View Detail"
            },
        ]
    },
    {
        id: 3,
        total: "Rp.2.000.000",
        title: "Saldo",
        btn : [
            {
                text : "TopUp",
                icon : topUp
            },
            {
                text : "Tarik Tunai",
                icon : tarik
            }
        ]
    }
  ]
  function Cards (props:ICard) {
   return (
    <Card >
        <div className='text'>
            <img src={iconMoney}/>
            <div>
                <h1>{props.total}</h1>
                <span>{props.title}</span>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', gap: '8px'}}>
            {props.btn.map((button: any) =>
                <button className='btn-card'>
                    {button.text}
                    {button.icon ? 
                        <img src={button.icon}/> : ''
                    }
                </button> 
            )}
        </div>
    </Card>
   ) 
  }

  return (
    <AppContainer>
       <div style={{display: 'flex', gap: '33px'}}>
                {jobAp.map((i: ICard) => (
                    <Cards 
                        total={i.total} 
                        title={i.title} 
                        btn={i.btn}
                    />
                ))}
            </div>
    </AppContainer>
  );
}

export default PopUpTranksaksi;
