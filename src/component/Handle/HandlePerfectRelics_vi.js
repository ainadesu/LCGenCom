import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Select from 'react-select';
import PerfectRelics from '../data/vi/Perfect-relics.json';

function HandlePerfectRelics_en() {
  const [selectedRelic, setSelectedRelic] = useState(null);

  const options = PerfectRelics.map(relic => ({
    value: relic.name,
    label: relic.name
  }));

  const handleChange = (selectedOption) => {
    const relic = PerfectRelics.find(r => r.name === selectedOption.value);
    setSelectedRelic(relic);
  };

  return (
    <Container className="mt-4">
      <Row style={{width: '80%'}}>
        <Col>
            <div className="title">
              <div>
                <h2>Di Vật Hoàn Hảo</h2>
              </div>
            </div><br/>
            <p className='name-of-selection'>Nhân Vật: </p>
            <Select className='select' options={options} onChange={handleChange} />
            {selectedRelic && (
              <Card className="mt-4">
                <Card.Body>
                  <Card.Text>
                    <strong>Dây Liên Kết:</strong> {selectedRelic.relics1} <br />
                    <strong>Quả Cầu Vị Diện:</strong> {selectedRelic.relics2} <br />
                    <strong>Chân:</strong> {selectedRelic.relics3} <br />
                    <strong>Thân:</strong> {selectedRelic.relics4} <br />
                    <strong>Tay:</strong> {selectedRelic.relics5} <br />
                    <strong>Đầu:</strong> {selectedRelic.relics6}
                  </Card.Text>
                </Card.Body>
              </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HandlePerfectRelics_en;
