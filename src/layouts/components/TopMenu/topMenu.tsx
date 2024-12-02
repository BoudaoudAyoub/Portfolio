import Options from './options'
import SoftMode from '../../../components/softMode'
import { Disclosure, DisclosureButton } from '@headlessui/react'
import Language from '../../../components/language/lanaguage'

export default function TopMenu() {
    
    return(
        <Disclosure as="nav" className="dark:bg-gray-800 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open menu</span>
                    </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                        <p className='text-[24px] font-[500] font-mono dark:text-gray-300'>Ayoub.</p>
                    </div>
                <div className="hidden sm:block ml-auto">
                    <div className="flex space-x-4">
                        <Options />
                    </div>
                </div>
                <div className="hidden sm:block ml-auto">
                    <div className="flex space-x-4">
                        <Language />
                        <SoftMode />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </Disclosure>
    )
}