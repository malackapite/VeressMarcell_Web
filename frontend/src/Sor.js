import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Sor({ adat, addPont }) {
  const [check, setCheck] = useState(-1);
  const [lock, setlock] = useState(false);

  const ellenoriz = (e) => {
    if (!lock) {
      if (e.target.value == adat.magyar) {
        setCheck(1);
        addPont();
        setlock(true);
      } else {
        setCheck(0);
      }
    }
  };
  
  return (
    <Row className="pt-1 pb-1" style={{ border: "1px solid #bbbbbb" }}>
      <Col sm={12} md={4}>
        {adat.angol}
      </Col>
      <Col sm={12} md={4}>
        <Form.Control onChange={(e) => ellenoriz(e)}></Form.Control>
      </Col>
      <Col sm={12} md={4}>
        {check == 1 ? "✅" : check == 0 ? "❌" : ""}
      </Col>
    </Row>

    // <tr>
    //   <td>{adat.angol}</td>
    //   <td>
    //     <Form.Control onChange={e => ellenoriz(e)}>
    //     </Form.Control>
    //   </td>
    //   <td>{check == 1 ? "✅" : check == 0? "❌" : ""}</td>
    // </tr>
  );
}

export default Sor;
