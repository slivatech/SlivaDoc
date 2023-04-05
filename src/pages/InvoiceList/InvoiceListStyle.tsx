import styled from "styled-components";

export const TableCustom = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50px 100px repeat(auto-fit, minmax(125px, 1fr));
    gap: 1rem;

    .row {
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
    }

    .name {
        display: flex;
        align-items: center;
        column-gap: 15px;
        
        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            object-fit: cover;
        }
    };

    .list-icon {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }

`