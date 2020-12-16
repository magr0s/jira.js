import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../client';
import { Callback } from '../callback';
import { RequestConfig } from '../requestConfig';

export class Webhooks {
  constructor(private client: Client) { }
  async getDynamicWebhooksForApp<T = Models.PageBeanWebhook>(parameters?: Parameters.GetDynamicWebhooksForApp, callback?: Callback<T>): Promise<void>;
  async getDynamicWebhooksForApp<T = Models.PageBeanWebhook>(parameters?: Parameters.GetDynamicWebhooksForApp, callback?: undefined): Promise<T>;
  async getDynamicWebhooksForApp<T = Models.PageBeanWebhook>(parameters?: Parameters.GetDynamicWebhooksForApp, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/2/webhook',
      method: 'GET',
      params: {
        startAt: parameters?.startAt,
        maxResults: parameters?.maxResults,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async registerDynamicWebhooks<T = Models.ContainerForRegisteredWebhooks>(callback?: Callback<T>): Promise<void>;
  async registerDynamicWebhooks<T = Models.ContainerForRegisteredWebhooks>(callback?: undefined): Promise<T>;
  async registerDynamicWebhooks<T = Models.ContainerForRegisteredWebhooks>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/2/webhook',
      method: 'POST',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async deleteWebhookById<T = any>(callback?: Callback<T>): Promise<void>;
  async deleteWebhookById<T = any>(callback?: undefined): Promise<T>;
  async deleteWebhookById<T = any>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/2/webhook',
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async getFailedWebhooks<T = Models.FailedWebhooks>(parameters?: Parameters.GetFailedWebhooks, callback?: Callback<T>): Promise<void>;
  async getFailedWebhooks<T = Models.FailedWebhooks>(parameters?: Parameters.GetFailedWebhooks, callback?: undefined): Promise<T>;
  async getFailedWebhooks<T = Models.FailedWebhooks>(parameters?: Parameters.GetFailedWebhooks, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/2/webhook/failed',
      method: 'GET',
      params: {
        maxResults: parameters?.maxResults,
        after: parameters?.after,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
  async refreshWebhooks<T = Models.WebhooksExpirationDate>(callback?: Callback<T>): Promise<void>;
  async refreshWebhooks<T = Models.WebhooksExpirationDate>(callback?: undefined): Promise<T>;
  async refreshWebhooks<T = Models.WebhooksExpirationDate>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/2/webhook/refresh',
      method: 'PUT',
    } as RequestConfig);

    return this.client.sendRequest(config, callback);
  }
}