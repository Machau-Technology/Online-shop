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
            'andhra pradesh',
            'andhra',
            'pradesh',
            'arunachal pradesh',
            'arunachal',
            'assam',
            'bihar',
            'chhattisgarh',
            'goa',
            'gujarat',
            'haryana',
            'himachal pradesh',
            'himachal',
            'jharkhand',
            'karnataka',
            'kerala',
            'madhya pradesh',
            'madhya',
            'maharashtra',
            'manipur',
            'meghalaya',
            'mizoram',
            'nagaland',
            'odisha',
            'punjab',
            'rajasthan',
            'sikkim',
            'tamil nadu',
            'tamil',
            'nadu',
            'telangana',
            'tripura',
            'uttar pradesh',
            'uttar',
            'uttarakhand',
            'west bengal',
            'andaman and nicobar islands',
            'andaman and nicobar',
            'chandigarh',
            'dadra and nagar haveli and daman and diu',
            'dadra and nagar haveli',
            'daman and diu',
            'dakshadweep',
            'delhi',
            'new delhi',
            'puducherry',
            'pondicherry',
            'west bengal',
            'bengal',
        ];
        return validStates.includes(state);
    };


    const validationSchema = Yup.object().shape({
        contactNumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Contact number is not valid')
            .required('Contact number is required'),
        addressLine1: Yup.string().required('First line of address is required'),
        fullName: Yup.string().required('You name is required'),
        addressLine2: Yup.string().test(
            'isValidState',
            'Please enter a valid state',
            // function (value) {
            //     if (value && value.trim().length > 0) {
            //         const state = value.toLowerCase();
            //         const parts = state.trim().split(' ');
            //         const lastEntry = parts[parts.length - 1];
            //         return isValidState(lastEntry);
            //     }
            //     return true;
            // }

            function (value) {
                if (value && value.trim().length > 0) {
                    const state = value.toLowerCase();
                    const words = state.trim().split(' ');
                    const validStatesPattern = /^(Andhra|andhra|Pradesh|pradesh|Arunachal|arunachal|Assam|assam|Bihar|bihar|Chhattisgarh|chattisgarh|Goa|goa|Gujarat|gujarat|Haryana|haryana|Himachal|himachal|Jharkhand|jharkhand|Karnataka|karnataka|Kerala|kerala|Madhya|madhya|Maharashtra|maharashtra|Manipur|manipur|Meghalaya|meghalaya|Mizoram|mizoram|Nagaland|nagaland|Odisha|odisha|Punjab|punjab|Rajasthan|rajasthan|Sikkim|sikkim|Tamil|tamil|Nadu|nadu|Telangana|telangana|Tripura|tripura|Uttar|uttar|Uttarakhand|uttarakhand|West|west|Bengal|bengal|Andaman|andaman|Nicobar|nicobar|Chandigarh|chandigarh|Dadra|dadra|Nagar|nagar|Haveli|haveli|Daman|daman|Diu|diu|Lakshadweep|lakshadweep|Delhi|delhi|Puducherry|puducherry)$/;
                    for (const word of words) {
                        if (validStatesPattern.test(word)) {
                            return true;
                        }
                    }
                }
                return false;
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
                    fullName: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        // await setFormData({ ...formData, ...values });
                        // router.push('/shop/payment');

                        const data = { ...formData, ...values };

                        console.log(data);

                        // console.log(values);

                        setStepStatus({ ...stepStatus, shipping: true });
                        setActiveStep('payment');



                        const response = await axiosInstance.post("/api/phonepe-integration", data);
                        console.log(response);

                        router.push(response.data);

                    } catch (error) {
                        console.error('Error making POST request:', error);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >


                {({ isSubmitting, handleChange, values, setFieldValue, touched, errors }) => (
                    <Form className={styles.form}>


                        <div className={styles.row}>
                            <div className={styles["postcode"]}>
                                <label className={styles.genLabel} htmlFor="fullName">Full Name</label>
                                <Field type="text" name="fullName" className={styles["formInput"]} required />
                                <ErrorMessage
                                    name="fullName"
                                    component="div"
                                    className={styles.warning}
                                />
                            </div>
                            <div className={styles["email"]}>
                                <label className={styles.genLabel} htmlFor="email">Phone Number</label>

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
                                <Field type="number" name="postcode" className={styles["formInput"]} required />
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
                                // className={styles.submit}
                                className={`${styles.submit} ${(errors.fullName || errors.email || errors.contactNumber || errors.addressLine1 || errors.addressLine2 || errors.postcode || !values.fullName) ? styles["disabled"] : ""}`}
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