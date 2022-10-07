import React, { useContext, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Remove, Update } from '../redux/actions/action';
import { deleteContext } from './context/ContextProvider';


const Todo = () => {
    const { userData } = useSelector((state) => state.todoReducer);
    //console.log(userData);
    const dispatch = useDispatch();
    const { dltTask, setDeltTask } = useContext(deleteContext)
    const [Showeye, setShoweye] = useState(false);
    const [showeyeValue, setShoweyeValue] = useState("");
    const removeData = (id) => {
        dispatch(Remove(id));
        setDeltTask(true);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [ind, setInd] = useState("");
    const [update, setUpdate] = useState("");

    const handleShow = (ele) => {
        setUpdate(ele)
        setShow(true)

    }

    const updateData = () => {
        dispatch(Update(update, ind));
        handleClose();

    }
    return (
        <>
            <div className="col-lg-5 mx-auto mt-2">
                {
                    userData.map((item, k) => {
                        return (
                            <>
                                <div className=" d-flex justify-content-between align-items-center px-2 mb-2 " key={k} style={{ background: '#dcdde1', borderRadius: "3px", height: '50px' }} >
                                    <li style={{ listStyle: "none" }}>{item}</li>
                                    <div className='icons col-lg-3 py-2 d-flex justify-content-between align-items-center'>
                                        <EditIcon
                                            onClick={() => {
                                                handleShow(item)
                                                setInd(k)
                                            }}
                                            style={{ color: "#3c40c6", cursor: "pointer" }} />

                                        <DeleteForeverIcon
                                            onClick={() => removeData(k)}
                                            style={{ color: "red", cursor: "pointer" }} />

                                        <RemoveRedEyeIcon
                                            onClick={() => {
                                                setShoweyeValue(item)
                                                setShoweye(true)
                                            }}
                                            style={{ color: "#1dd1a1", cursor: "pointer" }} />
                                            
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <Modal show={Showeye} >
                    <h2 className='mx-auto'>{showeyeValue}</h2>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShoweye(false)} >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show} onHide={handleClose}>
                    <h3 className='text-center'>Update Your Task!!!!</h3>
                    <Modal.Header >
                        <Modal.Title>
                            <div className='todo col-lg-8 mx-auto d-flex justify-content-between align-items-center'>
                                <input value={update} className='mt-2 form-control'
                                    onChange={(e) => setUpdate(e.target.value)}
                                />
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={updateData}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )
}

export default Todo