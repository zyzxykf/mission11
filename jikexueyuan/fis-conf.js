fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: '/home/nodeJs/public'
  })
});

fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
});

fis.match('*.{less,css}', {
  packTo: '/static/aio.css'
});

//给所有js css png文件rul地址添加hash值；
fis.match('*.{png}', {
  useHash: true
});

fis.match('baidu-logged.js', {
  useHash: true
});

// js压缩 fis-optimizer-uglify-js 插件进行压缩
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

// css压缩 fis-optimizer-clean-css 插件进行压缩
fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

// html压缩 invoke fis-optimizer-html-minifier
fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
});