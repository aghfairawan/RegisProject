import { Text, Card } from '../../components';
import { Input, Button } from 'antd';
import { useFormik } from 'formik'
import * as yup from 'yup'

interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

const initialValues = {
    street: '',
    city: '',
    state: '',
    zipCode: ''
}

const validationSchema = yup.object({
    street: yup.string().required('ini wajib di isi'),
    city: yup.string().required('ini wajib di isi'),
    state: yup.string().required('ini wajib di isi'),
    zipCode: yup.string().required('ini wajib di isi').matches(/^\d{5}(-\d{4})?$/,'Zip Code must be in the format "XXXXX" or "XXXXX-XXXX"')

})

const AddressInformation = ()=>{
    const handleSubmit = (values: Address) =>{
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return(
        <Card title={'Address information'}>

            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <Text>Street Address :</Text>
                    <Input.TextArea rows={5} name={'street'} value={formMik.values.street} onChange={formMik.handleChange('street')} status={formMik.errors.street && 'error'}/>
                    {formMik.errors.street &&(
                        <Text>{formMik.errors.street}</Text>
                    )}
                </div>
                <div>
                    <Text>City :</Text>
                    <Input name={'city'} value={formMik.values.city} onChange={formMik.handleChange('city')} status={formMik.errors.city && 'error'}></Input>
                    {formMik.errors.city &&(
                        <Text>{formMik.errors.city}</Text>
                    )}
                </div>
                <div>
                    <Text>State :</Text>
                    <Input name={'state'} value={formMik.values.state} onChange={formMik.handleChange('state')} status={formMik.errors.state && 'error'}></Input>
                    {formMik.errors.state &&(
                        <Text>{formMik.errors.state}</Text>
                    )}
                </div>
                <div>
                    <Text>Zip Code :</Text>
                    <Input name={'zipCode'} value={formMik.values.zipCode} onChange={formMik.handleChange('zipCode')} status={formMik.errors.zipCode && 'error'}></Input>
                    {formMik.errors.zipCode &&(
                        <Text>{formMik.errors.zipCode}</Text>
                    )}
                </div>
                <Button type={'primary'} htmlType="submit" >Submit</Button>

            </form>

        </Card>
    )
}

export default AddressInformation