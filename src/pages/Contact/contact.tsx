import { Box } from "@mui/material";
import ContactForm from "./contactForm";
import { useTranslation } from "react-i18next";
export default function Works() {
    const { t } = useTranslation();
    return(
        <Box className="px-8 xl:px-28 h-full overflow-x-hidden flex">
            <Box className="xl:w-[60%] mx-auto my-10"
                style={{
                    marginBottom: "10px"
                }}
            >
                <span className="block text-center xl:text-left py-5 xl:p-0">
                    <h3 className='text-4xl text-[#2D3E50] dark:text-[#F5F8FA] font-bold'>{t('contactForm.head')}</h3>
                    <p className='text-sm text-[#2D3E50] dark:text-[#F5F8FA] py-4'>
                        {t('contactForm.text')}
                    </p>
                </span>
                <ContactForm />
            </Box>
        </Box>
    )
}