
import { namespaceTranslate } from "../data/namespace-translate";
import { Suggestion } from "../interface";

export function dateDiff(hisTime: Date, nowTime?: Date): string {
    if (!arguments.length) return '';
    let arg = arguments,
        now = arg[1] ? arg[1] : new Date().getTime(),
        diffValue = now - arg[0],
        result = '',

        minute = 1000 * 60,
        hour = minute * 60,
        day = hour * 24,
        month = day * 30,
        year = month * 12,

        _year = diffValue / year,
        _month = diffValue / month,
        _week = diffValue / (7 * day),
        _day = diffValue / day,
        _hour = diffValue / hour,
        _min = diffValue / minute;

    if (_year >= 1) result = Math.floor(_year) + ' 年前';
    else if (_month >= 1) result = Math.floor(_month) + ' 个月前';
    else if (_week >= 1) result = Math.floor(_week) + ' 周前';
    else if (_day >= 1) result = Math.floor(_day) + ' 天前';
    else if (_hour >= 1) result = Math.floor(_hour) + ' 个小时前';
    else if (_min >= 1) result = Math.floor(_min) + ' 分钟前';
    else result = '刚刚';
    return result;
}

export function trim(str: string): string {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}

export function escapeHtml(unsafe: string): string {
    return (unsafe || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export function makeTagMatchHtml(suggestion: Suggestion, markTag: string = 'mark'): { en: string, cn: string } {
    const tag = suggestion.tag;
    const cnNamespace = namespaceTranslate[tag.namespace];
    let cnNameHtml = '';
    let enNameHtml;
    if (tag.namespace !== 'misc') {
        cnNameHtml += escapeHtml(cnNamespace) + '：';
    }
    if (suggestion.match.name) {
        const range = suggestion.match.name;
        cnNameHtml += `${escapeHtml(tag.name.substring(0, range.start))}<${markTag}>${escapeHtml(tag.name.substr(range.start, range.length))}</${markTag}>${escapeHtml(tag.name.substr(range.start + range.length))}`;
    } else {
        cnNameHtml += escapeHtml(tag.name);
    }
    if (suggestion.match.key) {
        const range = suggestion.match.key;
        enNameHtml = `${escapeHtml(tag.key.substring(0, range.start))}<${markTag}>${escapeHtml(tag.key.substr(range.start, range.length))}</${markTag}>${escapeHtml(tag.key.substr(range.start + range.length))}`;
    } else {
        enNameHtml = escapeHtml(tag.key);
    }
    return {
        cn: cnNameHtml,
        en: enNameHtml,
    };
}
