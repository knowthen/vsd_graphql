import DataLoader from 'dataloader';
import * as R from 'ramda';
import { listsByBoardIds, itemsByListIds, commentsByItemIds } from './dal';

const loaders = () => {
  return {
    listLoader: new DataLoader(listsByBoardIds),
    itemLoader: new DataLoader(itemsByListIds),
    commentLoader: new DataLoader(commentsByItemIds),
  };
};

export default loaders;
