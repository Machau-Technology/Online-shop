// "use client"
// import React from 'react'
// import styles from "./page.module.css"
// import { Formik, Field, Form, ErrorMessage } from 'formik'
// import * as Yup from 'yup'
// import { useFormData } from '@/context/shoppingContext/ShoppingContext'
// import { useRouter } from 'next/navigation'
// import axios from 'axios'

// const Account = () => {

//     const validationSchema = Yup.object().shape({
//         email: Yup.string().email('Invalid email').required('Email is required'),
//         password: Yup.string().required('Password is required'),
//         confirmPassword: Yup.string()
//             .oneOf([Yup.ref('password'), null], 'Passwords must match')
//             .required('Please confirm your password'),
//     });

//     const router = useRouter();
//     const { activeStep, setActiveStep, formData, setFormData, stepStatus, setStepStatus, others } = useFormData();

//     return (
//         <div className={styles.container}>
//             <div className={styles.header}>
//                 <span className={styles.head}>
//                     Create MasterSticker Account
//                 </span>
//                 <span className={styles.headDesc}>
//                     Remember! Use these credentials for MasterSticker login
//                 </span>
//             </div>
//             <Formik
//                 initialValues={{
//                     email: '',
//                     password: '',
//                     confirmPassword: ''
//                 }}
//                 validationSchema={validationSchema}
//                 onSubmit={async (values, { setSubmitting }) => {
//                     try {
//                         setFormData({ ...values });
//                         // router.push('/shop/payment');

//                         setStepStatus({ ...stepStatus, account: true });
//                         setActiveStep('payment');

//                         const response = await axios.post("http://localhost:5000/phonepe-integration", formData);

//                     } catch (error) {
//                         console.error('Error making POST request:', error);
//                     } finally {
//                         setSubmitting(false);

//                     }
//                 }}
//             >
//                 {({ isSubmitting, handleChange, values }) => (
//                     <Form className={styles.form}>
//                         <div className={styles.row}>
//                             <label className={styles.label} htmlFor="email">Email ID</label>
//                             <Field
//                                 type="email"
//                                 name="email"
//                                 className={`${styles.formInput} ${values.email ? styles['is-valid'] : ''}`}
//                                 placeholder="example@domain.com"
//                                 required

//                             />
//                             <ErrorMessage
//                                 name="email"
//                                 component="div"
//                                 className={styles.warning}
//                             />
//                         </div>

//                         <div className={styles.row}>
//                             <label className={styles.label} htmlFor="password">Password</label>
//                             <Field
//                                 type="password"
//                                 name="password"
//                                 className={`${styles.formInput} ${values.password ? styles['is-valid'] : ''}`}
//                                 placeholder="Create Password"
//                                 required

//                             />
//                             <ErrorMessage
//                                 name="password"
//                                 component="div"
//                                 className={styles.warning}
//                             />
//                         </div>

//                         <div className={styles.row}>
//                             <Field
//                                 type="password"
//                                 name="confirmPassword"
//                                 className={`${styles.formInput} ${values.confirmPassword ? styles['is-valid'] : ''}`}
//                                 placeholder="Confirm Password"
//                                 required

//                             />
//                             <ErrorMessage
//                                 name="confirmPassword"
//                                 component="div"
//                                 className={styles.warning}
//                             />
//                         </div>
//                         <div className={styles.btns}>
//                             <button
//                                 type="button"
//                                 className={styles.cancel}
//                             >
//                                 Cancel order
//                             </button>
//                             <button
//                                 type="submit"
//                                 className={styles.submit}
//                                 disabled={isSubmitting}
//                             >
//                                 Payment
//                             </button>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     )
// }

// export default Account