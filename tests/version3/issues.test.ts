import { Issues, Version3Client } from '../../src/version3';
import * as sinon from "sinon";

describe('Version3 Issues', () => {
  const client = new Version3Client({ host: '' });
  const sendRequestStub = sinon.stub(client, 'sendRequest');
  let issues = new Issues(client);

  afterEach(() => {
    issues = new Issues(client);
    sendRequestStub.reset();
  });

  it('createIssue should accept next parameters', () => {
    issues.createIssue({
      fields: {
        project: 'testProject',
        issueType: {
          name: 'test issue type',
        },
        labels: ['test label'],
      },
    });

    expect(sendRequestStub.calledOnce).toBeTruthy();

    const callArgument = sendRequestStub.getCall(0).args[0];

    expect(callArgument.data).toEqual({
      fields: {
        project: 'testProject',
        issueType: {
          name: 'test issue type',
        },
        labels: ['test label'],
      },
    });
  });

  it('editIssue should accept next parameters', () => {
    issues.editIssue({
      issueIdOrKey: 'issueId',
      notifyUsers: false,
      fields: {
        description: 'desc',
      },
    });

    expect(sendRequestStub.calledOnce).toBeTruthy();

    const callArgument = sendRequestStub.getCall(0).args[0];

    expect(callArgument.url).toBe('/rest/api/3/issue/issueId');
    expect(callArgument.params).toEqual({ notifyUsers: false });
    expect(callArgument.data).toEqual({ fields: { description: 'desc' }});
  });

  it('deleteIssue should accept next parameters', () => {
    issues.deleteIssue({ issueIdOrKey: 'issueKey', deleteSubtasks: 'true' });

    expect(sendRequestStub.calledOnce).toBeTruthy();

    const callArgument = sendRequestStub.getCall(0).args[0];

    expect(callArgument.url).toBe('/rest/api/3/issue/issueKey');
    expect(callArgument.params).toEqual({ deleteSubtasks: 'true' });
  });
});
