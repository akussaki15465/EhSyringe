import { merge } from '../helper';

merge(
    /^\/g\//,
    undefined,
    {
        'No tags have been added for this gallery yet.': '当前图库还没有标签',

        'Report Gallery': '举报图库',
        'Archive Download': '存档下载',
        'Torrent Download': '种子下载',
        'Petition to Expunge': '申请删除',
        'Show Expunge Log': '显示删除日志',
        'Petition to Rename': '申请重命名',
        'Rename Petition Sent': '已发送的重命名申请',
        'Show Gallery Stats': '查看统计',
        'Multi-Page Viewer': '多页查看器',

        ' Read Later': ' 稍后再读',
        ' Added to Read Later': ' 已添加到稍后再读',

        'Posted:': '发布于:',
        'Parent:': '父级:',
        None: '无',
        'Visible:': '显示:',
        Yes: '是',
        'No (Expunged)': '否（已删除）',
        'No (Replaced)': '否（已被替换）',
        'Language:': '语言:',
        'File Size:': '文件大小:',
        'Length:': '页数:',
        'Favorited:': '收藏:',
        'Rating:': '评分:',
        'Not Yet Rated': '还没有评分',
        'Average:': '平均:',
        ' Add to Favorites': ' 添加到收藏夹',

        'There are newer versions of this gallery available:': '此图库有更新的版本可用：',

        Normal: '普通',
        Large: '大图',
        ' Normal': '普通',
        ' Large': '大图',

        '4 rows': '4 行',
        '10 rows': '10 行',
        '20 rows': '20 行',
        '40 rows': '40 行',

        'Score ': '分数 ',
        'Uploader Comment': '上传者评论',

        'Vote+': '顶',
        'Vote-': '踩',
        'Withdraw Vote': '撤销投票',

        'Vote Up': '顶',
        'Vote Down': '踩',

        'Show Tagged Galleries': '含有该标签的图库',
        'Show Tag Definition': '显示标签解释',
        'Add New Tag': '添加新标签',
        'Enter new tags, separated with comma': '输入新标签, 用逗号分隔',

        'Last edited on ': '最后编辑于 ',
        'Post New Comment': '发送新评论',
        'click to show all': '显示全部',

        'A Quick Note About Tagging': '关于标签系统的简单说明',
        'While tagging is relatively straight-forward, there are a number of established guidelines that determine when adding a particular tag is proper and when it is not. Before you put any significant amount of effort into it, we therefore ask that you skim through the ':
            '尽管标签相对简单明了，但是有许多已建立的准则可以确定何时添加特定标签是正确的。因此，在您投入其中之前，我们要求您阅读',
        'Basic Tagging Guidelines': '基本标签指南',
        ' and ': '和',
        'Fetish Listing': '恋物标签列表',
        '. This will likely save both you and the tagging moderators from doing unnecessary work. In particular, you should note the following:':
            '。这可以使您和标签管理员免于进行不必要的工作。特别要注意以下几点：',
        '- These are galleries, not individual images. ': '● 这些是图库，而不是单张图片。',
        'Do not tag stuff that is only featured in a few images.': '不要标记仅在少量图像中显示的内容。',
        '- If a tag is ambiguous or frequently misused, you may have to specify a ':
            '● 如果标签含糊不清或经常被滥用，则可能必须指定',
        namespace: '命名空间',
        '; ': '；',
        'see the Wiki': '参见 Wiki',
        '.': '。',
        '- The ': '● 您对标签的影响',
        power: '权重',
        ' with which you can affect tagging is determined by a number of factors, such as your account age and whether or not you are active on the ':
            '取决于多种因素，例如您的帐户资历以及您是否活跃在',
        forums: '论坛',
        '- The forums is also where ': '● 论坛也是',
        'everything about tagging is discussed': '讨论标签相关内容',
        '. If you have any comments, suggestions or questions about tagging, this is where you should take it.':
            '的地方。如果您对标签有任何意见、建议或问题，可在此处讨论。',
        'Alright Already': '好的',

        'Back to Gallery': '返回图库',
        'Report Type': '举报类型',
        '[Select a complaint type...]': '[请选择一个举报类型...]',
        'DMCA/Copyright Infringement': 'DMCA / 侵犯版权',
        'Child Pornography': '儿童色情',
        'Other Illicit Content': '其他非法内容',
        'Watched Tag Galleries': '标签订阅',
    },
    [
        [/^(\d+) times?$/, '$1 次'],
        [/Average: ([\d.]+)/, '平均值：$1'],
        [/Rate as ([\d.]+) stars?/, '$1 星'],
        [/Torrent Download \(\s*(\d+)\s*\)/, '种子下载（$1）'],
        [/Posted on (.*?) by:\s*/, `评论时间：$1 \xA0作者：`],
        [/^, added (.*?)$/, `，更新于 $1`],
        [/^There (is|are) ([\d,]+) more comments? below the viewing threshold - $/, '还有 $2 条评论尚未显示 - '],
    ],
);

merge(/^\/g\/\w+\/\w+\/.*act=expunge/, undefined, {
    'Submit New Expunge Petition': '提交新的删除申请',
    'Specify a valid objective reason why this gallery should be expunged.': '请说明要删除此库的客观原因。',
    ' None / Withdraw Petition.': '无 / 撤回删除申请。',
    ' This gallery is a duplicate of equal or lower quality of an earlier posted gallery.':
        '此图库是之前发布的图库的质量相同或较低的副本。',
    ' A newer higher-quality and clearly marked copy of this gallery has been uploaded.':
        '这个图库的更高质量和标记清楚的副本已上传。',
    ' This gallery contains either illicit content like child porn or anything else that has been banned.':
        '这个图库包含非法内容，如儿童色情或其他任何禁止的内容。',
    'Enter a reason for this expunge here. Note that submitting petitions with subjective reasons along the line of "I hate this content/artist/uploader/etc" are NOT valid and can cause account penalties/restrictions.':
        '在此处输入删除的详细原因。请注意，“我讨厌此内容/艺术家/上传者”等主观理由是无效的，并且可能导致帐户处罚/限制。',
    'Enter the URL of the conflicting gallery, if applicable.': '如有必要，在此处输入冲突图库的 URL。',
    'Enter an explanation for this expunge here. It should include the location of the duplicate or the specific rule being violated.':
        '请输入清除原因和备注。它应包括副本的位置或违反的特定规则。',
    'No expunge petitions have been filed for this gallery': '此图库尚未有删除申诉',
    'Create New Petition': '提交新申请',
    Back: '返回',
});
