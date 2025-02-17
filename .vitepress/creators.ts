export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'c叉',
    avatar: '',
    username: 'chengxiao',
    title: 'Chin-up 原始创作者',
    desc: '开发者，专注于基础设施维护，图形学爱好者，守望先锋骨灰玩家',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/caixiao-0725' },
    ],
    nameAliases: ['chengxiao', '成啸', 'c叉'],
    emailAliases: ['1030418887@qq.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
