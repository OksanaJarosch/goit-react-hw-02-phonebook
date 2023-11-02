import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';


const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
});


export const Phonebook = ({onAddContact}) => { 

        return (
        <section>
            <h2>Phonebook</h2>
                <Formik
                    initialValues={{
                        name: '',
                    }}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        console.log(values);
                        onAddContact(values);
                        actions.resetForm();
                    }}
                >

                            <Form autoComplete="off">
                    <label>
                        Name
                            <Field type="text" name="name" placeholder="New name" required />
                            <ErrorMessage name="name" component="span"></ErrorMessage>
                    </label>
                    <button type="submit">Add contact</button>
                    </Form>
                </Formik>
        </section>
    )
};