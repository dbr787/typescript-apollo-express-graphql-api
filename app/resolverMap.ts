// resolverMap.ts
import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
  Query: {
    status(_: void, args: void): string {
  return `Healthy!`;
    },
  },
};

export default resolverMap;
