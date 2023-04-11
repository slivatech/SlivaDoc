import React from 'react'
import pict from '../../assets/doctor.png'
import iconMoney from '../../assets/icon/money.svg'
import topUp from '../../assets/icon/topUp.svg'
import tarik from '../../assets/icon/tarik-tunai.svg'
import { Container } from '../PageArtikel/PageArtikelStyle'
import { Card, Form } from './EditProfilStyle'


const EditProfil = () => {
    interface IProfile {
        input: string;
        name: string;
        type: string;
        placeholder?: string;
    }

    interface ICard {
        total: any;
        title: string;
        btn: any;
    }

    const profilePlace = [
        {
            id: 1,
            input: "city",
            name: "City",
            option: ['Semarang', 'Surabaya', 'Surakarta']
        },
        {
            id: 2,
            input: "state",
            name: "State",
            option: ['Indonesia', 'India', 'Italy']
        },
    ]

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
        <Container>
            <div style={{display: 'flex', gap: '33px'}}>
                {jobAp.map((i: ICard) => (
                    <Cards 
                        total={i.total} 
                        title={i.title} 
                        btn={i.btn}
                    />
                ))}
            </div>
            <Form>
                <div>
                    <h2>PROFILE</h2>
                    <img src={pict}/>
                </div>
                <form>
                    <div className='row'>
                        <Input input='name' name='First Name' type='text' placeholder='contoh: Evan Moris' />
                        <Input input='name' name='Last Name' type='text' placeholder='contoh: Cheahn' />
                    </div>
                    <Input input='email' name='Email' type='email' placeholder='contoh: evansmoris@gmail.com' />
                    <div className='row'>
                        {profilePlace.map((i:any) => (
                            <div className='inpWrap' key={i.id}>
                                <label htmlFor={i.input}>{i.name}</label>
                                <select name={i.input}>
                                    {i.option.map((i: any) => (
                                        <option value={i}>{i}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                    <Input input='password' name='Passrowd' type='password' />
                    <Input input='repassword' name='Re-Type Passrowd' type='password' />
                    <div style={{margin: '44px 0'}}>
                        <button className='btn-cancel'>Cancel</button>
                        <button className='btn-save'>Save</button>
                    </div>
                </form>
            </Form>
        </Container>
    </>
  )
}

export default EditProfil