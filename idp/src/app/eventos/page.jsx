

import { Roboto, Merriweather, Playfair_Display } from 'next/font/google';
import { title } from 'process';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const eventos = [
    {
        title: 'Event 1',
        image: '',
        description: 'lorem ipsur diengfew gwogsgb',
        date: '20 de abril de 2024',
    }
]

export default function Eventos() {
    return (
        <div>Eventos</div>
    )
}