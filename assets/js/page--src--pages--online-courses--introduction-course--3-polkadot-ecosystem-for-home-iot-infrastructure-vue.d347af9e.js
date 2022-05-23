(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{lDZC:function(o,t,s){"use strict";s.r(t);var e={metaInfo:function(){return this.$seo({title:"Lesson #3, Polkadot Ecosystem for Home IoT Infrastructure",description:"In this lesson you will try to control a smart light bulb that works via Home Assistant which has additional Robonomics modules.",image:{url:"./og/introduction-course/3.png",width:1200,height:628},openGraph:{title:"Lesson #3, Polkadot Ecosystem for Home IoT Infrastructure",type:"website"},twitter:{title:"Lesson #3, Polkadot Ecosystem for Home IoT Infrastructure",type:"summary"}})}},n=s("KHd+"),i=Object(n.a)(e,(function(){var o=this,t=o.$createElement,s=o._self._c||t;return s("LayoutCourse",{attrs:{courseId:"1",lessonId:"3"}},[s("section",{staticClass:"text__hyphened"},[s("section",{staticClass:"container__narrow"},[s("p",[o._v("Lesson 2 explained the main principles of Robonomics and mentioned Polkadot / Kusama as a promising blockchain ecosystem platform for it’s implementation. It’s time to take a closer look at the functions of Robonomics Parachain as a part of the Polkadot ecosystem in the Kusama network. In particular, we would like to show how IoT subscriptions of the Robonomics Parachain work. During the first lesson, your address was added to the course IoT subscription, and you have already managed to use it twice: when you looked for your reflection in the black mirror and when handed in your test results.")])]),s("section",{staticClass:"container__narrow"},[s("h2",[o._v("What’s this about")]),s("p",[o._v("In this lesson you will try to control a smart light bulb that works via Home Assistant which has additional Robonomics modules. Your goal is to turn the bulb on/off using the standard Polkadot/Substrate interface on the Robonomics Parachain. The bulb is broadcasting on \n        "),s("g-link",{attrs:{to:"https://youtu.be/eEsTfaiUsKo"}},[o._v("YouTube")]),o._v(", so you can watch your result in real time. Also, a more detailed set of instructions regarding using an IoT subscription is available \n        "),s("g-link",{attrs:{to:"https://wiki.robonomics.network/docs/en/subscription-launch/"}},[o._v("on our wiki")]),o._v(".")],1)]),s("section",{staticClass:"container__reg"},[s("h2",[o._v("Instructions")]),s("List",{attrs:{type:"numbers"}},[s("li",[o._v("Open Robonomics "),s("g-link",{attrs:{to:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/extrinsics"}},[o._v("Polkadot/Substrate portal")]),o._v(". You should see the Extrinsics (functions in Polkadot ecosystem) menu.")],1),s("li",[o._v("In the first field pick the same polkadot.js account that you used in the previous lesson.")]),s("li",[o._v("In the second field pick extrinsics and choose "),s("code",[o._v("call(subscriptionId, call)")]),o._v(". This will allow you to dispatch a function call using IoT subscription.")]),s("li",[o._v("In the "),s("code",[o._v("subscriptionId")]),o._v(" field write this subscription's owner address: "),s("br"),s("code",[o._v("4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r")])]),s("li",[o._v("In the "),s("code",[o._v("call")]),o._v(" field choose "),s("code",[o._v("launch")]),o._v(" command. This will show you two more fields: "),s("code",[o._v("robot")]),o._v(" and "),s("code",[o._v("param")]),o._v(".")]),s("li",[o._v("In the "),s("code",[o._v("robot")]),o._v(" field write this address of smart bulb:"),s("br"),s("code",[o._v("4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9")])]),s("li",[o._v("In the "),s("code",[o._v("param")]),o._v(" field you need to specify 1 or 0 to turn on or off the bulb.")]),s("li",[o._v("Press the ‘Submit Transaction’ button. Do not forget to open the "),s("g-link",{attrs:{to:"https://youtu.be/eEsTfaiUsKo"}},[o._v("broadcast on YouTube")]),o._v(" before signing the transaction.")],1)])],1),s("Result",[o._v("\n      The lesson will be considered completed after sending a successful transaction and its appearance in the Polkadot explorer for your polkadot.js account.\n    ")]),s("section",{staticClass:"container__reg"},[s("h2",[o._v("Bonus")]),s("p",[o._v("You can try to repeat similar assembly and setup of the smart device on your own! We have a special wiki-guide how to connect a home IoT gateway to Robonomics:")]),s("p",[s("g-link",{attrs:{to:"https://wiki.robonomics.network/docs/en/home-assistant-begin"}},[o._v("https://wiki.robonomics.network/docs/en/home-assistant-begin")])],1)])],1)])}),[],!1,null,null,null);t.default=i.exports}}]);