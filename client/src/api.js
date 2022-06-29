import axios from 'axios';

const token =
  'eyJraWQiOiJQaENvVWpUQzBsV2tka2hCTXYxREYrSzdEN2kzT0dGWERXSXMzSlpta25rPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZDYxODFjNy1hYjI0LTRhNTQtOWI2My05NTMwYWRmYjJkYjkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2QxQW5XdXNLeiIsImNvZ25pdG86dXNlcm5hbWUiOiJmbGluIiwiZ2l2ZW5fbmFtZSI6IkZpb25hIiwiYXVkIjoiNGM5OWhzdHU3aWIxMTZxY3FkZmttYTg0a24iLCJldmVudF9pZCI6IjU4Y2E4NDgwLWM1YjctNDI3Zi05ZDY3LTFhN2JkYmU3OWI3MiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjMwMDY4NDU5LCJleHAiOjE2MzAwNzIwNTksImlhdCI6MTYzMDA2ODQ1OSwiZmFtaWx5X25hbWUiOiJMaW4iLCJlbWFpbCI6ImZpb25hLmxpbjEwMDFAZ21haWwuY29tIn0.ESazXR2ryGAdZ9cgXrAdlwhkka92S-dlpUe4Rkrcy8w8p3rBuhbn3SDeFwGFG7Qp-Ts5-bdWzDdSbbISZnhsyIaNbx12Ixrk2-1DszFyECmcmwMytc0ikLDReaXogRAMXD0zKEO6EWotczSDQdKW8bZQJRSv5pJ7U0SXkuPiylRX5CJZVQZZGKiF7YKXGd2xtbMPWS1cH8jmuJb-4x-BMjbVw072zql7bm3wHzDov4ujZgjzqGmTcYQKiXjm3MAFIzxRfl6PHPhtHlvO8dlQil32_nmSc_p7_E7GGfjhngneMVyqENfN53pmEqt6ALqgKA3O2dyfYkicidpHQuOr4g';
const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {'content-type': 'application/json'},
  timeout: 5000,
});

export async function login({username, password}) {
  return instance.post('login', {
    username: username,
    password: password,
  });
  /* return Promise.resolve({
    data: {
      user: {
        username: 'flin',
        pool: {
          userPoolId: 'us-east-1_d1AnWusKz',
          clientId: '4c99hstu7ib116qcqdfkma84kn',
          client: {endpoint: 'https://cognito-idp.us-east-1.amazonaws.com/', fetchOptions: {}},
          advancedSecurityDataCollectionFlag: true,
        },
        Session: null,
        client: {endpoint: 'https://cognito-idp.us-east-1.amazonaws.com/', fetchOptions: {}},
        signInUserSession: {
          idToken: {
            jwtToken:
              'eyJraWQiOiJQaENvVWpUQzBsV2tka2hCTXYxREYrSzdEN2kzT0dGWERXSXMzSlpta25rPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZDYxODFjNy1hYjI0LTRhNTQtOWI2My05NTMwYWRmYjJkYjkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2QxQW5XdXNLeiIsImNvZ25pdG86dXNlcm5hbWUiOiJmbGluIiwiZ2l2ZW5fbmFtZSI6IkZpb25hIiwiYXVkIjoiNGM5OWhzdHU3aWIxMTZxY3FkZmttYTg0a24iLCJldmVudF9pZCI6ImZjZDY3ZjhhLTc5MzYtNDU1NC1iZWI2LWFkYjNkZDM3NjUxZiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjU2MjMzODE4LCJleHAiOjE2NTYyMzc0MTgsImlhdCI6MTY1NjIzMzgxOCwiZmFtaWx5X25hbWUiOiJMaW4iLCJlbWFpbCI6ImZpb25hLmxpbjEwMDFAZ21haWwuY29tIn0.Aqad7wKmtbJM35ZKM8_V6K0juGMQUNVsrHuFwDyV73tutNp-ISlkci1m2QHOH2Q42AD5qNKFswdfI86XfZ864rotNyManQj0YcejBf2JpuG4g-XeV_XxPa20lIX9QYmA2XKgTaEXrM7z8mQBr9J68MUoyyrx_bXwaL0QxPm2DGu7cKbnpiXdIIpfLGhn49BjjcKU1d5NIeiaB82KnkRAEeMa8O89JcYcfW5YOcKd7bX3VvLQqlkQsTYWQq4ytNr13cQvJdAIsEvViF6RMyO969R69rteXhmf_LjpTwdrbXUGKGxobGuwftpcPm5wLclHgPPMFnghEU3b4jkdS8ufjQ',
            payload: {
              sub: 'cd6181c7-ab24-4a54-9b63-9530adfb2db9',
              email_verified: false,
              iss: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_d1AnWusKz',
              'cognito:username': 'flin',
              given_name: 'Fiona',
              aud: '4c99hstu7ib116qcqdfkma84kn',
              event_id: 'fcd67f8a-7936-4554-beb6-adb3dd37651f',
              token_use: 'id',
              auth_time: 1656233818,
              exp: 1656237418,
              iat: 1656233818,
              family_name: 'Lin',
              email: 'fiona.lin1001@gmail.com',
            },
          },
          refreshToken: {
            token:
              'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.IWzxGGhm1Mp2xSu07knwtQ2hFquvMdNZIcQ5jvJ4_bgALi6HXxwfdymUd8__2qwJdhyX_xT6an4yipnKPIFB_28NrHaM8LBlMlRYCLGHcIcPTBhzmP-cBRks7kI9Yscp8fXSbJ_YKoeq9Rm3WEmVZ-qIdh2F_tNzEWNCtvYs1l0tSnjhrpYVWP0jnBk8GF_EoZS_3-Cjm5nH4tqAHsXybReRC0V-HKGlgGhp1xUDKbYqeUl__aPEZvIuXTMP14X7zkBlyQSNjDPT2Gw1AVxOqRotGaVLZYQAFl8VpwMNy5cKXYT1YDgQMKesDM2YORR0zzV-wXdoWdMOVtPyaq2qKg.RGRE_reVi9-IKApv.wNkfzdVqYtPCjSO0HrptYxyLQrGa-ab8MtRkZEvfjIdLVH1lpscnlUtNkcfs4HhyKertxB2ixWx2ftCksRzjN5zMwFJkT4da5yrnt7ZeoQrX-yu15MltkMREqbZoGVgta90qSwYKIAQtgPYTf1CbQYJXbmgjJXkPzjhJ1hWfmjbtLM7ZXMaFPiBj2RpuQipTJXpho8GgRoi_jhdImuNep924a2k4DZNSjutRs6N6g-MqM3ZJWWJ8LSmHVwBD3qHOnHnn09et0eqo8QUUOfrBRiAHMNrILJP0nG_Nxv8KOPZwAHkfclUygk4E52hJuyK9QUoUuA-XIABOJMJwCzNT-LDfoNvljddv6fl1Ypp7i9NNNmlaBTzPs_ERqFXIdkiW7pzmOps19SZfsxnIiwuJso7Fyy4zUCIU6TjSm4oGkQc7LRagP0vqBu08lNoysVQwE9Pt5DzmYe0KhDRnt3rcd_9782XVip2SGqMoV9n6lw0PGXxEuY1IzNBsIob1KgUGfH_Bm5n8mwM0QXB_3Xa4dLrUS4Mz7uG5iTItPXe4-EW0Rx-NsvWRg0c1aSA0HsdHsY1fq2bGKkc2WXs6OKF2ue_jkXZXWbp7St9xmmo4EY6uhgz_5bR9DgJdqmJtjaNl3Mcwv8LxCijfxXcbEz9DVcKgeqUUfDbLPD-jXKFRyMjn7OpLxSpwt9OLPU7wPTNZM__lo4MbPa5JcsqR-2FQcwpk_42NSnS8BvDME58kXyk0OgoRoC3UaLttgisZt9ea7n2rk3_m8UE_hR3-p9jUOSxMLFBaLm5rCyclsejs4o5-4X92hhpJft5e9gy_quqUMmuelc4-2h2sOtvOKhP6Kq-sWJZmkZy-rQDEv_yAKOy8S6cMGHjWOM_3h6lElxypZqaCV2q9LzzAPJQp-x0jt7PGI36Q4afV1NejZcgXkSlvZi8XVBP7mRnpWI1NSmCDsuug1WHdNEqvi4gVAPsQSFAqmTpJwv7juSpDu_yJxaTDWhJOEbcYaKyQX3kYYsa5dy8f9NWcCN2NMat0WMqvMuYd2bdwCJs_NyEJXJx7KZc6kebZrtut6eLUf_71kSbkVo_y19TcabUzZHcq1BDFp-FVB8SE_dPG0T3uVNSCzu6_QXmVZ4YLeIYM-al5fWAq_ai3KhDGVR82DEAqbrH_rut2vgPM2eRhG76MyaClS8jSeU1FjWvL-vFOEmufFs-z-aPYu9meIpm1ZVja1OskRJCY7u2WTyMCCRlhLtiNkmSUvmgEmUfIxzEw-q6jhzM27w.3hHtQuSbEqd0MtfVZNaW3Q',
          },
          accessToken: {
            jwtToken:
              'eyJraWQiOiJRSWhrNHQ3b0lRZllVNjJYMVJTK0JXVmpsa0dyTmYxR3NUV01TbDNIbm5rPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZDYxODFjNy1hYjI0LTRhNTQtOWI2My05NTMwYWRmYjJkYjkiLCJldmVudF9pZCI6ImZjZDY3ZjhhLTc5MzYtNDU1NC1iZWI2LWFkYjNkZDM3NjUxZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTYyMzM4MTgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2QxQW5XdXNLeiIsImV4cCI6MTY1NjIzNzQxOCwiaWF0IjoxNjU2MjMzODE4LCJqdGkiOiJmM2IxZTczZC0zYTBlLTQwOWMtYTQ3ZC1hYzE0YzkzOTk2YWQiLCJjbGllbnRfaWQiOiI0Yzk5aHN0dTdpYjExNnFjcWRma21hODRrbiIsInVzZXJuYW1lIjoiZmxpbiJ9.M6z0x7m8wui47wyuHVoZkRrWI3S8yKDREnrs0UHgnp88w5pguhcyU8hh8SVKoA88uTEbxIRu5z3xvrmURakhFGZtLpJ9SN_l6kS0wYI6_tIeKlUsPWUQIaA6IJ2ZR_-pCySLJLSBA9VCe01oK6ZnLwvUGD3kfwPh902caeD1bDrA_6SJrscOTTqv6U8locU8aCL4oqWcha_njcnEaOkH1Y6hQ4kgtLvwVicjxQHLZmv9crzAT-v7oLDN2cZXLyIVqhPuqYnjidIHowyrQ6IhO94FUkVJFrpNsUenIs5tKcNKfE9u_7kvmBV3ylSxY2g90py2zRsm-rGjuOmDF9q_-w',
            payload: {
              sub: 'cd6181c7-ab24-4a54-9b63-9530adfb2db9',
              event_id: 'fcd67f8a-7936-4554-beb6-adb3dd37651f',
              token_use: 'access',
              scope: 'aws.cognito.signin.user.admin',
              auth_time: 1656233818,
              iss: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_d1AnWusKz',
              exp: 1656237418,
              iat: 1656233818,
              jti: 'f3b1e73d-3a0e-409c-a47d-ac14c93996ad',
              client_id: '4c99hstu7ib116qcqdfkma84kn',
              username: 'flin',
            },
          },
          clockDrift: 0,
        },
        authenticationFlowType: 'USER_SRP_AUTH',
        keyPrefix: 'CognitoIdentityServiceProvider.4c99hstu7ib116qcqdfkma84kn',
        userDataKey: 'CognitoIdentityServiceProvider.4c99hstu7ib116qcqdfkma84kn.flin.userData',
        attributes: {
          sub: 'cd6181c7-ab24-4a54-9b63-9530adfb2db9',
          email_verified: false,
          given_name: 'Fiona',
          family_name: 'Lin',
          email: 'fiona.lin1001@gmail.com',
        },
        preferredMFA: 'NOMFA',
      },
      profile: {
        id: '55ef06ba-97a2-4f91-b5b3-7c33884c9ed1',
        firstName: 'Fiona',
        lastName: 'Lin',
        email: 'fiona.lin1001@gmail.com',
        birthday: '2000-01-31T13:00:00.000Z',
        goal: '',
        caloriesGoal: 0,
        height: 0,
        weight: 0,
        gender: 'undetermined',
        avatar: null,
        createdBy: 'SEEDED',
        updatedBy: 'SEEDED',
        createdAt: '2022-06-26T07:45:18.245Z',
        updatedAt: '2022-06-26T07:45:18.245Z',
        deletedAt: null,
      },
    },
  }); */
}

export function signup(email, password) {
  return instance.post('v1/users/signup', {
    email: email,
    password: password,
  });
}

export function getProfile(user) {
  const {email} = user.attributes;
  const token = user.signInUserSession.accessToken.jwtToken;
  return instance.get(`v1/users/${email}/profile`, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function profileUpdate(user_id, values) {
  const token = localStorage.getItem('accessToken');
  console.log(user_id, token, values);
  return instance.put(`v1/users/${user_id}/profile`, values, {
    headers: {Authorization: `Bearer ${token}`},
  });
}
