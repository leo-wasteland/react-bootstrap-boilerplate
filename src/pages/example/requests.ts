import { AxiosResponse } from 'axios';
import api from '../../services/api';
import { IExample } from './form/example';

export const exampleCreate = (
  Example: IExample,
): Promise<AxiosResponse<IExample>> => {
  return api.request({
    url: `example`,
    data: Example,
    method: 'POST',
  });
};
