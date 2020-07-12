 const lib1 = require('./lib1')


 console.log('Hello World')



 if (typeof window !== 'undefined')
     console.log('running in browser')
 else
     console.log('running in node')


 // document and window exist in browser not in node
 // global,module,process exist in node not in browser

 // globalThis-work in both js and nodejs(used to point out global ex window inbrowser)

 // in browser no need to import export like in nodejs
 // cdn-content delivery network

 console.log(lib1)

 lib1.sayHello('Harsh')

 setTimeout(() => {
     //it means that we can modify data in alread exported file and it will be reflectd as respective
     console.log(lib1)
 }, 2000)