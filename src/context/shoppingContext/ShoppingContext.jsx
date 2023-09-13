"use client"
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const FormDataContext = createContext();

const getInitialStep = (pathname) => {

    if (pathname.includes('/shop/shipping')) {
        return 'shipping';
    } else if (pathname.includes('/shop/account')) {
        return 'account';
    } else if (pathname.includes('/shop/payment')) {
        return 'payment';
    } else {
        console.log("called");
        return 'shipping';
    }
}

export function FormDataProvider({ children }) {

    const router = useRouter();
    const path = usePathname();
    const initialStep = getInitialStep(path);
    console.log(path);

    const [activeStep, setActiveStep] = useState(initialStep);
    const [formData, setFormData] = useState({});
    const [stepStatus, setStepStatus] = useState({
        shipping: false,
        account: false,
        payment: false,
    });

    useEffect(() => {
        setActiveStep(getInitialStep(path));
    }, [path]);

    return (
        <FormDataContext.Provider value={{ activeStep, setActiveStep, formData, setFormData, stepStatus, setStepStatus }}>
            {children}
        </FormDataContext.Provider>
    );
}

export function useFormData() {
    return useContext(FormDataContext);
}
