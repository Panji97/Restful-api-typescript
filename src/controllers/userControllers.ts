import express from 'express'

import User from '../models/index'

export const getUser = async (req:express.Request,res: express.Response)=>{
    try {
        const user = await User.find()

        if(!user) return res.sendStatus(404)
    
        return res.status(200).json({
            message:"success",
            data:user
        })
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
   
}

export const getUserById = async (req:express.Request, res: express.Response)=>{
    try {
        const {id} = req.params

        const user = await User.findById(id)
        console.log(user)

        if(!user) return res.sendStatus(404)

        return res.status(200).json({
            message:"success",
            data:user
        })
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const createUser = async (req:express.Request, res: express.Response)=>{
    try {
        const {name,age} = req.body
        const user = await User.create({name,age})

        if(!user) return res.sendStatus(400)

        return res.status(201).json({
            message:'Success',
            data:user
        })
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const updateUser = async (req:express.Request,res: express.Response)=>{
    try {
        const {id} = req.params
        const {name,age} = req.body

        const user = await User.findByIdAndUpdate(id,{name,age})

        if(!user) return res.sendStatus(404)

        return res.status(200).json({
            message:'User updated successfully',
           })

    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const deleteUser = async (req:express.Request,res: express.Response)=>{
    try {
        const {id} = req.params

        const user = await User.findByIdAndDelete(id)

        if(!user) return res.sendStatus(404)

        return res.status(200).json({
            message: 'User deleted successfully'
        })
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}