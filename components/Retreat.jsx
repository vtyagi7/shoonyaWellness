"use client"
import { useEffect, useState } from "react"
import React from 'react'
import { useRef } from 'react';
import Retreats from './Retreats';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";



const Retreat = () => {

    const BaseURL = "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats";
    const limit=3;
    const [cards, setCards]=useState([]);
    const [page,setPage]=useState(1);
    const [filterType,setFilterType]=useState("");
    const [filterDate,setFilterDate]=useState("");
    const [filterSearch, setFilterSearch]=useState("");
    const inputRef = useRef("");
    
    
    
    const callAPI = async (filter, search, page, limit) => {

        let fetchURL = BaseURL + "?";
        if(filter) 
          fetchURL+="filter="+ filter + "&";
        
        if(search) 
          fetchURL+="search="+ search+ "&";
        
        if(page) 
          fetchURL+="page="+ page+ "&";
        
        if(limit) {
          fetchURL+="limit="+ limit+ "&";
        }

        console.log(fetchURL);
        let data = await fetch(fetchURL,{
            headers: {
             "Content-Type": "application/json",
           }
           });
        data= await data.json();
        console.log(data);
        if(data.length<=0)
            return;
        setCards(data);
        setPage(page);
        console.log(cards);
        console.log(page);


        
        };

    useEffect(() => {
        callAPI("","",page,limit);

    },[])
    function nextHandler(e){
        callAPI(filterType,filterSearch,page+1,limit);

    }
    function prevHandler(e){
        if(page<=1){
            return;
        }
        callAPI(filterType,filterSearch,page-1,limit);
    }

    function typeHandler(e){
        let filter=e.target.value;
        callAPI(filter,"",1,limit);
        setFilterType(filter);
    }

    function dateHandler(e){

    }

    function handleSearch( ) {
        debugger;
        let search=inputRef.current.value;
        
        console.log(search);
        callAPI("",search,1,limit);
        setFilterSearch(search);
      }

  return (
    <div className=' bg-[#405D72] w-screen h-auto flex justify-center items-center'>

    
            <div id="home" className=" border-8 border-[#F7E7DC] border-t-0 rounded-t-none rounded-md bg-[#FFF8F3]  w-11/12 h-5/6  " >

                    <div className='flex flex-col gap-4'>

            
                        <div className='flex sm:flex-row flex-col gap-2  justify-around pt-3 items-center'>
                            <div className='flex md:flex-row flex-col gap-2'>
                                    <select onChange={dateHandler} className=" text-white sm:text-base  xxs:text-sm font-montserrat  hover:bg-[#758694] bg-[#405D72] rounded-sm  px-2 py-2">
                                        <option value="">Filter by Date</option>
                                        <option value="2023">2023-2024</option>
                                        <option value="2024">2024-2025</option>
                                        
                                    </select>
                                
                                    <select onChange={typeHandler} className=" text-white sm:text-base  xxs:text-sm font-montserrat  hover:bg-[#758694] bg-[#405D72] rounded-sm  px-2 py-2">
                                        <option value="">Filter by Type</option>
                                        <option value="yoga">Yoga</option>
                                        <option value="meditation">Meditation</option>
                                        <option value="detox">Detox</option>
                                    </select>
                            </div>
                            
                            <div className='md:self-end self-center'>
                                <form className="flex items-center">   
                                    <div className=" w-full">
                                        <input type="text" id="simple-search" ref={inputRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  focus:ring-[#405D72] focus:border-[#405D72] block w-full ps-5 p-2.5" placeholder="Search retreats by title" required />
                                    </div>
                                    <button type="submit" onClick={handleSearch} className="p-2.5 ms-2 text-sm font-medium text-white hover:bg-[#758694] rounded-lg border border-[#758694] bg-[#405D72]">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </button>
                                </form>
                            </div>

                            

                        </div>

                        <div className=' bg-[#405D72]/50 backdrop-blur-md '>
                                <h2 className='py-2 font-montserrat lg:bold-28 md:bold-28 sm:bold-20 xs:bold-18 xxs:bold-16 text-[#fff] text-center'> Wellness Retreats </h2>
                        </div>

                        <div>        
                            <Retreats cards={cards}/>
                        </div>

                        <div className='flex md:flex-row flex-col gap-2 pb-1 items-center justify-center'>
                                <button onClick={prevHandler} className="text-white sm:text-base  xxs:text-sm font-montserrat  hover:bg-[#758694] bg-[#405D72] rounded-full flex flex-row gap-2 items-center justify-center px-4 py-2 ">
                                    <GrFormPrevious size={20}/> 
                                    <span className=''> Prev </span>
                                     
                                </button>
                                <button onClick={nextHandler} className="text-white sm:text-base  xxs:text-sm font-montserrat hover:bg-[#758694] bg-[#405D72] rounded-full flex flex-row gap-2 items-center justify-center px-4 py-2 ">
                                    <span> Next </span>
                                    <GrFormNext size={20}/> 
                                </button>
                            </div>
                    </div>
          
            </div>
    </div>
  )
}

export default Retreat