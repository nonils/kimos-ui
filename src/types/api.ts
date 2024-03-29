import { ISelectOption } from './common';

export interface ICodeSystemVersionControl {
  id: string;
  name: string;
  logo: string;
  url: string;
}

export interface GetAllTemplatesParams {
  token: string;
  search?: string;
  cloudProvider?: ISelectOption;
  codeVersionManagerProvider?: ISelectOption;
  CICDProvider?: ISelectOption;
  page?: number;
  size?: number;
}

export interface ICreateAccountProjectDTO {
  name: string;
  description: string;
}

export interface ILightApplication {
  id: string;
  name: string;
  status: string;
  description: string;
  isPrivateRepo: boolean;
  repositoryName: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateApplicationDTO {
  name: string;
  projectId: string;
  description: string;
  isPrivateRepo: boolean;
  repositoryName: string;
  allowsJiraIntegration: boolean;
  jiraProjectKey: string;
  jiraProjectName: string;
  templateImplementationId: string;
  templateId: string;
}

export interface ICICDProvider {
  id: string;
  name: string;
  logo: string;
  url: string;
}
export interface ICloudProvider {
  id: string;
  name: string;
  logo: string;
  url: string;
}

export interface ITemplate {
  id: string;
  name: string;
  url: string;
  templateImageUrl: string;
}

export interface ItemplateImplementation {
  id: string;
  templateId: string;
  cicdProviderId: string;
  codeVersionManagerProviderId: string;
  cloudProviderId: string;
  cicdProvider: any;
  cloudProvider: any;
  codeSystemVersionControl: any;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
