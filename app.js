const DIMENSIONS = [
  {
    name: "直球表达",
    short: "直说",
    color: "#d4657a",
    bridge: "把需要用一句话讲清楚",
    blurb: "有感受和需要时，直接说出来",
    tiers: {
      high: {
        strength: "你较常把感受和需要说清楚。对方少猜一步，很多小事就不必积着。",
        activities: ["不舒服时先说一句事实，再补一句你希望怎样", "每天用一句短消息讲今天的真实状态", "做决定前直接问对方：你更想选哪一个"],
        growth: ["说完留一点时间听对方，避免只把话说完", "很冲的时候先把句子缩短，只留最重要的那一句"]
      },
      mid: {
        strength: "有些场合你会把话说明白，尤其是事情已经比较清楚的时候。它是你用得上的方式，还不是每次的第一反应。",
        activities: ["每周选一件小事，用「我希望」开头说一次", "回复消息时少用「随便」，改成一个具体选项", "约见面时把时间和期待一起说出来"],
        growth: ["话不用说很长，一句就够", "如果怕太冲，可以先写下来再发出去"]
      },
      low: {
        strength: "这次作答里，你较少第一时间把感受说死。你可能先看气氛，或先自己消化。若想让对方少猜，可以从很短的一句实话开始。",
        activities: ["只练一句：我现在需要安静，或我现在想见面", "把「没事」换成「有一点，但我还想自己放一放」", "重要的话先发给自己看一遍，再发给对方"],
        growth: ["不必一次说完所有感受", "对方问第二遍时，可以把它当成邀请，而不是质问"]
      }
    }
  },
  {
    name: "细腻体察",
    short: "体察",
    color: "#7d6bb5",
    bridge: "先看对方此刻的状态",
    blurb: "先读语气、表情和没说出口的部分",
    tiers: {
      high: {
        strength: "你较常先看对方的语气和状态，再决定怎么接。很多被忽略的小情绪，你会先注意到。",
        activities: ["回复前先看对方今天的整体语气", "见面时先问一句今天累不累，再进入正题", "记得对方随口提过的一件小事，择机问一句"],
        growth: ["观察到了，用一句话确认，避免只在心里下结论", "对方说没事时，可以相信一次，不必连续追问"]
      },
      mid: {
        strength: "对方情绪明显、或你们之间有点别扭时，你会去看言外之意。平时你未必一直开着这个雷达。",
        activities: ["一天里只认真看一段对话，不要求每句都分析", "不确定时问：你这句是在说事，还是在说心情", "把猜到的内容说出来，让对方决定对不对"],
        growth: ["体察是入口，确认才让对方感到被理解", "看太久会累，允许自己有时只听字面"]
      },
      low: {
        strength: "你目前较少把读气氛当作第一反应，更想直接处理事情本身。补一次确认，有时能少一次误会。",
        activities: ["对方语气变了，就问一个封闭问题：你是累了吗", "不分析朋友圈，只在对方主动提起时接住", "每周回忆对方说过的一句偏好，并记下来"],
        growth: ["猜完要问，不把猜测当成事实", "一次只确认一件事，不必把关系过成审题"]
      }
    }
  },
  {
    name: "亲密陪伴",
    short: "陪伴",
    color: "#e09a3e",
    bridge: "留出一段真正在一起的时间",
    blurb: "用待在一起、共享日常来感到靠近",
    tiers: {
      high: {
        strength: "你较常用共处来感到关系还在。人在旁边，哪怕各做各的，你也更容易安心。",
        activities: ["每周留一段不被手机打断的相处", "一起做一件很普通的事，比如吃饭或散步", "分开的日子也约一个固定的语音或见面"],
        growth: ["在一起时也问对方想不想说话", "陪伴可以很轻，不必把空档都填满"]
      },
      mid: {
        strength: "累的时候、或关系需要确认时，你会想见面、想待在一起。它是你的一种靠近方式。",
        activities: ["两周安排一次只属于两个人的时间", "通话时开着视频做各自的事，也算陪伴", "见面先留十分钟什么都不安排"],
        growth: ["对方需要独处时，陪伴可以改期，不必理解成变淡", "把「待着」和「必须聊天」分开"]
      },
      low: {
        strength: "你较少把时刻待在一起当成靠近的第一选择。关系仍然可以稳，只是你的入口可能在说话、守约或各自过好生活。",
        activities: ["一周只增加一次短短的同处，比如一起走一段路", "消息里问：这周末要不要见一面", "见面时放下一件会让人缺席的事"],
        growth: ["短也算数，不必一次陪很久", "先问对方想要的是人在，还是把事情说完"]
      }
    }
  },
  {
    name: "自主空间",
    short: "空间",
    color: "#3d8f8a",
    bridge: "各自留一点不被打扰的时间",
    blurb: "保留自己的节奏、朋友和独处",
    tiers: {
      high: {
        strength: "你较常给自己和对方留出各自的生活。关系对你来说，不是把两个人合成一个人。",
        activities: ["提前说好哪些时间不必秒回", "维持一个不属于恋爱的爱好或朋友局", "分开过一天后，再分享一件小事"],
        growth: ["空间要说出来，避免对方把沉默理解成冷淡", "留白之后记得回到关系里，补一句近况"]
      },
      mid: {
        strength: "忙、累或需要自己待着时，你会选择拉开一点距离。这是你调节状态的方式。",
        activities: ["用一句「我先忙完再回你」代替消失", "一周留一个晚上给自己的安排", "见面和独处都写进同一周，而不是只剩一种"],
        growth: ["拉开距离时给一个回来的时间", "对方若需要确认，一句近况就够，不必长篇解释"]
      },
      low: {
        strength: "你目前较少把独处或各自生活放在第一反应。靠近对你更自然。偶尔留白，也可以让两个人都喘口气。",
        activities: ["这周留出两小时不讨论关系、也不黏在一起", "鼓励对方去见自己的朋友", "想联系时先看对方是不是在忙"],
        growth: ["空间不是变心的信号，可以说清楚", "从很短的独处开始，不必一次分开很久"]
      }
    }
  },
  {
    name: "降温修复",
    short: "降温",
    color: "#5b7fbf",
    bridge: "先暂停，等两边都平一点",
    blurb: "争执时先停火，平复后再谈",
    tiers: {
      high: {
        strength: "情绪上来时，你较常先停一下。你不想在最冲的时候把话说绝。",
        activities: ["约定一个暂停手势或一句「我们十分钟后再说」", "离开现场时说清你会回来谈", "平复后只谈这一件事，不翻旧账"],
        growth: ["暂停要有回来的时间，避免变成冷处理", "对方若害怕被扔下，先留一句「我不是不要你」"]
      },
      mid: {
        strength: "争吵变大声、或你觉得再说会伤人时，你会想先停。它适合作为刹车，而不是每次的唯一办法。",
        activities: ["感到胸口发紧就提议暂停", "暂停期间不去翻聊天记录找证据", "回来后用三句话讲完：发生了什么、我在意什么、下一步"],
        growth: ["停下来是为了把话说好，不是为了赢", "如果对方想当时说完，可以约定只说五分钟"]
      },
      low: {
        strength: "你较少第一时间叫停，更想把事情当场处理掉。加一个很短的暂停，有时能让后面的话更好听。",
        activities: ["下一句出口前先喝口水", "说「给我两分钟」而不是直接离开", "事后补一句：刚才我若太急，我们重说"],
        growth: ["暂停可以很短，不必等到完全没情绪", "离开前告诉对方你还会回来"]
      }
    }
  },
  {
    name: "当面说开",
    short: "说开",
    color: "#c46b4a",
    bridge: "把卡着的那件事摊开",
    blurb: "有分歧就拿到台面上谈清楚",
    tiers: {
      high: {
        strength: "有疙瘩时，你较常想把它说开。事情摊在桌上，你才觉得关系是清楚的。",
        activities: ["不舒服的当天就约一个时间谈", "一次只谈一个问题", "谈完一起说下一句：所以我们以后怎么做"],
        growth: ["说开不等于当时必须有输赢", "看对方有没有力气谈，太累就改到一个明确的稍后"]
      },
      mid: {
        strength: "事情卡住、或你感觉被误会时，你会想当面或直接问清楚。平时你也会先看时机。",
        activities: ["用「我想搞懂一件事」开头，而不是「你总是」", "把想问的写成两行，见面时照着说", "谈完问对方有没有没说到的部分"],
        growth: ["选双方都还听得进的时候", "说完留白，让对方也能说完"]
      },
      low: {
        strength: "你目前较少把问题立刻摊开，可能先降温、先观察，或先自己过掉。小疙瘩若会反复出现，说开一次往往比反复猜更省力。",
        activities: ["只选反复出现的那一件，约十五分钟谈完", "用消息先说「我想当面讲一件小事」", "谈的时候只描述这一次，不上升成性格"],
        growth: ["不必在情绪最高的时候开谈", "说开是为了让两个人都轻松一点"]
      }
    }
  },
  {
    name: "仪式心意",
    short: "仪式",
    color: "#c45c86",
    bridge: "用一个很小的仪式把在意放出来",
    blurb: "用纪念日、小惊喜和固定动作表达在意",
    tiers: {
      high: {
        strength: "你较常用特别一点的小动作把在意做出来。日子里的标记，会让你感到这段关系被认真对待。",
        activities: ["给你们留一个固定的小仪式，比如每周同一家店", "重要的日子提前写进日历", "道歉或和好时，配一个看得见的小动作"],
        growth: ["仪式对上对方在意的方式才算送到", "做不到大的，就做一个很小但稳定的"]
      },
      mid: {
        strength: "纪念日、和解或想表达重视时，你会想到准备一点什么。它是加分项，不一定是每天的主调。",
        activities: ["这个月只准备一次小的，不求频繁", "把对方提过的喜好收进备忘录", "普通日子也可以留一句只说给对方的话"],
        growth: ["先问对方吃不吃这一套，再决定隆重程度", "心意说出来，避免对方没看懂"]
      },
      low: {
        strength: "你较少用仪式和惊喜当作第一反应。你可能更信说话、陪伴或说到做到。偶尔一个很小的标记，也能让对方感到被放在心上。",
        activities: ["记下一个对你们有意义的日期", "下次见面带一件很小的东西，或发一张旧照片", "和好时不用大场面，一句专属的话也算"],
        growth: ["仪式可以轻，不必变成表演", "对方若在意日子，提前问要不要一起过"]
      }
    }
  },
  {
    name: "踏实守约",
    short: "守约",
    color: "#6a8f4e",
    bridge: "把说过的事落到一个具体时间",
    blurb: "用稳定、守时和做到来让人安心",
    tiers: {
      high: {
        strength: "你较常靠做到、守时和稳定的节奏让关系安心。答应过的事，在你这里分量很重。",
        activities: ["答应之前先看自己做不做得到", "重要约定写下来，并提前确认", "改变计划时尽早说，顺便给出新的时间"],
        growth: ["守约之外也留一句感受，避免关系只剩执行", "对方偶尔失约时，先听原因，再决定严不严"]
      },
      mid: {
        strength: "涉及承诺、时间和靠不靠得住时，你会看做得怎么样。日常里你也会用别的方式表达在意。",
        activities: ["每周只盯住一件说过要做的小事", "见面尽量守时，迟到就提前讲", "把「以后」改成一个具体的日子"],
        growth: ["做不到就早点改口，比硬扛到失约更好", "稳定不等于没有弹性，特殊情况可以一起改"]
      },
      low: {
        strength: "你目前较少把守时和兑现放在第一反应，可能更在意当下的感受或气氛。把一句「以后」落成时间，会让对方更容易信任。",
        activities: ["下次答应只答应一件很小的事，并且做到", "改计划时同时给出替代时间", "重要的话补一句：我这周几之前回复你"],
        growth: ["少承诺，多兑现", "临时变化可以说，沉默会让人更不安"]
      }
    }
  }
];

const QUESTIONS = [
  { text: "对方连着问了两句「你是不是不开心」，你更可能？", options: ["直接说我有点累，不是在生你的气", "先看对方是关心，还是自己也委屈了", "说我想自己静一静，过会儿再聊", "不空回，补一句今天也想你，或约一个小小的下次"] },
  { text: "周末的计划临时要改，你更在意哪一件？", options: ["对方语气里有没有不好意思", "能不能改成另外一件可以一起做的事", "先别争，等彼此都平一点再定", "说好的时间最好别总变，下次尽量守住"] },
  { text: "两个人下班都很累，你更想怎么过这一晚？", options: ["哪怕各做各的，也待在同一个地方", "各自休息，不必硬凑在一起", "累也可以，有不舒服就摊开讲", "告诉对方我今晚需要安静，或只需要一句问候"] },
  { text: "刚刚有点别扭，你更常的下一步是？", options: ["先各自忙自己的，给彼此一点空", "停止来回解释，等火气下去", "递杯水，或用一句只有你们懂的话把场面松开", "看对方是想被理解，还是想先静一静"] },
  { text: "约好见面，有一方快迟到了，你更会？", options: ["先不兴师问罪，人到了再说", "直接问还来不来，别让我干等", "看平时是否说好了守时，再决定严不严", "迟到也没关系，人到了一起待着就好"] },
  { text: "一个对你们有意义的日子近了，你更自然会？", options: ["先问对方在不在意这一天，免得猜", "准备一个小仪式，或写一段短短的话", "直接说我想怎么过", "不一定要绑在一起过，各有安排也行"] },
  { text: "对方忘了你提过的一件小事，你更常？", options: ["有点失落，但会把它收成以后的小提醒", "更在意以后说到的事能不能记住", "先看是忙忘了，还是根本没放在心上", "不当场追问，先把这件事放一放"] },
  { text: "要不要把关系再往前走一步，你更希望怎么发生？", options: ["按说过的节奏来，不突然加速，也不突然变冷", "把「我想更认真」直接说出来", "先多见面、多待在一起，再谈名分", "两边把顾虑摊开，谈清楚再走"] },
  { text: "对方发了一句情绪很低的话，你更会？", options: ["直接问：需要我现在听你说吗", "先看这是不是说给你的，再决定怎么接", "先不打扰，等对方来找你", "留一句很具体的在意，而不是只回一个表情"] },
  { text: "一起出门的想法不一样，你更常？", options: ["听对方坚持的理由里，真正在乎的是什么", "找出一段两个人都能玩到的安排", "先暂停做决定，别在气头上定下来", "分好谁查、谁订，把这件事落实"] },
  { text: "平时联系，你更舒服的状态是？", options: ["不必时刻深聊，但能感到人是在的", "不必报备，各自过完再分享", "联系太密或太少，我会说出来", "讲清我希望一天大概联系到什么程度"] },
  { text: "对方因为工作情绪很差，你更可能？", options: ["不硬闯，让对方先自己待着", "少讲道理，等对方愿意了再靠近", "留一句「我在」，或准备一点对方会舒服的东西", "先分辨对方是想说，还是想安静"] },
  { text: "消息已读了一会儿还没回，你更会？", options: ["先假定在忙，不连续追问", "过一会儿直接问是不是我哪里说错了", "如果以前说好忙会说明，就按那个约定来", "更想知道人还在，哪怕只回一个很短的句子"] },
  { text: "见面时，你更想把时间花在？", options: ["把最近的疙瘩当面说完", "做一件有点仪式的小事，比如去你们固定的地方", "一边走一边把想说的话说出来", "也可以各自见朋友，不必全程黏在一起"] },
  { text: "你答应的一件小事没做到，你更会怎么补？", options: ["补一个看得见的心意，不只说对不起", "把这件事重新写进一定要做到的清单", "先看对方在不在意，再决定补得多郑重", "不立刻辩解一堆，等气氛松了再补"] },
  { text: "要把对方介绍给朋友时，你更在意？", options: ["事先说好怎么介绍，别临时让对方尴尬", "直接问对方想被介绍成什么", "人到场、待在一起，比头衔重要", "哪句介绍不舒服，就说开"] },
  { text: "对方有一阵没怎么主动找你，你更常？", options: ["自己把「最近怎么了」或「我想你了」说出来", "回想对方最近的状态，判断是忙还是冷", "把自己的生活过好，不一直等着", "发一个只有你们懂的梗或一张旧照片"] },
  { text: "吵过之后的第二天，你更可能？", options: ["看对方今天的语气，决定能不能靠近", "找个理由见一面，人在一起比较容易和好", "不翻旧账，等两个人都平了再谈", "按你们说过的方式和好，比如谁先开口"] },
  { text: "假期只有两天，你更想？", options: ["两天尽量待在一起", "留出一段完全属于自己的时间", "如果安排不公平，就说出来重分", "告诉对方我最想一起做的那一件"] },
  { text: "对方的玩笑开过了，你更会？", options: ["先不接，自己消化一下", "不当场翻脸，等气氛松了再说", "事后用一个小动作，把「这个不太好」轻轻送回去", "看对方是无心，还是在试你的反应"] },
  { text: "要不要进入更正式的场合，比如见重要的人，你更希望？", options: ["不催，等两边都不那么紧张再谈", "开诚布公问对方现在想不想走到这一步", "如果以前说好了阶段，就按阶段推进", "先在对方的生活里多出现，见面比讨论更实在"] },
  { text: "对方和别人走得很近，你心里有点动，更会？", options: ["把不舒服说出来，问清楚彼此的边界", "不一定兴师问众，但会想要一个让你安心的表示", "直接讲我需要什么样的边界", "先把自己的生活过好，不围着这件事转"] },
  { text: "在关系里，你更容易被什么打动？", options: ["记得你们的日子，并把它过得有一点样子", "答应的事真的做到", "不用你说完，也能感觉到你的心情", "争执时不逼你马上给结论"] },
  { text: "如果用一句话形容你想要的相处，你更接近？", options: ["说到的事算数，日子稳一点", "想说的话可以说完", "人经常在一起", "有问题就摊开，不攒着"] }
];

const LETTERS = ["A", "B", "C", "D"];
const TIER_GLOSS = {
  high: "较常作为第一反应",
  mid: "接近平均，一部分情境会用",
  low: "这次较少作为第一反应"
};

const state = {
  screen: "home",
  index: 0,
  answers: Array(24).fill(null),
  timer: null,
  report: null
};

function optionDims(index) {
  return [0, 1, 3, 6].map((offset) => (index + offset) % 8);
}

function tierOf(score) {
  if (score >= 6) return "high";
  if (score >= 3) return "mid";
  return "low";
}

function scoreOf(answers) {
  const scores = Array(8).fill(0);
  answers.forEach((dim) => {
    if (dim !== null) scores[dim] += 1;
  });
  return scores;
}

function buildReport(scores) {
  const ranked = DIMENSIONS.map((dim, index) => {
    const score = scores[index];
    const tier = tierOf(score);
    return { ...dim, index, score, tier, copy: dim.tiers[tier] };
  }).sort((a, b) => b.score - a.score || a.index - b.index);

  const top = ranked[0];
  const second = ranked[1];
  const third = ranked[2];
  const bottom = ranked[ranked.length - 1];
  const spread = top.score - bottom.score;
  const ties = ranked.filter((dim) => dim.score === top.score);
  let title = `更常靠${top.name}相处`;
  let detail = "";
  if (spread <= 2) title = "几种相处方式比较均衡";
  else if (ties.length >= 3) title = "有几项方式同样常出现";
  else if (ties.length === 2) {
    title = `${ties[0].name}\n${ties[1].name}`;
    detail = "这两种同样常出现";
  }

  const lead = ranked.slice(0, 3).map((dim) => `${dim.name} ${dim.score} 次`).join("、");
  const paragraphs = [];
  if (spread === 0) {
    paragraphs.push("八种相处方式都是 3 次。全卷共 24 次选择，平均下来正好每种 3 次，这次没有哪一种明显更常出现。");
  } else {
    paragraphs.push(`按被选中的次数，靠前的是${lead}。全卷共 24 次选择，平均每种方式 3 次。高于 3 次，只表示它更常成为你的第一反应。`);
  }

  if (spread <= 2) {
    paragraphs.push("前后差距很小。这次更适合看成比较均衡的相处组合。换一段关系或换一种压力，次序还可能移动。");
  } else if (top.score === second.score) {
    paragraphs.push(`「${top.name}」和「${second.name}」次数相同，不必分出高下。可以有时${top.bridge}，有时${second.bridge}。`);
  } else {
    paragraphs.push(`一个顺手的搭配是：先${top.bridge}，再${second.bridge}。`);
    if (third.score >= 5) {
      paragraphs.push(`「${third.name}」也比较常出现，适合在前两种不太用得上时接上。`);
    }
  }

  const lows = ranked.filter((dim) => top.score - dim.score >= 4 && dim.score <= 2).slice(-2);
  if (lows.length) {
    const names = lows.map((dim) => dim.name).join("、");
    const tip = lows[lows.length - 1];
    paragraphs.push(`${names}在这次里次数少一些。这不是你不会爱人，只表示它们较少成为第一反应。若想多一个入口，可以从「${tip.name}」开始：${tip.copy.activities[0]}。`);
  } else {
    paragraphs.push("各项没有拉开很大的距离。比起把某一种当成必须补的短板，更值得把已经常用的方式说给对方听。");
  }

  return {
    title,
    detail,
    paragraphs,
    ranked,
    scores,
    spread,
    actions: ranked.slice(0, 3).map((dim) => ({ name: dim.name, text: dim.copy.activities[0] }))
  };
}

function esc(text) {
  return String(text).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}

const MARKS = [
  `<svg viewBox="0 0 24 24"><path d="M4.8 5h12.6c.9 0 1.6.7 1.6 1.6v6.2c0 .9-.7 1.6-1.6 1.6h-6.2L7.6 19v-4.6H4.8c-.9 0-1.6-.7-1.6-1.6V6.6c0-.9.7-1.6 1.6-1.6z"/></svg>`,
  `<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 6.2c4.8 0 8.2 4 8.8 5.8-.6 1.8-4 5.8-8.8 5.8s-8.2-4-8.8-5.8C3.8 10.2 7.2 6.2 12 6.2zm0 3.1a2.7 2.7 0 1 0 .01 5.4A2.7 2.7 0 0 0 12 9.3z"/></svg>`,
  `<svg viewBox="0 0 24 24"><path d="M12 19.4C7.2 16.4 4.2 13.4 4.2 10.2 4.2 7.8 6.2 6 8.6 6c1.4 0 2.6.7 3.4 1.8C12.8 6.7 14 6 15.4 6c2.4 0 4.4 1.8 4.4 4.2 0 3.2-3 6.2-7.8 9.2z"/></svg>`,
  `<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4.5 4.5h15v15h-15v-15zm3.2 3.2v8.6h8.6V7.7H7.7zm6.6 3.2a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z"/></svg>`,
  `<svg viewBox="0 0 24 24"><path class="line" d="M12 4.8v14.4M5.4 8.2l13.2 7.6M18.6 8.2 5.4 15.8"/></svg>`,
  `<svg viewBox="0 0 24 24"><path d="M3.6 5.2h9c.7 0 1.2.5 1.2 1.2v4.6c0 .7-.5 1.2-1.2 1.2H7.2L5.4 14.4V12H3.6c-.7 0-1.2-.5-1.2-1.2V6.4c0-.7.5-1.2 1.2-1.2z"/><path d="M10.2 9h9.2c.7 0 1.2.5 1.2 1.2v4.6c0 .7-.5 1.2-1.2 1.2H16l-1.7 1.8V16h-4.1c-.7 0-1.2-.5-1.2-1.2v-4.6c0-.7.5-1.2 1.2-1.2z"/></svg>`,
  `<svg viewBox="0 0 24 24"><path d="M12 9c-1.7 0-3-1.9-1.9-3.2.8-.9 1.9-.2 1.9 1.2 0-1.4 1.1-2.1 1.9-1.2 1.1 1.3-.2 3.2-1.9 3.2z"/><path d="M4.2 9h15.6v1.8H4.2z"/><path fill-rule="evenodd" d="M5 10.8h14V19.6H5V10.8zm6.2 0v8.8h1.6V10.8h-1.6z"/></svg>`,
  `<svg viewBox="0 0 24 24"><path d="M8.3 3.8h1.7v2.8H8.3zM14 3.8h1.7v2.8H14z"/><path fill-rule="evenodd" d="M4.8 6h14.4V20H4.8V6zm2 3.2v8.2h10.4V9.2H6.8z"/><path class="line" d="M8.8 14.2l2.1 2.1 4.2-4.4"/></svg>`
];

function list(items) {
  return `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
}

function mark(index) {
  const dim = DIMENSIONS[index];
  return `<span class="mark mark-${index}" style="background:${dim.color}">${MARKS[index]}</span>`;
}

function homeHTML() {
  const rows = DIMENSIONS.map((dim, index) => `
    <li class="style-row">
      ${mark(index)}
      <div><strong>${esc(dim.name)}</strong><span>${esc(dim.blurb)}</span></div>
    </li>
  `).join("");
  return `
    <p class="kicker">24 题 · 约 4 分钟 · 不是鉴定</p>
    <h1>恋爱相处风格</h1>
    <p class="intro">选出你平时更常做的那一件。做完会看到八种相处方式里，哪几种更常出现，以及可以试的小事。</p>
    <ul class="style-list">${rows}</ul>
    <button class="go" type="button" data-action="start">开始测试</button>
    <p class="fine">按最近一段真实相处来选。单身就按你通常会有的反应。可以返回修改。</p>
  `;
}

function quizHTML() {
  const question = QUESTIONS[state.index];
  const dims = optionDims(state.index);
  const selected = state.answers[state.index];
  const options = question.options.map((text, choice) => {
    const on = selected === dims[choice] ? " selected" : "";
    return `<button class="reply${on}" type="button" data-action="pick" data-choice="${choice}"><em>${LETTERS[choice]}</em><span>${esc(text)}</span></button>`;
  }).join("");
  const back = state.index > 0 ? `<button class="text-btn" type="button" data-action="back">回到上一题</button>` : "";
  return `
    <div class="play">
      <section class="scene">
        <div class="progress" aria-hidden="true"><span style="width:${((state.index + 1) / 24) * 100}%"></span></div>
        <p class="ask">第 ${state.index + 1} 题，共 24 题</p>
        <h2 class="bubble">${esc(question.text)}</h2>
      </section>
      <div class="replies">${options}</div>
      ${back}
    </div>
  `;
}

function resultHTML(report) {
  const keys = report.ranked.map((dim) => `
    <li class="key pat-${dim.index}">
      ${mark(dim.index)}
      <div style="--c:${dim.color}">
        <b>${esc(dim.name)}</b>
        <small>${dim.score} / 12 · ${TIER_GLOSS[dim.tier]}</small>
        <div class="ribbon"><i style="width:${(dim.score / 12) * 100}%"></i></div>
      </div>
      <span class="stamp tier-${dim.tier}">${{ high: "高", mid: "中", low: "低" }[dim.tier]}</span>
    </li>
  `).join("");
  const cards = report.ranked.map((dim) => {
    const diff = dim.score - 3;
    const diffText = diff === 0 ? "与平均持平" : diff > 0 ? `比平均多 ${diff} 次` : `比平均少 ${-diff} 次`;
    return `
      <article class="note-card" style="--c:${dim.color}">
        <div class="note-top">
          ${mark(dim.index)}
          <div>
            <h3>${esc(dim.name)}</h3>
            <p>${dim.score} / 12 次 · ${diffText}</p>
          </div>
        </div>
        <h4>相处优势</h4>
        <p>${esc(dim.copy.strength)}</p>
        <h4>适合尝试的小事</h4>
        ${list(dim.copy.activities)}
        <h4>可以留意</h4>
        ${list(dim.copy.growth)}
      </article>
    `;
  }).join("");
  const actions = report.actions.map((item) => `<li><strong>${esc(item.name)}</strong>：${esc(item.text)}</li>`).join("");
  const faces = report.ranked.slice(0, 2).map((dim) => mark(dim.index)).join("");
  return `
    <section class="letter">
      <div class="pair">${faces}</div>
      <p class="kicker">一封相处说明</p>
      <h1>${esc(report.title).split("\n").join("<br>")}</h1>
      ${report.detail ? `<p class="sub">${esc(report.detail)}</p>` : ""}
      <p class="intro">这是 24 道题留下的快照。关系和阶段一变，次序也可能变。它不能鉴定性格，也不能代替两个人说话。</p>
      <div class="chips">${report.ranked.slice(0, 3).map((dim) => `<span>${esc(dim.name)} ${dim.score}</span>`).join("")}</div>
    </section>
    <section class="sheet" style="--c:${report.ranked[0].color}">
      <h2>图例</h2>
      <p>每种图形对应一种相处方式。长短是选中次数，平均大约 3 次，满格 12 次。条纹、圆点和斜切只是为了把它们分开，没有额外含义。</p>
      <ul class="key-list">${keys}</ul>
    </section>
    <section class="sheet">
      <h2>这次怎么搭</h2>
      ${report.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
      <ol>${actions}</ol>
    </section>
    ${cards}
    <section class="sheet rules">
      <h2>怎么计分</h2>
      <ol>
        <li>八种方式：直球表达、细腻体察、亲密陪伴、自主空间、降温修复、当面说开、仪式心意、踏实守约。</li>
        <li>24 题，每题 4 个选项，各对应一种方式。选中记 1 分，没有对错，也不排名次。</li>
        <li>每种方式出现 12 次，满分 12。全部选择摊开后，平均每种 3 分。</li>
        <li>6–12 为高，3–5 为中，0–2 为低。低只表示这次较少成为第一反应。</li>
        <li>结果不作性格鉴定，不预测关系成败，也不代替情感咨询。</li>
      </ol>
    </section>
    <button class="text-btn" type="button" data-action="revise">改一下上一题</button>
    <button class="go wide" type="button" data-action="restart">重新开始</button>
  `;
}

function fitIcons() {
  document.querySelectorAll(".mark svg").forEach((svg) => {
    const box = svg.getBBox();
    if (!box.width || !box.height) return;
    const scale = 17 / Math.max(box.width, box.height);
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    while (svg.firstChild) group.appendChild(svg.firstChild);
    group.setAttribute("transform", `translate(12 12) scale(${scale}) translate(${-cx} ${-cy})`);
    svg.appendChild(group);
  });
}

function render(options) {
  const app = document.getElementById("app");
  if (state.screen === "home") app.innerHTML = homeHTML();
  if (state.screen === "quiz") app.innerHTML = quizHTML();
  if (state.screen === "result") {
    state.report = buildReport(scoreOf(state.answers));
    app.innerHTML = resultHTML(state.report);
  }
  fitIcons();
  if (!options || options.scroll !== false) window.scrollTo(0, 0);
}

function clearTimer() {
  if (state.timer) {
    clearTimeout(state.timer);
    state.timer = null;
  }
}

function onClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "start" || action === "restart") {
    clearTimer();
    state.screen = action === "start" ? "quiz" : "home";
    state.index = 0;
    state.answers = Array(24).fill(null);
    state.report = null;
    render();
    return;
  }
  if (action === "back") {
    clearTimer();
    if (state.index > 0) state.index -= 1;
    render();
    return;
  }
  if (action === "revise") {
    clearTimer();
    state.screen = "quiz";
    state.index = 23;
    render();
    return;
  }
  if (action === "pick") {
    state.answers[state.index] = optionDims(state.index)[Number(button.dataset.choice)];
    clearTimer();
    render({ scroll: false });
    const wait = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 260;
    state.timer = setTimeout(() => {
      state.timer = null;
      if (state.index >= 23) state.screen = "result";
      else state.index += 1;
      render();
    }, wait);
  }
}

function assertBank() {
  if (QUESTIONS.length !== 24 || DIMENSIONS.length !== 8) {
    throw new Error("题库或维度数量不正确");
  }
  DIMENSIONS.forEach((dim) => {
    ["high", "mid", "low"].forEach((tier) => {
      const copy = dim.tiers[tier];
      if (!copy.strength || copy.activities.length !== 3 || copy.growth.length !== 2) {
        throw new Error(`${dim.name} 的${tier}档解读不完整`);
      }
    });
  });
  const counts = Array(8).fill(0);
  QUESTIONS.forEach((question, index) => {
    const dims = optionDims(index);
    if (question.options.length !== 4 || new Set(dims).size !== 4) {
      throw new Error(`第 ${index + 1} 题选项无法对应四种不同方式`);
    }
    dims.forEach((dim) => {
      counts[dim] += 1;
    });
  });
  if (counts.some((count) => count !== 12)) {
    throw new Error(`方式出现次数不均衡：${counts.join(",")}`);
  }
  const allFirst = QUESTIONS.map((_, index) => optionDims(index)[0]);
  const flatScores = scoreOf(allFirst);
  if (flatScores.some((score) => score !== 3) || buildReport(flatScores).title !== "几种相处方式比较均衡") {
    throw new Error("均衡作答的计分或标题不正确");
  }
  const direct = QUESTIONS.map((_, index) => {
    const dims = optionDims(index);
    return dims.includes(0) ? 0 : dims[0];
  });
  const heavyScores = scoreOf(direct);
  if (heavyScores[0] !== 12 || !buildReport(heavyScores).title.includes("直球表达")) {
    throw new Error("直球优先的计分或标题不正确");
  }
}

assertBank();

if (typeof document !== "undefined") {
  document.getElementById("app").addEventListener("click", onClick);
  render();
}
