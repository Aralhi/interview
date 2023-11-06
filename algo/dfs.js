/**
 * 深度优先遍历
 */

const tree = [{
  id: 1,
  name: '一级部门',
  children: [{
    id: 2,
    name: '二级部门1',
    children: [{
      id: 4,
      name: '三级部门1'
    }]
  }, {
    id: 3,
    name: '二级部门2',
    children: [{
      id: 5,
      name: '三级部门2'
    }]
  }]
}]

function dfs(tree, ids, deps) {
  if (!tree?.length) {
    return
  }
  tree.forEach(({id, name, children}) => {
    ids.push(id)
    deps.push(name)
    dfs(children, ids, deps)
  });
}
let ids = []
let deps = []
dfs(tree, ids, deps)
console.log('ids', ids)
console.log('deps', deps.join('-'))