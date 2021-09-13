import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Profile = (props) => {
  // Profile use user user.state for profile display
  if (!props.signInUserSession) {
    props[0].history.push('/login');
  }
  let user = {...props};
  return (
    <div className='bg-white' style={{minHeight: '800px'}}>
      <Container className='pt-2 m-auto'>
        <Row>
          <Col xs={{span: 3, offset: 1}} sm={{span: 3, offset: 1}} md={{span: 3, offset: 1}}>
            <Row className='justify-content-start align-content-center'>
              <i
                className='text-black-50 glyphicon glyphicon-arrow-left pr-2'
                onClick={(e) => props[0].history.go(-1)}
                style={{'font-size': '24px'}}
              />
              <h3>Profile</h3>
            </Row>
          </Col>

          <Col xs={{span: 2, offset: 6}} sm={{span: 2, offset: 6}} md={{span: 2, offset: 6}} lg={{span: 1, offset: 6}}>
            <button
              type='button'
              className='btn btn-secondary btn-sm glyphicon glyphicon-save'
              onClick={(e) => props[0].history.push('/profile/edit')}
            />
          </Col>
          <br />
        </Row>
        <Form>
          <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextEmail'>
            <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
              Email
            </Form.Label>
            <Col sm='10' md='9' lg='8' xl='7'>
              <Form.Control type='email' value={user.email} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextUsername'>
            <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
              Username
            </Form.Label>
            <Col sm='10' md='9' lg='8' xl='7'>
              <Form.Control type='text' value={user.username} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextFirstName'>
            <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
              First Name
            </Form.Label>
            <Col sm='10' md='9' lg='8' xl='7'>
              <Form.Control type='text' value={user.givenname} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextLastName'>
            <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
              Last Name
            </Form.Label>
            <Col sm='10' md='9' lg='8' xl='7'>
              <Form.Control type='text' value={user.familyname} />
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
              <Form.Control type='text' value={user.calories_goal} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextHeight'>
            <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
              Height(CM)
            </Form.Label>
            <Col sm='10' md='9' lg='8' xl='7'>
              <Form.Control type='text' value={user.height} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextWeight'>
            <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
              Weight(KG)
            </Form.Label>
            <Col sm='10' md='9' lg='8' xl='7'>
              <Form.Control type='text' value={user.weight} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextGender'>
            <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
              Gender
            </Form.Label>
            <Col sm='10' md='9' lg='8' xl='7'>
              <Form.Control type='text' value={user.gender} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3 ml-5' controlId='formPlaintextPersonalGoals'>
            <Form.Label column xs='10' sm='10' md='2' lg='3' xl='3' className='ml-lg-4 col-form-label text-left'>
              Personal Goals
            </Form.Label>
            <Col sm='10' md='9' lg='8' xl='7'>
              <Form.Control type='text' value={user.goal} />
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
        {/* <!--container end--> */}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {...state.user.user};
};

export default connect(mapStateToProps)(Profile);
