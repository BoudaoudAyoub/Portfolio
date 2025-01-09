import ILanguageItem from "./ILanguageItem";
import i18n from 'i18next';
export default interface ILanguageItemProps {
    language: ILanguageItem;
    currentLanguage: ILanguageItem;
}

export const LanguageItem: React.FC<ILanguageItemProps> = ({ language, currentLanguage }) => {

    const handleLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng)
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error changing language:', error);
            });
    };    

    return(
        <div className="py-2 flex w-full items-center cursor-pointer text-[14px] hover:text-sky-500 dark:hover:text-sky-400"            
            key={language.key}            
            onClick={() => handleLanguageChange(language.name)}
        >
            <div 
                key={language.key}
                className={`dark:text-slate-500`}
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