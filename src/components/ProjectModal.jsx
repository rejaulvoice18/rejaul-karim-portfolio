import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdOutlinePreview } from "react-icons/md";

const ProjectModal = ({ project, onClose }) => {
    const { thumbnail, projects_name, details, skills, git_client, git_server, web } = project;
    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4" style={{
                                boxShadow: `0 0 60px 5px rgba(255, 115, 0, 0.4), 0 0 150px 30px rgba(148, 0, 211, 0.2)`
                            }}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-[#1f1f1f] text-white p-6 rounded-2xl w-full max-w-3xl relative shadow-lg"
                style={{
                    boxShadow: `0 0 60px 5px rgba(255, 115, 0, 0.4), 0 0 150px 30px rgba(148, 0, 211, 0.2)`
                }}
            >
                {/* Header: Title and Close Button */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">{projects_name}</h2>
                    <button
                        onClick={onClose}
                        className="text-white text-2xl hover:text-pink-500 cursor-pointer"
                    >
                        <IoClose />
                    </button>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 mb-6" />

                {/* Project Image */}
                <img
                    src={thumbnail}
                    alt={projects_name}
                    className="rounded-xl w-full mb-6 h-64 object-cover"
                />

                {/* Description */}
                <p className="text-gray-300 mb-4 text-[12px]">
                    {details}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                    <h3 className="text-[14px] font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills?.map((skill, idx) => (
                            <span
                                key={idx}
                                className="bg-[#333] text-white px-3 py-1 text-[10px] rounded-md"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">

                    <div className="flex items-center gap-1 px-3 h-[30px] text-xs rounded-md bg-gray-700 hover:bg-gray-700 transition text-white">
                        <IoLogoGithub />
                        <a
                            href={git_client}
                            target="_blank"
                            rel="noopener noreferrer"
                            
                        >
                            Git Client
                        </a>
                    </div>
                    <div className="flex items-center gap-1 px-3 h-[30px] text-xs rounded-md bg-gray-700 hover:bg-gray-700 transition text-white">
                        <IoLogoGithub />
                        <a
                            href={git_server}
                            target="_blank"
                            rel="noopener noreferrer"
                            
                        >
                            Git server
                        </a>
                    </div>

                    <div className="flex items-center gap-1 px-3 h-[30px] text-xs rounded-md bg-gradient-to-r from-pink-600 to-purple-700 hover:bg-pink-700 transition text-white">
                        <MdOutlinePreview /> <a
                            href={web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            Live Web
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
        // <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
        //     <motion.div
        //         initial={{ scale: 0.8, opacity: 0 }}
        //         animate={{ scale: 1, opacity: 1 }}
        //         exit={{ scale: 0.8, opacity: 0 }}
        //         className="bg-[#1f1f1f] text-white p-6 rounded-xl w-full max-w-xl relative"
        //     >
        //         <button
        //             onClick={onClose}
        //             className="absolute top-3 right-3 text-white text-2xl hover:text-pink-500"
        //         >
        //             <IoClose />
        //         </button>
        //         <img src={thumbnail} alt={projects_name} className="rounded-lg mb-4" />
        //         <h2 className="text-2xl font-bold mb-2">{projects_name}</h2>
        //         <p className="text-gray-300 mb-4">{details}</p>
        //         <div className="flex flex-wrap gap-2">
        //             {skills?.map((skill, idx) => (
        //                 <span
        //                     key={idx}
        //                     className="bg-pink-600 text-white px-2 py-1 text-xs rounded"
        //                 >
        //                     {skill}
        //                 </span>
        //             ))}
        //         </div>
        //     </motion.div>
        // </div>
    );
};

export default ProjectModal;