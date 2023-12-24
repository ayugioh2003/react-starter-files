// 每個檔案只能有一個預設匯出
export default {
  name: 'Casper',
  fn() {
    console.log('my name is Casper')
  }
}

// 具名匯出：每個檔案能有多個具名匯出
export const myName = 'Casper'

export function fn() {
  console.log('my name is Casper ~')
}