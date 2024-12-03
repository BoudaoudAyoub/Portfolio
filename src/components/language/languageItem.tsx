import ILanguageItem from "./ILanguageItem";

export default interface ILanguageItemProps {
    language: ILanguageItem;
    handleLanguageChange: (value: string) => void
}

export const LanguageItem: React.FC<ILanguageItemProps> = ({ language, handleLanguageChange }) => {
    return(
        <div className="py-2 flex w-full items-center cursor-pointer text-[14px] hover:text-sky-500 dark:hover:text-sky-400"            
            key={language.key}
        >
            <div 
                key={language.key}
                className={`dark:text-slate-500`}
                onClick={() => handleLanguageChange(language.name)}
                style={{
                    display:"flex",
                    alignItems:"center"
                }}
            >
                {language.Flag && <language.Flag className="h-4 w-4 mr-4 ml-4" />}
                    <span className="flex-grow-1">{language?.displayName}</span>
                {/* {lang.name === current  && (
                    <TiInputChecked className="ml-2 size-5 mt-0.5" />
                )} */}
            </div>
        </div>
    )
}