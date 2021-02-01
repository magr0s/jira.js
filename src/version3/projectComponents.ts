import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
import { RequestConfig } from '../requestConfig';

export class ProjectComponents {
  constructor(private client: Client) { }
  /**
     * Creates a component. Use components to provide containers for issues within a project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the component is created or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async createComponent<T = Models.Component>(parameters?: Parameters.CreateComponent, callback?: Callback<T>): Promise<void>;
  /**
     * Creates a component. Use components to provide containers for issues within a project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the component is created or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async createComponent<T = Models.Component>(parameters?: Parameters.CreateComponent, callback?: undefined): Promise<T>;
  async createComponent<T = Models.Component>(parameters?: Parameters.CreateComponent, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/3/component',
      method: 'POST',
      data: {
        self: parameters?.self,
        id: parameters?.id,
        name: parameters?.name,
        description: parameters?.description,
        lead: parameters?.lead,
        leadUserName: parameters?.leadUserName,
        leadAccountId: parameters?.leadAccountId,
        assigneeType: parameters?.assigneeType,
        assignee: parameters?.assignee,
        realAssigneeType: parameters?.realAssigneeType,
        realAssignee: parameters?.realAssignee,
        isAssigneeTypeValid: parameters?.isAssigneeTypeValid,
        project: parameters?.project,
        projectId: parameters?.projectId,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'createComponent' });
  }
  /**
     * Returns a component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for project containing the component. */
  async getComponent<T = Models.Component>(parameters: Parameters.GetComponent, callback: Callback<T>): Promise<void>;
  /**
     * Returns a component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for project containing the component. */
  async getComponent<T = Models.Component>(parameters: Parameters.GetComponent, callback?: undefined): Promise<T>;
  async getComponent<T = Models.Component>(parameters: Parameters.GetComponent, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/component/${parameters.id}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getComponent' });
  }
  /**
     * Updates a component. Any fields included in the request are overwritten. If `leadAccountId` is an empty string ("") the component lead is removed.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async updateComponent<T = Models.Component>(parameters: Parameters.UpdateComponent, callback: Callback<T>): Promise<void>;
  /**
     * Updates a component. Any fields included in the request are overwritten. If `leadAccountId` is an empty string ("") the component lead is removed.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async updateComponent<T = Models.Component>(parameters: Parameters.UpdateComponent, callback?: undefined): Promise<T>;
  async updateComponent<T = Models.Component>(parameters: Parameters.UpdateComponent, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/component/${parameters.id}`,
      method: 'PUT',
      data: {
        name: parameters.name,
        description: parameters.description,
        leadUserName: parameters.leadUserName,
        leadAccountId: parameters.leadAccountId,
        assigneeType: parameters.assigneeType,
        project: parameters.project,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'updateComponent' });
  }
  /**
     * Deletes a component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async deleteComponent<T = void>(parameters: Parameters.DeleteComponent, callback: Callback<T>): Promise<void>;
  /**
     * Deletes a component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async deleteComponent<T = void>(parameters: Parameters.DeleteComponent, callback?: undefined): Promise<T>;
  async deleteComponent<T = void>(parameters: Parameters.DeleteComponent, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/component/${parameters.id}`,
      method: 'DELETE',
      params: {
        moveIssuesTo: parameters.moveIssuesTo,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteComponent' });
  }
  /**
     * Returns the counts of issues assigned to the component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None. */
  async getComponentRelatedIssues<T = Models.ComponentIssuesCount>(parameters: Parameters.GetComponentRelatedIssues, callback: Callback<T>): Promise<void>;
  /**
     * Returns the counts of issues assigned to the component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None. */
  async getComponentRelatedIssues<T = Models.ComponentIssuesCount>(parameters: Parameters.GetComponentRelatedIssues, callback?: undefined): Promise<T>;
  async getComponentRelatedIssues<T = Models.ComponentIssuesCount>(parameters: Parameters.GetComponentRelatedIssues, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/component/${parameters.id}/relatedIssueCounts`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getComponentRelatedIssues' });
  }
  /**
     * Returns a [paginated](#pagination) list of all components in a project. See the [Get project components](#api-rest-api-3-project-projectIdOrKey-components-get) resource if you want to get a full list of versions without pagination.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project. */
  async getProjectComponentsPaginated<T = Models.PageBeanComponentWithIssueCount>(parameters: Parameters.GetProjectComponentsPaginated, callback: Callback<T>): Promise<void>;
  /**
     * Returns a [paginated](#pagination) list of all components in a project. See the [Get project components](#api-rest-api-3-project-projectIdOrKey-components-get) resource if you want to get a full list of versions without pagination.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project. */
  async getProjectComponentsPaginated<T = Models.PageBeanComponentWithIssueCount>(parameters: Parameters.GetProjectComponentsPaginated, callback?: undefined): Promise<T>;
  async getProjectComponentsPaginated<T = Models.PageBeanComponentWithIssueCount>(parameters: Parameters.GetProjectComponentsPaginated, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/project/${parameters.projectIdOrKey}/component`,
      method: 'GET',
      params: {
        startAt: parameters.startAt,
        maxResults: parameters.maxResults,
        orderBy: parameters.orderBy,
        query: parameters.query,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getProjectComponentsPaginated' });
  }
  /**
     * Returns all components in a project. See the [Get project components paginated](#api-rest-api-3-project-projectIdOrKey-component-get) resource if you want to get a full list of components with pagination.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project. */
  async getProjectComponents<T = any>(parameters: Parameters.GetProjectComponents, callback: Callback<T>): Promise<void>;
  /**
     * Returns all components in a project. See the [Get project components paginated](#api-rest-api-3-project-projectIdOrKey-component-get) resource if you want to get a full list of components with pagination.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project. */
  async getProjectComponents<T = any>(parameters: Parameters.GetProjectComponents, callback?: undefined): Promise<T>;
  async getProjectComponents<T = any>(parameters: Parameters.GetProjectComponents, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/project/${parameters.projectIdOrKey}/components`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getProjectComponents' });
  }
}
