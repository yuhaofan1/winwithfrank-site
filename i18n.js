(() => {
  const messages = {
    en: {
      cinema: { tenure: "10 years of", impact: "Building value.", heroProject: "From vision to a living community", heroAlt: "A completed apartment building in its surrounding neighborhood", completed: "COMPLETED", historical: "Historical performance · Details ↗", scroll: "SCROLL INTO THE TRACK RECORD", eyebrow: "A DECADE, IN NUMBERS", achievementTitle: "Built one project at a time.", achievementIntro: "The scale of the work. The discipline behind it.", seeEvidence: "Meet the projects behind the numbers", projectsCopy: "Completed developments across our portfolio.", unitsCopy: "From plans on paper to finished living spaces.", marketCopy: "Portfolio market value, as reported by Frank.", valueCopy: "Value created for investors, as reported by Frank.", nextChapter: "YOUR NEXT CHAPTER", getDeals: "Get future deals", workIndex: "01 / THE WORK", scaleIndex: "02 / THE SCALE", portfolioIndex: "03 / THE PORTFOLIO", valueIndex: "04 / THE VALUE" },
      process: { kicker: "THE PROCESS", steps: "Explore the four steps", hint: "Scroll to explore" },
      journey: { getDeals: "Get Deals ↗", seeProjects: "See our projects ↓", receiveDeals: "Get investment opportunities ↗", proofChapter: "01 / THE TRACK RECORD", modelChapter: "02 / THE PROCESS", scrollHint: "Scroll to explore. One step at a time.", investChapter: "03 / EXPLORE THE POSSIBILITIES", calculatorCta: "Ready to explore a real project? Get deal updates →", networkChapter: "04 / BUILD WITH US", finalChapter: "YOUR NEXT CHAPTER" },
      signup: { title: "Let’s build what’s next.", intro: "Get investment opportunities and project updates from Frank, directly in your inbox.", benefitOne: "New deals to review", benefitTwo: "Project details and updates", benefitThree: "A direct connection with Frank", noCommitment: "Stay informed. No investment commitment.", formTitle: "Get investment opportunities", name: "Name (optional)", email: "Email address", consent: "I agree to receive investment opportunities and project updates from Frank. I can ask to stop emails at any time.", submit: "Send me investment opportunities →", privacy: "Your details are saved privately in Frank’s SiteFlow workspace for investment updates. To stop emails, contact frank.fan@moohousing.com.", submitting: "Saving your signup…", success: "Thank you! Your request has been received. If you previously opted out, contact Frank to rejoin.", error: "We couldn’t confirm your signup. Please try again, or email Frank below.", limited: "Too many attempts. Please try again later, or email Frank below.", fallback: "You can also email Frank directly to request investment updates." },
      proof: { skip: "Skip to content", menu: "Menu", explore: "Explore completed projects ↗", request: "Request project details", eyebrow: "BUILT. COMPLETED. IN OPERATION.", title: "See the work behind the numbers.", intro: "From construction to finished homes. Explore a selection of our completed developments.", chapters: "Choose video chapter", completed: "Completed projects", construction: "Under construction", interiors: "Interiors", muted: "Muted · Original footage", quality: "Video quality", auto: "Auto quality", saver: "Data saver · 540p", reportedValue: "REPORTED MARKET VALUE", selected: "Selected completed projects", builtYears: "Built 2023–2024", value: "Reported market value", watch: "Watch this project ↗", valuesNote: "Project years and market values are supplied by Frank. Market values are not sale proceeds or investor distributions.", alt86: "Exterior of Project #86", alt546: "Exterior of Project #546", alt14: "Exterior of Project #14", alt01: "Exterior of Project #01", constructionCaption: "Under construction · From blueprint to structure", detailCaption: "Building details · From the outside in", videoError: "The video could not load. Try Play again or browse the completed projects below.", storyPrevious: "Previous step", storyNext: "Next step", storySkip: "Continue to investment", assumptions: "Model assumptions", assumptionsCopy: "Illustration based on 80% equity growth every 2.5 years, reinvestment of eligible equity after five years, and 3%–5% annual cash increments. Annualized return combines ending equity and accumulated cash; it is not a dated cash-flow IRR. Taxes, fees, losses and delays are not modeled.", trackBasis: "Track-record details", trackCopy: "Portfolio figures and historical return are supplied by Frank. Request the calculation basis, reporting period and project-level records before making an investment decision." },
      slogan: { invitation: "Help me win,", promise: "you win!" },
      meta: { title: "winwithfrank | Real Estate Investment & Operations", description: "Explore winwithfrank's vertically integrated real estate platform, operating track record, and investor model." },
      aria: { home: "winwithfrank home", primaryNav: "Primary navigation", investmentApproach: "Investment approach", projectPortfolio: "Project portfolio", videoReel: "Building highlight reel with completed projects, under-construction footage, and furnished interiors", trackHighlights: "Track record highlights", hiringMilestones: "Employee loyalty bonus milestones", availableTrades: "Available trades", chartLegend: "Chart legend", tokenized: "Tokenized investment section coming soon", thanksGallery: "Special thanks photo gallery", contact: "Frank contact information", previousTrades: "Previous trades", nextTrades: "Next trades", previousOpportunity: "Previous agent opportunity", nextOpportunity: "Next agent opportunity", previousThanks: "Previous thank-you photo", nextThanks: "Next thank-you photo", closeTrade: "Close trade details", closeDeal: "Close deal form", switchLanguage: "Switch to Chinese" },
      alt: { builders: "Completed housing project representing the builders who helped Frank", partners: "Completed housing project representing trusted project partners", behindScenes: "Aerial project view representing everyone working behind the scenes" },
      nav: { projects: "Projects", hiring: "Hiring", investment: "Invest", partnerships: "Agent Partnerships", thanks: "Thanks", thesis: "Thesis", trackRecord: "Track Record", model: "Our Model", careers: "Careers", network: "Partners", contact: "Contact" },
story: { eyebrow: "VERTICALLY INTEGRATED REAL ESTATE Development & Management", heroLineOne: "10 years", heroUnits: "1200 Units", heroLineTwo: "$300M in Market Cap", heroLede: "A decade of acquiring, designing, building, and operating housing—brought together in one disciplined platform.", explore: "Explore the investment thesis", discuss: "Discuss opportunities", briefLabel: "INVESTMENT BRIEF", briefQuote: "“Create value where design, construction, and operations meet.”", focusLabel: "FOCUS", focusValue: "Value-add housing", edgeLabel: "OPERATING EDGE", edgeValue: "Integrated execution", horizonLabel: "HORIZON", horizonValue: "Long-term alignment", scroll: "Scroll to follow the strategy", proofKicker: "THE PROOF", proofTitle: "Built, not theorized.", proofCopy: "Real projects. Active construction. Finished homes. A portfolio shaped by direct operating experience.", metricsNote: "Company-presented operating figures. Prospective investors should independently verify all information during diligence.", modelKicker: "THE OPERATING MODEL", modelTitle: "Our Proven Model", modelSummary: "Over 45 completed developments", testModel: "Explore the illustrative model", acquireLabel: "ACQUIRE", acquireTitle: "Plan before closing.", acquireCopy: "Design and underwrite every acquisition before closing.", designLabel: "DESIGN", designTitle: "Design for returns.", designCopy: "Maximize density and rentable space through smart, code-driven design.", buildLabel: "BUILD", buildTitle: "Build for less.", buildCopy: "Our integrated construction team reduces hard costs by up to 30%.", operateLabel: "OPERATE", operateTitle: "Manage in-house.", operateCopy: "98.5% industry-leading occupancy while minimizing operating expenses." },
      video: { project: "PROJECT", projectName: "Project #{number}", marketValue: "MARKET VALUE", builtYear: "BUILT YEAR", pause: "Pause video", resume: "Play video", modern: "Modern Design", new: "Newly Constructed", furnished: "Fully Furnished", living: "High-Class Living" },
      portfolio: { title: "Project Portfolio", return: "10 years, 21% IRR*", disclaimer: "Past performance is not indicative of future results.", marketValue: "Total Market Value", completed: "Projects Completed", units: "Total Units", investorValue: "Investor Value Created" },
      tiktok: { title: "Frank Builds" },
      quickApply: { title: "Join our crew.", submit: "Apply by Email" },
      common: { reward: "REWARD", apply: "Apply", emailCopied: "Email address copied", frankWechat: "FRANK'S WECHAT" },
      hiring: { title: "Hiring Workers.", subtitle: "All trades in Northern California", kicker: "CONSTRUCTION CAREERS", intro: "We are hiring experienced construction workers, skilled tradespeople, apprentices, and field leaders for active projects in Northern California.", apprentice: "APPRENTICE", tryProject: "Try Out 1st Project", learning: "Learning Opportunity", longTerm: "Eligible for Long-Term Work", master: "MASTER", fullTime: "Full-Time Work", trainApprentices: "Eligible to Train Apprentices", trainingBonus: "Apprentice Training Bonus", teamLeader: "TEAM LEADER", coordinateProject: "Run and Coordinate a Full Project", projectBonus: "Project-Based Bonus", availableTrades: "Available Trades", applyRole: "Apply for a role", applyKicker: "WORK WITH OUR CONSTRUCTION TEAM", applyTitle: "Tell us what you build.", applyIntro: "Share your trade, experience, and contact information. We review applications for current and upcoming construction projects.", locationNote: "Northern California projects", rolesNote: "Apprentice, skilled trade, and field-lead roles", responseNote: "Qualified applicants will be contacted directly", fullName: "Full name", phone: "Phone", email: "Email", location: "City / location", desiredRole: "Construction role or trade", selectRole: "Select a role", roleFieldLead: "Field Lead", roleElectrician: "Electrician", rolePlumber: "Plumber", roleHvac: "HVAC Specialist", roleSolar: "Solar Installer", roleCarpenter: "Carpenter / Framer", roleFinish: "Tape / Paint / Finish", roleRoofer: "Roofer", roleStucco: "Stucco", roleLabor: "Labor / Cleanup", roleOther: "Other construction role", experience: "Years of experience", license: "License / certification", licensePlaceholder: "Type and number, if applicable", workLink: "Resume or work-photo link", message: "Tell us about your construction experience", consent: "I agree to be contacted about construction work opportunities.", ready: "Ready to apply?", opensEmail: "Your email app will open with your application ready to review and send.", submit: "Review & Send Application", emailDirect: "Email your application directly", required: "Please complete this field.", emailOpening: "Your email app is opening. Review the application and press Send to finish.", notProvided: "Not provided" },
      investment: { title: "Investment", growth: "Investment Calculator", dayOneInvestment: "Investment amount", years: "Time invested", year: "year", yearsPlural: "years", dayOne: "Day 1", fifteenYears: "15 years", earnedEquity: "Estimated Equity", cashDistribution: "Annual Cash Income", annualizedReturn: "Modeled annualized return", chartHelp: "Separate equity/cash scales. Tap or use arrow keys to inspect.", viewChart: "View growth chart", chartHeading: "Growth Over Time", legendEquity: "Equity", legendCash: "Annual cash", chartTitle: "Investment growth over time", chartDescription: "Estimated equity and annual cash distribution ranges from Day 1 through 15 years.", equityAxis: "EQUITY", distributionAxis: "ANNUAL DISTRIBUTION", yearsAxis: "YEARS", disclaimer: "Illustrative estimates. Returns aren’t guaranteed." },
      partners: { title: "Agent Partnerships", tagline: "Send development and off-market deals directly to Frank.", acquisitionKicker: "THIS YEAR, FRANK IS ACQUIRING", buying: "in development properties.", emailList: "Send me your Listings" },
      suppliers: { title: "Resources & Suppliers", supplyProjects: "Supply to Frank's Project", windowsDoors: "Supply Windows & Doors", cabinets: "Cabinets", otherMaterials: "Other Building Materials", bulk: "Supply Material to Frank, Bulk purchases." },
      thanks: { kicker: "WITH GRATITUDE", title: "Special Thanks", message: "To everyone who shared their time, knowledge, trust, and hard work—thank you.", detail: "Every project and milestone was made possible by people who chose to help, build, and believe alongside me.", signature: "With gratitude, Frank", people: "THE PEOPLE BEHIND THE PROGRESS", builders: "To the Builders", buildersDetail: "Your craft and hard work turned plans into places people can call home.", ourPartners: "To Our Partners", partnersDetail: "Your trust and collaboration made every milestone possible.", behindScenes: "To Everyone Behind the Scenes", behindScenesDetail: "Your support kept every project and every opportunity moving forward." },
      contact: { wechat: "WeChat: Bestusc" },
      compact: {"eyebrow":"REAL ESTATE DEVELOPMENT & MANAGEMENT","heroTitle":"10 years of building value.","investCta":"Discuss an investment →","pauseTrades":"Pause trades","playTrades":"Play trades","previousTrade":"Previous trade","nextTrade":"Next trade","jobApplication":"Job application","emailNote":"Opens your email app to review and send."},
      footer: { tagline: "Built for better partnerships." },
      hiddenHero: { build: "Build with Frank.", earn: "Earn with Frank.", rewarded: "Help me grow, and you’ll be rewarded." },
      tokenized: { development: "IN DEVELOPMENT", title: "Tokenized Real Estate Investment", detail: "A new investment experience is being developed. Program details will be added here.", comingSoon: "COMING SOON", promise: "More access. More transparency." },
      deal: { kicker: "AGENT DEAL SUBMISSION", title: "Upload a Deal Deck", intro: "Enter the property address and paste a link to the deal deck.", contact: "Your contact", fullName: "Full name", email: "Email", phone: "Phone", property: "Property", address: "Property address", askingPrice: "Asking price", units: "Units", marketStatus: "Market status", selectStatus: "Select status", offMarket: "Off-market", onMarket: "On-market", comingSoon: "Coming soon", details: "Deal details", deckUrl: "Deal deck URL", whyReview: "Why should Frank review this deal?", optional: "Optional · 500 characters maximum", authorized: "I’m authorized to share this property information.", emailDirect: "Email the deal directly", opensEmail: "Opens your email app so you can review and send.", reviewSend: "Review & Send Deal", required: "Please complete this field.", emailOpening: "Your email app is opening. Review the message and press Send to finish.", notProvided: "Not provided", noNotes: "No additional notes." },
      tradeDialog: { opportunity: "PROJECT OPPORTUNITY", role: "YOUR ROLE", workTogether: "How we work together", loadout: "LOADOUT", need: "What you’ll need", completed: "JOBS COMPLETED", partnership: "Long-Term Partnership", firstJob: "1st Job", firstJobText: "First call on the second job", threeJobs: "3+ Jobs", threeJobsText: "Bonus reward package", fiveJobs: "5 Jobs", fiveJobsText: "Project lead", back: "Back to trade opportunities", active: "Active hiring", view: "View {title} opportunity details" },
      trades: {}
    },
    zh: {
      cinema: { tenure: "十年深耕", impact: "筑就价值。", heroProject: "从项目愿景，到真实生活", heroAlt: "社区中已竣工的公寓楼", completed: "已完工", historical: "历史业绩 · 查看说明 ↗", scroll: "向下探索项目实绩", eyebrow: "用数字，讲述十年", achievementTitle: "一个项目，一步积累。", achievementIntro: "看得见的规模，贯穿始终的执行。", seeEvidence: "了解数字背后的真实项目", projectsCopy: "项目组合中已完成的开发项目。", unitsCopy: "从纸上蓝图，到真实生活空间。", marketCopy: "项目组合市场价值，由 Frank 提供。", valueCopy: "为投资人创造的价值，由 Frank 提供。", nextChapter: "开启下一篇章", getDeals: "获取未来项目机会", workIndex: "01 / 项目实绩", scaleIndex: "02 / 项目规模", portfolioIndex: "03 / 项目组合", valueIndex: "04 / 创造价值" },
      process: { kicker: "运营流程", steps: "了解四个步骤", hint: "滚动探索" },
      journey: { getDeals: "获取项目机会 ↗", seeProjects: "查看已建项目 ↓", receiveDeals: "获取投资机会 ↗", proofChapter: "01 / 项目实绩", modelChapter: "02 / 运营模式", scrollHint: "上下滑动，每次了解一个步骤。", investChapter: "03 / 探索投资可能", calculatorCta: "想了解实际项目？获取项目动态 →", networkChapter: "04 / 携手合作", finalChapter: "开启下一篇章" },
      signup: { title: "携手，建造下一个可能。", intro: "留下联系方式，通过邮件了解 Frank 的投资机会与项目进展。", benefitOne: "可供了解的新投资项目", benefitTwo: "项目资料与最新进展", benefitThree: "与 Frank 直接联系", noCommitment: "了解机会，无需作出投资承诺。", formTitle: "获取投资机会", name: "姓名（选填）", email: "电子邮箱", consent: "我同意接收 Frank 发送的投资机会与项目动态，并可随时要求停止接收邮件。", submit: "接收投资机会 →", privacy: "您的联系方式将私密保存至 Frank 的 SiteFlow 工作区，用于投资动态联系。如需退订，请联系 frank.fan@moohousing.com。", submitting: "正在保存申请…", success: "谢谢！您的申请已收到。如果您之前已退订，请联系 Frank 重新加入。", error: "暂时无法确认申请。请重试，或通过下方邮箱联系 Frank。", limited: "尝试次数过多，请稍后重试，或通过下方邮箱联系 Frank。", fallback: "您也可以直接发邮件给 Frank，申请接收投资动态。" },
      proof: { skip: "跳至正文", menu: "菜单", explore: "查看已完工项目 ↗", request: "索取项目资料", eyebrow: "从建造、完工，到运营。", title: "以真实项目，展现实践经验。", intro: "从施工现场到完工住宅，了解我们的部分已完工开发项目。", chapters: "选择视频章节", completed: "已完工项目", construction: "施工现场", interiors: "室内空间", muted: "静音 · 实拍影像", quality: "视频清晰度", auto: "自动画质", saver: "节省流量 · 540p", reportedValue: "所提供的市场估值", selected: "精选已完工项目", builtYears: "2023–2024 年建成", value: "所提供的市场估值", watch: "观看此项目 ↗", valuesNote: "建造年份与市场估值由 Frank 提供。市场估值不等于出售所得或投资人分配。", alt86: "项目 #86 建筑外观", alt546: "项目 #546 建筑外观", alt14: "项目 #14 建筑外观", alt01: "项目 #01 建筑外观", constructionCaption: "施工现场 · 从蓝图到建筑", detailCaption: "建筑细节 · 从外观到内部", videoError: "视频暂时无法加载。请重试播放，或浏览下方已完工项目。", storyPrevious: "上一步", storyNext: "下一步", storySkip: "继续查看投资", assumptions: "模型假设", assumptionsCopy: "示意模型假设每 2.5 年权益增长 80%，符合条件的权益在五年后再投资，每期年度现金增加 3%–5%。年化回报综合期末权益与累计现金，不是按实际现金流日期计算的 IRR。模型未计入税费、损失与延误。", trackBasis: "业绩数据说明", trackCopy: "项目组合数据与历史回报由 Frank 提供。作出投资决定前，请索取计算依据、统计期间及项目明细。" },
      slogan: { invitation: "助我者，", promise: "必有报！" },
      meta: { title: "winwithfrank | 房地产投资与运营", description: "了解 winwithfrank 的垂直整合房地产平台、运营业绩与投资模式。" },
      aria: { home: "winwithfrank 首页", primaryNav: "主导航", investmentApproach: "投资策略", projectPortfolio: "项目集", videoReel: "已完工项目、施工现场及精装室内的视频集锦", trackHighlights: "项目业绩亮点", hiringMilestones: "员工成长与奖励阶段", availableTrades: "招聘工种", chartLegend: "图表图例", tokenized: "即将推出的代币化房地产投资", thanksGallery: "特别鸣谢照片集", contact: "Frank 联系方式", previousTrades: "上一个工种", nextTrades: "下一个工种", previousOpportunity: "上一个经纪合作机会", nextOpportunity: "下一个经纪合作机会", previousThanks: "上一张致谢照片", nextThanks: "下一张致谢照片", closeTrade: "关闭工种详情", closeDeal: "关闭项目表单", switchLanguage: "切换到英文" },
      alt: { builders: "代表帮助 Frank 的建设者的已完工住宅项目", partners: "代表可信赖合作伙伴的已完工住宅项目", behindScenes: "代表所有幕后支持者的项目航拍图" },
      nav: { projects: "项目集", hiring: "招工", investment: "投资", partnerships: "经纪合作", thanks: "特别鸣谢", thesis: "投资逻辑", trackRecord: "历史业绩", model: "运营模式", careers: "建筑招工", network: "合作网络", contact: "联系" },
      story: { eyebrow: "垂直整合房地产开发与管理", heroLineOne: "10 年", heroUnits: "1200 套住宅", heroLineTwo: "3 亿美元市值", heroLede: "十年专注于收购、设计、建造与运营住宅，以一体化平台贯彻严谨执行。", explore: "了解投资逻辑", discuss: "洽谈投资机会", briefLabel: "投资摘要", briefQuote: "“在设计、施工与运营的交汇处创造价值。”", focusLabel: "投资方向", focusValue: "增值型住宅", edgeLabel: "运营优势", edgeValue: "一体化执行", horizonLabel: "投资视角", horizonValue: "长期利益一致", scroll: "向下滚动，了解完整策略", proofKicker: "实践证明", proofTitle: "不是理论，而是实绩。", proofCopy: "真实项目、在建工程、完工住宅。每一项成果都来自直接运营经验。", metricsNote: "以上为公司提供的运营数据。潜在投资人应在尽职调查中独立核实所有信息。", modelKicker: "运营模式", modelTitle: "我们的成熟模式", modelSummary: "已完成超过 45 个开发项目", testModel: "查看示意模型", acquireLabel: "收购", acquireTitle: "交割前规划。", acquireCopy: "每次收购都在交割前完成设计与全面承保分析。", designLabel: "设计", designTitle: "为回报而设计。", designCopy: "通过智能且符合规范的设计，最大化密度与可出租面积。", buildLabel: "建造", buildTitle: "更低成本建造。", buildCopy: "一体化施工团队可将硬成本降低最高 30%。", operateLabel: "运营", operateTitle: "自主运营管理。", operateCopy: "在最大限度降低运营费用的同时，保持行业领先的 98.5% 出租率。" },
      video: { project: "项目", projectName: "项目 #{number}", marketValue: "市场价值", builtYear: "建造年份", pause: "暂停视频", resume: "播放视频", modern: "现代设计", new: "全新建造", furnished: "全套家具", living: "高品质生活" },
      portfolio: { title: "项目集", return: "10 年，21% IRR*", disclaimer: "过往表现不代表未来结果。", marketValue: "总市场价值", completed: "已完成项目", units: "总单元数", investorValue: "为投资人创造的价值" },
      tiktok: { title: "Frank 建造" },
      quickApply: { title: "加入我们的团队。", submit: "通过邮件申请" },
      common: { reward: "奖励", apply: "申请", emailCopied: "邮箱地址已复制", frankWechat: "FRANK 的微信" },
      hiring: { title: "招聘工人。", subtitle: "北加州所有工种", kicker: "建筑施工招聘", intro: "我们正在为北加州在建项目招聘有经验的建筑工人、专业技工、学徒及现场负责人。", apprentice: "学徒", tryProject: "首个项目试工", learning: "学习机会", longTerm: "可获得长期工作机会", master: "师傅", fullTime: "全职工作", trainApprentices: "可带领和培训学徒", trainingBonus: "学徒培训奖励", teamLeader: "项目负责人", coordinateProject: "负责并协调完整项目", projectBonus: "项目奖金", availableTrades: "招聘工种", applyRole: "申请职位", applyKicker: "加入我们的建筑施工团队", applyTitle: "告诉我们您擅长的工种。", applyIntro: "请提交您的工种、经验及联系方式。我们会审核当前及未来建筑项目的申请。", locationNote: "北加州项目", rolesNote: "学徒、专业技工及现场负责人职位", responseNote: "符合条件的申请人将获得直接联系", fullName: "姓名", phone: "电话", email: "邮箱", location: "所在城市 / 地区", desiredRole: "建筑职位或工种", selectRole: "选择职位", roleFieldLead: "现场负责人", roleElectrician: "电工", rolePlumber: "水管工", roleHvac: "暖通空调技师", roleSolar: "太阳能安装工", roleCarpenter: "木工 / 框架工", roleFinish: "批灰 / 油漆 / 收尾", roleRoofer: "屋顶工", roleStucco: "灰泥外墙工", roleLabor: "建筑杂工 / 清运保洁", roleOther: "其他建筑职位", experience: "工作年限", license: "执照 / 证书", licensePlaceholder: "如适用，请填写类型及编号", workLink: "简历或施工照片链接", message: "请介绍您的建筑施工经验", consent: "我同意接收有关建筑工作机会的联系。", ready: "准备申请？", opensEmail: "系统将打开您的邮箱应用，您可以检查并发送申请。", submit: "检查并发送申请", emailDirect: "直接通过邮箱发送申请", required: "请填写此项。", emailOpening: "正在打开您的邮箱应用。请检查申请并点击发送。", notProvided: "未提供" },
      investment: { title: "投资", growth: "投资计算器", dayOneInvestment: "投资金额", years: "持有年限", year: "年", yearsPlural: "年", dayOne: "首日", fifteenYears: "15 年", earnedEquity: "预计权益", cashDistribution: "年度现金收入", annualizedReturn: "模拟年化回报", chartHelp: "权益与现金采用不同刻度。轻触图表或使用方向键查看。", viewChart: "查看增长图表", chartHeading: "长期增长", legendEquity: "权益", legendCash: "年度现金", chartTitle: "投资增长趋势", chartDescription: "展示从首日至第 15 年的权益及年度现金分配区间。", equityAxis: "权益", distributionAxis: "年度分配", yearsAxis: "年", disclaimer: "仅供示意，不保证回报。" },
      partners: { title: "经纪合作", tagline: "向 Frank 推荐开发项目和非公开房源。", acquisitionKicker: "FRANK 今年计划收购", buying: "房地产开发项目。", emailList: "请向我发送房源" },
      suppliers: { title: "资源与供应商", supplyProjects: "为 Frank 的项目供货", windowsDoors: "供应门窗", cabinets: "橱柜", otherMaterials: "其他建筑材料", bulk: "向 Frank 供应建筑材料，长期批量采购。" },
      thanks: { kicker: "衷心感谢", title: "特别鸣谢", message: "感谢每一位付出时间、知识、信任与努力的人。", detail: "每一个项目和里程碑，都离不开选择与我并肩帮助、建设和相信的人。", signature: "衷心感谢，Frank", people: "成就背后的每一个人", builders: "致建设者", buildersDetail: "你们的专业与辛勤付出，让蓝图变成了人们可以称之为家的地方。", ourPartners: "致合作伙伴", partnersDetail: "你们的信任与协作，让每一个里程碑成为可能。", behindScenes: "致幕后支持者", behindScenesDetail: "你们的支持推动着每一个项目与机会不断向前。" },
      contact: { wechat: "微信：Bestusc" },
      compact: {"eyebrow":"房地产开发与管理","heroTitle":"十年深耕，创造价值。","investCta":"咨询投资合作 →","pauseTrades":"暂停轮播","playTrades":"播放轮播","previousTrade":"上一个工种","nextTrade":"下一个工种","jobApplication":"职位申请","emailNote":"打开邮箱应用，检查并发送申请。"},
      footer: { tagline: "为更好的合作而建。" },
      hiddenHero: { build: "与 Frank 一起建设。", earn: "与 Frank 一起共赢。", rewarded: "助我成长，必有回报。" },
      tokenized: { development: "开发中", title: "代币化房地产投资", detail: "全新的投资体验正在开发中，项目详情将在此公布。", comingSoon: "即将推出", promise: "更多参与，更高透明度。" },
      deal: { kicker: "经纪项目提交", title: "提交项目资料", intro: "填写物业地址并粘贴项目资料链接。", contact: "您的联系方式", fullName: "姓名", email: "邮箱", phone: "电话", property: "物业信息", address: "物业地址", askingPrice: "报价", units: "单元数", marketStatus: "市场状态", selectStatus: "选择状态", offMarket: "场外项目", onMarket: "公开挂牌", comingSoon: "即将上市", details: "项目详情", deckUrl: "项目资料链接", whyReview: "为什么 Frank 应该审核这个项目？", optional: "选填 · 最多 500 个字符", authorized: "我已获授权分享该物业信息。", emailDirect: "直接通过邮箱发送项目", opensEmail: "将打开您的邮箱应用，以便审核并发送。", reviewSend: "审核并发送项目", required: "请填写此项。", emailOpening: "正在打开您的邮箱应用。请检查邮件并点击发送。", notProvided: "未提供", noNotes: "无其他备注。" },
      tradeDialog: { opportunity: "项目机会", role: "您的职责", workTogether: "我们的合作方式", loadout: "基本要求", need: "您需要具备", completed: "完成项目", partnership: "长期合作", firstJob: "第 1 个项目", firstJobText: "优先获得第二个项目机会", threeJobs: "3+ 个项目", threeJobsText: "额外奖励方案", fiveJobs: "5 个项目", fiveJobsText: "担任项目负责人", back: "返回招聘工种", active: "正在招聘", view: "查看{title}机会详情" },
      trades: {
        "field-lead": { title: "现场负责人", work: "负责现场日常施工、协调各工种、保障进度，并维持项目质量与安全。", requirements: ["5 年以上建筑施工经验", "具备工种协调与排期能力", "清晰的日常汇报与沟通能力", "可靠的现场领导能力"] },
        electricians: { title: "电工", work: "承接配电升级、新增线路、照明系统、电动车充电预留及完整改造电气工程。", requirements: ["5 年以上电气经验", "熟悉 NEC 标准", "持有适用的电工资质", "具备有效保险及安全规范"] },
        plumbers: { title: "水管工", work: "负责厨房、浴室、扩建及物业升级中的水管预埋与安装，并协调验收。", requirements: ["持有适用的水管工资质", "具备一般责任保险", "工程质量符合验收要求", "清晰列出材料及预算明细"] },
        hvac: { title: "暖通空调技师", work: "为翻新、扩建及节能升级设计并安装合适的暖通空调系统，包括调试和交付。", requirements: ["具备所需机械专业认证", "能够进行负荷计算", "提供设备保修文件", "完成启动与调试清单"] },
        solar: { title: "太阳能安装", work: "安装住宅及多户住宅太阳能系统，协调电气接入，并确保安全和验收合格。", requirements: ["具备太阳能安装经验", "持有适用执照与认证", "了解屋面及电气安全", "提供调试及完工文件"] },
        carpenters: { title: "木工与框架工", work: "负责结构框架、放线、加固、外部细节、门、饰面及定制木作。", requirements: ["具备放线与读图能力", "拥有适用工具和保险", "提供作品或近期推荐人", "保持现场整洁有序"] },
        painters: { title: "批灰、油漆与收尾", work: "按颜色计划完成表面处理和涂装，保护施工区域，并可靠完成整改收尾。", requirements: ["掌握表面处理标准", "具备保险并安全使用材料", "明确施工范围与排除项目", "承诺完成最终补漆整改"] },
        roofers: { title: "屋顶工", work: "提供屋顶维修、更换、防水及泛水工程，并附照片记录和明确保修。", requirements: ["按要求持有屋顶执照", "具备责任险和工伤保险", "遵守厂家安装规范", "提供书面人工与材料保修"] },
        stucco: { title: "灰泥外墙工", work: "完成从防水层、钢丝网到底层、纹理、颜色及面层的整套外墙灰泥系统。", requirements: ["具备灰泥施工经验", "拥有适用工具和保险", "了解防水及泛水工艺", "保证整洁收尾和整改完成"] },
        "trash-clean": { title: "垃圾清运与保洁", work: "清运建筑垃圾并保持工地安全整洁，让下一工种可以顺利进场。", requirements: ["拥有可靠车辆及清运设备", "具备适用保险", "依法处理废弃物", "排期和沟通及时"] },
        "material-suppliers": { title: "建筑材料供应商", work: "以有竞争力的价格、准确交期和协调配送，为在建项目供应可靠材料。", requirements: ["稳定的产品供应能力", "有竞争力的承包商价格", "准确的订单与配送追踪", "及时的客户支持"] }
      }
    }
  };

  let savedLanguage = "en";
  try {
    savedLanguage = localStorage.getItem("winwithfrank-language") === "zh" ? "zh" : "en";
  } catch (error) {
    // Some file-preview privacy modes disable storage; English remains the default.
  }
  let language = savedLanguage;
  const listeners = new Set();

  function getMessage(key, lang = language) {
    return key.split(".").reduce((value, part) => value?.[part], messages[lang]) ?? key;
  }

  function format(key, values = {}) {
    const message = getMessage(key);
    return typeof message === "string"
      ? message.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? `{${name}}`)
      : message;
  }

  function apply(root = document) {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.documentElement.classList.toggle("lang-zh", language === "zh");
    document.title = getMessage("meta.title");
    document.querySelector('meta[name="description"]')?.setAttribute("content", getMessage("meta.description"));
    root.querySelectorAll?.("[data-i18n]").forEach((element) => {
      element.textContent = getMessage(element.dataset.i18n);
    });
    root.querySelectorAll?.("[data-i18n-aria]").forEach((element) => {
      element.setAttribute("aria-label", getMessage(element.dataset.i18nAria));
    });
    root.querySelectorAll?.("[data-i18n-alt]").forEach((element) => {
      element.setAttribute("alt", getMessage(element.dataset.i18nAlt));
    });
    root.querySelectorAll?.("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", getMessage(element.dataset.i18nPlaceholder));
    });
    const toggle = document.querySelector("#language-toggle");
    if (toggle) {
      const isChinese = language === "zh";
      toggle.querySelector("span").textContent = isChinese ? "EN" : "中";
      toggle.querySelector("strong").textContent = isChinese ? "English" : "中文";
      toggle.setAttribute("aria-label", getMessage("aria.switchLanguage"));
      toggle.setAttribute("aria-pressed", String(isChinese));
    }
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage === "zh" ? "zh" : "en";
    try {
      localStorage.setItem("winwithfrank-language", language);
    } catch (error) {
      // The language still switches for the current page when storage is unavailable.
    }
    apply();
    listeners.forEach((listener) => listener(language));
  }

  window.siteI18n = {
    t: format,
    get: getMessage,
    get language() { return language; },
    apply,
    setLanguage,
    onChange(listener) { listeners.add(listener); return () => listeners.delete(listener); }
  };

  apply();
  document.querySelector("#language-toggle")?.addEventListener("click", () => {
    setLanguage(language === "en" ? "zh" : "en");
  });
})();
