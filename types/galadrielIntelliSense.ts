/**
 * Options to display:
 * panel-hidden, panel-block, panel-flex, panel-inline, panel-table, panel-grid, panel-inline-block, panel-inline-flex, panel-inline-table, panel-inline-grid, panel-flow-root, panel-contents, panel-list-item, panel-group-header, panel-group-footer, panel-group-column, panel-group-row, panel-table-row, panel-table-cell, panel-table-column, panel-table-caption
 */
 type display = 'panel-hidden' | 'panel-block' | 'panel-flex' | 'panel-inline' | 'panel-table' | 'panel-grid' | 'panel-inline-block' | 'panel-inline-flex' | 'panel-inline-table' | 'panel-inline-grid' | 'panel-flow-root' | 'panel-contents' | 'panel-list-item' | 'panel-group-header' | 'panel-group-footer' | 'panel-group-column' | 'panel-group-row' | 'panel-table-row' | 'panel-table-cell' | 'panel-table-column' | 'panel-table-caption';

 /**
 * Options to backgroundColor:
 * background-blue-
 */
 type backgroundColor = 'background-blue-';

 export interface CreateClassesType { display?: display;  backgroundColor?: backgroundColor;  }