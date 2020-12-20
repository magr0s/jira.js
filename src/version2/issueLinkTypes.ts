import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
import { RequestConfig } from '../requestConfig';

export class IssueLinkTypes {
  constructor(private client: Client) { }
  async getIssueLinkTypes<T = Models.IssueLinkTypes>(callback?: Callback<T>): Promise<void>;
  async getIssueLinkTypes<T = Models.IssueLinkTypes>(callback?: undefined): Promise<T>;
  async getIssueLinkTypes<T = Models.IssueLinkTypes>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/2/issueLinkType',
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async createIssueLinkType<T = Models.IssueLinkType>(parameters?: Parameters.CreateIssueLinkType, callback?: Callback<T>): Promise<void>;
  async createIssueLinkType<T = Models.IssueLinkType>(parameters?: Parameters.CreateIssueLinkType, callback?: undefined): Promise<T>;
  async createIssueLinkType<T = Models.IssueLinkType>(parameters?: Parameters.CreateIssueLinkType, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/2/issueLinkType',
      method: 'POST',
      data: {
        id: parameters?.id,
        name: parameters?.name,
        inward: parameters?.inward,
        outward: parameters?.outward,
        self: parameters?.self,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async getIssueLinkType<T = Models.IssueLinkType>(parameters: Parameters.GetIssueLinkType, callback: Callback<T>): Promise<void>;
  async getIssueLinkType<T = Models.IssueLinkType>(parameters: Parameters.GetIssueLinkType, callback?: undefined): Promise<T>;
  async getIssueLinkType<T = Models.IssueLinkType>(parameters: Parameters.GetIssueLinkType, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/2/issueLinkType/${parameters.issueLinkTypeId}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async updateIssueLinkType<T = Models.IssueLinkType>(parameters: Parameters.UpdateIssueLinkType, callback: Callback<T>): Promise<void>;
  async updateIssueLinkType<T = Models.IssueLinkType>(parameters: Parameters.UpdateIssueLinkType, callback?: undefined): Promise<T>;
  async updateIssueLinkType<T = Models.IssueLinkType>(parameters: Parameters.UpdateIssueLinkType, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/2/issueLinkType/${parameters.issueLinkTypeId}`,
      method: 'PUT',
      data: {
        id: parameters.id,
        name: parameters.name,
        inward: parameters.inward,
        outward: parameters.outward,
        self: parameters.self,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async deleteIssueLinkType<T = void>(parameters: Parameters.DeleteIssueLinkType, callback: Callback<T>): Promise<void>;
  async deleteIssueLinkType<T = void>(parameters: Parameters.DeleteIssueLinkType, callback?: undefined): Promise<T>;
  async deleteIssueLinkType<T = void>(parameters: Parameters.DeleteIssueLinkType, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/2/issueLinkType/${parameters.issueLinkTypeId}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
}
