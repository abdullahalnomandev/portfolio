import socialLinks from '@/data/socialLinks';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="mt-40 w-16 z-0 fixed bottom-0 left-0">
            <ul className="flex flex-col items-center space-y-4">
                {socialLinks().map(({ id, href, hoverColor, icon: Icon }) => (
                    <li key={id} className="text-white hover:text-blue-700 transition duration-300">
                        <Link href={href} target="_blank" rel="noopener noreferrer">
                            <Icon className={hoverColor} size={25} />
                        </Link>
                    </li>
                ))}
            </ul>
            <p className="h-40 text-blue-600 w-[1px] mt-2 mx-auto bg-blue-500"></p>
        </div>
    );
};

export default Sidebar;
