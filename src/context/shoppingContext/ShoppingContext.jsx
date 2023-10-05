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
        // console.log("called");
        return 'shipping';
    }
}

export function FormDataProvider({ children }) {

    // const router = useRouter();
    const path = usePathname();
    const initialStep = getInitialStep(path);
    // console.log(path);

    // const loadInitialData = () => {

    //     const storedData = sessionStorage.getItem('formData');

    //     if (storedData) {
    //         return JSON.parse(storedData);
    //     }

    //     return {
    //         tagCount: 1,
    //         stickerCount75: 1,
    //         stickerCount100: 1,
    //         stickerCount150: 1,
    //         tagShop: false,
    //         stickerShop75: false,
    //         stickerShop100: false,
    //         stickerShop150: false,
    //         tagPrice: 999,
    //         stickerPrice75: 99,
    //         stickerPrice100: 99,
    //         stickerPrice150: 99,
    //         cart: []
    //     };
    // };


    const loadInitialData = () => {
        if (typeof window !== 'undefined') {
          // Check if we're on the client side
          const storedData = sessionStorage.getItem('formData');
          if (storedData) {
            return JSON.parse(storedData);
          }
        }
      
        // If not on the client side or no data is found, return default values
        return {
          tagCount: 1,
          stickerCount75: 1,
          stickerCount100: 1,
          stickerCount150: 1,
          tagShop: false,
          stickerShop75: false,
          stickerShop100: false,
          stickerShop150: false,
          tagPrice: 999,
          stickerPrice75: 99,
          stickerPrice100: 99,
          stickerPrice150: 99,
          cart: [],
        };
      };

      
    const [activeStep, setActiveStep] = useState(initialStep);
    const [formData, setFormData] = useState(loadInitialData);

    const [stepStatus, setStepStatus] = useState({
        shipping: false,
        account: false,
        payment: false,
    });

    useEffect(() => {
        sessionStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

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
