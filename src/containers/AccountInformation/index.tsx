import { Text, Card } from '../../components';
import { Input, Button } from 'antd';
import { useFormik } from 'formik'
import * as yup from 'yup'

interface Account {
    username: string;
    password: string;
}

const initialValues = {
    username: '',
    password: '',
}

const validationSchema = yup.object({
    username: yup.string().required('ini wajib di isi'),
    password: yup.string().required('ini juga wajib yaa').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character')

})

const FormAccount = () => {

    const handleSubmit = (values: Account) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
        <Card title={'Account Information'}>

            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <Text>Username :</Text>
                    <Input name={'username'} value={formMik.values.username} onChange={formMik.handleChange('username')} status={formMik.errors.username && 'error'}></Input>
                    {formMik.errors.username && (
                        <Text>{formMik.errors.username}</Text>
                    )}
                </div>
                <div>
                    <Text>Password :</Text>
                    <Input
                        type="password" // Set the input type to 'password'
                        name="password"
                        value={formMik.values.password}
                        onChange={formMik.handleChange('password')}
                        status={formMik.errors.password && 'error'}
                    />
                    {formMik.errors.password && (
                        <Text>{formMik.errors.password}</Text>
                    )}
                </div>

                <Button type={'primary'} htmlType="submit" >Submit</Button>
            </form>
        </Card>
    )
}

export default FormAccount