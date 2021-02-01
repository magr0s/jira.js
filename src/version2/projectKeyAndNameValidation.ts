import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
import { RequestConfig } from '../requestConfig';

export class ProjectKeyAndNameValidation {
  constructor(private client: Client) { }
  /**
     * Validates a project key by confirming the key is a valid string and not in use.
     *
     * **[Permissions](#permissions) required:** None. */
  async validateProjectKey<T = Models.ErrorCollection>(parameters?: Parameters.ValidateProjectKey, callback?: Callback<T>): Promise<void>;
  /**
     * Validates a project key by confirming the key is a valid string and not in use.
     *
     * **[Permissions](#permissions) required:** None. */
  async validateProjectKey<T = Models.ErrorCollection>(parameters?: Parameters.ValidateProjectKey, callback?: undefined): Promise<T>;
  async validateProjectKey<T = Models.ErrorCollection>(parameters?: Parameters.ValidateProjectKey, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/2/projectvalidate/key',
      method: 'GET',
      params: {
        key: parameters?.key,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'validateProjectKey' });
  }
  /**
     * Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.
     *
     * **[Permissions](#permissions) required:** None. */
  async getValidProjectKey<T = any>(parameters?: Parameters.GetValidProjectKey, callback?: Callback<T>): Promise<void>;
  /**
     * Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.
     *
     * **[Permissions](#permissions) required:** None. */
  async getValidProjectKey<T = any>(parameters?: Parameters.GetValidProjectKey, callback?: undefined): Promise<T>;
  async getValidProjectKey<T = any>(parameters?: Parameters.GetValidProjectKey, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/2/projectvalidate/validProjectKey',
      method: 'GET',
      params: {
        key: parameters?.key,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getValidProjectKey' });
  }
  /**
     * Checks that a project name isn't in use. If the name isn't in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.
     *
     * **[Permissions](#permissions) required:** None. */
  async getValidProjectName<T = any>(parameters: Parameters.GetValidProjectName, callback: Callback<T>): Promise<void>;
  /**
     * Checks that a project name isn't in use. If the name isn't in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.
     *
     * **[Permissions](#permissions) required:** None. */
  async getValidProjectName<T = any>(parameters: Parameters.GetValidProjectName, callback?: undefined): Promise<T>;
  async getValidProjectName<T = any>(parameters: Parameters.GetValidProjectName, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/2/projectvalidate/validProjectName',
      method: 'GET',
      params: {
        name: parameters.name,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getValidProjectName' });
  }
}
