import React from "react";
import { IoIosSend } from "react-icons/io";
import useSoftMode from "../../hooks/SoftMode/useSoftMode";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
    const { t } = useTranslation();
    const { isSoftMode } = useSoftMode();
    const [ values, setValue ] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    
    const [invalids, setInvalids] = React.useState<number[]>([]);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const notValid: number[] = [];
        if (!values.firstname) notValid.push(1);
        if (!values.lastname) notValid.push(2);
        if (!values.email) notValid.push(3);
        if (!values.service) notValid.push(5);
        if (!values.message) notValid.push(6);
        setInvalids(notValid);
    }

    const onTyping = (value: any) => {
        setInvalids(invalids.filter(item => item !== value))
    }


    return(
        <form className="w-full mt-" onSubmit={onSubmit}>
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full md:w-1/2 px-3 grid grid-rows-1 gap-2">
                    <div className="w-full md:w-1/2">
                        {values.firstname && (
                            <p className="text-[11px] fade-in dark:text-[#F5F6F7]">
                                {t('contactForm.firstname')}
                            </p>
                        )}
                    </div>
                    <input className={`text-sm appearance-none block w-full text-gray-700 border rounded-[2px] border border-gray-300 py-3 px-4 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]
                                ${invalids.includes(1) ? 'border-red-400' : ''}
                            `} 
                            id="grid-first-name" 
                            type="text"
                            value={values.firstname}
                            placeholder={t('contactForm.firstname')}
                            autoComplete="false"
                            onChange={(v) => {
                                onTyping(1)
                                setValue({...values, firstname: v.target.value});
                            }}
                    />
                </div>
                <div className="w-full md:w-1/2 px-3 grid grid-rows-1 gap-2 mt-2 md:mt-0">
                    <div className="w-full md:w-1/2">
                        {values.lastname && (
                            <p className={`text-[11px] fade-in dark:text-[#F5F6F7] ${values.firstname && values.lastname}`}>
                                {t('contactForm.lastname')}
                            </p>
                        )}
                    </div>
                    <input className={`text-sm appearance-none block w-full text-gray-700 border rounded-[2px] border border-gray-300 py-3 px-4 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]
                                ${invalids.includes(2) ? 'border-red-400' : ''}
                            `}
                            id="grid-last-name" 
                            type="text" 
                            value={values.lastname}
                            placeholder={t('contactForm.lastname')}
                            autoComplete="false"
                            onChange={(v) => setValue({...values, lastname: v.target.value})}
                    />
                </div>
            </div>
            <div className="block -mx-3 mb-6">
                <div className="flex flex-wrap">
                    <div className="w-full px-3">
                        {values.email && (
                            <div className="w-full md:w-1/2 mb-2">                                        
                                <p className="text-[11px] fade-in dark:text-[#F5F6F7]">
                                    {t('contactForm.mail')}
                                </p>
                            </div>
                        )}
                        <input className={`text-sm appearance-none block w-full text-gray-700 border rounded-[2px] border border-gray-300 py-3 px-4 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]
                                ${invalids.includes(3) ? 'border-red-400' : ''}
                                `}
                                id="email" 
                                type="email"
                                value={values.email}
                                placeholder={t('contactForm.mail')}
                                autoComplete="false"
                                onChange={(v) => setValue({...values, email: v.target.value})}
                        />
                    </div>
                </div>
            </div>                    
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    {values.phone && (
                        <div className="w-full md:w-1/2 pb-2">
                            <p className="text-[11px] fade-in  dark:text-[#F5F6F7]">
                                {t('contactForm.phone')}
                            </p>
                        </div>                            
                    )}
                    <input className={`text-sm appearance-none block w-full text-gray-700 border rounded-[2px] border border-gray-300 py-3 px-4 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]
                                ${invalids.includes(4) ? 'border-red-400' : ''}
                            `}
                            id="phone" 
                            type="phone"
                            value={values.phone}
                            placeholder={t('contactForm.phone')}
                            autoComplete="false"
                            onChange={(v) => setValue({...values, phone: v.target.value})}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    {values.service && (
                        <div className="w-full md:w-1/2 pb-2">
                            <p className="text-[11px] fade-in dark:text-[#F5F6F7]">
                                {t('contactForm.service')}
                            </p>
                        </div> 
                    )}
                    <div className="inline-block relative w-full">
                        <select
                            className={`text-sm appearance-none block w-full text-gray-700 border rounded-[2px] border border-gray-300 py-3 px-4 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]
                                ${invalids.includes(5) ? 'border-red-400' : ''}
                            `}
                            style={{
                                color: isSoftMode ? "#e1e1e1" : values.service ? "#000" : "#A6ADB7",
                            }}
                            value={values.service}
                            onChange={(v) => setValue({...values, service: v.target.value})}
                        >
                            <option value="" disabled hidden>{t('contactForm.serv')}</option>
                            {services.map((service) => (
                                <option key={service.id} 
                                        value={service.id} 
                                        className="text-gray-600 dark:text-[#F5F6F7]">{service.value}
                                </option>
                            ))}
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 dark:text-gray-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <div className="w-full md:w-1/2 pb-2">
                        {values.message && (
                            <p className="text-[11px] fade-in dark:text-[#F5F6F7]">
                                Message
                            </p>
                        )}
                    </div> 
                    <textarea className={`text-sm appearance-none block w-full text-gray-700 border rounded-[2px] border border-gray-300 py-3 px-4 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]
                                ${invalids.includes(6) ? 'border-red-400' : ''}
                            `}
                            placeholder={t('contactForm.type')}
                            value={values.message}
                            onChange={(v) => setValue({...values, message: v.target.value})}
                    />

                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <button 
                        type="submit" 
                        className="font-medium rounded-[2px] text-sm px-4 py-2 text-center inline-flex items-center me-2 mb-2 border border-[#348C79] bg-[#348C79] dark:border-[#6941C6] dark:bg-[#6941C6]"
                    >
                        <IoIosSend className="mr-1 w-4 h-4 text-white" />
                        <span className="text-[12px] text-white dark:text-[#F5F8FA]">{t('contactForm.btn')}</span>
                    </button>
                </div>
            </div>
        </form>
    )
}

const services = [ 
    { id: 1, value: 'Developement' }, 
    { id: 2, value: 'Performance Optimization'}, 
    { id: 3, value: 'Code Review' }, 
    { id: 4, value: 'System Design'}, 
    { id: 5, value: 'Devops' }, 
    { id: 6, value: 'Architecture Design' }, 
    { id: 7, value: 'Other' }
]