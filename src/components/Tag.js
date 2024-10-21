import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Tag = () => {

  const[tag, setTag]=useState('')

  const {gif,loading, fetchData}=useGif(tag)

  function clickHandler(){

    fetchData(tag);
  }

  function changeHandler(event){

    setTag(event.target.value)
  }
  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>
        Random {tag} Gif
      </h1>

      {

        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }
      <input
      className='w-10/12 bg-white opacity-70 text-lg py-2 rounded-lg mb-[6px] text-center'
      onChange={changeHandler}
      value={tag}
      />


      <button 
      className='w-10/12 bg-white opacity-70 text-lg py-2 rounded-lg mb-[20px] font-bold'
      onClick={clickHandler}>

        GENERATE
      </button>
    </div>
  )
}

export default Tag