import { useState, useEffect } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';


import logoImage from './assets/logo-nlw-esports.svg';
import './styles/main.css';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';

interface Game {
   id: string;
   tittle: string;
   bannerURL: string;
   _count: {
      ads: number;
   }
}

const App = () => {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>

      <img src={logoImage}/>
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(item => {
          return (
            <GameBanner 
              bannerUrl={item.bannerURL}
              tittle={item.tittle}
              adsCount={item._count.ads}
              key={item.id}
            /> 
          )
        })} 
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>

    </div>  
  )
}

export default App