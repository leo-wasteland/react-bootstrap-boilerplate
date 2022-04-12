import { Button, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { exampleCreate } from '../requests';
import { CustomInput } from '../../../components/Input/input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface IExample {
  name: string;
  age: number;
}

const ExampleForm: React.FC = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      age: yup.number().positive().integer().required(),
    })
    .required();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IExample>({ resolver: yupResolver(schema) });

  const swal = withReactContent(Swal);

  const create = async (data: IExample) => {
    try {
      await exampleCreate({
        name: data.name,
        age: Number(data.age),
      });

      swal.fire({
        icon: 'success',
        title: 'Sucesso',
        showConfirmButton: false,
        timer: 1500,
        text: 'Example created successfully!',
      });
    } catch (err: any) {
      swal.fire({
        icon: 'error',
        title: 'Error',
        showConfirmButton: false,
        timer: 1500,
        text: err,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(create)}>
      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <CustomInput register={register('name')} errors={errors.name} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <CustomInput
            type="number"
            register={register('age')}
            errors={errors.age}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ExampleForm;
