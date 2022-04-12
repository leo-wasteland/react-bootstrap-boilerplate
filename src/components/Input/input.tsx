import { Collapse, Form } from 'react-bootstrap';
import { FieldError } from 'react-hook-form';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  errors: FieldError | undefined;
  type?: string;
}

export const CustomInput: React.FC<IProps> = ({
  register,
  errors,
  ...props
}) => {
  return (
    <div>
      <Form.Control {...register} {...props} />
      <Collapse in={errors ? true : false}>
        <p style={{ color: 'tomato' }}>{errors?.message}</p>
      </Collapse>
    </div>
  );
};
