const accountFields = ["ID", "账号类型", "平台", "账号名称", "主页地址", "绑定手机号", "用户名", "密码", "负责人", "备注", "状态", "创建日期"];

const accountTypeOptions = [
  "加拿大Wallace（主号中文）",
  "wallacewang.ca（主号英文）",
  "YouTube长视频",
  "昊式干货局（哔哩哔哩）",
  "小红书聚光",
  "昊哥在加拿大（知识切片）",
  "Wallace的认知圈（视频日记）",
  "Banff单板王老师（滑雪号）",
  "卡尔加里高尔夫小昊",
  "宥宥",
  "何姐的退休生活",
  "何氏鼻",
  "何苑风景",
  "ToDesk",
  "网站",
  "邮箱",
  "AppleID",
  "其他"
];

const platformOptions = [
  "小红书",
  "抖音",
  "视频号",
  "金融主网站",
  "YouTube",
  "TikTok",
  "X",
  "Instagram",
  "FaceBook",
  "Linkedin"
];

const phoneOptions = [
  "+14038880796 Wallace",
  "+13685503645 Wallace(Amelia)",
  "13998477214 王立昊",
  "13998691596 何艳东",
  "13998699204 何艳东",
  "19818937484 何艳东",
  "13998543740 何艳东",
  "13284117150 Amy",
  "18642849285 何栋良",
  "13332215816 何福满",
  "15940833392 张淑文",
  "13604287006 王福治",
  "13130406862 王福治",
  "13840731828 张闯",
  "13624179333 孟静"
];

const ownerOptions = ["Amy", "Wallace"];

const statusOptions = ["启用", "停用"];
const accountStorageKey = "northbridge-marketing-accounts";
const optionStorageKey = "northbridge-marketing-option-lists";
let editingAccountId = null;

const accounts = [
  {
    ID: "10",
    账号类型: "Banff单板王老师（滑雪号）",
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
    账号类型: "Banff单板王老师（滑雪号）",
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
    账号类型: "ToDesk",
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
    账号类型: "wallacewang.ca（主号英文）",
    平台: "FaceBook",
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
    账号类型: "wallacewang.ca（主号英文）",
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
    账号类型: "wallacewang.ca（主号英文）",
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
    账号类型: "YouTube长视频",
    平台: "YouTube",
    账号名称: "Wallace Financial Service",
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
    账号类型: "加拿大Wallace（主号中文）",
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
    账号类型: "加拿大Wallace（主号中文）",
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
    账号类型: "加拿大Wallace（主号中文）",
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

try {
  const savedAccounts = JSON.parse(localStorage.getItem(accountStorageKey) || "null");
  const savedAccountsAreUsable =
    Array.isArray(savedAccounts) &&
    savedAccounts.length > 0 &&
    savedAccounts.every((account) => account && typeof account === "object" && accountFields.every((field) => Object.prototype.hasOwnProperty.call(account, field)));
  if (savedAccountsAreUsable) {
    accounts.splice(0, accounts.length, ...savedAccounts);
  }
} catch (error) {
  console.warn("Unable to load saved accounts", error);
}

try {
  const savedOptions = JSON.parse(localStorage.getItem(optionStorageKey) || "null");
  if (savedOptions && typeof savedOptions === "object") {
    [
      ["账号类型", accountTypeOptions],
      ["平台", platformOptions],
      ["绑定手机号", phoneOptions],
      ["负责人", ownerOptions]
    ].forEach(([field, options]) => {
      if (!Array.isArray(savedOptions[field])) return;
      savedOptions[field].forEach((value) => {
        const cleanValue = String(value || "").trim();
        if (cleanValue && !options.includes(cleanValue)) options.push(cleanValue);
      });
    });
  }
} catch (error) {
  console.warn("Unable to load saved option lists", error);
}

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
  if (!select) return;
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

function saveAccounts() {
  localStorage.setItem(accountStorageKey, JSON.stringify(accounts));
}

function saveOptionLists() {
  localStorage.setItem(
    optionStorageKey,
    JSON.stringify({
      账号类型: accountTypeOptions,
      平台: platformOptions,
      绑定手机号: phoneOptions,
      负责人: ownerOptions
    })
  );
}

function optionsForField(field) {
  return {
    账号类型: accountTypeOptions,
    平台: platformOptions,
    绑定手机号: phoneOptions,
    负责人: ownerOptions
  }[field];
}

function addCustomOption(field, value) {
  const options = optionsForField(field);
  const cleanValue = String(value || "").trim();
  if (!options || !cleanValue || options.includes(cleanValue)) return false;
  options.push(cleanValue);
  saveOptionLists();
  return true;
}

function removeOption(field, value) {
  const options = optionsForField(field);
  const cleanValue = String(value || "").trim();
  if (!options || !cleanValue) return false;
  const index = options.indexOf(cleanValue);
  if (index === -1) return false;
  options.splice(index, 1);
  saveOptionLists();
  if (field === "平台") refreshPlatformFilter();
  if (field === "负责人") refreshOwnerFilter();
  return true;
}

function syncCustomOptionsFromAccount(account) {
  ["账号类型", "平台", "绑定手机号", "负责人"].forEach((field) => addCustomOption(field, account[field]));
}

function refreshPlatformFilter() {
  if (!platformFilter) return;
  const currentValue = platformFilter.value;
  platformFilter.innerHTML = `<option value="all">全部平台</option>`;
  fillFilter(platformFilter, platformOptions);
  platformFilter.value = platformOptions.includes(currentValue) ? currentValue : "all";
}

function refreshOwnerFilter() {
  if (!ownerFilter) return;
  const currentValue = ownerFilter.value;
  ownerFilter.innerHTML = `<option value="all">全部负责人</option>`;
  fillFilter(ownerFilter, ownerOptions);
  ownerFilter.value = ownerOptions.includes(currentValue) ? currentValue : "all";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function accountTypeOptionsMarkup() {
  return accountTypeOptions.map((option) => `<option value="${escapeHtml(option)}"></option>`).join("");
}

function datalistOptionsMarkup(options) {
  return options.map((option) => `<option value="${escapeHtml(option)}"></option>`).join("");
}

function optionCombo(field, value, id = "", name = "", optionsList = []) {
  const options = optionsList
    .map(
      (option) => `<div class="combo-option-row" data-value="${escapeHtml(option)}">
        <button class="combo-option" type="button" data-value="${escapeHtml(option)}">${escapeHtml(option)}</button>
        <button class="combo-delete" type="button" data-value="${escapeHtml(option)}" aria-label="删除 ${escapeHtml(option)}">删除</button>
      </div>`
    )
    .join("");
  return `<div class="editable-combo" data-field="${escapeHtml(field)}">
    <input class="editable-field-input combo-input" ${name ? `name="${escapeHtml(name)}"` : ""} data-field="${escapeHtml(field)}" data-account-id="${escapeHtml(id)}" aria-label="${escapeHtml(field)}" value="${escapeHtml(value)}" />
    <button class="combo-toggle" type="button" aria-label="展开${escapeHtml(field)}选项">⌄</button>
    <div class="combo-menu" role="listbox">${options}</div>
  </div>`;
}

function accountTypeCombo(value, id = "", name = "") {
  return optionCombo("账号类型", value, id, name, accountTypeOptions);
}

function phoneCombo(value, id = "", name = "") {
  return optionCombo("绑定手机号", value, id, name, phoneOptions);
}

function platformCombo(value, id = "", name = "") {
  return optionCombo("平台", value, id, name, platformOptions);
}

function ownerCombo(value, id = "", name = "") {
  return optionCombo("负责人", value, id, name, ownerOptions);
}

function statusSelect(value, id) {
  const options = statusOptions.map((option) => `<option value="${escapeHtml(option)}"${option === value ? " selected" : ""}>${escapeHtml(option)}</option>`).join("");
  return `<select class="editable-field-input option-select status-select" data-field="状态" data-account-id="${id}" aria-label="状态">${options}</select>`;
}

function editableTextInput(field, value, id) {
  const type = field === "创建日期" ? "date" : "text";
  return `<input class="editable-field-input" type="${type}" data-field="${field}" data-account-id="${id}" aria-label="${field}" value="${escapeHtml(value)}" />`;
}

function renderAccountCell(account, field, isEditing) {
  const value = account[field] || "";
  if (field === "ID" && isEditing) {
    return `<td>${editableTextInput(field, value, account.ID)}</td>`;
  }
  if (field === "ID") return `<td>${escapeHtml(value)}</td>`;
  if (isEditing && field === "平台") {
    return `<td>${platformCombo(value, account.ID)}</td>`;
  }
  if (isEditing && field === "账号类型") {
    return `<td>${accountTypeCombo(value, account.ID)}</td>`;
  }
  if (isEditing && field === "绑定手机号") {
    return `<td>${phoneCombo(value, account.ID)}</td>`;
  }
  if (isEditing && field === "负责人") {
    return `<td>${ownerCombo(value, account.ID)}</td>`;
  }
  if (isEditing && field === "状态") {
    return `<td>${statusSelect(value, account.ID)}</td>`;
  }
  if (isEditing) {
    return `<td>${editableTextInput(field, value, account.ID)}</td>`;
  }
  if (field === "主页地址" && value) {
    return `<td><a href="${escapeHtml(value)}" target="_blank" rel="noreferrer">打开主页</a></td>`;
  }
  if (field === "密码") {
    return `<td class="masked">${maskPassword(value)}</td>`;
  }
  if (field === "状态") {
    return `<td><span class="status">${escapeHtml(value)}</span></td>`;
  }
  return `<td>${escapeHtml(value)}</td>`;
}

function renderAccountActions(account, isEditing) {
  if (isEditing) {
    return `<td><div class="action-buttons"><button class="save-row-btn" type="button" data-account-id="${escapeHtml(account.ID)}">保存</button><button class="cancel-row-btn" type="button">取消</button></div></td>`;
  }
  return `<td><button class="edit-row-btn" type="button" data-account-id="${escapeHtml(account.ID)}">编辑</button></td>`;
}

function sortById(left, right) {
  const leftId = String(left.ID || "").trim();
  const rightId = String(right.ID || "").trim();
  const leftNumber = Number(leftId);
  const rightNumber = Number(rightId);
  if (Number.isFinite(leftNumber) && Number.isFinite(rightNumber)) {
    return leftNumber - rightNumber;
  }
  return leftId.localeCompare(rightId, "zh-CN", { numeric: true, sensitivity: "base" });
}

function renderAccounts() {
  if (!accountRows || !accountSearch || !platformFilter || !ownerFilter) return;
  const term = accountSearch.value.trim().toLowerCase();
  const platform = platformFilter.value;
  const owner = ownerFilter.value;
  const filtered = accounts
    .filter((account) => {
      const haystack = accountFields.map((field) => account[field]).join(" ").toLowerCase();
      return (platform === "all" || account.平台 === platform) && (owner === "all" || account.负责人 === owner) && haystack.includes(term);
    })
    .sort(sortById);

  if (metricAccounts) metricAccounts.textContent = filtered.length;
  if (filtered.length === 0) {
    accountRows.innerHTML = `<tr><td class="empty-table-cell" colspan="${accountFields.length + 1}">没有符合条件的账号记录。请清空搜索条件，或点击“新增账号”。</td></tr>`;
    return;
  }
  accountRows.innerHTML = filtered
    .map((account) => {
      const isEditing = account.ID === editingAccountId;
      return `<tr class="${isEditing ? "editing-row" : ""}">${accountFields.map((field) => renderAccountCell(account, field, isEditing)).join("")}${renderAccountActions(account, isEditing)}</tr>`;
    })
    .join("");
}

function renderDialogFields() {
  const fieldWrap = document.querySelector("#accountFields");
  if (!fieldWrap) return;
  fieldWrap.innerHTML = accountFields
    .map((field) => {
      if (field === "账号类型") {
        return `<label>${field}${accountTypeCombo(accountTypeOptions[0], "new-account", field)}</label>`;
      }
      if (field === "平台") {
        return `<label>${field}${platformCombo(platformOptions[0], "new-account", field)}</label>`;
      }
      if (field === "绑定手机号") {
        return `<label>${field}${phoneCombo("", "new-account", field)}</label>`;
      }
      if (field === "负责人") {
        return `<label>${field}${ownerCombo(ownerOptions[0], "new-account", field)}</label>`;
      }
      if (field === "状态") {
        const options = statusOptions.map((option) => `<option value="${option}">${option}</option>`).join("");
        return `<label>${field}<select name="${field}">${options}</select></label>`;
      }
      const type = field === "创建日期" ? "date" : field === "密码" ? "password" : "text";
      return `<label>${field}<input type="${type}" name="${field}" /></label>`;
    })
    .join("");
}

function renderCreators() {
  const creatorCards = document.querySelector("#creatorCards");
  if (creatorCards) {
    creatorCards.innerHTML = creators
      .map((creator) => `<article class="creator-card"><small>${creator.role}</small><h3>${creator.name}</h3><p>${creator.style}</p><strong>${creator.tone}</strong></article>`)
      .join("");
  }

  const creatorSelect = document.querySelector("#creatorSelect");
  if (creatorSelect) creatorSelect.innerHTML = creators.map((creator) => `<option>${creator.name}</option>`).join("");
}

function generateContent() {
  const output = document.querySelector("#generatedContent");
  const audienceEl = document.querySelector("#audience");
  const goalEl = document.querySelector("#goal");
  const creatorEl = document.querySelector("#creatorSelect");
  const channelEl = document.querySelector("#channel");
  if (!output || !audienceEl || !goalEl || !creatorEl || !channelEl) return;
  const audience = audienceEl.value;
  const goal = goalEl.value;
  const creatorName = creatorEl.value;
  const channel = channelEl.value;
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

  output.innerHTML = `
    <article><h3>今日话题</h3><p>${topics[audience]}</p><p>目标：${goal}；平台：${channel}</p></article>
    <article><h3>${creator.name} 风格文案</h3><p>${copy.replace(/\n/g, "<br />")}</p><p><strong>语气：</strong>${creator.tone}</p></article>
    <article><h3>封面设计提示词</h3><p>${imagePrompt}</p></article>
    <article><h3>合规提醒</h3><p>避免“保证批款、最低利率、稳赚、省税承诺”等表达；涉及个人情况时，引导用户预约评估。</p></article>
  `;
}

function bindTraining() {
  const output = document.querySelector("#trainingOutput");
  if (!output) return;
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
  const saveLogBtn = document.querySelector("#saveLogBtn");
  if (!list || !saveLogBtn) return;
  saveLogBtn.addEventListener("click", () => {
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
  const addAccountBtn = document.querySelector("#addAccountBtn");
  if (!dialog || !addAccountBtn) return;
  addAccountBtn.addEventListener("click", () => dialog.showModal());
  dialog.addEventListener("close", () => {
    if (dialog.returnValue !== "confirm") return;
    const form = dialog.querySelector("form");
    if (!form) return;
    const newAccount = {};
    accountFields.forEach((field) => {
      newAccount[field] = form.elements[field]?.value?.trim() || "";
    });
    if (!newAccount.ID) {
      newAccount.ID = String(Date.now()).slice(-6);
    }
    accounts.unshift(newAccount);
    syncCustomOptionsFromAccount(newAccount);
    saveAccounts();
    form.reset();
    renderDialogFields();
    refreshPlatformFilter();
    refreshOwnerFilter();
    renderAccounts();
  });
}

function handleComboClick(event) {
    const comboToggle = event.target.closest(".combo-toggle");
    const comboDelete = event.target.closest(".combo-delete");
    const comboOption = event.target.closest(".combo-option");

    if (comboToggle) {
      const combo = comboToggle.closest(".editable-combo");
      document.querySelectorAll(".editable-combo.open").forEach((item) => {
        if (item !== combo) item.classList.remove("open");
      });
      combo?.classList.toggle("open");
      return true;
    }

    if (comboDelete) {
      const combo = comboDelete.closest(".editable-combo");
      const field = combo?.dataset.field;
      const value = comboDelete.dataset.value || "";
      if (field && removeOption(field, value)) {
        comboDelete.closest(".combo-option-row")?.remove();
      }
      return true;
    }

    if (comboOption) {
      const combo = comboOption.closest(".editable-combo");
      const input = combo?.querySelector(".combo-input");
      if (input) input.value = comboOption.dataset.value || comboOption.textContent.trim();
      combo?.classList.remove("open");
      return true;
    }

    return false;
}

function bindComboMenus() {
  document.addEventListener("click", (event) => {
    if (handleComboClick(event)) return;
    if (event.target.closest(".editable-combo")) return;
    document.querySelectorAll(".editable-combo.open").forEach((item) => item.classList.remove("open"));
  });
}

function bindAccountTable() {
  if (!accountRows) return;
  accountRows.addEventListener("click", (event) => {
    const editButton = event.target.closest(".edit-row-btn");
    const saveButton = event.target.closest(".save-row-btn");
    const cancelButton = event.target.closest(".cancel-row-btn");

    if (editButton) {
      editingAccountId = editButton.dataset.accountId;
      renderAccounts();
      return;
    }

    if (cancelButton) {
      editingAccountId = null;
      renderAccounts();
      return;
    }

    if (saveButton) {
      const originalId = saveButton.dataset.accountId;
      const account = accounts.find((item) => item.ID === originalId);
      const row = saveButton.closest("tr");
      if (!account || !row) return;
      const idInput = row.querySelector('.editable-field-input[data-field="ID"]');
      const nextId = idInput?.value?.trim() || originalId;
      const duplicate = accounts.some((item) => item !== account && item.ID === nextId);
      if (duplicate) {
        alert("这个 ID 已经存在，请换一个 ID。");
        idInput?.focus();
        return;
      }
      row.querySelectorAll(".editable-field-input").forEach((input) => {
        account[input.dataset.field] = input.value;
      });
      account.ID = nextId;
      syncCustomOptionsFromAccount(account);
      saveAccounts();
      refreshPlatformFilter();
      refreshOwnerFilter();
      editingAccountId = null;
      renderAccounts();
    }
  });
}

document.body.insertAdjacentHTML(
  "beforeend",
  `<datalist id="accountTypeOptions">${accountTypeOptionsMarkup()}</datalist>`
);

refreshPlatformFilter();
refreshOwnerFilter();
renderDialogFields();
renderCreators();
renderAccounts();
bindTraining();
bindLogs();
bindDialog();
bindComboMenus();
bindAccountTable();
generateContent();

if (accountSearch) accountSearch.addEventListener("input", renderAccounts);
if (platformFilter) platformFilter.addEventListener("change", renderAccounts);
if (ownerFilter) ownerFilter.addEventListener("change", renderAccounts);
const generateBtn = document.querySelector("#generateBtn");
if (generateBtn) generateBtn.addEventListener("click", generateContent);
