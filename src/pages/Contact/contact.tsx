import { Box } from "@mui/material";
import ContactForm from "./contactForm";
export default function Works() {

    
    return(
        <Box className="px-8 xl:px-28 h-full overflow-x-hidden flex">
            <Box className="xl:w-[60%] mx-auto my-10"
                style={{
                    marginBottom: "10px"
                }}
            >
                <span className="block text-center xl:text-left py-5 xl:p-0">
                    <h3 className='text-4xl text-[#2D3E50] dark:text-[#F5F8FA] font-bold'>Contact</h3>
                    <p className='text-sm text-[#2D3E50] dark:text-[#F5F8FA] py-4'>
                        Explore my journey through various roles and companies, where I’ve progressed from jurnior developer to backend engineer to team leadership. This section highlights the different positions I’ve held, the experiences gained in each that demonstrates my growth and adaptability across diverse environments and teams
                    </p>
                </span>
                <ContactForm />
            </Box>
        </Box>
    )
}