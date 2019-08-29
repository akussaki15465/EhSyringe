import { DownloadStatus, ReleaseCheckData, Suggestion } from '../interface';

import { logger } from './log';

interface RequestMap {
    'check-version': boolean;
    'get-tag-data': void;
    'downloadStatus': DownloadStatus;
    'auto-update': void;
    'suggest-tag': {
        term: string,
        limit?: number,
    };
}
interface ResponseMap {
    'check-version': ReleaseCheckData;
    'get-tag-data': void;
    'downloadStatus': void;
    'auto-update': boolean;
    'suggest-tag': Suggestion[];
}

class ChromeMessage {

    send<Q extends (keyof RequestMap) & (keyof ResponseMap)>(query: Q, data: RequestMap[Q]): Promise<ResponseMap[Q]> {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({
                query,
                data,
            }, response => {
                if (!response) {
                    reject(chrome.runtime.lastError);
                } else if (response.error) {
                    reject(response.error);
                } else {
                    resolve(response.data);
                }
            });
        });
    }

    broadcast<Q extends (keyof RequestMap)>(query: Q, data?: RequestMap[Q]): void {
        chrome.runtime.sendMessage({
            query,
            data,
        }, response => {
            // ignore last error
            const _ = chrome.runtime.lastError;
            if (response && response.error) {
                throw response.error;
            }
        });
    }

    listener<Q extends (keyof RequestMap) & (keyof ResponseMap)>(query: Q, handler: (data: RequestMap[Q]) => ResponseMap[Q] | PromiseLike<ResponseMap[Q]>): void {
        logger.log('注册事件', query);
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (!('query' in request) || request.query !== query) {
                return;
            }
            const promise = handler(request.data);
            Promise.resolve(promise)
                .then(data => sendResponse({ data }))
                .catch(error => sendResponse({ error }));
            return true;
        });
    }
}

export const chromeMessage = new ChromeMessage();
