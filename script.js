const accountFields = ["ID", "账号类型", "平台", "账号名称", "主页地址", "绑定手机号", "用户名", "密码", "负责人", "备注", "状态", "创建日期"];

const accounts = [
  {
    ID: "10",
    账号类型: "品牌内容号",
    平台: "小红书",
    账号名称: "Finance Canada Notes",
    主页地址: "https://example.com/xhs/finance-canada-notes",
    绑定手机号: "",
    用户名: "",
    密码: "",
    负责人: "内容组",
    备注: "",
    状态: "启用",
    创建日期: "2026/3/5"
  },
  {
    ID: "11",
    账号类型: "品牌内容号",
    平台: "抖音",
    账号名称: "Finance Canada Notes",
    主页地址: "https://example.com/douyin/finance-canada-notes",
    绑定手机号: "",
    用户名: "",
    密码: "",
    负责人: "内容组",
    备注: "",
    状态: "启用",
    创建日期: "2026/3/5"
  },
  {
    ID: "480001",
    账号类型: "远程协作工具",
    平台: "其他",
    账号名称: "运营电脑远程协作账号",
    主页地址: "",
    绑定手机号: "",
    用户名: "demo-remote-user",
    密码: "已登记，权限可见",
    负责人: "",
    备注: "",
    状态: "启用",
    创建日期: "2026/4/26"
  },
  {
    ID: "3",
    账号类型: "英文品牌主号",
    平台: "Facebook",
    账号名称: "",
    主页地址: "https://example.com/facebook/brand",
    绑定手机号: "",
    用户名: "",
    密码: "",
    负责人: "小谢",
    备注: "",
    状态: "启用",
    创建日期: "2026/3/5"
  },
  {
    ID: "1",
    账号类型: "英文品牌主号",
    平台: "TikTok",
    账号名称: "northbridge.finance",
    主页地址: "https://example.com/tiktok/brand",
    绑定手机号: "",
    用户名: "",
    密码: "",
    负责人: "小谢",
    备注: "",
    状态: "启用",
    创建日期: "2026/3/5"
  },
  {
    ID: "120001",
    账号类型: "英文品牌主号",
    平台: "Instagram",
    账号名称: "northbridge.finance",
    主页地址: "https://example.com/instagram/brand",
    绑定手机号: "+1-000-000-0000",
    用户名: "",
    密码: "",
    负责人: "Gabbie",
    备注: "",
    状态: "启用",
    创建日期: "2026/3/8"
  },
  {
    ID: "4",
    账号类型: "英文品牌主号",
    平台: "YouTube Shorts",
    账号名称: "NorthBridge Finance",
    主页地址: "https://example.com/youtube/brand-shorts",
    绑定手机号: "",
    用户名: "demo-youtube-login",
    密码: "",
    负责人: "Gabbie",
    备注: "",
    状态: "启用",
    创建日期: "2026/3/5"
  },
  {
    ID: "660001",
    账号类型: "中文品牌主号",
    平台: "小红书",
    账号名称: "北桥金融加拿大",
    主页地址: "https://example.com/xhs/chinese-brand",
    绑定手机号: "+1-000-000-0000",
    用户名: "demo-xhs-login",
    密码: "手机短信验证",
    负责人: "Gabbie",
    备注: "演示数据：实际账号请接入权限系统后查看",
    状态: "启用",
    创建日期: "2026/5/9"
  },
  {
    ID: "870001",
    账号类型: "中文品牌主号",
    平台: "抖音",
    账号名称: "北桥金融加拿大",
    主页地址: "https://example.com/douyin/chinese-brand",
    绑定手机号: "+1-000-000-0000",
    用户名: "demo-douyin-login",
    密码: "已登记，权限可见",
    负责人: "Gabbie",
    备注: "演示数据：实际账号请接入权限系统后查看",
    状态: "启用",
    创建日期: "2026/5/16"
  },
  {
    ID: "420002",
    账号类型: "中文品牌主号",
    平台: "视频号",
    账号名称: "NorthBridge Canada",
    主页地址: "https://example.com/wechat/channels",
    绑定手机号: "+1-000-000-0000",
    用户名: "demo-wechat-login",
    密码: "微信登陆",
    负责人: "Gabbie",
    备注: "演示数据：实际账号请接入权限系统后查看",
    状态: "启用",
    创建日期: "2026/4/22"
  }
];

const creators = [
  {
    name: "Wallace",
    role: "金融顾问型",
    tone: "稳、可信、案例清楚",
    style: "适合讲贷款结构、家庭资产规划和风险提醒，语气像专业顾问给客户做 1 对 1 解释。"
  },
  {
    name: "Gabbie",
    role: "生活化解释型",
    tone: "亲切、节奏快、会用对比",
    style: "适合把金融概念翻译成日常语言，用新移民真实场景开头，结尾引导收藏或私信。"
  },
  {
    name: "小谢",
    role: "平台运营型",
    tone: "直接、清单化、行动感强",
    style: "适合做步骤拆解、账号发布提醒、评论区答疑和短平快的平台内容。"
  },
  {
    name: "投影师",
    role: "视觉故事型",
    tone: "画面感强、轻松、有记忆点",
    style: "适合做雪场、城市生活、客户故事和视觉化封面文案，把金融话题嵌入生活场景。"
  }
];

const accountRows = document.querySelector("#accountRows");
const platformFilter = document.querySelector("#platformFilter");
const ownerFilter = document.querySelector("#ownerFilter");
const accountSearch = document.querySelector("#accountSearch");
const metricAccounts = document.querySelector("#metricAccounts");

function uniqueValues(key) {
  return [...new Set(accounts.map((item) => item[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function fillFilter(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function maskPassword(value) {
  if (!value) return "";
  if (value.includes("验证") || value.includes("登陆")) return value;
  return "••••••••";
}

function renderAccounts() {
  const term = accountSearch.value.trim().toLowerCase();
  const platform = platformFilter.value;
  const owner = ownerFilter.value;
  const filtered = accounts.filter((account) => {
    const haystack = accountFields.map((field) => account[field]).join(" ").toLowerCase();
    return (platform === "all" || account.平台 === platform) && (owner === "all" || account.负责人 === owner) && haystack.includes(term);
  });

  metricAccounts.textContent = filtered.length;
  accountRows.innerHTML = filtered
    .map((account) => {
      return `<tr>${accountFields
        .map((field) => {
          const value = account[field] || "";
          if (field === "主页地址" && value) {
            return `<td><a href="${value}" target="_blank" rel="noreferrer">打开主页</a></td>`;
          }
          if (field === "密码") {
            return `<td class="masked">${maskPassword(value)}</td>`;
          }
          if (field === "状态") {
            return `<td><span class="status">${value}</span></td>`;
          }
          return `<td>${value}</td>`;
        })
        .join("")}</tr>`;
    })
    .join("");
}

function renderDialogFields() {
  const fieldWrap = document.querySelector("#accountFields");
  fieldWrap.innerHTML = accountFields
    .map((field) => {
      const type = field === "创建日期" ? "date" : field === "密码" ? "password" : "text";
      return `<label>${field}<input type="${type}" name="${field}" /></label>`;
    })
    .join("");
}

function renderCreators() {
  document.querySelector("#creatorCards").innerHTML = creators
    .map((creator) => `<article class="creator-card"><small>${creator.role}</small><h3>${creator.name}</h3><p>${creator.style}</p><strong>${creator.tone}</strong></article>`)
    .join("");

  document.querySelector("#creatorSelect").innerHTML = creators.map((creator) => `<option>${creator.name}</option>`).join("");
}

function generateContent() {
  const audience = document.querySelector("#audience").value;
  const goal = document.querySelector("#goal").value;
  const creatorName = document.querySelector("#creatorSelect").value;
  const channel = document.querySelector("#channel").value;
  const creator = creators.find((item) => item.name === creatorName);
  const topics = {
    "加拿大新移民家庭": "刚来加拿大，为什么银行更在意你的现金流证据？",
    首次购房者: "第一次买房前，先搞懂预批和月供承受线",
    自雇人士: "自雇收入不稳定，贷款材料应该提前怎么准备？",
    企业主: "公司流水很好，为什么个人贷款还可能卡住？",
    留学生家长: "孩子在加拿大读书，家庭资金规划别只看学费"
  };

  const copy = `开头：很多${audience}以为金融申请只看一个数字，但真正决定结果的，是材料能不能讲清楚你的稳定性。\n中段：用一个真实场景解释：收入、负债、首付来源和未来计划要能互相对上。\n结尾：如果你想少走弯路，可以先把自己的情况按这三项列出来，再决定下一步咨询。`;
  const imagePrompt = `为${channel}生成一张金融新媒体封面：主题“${topics[audience]}”，画面要有加拿大城市生活感、专业但不冰冷，留出标题区域，适合${creator.role}出镜，避免收益承诺和夸张金钱符号。`;

  document.querySelector("#generatedContent").innerHTML = `
    <article><h3>今日话题</h3><p>${topics[audience]}</p><p>目标：${goal}；平台：${channel}</p></article>
    <article><h3>${creator.name} 风格文案</h3><p>${copy.replace(/\n/g, "<br />")}</p><p><strong>语气：</strong>${creator.tone}</p></article>
    <article><h3>封面设计提示词</h3><p>${imagePrompt}</p></article>
    <article><h3>合规提醒</h3><p>避免“保证批款、最低利率、稳赚、省税承诺”等表达；涉及个人情况时，引导用户预约评估。</p></article>
  `;
}

function bindTraining() {
  const output = document.querySelector("#trainingOutput");
  document.querySelectorAll("[data-training]").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.training;
      const tasks = {
        hook: "练习：把“加拿大房贷利率今天又变了”改成 3 个开头：痛点型、反常识型、生活场景型。每个开头不超过 22 个字。",
        comment: "练习：用户问“我刚来加拿大没有信用记录能贷款吗？”请拆成：真实焦虑、需要追问的信息、合规回答、下一条选题。",
        review: "练习：复盘一条金融短视频：开头是否具体、案例是否可信、是否有合规边界、CTA 是否自然。"
      };
      output.textContent = tasks[type];
    });
  });
}

function bindLogs() {
  const list = document.querySelector("#logList");
  document.querySelector("#saveLogBtn").addEventListener("click", () => {
    const owner = document.querySelector("#logOwner").value.trim() || "未填写";
    const type = document.querySelector("#logType").value;
    const content = document.querySelector("#logContent").value.trim() || "记录了一项工作进展。";
    const item = document.createElement("div");
    item.className = "log-item";
    item.innerHTML = `<strong>${owner} · ${type}</strong><p>${content}</p><small>${new Date().toLocaleString("zh-CN")}</small>`;
    list.prepend(item);
    document.querySelector("#logContent").value = "";
  });
}

function bindDialog() {
  const dialog = document.querySelector("#accountDialog");
  document.querySelector("#addAccountBtn").addEventListener("click", () => dialog.showModal());
}

fillFilter(platformFilter, uniqueValues("平台"));
fillFilter(ownerFilter, uniqueValues("负责人"));
renderDialogFields();
renderCreators();
renderAccounts();
bindTraining();
bindLogs();
bindDialog();
generateContent();

accountSearch.addEventListener("input", renderAccounts);
platformFilter.addEventListener("change", renderAccounts);
ownerFilter.addEventListener("change", renderAccounts);
document.querySelector("#generateBtn").addEventListener("click", generateContent);
