/// <reference types="react" />

import * as React from "react";

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  defaultValue?: any;
  onChange?: any;
}

export interface CascaderSelectProps extends HTMLAttributesWeak {
  /**
   * 选择框大小
   */
  size?: "small" | "medium" | "large";

  /**
   * 选择框占位符
   */
  placeholder?: string;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 是否有下拉箭头
   */
  hasArrow?: boolean;

  /**
   * 是否有边框
   */
  hasBorder?: boolean;

  /**
   * 是否有清除按钮
   */
  hasClear?: boolean;

  /**
   * 自定义内联 label
   */
  label?: React.ReactNode;

  /**
   * 是否只读，只读模式下可以展开弹层但不能选
   */
  readOnly?: boolean;

  /**
   * 数据源，结构可参考下方说明
   */
  dataSource?: Array<any>;

  /**
   * （非受控）默认值
   */
  defaultValue?: string | Array<any>;

  /**
   * （受控）当前值
   */
  value?: string | Array<any>;

  /**
   * 选中值改变时触发的回调函数
   */
  onChange?: ((
    value: string | Array<any>,
    data: {} | Array<any>,
    extra: {}
  ) => void);

  /**
   * 默认展开值，如果不设置，组件内部会根据 defaultValue/value 进行自动设置
   */
  defaultExpandedValue?: Array<any>;

  /**
   * 展开触发的方式
   */
  expandTriggerType?: "click" | "hover";

  /**
   * 是否开启虚拟滚动
   */
  useVirtual?: boolean;

  /**
   * 是否多选
   */
  multiple?: boolean;

  /**
   * 是否选中即发生改变, 该属性仅在单选模式下有效
   */
  changeOnSelect?: boolean;

  /**
   * 是否只能勾选叶子项的checkbox，该属性仅在多选模式下有效
   */
  canOnlyCheckLeaf?: boolean;

  /**
   * 父子节点是否选中不关联
   */
  checkStrictly?: boolean;

  /**
   * 每列列表样式对象
   */
  listStyle?: {};

  /**
   * 每列列表类名
   */
  listClassName?: string;

  /**
   * 选择框单选时展示结果的自定义渲染函数
   */
  displayRender?: ((label: Array<any>) => React.ReactNode);

  /**
   * 是否显示搜索框
   */
  showSearch?: boolean;

  /**
   * 自定义搜索函数
   */
  filter?: ((searchValue: string, path: Array<any>) => boolean);

  /**
   * 搜索结果自定义渲染函数
   */
  resultRender?: ((searchValue: string, path: Array<any>) => React.ReactNode);

  /**
   * 搜索结果列表是否和选择框等宽
   */
  resultAutoWidth?: boolean;

  /**
   * 无数据时显示内容
   */
  notFoundContent?: React.ReactNode;

  /**
   * 异步加载数据函数
   */
  loadData?: ((data: {}) => void);

  /**
   * 自定义下拉框头部
   */
  header?: React.ReactNode;

  /**
   * 自定义下拉框底部
   */
  footer?: React.ReactNode;

  /**
   * 初始下拉框是否显示
   */
  defaultVisible?: boolean;

  /**
   * 当前下拉框是否显示
   */
  visible?: boolean;

  /**
   * 下拉框显示或关闭时触发事件的回调函数
   */
  onVisibleChange?: ((visible: boolean, type: string) => void);

  /**
   * 下拉框自定义样式对象
   */
  popupStyle?: {};

  /**
   * 下拉框样式自定义类名
   */
  popupClassName?: string;

  /**
   * 下拉框挂载的容器节点
   */
  popupContainer?: string | (() => void);

  /**
   * 透传到 Popup 的属性对象
   */
  popupProps?: {};
}

export default class CascaderSelect extends React.Component<
  CascaderSelectProps,
  any
> {}
