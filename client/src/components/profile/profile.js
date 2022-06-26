import React, {useState} from 'react';

import {connect} from 'react-redux';
import {Container, Row, Col, Button, ListGroup, Form, Image} from 'react-bootstrap';

const Profile = (props) => {
  // Profile use user user.state for profile display
  if (!props.signInUserSession) {
    props[0].history.push('/login');
  }
  let user = {...props};
  // Declare a new state variable, which we'll call "count"
  const [caloriesGoal, setCaloriesCount] = useState(user.caloriesGoal);
  const [firstName, setFirstName] = useState(user.givenname);
  const [lastName, setLastName] = useState(user.familyname);
  const [height, setHeight] = useState(user.height);
  const [gender, setGender] = useState(user.gender);
  const [weight, setWeight] = useState(user.weight);
  const [goal, setGoal] = useState(user.goal);
  const [showGenderList, setShowGenderList] = useState(false);

  function selectGender(val) {
    setShowGenderList(!showGenderList);
    setGender(val);
  }

  function saveProfile() {
    props.onSaveProfile({
      firstName,
      lastName,
      caloriesGoal,
      gender,
      weight,
      height,
      goal,
    });
  }

  return (
    <div className='bg-white' style={{minHeight: '800px'}}>
      <Container className='pt-2 m-auto'>
        <Row>
          <Col xs={{span: 3, offset: 1}} sm={{span: 3, offset: 1}} md={{span: 3, offset: 1}}>
            <Row className='justify-content-start align-content-center'>
              <i
                className='text-black-50 glyphicon glyphicon-arrow-left pr-2'
                onClick={(e) => props[0].history.go(-1)}
                style={{fontSize: '24px'}}
              />
              <h3>Profile</h3>
            </Row>
          </Col>
          <Col xs={{span: 2, offset: 6}} sm={{span: 2, offset: 6}} md={{span: 2, offset: 6}} lg={{span: 1, offset: 6}}>
            <button
              type='button'
              className='btn btn-secondary btn-sm glyphicon glyphicon-save'
              onClick={() => saveProfile()}
            />
          </Col>
          <br />
        </Row>
        <Row>
          <Col
            xs={{span: 4, offset: 1}}
            sm={{span: 3, offset: 1}}
            md={{span: 2, offset: 1}}
            lg={{span: 2, offset: 1}}
            xl={{span: 1, offset: 1}}
          >
            <Image src='/images/apple.jpg' roundedCircle width={'100vw'} />
          </Col>
          <Col xs={{span: 6}} sm={{span: 7}} md={{span: 8}} lg={{span: 8}} xl={{span: 9}}>
            <Form>
              <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextEmail'>
                <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
                  Email
                </Form.Label>
                <Col sm='10' md='9' lg='8' xl='7'>
                  <Form.Control type='email' readOnly value={user.email} />
                </Col>
                <Col></Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextUsername'>
                <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
                  Username
                </Form.Label>
                <Col sm='10' md='9' lg='8' xl='7'>
                  <Form.Control type='text' value={user.username} readOnly />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextFirstName'>
                <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
                  First Name
                </Form.Label>
                <Col sm='10' md='9' lg='8' xl='7'>
                  <Form.Control type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextLastName'>
                <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
                  Last Name
                </Form.Label>
                <Col sm='10' md='9' lg='8' xl='7'>
                  <Form.Control type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextDOB'>
                <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
                  DOB
                </Form.Label>
                <Col sm='10' md='9' lg='8' xl='7'>
                  <Form.Control type='text' value={new Date(user.birthday).toISOString().substring(0, 10)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextCaloriesGoal'>
                <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
                  Calories Goal(Cal)
                </Form.Label>
                <Col sm='10' md='9' lg='8' xl='7'>
                  <Form.Control
                    type='number'
                    value={caloriesGoal}
                    onChange={(e) => setCaloriesCount(Number(e.target.value))}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextHeight'>
                <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
                  Height(CM)
                </Form.Label>
                <Col sm='10' md='9' lg='8' xl='7'>
                  <Form.Control type='number' value={height} onChange={(e) => setHeight(Number(e.target.value))} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextWeight'>
                <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
                  Weight(KG)
                </Form.Label>
                <Col sm='10' md='9' lg='8' xl='7'>
                  <Form.Control type='number' value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextGender'>
                <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
                  Gender
                </Form.Label>
                <Col sm='10' md='9' lg='8' xl='7'>
                  <Form.Control
                    type='button'
                    value={`${gender[0].toUpperCase()}${gender.slice(1)}`}
                    onClick={() => setShowGenderList(!showGenderList)}
                  />

                  {showGenderList && (
                    <ListGroup as='ul'>
                      {['undetermined', 'male', 'female'].map((item) => (
                        <ListGroup.Item
                          as='li'
                          action
                          active={gender == item}
                          key={item}
                          onClick={() => selectGender(item)}
                        >
                          {`${item[0].toUpperCase()}${item.slice(1)}`}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </Col>
              </Form.Group>

              <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextPersonalGoals'>
                <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
                  Personal Goals
                </Form.Label>
                <Col sm='10' md='9' lg='8' xl='7'>
                  <Form.Control type='text' value={goal} onChange={(e) => setGoal(e.target.value)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextGender'>
                <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
                  Password
                </Form.Label>
                <Col sm='10' md='9' lg='8' xl='7'>
                  <Form.Control type='password' plainText disable placeholder='********' />
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        {/* <!--container end--> */}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {...state.user.user};
};

export default connect(mapStateToProps)(Profile);
