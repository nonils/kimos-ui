import { ISelectOption } from 'types/common';

export const formatBytes = (bytes: number, type = 'mb', decimals: number = 2) => {
  switch (type) {
    case 'kb': {
      const totalSize = bytes / Math.pow(1024, 1);
      return parseFloat(totalSize.toFixed(decimals));
    }

    case 'mb': {
      const totalSize = bytes / Math.pow(1024, 2);
      return parseFloat(totalSize.toFixed(decimals));
    }

    default: {
      return 0;
    }
  }
};

export const allowedImages: string[] = [
  'png',
  'jpg',
  'svg',
  'webp',
  'gif',
  'jpeg',
  '.png',
  '.jpg',
  '.svg',
  '.webp',
  '.gif',
  '.jpeg',
];

export const allowedVideos: string[] = [
  'mp4',
  'avi',
  'mov',
  'webm',
  '.mp4',
  '.avi',
  '.mov',
  '.webm',
];

export const allowedSounds: string[] = ['mp3', 'wav', 'mpeg', '.mp3', '.wav', '.mpeg'];
export const allowedWD: string[] = ['doc', 'docx', '.doc', '.docx'];
export const allowedPDF: string[] = ['pdf', '.pdf'];

export const allowedFiles = () => [
  ...allowedImages,
  ...allowedVideos,
  ...allowedSounds,
  ...allowedWD,
  ...allowedPDF,
];

export const catchErrors = (error: any) => {
  // If we have GraphQL errors present, add that to the error message.
  if (error?.graphQLErrors?.length > 0) {
    let message: string = '';
    /*error?.graphQLErrors.forEach((graphQLError: GraphQLError) => {
      const errorMessage = graphQLError
        ? graphQLError.message
        : 'Something bad happened, please try again.';
      message += `${errorMessage}\n`;
    });*/
    return message;
  } else if (error?.networkError) {
    return `${error.networkError.message}\n`;
  } else {
    return error?.message;
  }
};

interface IQueryBuilderOptions {
  name: string;
  label: string;
}

export const parsedQueryBuilderOptions = (options: IQueryBuilderOptions[]) => {
  return options.map((option: IQueryBuilderOptions) => ({
    label: option.label,
    value: option.name,
  }));
};

export const getOptionValue = (options: ISelectOption[], valueToFind?: string | ISelectOption) => {
  if (typeof valueToFind === 'object') {
    return valueToFind;
  }

  return options.find((option) => option.value === valueToFind);
};

export const truncateText = (text: string, count: number) => {
  return text.slice(0, count) + (text.length > count ? '...' : '');
};

export const lighthouseParser = (lighthouseStr?: string) => {
  if (!lighthouseStr) {
    return {};
  }

  const [data] = JSON.parse(lighthouseStr);
  const [result] = data?.result || [];
  return { data, result };
};
