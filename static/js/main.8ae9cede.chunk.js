(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(10),u=n(6),s=n(1),m=n(2),d=n(4),f=n(3),p=n(5),h=(n(17),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"d-flex app-header"},o.a.createElement("h1",{className:"main-title"},"Todo List"),o.a.createElement("p",{className:"text-secondary"},o.a.createElement("span",{className:"badge badge-secondary"},t)," more to do, ",o.a.createElement("span",{className:"badge badge-success"},n)," done"))}),b=(n(18),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={input:""},n.onSearchChange=function(e){var t=e.target.value;n.setState({input:t}),n.props.onSearchChange(t)},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{className:"form-control search-panel",placeholder:"type to search",value:this.state.input,onChange:this.onSearchChange})}}]),t}(a.Component)),g=n(11),v=(n(19),function(e){var t=e.label,n=e.onDeleted,a=e.onImportant,r=e.onDone,c=e.important,l=["todo-list-item"];return e.done&&l.push("done"),c&&l.push("important"),o.a.createElement("span",{className:l.join(" ")},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}),y=(n(20),function(e){var t=e.todos,n=e.onDeleted,a=e.onImportant,r=e.onDone,c=t.map((function(e){var t=e.id,c=Object(g.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(v,Object.assign({},c,{onDeleted:function(){return n(t)},onImportant:function(){return a(t)},onDone:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},c)}),j=(n(21),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map((function(e){var a=e.name,r=e.label,c=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){return n(a)}},r)}));return o.a.createElement("div",{className:"btn-group",role:"group"},a)}}]),t}(a.Component)),E=(n(22),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={input:""},n.onInputChange=function(e){n.setState({input:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onAdded(n.state.input),n.setState({input:""})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"mt-3 add-task-panel d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control mr-2 add-task-input",onChange:this.onInputChange,placeholder:"Type task here",value:this.state.input}),o.a.createElement("button",{className:"btn btn-outline-info"},"Add Task"))}}]),t}(a.Component)),O=(n(23),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,n.state={todoData:[n.createTodoItem("Get Some Coffee"),n.createTodoItem("Enjoy The Day"),n.createTodoItem("Crack The Code")],term:"",filter:"all"},n.deleteItem=function(e){n.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(u.a)(n.slice(0,a)),Object(u.a)(n.slice(a+1)))}}))},n.addItem=function(e){var t=n.createTodoItem(e);n.setState((function(e){var n=e.todoData;return{todoData:[].concat(Object(u.a)(n),[t])}}))},n.onToggleDone=function(e){n.setState((function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"done")}}))},n.onToggleImportant=function(e){n.setState((function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"important")}}))},n.onSearchChange=function(e){n.setState({term:e})},n.onFilterChange=function(e){n.setState({filter:e})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,done:!1,important:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=e[a],r=Object(i.a)({},o,Object(l.a)({},n,!o[n]));return[].concat(Object(u.a)(e.slice(0,a)),[r],Object(u.a)(e.slice(a+1)))}},{key:"search",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().includes(t.toLowerCase())}))}},{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=this.filter(this.search(t,n),a),c=t.filter((function(e){return e.done})).length,l=t.length-c;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(h,{toDo:l,done:c}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(b,{onSearchChange:this.onSearchChange}),o.a.createElement(j,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(y,{todos:r,onDeleted:this.deleteItem,onImportant:this.onToggleImportant,onDone:this.onToggleDone}),o.a.createElement(E,{onAdded:this.addItem}))}}]),t}(a.Component));c.a.render(o.a.createElement(O,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.8ae9cede.chunk.js.map