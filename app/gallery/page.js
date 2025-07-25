'use client';
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';

const eventData = [{
        title: 'Wedding',
        images: ['/wedding1.jpg', '/wedding2.jpg', '/wedding3.jpg'],
    },
    {
        title: 'Birthday',
        images: ['/birthday1.jpg', '/birthday2.jpg', '/birthday3.jpg'],
    },
    {
        title: 'Concert',
        images: ['/concert1.jpg', '/concert2.jpg', '/concert3.jpg'],
    },
    {
        title: 'Sports Event',
        images: ['/sports1.jpg', '/sports2.jpg', '/sports3.jpg'],
    },
    {
        title: 'Festivals',
        images: ['/festival1.jpg', '/festival2.jpg', '/festival3.jpg'],
    },
    {
        title: 'Private Party',
        images: ['/party1.jpg', '/party2.jpg', '/party3.jpg'],
    },
    {
        title: 'Gala Dinner',
        images: ['/gala1.jpg', '/gala2.webp', '/gala3.jpg'],
    },
    {
        title: 'Conferences',
        images: ['/conference1.jpg', '/conference2.jpg', '/conference3.jpg'],
    },
];

export default function Gallery() {
    const [currentIndexes, setCurrentIndexes] = useState(
        Array(eventData.length).fill(0)
    );

    const handlePrev = (index) => {
        setCurrentIndexes((prev) => {
            const updated = [...prev];
            updated[index] =
                (updated[index] - 1 + eventData[index].images.length) %
                eventData[index].images.length;
            return updated;
        });
    };

    const handleNext = (index) => {
        setCurrentIndexes((prev) => {
            const updated = [...prev];
            updated[index] = (updated[index] + 1) % eventData[index].images.length;
            return updated;
        });
    };

    return ( <
        >
        <
        Head >
        <
        title > Gallery | IRFANI Events Management < /title> <
        /Head> <
        div className = "bg-black text-white min-h-screen p-10" >
        <
        header className = "relative flex items-center justify-center text-center h-[500px] bg-[url('/gallery.jpg')] bg-cover bg-center" >
        <
        h1 className = "text-5xl font-black text-pink-500" > Gallery < /h1> <
        /header> <
        div className = "grid grid-cols-1 md:grid-cols-2 gap-10 mt-10" > {
            eventData.map((event, i) => ( <
                div key = { event.title }
                className = "bg-gray-900 p-5 rounded-lg shadow-lg" >
                <
                h2 className = "text-2xl font-semibold mb-4 text-center" > { event.title } <
                /h2> <
                div className = "relative group" >
                <
                Image src = { event.images[currentIndexes[i]] }
                alt = { event.title }
                width = { 600 }
                height = { 256 }
                className = "w-full h-64 object-cover rounded" /
                >
                <
                button onClick = {
                    () => handlePrev(i) }
                className = "absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full px-3 py-1" >
                ‹
                <
                /button> <
                button onClick = {
                    () => handleNext(i) }
                className = "absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full px-3 py-1" >
                ›
                <
                /button> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        />
    );
}