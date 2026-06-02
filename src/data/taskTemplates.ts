interface TemplateQuest {
  title: string;
  description: string;
  xpReward: number;
  goldReward: number;
  subtasks?: string[];
  deadline?: string;
}

interface TaskTemplate {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: 'survival' | 'light' | 'rest' | 'full';
  quests: TemplateQuest[];
}

export type { TemplateQuest, TaskTemplate };

export const PRESET_TEMPLATES: TaskTemplate[] = [
  {
    id: 'survival',
    name: '生存模式',
    icon: '/assets/sdv/icons/cat_habit.png',
    description: '基础自理，适合低能量日',
    category: 'survival',
    quests: [
      { title: '洗漱', description: '刷牙洗脸，换干净衣服', xpReward: 20, goldReward: 4 },
      { title: '喝足水', description: '喝够3杯水', xpReward: 15, goldReward: 3 },
      { title: '吃一顿饭', description: '食堂/外卖都行', xpReward: 25, goldReward: 5 },
      { title: '出门一趟', description: '拿快递、买瓶水也算', xpReward: 30, goldReward: 6 },
      { title: '整理床铺', description: '叠被子，摆枕头', xpReward: 15, goldReward: 3 },
      { title: '复习考研单词', description: '只复习旧词，不学新词', xpReward: 20, goldReward: 4 },
    ],
  },
  {
    id: 'light_study',
    name: '轻型学习日',
    icon: '/assets/sdv/icons/cat_quest.png',
    description: '低门槛学习，适合有意愿但难专注',
    category: 'light',
    quests: [
      { title: '去图书馆/自习室待1小时', description: '去了就算', xpReward: 35, goldReward: 8 },
      { title: '整理一科笔记/课件', description: '梳理比新学容易', xpReward: 30, goldReward: 6 },
      { title: '搞定一项课后作业', description: '一份报告/几道题', xpReward: 35, goldReward: 8 },
      { title: '学习间隙走一圈', description: '换换脑子', xpReward: 15, goldReward: 3 },
      { title: '按时吃两顿饭', description: '规律进食', xpReward: 20, goldReward: 4 },
      { title: '写明天的待办', description: '哪怕只写3件', xpReward: 20, goldReward: 4 },
      { title: '复习考研单词 +30新词', description: '复习旧词 + 学30个新词', xpReward: 30, goldReward: 6 },
    ],
  },
  {
    id: 'recharge',
    name: '充电休息日',
    icon: '/assets/sdv/icons/tpl_rest.png',
    description: '高质量恢复，适合疲惫时',
    category: 'rest',
    quests: [
      { title: '午休时认真躺30分钟', description: '不玩手机', xpReward: 25, goldReward: 5 },
      { title: '整理桌面/书包/衣柜', description: '物理空间清爽', xpReward: 20, goldReward: 5 },
      { title: '校园溜达20分钟', description: '不赶课，纯散步', xpReward: 25, goldReward: 6 },
      { title: '洗个不赶时间的澡', description: '热水冲一冲', xpReward: 25, goldReward: 5 },
      { title: '和饭搭子吃顿慢饭', description: '不打包不赶场', xpReward: 25, goldReward: 5 },
      { title: '复盘本周课业安排', description: '看清接下来几天', xpReward: 25, goldReward: 5 },
      { title: '复习考研单词 +15新词', description: '复习旧词 + 学15个新词', xpReward: 25, goldReward: 5 },
    ],
  },
  {
    id: 'full_power',
    name: '火力全开日',
    icon: '/assets/sdv/icons/tpl_power.png',
    description: '全力推进，适合状态好',
    category: 'full',
    quests: [
      { title: '图书馆/自习室待3小时', description: '深度学习', xpReward: 60, goldReward: 12 },
      { title: '完成2项作业或1份报告', description: '推ddl', xpReward: 50, goldReward: 12 },
      { title: '操场跑圈/跟练视频', description: '20分钟以上', xpReward: 40, goldReward: 8 },
      { title: '清一件拖了很久的事', description: '回消息、填表格、选课', xpReward: 45, goldReward: 10 },
      { title: '给自己搞顿好的', description: '食堂加鸡腿也算', xpReward: 30, goldReward: 6 },
      { title: '打扫宿舍一角', description: '扫地/拖地/倒垃圾', xpReward: 25, goldReward: 5 },
      { title: '复习考研单词 +50新词', description: '复习旧词 + 学50个新词', xpReward: 40, goldReward: 8 },
    ],
  },
];
