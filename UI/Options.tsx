"use client";
import { useState } from 'react';
import Search from '@/components/Search';

export default function Options() {
    const [activeTab, setActiveTab] = useState('Commercial');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="text-sm font-medium text-center p-5 md:p-10 rounded-lg bg-white max-w-full md:max-w-[50%] text-gray-500 border-b border-gray-200">
            <ul className="flex flex-wrap justify-center pb-5 md:pb-10">
                {['Residential', 'Commercial', 'Service Apartments'].map((tab) => (
                    <li className="me-2" key={tab}>
                        <a
                            href="#"
                            onClick={() => handleTabClick(tab)}
                            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600  ${
                                activeTab === tab
                                    ? 'text-blue-600 border-blue-600'
                                    : 'border-transparent'
                            }`}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
            <Search />
        </div>
    );
}
