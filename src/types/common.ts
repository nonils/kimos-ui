import { IlistSiteResources, ISource } from 'types';
import React from 'react';

export type IconConfigProps = {
  isActive?: boolean;
  defaultColor?: string;
  className?: string;
};

export type IActivityItem = {
  id: string;
  project: string;
  commit: string;
  environment: string;
  time: string;
};

export type IProject = {
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

export interface IMultiSelectValues {
  label: string;
  value: string;
  checked: boolean;
}

export interface ISelectedSource {
  selectedSource: ISource | null;
}

export interface ISelectedContent extends IlistSiteResources {
  id: string;
}

export type AddSourcePageConfigProps = {
  title?: string;
  subtitle?: string;
  handleSteps?: (stepName: string) => void;
  onToggle?: () => void;
  refetchSources?: () => void;
};

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

export type TSelectStep = {
  setSelectedStep: (step: number) => void;
  closeModal?: (val: boolean) => void;
  refetchCollectionContent?: () => void;
};

export interface IPaginationVariables {
  page: number;
  size: number;
}

export interface IColumnList {
  name: string;
  id?: string;
}

export interface ICollectionIdParams {
  collectionId: string;
}

export interface IRule {
  combinator: string;
  not_op: boolean;
  field?: string;
  label?: string[];
  operator?: string;
  value?: string[];
  id: any;
  rules: IRule[];
}

export interface IModal {
  isOpen: boolean;
}

export type CrawlerStatusTypes = 'RUNNING' | 'COMPLETED' | string;

// Table Types
export interface IRowData {
  id: string;
  [key: string]: any;
}

export interface ICells {
  [key: string]: string | React.ReactElement | null;
}

export interface IDataTable {
  cells: ICells;
  rowData: IRowData;
}
