/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row, Col, CardBody, Button,
} from "reactstrap";
import {useState} from "react";


class Turno {
  constructor(time, stand, number) {
    this.time = time;
    this.stand = stand;
    this.number = number
  }
}

const TableRow  = ({turnList}) => {
  return (
    <>
      {turnList.map(turno =>
        <tbody>
        <tr>
          <td>
            {turno.time}
          </td>
          <td>
            <Col className="col-auto">
              <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                <i className="circle" />
                <span style={{ position: "absolute" }}>{turno.stand}</span>
              </div>
            </Col>
          </td>
          <td>
            {turno.number}
          </td>
        </tr>
        </tbody>
        )
      }
    </>
  );
}

const STANDS1 = ["S1", "S2", "S3", "S4"];
const STANDS2 = ["S5", "S6", "S7", "S8"];



const Header = ({turnList, useTurnList, actualTurn, useActualTurn}) => {
  console.log("turnList",turnList)
  const Funcion = (number) => {
    let date = new Date()
    let turno = new Turno(date.getHours() + ":" + date.getMinutes() ,number, actualTurn )
    useActualTurn(actualTurn + 1)
    turnList.unshift(turno)
    useTurnList(turnList)
    console.log(turnList)
  }
  const cards1 = STANDS1.map(number =>
      <Col lg="6" xl="3">
        <Card className="card-stats mb-4 mb-xl-0">
          <CardBody>
            <Row>
              <Button type="button" class="btn btn-info" onClick = {() => {
                Funcion(number)
              }}>
                Siguiente
              </Button>
              <Col className="col-auto">
                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                  <i className="circle" />
                  <span style={{ position: "absolute" }}>{number}</span>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
  );
  const cards2 = STANDS2.map(number =>
      <Col lg="6" xl="3">
        <Card className="card-stats mb-4 mb-xl-0">
          <CardBody>
            <Row>
              <Button type="button" class="btn btn-info" onClick = {() => {
                Funcion(number)
              }} >
                Siguiente
              </Button>
              <Col className="col-auto">
                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                  <i className="circle" />
                  <span style={{ position: "absolute" }}>{number}</span>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
  );
  return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                {cards1}
              </Row>
              <Row>
                <p></p>
              </Row>
              <Row>
                {cards2}
              </Row>
            </div>
          </Container>
        </div>
      </>
  );
};




const Tables = () => {
  const[turnList, useTurnList]  = useState([])
  const[actualTurn, useActualTurn]  = useState(1)
  return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container className="mt--7" fluid>
            <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">Turnos</h3>
                  </CardHeader>
                    <Table className="align-items-center table-flush " responsive style={{'lenght': '300px','overflow':'scroll'}}  >
                      <thead className="thead-light">
                      <tr>
                        <th scope="col">Hora</th>
                        <th scope="col">Stand</th>
                        <th scope="col">Turno</th>
                      </tr>
                      </thead>
                      <TableRow turnList={turnList}></TableRow>
                    </Table>
                </Card>
              </div>
            </Row>
          </Container>
        </div>
        <Header turnList={turnList} useTurnList={useTurnList} actualTurn={actualTurn} useActualTurn={useActualTurn}/>
      </>
  );
};


export default Tables;
