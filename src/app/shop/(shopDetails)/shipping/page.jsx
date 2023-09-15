"use client"
import React from 'react'
import styles from "./page.module.css"
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useFormData } from '@/context/shoppingContext/ShoppingContext'
// import axios from 'axios'
import { axiosInstance } from '@/components/Const'

const Shipping = () => {

    const isValidState = (state) => {
        const validStates = [
            'Andhra Pradesh',
            'Arunachal Pradesh',
            'Assam',
            'Bihar',
            'Chhattisgarh',
            'Goa',
            'Gujarat',
            'Haryana',
            'Himachal Pradesh',
            'Jharkhand',
            'Karnataka',
            'Kerala',
            'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Odisha',
            'Punjab',
            'Rajasthan',
            'Sikkim',
            'Tamil Nadu',
            'Telangana',
            'Tripura',
            'Uttar Pradesh',
            'Uttarakhand',
            'West Bengal',
            'Andaman and Nicobar Islands',
            'Chandigarh',
            'Dadra and Nagar Haveli and Daman and Diu',
            'Lakshadweep',
            'Delhi',
            'Puducherry',
        ];
        return validStates.includes(state);
    };


    const validationSchema = Yup.object().shape({
        contactNumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Contact number is not valid')
            .required('Contact number is required'),
        addressLine1: Yup.string().required('First line of address is required'),
        addressLine2: Yup.string().test(
            'isValidState',
            'Please enter a valid state',
            function (value) {
                if (value && value.trim().length > 0) {
                    const parts = value.trim().split(' ');
                    const lastEntry = parts[parts.length - 1];
                    return isValidState(lastEntry);
                }
                return true;
            }
        )
            .required('Second line of address is required'),
        postcode: Yup.string().required('Postcode is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const router = useRouter();
    const { activeStep, setActiveStep, formData, setFormData, stepStatus, setStepStatus } = useFormData();

    return (
        <div className={styles.container}>
            <span className={styles.heading}>
                Shipping details
            </span>
            <Formik
                initialValues={{
                    contactNumber: '',
                    addressLine1: '',
                    addressLine2: '',
                    postcode: '',
                    email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        // setFormData({ ...values });
                        // router.push('/shop/payment');

                        setStepStatus({ ...stepStatus, shipping: true });
                        setActiveStep('payment');

                        const response = await axiosInstance.post("", formData);

                    } catch (error) {
                        console.error('Error making POST request:', error);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting, handleChange, values, setFieldValue, touched, errors }) => (
                    <Form className={styles.form}>
                        <div className={`${styles.row} ${styles.contact}`}>
                            <label className={styles.contactLabel} htmlFor="contactNumber">Contact Number</label>
                            <div className={styles.number}>
                                <div className={styles.code}>+91</div>
                                <Field
                                    type="text"
                                    name="contactNumber"
                                    className={`${styles.formInput} ${values.contactNumber ? styles['is-valid'] : ''}`}
                                    required

                                />
                                <ErrorMessage
                                    name="contactNumber"
                                    component="div"
                                    className={styles.warning}
                                />
                            </div>
                        </div>

                        <div className={styles["address"]}>
                            <label className={styles.genLabel} htmlFor="addressLine1">First line of address</label>
                            <div className={styles.input}>
                                <Field
                                    type="text"
                                    name="addressLine1"
                                    className={`${styles.formInput} ${values.addressLine1 ? styles['is-valid'] : ''}`}
                                    required

                                />
                                {touched.addressLine1 && !errors.addressLine1 ?
                                    <Image
                                        src="/assets/CheckGreen.png"
                                        width={30}
                                        height={30}
                                        alt="check"
                                        className={styles.check}
                                    /> :
                                    <Image
                                        src="/assets/CheckBlack.png"
                                        width={30}
                                        height={30}
                                        alt="check"
                                        className={styles.check}
                                    />
                                }
                            </div>
                            <ErrorMessage
                                name="addressLine1"
                                component="div"
                                className={styles.warning}
                            />
                        </div>
                        <div className={styles.address}>
                            <label className={styles.genLabel} htmlFor="addressLine2">Second line with state name</label>
                            <div className={styles.input}>
                                <Field
                                    type="text"
                                    name="addressLine2"
                                    className={`${styles.formInput} ${values.addressLine2 ? styles['is-valid'] : ''}`}
                                    required

                                />
                                {touched.addressLine2 && !errors.addressLine2 ?
                                    < Image
                                        src="/assets/CheckGreen.png"
                                        width={30}
                                        height={30}
                                        alt="check"
                                        className={styles.check}
                                    /> :
                                    <Image
                                        src="/assets/CheckBlack.png"
                                        width={30}
                                        height={30}
                                        alt="check"
                                        className={styles.check}
                                    />
                                }
                            </div>
                            <ErrorMessage
                                name="addressLine2"
                                component="div"
                                className={styles.warning}
                            />
                        </div>
                        <div className={styles.row}>
                            <div className={styles["postcode"]}>
                                <label className={styles.genLabel} htmlFor="postcode">Postcode</label>
                                <Field type="text" name="postcode" className={styles["formInput"]} required />
                                <ErrorMessage
                                    name="postcode"
                                    component="div"
                                    className={styles.warning}
                                />
                            </div>
                            <div className={styles["email"]}>
                                <label className={styles.genLabel} htmlFor="email">Mail ID</label>
                                <Field type="email" name="email" className={styles["formInput"]} required />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className={styles.warning}
                                />
                            </div>
                        </div>
                        <div className={styles.btns}>
                            <button
                                type="button"
                                className={styles.cancel}
                            >
                                Cancel order
                            </button>
                            <button
                                type="submit"
                                className={styles.submit}
                                disabled={isSubmitting}
                            >
                                Payment
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default Shipping