namespace Constant {
  interface Menu {
    title: string,
    value: string | number,
    path: string,
    component: any,
    [propName: string]: any,
  }

  export type MenuList = Menu[]
}