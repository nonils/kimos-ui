export type IAccount = {
  id: string;

  email: string;

  name: string;

  lastName: string;

  pronouns: string;

  externalId: string;

  imageUrl: string;

  bio: string;

  lastLogin: Date;

  isDeleted: boolean;

  createdAt: Date;

  updatedAt: Date;
};

export type IconConfigProps = {
  isActive?: boolean;
  defaultColor?: string;
  className?: string;
};

export type IStep = {
  id: string;
  name: string;
  complete: boolean;
  active: boolean;
  // eslint-disable-next-line no-undef
  child?: JSX.Element;
  onClickAction: () => void;
};

export type IActivityItem = {
  id: string;
  project: string;
  commit: string;
  environment: string;
  time: string;
};

export type ILightProject = {
  id: string;
  name: string;
  href: string;
  siteHref: string;
  repoHref: string;
  repo: string;
  tech: string;
  lastDeploy: string;
  location: string;
  starred: boolean;
  active: boolean;
};

export type IOrganization = {
  id: string;
  name: string;
  description: string;
};

export type IProjectDetail = {
  id: string;
  name: string;
  status: string;
  description: string;
  organization: IOrganization;
  type: 'ORGANIZATION' | `PERSONAL`;
  repoProvider: string;
  jiraConfiguration: string;
  cicdProvider: string;
  cloudProvider: string;
};

export interface IMultiSelectValues {
  label: string;
  value: string;
  checked: boolean;
}

export type ShapesConfigProps = {
  className?: string;
};

export interface IKeyValue {
  [key: string]: string;
}

export interface ISelectOption {
  value: string | number;
  label: string;
}

export interface IPaginationVariables {
  page: number;
  size: number;
}
