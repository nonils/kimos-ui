import { IPaginationVariables } from './common';

export interface ILighthouse {
  lighthouse: string;
  accessibilityScore: number;
  performanceScore: number;
  pwaScore: number;
  seoScore: number;
  bestPractices: number;
}

export interface IContent {
  averageGradeLevel: number | null;
  contentSourceUuids: string[] | null;
  contentType: string | null;
  createdAt: string | null;
  daleChallScore: number | null;
  description: string | null;
  gunningFogScore: number | null;
  id: string;
  jsonString: string | null;
  keywords: string[] | null;
  lighthouse: ILighthouse | null;
  metaLocales: string[] | null;
  metatagDescription: string | null;
  metaTitle: string | null;
  normalizedUrl: string | null;
  organizationId: string | null;
  rawText: string | null;
  reach: number | null;
  reachPublic: number | null;
  readTimeSeconds: number | null;
  readabilityFk: number | null;
  readabilityRating: number | null;
  s3Path: string | null;
  sentenceCount: number | null;
  sentiment: number | null;
  sentimentNumber: number | null;
  slug: string | null;
  sourceUrl: string | null;
  thumbnail: string | null;
  tone: string | null;
  toneNumber: string | null;
  updatedAt: string | null;
  url: string | null;
  videos: string[] | null;
  wordCount: number | null;
  wordsPerSentence: string | null;
}

export interface ICollection {
  id: string;
  name: string;
  description: string;
  groupsQty: number;
  owner: number;
  rulesQty: number;
  status: string;
  type: string;
}

export interface IPagination {
  currentPage: number;
  limitValue: number;
  totalCount: number;
  totalPages: number;
}

export interface IJobStats {
  collector: {
    completed_records: number;
    initialized: unknown[];
    inprogress: unknown[];
    success: unknown[];
    total_records: number;
  };
  crawler: {
    completed_content_ids: string[];
    scraping_content_ids: unknown[];
    scraping_urls: string[];
    stats: {
      completed: number;
      crawled: number;
      excluded: number;
    };
  };
}

export interface ISource {
  contentDataSourceId: string;
  id: string;
  name: string;
  uuid: string;
  dataSourceConfig: {
    sourceType: string;
    url: string;
  };
  job: {
    created_at: string;
    job_type: string;
    source_type: string;
    stage: string;
    status: string;
    updated_at: string;
    info: {
      stats: IJobStats;
    };
  } | null;
}

export interface ICollectionIdVariable {
  collectionId?: string;
}

export interface IWebsiteResourcesData {
  listSitesResources: {
    urlSummaries: ISource[];
  };
}

export interface IWebsiteResourceVariables {
  clientId: string;
}

export interface IlistSiteResources {
  content: IContent | null;
  isFolder: boolean;
  createdAt: string;
  updatedAt: string;
  name: string;
  absolutePath: string;
}

export interface IGetSitesResourcesData {
  getSiteResource: {
    files: IlistSiteResources[];
  };
}

export interface IGetSitesResourcesVariables {
  clientId: string;
  dataSourceUuid?: string | null;
  organizationId: string;
  path: string;
  url?: string | null;
}

export interface IGetContentData {
  getContent: IContent;
}

export interface ICreateWebsiteVariables {
  input: {
    clientId: string;
    clientMutationId?: string;
    dataSourceId: number;
    name: string;
    type: string;
    url: string;
    organizationId: string;
  };
}

export interface ICreateWebsiteResponse {
  clientMutationId: string;
  response: {
    status: string;
  }
}

export interface IGetContentVariable {
  id?: string;
}

export interface ICreateCollectionVariables {
  input: {
    clientId: string;
    description: string;
    name: string;
    organizationId: string;
    tags?: string[];
    type: string;
  }
}

export interface ICreateCollectionResponse {
  createCollection: {
    pfCollection: {
      id: string;
    };
  };
}

export interface IGetCollection {
  collections: ICollection[];
  pagination: IPagination;
}

export interface IGetCollectionResponse {
  listCollections: IGetCollection;
}

export interface IGetCollectionVariable extends IPaginationVariables {
  clientId: string;
  type?: string;
}

export interface ICollectionByIdVariables {
  id?: string;
  clientId: string;
}

export interface ICollectionByIdResponse {
  getCollectionById: ICollection;
}

export interface IAddContentCollectionData {
  addManualContentToCollection: ICollectionIdVariable & {
    successful: boolean;
  };
}

export interface IAddContentCollectionVariables {
  input: ICollectionIdVariable & {
    contents: {
      contentId?: string;
      contentSourceUuid?: string; 
      isFolder: boolean;
      path?: string;
    }[];
  };
}

export interface IContentInCollection {
  id: IContent['id'];
  metaTitle: IContent['metaTitle'];
  url: IContent['url'];
};

export interface IGetContentCollectionResponse {
  getCollectionContentInfo: {
    contents: IContentInCollection[];
    pagination: IPagination;
  };
}

export interface IGetContentCollectionVariables extends IPaginationVariables, ICollectionIdVariable {
  clientId: string;
};

interface ISmartCollectionNodes {
  combinator: string;
  id: string;
  notOp: string;
  rules: ISmartCollectionNodes;
  field?: string;
  operator?: string;
  value?: string;
}

export interface IAddContentSmartCollectionVariables {
  input: ICollectionIdVariable & {
    clientId: string;
    nodes: ISmartCollectionNodes;
  };
}

export interface IGetSmartCollectionRulesData {
  getActualQuery: {
    jsonQuery: string;
  };
}

export interface ISearchContentBySourceVariables {
  query: string;
  sourceId?: string;
  page?: string | number;
  size?: string | number;
}

export interface ISearchContentBySourceData {
  searchContentsBySource: {
    contents: any[];
    // contents: {
    //   idSummary: IContent["idSummary"];
    //   id: IContent["id"];
    //   slug: IContent["slug"];
    //   title: IContent["title"];
    //   url: IContent["url"];
    //   normalizedUrl: IContent["normalizedUrl"];
    //   createdAt: Date;
    //   updatedAt: Date;
    //   lighthouse: ILighthouse;
    // }[];
    pagination: IPagination;
  };
}
