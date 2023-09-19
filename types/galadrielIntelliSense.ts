/**
 * Options to display:
 * panel-hidden, panel-block, panel-flex, panel-inline, panel-table, panel-grid, panel-inline-block, panel-inline-flex, panel-inline-table, panel-inline-grid, panel-flow-root, panel-contents, panel-list-item, panel-group-header, panel-group-footer, panel-group-column, panel-group-row, panel-table-row, panel-table-cell, panel-table-column, panel-table-caption
 */
 type display = 'panel-hidden' | 'panel-block' | 'panel-flex' | 'panel-inline' | 'panel-table' | 'panel-grid' | 'panel-inline-block' | 'panel-inline-flex' | 'panel-inline-table' | 'panel-inline-grid' | 'panel-flow-root' | 'panel-contents' | 'panel-list-item' | 'panel-group-header' | 'panel-group-footer' | 'panel-group-column' | 'panel-group-row' | 'panel-table-row' | 'panel-table-cell' | 'panel-table-column' | 'panel-table-caption';

 /**
 * Options to alignItems:
 * adjust-center
 */
 type alignItems = 'adjust-center';

 /**
 * Options to justifyContent:
 * organize-center
 */
 type justifyContent = 'organize-center';

 /**
 * Options to position:
 * set-relative, set-absolute, set-static, set-fixed, set-sticky
 */
 type position = 'set-relative' | 'set-absolute' | 'set-static' | 'set-fixed' | 'set-sticky';

 /**
 * Options to bottom:
 * base-full-bottom
 */
 type bottom = 'base-full-bottom';

 /**
 * Options to width:
 * extend-full-viewport, extend-mid-viewport, extend-full-percent, extend-mid-percent, extend-auto
 */
 type width = 'extend-full-viewport' | 'extend-mid-viewport' | 'extend-full-percent' | 'extend-mid-percent' | 'extend-auto';

 /**
 * Options to height:
 * ascend-full-viewport, ascend-mid-viewport, ascend-full-percent, ascend-mid-percent, ascend-auto
 */
 type height = 'ascend-full-viewport' | 'ascend-mid-viewport' | 'ascend-full-percent' | 'ascend-mid-percent' | 'ascend-auto';

 /**
 * Options to aspectRatio:
 * proportion-square, proportion-auto, proportion-landscape, proportion-portrait, proportion-traditional-photo
 */
 type aspectRatio = 'proportion-square' | 'proportion-auto' | 'proportion-landscape' | 'proportion-portrait' | 'proportion-traditional-photo';

 /**
 * Options to backgroundColor:
 * background-blue
 */
 type backgroundColor = 'background-blue';

 export interface CreateClassesType { display?: display;  alignItems?: alignItems;  justifyContent?: justifyContent;  position?: position;  bottom?: bottom;  width?: width;  height?: height;  aspectRatio?: aspectRatio;  backgroundColor?: backgroundColor;  }