import React, { useState } from 'react'
import pict from '../../assets/doctor.png'
import iconMoney from '../../assets/icon/money.svg'
import topUp from '../../assets/icon/topUp.svg'
import tarik from '../../assets/icon/tarik-tunai.svg'
import { Container } from '../PageArtikel/PageArtikelStyle'
import { Card, Cards, Form } from './EditProfilStyle'
import Dropdown from '../../components/Common/Dropdown/Dropdown'
import BaseButton from '../../components/Common/Buttons/BaseButton'
import consult from '../../assets/consult.png'
import payment from '../../assets/payment-successful.png'
import wallet from '../../assets/money-wallet.png'
import Navbar from '../../components/Navbar/Navbar'

interface EditProfilProps {
    width: number;
}

interface IProfile {
    input: string;
    name: string;
    type: string;
    placeholder?: string;
}

interface ICard {
    total: any;
    title: string;
    btn?: any;
    image: string
}
const EditProfil:  React.FC<EditProfilProps> = ({width}) => {
    const [place, setPlace] = useState('select one')

    const profilePlace = [
        {
            id: 1,
            place: ['Semarang', 'Surabaya', 'Surakarta'] 
        },
        {
            id: 2,
            place: ['Indonesia', 'India', 'Italy']
            
        },
    ]

    const countries = [
        {
            value: 'Indonesia'
        },
        {
            value: 'India'
        },
        {
            value: 'Italy'
        },
    ]
    const cities = [
        {
            value: 'Semarang'
        },
        {
            value: 'Surabaya'
        },
        {
            value: 'Surakarta'
        },
    ]

    const jobAp = [
        {
            id: 1,
            total: 16,
            title: "Total Transaksi",
            image: payment,
            
        },
        {
            id: 2,
            total: 59,
            title: "Total Konsultasi",
            image: consult,
        },
        {
            id: 3,
            total: "Rp.2.000.000",
            title: "Saldo",
            image: wallet,
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

    function Input (props: IProfile) {
        return (
            <div className="inpWrap">
                <label htmlFor={props.input}>{props.name}</label>
                <input type={props.type} id={props.input} placeholder={props.placeholder} />
            </div>
        )
    }


  return (
    <>
        <Navbar width={width} />
        <Container>
            <Cards>
                <Card>
                    <img src={payment} alt='' width='40%'/>
                    <div className='text'>
                        <h1>16</h1>
                        <span>Total Transaksi</span>
                    </div> 
                </Card>
                <Card>
                    <img src={consult} alt='' width='30%'/>
                    <div className='text'>
                        <h1>16</h1>
                        <span>Total Konsultasi</span>
                    </div> 
                </Card>
                <Card>
                    <img src={wallet} alt='' width='30%'/>
                    <div>
                        <div className='text'>
                            <h1>Rp. 2.000.000</h1>
                            <span>Saldo</span>
                        </div>
                        <div style={{display: 'flex', justifyContent:'flex-end', gap: '8px'}}>
                            <BaseButton 
                                text="TopUp"
                                iconEnd={
                                    <img src={topUp} alt="" width={12} height={10} />
                                }
                                textColor="#fff"
                                color="#127FFF"
                                fontSize="10px"
                                radius="5px"
                                width="50%"
                                height="28px"
                                gap="5px"
                            />
                            <BaseButton 
                                text="Tarik Tunai"
                                iconEnd={
                                    <img src={tarik} alt="" width={12} height={10} />
                                }
                                textColor="#fff"
                                color="#127FFF"
                                fontSize="10px"
                                radius="5px"
                                width="57%"
                                height="28px"
                                gap="5px"
                            />
                        </div>
                    </div> 
                </Card>
            </Cards>
            <Form>
                <div>
                    <h2>Update</h2>
                    <img src={pict} alt=''/>
                </div>
                <form>
                    <div className='row'>
                        <Input 
                            input='name' 
                            name='First Name' 
                            type='text' 
                        />
                        <Input 
                            input='name' 
                            name='Last Name' 
                            type='text' 
                        />
                    </div>
                    <Input 
                        input='email' 
                        name='Email' 
                        type='email' 
                    />
                    <div className='row'>
                        <div className='inpWrap'>
                            <label>City</label>
                            <Dropdown
                                options={cities}
                                border="2px solid #FFE9E9"
                                backgroundColor='#fff'
                                fontSize="14px"
                                width='100%'
                                height='40px'
                                value={place}
                                setValue={setPlace}
                            />
                        </div>
                        <div className='inpWrap'>
                            <label>State</label>
                            <Dropdown
                                options={countries}
                                border="2px solid #FFE9E9"
                                fontSize="14px"
                                width='100%'
                                height='40px'
                                value={place}
                                setValue={setPlace}
                            />
                        </div>     
                    </div>
                    <Input input='password' name='Password' type='password' />
                    <Input input='repassword' name='Re-Type Password' type='password' />
                    <div style={{margin: '44px 0'}} className='row'>
                        <BaseButton
                            text="Cancel"
                            textColor="#0D6EFD"
                            color="#FFE9E9"
                            // fontSize="24px"
                            radius="5px"
                            height="44px"
                            width="16%"
                            outline={true}
                        />
                        <BaseButton
                            text="Save"
                            textColor="#fff"
                            color="#127FFF"
                            // fontSize="24px"
                            radius="5px"
                            height="44px"
                            width="16%"
                        />
                    </div>
                    
                </form>
            </Form>
        </Container>
    </>
  )
}

export default EditProfil