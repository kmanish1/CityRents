"use client";
import { useState } from 'react';
import Search from '@/components/Search';
import SearchwithCity from '@/components/SearchwithCity';
export default function Options() {
    const [activeTab, setActiveTab] = useState('Commercial');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="text-sm border-2 border-gray-300 font-medium text-center p-5 rounded-lg bg-white  text-gray-500">
            <ul className="flex flex-wrap justify-center pb-5 md:pb-10">
                {['Residential', 'Commercial', 'Service Apartments','Industrial'].map((tab) => (
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
            <SearchwithCity />
        </div>
    );
}
