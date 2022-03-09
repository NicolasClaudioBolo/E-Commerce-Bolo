import React from 'react'
import {Card, CardFooter, CardHeader, CardText, CardTitle, CardBody, Button, CardImg} from 'reactstrap'
import './Footer.css'
import linkedin from '../../assets/linkedin.png'
import whatsapp from '../../assets/whatsapp.png'
import instagram from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div>
        <Card className="Footer">
            <CardBody>
              <a href='https://www.linkedin.com/in/nicol%C3%A1s-bolo-99065622b/' target='_blank'><CardImg src={linkedin} className='Icon' /></a>
              <a href='https://web.whatsapp.com/' target='_blank'><CardImg src={whatsapp} className='Icon'/></a>
              <a href='https://www.instagram.com/_nicobolo/' target='_blank'><CardImg src={instagram} className='Icon'/></a>  
            </CardBody>
            <CardFooter>
                <i>Todos los derechos reservados 2022</i>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Footer
