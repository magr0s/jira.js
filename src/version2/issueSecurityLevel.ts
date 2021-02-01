import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
import { RequestConfig } from '../requestConfig';

export class IssueSecurityLevel {
  constructor(private client: Client) { }
  /**
     * Returns issue security level members.
     *
     * Only issue security level members in context of classic projects are returned.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async getIssueSecurityLevelMembers<T = Models.PageBeanIssueSecurityLevelMember>(parameters: Parameters.GetIssueSecurityLevelMembers, callback: Callback<T>): Promise<void>;
  /**
     * Returns issue security level members.
     *
     * Only issue security level members in context of classic projects are returned.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async getIssueSecurityLevelMembers<T = Models.PageBeanIssueSecurityLevelMember>(parameters: Parameters.GetIssueSecurityLevelMembers, callback?: undefined): Promise<T>;
  async getIssueSecurityLevelMembers<T = Models.PageBeanIssueSecurityLevelMember>(parameters: Parameters.GetIssueSecurityLevelMembers, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/2/issuesecurityschemes/${parameters.issueSecuritySchemeId}/members`,
      method: 'GET',
      params: {
        startAt: parameters.startAt,
        maxResults: parameters.maxResults,
        issueSecurityLevelId: parameters.issueSecurityLevelId,
        expand: parameters.expand,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getIssueSecurityLevelMembers' });
  }
  /**
     * Returns details of an issue security level.
     *
     * Use [Get issue security scheme](#api-rest-api-2-issuesecurityschemes-id-get) to obtain the IDs of issue security levels associated with the issue security scheme.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None. */
  async getIssueSecurityLevel<T = Models.SecurityLevel>(parameters: Parameters.GetIssueSecurityLevel, callback: Callback<T>): Promise<void>;
  /**
     * Returns details of an issue security level.
     *
     * Use [Get issue security scheme](#api-rest-api-2-issuesecurityschemes-id-get) to obtain the IDs of issue security levels associated with the issue security scheme.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None. */
  async getIssueSecurityLevel<T = Models.SecurityLevel>(parameters: Parameters.GetIssueSecurityLevel, callback?: undefined): Promise<T>;
  async getIssueSecurityLevel<T = Models.SecurityLevel>(parameters: Parameters.GetIssueSecurityLevel, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/2/securitylevel/${parameters.id}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getIssueSecurityLevel' });
  }
}
