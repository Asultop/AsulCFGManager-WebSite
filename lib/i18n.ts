"use client"

const zh = {
  nav: {
    home: "首页",
    download: "下载",
    features: "功能",
    screenshots: "截图",
  },
  hero: {
    title: "AsulCFG Manager",
    description: "一款现代化的 CS2 配置文件管理工具，采用 Fluent 设计语言打造",
    download: "立即下载",
    learnMore: "了解更多",
  },
  features: {
    title: "强大功能",
    subtitle: "AsulCFG Manager 提供多种功能，帮助您轻松管理 CS2 配置文件",
    items: {
      management: {
        title: "配置文件管理",
        description: "轻松管理多个 CS2 配置文件，快速切换不同的游戏设置",
      },
      profiles: {
        title: "配置文件配置",
        description: "为不同的游戏模式或场景创建和保存多个配置文件",
      },
      performance: {
        title: "性能优化",
        description: "通过优化配置提升游戏性能，获得更流畅的游戏体验",
      },
      security: {
        title: "安全备份",
        description: "自动备份您的配置文件，防止意外丢失或损坏",
      },
      design: {
        title: "Fluent 设计",
        description: "现代化的 Fluent 设计界面，提供直观、美观的用户体验",
      },
      advanced: {
        title: "高级编辑",
        description: "提供高级编辑功能，满足专业玩家的需求",
      },
    },
  },
  screenshots: {
    title: "软件截图",
    subtitle: "浏览 AsulCFG Manager 的界面和功能",
  },
  footer: {
    rights: "保留所有权利",
  },
  download: {
    title: "下载 AsulCFG Manager",
    description: "获取最新版本的 AsulCFG Manager，开始管理您的 CS2 配置文件。",
    version: "版本",
    size: "大小",
    platform: "平台支持",
    status: "状态",
    unsupported: "不受支持",
    notAvailable: "不适用",
    repository: "仓库",
    license: "许可证",
    contribution: "贡献",
    welcome: "欢迎",
    windows: {
      title: "Windows 版本",
      description: "适用于 Windows 10/11",
      button: "下载 Windows 版本"
    },
    macos: {
      title: "MacOS 版本",
      description: "适用于 MacOS"
    },
    linux: {
      title: "Linux 版本",
      description: "适用于 Linux 发行版"
    },
    source: {
      title: "源代码",
      description: "从 GitHub 获取源代码",
      button: "访问 GitHub 仓库"
    },
    requirements: {
      title: "系统要求",
      os: "操作系统: Windows 10/11",
      cpu: "处理器: 1.6 GHz 或更快",
      memory: "内存: 2 GB RAM",
      storage: "存储空间: 50 MB 可用空间",
      display: "显示器: 1280 x 720 或更高分辨率"
    }
  }
}

const en = {
  nav: {
    home: "Home",
    download: "Download",
    features: "Features",
    screenshots: "Screenshots",
  },
  hero: {
    title: "AsulCFG Manager",
    description: "A modern CS2 configuration file management tool built with Fluent Design",
    download: "Download Now",
    learnMore: "Learn More",
  },
  features: {
    title: "Powerful Features",
    subtitle: "AsulCFG Manager offers various features to help you manage CS2 configuration files easily",
    items: {
      management: {
        title: "Config Management",
        description: "Easily manage multiple CS2 configuration files and switch between different game settings",
      },
      profiles: {
        title: "Profile Configuration",
        description: "Create and save multiple profiles for different game modes or scenarios",
      },
      performance: {
        title: "Performance Optimization",
        description: "Optimize game performance through configuration for a smoother gaming experience",
      },
      security: {
        title: "Secure Backup",
        description: "Automatically backup your configuration files to prevent accidental loss or corruption",
      },
      design: {
        title: "Fluent Design",
        description: "Modern Fluent Design interface providing an intuitive and beautiful user experience",
      },
      advanced: {
        title: "Advanced Editing",
        description: "Advanced editing features to meet the needs of professional players",
      },
    },
  },
  screenshots: {
    title: "Screenshots",
    subtitle: "Browse the interface and features of AsulCFG Manager",
  },
  footer: {
    rights: "All rights reserved",
  },
  download: {
    title: "Download AsulCFG Manager",
    description: "Get the latest version of AsulCFG Manager and start managing your CS2 configuration files.",
    version: "Version",
    size: "Size",
    platform: "Platform",
    status: "Status",
    unsupported: "Unsupported",
    notAvailable: "Not Available",
    repository: "Repository",
    license: "License",
    contribution: "Contribution",
    welcome: "Welcome",
    windows: {
      title: "Windows Version",
      description: "For Windows 10/11",
      button: "Download Windows Version"
    },
    macos: {
      title: "MacOS Version",
      description: "For MacOS"
    },
    linux: {
      title: "Linux Version",
      description: "For Linux Distributions"
    },
    source: {
      title: "Source Code",
      description: "Get the source code from GitHub",
      button: "Visit GitHub Repository"
    },
    requirements: {
      title: "System Requirements",
      os: "OS: Windows 10/11",
      cpu: "Processor: 1.6 GHz or faster",
      memory: "Memory: 2 GB RAM",
      storage: "Storage: 50 MB available space",
      display: "Display: 1280 x 720 or higher resolution"
    }
  }
}

export const i18n = {
  zh,
  en,
}

export type Language = keyof typeof i18n
export type TranslationKey = keyof typeof zh

let currentLanguage: Language = "zh"

export function setCurrentLanguage(lang: Language) {
  currentLanguage = lang
}

export function getCurrentLanguage(): Language {
  if (typeof window !== "undefined") {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "zh" || savedLang === "en")) {
      currentLanguage = savedLang
    }
  }
  return currentLanguage
}

export const t = (key: string): string => {
  const keys = key.split(".")
  let value: any = i18n[getCurrentLanguage()]

  try {
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // 如果在当前语言中找不到翻译，回退到中文
        value = i18n.zh
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key
          }
        }
      }
    }
    return value as string
  } catch (error) {
    // 如果出现任何错误，返回中文翻译
    let zhValue: any = i18n.zh
    for (const k of keys) {
      if (zhValue && typeof zhValue === "object" && k in zhValue) {
        zhValue = zhValue[k]
      } else {
        return key
      }
    }
    return zhValue as string
  }
} 