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
        <div className="md:text-sm text-xs font-medium text-center rounded-xl text-gray-300 bg-sky-700">
            <ul className="grid grid-cols-2 md:grid-cols-4">
                {['Residential', 'Commercial', 'Industrial','Service Apartments'].map((tab) => (
                    <li className="me-2" key={tab}>
                        <a
                            href="#"
                            onClick={() => handleTabClick(tab)}
                            className={`inline-block m-4 p-4 rounded-lg  ${
                                activeTab === tab
                                    ? 'text-black border-white bg-white'
                                    : 'border-transparent bg-sky-900'
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
