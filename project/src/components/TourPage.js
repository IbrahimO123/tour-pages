import React, {useEffect, useState}from 'react';
import axios from 'axios';
import Loading from './Loading.js'

function TourPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [toggle, setToggle] = useState(true)
    const [tours, setTours] = useState([]) ;
    const pagesApi = 'https://course-api.com/react-tours-project';
    useEffect(
        () => {
            axios.get(pagesApi)
            .then(
                (res) => {
                    setTours(res.data)
                    setIsLoading(false);
                })
            .catch(
                (err) => {
                    console.log(`${err}: Ooops there is an error somewhere !!!`)
                }
            )}
        ,[])

        const delTour = () => {
            let del = document.querySelectorAll(".del");
            console.log(del)
           for (let i=0; i < del.length; i++) {
               let btn = del[i];
               btn.addEventListener("click",(e)=>{
                   btn.parentElement.parentElement.parentElement.remove();   
               })
           }
        }
        const showMore = () => {
             setToggle(toggle => !toggle )
        }
    return (

        <>{ isLoading?<Loading/> :
          <div className='container w-75' >
            <div className='mb-3 pb-2 mt-5' >
                <div className='text-center h1' >Our Tours</div>
                <div className='underline mt-2' ></div>
            </div>
                    {
                        tours.map(tour => 
                        <div className='container mb-5' key={tour.id} >
                            <div className='card'>
                             <img className='card-img img img-fluid img-top' src={tour.image} alt={tour.name} title={tour.name} ></img>
        
                                    <div className='card-body' >
                                        <div className='d-flex justify-content-between align-content-between pb-3'>
                                                <span className='card-title h5' >{tour.name} </span>
                                                <span className='tour-price' > ${tour.price} </span>
                                        </div>
                                        <div className='tour-info d-inline' >
                                        {toggle?tour.info.slice(0,200)+'...': tour.info }
                                        <a href='##' className='toggle' onClick={showMore} >{toggle?' show more':' show less'}</a>
                                        </div>
                                        <div className='mx-auto text-center footer' >
                                        <button onClick={delTour} className='delete-btn button del'>Not Interested</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        )
                    }   
          </div>
        }</>
    )
}


export default TourPage
