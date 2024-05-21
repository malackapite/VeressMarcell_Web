import React, { useContext, useEffect, useState } from 'react'
import AxiosContext from './AxiosContext'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sor from './Sor';
import Szures from './Szures';

function Oldal() {
    const {get } = useContext(AxiosContext)
    const [valasz, setValasz] = useState()
    const [pont, setPont] = useState(0)
    useEffect(() =>{
        get("http://localhost:8000/api/szavak").then(v=> setValasz(v))
    }, [])

    const szures = (id) =>{
        setValasz()
        get("http://localhost:8000/api/szavak/"+id).then(v=> setValasz(v))
    }

    const addPont = ()=> {
        setPont(pont+1)
    }
    if(!valasz) return null

  return (
    <Container>
      <h1>Szavak</h1>
      <Szures szures={szures} setPont={setPont}></Szures>
      <Container>
      <Row style={{border:"1px solid #bbbbbb"}} className='pb-3'>
        <Col sm={4} className='d-md-block d-none'><b>ANGOL</b></Col>
        <Col sm={4} className='d-md-block d-none'>
            <b>MAGYAR</b>
        </Col>
        <Col  sm={4} className='d-md-block d-none'>visszajelzés</Col>
      </Row>
      {
        valasz.map((v,i) => <Sor key={i} adat={v} addPont={addPont}></Sor>)
      }
      </Container>
      <h2>Pontszám: {pont}</h2>
    </Container>
  )
}

export default Oldal
