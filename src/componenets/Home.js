
import { Button } from '@mui/material'
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import { add } from '../redux/actions/action';
import { useDispatch } from 'react-redux';

const Home = () => {
    const [data, setData] = useState("");
    //console.log(data);
    const dispatch = useDispatch();

    const addData = ()=>{
    dispatch(add(data))
    setData("");
    }
    return (
        <>
            <div className="container">
                <section className='mt-3 text-center'>
                    <h3>Enter Your Task</h3>

                    <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-items-center'>
                        <input value={data} 
                         onChange={(e) => setData(e.target.value)} className='form-control' />
                        <Button
                        onClick={() => addData()} variant='' style={{ background: "#ee5253", color:"white " }} className='mx-2'>
                            <AddIcon />
                        </Button>
                    </div>
                    
                    <Todo/>
                </section>
            </div>
        </>
    )
}

export default Home