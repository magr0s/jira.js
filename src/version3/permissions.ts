import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../client';
import { Callback } from '../callback';
import { RequestConfig } from '../requestConfig';

export class Permissions {
  constructor(private client: Client) { }
  async getMyPermissions<T = Models.Permissions>(parameters?: Parameters.GetMyPermissions, callback?: Callback<T>): Promise<void>;
  async getMyPermissions<T = Models.Permissions>(parameters?: Parameters.GetMyPermissions, callback?: undefined): Promise<T>;
  async getMyPermissions<T = Models.Permissions>(parameters?: Parameters.GetMyPermissions, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/3/mypermissions',
      method: 'GET',
      params: {
        projectKey: parameters?.projectKey,
        projectId: parameters?.projectId,
        issueKey: parameters?.issueKey,
        issueId: parameters?.issueId,
        permissions: parameters?.permissions,
        projectUuid: parameters?.projectUuid,
        projectConfigurationUuid: parameters?.projectConfigurationUuid,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async getAllPermissions<T = Models.Permissions>(callback?: Callback<T>): Promise<void>;
  async getAllPermissions<T = Models.Permissions>(callback?: undefined): Promise<T>;
  async getAllPermissions<T = Models.Permissions>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/3/permissions',
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async getBulkPermissions<T = Models.BulkPermissionGrants>(callback?: Callback<T>): Promise<void>;
  async getBulkPermissions<T = Models.BulkPermissionGrants>(callback?: undefined): Promise<T>;
  async getBulkPermissions<T = Models.BulkPermissionGrants>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/3/permissions/check',
      method: 'POST',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async getPermittedProjects<T = Models.PermittedProjects>(callback?: Callback<T>): Promise<void>;
  async getPermittedProjects<T = Models.PermittedProjects>(callback?: undefined): Promise<T>;
  async getPermittedProjects<T = Models.PermittedProjects>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/3/permissions/project',
      method: 'POST',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
}