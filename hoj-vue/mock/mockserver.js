const express = require('express');
const cors = require('cors');
const app = express();
const port = 6688;

app.use(cors());
app.use(express.json());

// 完整模拟数据
const mockData = {
  // 网站配置
  websiteConfig: {
    status: 200,
    data: {
      projectUrl: "https://gitee.com/himitzh0730/hoj",
      openContestComment: true,
      recordUrl: "None", 
      description: "HOJ前端开发环境",
      openPublicDiscussion: true,
      baseUrl: "http://localhost:6688",
      recordName: "None",
      name: "Hcode Online Judge - 开发版",
      openGroupDiscussion: true,
      shortName: "HOJ-DEV",
      projectName: "HOJ",
      email: "dev@example.com",
      register: true
    },
    msg: "success"
  },
  
  // 训练分类
  trainingCategory: {
    status: 200,
    data: [
      {id: 1, name: "算法基础", color: "#19be6b"},
      {id: 2, name: "数据结构", color: "#2d8cf0"},
      {id: 3, name: "动态规划", color: "#e91e63"},
      {id: 4, name: "图论算法", color: "#ff9900"}
    ],
    msg: "success"
  },
  
  // 训练列表
  trainingList: {
    status: 200,
    data: {
      records: [
        {
          id: "1",
          title: "基础算法训练",
          description: "包含基础算法的训练题目",
          categoryName: "算法基础",
          categoryColor: "#19be6b",
          problemCount: 5,
          acCount: 2,
          auth: "Public",
          isPublic: true,
          rank: true,
          author: "admin"
        },
        {
          id: "2",
          title: "数据结构进阶",
          description: "包含栈、队列、树等数据结构题目",
          categoryName: "数据结构",
          categoryColor: "#2d8cf0",
          problemCount: 8,
          acCount: 1,
          auth: "Public",
          isPublic: true,
          rank: true,
          author: "admin"
        }
      ],
      total: 2,
      size: 15,
      current: 1,
      pages: 1
    },
    msg: "success"
  },
  
  // 训练详情
  trainingDetail: {
    status: 200,
    data: {
      id: "1",
      title: "基础算法训练",
      description: "包含基础算法的训练题目，适合算法入门学习使用。涵盖了从简单的输入输出到复杂的数据结构和算法设计。",
      auth: "Public",
      problemCount: 5,
      acCount: 2,
      categoryName: "算法基础",
      categoryColor: "#19be6b",
      startTime: null,
      endTime: null,
      isPublic: true,
      rank: true,
      author: "admin"
    },
    msg: "success"
  },
  
  // 训练题目列表
  trainingProblems: {
    status: 200,
    data: [
      {
        pid: "1001",
        problemId: "A",
        title: "A + B Problem",
        difficulty: 1,
        tags: [
          {id: 1, name: "入门", color: "#19be6b"},
          {id: 2, name: "模拟", color: "#2d8cf0"}
        ],
        ac: 150,
        total: 200,
        problemType: 0,
        myStatus: null
      },
      {
        pid: "1002",
        problemId: "B",
        title: "排序算法实现",
        difficulty: 2,
        tags: [
          {id: 3, name: "排序", color: "#ff9900"},
          {id: 4, name: "算法", color: "#ed4014"}
        ],
        ac: 80,
        total: 150,
        problemType: 0,
        myStatus: null
      },
      {
        pid: "1003",
        problemId: "C",
        title: "二叉树遍历",
        difficulty: 3,
        tags: [
          {id: 5, name: "数据结构", color: "#9c27b0"},
          {id: 6, name: "树", color: "#673ab7"}
        ],
        ac: 45,
        total: 120,
        problemType: 0,
        myStatus: null
      },
      {
        pid: "1004",
        problemId: "D",
        title: "动态规划入门",
        difficulty: 3,
        tags: [
          {id: 7, name: "DP", color: "#e91e63"},
          {id: 8, name: "算法", color: "#ed4014"}
        ],
        ac: 30,
        total: 100,
        problemType: 0,
        myStatus: null
      },
      {
        pid: "1005",
        problemId: "E",
        title: "字符串处理",
        difficulty: 2,
        tags: [
          {id: 9, name: "字符串", color: "#00bcd4"},
          {id: 10, name: "算法", color: "#ed4014"}
        ],
        ac: 60,
        total: 90,
        problemType: 0,
        myStatus: null
      }
    ],
    msg: "success"
  },
  
  // 题目详情 - 根据数据库表结构设计
  problemDetail: {
    status: 200,
    data: {
      problem: {
        id: "1001",
        problemId: "A",
        title: "A + B Problem", 
        author: "admin",
        type: 0, // 0为ACM,1为OI
        timeLimit: 1000, // ms
        memoryLimit: 256, // mb
        stackLimit: 128, // mb
        description: "## 题目描述\n\n计算两个整数的和。\n\n这是一道经典的入门题目，用于测试基本的输入输出功能。",
        input: "## 输入格式\n\n一行包含两个整数 a 和 b，用空格分隔。\n\n数据范围：-10^9 ≤ a, b ≤ 10^9",
        output: "## 输出格式\n\n输出一个整数，即 a + b 的值。",
        examples: [
          {
            input: "1 2",
            output: "3"
          },
          {
            input: "-5 10", 
            output: "5"
          }
        ],
        hint: "## 提示\n\n- 注意处理负数的情况\n- 使用long long防止溢出",
        source: "HOJ开发环境测试题目",
        difficulty: 1,
        auth: 1, // 1公开，2私有，3比赛中
        ioScore: 100,
        codeShare: true,
        isRemote: false,
        judgeMode: "default",
        openCaseResult: true,
        isUploadCase: false,
        modifiedUser: "admin",
        gmtCreate: "2024-01-01 00:00:00",
        gmtModified: "2024-01-01 00:00:00"
      },
      problemCount: {
        total: 200,
        ac: 150,
        wa: 30,
        tle: 15,
        mle: 3,
        re: 2
      },
      tags: [
        {id: 1, name: "入门", color: "#19be6b"},
        {id: 2, name: "模拟", color: "#2d8cf0"}
      ],
      languages: [
        "C", "C++", "Java", "Python3", "Python2", "Go", "JavaScript", "C#"
      ],
      codeTemplate: {
        "C++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a + b << endl;\n    return 0;\n}",
        "Java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        System.out.println(a + b);\n    }\n}",
        "Python3": "a, b = map(int, input().split())\nprint(a + b)"
      },
      myStatus: 0 // 用户状态：0已通过，-1答案错误，-10未提交
    },
    msg: "success"
  },
  
  // 用户题目状态
  userProblemStatus: {
    status: 200,
    data: {
      "1001": {status: 0},   // 已通过
      "1002": {status: -1},  // 答案错误  
      "1003": {status: -10}, // 未提交
      "1004": {status: -10}, // 未提交
      "1005": {status: 0}    // 已通过
    },
    msg: "success"
  },

  // 专注模式题目列表 - 底部导航菜单数据
  fullScreenProblems: {
    status: 200,
    data: [
      {pid: "1001", problemId: "A", title: "A + B Problem", status: 0},
      {pid: "1002", problemId: "B", title: "排序算法实现", status: -1},
      {pid: "1003", problemId: "C", title: "二叉树遍历", status: -10},
      {pid: "1004", problemId: "D", title: "动态规划入门", status: -10},
      {pid: "1005", problemId: "E", title: "字符串处理", status: 0}
    ],
    msg: "success"
  },

  // 首页数据 - 轮播图
  homeCarousel: {
    status: 200,
    data: [
      {
        id: 1,
        img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDA5ZWZmIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMzAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iPkhPSiDlvIDlj5Hnjq/looPmqKHmi/k8L3RleHQ+Cjwvc3ZnPg==",
        title: "欢迎使用HOJ开发环境",
        description: "完整的在线判题系统开发环境",
        href: "/training",
        visible: true
      }
    ],
    msg: "success"
  },

  // 最近比赛
  recentContest: {
    status: 200,
    data: [
      {
        id: 1,
        title: "算法基础练习赛",
        startTime: "2024-12-01 14:00:00",
        endTime: "2024-12-01 17:00:00",
        status: 0,
        type: 0,
        auth: "Public"
      }
    ],
    msg: "success"
  },

  // 最近7天AC排行
  recentSevenAcRank: {
    status: 200,
    data: [
      {uid: "admin", username: "admin", nickname: "管理员", ac: 15},
      {uid: "user1", username: "user1", nickname: "用户1", ac: 8},
      {uid: "user2", username: "user2", nickname: "用户2", ac: 5}
    ],
    msg: "success"
  },

  // 最近更新题目
  recentUpdatedProblem: {
    status: 200,
    data: [
      {
        id: "1001",
        problemId: "A",
        title: "A + B Problem",
        difficulty: 1,
        gmtModified: "2024-10-15 10:00:00"
      },
      {
        id: "1002", 
        problemId: "B",
        title: "排序算法实现",
        difficulty: 2,
        gmtModified: "2024-10-14 15:30:00"
      }
    ],
    msg: "success"
  },

  // 通用公告
  commonAnnouncement: {
    status: 200,
    data: {
      records: [
        {
          id: 1,
          title: "HOJ开发环境使用指南",
          content: "欢迎使用HOJ开发环境，这里提供完整的前后端模拟功能。",
          gmtCreate: "2024-10-15 09:00:00",
          gmtModified: "2024-10-15 09:00:00"
        }
      ],
      total: 1,
      size: 5,
      current: 1
    },
    msg: "success"
  },

  // 最近一周提交统计
  lastWeekSubmissionStatistics: {
    status: 200,
    data: [
      {date: "2024-10-09", count: 15},
      {date: "2024-10-10", count: 23},
      {date: "2024-10-11", count: 18},
      {date: "2024-10-12", count: 31},
      {date: "2024-10-13", count: 27},
      {date: "2024-10-14", count: 42},
      {date: "2024-10-15", count: 35}
    ],
    msg: "success"
  },

  // 题目列表
  problemList: {
    status: 200,
    data: {
      records: [
        {
          id: "1001",
          problemId: "1001",
          title: "A + B Problem",
          difficulty: 1,
          ac: 150,
          total: 200,
          tags: [
            {id: 1, name: "入门", color: "#19be6b"}
          ],
          auth: 1
        },
        {
          id: "1002",
          problemId: "1002", 
          title: "排序算法实现",
          difficulty: 2,
          ac: 80,
          total: 150,
          tags: [
            {id: 3, name: "排序", color: "#ff9900"}
          ],
          auth: 1
        }
      ],
      total: 2,
      size: 30,
      current: 1
    },
    msg: "success"
  },

  // 题目标签分类
  problemTagsAndClassification: {
    status: 200,
    data: {
      tags: [
        {id: 1, name: "入门", color: "#19be6b"},
        {id: 2, name: "模拟", color: "#2d8cf0"},
        {id: 3, name: "排序", color: "#ff9900"},
        {id: 4, name: "算法", color: "#ed4014"}
      ],
      classification: [
        {id: 1, name: "基础算法", color: "#19be6b"},
        {id: 2, name: "数据结构", color: "#2d8cf0"}
      ]
    },
    msg: "success"
  }
};

// ===== API路由定义 =====

// 网站配置
app.get('/api/get-website-config', (req, res) => {
  console.log('🌐 请求网站配置');
  res.json(mockData.websiteConfig);
});

// 训练相关API
app.get('/api/get-training-category', (req, res) => {
  console.log('📂 请求训练分类');
  res.json(mockData.trainingCategory);
});

app.get('/api/get-training-list', (req, res) => {
  const { currentPage = 1, limit = 15 } = req.query;
  console.log(`📋 请求训练列表 page=${currentPage} limit=${limit}`);
  res.json(mockData.trainingList);
});

app.get('/api/get-training-detail', (req, res) => {
  const tid = req.query.tid;
  console.log(`🎯 请求训练详情 tid=${tid}`);
  res.json(mockData.trainingDetail);
});

app.get('/api/get-training-problem-list', (req, res) => {
  const tid = req.query.tid;
  console.log(`📋 请求训练题目列表 tid=${tid}`);
  res.json(mockData.trainingProblems);
});

// 题目相关API
app.get('/api/get-problem-detail', (req, res) => {
  const problemId = req.query.problemId;
  console.log(`📄 请求题目详情 problemId=${problemId}`);
  
  // 根据problemId返回不同的题目详情
  let problemDetail = JSON.parse(JSON.stringify(mockData.problemDetail));
  if (problemId === "1002" || problemId === "B") {
    problemDetail.data.problem.id = "1002";
    problemDetail.data.problem.problemId = "B";
    problemDetail.data.problem.title = "排序算法实现";
    problemDetail.data.problem.difficulty = 2;
    problemDetail.data.problem.description = "## 题目描述\n\n给定n个整数，请将它们按从小到大的顺序排列。";
    problemDetail.data.myStatus = -1; // 答案错误
    problemDetail.data.tags = [
      {id: 3, name: "排序", color: "#ff9900"},
      {id: 4, name: "算法", color: "#ed4014"}
    ];
  }
  
  res.json(problemDetail);
});

app.get('/api/get-problem-list', (req, res) => {
  const { oj = 'Mine', currentPage = 1, limit = 30 } = req.query;
  console.log(`📋 请求题目列表 oj=${oj} page=${currentPage} limit=${limit}`);
  res.json(mockData.problemList);
});

app.get('/api/get-problem-tags-and-classification', (req, res) => {
  const oj = req.query.oj;
  console.log(`🏷️ 请求题目标签分类 oj=${oj}`);
  res.json(mockData.problemTagsAndClassification);
});

// 用户状态相关API
app.post('/api/get-user-problem-status', (req, res) => {
  console.log('👤 请求用户题目状态:', req.body);
  res.json(mockData.userProblemStatus);
});

// 专注模式题目列表 - 底部导航菜单关键API
app.get('/api/get-full-screen-problem-list', (req, res) => {
  const { tid, cid } = req.query;
  console.log(`🎯 请求专注模式题目列表 tid=${tid} cid=${cid}`);
  res.json(mockData.fullScreenProblems);
});

// 首页数据API
app.get('/api/home-carousel', (req, res) => {
  console.log('🎠 请求首页轮播图');
  res.json(mockData.homeCarousel);
});

app.get('/api/get-recent-contest', (req, res) => {
  console.log('🏆 请求最近比赛');
  res.json(mockData.recentContest);
});

app.get('/api/get-recent-seven-ac-rank', (req, res) => {
  console.log('📊 请求最近7天AC排行');
  res.json(mockData.recentSevenAcRank);
});

app.get('/api/get-recent-updated-problem', (req, res) => {
  console.log('🆕 请求最近更新题目');
  res.json(mockData.recentUpdatedProblem);
});

app.get('/api/get-common-announcement', (req, res) => {
  const { currentPage = 1, limit = 5 } = req.query;
  console.log(`📢 请求通用公告 page=${currentPage} limit=${limit}`);
  res.json(mockData.commonAnnouncement);
});

app.get('/api/get-last-week-submission-statistics', (req, res) => {
  const forceRefresh = req.query.forceRefresh;
  console.log(`📈 请求最近一周提交统计 forceRefresh=${forceRefresh}`);
  res.json(mockData.lastWeekSubmissionStatistics);
});

// 用户认证相关 - 返回未登录状态
app.get('/api/get-user-auth-info', (req, res) => {
  console.log('🔐 请求用户认证信息');
  res.status(401).json({
    status: 401,
    msg: "未登录",
    data: null
  });
});

app.get('/api/msg/unread', (req, res) => {
  console.log('✉️ 请求未读消息');
  res.json({
    status: 200,
    data: {
      unreadCount: 0
    },
    msg: "success"
  });
});

// 处理其他未定义的API请求
app.use('/api/*', (req, res) => {
  console.log(`❓ 未定义的API请求: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    status: 404,
    msg: "API not found",
    data: null
  });
});

// 启动服务器
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 HOJ完整模拟API服务器启动在 http://localhost:${port}`);
  console.log('');
  console.log('📋 训练模块API:');
  console.log('  GET  /api/get-training-category');
  console.log('  GET  /api/get-training-list?currentPage=1&limit=15');
  console.log('  GET  /api/get-training-detail?tid=1');
  console.log('  GET  /api/get-training-problem-list?tid=1');
  console.log('');
  console.log('📄 题目模块API:');
  console.log('  GET  /api/get-problem-detail?problemId=A');
  console.log('  GET  /api/get-problem-list?oj=Mine&currentPage=1&limit=30');
  console.log('  GET  /api/get-problem-tags-and-classification?oj=ME');
  console.log('  POST /api/get-user-problem-status');
  console.log('  GET  /api/get-full-screen-problem-list?tid=1');
  console.log('');
  console.log('🏠 首页模块API:');
  console.log('  GET  /api/get-website-config');
  console.log('  GET  /api/home-carousel');
  console.log('  GET  /api/get-recent-contest');
  console.log('  GET  /api/get-recent-seven-ac-rank');
  console.log('  GET  /api/get-recent-updated-problem');
  console.log('  GET  /api/get-common-announcement?currentPage=1&limit=5');
  console.log('  GET  /api/get-last-week-submission-statistics?forceRefresh=false');
  console.log('');
  console.log('🎯 底部导航菜单状态说明:');
  console.log('  - 题目A和E: status=0  (✅ 已通过)');
  console.log('  - 题目B:    status=-1 (❌ 答案错误)');
  console.log('  - 题目C和D: status=-10 (➖ 未提交)');
});
