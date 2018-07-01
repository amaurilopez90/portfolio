import styled from 'styled-components';

//Create a Image button tag that comes with a hover scale animation 
//that scales the image thumbnail within its container when you hover over it
export const ImageButton = styled.div`
    cursor: pointer;
    overflow: hidden;
    display: inline-block;

    & > img {
        transition: transform .3s;
    }
    
    
    &:hover{
        & > img {
            transform: scale(1.2);
        }
    }
    
`;