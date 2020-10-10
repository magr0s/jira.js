import { AxiosRequestConfig } from 'axios';
import { Client } from '../../client';
import { Callback } from '../../callback';
import { Priority as PriorityResponse } from '../../models/v2';

export class IssuePriorities {
  constructor(private readonly client: Client) { }

  async getPriorities(parameters?: any, callback?: Callback<any>): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/priority',
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  async getPriority(parameters: {
    id: string;
  }, callback?: Callback<PriorityResponse>): Promise<PriorityResponse> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/priority/${parameters.id}`,
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }
}