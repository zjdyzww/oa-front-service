import {
    isURL
} from '@/utils/validate';

export const TokenKey = 'Access-Token';

export function timeFix() {
    const time = new Date();
    const hour = time.getHours();
    return hour < 9 ?
        '早上好' :
        hour <= 11 ?
        '上午好' :
        hour <= 13 ?
        '中午好' :
        hour < 20 ?
        '下午好' :
        '晚上好';
}

export function welcome() {
    const arr = [
        '文档如果需要预览，最好用docx、pptx、xlsx格式，而不要使用老版本的doc、ppt、xls格式哟🤗！',
        '上传的附件中，文档名称不能含有空格哦(≖‿≖)✧。不然的话，可能导致无法下载附件哟😄！',
        '上传的图片中，图片名称不要包含空格哦，我的小机器眼可看不清哟，要是预览不了可不要怪本宝宝☹️',
        '可以在首页，Tab栏中，查看我的待办，我的已办哟(≖‿≖)✧😄！',
        '我的待办，处理完毕后，请记得点击首页页面Tab栏右侧的刷新按钮哟🤗！',
        '审批同意后，可以在我的已办中查看处理过的记录哦💪！',
        '在工作台的Tab栏页面中，右侧可有快捷菜单哦👌！',
        '如果小主的页面和别的同学不一样，可能是小主没有清空缓存哦，按F12,弹出调试窗口，在Network栏中选择Disable Cache，然后刷新页面，即可清空缓存哦🤗',
        '上传附件，上传图片，请不要上传超过30M的文档哦⏰！',
        '上传图片前，先记得压缩后在上传哦🤗！',
        '待办任务处理好了不👌？',
        '处理完毕的任务，可以在我的已办中查看哦😁！',
        '工作台右侧有快捷导航哦😊！',
        '休息一会儿吧😴！',
        '准备吃什么呢🍚?',
        '加油💪！',
        '要不要喝杯茶，休息一下😝？',
        '来杯咖啡不☕️？',
        '眼睛是心灵的窗户，别忘了做做眼保健操🤗！',
        '身体是革命的本钱，记得多做运动🏃！',
        '我猜你可能累了😢！',
        '来泡杯枸杞茶吧🍵！',
        '来杯浓咖啡☕️，醒醒脑⏰！',
        '中午点外卖不🤩？',
        '来首Music不🎵？',
        '老板来了，赶紧工作💪！',
        '『 我们奋力前行，逆水行舟，被不断向后推，直至回到往昔岁月💪 』—《了不起的盖茨比》 ',
        '『 前尘种种，似烟似幻，惟有此人教我深感不负大好春光🗡。』—《魔道祖师》 ',
        '『 我们这种人，生来就是要毁灭一些东西。前面是山，我们就爬山，前面是海，我们就渡海，前面是皇宫 ，我们就开炮🚀！』—《龙族》 ',
        '『 观察的实质是：“不赞美，不责难，甚至也不惋惜，但求了解认识而已😺。”』—《柴静》',
        '『 走得再远，看得再细，终究会有这样那样的错过，不可能真正将风景看遍🌅。』—《剑来》',
        '『 迈出第一步的是他，迈出第二步的也是他，一步一步的都是他。但害怕的也是他，一惊一乍的同样是他。』—《撒野》 ',
        '『 每想你一次，天上飘落一粒沙，从此形成了撒哈拉！』—《撒哈拉的故事》 ',     
        '『 我们一路奋战，不是为了改变世界，而是为了不让世界改变我们。』—《熔炉》',  
        '『 春复一春，枝头黄莺飞。秋复一秋，城头大雁归。』—《雪中悍刀行》 ',
        '『 如果命运是一条孤独的河流，谁会是你灵魂的摆渡人？』—《摆渡人》 ',
        '『 心向花开，何不朝夕。』—《百年浅吟》',
        '『 单程孤舟，出云入霞，如歌如吟。』 — 《门孔》 ',
        '『 毁灭你，与你有何相干?』 — 《三体》',
        '『 有些意外是意料之中，有些意外是意料之外，而你，就是我意料之外的意外。』 — 《撒野》 ',
        '『 成王败寇，失败才是丑恶的。』 — 《惊悚乐园》',
        '『 胆小鬼连幸福都害怕，碰到棉花都会受伤 』 — 《人间失格》 ',
        '『 你知道吗，有些人，会以各种你情愿或者不情愿的方式，留在你的记忆里，比如我。』 — 《撒野》',
        '『 很多人宁可否认事实，也不愿面对真相。』 — 《冰与火之歌》',
        '『 你们认为没有路，是因为没有学会不择手段。』 — 《三体》',
        '『 当我忘了你的时候，我就忘了我自己。』 — 《呼啸山庄》',
        '『 言念君子温其如玉』 — 《剑来》',
        '『 一草一千秋，一花一世界。』 — 《目送》',
        '『 “马孔多在下雨”』 — 《百年孤独》',
        '『 你欺他眼盲，骗得他好苦！』 — 《魔道祖师》',
        '『 他只有两只手，所以只能用心抓住一个人。』 — 《黑天》',
        '『 西方人并不比东方人聪明，但是他们却找对了路。』 — 《三体》 ',
        '『 悲剧将人生的有价值的东西毁灭给人看，喜剧将那无价值的撕破给人看。』 — 《语丝》 ',
        '『 今日，吾爱，我们融为一体。』 — 《SCP基金会》 ',
        '『 用我一生，换你十年天真无邪。』 — 《盗墓笔记》 ',
        '『 弱肉强食的世界，强者没有理由道歉，弱者也没有资格埋怨。』 — 《惊悚乐园》 ',
        '『 过去都是假的，回忆是一条没有归途的路，以往的一切春天都无法复原，即使最狂热最坚贞的爱情，归根结底也不过是一种瞬息即逝的现实，唯有孤独永恒。』 — 《百年孤独》 ',
        '『 没有谁的生活会一直完美，但无论什么时候，都要看着前方，满怀希望就会所向披靡。』 — 《撒野》 ',
        '『 乌鸦为什么像写字台？』 — 《爱丽丝梦游仙境》 ',
        '『 我恨自己。我爱自己。』 — 《SCP基金会》 ',
        '『 正义不会因为无人歌颂而变成非议。』 — 《阿亚罗克年代记》 ',
        '『 那一年我二十一岁，在我一生的黄金时代，我有好多奢望：我想爱，想吃，还想在一瞬间变成天上半明半暗的云。』 — 《黄金时代》 ',
        '『 在永恒与虚无之间，为你沉默。』 — 《请以你的名字呼唤我》 ',
        '『 生而为人，我很抱歉』 — 《人间失格》 ',
        '『 活着本身就很美妙，如果连这道理都不懂，怎么去探索更深的东西呢？』 — 《三体》 ',
        '『 我一直以为人是慢慢变老的，其实不是，人是一瞬间变老的。』 — 《舞！舞！舞！》 ',
        '『 我有一个梦，也许有一天，灿烂的阳光能照进黑暗森林。』 — 《三体》 ',
        '『 即使被关在果壳之中，我仍自以为是无限宇宙之王。』 — 《哈姆雷特》',
        '『 “太阳快落下去了，你们的孩子居然不害怕？”“当然不害怕，她知道明天太阳还会升起来的。”』 — 《三体II》 ',
        '『 你永远是我唯爱旅行中名为秘密的起点站。』 — 《绘心》 ',
        '『 你应该是上天赐予我的满心欢喜。』 — 《荒生虚闻录》 ',
        '『 要是有些事我没说，你别以为是忘了，我什么也没忘，但是有些事只适合收藏。』 — 《我与地坛》 ',
        '『 命运如同一团乱麻，我们抽丝剥茧百般追寻，最终终于解开了这个线团，却发现所有人手里都拿错了线头…』 — 《希灵帝国》 ',
        '『 君看双眼色，不语似无忧』 — 《俳句 罗生门》 ',
        '『 爱恋中的每个瞬间都有可能是一生。』 — 《文学》 ',
        '『 生来一人，去时孤身，便是江澄其人』 — 《魔道祖师》 ',
        '『 你最可爱,我说时来不及思索,但思索过后,还是这样说』 — 《普希金》 ',
        '『 有一种东西不能遵循从众原则，那就是人的良心。』 — 《杀死一只知更鸟》 ',
        '『 我要赢一壶酒，拿来娶你。』 — 《撒野》 ',
        '『 明月清风晓星尘，傲雪凌霜宋子琛』 — 《魔道祖师》 ',
        '『 我把人生看成是无常的，把人的无可奈何、与生俱来的轻薄看成是虚无的。』 — 《心》 ',
        '『 读书人皆是负心人，最负痴心人。』 — 《雪中悍刀行》 ',
        '『 叹飘渺，莫过春樱转瞬逝；怜世间,万千繁华始归尘。』 — 《绯弹的亚里亚》 ',
        '『 凡事都有一个与一望而知不同的真相』 — 《约翰·勒卡雷》 ',
        '『 世间本无公平可言，除非公平掌握在自己手中。』 — 《冰与火之歌》 ',
        '『 给时光以生命，给岁月以文明。』 — 《三体:黑暗森林》 ',
        '『 我触摸不到的除了喜马拉雅山顶的雪，还有你。』 — 《同学录》 ',
        '『 每个人都有自己的故事，或悲或喜或无奈，不接触深了，你永远都不知道这一个个经过的人心心里装着的事，亮着灯的一扇扇窗里有没有在叹息。』 — 《撒野》 ',
        '『 所有坚硬冰冷的东西都会永远坚硬冰冷下去，而所有柔软温暖的东西只有眼下才会柔软温暖。』 — 《（以色列）阿摩司·奥兹》 ',
        '『 蓝曦臣，我这一生害人无数，杀父杀兄杀妻杀子杀师杀友，天下的坏事我什么没做过！......可我独独没有想过要害你』 — 《魔道祖师》 ',
        '『 自己觉得不好的事情，就干脆不要有第一次，一次也不要做，一小步也不能走出去，要不然回头来看，吃亏吃苦的还是自己。』 — 《剑来》',
        '『 阳光依然干净，星河依然灿烂。世界也依然在长久深情中缓缓地朝前走。于是时间奔流，得以见证人间在漫长岁月里，所有的永恒和不朽。』 — 《黑天》 ',
        '『 真正的强者不在于什么无敌，而在于活着，输得再惨都别死了，而是每次都能够站起来，再次愤然出拳出剑！』—《剑来》 ',
        '『 没有谁的生活会一直完美，但无论什么时候，都要看着前方，满怀希望就会所向披靡。』—《撒野》 ',
        '『 亭边总有花影，与我消遣一段旖旎的小时光。』 — 《最美是花影不扫》',
        '『 为你的生命找到一个长期的、深层的、不能被满足的乐趣，让这个永恒乐趣带领你穿透生命的无常。』 — 《拆掉思维里的墙》 ',
        '『 仿佛这一瞬间，火光也照亮了他同驹子共同度过的岁月。这当中也充满一种说不出的苦痛和悲哀。 』 — 《雪国》 ',
        '『 负霜华，行世路。一同星尘，除魔歼邪』 — 《魔道祖师》 ',
        '『 人生若只如初见，何事秋风悲画扇。』— 纳兰性德《木兰词·拟古决绝词柬友》',
        '『 我变了。因为我不变，就活不下去。』 — 《幸会，吃人鬼》',
        '『 愿来世，你晓天，晓地，晓星尘。』 — 《魔道祖师》',
        '『 想带你去看电影，明天你就不是我女朋友了。』 — 《撒哈拉的故事》 ',
        '『 当一切都消失的时候，你会明白生命究竟有何价值。』 — 《冰与火之歌》 ',
        '『 我站在路口，哈出的气可以把那些六角形的雪融化。』 — 《嗨，STORM GLASS》 ',
        '『 影响大众想象力的，并不是事实本身，而是它扩散和传播的方式。』 — 《乌合之众》 ',
        '『 唯一不可阻挡的是时间，它像一把利刃，无声地切开了坚硬和柔软的一切，恒定地向前推进着，没有任何东西能够使它的行进产生丝毫颠簸，它却改变着一切。』 — 《三体》 ',
        '『 给岁月以文明，而不是给文明以岁月。』 — 《三体》 ',
        '『 亭边总有花影，与我消遣一段旖旎的小时光。』 — 《最美是花影不扫》 ',
        '『 他并不是有多寂寞，有多孤单，需要在这里随便找个什么人开始一段感情，只是因为对方是顾飞。』 — 《撒野》 ',
        '『 你不是不擅长学习，只是没有找到自己想要学习的东西而已。』 — 《梦幻花》 ',
        '『 是非在己，毁誉由人，得失不论。』 — 《魔道祖师》 ',
        '『 日子过的象流水一般。它静静的从我们身边缓缓流过，不带半分声响。那些我们当年执着的人，执着的事，执着之后，却变成一种负担。』 — 《凑合活着》 ',
        '『 全是理智的心，恰如一柄全是锋刃的刀。它叫使用它的人手上流血。』 — 《飞鸟集》',
        '『 樱花落在赤裸的土壤上再也不会绽放，教室的窗外响起了蝉鸣，夏天到了。』 — 《野蛮生长》 ',
        '『 我一直以为人是慢慢变老的，其实不是，人是一瞬间变老的。』 — 《舞！舞！舞！》 ',
        '『 在童话中，一个人做他想做的事；在现实中，一个人做他能做的事。』 — 《埃莱娜·费兰特》 ',
        '『 所谓癌症，治疗的过程就是痛苦。』 — 《我，处于地狱之中》 ',
        '『 遇事不决，可问春风。』 — 《剑来》 ',
        '『 对友谊来说，笑声确实是个不错的开端，同时也是最好的结局。』 — 《道林·格雷的画像》 ',
        '『 你永远也看不到我最寂寞时候的样子，因为只有你不在我身边的时候，我才最寂寞。』 — 《爱与痛的边缘》 ',
        '『 地狱太冷，我来殉你。』 — 《二哈和他的白猫师尊》 ',
        '『 我们历经沧桑，这样错过了一生最好的时光。』 — 《黑暗萌主》 ',
        '『 我放着好好的阳关大道不走，走这阴沟里的独木桥干什么。真这么好走早就有人走了。』 — 《魔道祖师》 ',
        '『 生命中曾经有过的所有灿烂，终究都需要用寂寞来偿还。』 — 《百年孤独》 ',
        '『 我不敢告诉你我是谁，因为假如我告诉你，你可能会不喜欢我，而那却是我全部所有』 — 《为什么我不敢告诉你我是谁？》 ',
        '『 人生不可以有后悔，只可以有遗憾，遗憾是感叹错过，后悔是否定自己曾经做的选择』 — 《一切都是最好的安排》 ',
        '『 “太阳快落下去了，你们的孩子居然不害怕？”“当然不害怕，她知道明天太阳还会升起来的。”』 — 《三体II》 ',
        '『 命运如同一团乱麻，我们抽丝剥茧百般追寻，最终终于解开了这个线团，却发现所有人手里都拿错了线头…』 — 《希灵帝国》 ',
        '『 维罗纳的夏天找不到这样一朵好花。』 — 《罗密欧与朱丽叶》 ',
        '『 生来一人，去时孤身，便是江澄其人』 — 《魔道祖师》 ',
        '『 快乐固然兴奋，痛苦又何尝不美丽。』 — 《谈生命》 ',
        '『 我以为看到了你，便拥有了整个世界。却没想到你的梦里，早已有了我。』 — 《我欲封天》 ',
        '『 我一边注视沉默的空间里闪闪浮动的光粒子，一边力图确定心的坐标。』 — 《挪威的森林》 ',
        '『 人与人之间情断义绝，并不需要什么具体理由，就算表面上有，也很可能只是心已经离开的结果，事后才编造出的借口而已。』 — 《解忧杂货铺》 ',
        '『 放弃不难，但坚持一定很酷。』 — 《解忧杂货店》 ',
        '『 人都会长大的，长大了之后，就会捡起一些新东西，丢掉一些旧东西，就这么丢丢捡捡，哗啦一下子，就老喽。』 — 《剑来》 ',
        '『 如果一朵花很美，那么有时我会不由自主地想到：“要活下去！”』 — 《川端康成》 ',
        '『 这是在是我所知物理学中最富诗意的东西：你的一切都是星辰。』 — 《劳伦斯·M·克劳斯》 ',
        '『 曾经沧海难为水，除却巫山不是云。』— 元稹《离思五首·其四》',
        '『 玲珑骰子安红豆，入骨相思知不知。』— 温庭筠《南歌子词二首 / 新添声杨柳枝词》',
        '『 只愿君心似我心，定不负相思意。』— 李之仪《卜算子·我住长江头》',
        '『 愿得一心人，白头不相离。』— 卓文君《白头吟》',
        '『 去年今日此门中，人面桃花相映红。』— 崔护《题都城南庄》',
        '『 雨打梨花深闭门，忘了青春，误了青春。』— 唐寅《一剪梅·雨打梨花深闭门》',
        '『 人面不知何处去，桃花依旧笑春风。』— 崔护《题都城南庄》',
        '『 疏影横斜水清浅，暗香浮动月黄昏。』— 林逋《山园小梅·其一》',
        '『 宁可枝头抱香死，何曾吹落北风中。』— 郑思肖《画菊》',
        '『 桃之夭夭，灼灼其华。』— 佚名《桃夭》',
        '『 寂寞空庭春欲晚，梨花满地不开门。』— 刘方平《春怨》',
        '『 人间四月芳菲尽，山寺桃花始盛开。』— 白居易《大林寺桃花》',
        '『 不经一番寒彻骨，怎得梅花扑鼻香。』— 黄蘖禅师《上堂开示颂》',
        '『 竹外桃花三两枝，春江水暖鸭先知。』— 苏轼《惠崇春江晚景 / 惠崇春江晓景》',
        '『 春宵一刻值千金，花有清香月有阴。』— 苏轼《春宵·春宵一刻值千金》',
        '『 今人不见古时月，今月曾经照古人。』— 李白《把酒问月·故人贾淳令予问之》',
        '『 海上生明月，天涯共此时。』— 张九龄《望月怀远》',
        '『 月上柳梢头，人约黄昏后。』— 欧阳修《生查子·元夕》',
        '『 二十四桥明月夜，玉人何处教吹箫？』— 杜牧《寄扬州韩绰判官》',
        '『 露从今夜白，月是故乡明。』— 杜甫《月夜忆舍弟》',
        '『 沧海月明珠有泪，蓝田日暖玉生烟。』— 李商隐《锦瑟》',
        '『 春江潮水连海平，海上明月共潮生。』— 张若虚《春江花月夜》',
        '『 明月几时有？把酒问青天。』— 苏轼《水调歌头·丙辰中秋》',
        '『 云中谁寄锦书来，雁字回时，月满西楼。』— 李清照《一剪梅·红藕香残玉簟秋》',
        '『 世间无限丹青手，一片伤心画不成。』— 高蟾《金陵晚望》',
        '『 黄沙百战穿金甲，不破楼兰终不还。』— 王昌龄《从军行七首·其四》',
        '『 男儿何不带吴钩，收取关山五十州。』— 李贺《南园十三首·其五》',
        '『 落红不是无情物，化作春泥更护花。』— 龚自珍《己亥杂诗·其五》',
        '『 风萧萧兮易水寒，壮士一去兮不复还。』— 佚名《荆轲歌 / 渡易水歌》',
        '『 呜呼！楚虽三户能亡秦，岂有堂堂中国空无人。』— 陆游《金错刀行》',
        '『 苟利国家生死以，岂因祸福避趋之。』— 林则徐《赴戍登程口占示家人·其二》',
        '『 夜阑卧听风吹雨，铁马冰河入梦来。』— 陆游《十一月四日风雨大作》',
        '『 商女不知亡国恨，隔江犹唱后庭花。』— 杜牧《泊秦淮》',
        '『 人生自古谁无死？留取丹心照汗青。』— 文天祥《过零丁洋》',
        '『 休对故人思故国，且将新火试新茶。诗酒趁年华。』— 苏轼《望江南·超然台作》',
        '『 黄沙百战穿金甲，不破楼兰终不还。— 王昌龄《从军行七首·其四》',
        '『 宁可枝头抱香死，何曾吹落北风中。』— 郑思肖《画菊》',
        '『 我见青山多妩媚，料青山见我应如是。』— 辛弃疾《贺新郎·甚矣吾衰矣》',
        '『 男儿何不带吴钩，收取关山五十州。』— 李贺《南园十三首·其五》',
        '『 纸上得来终觉浅，绝知此事要躬行。』— 陆游《冬夜读书示子聿》',
        '『 时人不识凌云木，直待凌云始道高。』— 杜荀鹤《小松》',
        '『 读书不觉已春深，一寸光阴一寸金。』— 王贞白《白鹿洞二首·其一》',
        '『 沉舟侧畔千帆过，病树前头万木春。』— 刘禹锡《酬乐天扬州初逢席上见赠',
        '『 大鹏一日同风起，扶摇直上九万里。』— 李白《上李邕》',
        '『 粗缯大布裹生涯，腹有诗书气自华。』— 苏轼《和董传留别》',
        '『 长风破浪会有时，直挂云帆济沧海。』— 李白《行路难·其一》',
        '『 愿得此身长报国，何须生入玉门关。』— 戴叔伦《塞上曲二首·其二》',
        '『 呜呼！楚虽三户能亡秦，岂有堂堂中国空无人！』— 陆游《金错刀行》',
        '『 位卑未敢忘忧国，事定犹须待阖棺。』— 陆游《病起书怀》',
        '『 咬定青山不放松，立根原在破岩中。』— 郑燮《竹石》',
        '『 出师未捷身先死，长使英雄泪满襟。』— 杜甫《蜀相》',
        '『 天生我材必有用，千金散尽还复来。』— 李白《将进酒》',
        '『 黑发不知勤学早，白首方悔读书迟。』— 颜真卿《劝学诗》',
        '『 我也不登天子船，我也不上长安眠。』— 唐寅《把酒对月歌》',
        '『 人生自古谁无死？留取丹心照汗青。』— 文天祥《过零丁洋》',
        '『 三更灯火五更鸡，正是男儿读书时。』— 颜真卿《劝学诗》',
        '『 古人学问无遗力，少壮工夫老始成。』— 陆游《冬夜读书示子聿》',
        '『 身既死兮神以灵，魂魄毅兮为鬼雄。』— 屈原《国殇》',
        '『 一蓑烟雨任平生。』— 苏轼《定风波·莫听穿林打叶声》',
        '『 生当作人杰，死亦为鬼雄。』— 李清照《夏日绝句》',
        '『 不畏浮云遮望眼，自缘身在最高层。』— 王安石《登飞来峰》',
        '『 千淘万漉虽辛苦，吹尽狂沙始到金。』— 刘禹锡《浪淘沙九首》',
        '『 功名万里外，心事一杯中。』— 高适《送李侍御赴安西》',
        '『 路漫漫其修远兮，吾将上下而求索。』— 屈原《离骚》',
        '『 雄关漫道真如铁，而今迈步从头越。』— 毛泽东《忆秦娥·娄山关》',
        '『 江东子弟多才俊，卷土重来未可知。』— 杜牧《题乌江亭》',
        '『 九万里风鹏正举。』风休住，蓬舟吹取三山去。』— 李清照《渔家傲·天接云涛连晓雾》',
        '『 少壮不努力，老大徒伤悲！— 佚名《长歌行',
        '『 读书破万卷，下笔如有神。』— 杜甫《奉赠韦左丞丈二十二韵',
        '『 千磨万击还坚劲，任尔东西南北风。』— 郑燮《竹石》',
        '『 花门楼前见秋草，岂能贫贱相看老。』— 岑参《凉州馆中与诸判官夜集》',
        '『 富贵必从勤苦得，男儿须读五车书。』— 杜甫《柏学士茅屋》',
        '『 一月不读书，耳目失精爽。』— 萧抡谓《读书有所见作》',
        '『 千锤万凿出深山，烈火焚烧若等闲。』— 于谦《石灰吟》',
        '『 问汝平生功业，黄州惠州儋州。』— 苏轼《自题金山画像》',
        '『 捐躯赴国难，视死忽如归！』— 曹植《白马篇》',
        '『 僵卧孤村不自哀，尚思为国戍轮台。』— 陆游《十一月四日风雨大作》',
        '『 纵被无情弃，不能羞。』— 韦庄《思帝乡·春日游》',
        '『 非学无以广才，非志无以成学。』— 诸葛亮《诫子书》',
        '『 穷且益坚，不坠青云之志。』— 王勃《滕王阁序》',
        '『 安能摧眉折腰事权贵，使我不得开心颜！— 李白《梦游天姥吟留别 / 梦游天姥山别东鲁诸公》',
        '『 老骥伏枥，志在千里。』— 曹操《龟虽寿 / 神龟虽寿》',
        '『 看似寻常最奇崛，成如容易却艰辛。』— 王安石《题张司业诗》',
        '『 壮心未与年俱老，死去犹能作鬼雄。』— 陆游《书愤五首·其二》',
        '『 休言女子非英物，夜夜龙泉壁上鸣。』— 秋瑾《鹧鸪天·祖国沉沦感不禁》',
        '『 高山仰止，景行行止。』— 佚名《车舝》',
        '『 清谈可以饱，梦想接无由。』— 韩愈《洞庭湖阻风赠张十一署·时自阳山徙掾江陵》',
        '『 少年心事当拿云，谁念幽寒坐呜呃。』— 李贺《致酒行》',
        '『 丹青不知老将至，富贵于我如浮云。』— 杜甫《丹青引赠曹将军霸》',
        '『 杜鹃再拜忧天泪，精卫无穷填海心。』— 黄遵宪《赠梁任父母同年 / 题梁任父同年》',
        '『 横眉冷对千夫指，俯首甘为孺子牛。』— 鲁迅《自嘲》',
        '『 刑天舞干戚，猛志固常在。』— 陶渊明《读山海经·其十》',
        '『 夫君子之行，静以修身，俭以养德。』— 诸葛亮《诫子书》',
        '『 男儿西北有神州，莫滴水西桥畔泪。』— 刘克庄《玉楼春·戏林推》',
        '『 一日不读书，胸臆无佳想。』— 萧抡谓《读书有所见作》',
        '『 莫嫌举世无知己，未有庸人不忌才。』— 查慎行《三闾祠',
        '『 少年辛苦终身事，莫向光阴惰寸功。』— 杜荀鹤《题弟侄书堂》',
        '『 昨日邻家乞新火，晓窗分与读书灯。』— 王禹偁《清明》',
        '『 莫道谗言如浪深，莫言迁客似沙沉。』— 刘禹锡《浪淘沙九首》',
        '『 卧龙跃马终黄土，人事音书漫寂寥。』— 杜甫《阁夜》',
        '『 大鹏飞兮振八裔，中天摧兮力不济。』— 李白《临路歌》',
        '『 粉骨碎身全不怕，要留清白在人间。』— 于谦《石灰吟》',
        '『 不要人夸好颜色，只留清气满乾坤。』— 王冕《墨梅》',
        '『 未收天子河湟地，不拟回头望故乡。』— 令狐楚《少年行四首·其三》',
        '『 壮志饥餐胡虏肉，笑谈渴饮匈奴血。』— 岳飞《满江红·写怀》',
        '『 三军可夺帅也，匹夫不可夺志也。』— 佚名《论语十二章》',
        '『 归志宁无五亩园，读书本意在元元。』— 陆游《读书》',
        '『 浊酒不销忧国泪，救时应仗出群才。』— 秋瑾《黄海舟中日人索句并见日俄战争地图》',
        '『 烈士暮年，壮心不已。』— 曹操《龟虽寿》',
        '『 万里不惜死，一朝得成功。』— 高适《塞下曲》',
        '『 读书不作儒生酸，跃马西入金城关。』— 谢逸《送董元达》',
        '『 蜀道之难，难于上青天！』— 李白《蜀道难》',
        '『 三杯吐然诺，五岳倒为轻。』— 李白《侠客行》',
        '『 军歌应唱大刀环，誓灭胡奴出玉关。』— 徐锡麟《出塞》',
        '『 寄语天涯客，轻寒底用愁。』— 于谦《除夜太原寒甚》',
        '『 世上无难事，只要肯登攀。』— 毛泽东《水调歌头·重上井冈山》',
        '『 俱往矣，数风流人物，还看今朝。』— 毛泽东《沁园春·雪》',
        '『 只有精忠能报国，更无乐土可为家。』— 董必武《元旦口占用柳亚子怀人韵》',
        '『 激气已能驱粉黛，举杯便可吞吴越。』— 史达祖《满江红·中秋夜潮》',
        '『 金鞍玉勒寻芳客，未信我庐别有春。』— 于谦《观书》',
        '『 梧桐真不甘衰谢，数叶迎风尚有声。』— 张耒《夜坐·庭户无人秋月明》',
        '『 忧劳可以兴国，逸豫可以亡身。』— 欧阳修《伶官传序》',
        '『 此身行作稽山土，犹吊遗踪一泫然。』— 陆游《沈园二首》',
        '『 出不入兮往不反，平原忽兮路超远。』— 屈原《国殇》',
        '『 鞠躬尽瘁，死而后已。』— 诸葛亮《后出师表》',
        '『 灯前目力虽非昔，犹课蝇头二万言。』— 陆游《读书》',
        '『 高岸为谷，深谷为陵。』— 佚名《十月之交》',
        '『 知君惯度祁连城，岂能愁见轮台月。』— 岑参《送李副使赴碛西官军》',
        '『 受任于败军之际，奉命于危难之间。』— 诸葛亮《前出师表》',
        '『 嗟险阻，叹飘零。』关山万里作雄行。』— 刘克庄《玉楼春·戏林推》',
        '『 诚既勇兮又以武，终刚强兮不可凌。』— 屈原《国殇》',
        '『 寻河愁地尽，过碛觉天低。』— 岑参《碛西头送李判官入京》',
        '『 有德必有勇，正直的人绝不胆怯。』— 莎士比亚',
    　　'『 即使慢，驰而不息，纵会落后，纵会失败，但一定可以达到他所向的目标。』— 鲁迅',
    　　'『 勇敢寓于灵魂之中，而不单凭一个强壮的躯体。』— 卡赞扎基',
    　　'『 没有伟大的意志力，就不可能有雄才大略。』— 巴尔扎克',
    　　'『 与人相处要牢记“默”字；与家相处要牢记“忍”字；与世相处要牢记“宽”字。』',
    　　'『 在胆小怕事和优柔寡断的人眼中，一切事情都是不可能办到的。』— 司各特',
    　　'『 一个人的胆子大，才能有作为；畏怯的人，懦弱的人，他虽然没有身临其境的危险，但只要一听到人家的恐吓言语，早已吓得不知所措，试问这样的人可能有什么建树呢？』— 戴尔·卡耐基',
    　　'『 放下过去的烦恼，不耽忧未来，不执著现在，你的内心就会平静。』',
    　　'『 勇气就是一种坚韧；正因为它是一种坚韧，才使我们具有任何形式的自我否定和自我战胜的能力。因而，正是借助于这上点，勇气也多少与德行发生了关系。』— 叔本华',
    　　'『 勇气通往天堂，怯懦通往地狱。』— 塞内加',
    　　'『 一个顽强坚持自己在正义事业中的目标的人是不会因同伴发疯似地狂叫“错了”而动摇决心，也不会因暴君威胁恫吓的脸色而恐惧退缩。』— 贺拉斯',
    　　'『 不作什么决定的意志不是现实的意志；无性格的人从来不作出决定。』— 黑格尔',
    　　'『 成功的第一个条件就是要有决心；而决心要不得迅速，干脆， 果断， 又必须具有成功的信心。』— 大仲马',
    　　'『 任何人都是自己行为的镜子！看他人的优点，自我鞭策；看他人的缺点， 反省自己。』',
    　　'『 畏惧敌人徒然沮丧了自己的勇气，也就是削弱自己的力量，增加敌人的声势，等于让自己的愚蠢攻击自己。畏惧并不能免于一死，战争的结果大不了也不过一死。奋战而死，是以死亡摧毁死亡，畏怯而死，却做了死亡的奴隶。』— 莎士比亚',
    　　'『 鲁莽往往以勇敢的名义出现，但它是另一回事，并不属于美德；勇敢直接来源于谨慎，而鲁莽则出于愚蠢和想当然。』— 凯瑟琳·雷恩',
    　　'『 痛苦有个限度，恐惧则绵绵无际。』— 浦利尼斯二世',
    　　'『 大雪压青松，青松挺且直，要知松高洁，待到雪化时。』— 陈毅',
    　　'『 有坚强的意志，才有伟大的生活。』— 英国',
    　　'『 锲而舍之，朽木不折；锲而不舍，金石可镂。』— 荀况',
    　　'『 没有不冒风险就能克服的风险。』— 皮布里吕斯让·诺安',
    　　'『 咬住青山不放松，立根原在破岩中；千磨万击还坚劲，任尔东西南北风。』— 郑板桥',
    　　'『 谁有历经千辛万苦的意志，谁就能达到任何目的。』— 米南德',
    　　'『 英雄就是对任何事都有全力以赴，自始至终，心无旁骛的人。』— 波德莱尔',
    　　'『 恐惧与勇敢近在咫尺，而且互相共存— 向敌阵突进的人，最晓得个中实情。』— 棱罗',
    　　'『 如果没有勇气远离海岸线，长时间在海上孤寂地漂流，那么你绝不可发现新大陆。』— 纪德',
    　　'『 困难只能吓倒懦夫懒汉，而胜利永远属于敢于攀登科学高峰的人。』— 茅以升',
    　　'『 临着一切不平常的急难，只有勇敢和坚强才能拯救。』— 沙甫慈伯',
    　　'『 顽强的毅力可以征服世界上任何一座高峰。』— 狄更斯',
    　　'『 天堂和地狱，都是由心和行为所造作的。我们不要怕地狱，要怕的是心的偏向。』',
    　　'『 哪有斩不断的荆棘？哪有打不死的豺虎？哪有推不翻的山岳？你只须奋斗着，猛勇地奋斗着；持续着，永远的持续着，胜利就是你的了。』— 邓中夏',
    　　'『 冒险是历史富有生命力的元素，无论是对个人还是社会。』— 威谦·博利多',
    　　'『 当一个人一心一意做好事情的时候，他最终是必然会成功的。』— 卢梭',
    　　'『 大胆产生勇气，多疑却产生恐惧。』— 康拉德',
    　　'『 心是最大的骗子。别人骗你一时，它却骗你一辈子。』',
    　　'『 美不是出现在自己的镜子里，而是出现在别人的眼睛里。』',
    　　'『 经验告诉我们，停留在不愉快情绪的时间越长，会大量降低我们解决问题的整体能力。』',
    　　'『 勇敢来自于斗争，勇敢在同困难顽强奋斗中渐形成。我们青年人的座右铭就是勇敢， 顽强， 坚定，就是克服艰难险阻…… 』— 奥斯特洛夫斯基',
    　　'『 谁中途动摇信心，谁就是意志薄弱者；谁下定决心后，缺少灵活性，谁就是傻瓜。』— 诺尔斯',
    　　'『 意志引人入坦途，悲伤陷人于迷津。』— 埃·斯宾塞',
    　　'『 说谎的人必须有很好的记忆力。』',
    　　'『 意志命运往往背道而驰，决心到最后会全部推倒。』— 莎士比亚',
    　　'『 卑怯的人，即使有万丈的愤火，除弱草以外，又能烧掉什么呢？』— 鲁迅',
    　　'『 伟大人物的最明显标志，就是他坚强的意志，不管环境变换到何种地步，他的初衷与希望仍不会有丝毫的改变，而终于克服障碍，以达到期望的目的。』— 爱迪生',
    　　'『 真正勇敢的人，应当能够智慧地忍受最难堪的荣辱，不以身外的荣辱介怀，用息事宁人的态度避免无谓的横祸。』— 莎士比亚',
    　　'『 刚强的人尽管在内心很激动，但他们的见解和信念却像在暴风雨中颠簸船上的罗盘指针，仍能准确地指出方向。』— 克劳塞维茨',
    　　'『 并非有钱就是快乐，问心无愧心最安。』',
    　　'『 不懂得害怕的人不能算勇敢，因为勇敢指的是面对一切风云变幻坚强不屈的能力。』— 里欧·罗斯顿',
    　　'『 勇敢里面有天才， 力量和魔法。』— 歌德',
    　　'『 混乱生起的地方，也是宁静生起的地方。透过智慧，哪里有混乱，哪里就有宁静。』',
    　　'『 意志是每一个人的精神力量，是要创造或是破坏某种东西的自由的憧憬，是能从无中创造奇迹的创造力。』— 莱蒙托夫',
    　　'『 胜利属于最坚忍的人。』— 拿破仑',
    　　'『 原谅别人才能释放自己。』',
    　　'『 就是有九十九个困难，只要有一个坚强的意志就不困难。』— 杨根思',
    　　'『 到了热血沸腾，理智允许的时候还不敢挺身向前的人，就是懦夫；达到了预想的目的后还在冒进的人，就是小人。』— 海涅',
    　　'『 万事皆由人的意志创造。』— 普劳图斯',
    　　'『 一旦有了意志，脚步也会轻松起来。』— 欧洲',
    　　'『 你为人像水一般软弱。这一点人家很快就会发现的。他们不用费什么劲就会发现你为人没有骨气。他们可以像对付一个奴隶一样对付你。』— 马克·吐温',
    　　'『 百丈之台，其始则一石耳，由是而二石焉，由是而三石，四石以至于千万石焉。学习亦然。今日记一事，明日悟一理，积久而成学。』— 毛泽东',
    　　'『 勇敢的人以生命冒险，不以良心冒险。』— 希拉',
    　　'『 庸庸碌碌，心安理得地过下去是不道德的。而自动从战斗中退缩的人则是一个懦夫。』— 罗曼·罗兰',
    　　'『 憎恨是心的疯狂。』',
    　　'『 在全人类中，凡是坚强，正直，勇敢，仁慈的人，都有是英雄！』— 贝多芬',
    　　'『 一切痛苦能够毁灭人，然而受苦的人也能把痛苦消灭！』— 拜伦',
    　　'『 没有意志的人，一切感到困难，没有头脑的人，一切都感到简单。』— 朝鲜',
    　　'『 耐心和持久胜过激烈和狂热。』— 拉·封丹（法国寓言诗人）',
    　　'『 阴暗处长不出大树，人类也是一样，(www.lz13.cn)心胸必须如阳光般光明灿烂。』',
    　　'『 你想有所作为吗？那么坚定地走下去吧！后爱退只会使你意志衰退。』— 罗·赫里克',
    　　'『 “拿出胆量来”那一吼声是一切成功之母。』— 雨果',
    　　'『 哪里有意志存在，哪里就会有出路。』— 德国',
    　　'『 如果他是一棵软弱的芦草，就让他枯萎吧；如果他是一个勇敢的人，就让他自己打出一条路出来吧。』— 司汤达',
    　　'『 青山遮不住，毕竟东流去。』— 辛弃疾',
    　　'『 奋斗只是一种行动的昭示，而实际的行动却应该有详细的计划，清楚的段落，坚定的意志和力量。』— 戴尔·卡耐基',
    　　'『 意志坚强的人能把世界放在手中像泥块一样任意揉捏。』— 歌德',
    　　'『 鸟儿美在羽毛，人们美在勤劳。』',
    　　'『 培养意志是我们生存的目标。』— 爱献生',
    　　'『 侮辱那些无法要你道歉的人，本身就是怯懦的表现。』— 米克沙特·卡尔曼',
    　　'『 每一天都是做人的开始，每一个时刻都是自己的警惕。』',
    　　'『 意志就是力量。』— 拉丁美洲',
    　　'『 表现勇敢则勇气来；往后退缩则恐惧来。』— 康拉德',
    　　'『 恨是一支箭，最后会射向自己。』',
    　　'『 英勇是一种力量，但不是腿部和臂部的力量，而是心灵和灵魂的力量，这力量并不存在于战马和武器价值之中，而是存在于我们自身之中。』— 蒙田',
    　　'『 我认为克服恐惧最好的办法理应是：面对内心所恐惧的事情，勇往直前地去做，直到成功为止。』— 罗斯福',
    　　'『 勇敢是与深思和决断为伍的。』— 俞吾金',
    　　'『 愤怒是吹熄心灵明灯的狂风。』',
    　　'『 小小的好事，做出来就变成大大的好处。』',
    　　'『 人往往不是没有力量去做事，而是不肯去做。』',
    　　'『 勇敢征服一切：它甚至能给血肉之躯增添力量。』— 奥维德',
    　　'『 我们要时时注意，勇气常常是盲目的，因为它没有看见隐伏在暗中的危险与困难，因此，勇气不利于思考，但却有利于实干。因为在思考时必须预见到危险，而在实干中却必须顾及危险，除非那危险是毁灭性的。所以对于有勇无谋的人，只能让他们做帮手，而绝不能当领袖。』— 培根',
    　　'『 没有人与你做对，只是角度不同。』',
    　　'『 生气往往会蒙蔽我们的判断力。』',
    　　'『 聪明人的嘴藏在心里，愚蠢人的心摆在嘴里。』',
    　　'『 历史的道路不是涅瓦大街上的人行道，它完全是在田野中前进的，有时穿过尘埃，有时穿过泥泞，有时横渡沼泽，有时行经丛林。』— 车尔尼雪夫斯基',
    　　'『 要记住！情况越严重，越困难，就越需要坚定，积极，果敢，而消极无为就越有害。』— 列夫·托尔斯泰',
    　　'『 艰苦能磨练人的意志。』— 托·布朗',
    　　'『 没有力量的意志就如同假装士兵的孩子。』— 坎宁',
    　　'『 生活中有两个悲剧，一个是你的欲望得不到满足，另一个是你的欲望得到了满足。』',
    　　'『 有了坚定的意志，就等于给双脚添了一双翅膀。』— 乔·贝利',
    　　'『 我总在抱怨自己没鞋子穿，直到有一天，我遇到了一个没有脚的人。』',
    　　'『 既然他有勇气去死，他应该有力量去干斗争。拒不接受苦难不是力量的表现，而是懦弱的表现。』— 巴尔扎克',
    　　'『 当别人有生气的情绪时，我们不妨把它当成是一种求救的讯息— 其实他们内心欠缺的是更多自尊及肯定。』',
    　　'『 天下绝无不热烈勇敢地追求成功，而能取得成功的人。』— 拿破仑',
    　　'『 “路”必须去走方能到达，“事”必须去做才能完成，而“苦”则必须去受才可消除。』',
    　　'『 不要觉得自己很不幸，世界上比我们更苦的人还很多。』',
    　　'『 怯懦是你最大的敌人，勇敢则是你最好的朋友。』— 莱昂纳德·弗兰克转',
    　　'『 意志的力量大于手的力量。』— 索福克勒斯',
    　　'『 先相信你自己，然后别人才会相信你。』',
    　　'『 人不论做错几次，只要不失再来一次的勇气，必然大有可为。』',
    　　'『 最高贵的复仇是宽恕对方。』',
    　　'『 勇猛， 大胆和坚定的决心能够抵得上武器的精良。』— 达·芬奇',
    　　'『 勇气是人类最重要的一种特质，倘若有了勇气，人类其他的特质自然也就具备了。』— 丘吉尔',
    　　'『 只要你坚持的时间足够长，在恐惧之中的某一时刻来到之后，恐惧就根本不再是极端的痛苦，而不过是一种十分讨厌，令人恼火的刺激。』— 福克纳',
    　　'『 在科学上面是没有平坦的大路可走的，只有那在崎岖小路的攀登上不畏劳苦的人，才有希望到达光辉的顶点。』— 马克思',
    　　'『 有多少力量，就做多少事；切莫等待，等待常会落空。』',
    　　'『 谁恐惧，谁就要受折磨，并且已经受着他的恐惧的折磨。』— 蒙田',
    　　'『 我这个人走得很慢，但是我从不后退。』— 亚伯拉罕·林肯',
    　　'『 使意志获得自由的唯一途径，就是让意志摆脱任性。』— 朱·查·黑尔',
    　　'『 生气的时候，开口前先数到十，如果非常愤怒，先数到一百。』',
    　　'『 幸运所需要的美德是节制，而逆境所需要的美德是坚忍。』— 费·培根',
    　　'『 要坚强，要勇敢，不要让绝望和庸俗的忧愁压倒你，要保持伟大的灵魂在经受苦难时的豁达与平静。』— 亚米契斯',
    　　'『 勇敢是一种基于自尊的意识而发展成的能力。』- 拿破仑',
    　　'『 获得朋友的唯一之道，是自己主动去做别人的朋友。』',
    ];
    let index = Math.floor(Math.random() * arr.length);
    index = index < arr.length ? index : arr.length - 1;
    return arr[index];
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent() {
    let event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, true);
    event.eventType = 'message';
    window.dispatchEvent(event);
}

/**
 * 过滤对象中为空的属性
 * @param obj
 * @returns {*}
 */
export function filterObj(obj) {
    if (!(typeof obj == 'object')) {
        return;
    }

    for (var key in obj) {
        if (
            obj.hasOwnProperty(key) &&
            (obj[key] == null || obj[key] == undefined || obj[key] === '')
        ) {
            delete obj[key];
        }
    }
    return obj;
}

/**
 * 时间格式化
 * @param value
 * @param fmt
 * @returns {*}
 */
export function formatDate(value, fmt) {

    //如果时间格式含有T，yyyy-MM-ddThh:mm:ss,yyyy-MM-ddThh:mm:ss.SSSZ，这样做可以自动把+0:00时区的时间转为+8:00的时间
    if (typeof value == "string" && value.includes('T')) {
        value = new Date(value);
    }

    //正则表达式
    var regPos = /^\d+(\.\d+)?$/;

    if (regPos.test(value) || value instanceof Date) {
        //如果是数字
        let getDate = value instanceof Date ? value : new Date(value);
        let o = {
            'M+': getDate.getMonth() + 1,
            'd+': getDate.getDate(),
            'h+': getDate.getHours(),
            'm+': getDate.getMinutes(),
            's+': getDate.getSeconds(),
            'q+': Math.floor((getDate.getMonth() + 3) / 3),
            S: getDate.getMilliseconds(),
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                (getDate.getFullYear() + '').substr(4 - RegExp.$1.length)
            );
        }
        for (let k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1 ?
                    o[k] :
                    ('00' + o[k]).substr(('' + o[k]).length)
                );
            }
        }

        try {
            fmt = fmt.replace('T', ' ');
        } catch (error) {
            console.log('formate date error : ' + error);
        }

        return fmt;
    } else {
        //TODO
        try {
            if (typeof value == 'undefined' || value == null) {
                value = '--';
            }
            value = value.trim();
            fmt = value.substr(0, fmt.length);
            fmt = fmt.replace('T', ' ');
        } catch (error) {
            console.log('formate date error : ' + error);
        }

        return fmt;
    }
}

/**
 * @function 过滤空对象
 * @param {*} data
 */
export function deNull(data) {
    if (typeof data == 'undefined' || data == null || data == '') {
        return '';
    } else {
        return data;
    }
}

// 生成首页路由
export function generateIndexRouter(data) {
    let indexRouter = [{
            path: '/',
            name: 'dashboard',
            component: resolve =>
                require(['@/components/layouts/TabLayout'], resolve),
            meta: {
                title: '首页'
            },
            redirect: '/dashboard/analysis',
            children: [...generateChildRouters(data)],
        },
        {
            path: '/',
            name: 'dashboard',
            component: resolve =>
                require(['@/components/layouts/TabLayout'], resolve),
            meta: {
                title: '工作台'
            },
            redirect: '/dashboard/workplace',
            children: [...generateChildRouters(data)],
        },
        {
            path: '*',
            redirect: '/404',
            hidden: true,
        },
    ];
    return indexRouter;
}

// 生成嵌套路由（子路由）

function generateChildRouters(data) {
    const routers = [];
    for (var item of data) {
        let component = '';
        if (item.component.indexOf('layouts') >= 0) {
            component = 'components/' + item.component;
        } else {
            component = 'views/' + item.component;
        }

        // eslint-disable-next-line
        let URL = (item.meta.url || '').replace(/{{([^}}]+)?}}/g, (s1, s2) =>
            eval(s2)
        ); // URL支持{{ window.xxx }}占位符变量
        if (isURL(URL)) {
            item.meta.url = URL;
        }

        let menu = {
            path: item.path,
            name: item.name,
            redirect: item.redirect,
            component: resolve => require(['@/' + component + '.vue'], resolve),
            hidden: item.hidden,
            meta: {
                title: item.meta.title,
                icon: item.meta.icon,
                url: item.meta.url,
                permissionList: item.meta.permissionList,
                keepAlive: item.meta.keepAlive,
            },
        };
        if (item.alwaysShow) {
            menu.alwaysShow = true;
            menu.redirect = menu.path;
        }
        if (item.children && item.children.length > 0) {
            menu.children = [...generateChildRouters(item.children)];
        }
        //判断是否生成路由
        if (item.route && item.route === '0') {
            //console.log(' 不生成路由 item.route：  '+item.route);
            //console.log(' 不生成路由 item.path：  '+item.path);
        } else {
            routers.push(menu);
        }
    }
    return routers;
}

/**
 * 深度克隆对象、数组
 * @param obj 被克隆的对象
 * @return 克隆后的对象
 */
export function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * @function clone对象
 * @param {*} obj 被克隆对象
 */
export function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * 随机生成数字
 *
 * 示例：生成长度为 12 的随机数：randomNumber(12)
 * 示例：生成 3~23 之间的随机数：randomNumber(3, 23)
 *
 * @param1 最小值 | 长度
 * @param2 最大值
 * @return int 生成后的数字
 */
export function randomNumber() {
    // 生成 最小值 到 最大值 区间的随机数
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    if (arguments.length === 1) {
        let [length] = arguments;
        // 生成指定长度的随机数字，首位一定不是 0
        let nums = [...Array(length).keys()].map(i =>
            i > 0 ? random(0, 9) : random(1, 9)
        );
        return parseInt(nums.join(''));
    } else if (arguments.length >= 2) {
        let [min, max] = arguments;
        return random(min, max);
    } else {
        return Number.NaN;
    }
}

/**
 * 随机生成字符串
 * @param length 字符串的长度
 * @param chats 可选字符串区间（只会生成传入的字符串中的字符）
 * @return string 生成的字符串
 */
export function randomString(length, chats) {
    if (!length) length = 1;
    if (!chats) chats = '0123456789qwertyuioplkjhgfdsazxcvbnm';
    let str = '';
    for (let i = 0; i < length; i++) {
        let num = randomNumber(0, chats.length - 1);
        str += chats[num];
    }
    return str;
}

/**
 * 随机生成uuid
 * @return string 生成的uuid
 */
export function randomUUID() {
    let chats = '0123456789abcdef';
    return randomString(32, chats);
}

/**
 * 下划线转驼峰
 * @param string
 * @returns {*}
 */
export function underLine2CamelCase(string) {
    return string.replace(/_([a-z])/g, function(all, letter) {
        return letter.toUpperCase();
    });
}

/**
 * 判断是否显示办理按钮
 * @param bpmStatus
 * @returns {*}
 */
export function showDealBtn(bpmStatus) {
    if (bpmStatus != '1' && bpmStatus != '3' && bpmStatus != '4') {
        return true;
    }
    return false;
}

/**
 * 增强CSS，可以在页面上输出全局css
 * @param css 要增强的css
 * @param id style标签的id，可以用来清除旧样式
 */
export function cssExpand(css, id) {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `@charset "UTF-8"; ${css}`;
    // 清除旧样式
    if (id) {
        let $style = document.getElementById(id);
        if ($style != null) $style.outerHTML = '';
        style.id = id;
    }
    // 应用新样式
    document.head.appendChild(style);
}

/**
 * 检查字符串是否包含中文
 * @param {*} val
 */
export function existChinese(val) {
    var reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');
    return reg.test(val);
}

/**
 * 获取URL参数值
 * @param {*} val
 */
export function queryUrlString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
    if (r != null) return unescape(r[2]);
    return null;
}

/**
 * 计算两个日期之间的天数
 */
export function queryDateDiff(date1, date2) {
    //如果被解析日期格式为字符串，则先将字符串解析为日期格式
    if (Object.prototype.toString.call(date1).includes('String')) {
        try {
            date1 = parseDate(formatDate(date1, 'yyyy-MM-dd hh:mm:ss'));
            date2 = parseDate(formatDate(date2, 'yyyy-MM-dd hh:mm:ss'));
        } catch (e) {
            date1 = parseDate(date1);
            date2 = parseDate(date2);
        }
    }

    var beginDate = date1;
    var endDate = date2;

    //日期差值,即包含周六日、以天为单位的工时，86400000=1000*60*60*24.
    var workDayVal = (endDate - beginDate) / 86400000;
    //工时的余数
    var remainder = workDayVal % 7;
    //工时向下取整的除数
    var divisor = Math.floor(workDayVal / 7);
    var weekendDay = 2 * divisor;

    //起始日期的星期，星期取值有（1,2,3,4,5,6,0）
    var nextDay = beginDate.getDay();
    //从起始日期的星期开始 遍历remainder天
    for (var tempDay = remainder; tempDay >= 1; tempDay--) {
        //第一天不用加1
        if (tempDay == remainder) {
            nextDay = nextDay + 0;
        } else if (tempDay != remainder) {
            nextDay = nextDay + 1;
        }
        //周日，变更为0
        if (nextDay == 7) {
            nextDay = 0;
        }

        //周六日
        if (nextDay == 0 || nextDay == 6) {
            weekendDay = weekendDay + 1;
        }
    }
    //获取含有小数位的天数
    var timeFloat = parseFloat(workDayVal);
    //获取整数位的天数
    var timeInt = parseInt(workDayVal);
    //实际工时（天） = 起止日期差 - 周六日数目。
    workDayVal = parseInt(workDayVal - weekendDay);

    //取相差天数的小数位
    var decpart = timeFloat - timeInt;

    //如果小数位的天数大于0.5（3小时），按一天统计，如果大于0，按半天统计
    if (decpart * 24 > 4) {
        decpart = 1;
    } else if (decpart > 0) {
        decpart = 0.5;
    } else {
        decpart = 0;
    }

    return workDayVal + decpart;
}

/**
 * @function 字符串转为日期
 * @param {*} date
 */
export function parseDate(date) {
    var t = Date.parse(date);
    if (!isNaN(t)) {
        return new Date(Date.parse(date.replace(/-/g, '/')));
    } else {
        return new Date();
    }
}

/**
 * @function 解析JSON对象
 * @param {*} json
 */
export function parseJSON(json) {
    try {
        return JSON.parse(json);
    } catch (e) {
        console.log('err', e);
    }
    return [];
}