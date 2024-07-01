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
        <div className="md:text-sm text-xs font-medium text-center rounded-xl text-gray-300 bg-sky-900">
            <ul className="grid grid-cols-4">
                {['Residential', 'Commercial', 'Service Apartments','Industrial'].map((tab) => (
                    <li className="me-2" key={tab}>
                        <a
                            href="#"
                            onClick={() => handleTabClick(tab)}
                            className={`inline-block p-4 m-4  border-b-2 rounded-t-lg   ${
                                activeTab === tab
                                    ? 'text-white border-white'
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
