export interface IssueEntityProperties {
  entitiesIds: number[];
  properties: {
    [key: string]: unknown;
  };
}