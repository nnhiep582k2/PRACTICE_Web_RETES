import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsYoutube } from 'react-icons/bs';
import { FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { Button } from './Button';

const FooterWrapper = styled.div`
    width: 100%;
    height: auto;
    background: #000d1a;
    color: white;
    padding: 80px 50px;
    user-select: none;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const FooterHeading = styled.div`
    width: 50%;
    h3 {
        margin-bottom: 10px;
    }
    ul {
        list-style: none;
        li {
            padding: 10px 0;
            cursor: pointer;
            a {
                color: white;
                text-decoration: none;

                &:hover {
                    color: #ddd;
                }
            }
        }
    }
    
    @media screen and (max-width: 768px) {
        text-align: center;
        margin-top: 30px;
    }
`;

const ColumnLeft = styled.div`
    width: 60%;
    overflow: hidden;
    h1 {
        font-size: 2.6rem;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        h1 {
            text-align: center;
            margin-bottom: 20px;
        }
    }
`;

const ColumnRight = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const FooterLeft = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    a {
        color: #cd853f;
        font-size: 22px;
        padding: 0 14px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;

const FooterRight = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
    a {
        background-color: #CD853F;
        color: #000d1a;
        font-weight: bold;
    }
    
    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;


function Footer() {
  return (
    <FooterWrapper>
        <Row>
            <ColumnLeft>
                <h1>Let's find <p>your Dream Home</p></h1>
            </ColumnLeft>
            <ColumnRight>
                <FooterHeading>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <Link to='/about' >FAQ</Link>
                        </li>
                        <li>
                            <Link to='/contact' >Support</Link>
                        </li>
                        <li>
                            <Link to='/contact' >Question</Link>
                        </li>
                    </ul>
                </FooterHeading>
                <FooterHeading>
                    <h3>Offices</h3>
                    <ul>
                        <li>
                            <Link to='/home' >United States</Link>
                        </li>
                        <li>
                            <Link to='/home' >Europe</Link>
                        </li>
                        <li>
                            <Link to='/home' >Vietnam</Link>
                        </li>
                    </ul>
                </FooterHeading>
            </ColumnRight>
        </Row>
        <Row>
            <FooterLeft>
                <a href='https://www.youtube.com/channel/UCzKjcLlu8lgoIsh1o9qkj_A' 
                    target='_blank'
                    rel="noreferrer"
                ><BsYoutube /></a>
                <Link to='/contact' ><FaInstagram /></Link>
                <a href='https://www.facebook.com/nnhiep582/' 
                    target='_blank'
                    rel="noreferrer"
                ><FaFacebookSquare /></a>
                <Link to='/contact' ><FaLinkedin /></Link>
            </FooterLeft>
            <FooterRight>
                <Button to='contact' primary='false'>Let's chat</Button>
            </FooterRight>
        </Row>
    </FooterWrapper>
  )
}

export default Footer