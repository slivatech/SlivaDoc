import React, {useState} from "react";
import BarHelper from "./BarHelper";
import BaseButton from "../Common/Buttons/BaseButton";
import { BottomNav, BottomWrap, DropdownWrap, Header, Line, LinkWrap, Logo, MenuWrap, Overlay, TopNav } from "./styled";
import Dropdown from "../Common/Dropdown/Dropdown";

const navigation = [
    {
        id: 1,
        name: 'Cari Dokter'
    },
    {
        id: 2,
        name: 'Tanya Dokter'
    },
    {
        id: 3,
        name: 'Artikel Kesehatan'
    },
    {
        id: 4,
        name: 'SlivaProteksi'
    },
    {
        id: 5,
        name: 'SlivaShop'
    },
    {
        id: 6,
        name: 'Animal Events'
    },
    {
        id: 7,
        name: 'Animal Academies'
    },
]

const language = [
    {
        value: 'Indonesia'
    },
    {
        value: 'English'
    },
]

interface NavbarProps {
    width: number
}

const Navbar: React.FC<NavbarProps> = ({width}) => {
    const [overlay, setOverlay] = useState(false)
    const [lang, setLang] = useState('Indonesia')

    React.useEffect(() => {
        console.log({width})
    }, [width])

    return(
        <>
            <Header>
                <TopNav>
                    <Logo>
                        {width < 767 && (
                            <img 
                                src="./assets/Menu.svg" alt="" 
                                className="toggle" 
                                onClick={() => setOverlay(true)}
                            />
                        )}
                        <img src="./assets/logo.svg" alt="Logo" className="Logo" />
                    </Logo>
                    <BottomWrap>
                        <BaseButton 
                            text="Masuk"
                            textColor="#fff"
                            fontSize="14px"
                            color="#127fff"
                            radius="5px"
                            width='80px'
                            height='32px'
                            // onClick={() => {alert('ressssss')}}
                            // style={{background:'linear-gradient(180deg, #127FFF 99.92%, rgba(23, 189, 252, 0) 100%)'}}
                        />
                        {width > 450 && (
                            <BaseButton 
                                text="Download Aplikasi"
                                textColor="#fff"
                                fontSize="14px"
                                color="#127fff"
                                radius="5px"
                                width='150px'
                                height='32px'
                                // onClick={() => {alert('ressssss')}}
                            />
                        )}
                    </BottomWrap>
                </TopNav>
                <BottomNav>
                    <MenuWrap>
                        {navigation?.map((data) => (
                            <LinkWrap to={``} key={data.id}>
                                {data.name}
                            </LinkWrap>
                        ))}
                    </MenuWrap>
                    <DropdownWrap>
                        <Dropdown
                            options={language}
                            border='none'
                            fontSize="15px"
                            icon={
                                lang === 'Indonesia'? 
                                <img src="./assets/indonesia.png" alt="flag" className="flag"/> :
                                <img src="./assets/uk.png" alt="flag" className="flag"/>
                            }
                            value={lang}
                            setValue={setLang}
                        />
                    </DropdownWrap>
                </BottomNav>
            </Header>

            {width < 768 && overlay && (
                <Overlay>
                    {/* <Wrapper></Wrapper> */}
                    <div className="close" onClick={() => setOverlay(false)}>
                        <img src="./assets/close.png" alt="close" />
                    </div>
                    <Line />
                    <div className="contentWrap">
                        {navigation?.map((data) => (
                            <LinkWrap to={``} className='content' key={data.id}>
                                {data.name}
                            </LinkWrap>
                        ))}
                    </div>
                    <div className="bttnWrap">
                        <BaseButton 
                            text="Download Aplikasi"
                            textColor="#fff"
                            fontSize="16px"
                            color="#127fff"
                            radius="5px"
                            width='100%'
                            height='40px'
                            // onClick={() => {alert('ressssss')}}
                        />
                    </div>
                </Overlay>
            )}
            <BarHelper />
        </>
    )
}

export default Navbar