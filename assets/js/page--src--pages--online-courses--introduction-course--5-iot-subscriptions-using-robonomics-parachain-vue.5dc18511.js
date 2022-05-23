(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"8mDm":function(t,e,o){"use strict";o.r(e);var s={metaInfo:function(){return this.$seo({title:"Lesson #5, IoT Subscriptions Using Robonomics Parachain",description:"You will learn how to buy an IoT subscription on Robonomics Parachain using real tokens of our network.",image:{url:"./og/introduction-course/5.png",width:1200,height:628},openGraph:{title:"Lesson #5, IoT Subscriptions Using Robonomics Parachain",type:"website"},twitter:{title:"Lesson #5, IoT Subscriptions Using Robonomics Parachain",type:"summary"}})}},n=o("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("LayoutCourse",{attrs:{courseId:"1",lessonId:"5"}},[o("section",{staticClass:"text__hyphened"},[o("section",{staticClass:"container__narrow"},[o("p",[t._v("The last lesson of  our introductory course is very likely the most difficult, because it will require some dexterity and patience from you. You will learn how to buy an IoT subscription on Robonomics Parachain using real tokens of our network.")])]),o("section",{staticClass:"container__narrow"},[o("h2",[t._v("What’s this about")]),o("p",[t._v("An IoT subscription is an access key to all functions related to changing the state of the digital twin of a cyber-physical system and storing information about it using the Polkadot / Kusama ecosystem. Owning one subscription guarantees that in each block of the blockchain there will be a place reserved for 1 transaction for the owner of the subscription.")]),o("p",[t._v("The main way to buy a subscription is to participate in the subscription auction, and therefore in this lesson you should get XRT tokens to make bids and submit transactions. More information about this process is also available on our wiki:\n        "),o("g-link",{attrs:{to:"https://wiki.robonomics.network/docs/en/get-subscription/"}},[t._v("https://wiki.robonomics.network/docs/en/get-subscription/")])],1)]),o("section",{staticClass:"container__reg"},[o("h2",[t._v("Instructions")]),o("List",{attrs:{type:"numbers"}},[o("li",[o("p",[t._v("Make sure you have XRT Robonomics Parachain tokens ("),o("g-link",{attrs:{to:"https://robonomics.network/xrt/"}},[t._v("about token")]),t._v("). If you do not have this, you have several options to get it:")],1),o("p",[t._v("a) "),o("g-link",{attrs:{to:"https://discord.com/invite/kFPqNktKrJ"}},[t._v("Request")]),t._v(" required number of tokens for the lesson if you successfully passed the tests after "),o("g-link",{attrs:{to:"/online-courses/introduction-course/2-at-the-intersection-of-cybernetics-and-economics"}},[t._v("Lesson 2")]),t._v(" and "),o("g-link",{attrs:{to:"/online-courses/introduction-course/4-robonomics-architecture"}},[t._v("Lesson 4")]),t._v(" and got more that 90% of correct answers (15 out of 17 and 10 out of 11, respectively).")],1),o("p",[t._v("b) Buy "),o("g-link",{attrs:{to:"https://robonomics.network/xrt/"}},[t._v("Polkadot compatible XRT")]),t._v(" on "),o("g-link",{attrs:{to:"https://trade.kraken.com/markets/kraken/xrt/usd"}},[t._v("Kraken")]),t._v(". Be careful if you're not familiar with cryptocurrency exchanges, remember that all purchases on cryptocurrency exchanges may have potential risks, buy only required amount of token to pass this lesson.")],1),o("p",[t._v("c) If you already have XRT but in ERC-20 format, use "),o("g-link",{attrs:{to:"https://dapp.robonomics.network/#/exodus"}},[t._v("Exodus process")]),t._v(". Do not forget to use your previously created polkadot.js account while submitting Exodus.")],1)]),o("li",[o("p",[t._v("IoT subscriptions are purchased through a regular auction process with the highest bidder obtaining a subscription. Before trying to participate in the auction, you should check if there are any available.")]),o("p",[o("g-link",{attrs:{to:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/chainstate"}},[t._v("Open Robonomics Polkadot/Substrate portal")]),t._v(" with Chain state menu.")],1),o("p",[t._v("Select "),o("code",[t._v("rws")]),t._v(" query with "),o("code",[t._v("auctionQueue()")]),t._v(" and press a ‘+’ button. You should see IDs of available auctions; remember the ID of one of them.")]),o("p",[t._v("Now, on the same Chain state menu, select "),o("code",[t._v("rws")]),t._v(" with "),o("code",[t._v("auction(u32): Option<PalletRobonomicsRwsAuctionLedger>")]),t._v(" and in "),o("code",[t._v("u32")]),t._v(" fields enter the remembered ID of auction. After pressing the ‘+’ button you will see information about an interesting auction. If the "),o("code",[t._v("winner")]),t._v(" field has "),o("code",[t._v("null")]),t._v(" value, then no one has this subscription and you can try to get it. If no auctions are shown or available, please contact us.")])]),o("li",[o("p",[t._v("Now you can make a bid with your XRT tokens. Go to the Developer -> Extrinsic menu and for the same polkadot.js account that you used in the previous lesson, choose "),o("code",[t._v("rws")]),t._v(" with "),o("code",[t._v("bid(index, amount)")]),t._v(". In the "),o("code",[t._v("index")]),t._v(" field enter the ID of the interesting auction. In the "),o("code",[t._v("amount")]),t._v(" field you should enter your number of tokens for the bid, converted to the “wieners” (1 XRT = 1 000 000 000 Wn). The minimal bid is 1 XRT.")]),o("p",[t._v("Submit the transaction and if you are lucky, you will get the IoT subscription. You can check that your Polkadot address owns the subscription through the same Chain state menu.")])]),o("li",[o("p",[t._v("The last step is to add devices for your IoT subscription. This simply means that you assign to your subscription additional Polkadot addresses that you or your devices can use to execute extrinsics (for example, to launch devices or to send device data to blockchain). Before starting, create a new account for Robonomics Parachain (guide on our wiki: "),o("g-link",{attrs:{to:"https://wiki.robonomics.network/docs/en/create-account-in-dapp/"}},[t._v("Create Account for Robonomics Parachain")]),t._v("), and call it ‘smart device’ for convenience.")],1),o("p",[t._v("Then, go to the Developer -> Extrinsic menu, and select "),o("code",[t._v("rws")]),t._v(" with "),o("code",[t._v("setDevices()")]),t._v(". In the devices list use the ‘Add item’ button to add devices and select a recently created account for smart devices. After that, submit the transaction.")]),o("p",[t._v("The device address should be added to the subscription. You can check it in the Chain state menu through query "),o("code",[t._v("rws")]),t._v(" with "),o("code",[t._v("devices()")]),t._v(" for your polkadot.js account that has the subscription.")])])])],1),o("Result",[t._v("\n      The lesson will be considered completed after the successful transaction of buying an IoT subscription and adding one device for it.\n    ")])],1)])}),[],!1,null,null,null);e.default=i.exports}}]);