// import "@babel/polyfill"; // 补充缺失的转换规则

const arr = [
	new Promise(() => {}),
	new Promise(() => {})
];

arr.map(item => {
	console.log(item);
});
