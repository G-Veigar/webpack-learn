模块热替换

webpack提供一种不需要整体刷新的机制

module.hot.accept来监听模块的更新

有些loader已经内置支持了热替换

如style-loader，当css文件变动时，style-loader会将其 patch(修补) 到 <style> 标签中

vue-loader也支持热替换
