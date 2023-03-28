import React from 'react'
import pict from '../../assets/doctor.png'
import { Container } from '../PageArtikel/PageArtikelStyle'
import { Form } from './EditProfilStyle'

const EditProfil = () => {

    interface IProfile {
        id: number;
        input: string;
        name: string;
        type?: string;
        placeholder?: string;
        option?: any;
    }

    const profileName = [
        {
            id: 1,
            input: "name",
            name: "First Name",
            type: "text",
            placeholder: "contoh: Evan Moris"
        },
        {
            id: 2,
            input: "name",
            name: "Last Name",
            type: "text",
            placeholder: "contoh: Cheahn"
        },
    ]

    const profile = [
        {
            id: 1,
            input: "email",
            name: "Email Address",
            type: "email",
            placeholder: "contoh: evansmoris@gmail.com"
        },
        {
            id: 2,
            input: "address",
            name: "Address",
            type: "text",
            placeholder: "contoh: Jl.Sukses Selalu"
        },
        {
            id: 3,
            input: "phone",
            name: "Contact Number",
            type: "number",
            placeholder: "contoh: +6281282818292"
        },
    ]

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

    const profilePass = [
        {
            id: 1,
            input: "password",
            name: "Password",
            type: "password"
        },
        {
            id: 2,
            input: "re-password",
            name: "Re-type Password",
            type: "password"
        },
    ]
  return (
    <>
        <Container>
            <Form>
                <div>
                    <h2>PROFILE</h2>
                    <img src={pict}/>
                </div>
                <form>
                    <div className='row'>
                        {profileName.map((i: IProfile) => (
                        <div className="inpWrap" key={i.id}>
                            <label htmlFor={i.input}>{i.name}</label>
                            <input type={i.type} id={i.input} placeholder={i.placeholder} />
                        </div>
                        ))}
                    </div>
                    {profile.map((i: IProfile) =>(
                    <div className="inpWrap" key={i.id}>
                        <label htmlFor={i.input}>{i.name}</label>
                        <input type={i.type} id={i.input} placeholder={i.placeholder} />
                    </div>
                    ))}
                    <div className='row'>
                        {profilePlace.map((i: IProfile) => (
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
                    {profilePass.map((i: IProfile) =>(
                    <div className="inpWrap" key={i.id}>
                        <label htmlFor={i.input}>{i.name}</label>
                        <input type={i.type} id={i.input} />
                    </div>
                    ))}
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