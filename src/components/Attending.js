import { Button, CircularProgress, Grid, TextField } from "@mui/material"
import Heading from "./Heading"
import { useState } from 'react'
import axios from "axios"
import { enqueueSnackbar } from 'notistack'

const Attending = () => {
    const [disable, setDisable] = useState(false)
    const [data, setData] = useState({
        name: '',
        message: '',
        errors: {}
    })


    const handleOnChange = (e) => {
        const targetName = e.target.name
        const targetValue = e.target.value

        if (targetName.trim().length > 0) setDisable(false)
        let data = { [targetName]: targetValue }
        let err = validate(data);
        setData((prev) => {
            return {
                ...prev,
                [targetName]: targetValue,
                errors: { ...prev.errors, ...err }
            }
        })
        console.log("data:", data)
    }


    const validate = (dataToValidate) => {
        console.log("validate dataToValidate:", dataToValidate)
        let name = '',
            message = '',
            err = {};

        if (dataToValidate.hasOwnProperty('name')) {
            let nameRegex = /^[a-zA-Z ]{2,40}$/;
            if (dataToValidate.name === '') {
                name = 'Name cannot be blank!'
            } else if (!nameRegex.test(dataToValidate.name)) {
                name = "Kindly enter a valid name."
            } else {
                name = ''
            }
            err.name = name
        }


        // if (dataToValidate.hasOwnProperty('message')) {
        //     let messageRegex = /(?:^|\s+)alphanumericOnly(?:\s+|$)/;
        //     if (dataToValidate.message === '') {
        //         message = 'message cannot be blank!'
        //     } else if (!messageRegex.test(dataToValidate.message)) {
        //         message = "Kindly enter a valid message."
        //     } else {
        //         message = ''
        //     }
        //     err.message = message
        // }

        setData((prev) => {
            return {
                ...prev,
                errors: { ...prev.errors, ...err }
            }
        })

        return err
    }

    const handleSubmit = () => {
        const newData = {
            name: data.name,
            message: data.message,
        }

        const err = validate(newData)
        console.log("err:", err)

        const model = {
            name: data.name,
            message: data.message,
        }

        console.log("model:", model)
        let flag = true
        for (let key in err) {
            if (err[key] !== '') flag = false
        }

        console.log("@##@: ", process.env.REACT_APP_API_URL)

        if (flag) {
            setDisable(true)
            axios.post(`${process.env.REACT_APP_API_URL}/message`, model)
                .then((res) => {
                    console.log("get surveys:", res.data)
                    enqueueSnackbar('Thanks for submitting your message!', { variant: 'success', autoHideDuration: 4000 })
                    setDisable(false)
                    window.scrollTo(0,0)
                })
                .catch((err) => {
                    console.log("get surveys error:", err)
                    setDisable(false)
                        enqueueSnackbar('Something went wrong!', { variant: 'info', autoHideDuration: 2000 })
                })
        } else {
            enqueueSnackbar('Validate all fields!', { variant: 'error', autoHideDuration: 1500 })
        }

    }



    return (
        <Grid container className="center attending">
            <Grid item xs={12} sm={12} md={12}>
                <Heading name="Are you attending?" />
                <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdycnjTBCHCuOKAX4EAcHgyZpoRJRk9N-rn9vPDLEzX2pLHQA/viewform?embedded=true" 
                width="400" height="670" frameborder="0" marginheight="0" marginwidth="0"
                >Loading…</iframe>
            </Grid>
            <Grid item container xs={12} sm={12} md={3}></Grid>
            {/* <div className="overlay"></div> */}
        </Grid >
    )
}

export default Attending