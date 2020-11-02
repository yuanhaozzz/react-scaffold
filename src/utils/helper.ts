/**
 * @description: rem适配
 * @param {n: window对象} 
 * @return: 
 */
export function setRem(n: any) {
  let e, t: any, i, d: number, o, a
  e = n.document
  t = e.documentElement
  i = 750
  d = i / 100
  o = 'orientationchange' in n ? 'orientationchange' : 'resize'
  a = () => {
    console.log('DOMContentLoaded')
    let width = t.clientWidth || 375;

    width > 750 && (width = 750)
    t.style.fontSize = `${width / d}px`
  }
  if (e.addEventListener) {
    n.addEventListener(o, a, false)
    e.addEventListener('DOMContentLoaded', a, false)
  }
}

export const ldb = {
  // 获取
  read: (key: string) => JSON.parse(window.localStorage.getItem(key) as any),
  // 设置
  save: (key : string, val: any) => window.localStorage.setItem(key, JSON.stringify(val)),
  // 删除
  remove: (key: string) => window.localStorage.removeItem(key),
  // 清除
  clear: () => window.localStorage.clear()
}

/**
 * @description: 年龄范围列表生成
 * @param {start: 最小年龄, end: 最大年龄} 
 * @return: []
 */
export const ageList = (start: number, end: number) => {
  const list: string[] = []
  for (let i = start; i <= end; i++) {
    list.push(`${i}`)
  }
  return list;
}

/**
 * @description: 试题布局类型
 * @param {templateId: 1(上下布局);2 || 3(左右布局)} 
 * @return {{ left: number, right: number }} 
 */
export const layout = (templateId: number) => {
  switch (templateId) {
    case 2:
      return { left: 16, right: 8 }
    case 3:
      return { left: 8, right: 16 }
    default:
      return { left: 24, right: 24 }
  }
}
