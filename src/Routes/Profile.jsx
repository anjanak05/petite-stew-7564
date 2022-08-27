import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from 'mdb-react-ui-kit';
import styles from '../Style/Profile.module.css';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    handleLogout();
    navigate('/Login');
  };
  return (
    <div className={styles.profileContainer}>
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <div className="d-flex flex-row ps-4 mb-4">
                    <img
                      style={{
                        margin: 'auto',
                        marginLeft: '27%',
                        height: '130px',
                        marginTop: '-20px',
                      }}
                      src="https://www.cricket.com/svgs/loginteam.svg"
                      alt="cricktPic"
                    />
                  </div>
                  <MDBCol col="6">
                    <MDBInput
                      value="Anjana"
                      wrapperClass="mb-4"
                      label="First name"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      value="Kushwaha"
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  value="eve.holt@reqres.in"
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                />

                <MDBBtn className="w-100 mb-4" size="md">
                  Done
                </MDBBtn>

                <div className="text-center" style={{ fontSize: '12px' }}>
                  <p>Love CRICKET.COM? Share With Friends</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                  <MDBBtn
                    onClick={handleLogOut}
                    className="w-100 mb-0.5 mt-3"
                    size="md"
                  >
                    Sign Out
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Profile;
