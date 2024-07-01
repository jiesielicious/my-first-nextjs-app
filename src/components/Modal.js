import Image from "next/image";
import { IoClose } from "react-icons/io5";
import SkillComponent from "./SkillComponent";

const Modal = ({state, details, toggleModal}) => {
    return state ? (
        <div onClick={toggleModal} className="fixed inset-0 w-full h-screen bg-black/25 p-4 backdrop-blur-sm z-[9999]  flex items-center justify-center">
            <div className="absolute right-[10px] top-[10px] cursor-pointer">
                <IoClose 
                    onClick={toggleModal}
                    className="text-white" 
                    size={24}
                />
            </div>
            <div className="relative max-w-screen-xl w-full bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-100 dark:border-zinc-700 max-h-[80vh]">
                <div className="flex flex-wrap gap-5 w-full items-center" key={details.id}>
                    <div className="relative w-full lg:w-[400px] rounded-lg overflow-hidden">
                        <div className="pt-[56.25%] ">
                            <Image 
                                src={details.image}
                                fill
                                className="w-full h-full absolute inset-0"
                                alt="Project Image"
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg md:text-xl font-bold text-zinc-700 dark:text-zinc-400 leading-[24px] mb-2">
                            {details.title}
                        </h2>
                        <div className="flex flex-row flex-wrap items-center gap-5">
                            {details.skills.map(skill => (
                                <SkillComponent skill={skill} key={skill.id}/>
                            ))}
                        </div>
                        <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mt-2">
                            {details.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ) : ("");
}

export default Modal;