import React, {useEffect, useState}from 'react';
import axios from 'axios';
import Loading from './Loading.js'
import Header from './Header.js'

function TourPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [toggle, setToggle] = useState(true)
    const [tours, setTours] = useState([]) ;

    //const deleteTour = () => {
       // setTours(
       //     tours => tours.filter(page => page.id !== tour.id)
     //   )
   // }
    const pagesApi = 'https://course-api.com/react-tours-project';
    useEffect(
        () => {
            axios.get(pagesApi)
            .then(
                (res) => {
                    setTours(res.data)
                    setIsLoading(false)
                })
                .catch(
                (err) => {
                    console.log(`${err}: Ooops there is an error somewhere !!!`)
                }
            )}
        ,[])

   // const delTour = () => {
  //          let del = document.querySelectorAll(".del");
   //         console.log(del)
  //         for (let i=0; i < del.length; i++) {
 //              let btn = del[i];
//               btn.addEventListener("click",(e)=>{
//                   btn.parentElement.parentElement.parentElement.remove();   
//               })
//           }
//        }
        const showMore = () => {
             setToggle(toggle => !toggle )
        }
    return (

        <>{ isLoading?<Loading/> :
        tours.length > 0 ?
          <div className='section main' >
              <Header/>
                    {
                        tours.map(tour => 
                        <div className='single-tour mb-5' key={tour.id}>
                            <div className='card'>
                             <img className='rounded-top img img-fluid img-top' src={tour.image} alt={tour.name} title={tour.name} ></img>
        
                                    <div className='card-body' >
                                        <div className='pb-3 tour-info'>
                                                <h4>{tour.name} </h4>
                                                <h4 className='tour-price' > ${tour.price} </h4>
                                        </div>
                                        <div className='tour-info d-inline' >
                                        {toggle?tour.info.slice(0,200)+'...': tour.info }
                                        <a href='##' className='toggle' onClick={showMore} >{toggle?' show more':' show less'}</a>
                                        </div>
                                        <div className='mx-auto text-center footer' >    
        <button onClick={() => setTours(tours => tours.filter((item) => item.id !== tour.id ))} className='delete-btn button del'>Not Interested</button>
                                        </div>
                                    </div>
                            </div>
                        </div> 
                        )
                    }   
          </div> : 
          <div className='container w-100 w-md-75'> 
            <div className='mb-3 pb-2 mt-5 text-center' >
                    <div className='text-center h3' >No More Tours Remaining</div>
                    <a className='btn' href='/'>Refresh</a>
                </div>
          </div>

        }</>
    )
}


export default TourPage;
