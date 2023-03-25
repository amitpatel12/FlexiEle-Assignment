import React, { useState } from 'react'
import Modal from '../modal/Add_Modal'
import Post from '../post/Post'
import './Details.css'

const Details = () => {
    const [source, setSource] = useState([])
    const [applied, setApplied] = useState([])
    const [intouch, setIntouch] = useState([])
    const [interview, setInterview] = useState([])
    const [hired, setHired] = useState([])
    const [rejected, setRejected] = useState([])


  const dragingOver = (e) => {
    e.preventDefault()
    console.log("dragOver starting...")
  }

  const dragDrop = (e, setData) => {
    console.log("You have Dropped")
    let index = e.dataTransfer.getData('index')
    let type = e.dataTransfer.getData('type')
    // setApplied(previous => [...previous, {item}])
    // console.log(setFunction)
    if(type == "source"){
      let data = source[index]
      let updateData = source
      updateData.splice(index, 1)
      setSource(updateData)
      setData(previous => [...previous, data])
    }
    if(type == "applied"){
      let data = applied[index]
      let updateData = applied
      updateData.splice(index, 1)
      setApplied(updateData)
      setData(previous => [...previous, data])
    }

    if(type == "intouch"){
      let data = intouch[index]
      let updateData = intouch
      updateData.splice(index, 1)
      setIntouch(updateData)
      setData(previous => [...previous, data])
    }


    if(type == "interview"){
      let data = interview[index]
      let updateData = interview
      updateData.splice(index, 1)
      setInterview(updateData)
      setData(previous => [...previous, data])
    }


    if(type == "hired"){
      let data = hired[index]
      let updateData = hired
      updateData.splice(index, 1)
      setHired(updateData)
      setData(previous => [...previous, data])
    }

    if(type == "rejected"){
      let data = rejected[index]
      let updateData = rejected
      updateData.splice(index, 1)
      setRejected(updateData)
      setData(previous => [...previous, data])
    }
    
    console.log(index, type)
    //action store id
  }


  return (
    <div className='application__details'>
      <div className='source__details' onDragOver={dragingOver} onDrop={(e) =>dragDrop(e,setSource)}>
        {
            <Post data = {source} type="source"/>
        }
       <Modal type="Source" setData = {setSource}/>
      </div>

        <div className='applied__details' onDragOver={dragingOver} onDrop={(e) =>dragDrop(e,setApplied)}>
        {
            <Post data = {applied} type="applied"/>
        }
        <Modal type="Applied" setData={setApplied}/>
      </div>

      <div className='intouch__details' onDragOver={dragingOver} onDrop={(e) =>dragDrop(e,setIntouch)}>
      {
            <Post data = {intouch} type="intouch"/>
        }
        <Modal type="In-touch" setData={setIntouch}/>
      </div>

      <div className='interview__details' onDragOver={dragingOver} onDrop={(e) =>dragDrop(e,setInterview)}>
      {
            <Post data = {interview} type="interview"/>
        }
        <Modal type="Interview" setData={setInterview}/>
      </div>

      <div className='hired__details' onDragOver={dragingOver} onDrop={(e) =>dragDrop(e,setHired)}>
      {
            <Post data = {hired} type="hired"/>
        }
        <Modal type="Hired" setData={setHired}/>
      </div>

      <div className='rejected__details' onDragOver={dragingOver} onDrop={(e) =>dragDrop(e,setRejected)}>
      {
            <Post data = {rejected} type="rejected"/>
        }
        <Modal type="Rejected" setData={setRejected}/>
      </div>
    </div>
  )
}

export default Details
