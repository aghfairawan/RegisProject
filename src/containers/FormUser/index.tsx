import { Text, Card } from '../../components';
import { Input, Button, DatePicker } from 'antd';
import { useFormik } from 'formik'
import * as yup from 'yup'

interface User {
    name: string;
    email: string;
    address?: string;
}

const initialValues = {
    name: '',
    email: '',
    date: ''
}

const validationSchema = yup.object({
    name: yup.string().required('ini wajib di isi'),
    email: yup.string().email('input emailnya yang bener dong bre').required('ini juga wajib yaa'),

})

const FormUser = () => {

    const handleSubmit = (values: User) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
        <Card title={'Personal Information'}>
            
            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <Text>Full Name :</Text>
                    <Input name={'name'} value={formMik.values.name} onChange={formMik.handleChange('name')} status={formMik.errors.name && 'error'}></Input>
                    {formMik.errors.name && (
                        <Text>{formMik.errors.name}</Text>
                    )}
                </div>
                <div>
                    <Text>Email :</Text>
                    <Input name={'email'} value={formMik.values.email} onChange={formMik.handleChange('email')} status={formMik.errors.email && 'error'}></Input>
                    {formMik.errors.email &&(
                        <Text>{formMik.errors.email}</Text>
                    )}
                </div>

                <div>
                <DatePicker/>
                </div>

                <Button type={'primary'} htmlType="submit" >Submit</Button>
            </form>
        </Card>
    )
}

export default FormUser