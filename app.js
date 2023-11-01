
function filterOutOdds() {
	const args = Array.from(arguments);
//	console.log(args);
	return args.filter(nums => nums % 2 === 0);
	/* 	var nums = Array.prototype.slice.call(arguments);
	return nums.filter(function(num) {
	  return num % 2 === 0
	}); */
  }

  const filterOdds = (...vals) => vals.filter(vals => vals % 2 === 0);
  
  const findMin = (...args) => {
	if (!args.length) return undefined;
  	return args.reduce((min, currVal) => {
		return currVal < min ? currVal : min;
	});
};

const mergeObjects = (obj1, obj2) => {
	return {...obj1, ...obj2};
};

const doubleAndReturnArgs = (arr, ...args) => {
	return [...arr, ...args.map(a => a *2) ];	
}

/* let val = [1,2,3,4,5,6,7,8,9];
function removeRandom(items) {
//	console.log(Math.floor(Math.random()*items.length));
	items.splice(Math.floor(Math.random()*items.length), 1);
} */
const removeRandom = (items) => {
	const ran = Math.floor(Math.random()*items.length);
	return [...items.slice(0,ran), ...items.slice(ran+1)];
}

const extend = (array1, array2) => {
	return [...array1, ...array2];
}

let testObj = {
	name: 'bob',
	job: 'owner',
}
let testObj2 = {
	pay: 40000,
	role: 'admin',
}

const addKeyVal = (obj, key, val) => {
	let addNewObj = {...obj};
	addNewObj[key] = val;
	return addNewObj;
}

const removeKey = (obj, key) => {
	let newObj = {...obj};
	delete newObj[key];
	/* 	let newObj = obj.filter((k) => {
		return k.key !== key;	
	}); */
	///console.log(newObj);
	return newObj;
}

const combine = (obj1, obj2) => {
	return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
	let upObj = {...obj};
	upObj[key] = val;
	return upObj;
}