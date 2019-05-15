import React, {useState} from 'react'
import Layout from "../components/Layout";
import * as S from '../styles';
import {Mutation} from "react-apollo";
import Loader from "../components/Loader";
import TextField from "../components/inputs/TextField";
import {invalidInputString} from "../lib/utils";
import {Menu, Modal} from "../components/Modal";
import ErrorAlert from "../components/alerts/ErrorAlert";
import MY_GROUPS_QUERY from "../graphql/query/myGroups";
import CREATE_GROUP_MUTATION from "../graphql/mutation/createGroup";

function Add() {
    const [name, setName] = useState('');
    const [url, setURL] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const onCompleted = response => {
        console.log(response)
    }

    return (
        <Layout>
            <S.AddContainer>
                <S.Title>Add a new group!</S.Title>
                <Mutation
                    mutation={CREATE_GROUP_MUTATION}
                    variables={{ name, url, category, description }}
                    //We refetch user query to get most current value of User
                    refetchQueries={[{ query: MY_GROUPS_QUERY }]}
                    //We do not want to keep cache of email/password from the User
                    onCompleted={e => onCompleted(e.createGroup)}
                >
                    {(createGroup, { loading, error }) => {
                        //Rename Mutation loading to mLoading to avoid problems with previous loading from User
                        if (loading) return <Loader />;
                        return (
                            <S.Form
                                method="POST"
                                onSubmit={async e => {
                                    e.preventDefault();
                                    await createGroup();
                                    setName('');
                                    setURL('');
                                    setCategory('');
                                    setDescription('');
                                }}
                            >
                                <TextField
                                    label="Name*"
                                    name="name"
                                    value={name}
                                    placeholder="My Cool Group"
                                    onChange={e => setName(e.target.value)}
                                />
                                <TextField
                                    label="URL*"
                                    name="url"
                                    value={url}
                                    onChange={e => setURL(e.target.value)}
                                />
                                <TextField
                                    label="Category*"
                                    name="category"
                                    value={category}
                                    placeholder="Ex: Tech"
                                    onChange={e => setCategory(e.target.value)}
                                />
                                <TextField
                                    label="Description*"
                                    name="description"
                                    value={description}
                                    placeholder="Ex: Short description"
                                    onChange={e => setDescription(e.target.value)}
                                />
                                <S.FormButton
                                    width={800}
                                    disabled={
                                        invalidInputString(name) ||
                                        invalidInputString(url) ||
                                        invalidInputString(category) ||
                                        invalidInputString(description)
                                    }
                                >
                                    Create
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
            </S.AddContainer>
        </Layout>
    );
}
export default Add;
