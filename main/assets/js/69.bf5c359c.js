(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{641:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"join-the-public-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#join-the-public-testnet"}},[t._v("#")]),t._v(" Join the Public Testnet")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Current Testnet")]),t._v(" "),a("p",[t._v("See the "),a("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repo"),a("OutboundLink")],1),t._v(" for\ninformation on the latest testnet, including the correct version\nof Gaia to use and details about the genesis file.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[a("strong",[t._v("You need to "),a("RouterLink",{attrs:{to:"/gaia-tutorials/installation.html"}},[t._v("install gaia")]),t._v(" before you go further")],1)])]),t._v(" "),a("h2",{attrs:{id:"starting-a-new-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-a-new-node"}},[t._v("#")]),t._v(" Starting a New Node")]),t._v(" "),a("blockquote",[a("p",[t._v("NOTE: If you ran a full node on a previous testnet, please skip to "),a("a",{attrs:{href:"#upgrading-from-previous-testnet"}},[t._v("Upgrading From Previous Testnet")]),t._v(".")])]),t._v(" "),a("p",[t._v("To start a new node, the mainnet instructions apply:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/gaia-tutorials/join-mainnet.html"}},[t._v("Join the mainnet")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/validators/validator-setup.html"}},[t._v("Deploy a validator")])],1)]),t._v(" "),a("p",[t._v("The only difference is the SDK version and genesis file. See the "),a("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repo"),a("OutboundLink")],1),t._v(" for information on testnets, including the correct version of the Cosmos-SDK to use and details about the genesis file.")]),t._v(" "),a("h2",{attrs:{id:"upgrading-your-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-your-node"}},[t._v("#")]),t._v(" Upgrading Your Node")]),t._v(" "),a("p",[t._v("These instructions are for full nodes that have ran on previous versions of and would like to upgrade to the latest testnet.")]),t._v(" "),a("h3",{attrs:{id:"reset-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-data"}},[t._v("#")]),t._v(" Reset Data")]),t._v(" "),a("p",[t._v("First, remove the outdated files and reset the data.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gJEhPTUUvLmdhaWEvY29uZmlnL2FkZHJib29rLmpzb24gJEhPTUUvLmdhaWEvY29uZmlnL2dlbmVzaXMuanNvbgpnYWlhZCB1bnNhZmUtcmVzZXQtYWxsCg=="}}),t._v(" "),a("p",[t._v("Your node is now in a pristine state while keeping the original "),a("code",[t._v("priv_validator.json")]),t._v(" and "),a("code",[t._v("config.toml")]),t._v(". If you had any sentry nodes or full nodes setup before,\nyour node will still try to connect to them, but may fail if they haven't also\nbeen upgraded.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),a("p",[t._v("Make sure that every node has a unique "),a("code",[t._v("priv_validator.json")]),t._v(". Do not copy the "),a("code",[t._v("priv_validator.json")]),t._v(" from an old node to multiple new nodes. Running two nodes with the same "),a("code",[t._v("priv_validator.json")]),t._v(" will cause you to double sign.")])]),t._v(" "),a("h3",{attrs:{id:"software-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-upgrade"}},[t._v("#")]),t._v(" Software Upgrade")]),t._v(" "),a("p",[t._v("Now it is time to upgrade the software:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvZ2FpYS5naXQKY2QgZ2FpYQpnaXQgZmV0Y2ggLS1hbGwgJmFtcDsmYW1wOyBnaXQgY2hlY2tvdXQgbWFzdGVyCm1ha2UgaW5zdGFsbAo="}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("em",[t._v("NOTE")]),t._v(": If you have issues at this step, please check that you have the latest stable version of GO installed.")])]),t._v(" "),a("p",[t._v("Note we use "),a("code",[t._v("master")]),t._v(" here since it contains the latest stable release.\nSee the "),a("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repo"),a("OutboundLink")],1),t._v(" for details on which version is needed for which testnet, and the "),a("a",{attrs:{href:"https://github.com/cosmos/gaia/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gaia release page"),a("OutboundLink")],1),t._v(" for details on each release.")]),t._v(" "),a("p",[t._v("Your full node has been cleanly upgraded!")])],1)}),[],!1,null,null,null);e.default=o.exports}}]);