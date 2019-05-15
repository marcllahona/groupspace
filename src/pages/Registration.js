import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Mutation } from 'react-apollo';
import Loader from '../components/Loader';
import TextField from '../components/inputs/TextField';
import PasswordField from '../components/inputs/PasswordField';
import LogoIcon from '../components/icons/LogoIcon';
import ErrorAlert from "../components/alerts/ErrorAlert";
import {Menu, Modal} from "../components/Modal";
import { invalidInputRegistration } from '../lib/utils';
import REGISTER_MUTATION from '../graphql/mutation/register';
import ME_QUERY from '../graphql/query/me';
import { FETCH_POLICY } from '../lib/constants';
import auth from '../lib/auth';
import * as S from '../styles';

function Registration(props) {
  //Hooks to update text fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onCompleted = response => {
    auth.setToken(response.token, true);
    if (auth.getToken()) {
      props.history.push('/');
    }
  };

  return (
    <S.Body>
      <S.Container>
        <LogoIcon />
        <S.Title>Register with Chatspace</S.Title>
        <Mutation
          mutation={REGISTER_MUTATION}
          variables={{ firstName, lastName, email, password }}
          //We refetch user query to get most current value
          refetchQueries={[{ query: ME_QUERY }]}
          //We do not want to keep cache of email/password from the User
          fetchPolicy={FETCH_POLICY.NO_CACHE}
          onCompleted={e => onCompleted(e.register)}
        >
          {(register, { loading, error }) => {
            if (loading) return <Loader />;
            return (
              <S.Form
                method="POST"
                onSubmit={async e => {
                  e.preventDefault();
                  await register();
                }}
              >
                <TextField
                  label="First Name*"
                  name="firstName"
                  value={firstName}
                  placeholder="Ex: Joe"
                  onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                  label="Last Name*"
                  name="lastName"
                  value={lastName}
                  placeholder="Ex: Dow"
                  onChange={e => setLastName(e.target.value)}
                />
                <TextField
                  label="Email*"
                  name="email"
                  value={email}
                  placeholder="Ex: joe@gmail.com"
                  onChange={e => setEmail(e.target.value)}
                />
                <PasswordField
                  label="Password*"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <S.FormButton
                  disabled={invalidInputRegistration([
                    firstName,
                    lastName,
                    email,
                    password
                  ])}
                >
                  Register
                </S.FormButton>
                {
                  error &&
                  <Menu
                      shouldOpen={error}
                      content={hide => {
                        return (
                            <Modal hide={hide}>
                              <ErrorAlert error={error} hide={hide} />
                            </Modal>
                        );
                      }}
                  />
                }
              </S.Form>
            );
          }}
        </Mutation>
        <p>Do you have account account?</p>
        <S.CustomLink to="/login">Login</S.CustomLink>
      </S.Container>
    </S.Body>
  );
}

Registration.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
};

export default Registration;
