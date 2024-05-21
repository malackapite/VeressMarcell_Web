import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sor from "./Sor";
import Form from "react-bootstrap/Form";
import { useContext, useEffect, useState } from "react";
import AxiosContext from "./AxiosContext";

export default function Szures({szures, setPont}) {
    const {get } = useContext(AxiosContext)
    const [valasz, setValasz] = useState()

    useEffect(() =>{
        get("http://localhost:8000/api/tema").then(v=> setValasz(v))
    }, [])

    const valaszt = (e) => {
        szures(e.target.value)
        setPont(0)
    }

    if(!valasz) return null

    return (
    <Form>
      <Row>
        <Col>
          <Form.Select className="mb-3" onChange={(e) => valaszt(e)}>
            <option selected disabled>Válasz témát!</option>
            {
                valasz.map((v, i) => <option key={i} value={v.id} >{v.temanev}</option>)
            }
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
}
