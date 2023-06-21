export interface ICodeSystemVersionControl {
  id: string;
  name: string;
  logo: string;
  url: string;
}

export interface ICreateProjectDTO {
  name: string;
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
