import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormTitel, StyledForm, StyledInput, StyledLabel, StyledButton, Error } from './Phonebook.styled';


const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
});


export const Phonebook = ({onAddContact}) => { 

        return (
        <section>
            <FormTitel>Phonebook</FormTitel>
                <Formik
                    initialValues={{
                        name: '',
                    }}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        onAddContact(values);
                        actions.resetForm();
                    }}
                >

                            <StyledForm autoComplete="off">
                    <StyledLabel>
                        Name
                            <StyledInput type="text" name="name" placeholder="New contact"/>
                            <Error name="name" component="p"/>
                    </StyledLabel>
                    <StyledButton type="submit">Add contact</StyledButton>
                    </StyledForm>
                </Formik>
        </section>
    )
};