window.CoinAgentI18n = (() => {
  const translations = {
    "帮助文档": "Help Center",
    "搜索标题和正文": "Search titles and content",
    "没有匹配的文档结果": "No matching documents",
    "打开目录": "Open menu",
    "目录": "Menu",
    "本页目录": "On this page",
    "上一页": "Previous",
    "下一页": "Next",
    "关闭预览": "Close preview",
    "关闭": "Close",

    "新手流程指引": "Getting Started",
    "流程指引": "Workflow Guide",
    "绑定钱包常见问题": "Wallet Binding FAQ",
    "子账户开通以及API绑定常见问题": "Sub-account and API Binding FAQ",
    "子账户开通以及 API 绑定常见问题": "Sub-account and API Binding FAQ",
    "币安电脑端": "Binance Web",
    "币安手机端": "Binance App",
    "欧易电脑端": "OKX Web",
    "欧易手机端": "OKX App",
    "算力相关问题": "Compute Credits FAQ",
    "跟单策略问题": "Copy Trading Strategy FAQ",

    "钱包绑定 → 子账户开通以及 API 绑定 → 算力充值 → 跟单策略 → 算力扣除": "Bind wallet -> Open sub-account and bind API -> Top up compute credits -> Copy trading strategy -> Compute credit deduction",
    "文档式流程指引": "Step-by-step docs",
    "币安 / 欧易": "Binance / OKX",
    "电脑端 / 手机端": "Web / App",
    "快速开始": "Quick Start",
    "先了解钱包绑定目的、规则和常见疑问。": "Start with wallet binding purpose, rules, and common questions.",
    "适合桌面端完成子账户开通与 API 绑定流程。": "Use this guide to open a sub-account and bind API on desktop.",
    "在 App 内完成子账户和 API 配置的完整步骤。": "Complete sub-account and API setup inside the app.",
    "桌面端创建子账户并设置 API 白名单。": "Create a sub-account and configure the API whitelist on desktop.",
    "移动端完成 API 交易权限与白名单设置。": "Set API trading permissions and whitelist on mobile.",
    "查看充值、扣费和使用过程中的常见问题。": "Review common questions about top-ups, deductions, and usage.",
    "了解策略运作、数据说明和使用注意事项。": "Learn how strategies work, what the data means, and what to watch for.",
    "推荐阅读顺序": "Recommended Reading Order",
    "1. 绑定钱包": "1. Bind Wallet",
    "先确认钱包绑定规则和平台使用前提。": "Confirm wallet binding rules and platform prerequisites first.",
    "2. 开通子账户": "2. Open Sub-account",
    "按交易所和设备类型选择对应教程。": "Choose the guide for your exchange and device.",
    "3. 绑定 API": "3. Bind API",
    "完成白名单、权限和密钥信息配置。": "Configure whitelist, permissions, and key details.",
    "4. 检查算力与策略": "4. Check Credits and Strategy",
    "最后确认策略运行和扣费相关问题。": "Finally, review strategy operation and credit deduction questions.",

    "什么是子账户？": "What is a sub-account?",
    "开通子账户": "Open a Sub-account",
    "绑定子账户API": "Bind Sub-account API",
    "绑定子账户 API": "Bind Sub-account API",
    "用户可以在主账户下开通多个子账户，子账户可以实现策略分离、资金隔离、风险管理。建议您绑定后不要随意挪动子账户内的资产，造成策略不能正常运行的亏损。": "You can open multiple sub-accounts under the main account. Sub-accounts help separate strategies, isolate funds, and manage risk. After binding, do not move assets out of the sub-account casually, as this may prevent the strategy from running normally and may cause losses.",
    "完成身份认证": "Complete identity verification",
    "并启用双重身份验证（2FA）": "Enable two-factor authentication (2FA)",
    "注意事项": "Notes",
    "前置条件": "Prerequisites",
    "白名单": "Whitelist",
    "验证提示": "Verification Tip",

    "【登录】": "Log in",
    "币安官网": "to the Binance website",
    "币安App": "to the Binance app",
    "欧易官网": "to the OKX website",
    "欧易APP": "to the OKX app",
    "在右上角点击": "In the upper-right corner, click",
    "在左上角点击": "In the upper-left corner, tap",
    "进入账户信息页": "to open the account information page",
    "点击": "Click",
    "和": "and",
    "点击右上角": "In the upper-right corner, click",
    "左侧菜单中选择：": "In the left menu, select:",
    "菜单中选择": "From the menu, select",
    "在账户一栏选择刚刚创建的": "In the Account field, select the",
    "用途选择": "For Purpose, select",
    "选择": "Select",
    "点击菜单": "Click the menu item",
    "在设置中心页底部点击": "At the bottom of Settings Center, tap",
    "如果没有看到API功能，检查APP版本是否为最新": "If you do not see the API feature, check whether the app is updated to the latest version.",
    "在": "In",
    "里": "",
    "重新检查子账户身份": "Recheck the sub-account identity",
    "验证手机号需要未与您的其他欧易主/子帐户绑定过": "The verification phone number must not be bound to any other OKX main account or sub-account.",
    "第一次创建子账户时，需要点击": "When creating a sub-account for the first time, click",
    "按钮": "button",
    "子帐户开通成功后，显示在列表里": "After the sub-account is opened, it appears in the list.",
    "注意事项：只有输入没有绑定过币安主账户/子账户的邮箱地址，币安才会发送验证码": "Note: Binance sends a verification code only if the email address has not been bound to a Binance main account or sub-account.",
    "注意事项：": "Note:",
    "只有输入没有绑定过币安主账户/子账户的邮箱地址，币安才会发送验证码": "Binance sends a verification code only if the email address has not been bound to a Binance main account or sub-account.",
    "注意事项：建议输入独特登录名，避免和其他用户重复，无法创建子账户": "Note: Use a unique login name. If it duplicates another user's name, the sub-account cannot be created.",
    "【输入验证码】": "Enter the verification code",
    "【通过认证】": "Pass verification",
    "【通过验证】": "Pass verification",
    "后": "After that",
    "，如果没能顺利认证，请重复检查前置条件": ". If verification fails, recheck the prerequisites.",
    "，如果没能顺利验证，请检查前置条件": ". If verification fails, check the prerequisites.",
    "子帐户开通成功，显示在列表里，如果没能顺利认证，请重复检查前置条件": "the sub-account is opened and appears in the list. If verification fails, recheck the prerequisites.",
    "子帐户开通成功，显示在列表里，如果没能顺利验证，请检查前置条件": "the sub-account is opened and appears in the list. If verification fails, check the prerequisites.",
    "（从未开通过子账户的，需要在网页端激活，不然移动端不会显示子账户功能）": "If you have never opened a sub-account before, activate it on the web first; otherwise the sub-account feature will not appear on mobile.",
    "选择刚刚创建的": "Select the newly created",
    "选择刚刚开通的": "Select the newly opened",
    "API标签随意输入": "Enter any API label.",
    "API标签随便输入": "Enter any API label.",
    "再次": "Again,",
    "复制保存": "Copy and save",
    "复制保存好": "Copy and save",
    "复制记住": "Copy and keep",
    "摘抄记住": "Write down and keep",
    "下滑页面，选择": "Scroll down and select",
    "输入后，在API权限处勾选": "After entering it, under API permissions, check",
    "在API权限处，勾选": "Under API permissions, check",
    "权限在已读的默认选择上添加": "Under permissions, keep the default Read option and add",
    "完成后，点击": "When finished, click",
    "创建成功，如果没能顺利验证，请检查前置条件": "it is created successfully. If verification fails, check the prerequisites.",
    "创建好的子账户API在列表中显示，点击": "The created sub-account API appears in the list. Click",
    "点击切换到刚刚创建的": "Switch to the newly created",
    "【切换到子账户】": "Switch to the sub-account",

    "【头像】": "Profile",
    "【子账户】": "Sub-account",
    "【账户管理】": "Account Management",
    "【激活】": "Activate",
    "【创建子账户】": "Create Sub-account",
    "【填入表单】": "Fill in the form",
    "【API管理】": "API Management",
    "【创建API】": "Create API",
    "【系统生成】": "System generated",
    "【邮箱】": "Email",
    "【子账户邮箱】": "Sub-account email",
    "【API密钥】": "API key",
    "【密钥】": "Secret key",
    "【IP访问无限制】": "Unrestricted IP access",
    "【允许现货及杠杆交易】": "Allow spot and margin trading",
    "【保存】": "Save",
    "【更多设置】": "More settings",
    "【帐号管理】": "Account Management",
    "【设置中心】": "Settings Center",
    "【切换账户】": "Switch account",
    "【标准账户】": "Standard account",
    "【用户中心】": "User Center",
    "【验证方式】": "Verification method",
    "【API】": "API",
    "【创建API key】": "Create API key",
    "【API交易】": "API trading",
    "【交易】": "Trade",
    "【完成】": "Done",
    "【查看】": "View",
    "【显示详情】": "Show details",
    "【API密码】": "API passphrase",

    "Q1：为什么需要绑定钱包？可以换绑吗？": "Q1: Why do I need to bind a wallet? Can I change it later?",
    "A：绑定的钱包是平台识别您身份的方式，一个钱包代表一个账号。目前不支持换绑。": "A: The bound wallet is how the platform identifies you. One wallet represents one account. Wallet rebinding is not currently supported.",
    "Q2：算力是从哪里扣？用什么充值？": "Q2: Where are compute credits deducted from? What is used for top-up?",
    "A：算力充值来自": "A: Compute credit top-ups come from",
    "您绑定钱包内的 USDT": "the USDT in your bound wallet",

    "Q1：算力如何充值？": "Q1: How do I top up compute credits?",
    "A：您钱包里的 1 USDT = 100 算力。链上充值后后台检测到账，会自动入账（可能略有延迟）。": "A: 1 USDT in your wallet equals 100 compute credits. After an on-chain top-up is detected by the backend, it is credited automatically. There may be a short delay.",
    "Q2：算力如何扣除？": "Q2: How are compute credits deducted?",
    "A：每笔策略结束后，按您的盈利扣算力：": "A: After each strategy ends, credits are deducted based on your profit:",
    "盈利 10 USDT → 扣 1 点算力": "10 USDT profit -> 1 compute credit deducted",

    "Q1：策略数据是真实的吗？": "Q1: Is the strategy data real?",
    "A：是的，策略数据来自平台自有账户的真实运行情况。": "A: Yes. Strategy data comes from real operation of the platform's own accounts.",
    "Q2：开始跟单策略需要满足哪些条件？": "Q2: What conditions must be met before starting a copy trading strategy?",
    "API 状态正常": "API status is normal",
    "权限正确": "Permissions are correct",
    "IP 访问无限制": "IP access is unrestricted",
    "子账户的 USDT ≥ 策略要求的最低金额": "Sub-account USDT is greater than or equal to the strategy's minimum amount",
    "算力 ≥ 0": "Compute credits are greater than or equal to 0",
    "Q3：策略订单有哪些结束情况？": "Q3: When can a strategy order end?",
    "正常达到策略的结束触发条件": "It normally reaches the strategy's ending trigger condition.",
    "用户修改 API 设置，导致 API 失效，策略随之结束（结束后请您自行前往交易所查看亏损情况及后续处理）。": "The user changes API settings, causing the API to become invalid and the strategy to end. After it ends, check the loss status and follow-up handling directly on the exchange.",
    "用户挪用交易账户资产 → 策略异常退出": "The user moves assets out of the trading account -> the strategy exits abnormally.",
    "算力不足且未及时充值，策略将结束": "Compute credits are insufficient and not topped up in time, so the strategy ends."
  };

  const storageKey = "coinagent-docs-language";
  const zhPattern = /[\u3400-\u9fff]/;
  const originalTextNodes = [];
  const originalTitle = document.title;

  const normalize = (value) => (value || "").replace(/\s+/g, " ").trim();
  const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);

  const translateString = (value) => {
    if (!value || !zhPattern.test(value)) return value;

    const leading = value.match(/^\s*/)?.[0] || "";
    const trailing = value.match(/\s*$/)?.[0] || "";
    const trimmed = normalize(value);

    if (translations[trimmed]) {
      return `${leading}${translations[trimmed]}${trailing}`;
    }

    let next = value;
    sortedKeys.forEach((key) => {
      if (key && next.includes(key)) {
        next = next.split(key).join(translations[key]);
      }
    });
    return next;
  };

  const restoreTextNodes = () => {
    originalTextNodes.forEach(({ node, value }) => {
      if (node.isConnected) node.nodeValue = value;
    });
    document.querySelectorAll("[data-i18n-original]").forEach((element) => {
      element.textContent = element.dataset.i18nOriginal;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", element.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", element.dataset.i18nAriaLabel);
    });
  };

  const translateTextNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style")) return NodeFilter.FILTER_REJECT;
        if (!zhPattern.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const parent = node.parentElement;
      if (!originalTextNodes.some((item) => item.node === node)) {
        originalTextNodes.push({ node, value: node.nodeValue });
      }
      if (!parent.dataset.i18nOriginal && parent.childNodes.length === 1) {
        parent.dataset.i18nOriginal = node.nodeValue;
      }
      node.nodeValue = translateString(node.nodeValue);
    });
  };

  const translateAttributes = () => {
    document.querySelectorAll("[placeholder]").forEach((element) => {
      if (!element.dataset.i18nPlaceholder) {
        element.dataset.i18nPlaceholder = element.getAttribute("placeholder") || "";
      }
      element.setAttribute("placeholder", translateString(element.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[aria-label]").forEach((element) => {
      if (!element.dataset.i18nAriaLabel) {
        element.dataset.i18nAriaLabel = element.getAttribute("aria-label") || "";
      }
      element.setAttribute("aria-label", translateString(element.dataset.i18nAriaLabel));
    });
  };

  const updateControls = (language) => {
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    document.body.dataset.language = language;
    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      const active = button.dataset.langOption === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  };

  const applyLanguage = (language) => {
    const nextLanguage = language === "en" ? "en" : "zh";
    restoreTextNodes();
    if (nextLanguage === "en") {
      translateTextNodes();
      translateAttributes();
      document.title = translateString(document.title);
    } else {
      document.title = originalTitle;
      document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        element.setAttribute("placeholder", element.dataset.i18nPlaceholder);
      });
      document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        element.setAttribute("aria-label", element.dataset.i18nAriaLabel);
      });
    }
    updateControls(nextLanguage);
    localStorage.setItem(storageKey, nextLanguage);
    document.dispatchEvent(new CustomEvent("coinagent:languagechange", { detail: { language: nextLanguage } }));
  };

  const init = () => {
    const savedLanguage = localStorage.getItem(storageKey) === "en" ? "en" : "zh";
    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      button.addEventListener("click", () => applyLanguage(button.dataset.langOption));
    });
    applyLanguage(savedLanguage);
  };

  return {
    applyLanguage,
    init,
    translateString,
    getLanguage: () => localStorage.getItem(storageKey) === "en" ? "en" : "zh",
  };
})();
