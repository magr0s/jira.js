import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
import { RequestConfig } from '../requestConfig';

export class IssueProperties {
  constructor(private client: Client) { }
  async bulkSetIssuesProperties<T = any>(parameters?: Parameters.BulkSetIssuesProperties, callback?: Callback<T>): Promise<void>;
  async bulkSetIssuesProperties<T = any>(parameters?: Parameters.BulkSetIssuesProperties, callback?: undefined): Promise<T>;
  async bulkSetIssuesProperties<T = any>(parameters?: Parameters.BulkSetIssuesProperties, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/3/issue/properties',
      method: 'POST',
      data: {
        entitiesIds: parameters?.entitiesIds,
        properties: parameters?.properties,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async bulkSetIssueProperty<T = any>(parameters: Parameters.BulkSetIssueProperty, callback: Callback<T>): Promise<void>;
  async bulkSetIssueProperty<T = any>(parameters: Parameters.BulkSetIssueProperty, callback?: undefined): Promise<T>;
  async bulkSetIssueProperty<T = any>(parameters: Parameters.BulkSetIssueProperty, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/issue/properties/${parameters.propertyKey}`,
      method: 'PUT',
      data: {
        value: parameters.value,
        expression: parameters.expression,
        filter: parameters.filter,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async bulkDeleteIssueProperty<T = any>(parameters: Parameters.BulkDeleteIssueProperty, callback: Callback<T>): Promise<void>;
  async bulkDeleteIssueProperty<T = any>(parameters: Parameters.BulkDeleteIssueProperty, callback?: undefined): Promise<T>;
  async bulkDeleteIssueProperty<T = any>(parameters: Parameters.BulkDeleteIssueProperty, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/issue/properties/${parameters.propertyKey}`,
      method: 'DELETE',
      data: {
        entityIds: parameters.entityIds,
        currentValue: parameters.currentValue,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async getIssuePropertyKeys<T = Models.PropertyKeys>(parameters: Parameters.GetIssuePropertyKeys, callback: Callback<T>): Promise<void>;
  async getIssuePropertyKeys<T = Models.PropertyKeys>(parameters: Parameters.GetIssuePropertyKeys, callback?: undefined): Promise<T>;
  async getIssuePropertyKeys<T = Models.PropertyKeys>(parameters: Parameters.GetIssuePropertyKeys, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/issue/${parameters.issueIdOrKey}/properties`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async getIssueProperty<T = Models.EntityProperty>(parameters: Parameters.GetIssueProperty, callback: Callback<T>): Promise<void>;
  async getIssueProperty<T = Models.EntityProperty>(parameters: Parameters.GetIssueProperty, callback?: undefined): Promise<T>;
  async getIssueProperty<T = Models.EntityProperty>(parameters: Parameters.GetIssueProperty, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/issue/${parameters.issueIdOrKey}/properties/${parameters.propertyKey}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async setIssueProperty<T = any>(parameters: Parameters.SetIssueProperty, callback: Callback<T>): Promise<void>;
  async setIssueProperty<T = any>(parameters: Parameters.SetIssueProperty, callback?: undefined): Promise<T>;
  async setIssueProperty<T = any>(parameters: Parameters.SetIssueProperty, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/issue/${parameters.issueIdOrKey}/properties/${parameters.propertyKey}`,
      method: 'PUT',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async deleteIssueProperty<T = void>(parameters: Parameters.DeleteIssueProperty, callback: Callback<T>): Promise<void>;
  async deleteIssueProperty<T = void>(parameters: Parameters.DeleteIssueProperty, callback?: undefined): Promise<T>;
  async deleteIssueProperty<T = void>(parameters: Parameters.DeleteIssueProperty, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/issue/${parameters.issueIdOrKey}/properties/${parameters.propertyKey}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
}